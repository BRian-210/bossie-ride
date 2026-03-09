import type { APIRoute } from 'astro'

import connectDB from '@/lib/db'
import User from '@/lib/models/User'
import { getBearerToken, verifyAuthToken } from '@/lib/auth'

export const GET: APIRoute = async ({ request }) => {
  const token = getBearerToken(request)
  if (!token) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  let payload: { sub: string }
  try {
    payload = verifyAuthToken(token)
  } catch {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  await connectDB()
  const user = await User.findById(payload.sub).lean()
  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  return new Response(
    JSON.stringify({
      user: {
        id: String(user._id),
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        createdAt: user.createdAt,
      },
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}

