import { clearAuthToken, fetchAuthedJson, getAuthToken } from '@/lib/authClient'

export async function requireAuth(returnTo: string) {
  if (typeof window === 'undefined') return null

  const token = getAuthToken()
  if (!token) {
    window.location.href = `./signup?returnTo=${encodeURIComponent(returnTo)}`
    return null
  }

  try {
    const data = await fetchAuthedJson<{ user: { id: string; fullName: string; email?: string; phone?: string } }>(
      './api/auth/me',
      { method: 'GET' }
    )
    return data.user
  } catch {
    clearAuthToken()
    window.location.href = `./signup?returnTo=${encodeURIComponent(returnTo)}`
    return null
  }
}

