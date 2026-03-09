import type { APIRoute } from 'astro'
import bcrypt from 'bcryptjs'

import connectDB from '@/lib/db'
import User from '@/lib/models/User'
import { signAuthToken } from '@/lib/auth'

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null)
  if (!body) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 })
  }

  const identifier = String(body.identifier || '').trim()
  const password = String(body.password || '')

  if (!identifier) {
    return new Response(JSON.stringify({ error: 'Email or phone is required' }), { status: 400 })
  }
  if (!password) {
    return new Response(JSON.stringify({ error: 'Password is required' }), { status: 400 })
  }

  await connectDB()

  const query = looksLikeEmail(identifier)
    ? { email: identifier.toLowerCase() }
    : { phone: identifier }

  const user = await User.findOne(query)
  if (!user) {
    return new Response(JSON.stringify({ error: 'Account not found. Please sign up.' }), { status: 404 })
  }

  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 })
  }

  const token = signAuthToken(String(user._id))
  return new Response(
    JSON.stringify({
      token,
      user: { id: String(user._id), fullName: user.fullName, email: user.email, phone: user.phone },
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}

