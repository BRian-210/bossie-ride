function requiredEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`${name} is not set`)
  return v
}

export function getDarajaBaseUrl() {
  const env = (process.env.DARAJA_ENV || 'sandbox').toLowerCase()
  if (process.env.DARAJA_BASE_URL) return process.env.DARAJA_BASE_URL
  return env === 'production' ? 'https://api.safaricom.co.ke' : 'https://sandbox.safaricom.co.ke'
}

export async function getDarajaAccessToken() {
  const key = requiredEnv('DARAJA_CONSUMER_KEY')
  const secret = requiredEnv('DARAJA_CONSUMER_SECRET')

  const auth = Buffer.from(`${key}:${secret}`).toString('base64')
  const url = `${getDarajaBaseUrl()}/oauth/v1/generate?grant_type=client_credentials`
  const res = await fetch(url, { headers: { Authorization: `Basic ${auth}` } })
  const data = await res.json().catch(() => null)
  if (!res.ok || !data?.access_token) {
    throw new Error(data?.errorMessage || data?.error || `Daraja token failed (${res.status})`)
  }
  return String(data.access_token)
}

export function formatDarajaTimestamp(date = new Date()) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    date.getFullYear() +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds())
  )
}

export function normalizeKenyanMsisdn(phone: string) {
  const raw = phone.trim().replace(/\s+/g, '')
  if (raw.startsWith('+')) return raw.slice(1)
  if (raw.startsWith('0')) return `254${raw.slice(1)}`
  if (raw.startsWith('254')) return raw
  return raw
}

export function darajaStkPassword(shortCode: string, passkey: string, timestamp: string) {
  return Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64')
}

export type StkPushResponse = {
  MerchantRequestID: string
  CheckoutRequestID: string
  ResponseCode: string
  ResponseDescription: string
  CustomerMessage: string
}

export async function requestStkPush(input: {
  amountKsh: number
  phoneNumber: string
  accountReference: string
  transactionDesc: string
}) {
  const accessToken = await getDarajaAccessToken()
  const shortCode = requiredEnv('DARAJA_SHORTCODE')
  const passkey = requiredEnv('DARAJA_PASSKEY')
  const callbackUrl = requiredEnv('DARAJA_CALLBACK_URL')

  const timestamp = formatDarajaTimestamp()
  const password = darajaStkPassword(shortCode, passkey, timestamp)
  const msisdn = normalizeKenyanMsisdn(input.phoneNumber)

  const payload = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: process.env.DARAJA_TRANSACTION_TYPE || 'CustomerPayBillOnline',
    Amount: Math.round(input.amountKsh),
    PartyA: msisdn,
    PartyB: shortCode,
    PhoneNumber: msisdn,
    CallBackURL: callbackUrl,
    AccountReference: input.accountReference,
    TransactionDesc: input.transactionDesc,
  }

  const url = `${getDarajaBaseUrl()}/mpesa/stkpush/v1/processrequest`
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await res.json().catch(() => null)) as any
  if (!res.ok) {
    throw new Error(data?.errorMessage || data?.error || `STK push failed (${res.status})`)
  }
  if (!data?.CheckoutRequestID) {
    throw new Error('STK push failed: missing CheckoutRequestID')
  }
  return data as StkPushResponse
}

export type StkCallback = {
  MerchantRequestID: string
  CheckoutRequestID: string
  ResultCode: number
  ResultDesc: string
  CallbackMetadata?: {
    Item: Array<{ Name: string; Value?: any }>
  }
}

export function parseStkCallback(body: any): StkCallback | null {
  const cb = body?.Body?.stkCallback
  if (!cb?.CheckoutRequestID) return null
  return cb as StkCallback
}

export function readCallbackItem(cb: StkCallback, name: string) {
  const items = cb.CallbackMetadata?.Item || []
  return items.find((i) => i.Name === name)?.Value
}

