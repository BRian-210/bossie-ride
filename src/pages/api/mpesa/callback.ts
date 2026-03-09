import type { APIRoute } from 'astro'

import connectDB from '@/lib/db'
import Transaction from '@/lib/models/Transaction'
import { parseStkCallback, readCallbackItem } from '@/lib/daraja'

function accepted() {
  return new Response(JSON.stringify({ ResultCode: 0, ResultDesc: 'Accepted' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const POST: APIRoute = async ({ request, url }) => {
  // Optional callback token check (set DARAJA_CALLBACK_TOKEN and include ?token=... in your callback URL)
  const expected = process.env.DARAJA_CALLBACK_TOKEN
  if (expected) {
    const token = url.searchParams.get('token')
    if (token !== expected) return accepted()
  }

  const body = await request.json().catch(() => null)
  const cb = parseStkCallback(body)
  if (!cb) return accepted()

  await connectDB()

  const tx = await Transaction.findOne({ mpesaCheckoutRequestId: cb.CheckoutRequestID })
  if (!tx) return accepted()

  tx.mpesaResultCode = cb.ResultCode
  tx.mpesaResultDesc = cb.ResultDesc

  if (cb.ResultCode === 0) {
    const receipt = readCallbackItem(cb, 'MpesaReceiptNumber')
    const phone = readCallbackItem(cb, 'PhoneNumber')
    const amount = readCallbackItem(cb, 'Amount')

    tx.status = 'success'
    if (receipt) tx.receipt = String(receipt)
    if (phone) tx.mpesaPhoneNumber = String(phone)
    if (amount && typeof amount === 'number') tx.amountKsh = amount
  } else {
    tx.status = 'failed'
  }

  await tx.save()
  return accepted()
}

