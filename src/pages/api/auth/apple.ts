import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request, redirect }) => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:4321'
  const clientId = process.env.APPLE_CLIENT_ID || 'your_apple_client_id_here'
  const redirectUri = `${baseUrl}/api/auth/apple/callback`

  const scope = 'name email'
  const responseType = 'code id_token'
  const state = Math.random().toString(36).substring(7)

  const authUrl = `https://appleid.apple.com/auth/authorize?` +
    `client_id=${encodeURIComponent(clientId)}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `scope=${encodeURIComponent(scope)}&` +
    `response_type=${responseType}&` +
    `state=${state}&` +
    `response_mode=form_post`

  return new Response(null, {
    status: 302,
    headers: {
      Location: authUrl,
    },
  })
}