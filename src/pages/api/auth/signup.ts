import type { APIRoute } from 'astro'
import bcrypt from 'bcryptjs'

import connectDB from '@/lib/db'
import User from '@/lib/models/User'
import { signAuthToken } from '@/lib/auth'

function normalizeEmail(email?: string) {
  const e = (email || '').trim().toLowerCase()
  return e.length ? e : undefined
}

function normalizePhone(phone?: string) {
  const p = (phone || '').trim()
  return p.length ? p : undefined
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null)
  if (!body) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 })
  }

  const fullName = String(body.fullName || '').trim()
  const email = normalizeEmail(body.email)
  const phone = normalizePhone(body.phone)
  const password = String(body.password || '')

  if (!fullName) {
    return new Response(JSON.stringify({ error: 'Full name is required' }), { status: 400 })
  }
  if (!email && !phone) {
    return new Response(JSON.stringify({ error: 'Email or phone is required' }), { status: 400 })
  }
  if (password.length < 6) {
    return new Response(JSON.stringify({ error: 'Password must be at least 6 characters' }), { status: 400 })
  }

  await connectDB()

  const existing = await User.findOne({
    $or: [
      ...(email ? [{ email }] : []),
      ...(phone ? [{ phone }] : []),
    ],
  })

  if (existing) {
    return new Response(JSON.stringify({ error: 'Account already exists. Please log in.' }), { status: 409 })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = await User.create({
    fullName,
    email,
    phone,
    passwordHash,
  })

  const token = signAuthToken(String(user._id))

  return new Response(
    JSON.stringify({
      token,
      user: { id: String(user._id), fullName: user.fullName, email: user.email, phone: user.phone },
    }),
    { status: 201, headers: { 'Content-Type': 'application/json' } }
  )
}

