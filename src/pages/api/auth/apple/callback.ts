import type { APIRoute } from 'astro'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/db'
import User from '@/lib/models/User'
import { signAuthToken } from '@/lib/auth'

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData()
  const code = formData.get('code') as string
  const idToken = formData.get('id_token') as string
  const error = formData.get('error') as string

  if (error) {
    return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=oauth_failed`)
  }

  if (!code || !idToken) {
    return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=no_code`)
  }

  try {
    // Decode the ID token (Apple uses JWT)
    const decoded = jwt.decode(idToken) as any

    if (!decoded || !decoded.sub) {
      return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=invalid_token`)
    }

    const appleId = decoded.sub
    const email = decoded.email || ''

    // Connect to database
    await connectDB()

    // Check if user exists with this Apple ID
    let user = await User.findOne({ 'oauthProviders.apple.id': appleId })

    if (!user) {
      // Check if user exists with this email
      user = await User.findOne({ email })

      if (user) {
        // Link Apple account to existing user
        user.oauthProviders = user.oauthProviders || {}
        user.oauthProviders.apple = {
          id: appleId,
          email,
        }
        await user.save()
      } else {
        // Create new user (Apple doesn't always provide name)
        user = await User.create({
          fullName: 'Apple User', // Could be updated later
          email,
          oauthProviders: {
            apple: {
              id: appleId,
              email,
            },
          },
        })
      }
    }

    // Generate JWT token
    const token = signAuthToken(String(user._id))

    // Redirect to success page with token
    return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/?token=${token}&oauth=apple`)

  } catch (err) {
    console.error('Apple OAuth callback error:', err)
    return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=server_error`)
  }
}