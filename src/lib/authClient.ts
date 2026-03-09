export const AUTH_TOKEN_KEY = 'bossieRideAuthToken'

export function getAuthToken() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function setAuthToken(token: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function clearAuthToken() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function withAuthHeaders(init?: RequestInit): RequestInit {
  const token = getAuthToken()
  const headers = new Headers(init?.headers || {})
  if (token) headers.set('Authorization', `Bearer ${token}`)
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
  return { ...init, headers }
}

export async function fetchAuthedJson<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const res = await fetch(input, withAuthHeaders(init))
  const text = await res.text()
  const data = text ? JSON.parse(text) : null
  if (!res.ok) {
    const msg = (data && (data.error || data.message)) || `Request failed (${res.status})`
    throw new Error(msg)
  }
  return data as T
}

