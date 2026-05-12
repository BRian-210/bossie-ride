import type { APIRoute } from 'astro'
import connectDB from '@/lib/db'
import User from '@/lib/models/User'
import { signAuthToken } from '@/lib/auth'

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const error = url.searchParams.get('error')

  if (error) {
    return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=oauth_failed`)
  }

  if (!code) {
    return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=no_code`)
  }

  try {
    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.BASE_URL || 'http://localhost:4321'}/api/auth/google/callback`,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', tokenData)
      return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=token_exchange_failed`)
    }

    // Get user info
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    })

    const userData = await userResponse.json()

    if (!userResponse.ok) {
      console.error('User info fetch failed:', userData)
      return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=user_info_failed`)
    }

    // Connect to database
    await connectDB()

    // Check if user exists with this Google ID
    let user = await User.findOne({ 'oauthProviders.google.id': userData.id })

    if (!user) {
      // Check if user exists with this email
      user = await User.findOne({ email: userData.email })

      if (user) {
        // Link Google account to existing user
        user.oauthProviders = user.oauthProviders || {}
        user.oauthProviders.google = {
          id: userData.id,
          email: userData.email,
        }
        await user.save()
      } else {
        // Create new user
        user = await User.create({
          fullName: userData.name,
          email: userData.email,
          oauthProviders: {
            google: {
              id: userData.id,
              email: userData.email,
            },
          },
        })
      }
    }

    // Generate JWT token
    const token = signAuthToken(String(user._id))

    // Redirect to success page with token
    return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/?token=${token}&oauth=google`)

  } catch (err) {
    console.error('OAuth callback error:', err)
    return redirect(`${process.env.BASE_URL || 'http://localhost:4321'}/login?error=server_error`)
  }
}