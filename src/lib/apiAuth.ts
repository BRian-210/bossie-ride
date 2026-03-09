import connectDB from '@/lib/db'
import User from '@/lib/models/User'
import { getBearerToken, verifyAuthToken } from '@/lib/auth'

export async function requireUserId(request: Request) {
  const token = getBearerToken(request)
  if (!token) throw new Error('Unauthorized')

  let payload: { sub: string }
  try {
    payload = verifyAuthToken(token)
  } catch {
    throw new Error('Unauthorized')
  }

  await connectDB()
  const user = await User.findById(payload.sub).select('_id').lean()
  if (!user) throw new Error('Unauthorized')
  return String(user._id)
}

