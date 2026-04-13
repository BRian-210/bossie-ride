import type { APIRoute } from 'astro'
import bcrypt from 'bcryptjs'

import connectDB from '@/lib/db'
import User from '@/lib/models/User'
import { signAuthToken } from '@/lib/auth'

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch((): null => null)
  if (!body) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 })
  }

  const email = String(body.email || '').trim().toLowerCase()
  const password = String(body.password || '')

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 })
  }
  if (!password) {
    return new Response(JSON.stringify({ error: 'Password is required' }), { status: 400 })
  }

  await connectDB()

  const user = await User.findOne({ email })
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
      user: { id: String(user._id), fullName: user.fullName, email: user.email },
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}

