'use client'

import { useEffect } from 'react'
import { setAuthToken } from '@/lib/authClient'
import { notify } from '@/lib/notify'

export default function OAuthCallbackHandler(): null {
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search)
      const token = urlParams.get('token')
      const oauth = urlParams.get('oauth')
      const error = urlParams.get('error')

      if (error) {
        let errorMessage = 'Authentication failed'
        switch (error) {
          case 'oauth_failed':
            errorMessage = 'OAuth authentication failed'
            break
          case 'no_code':
            errorMessage = 'Authorization code not received'
            break
          case 'token_exchange_failed':
            errorMessage = 'Failed to exchange authorization code'
            break
          case 'user_info_failed':
            errorMessage = 'Failed to get user information'
            break
          case 'invalid_token':
            errorMessage = 'Invalid token received'
            break
          case 'server_error':
            errorMessage = 'Server error during authentication'
            break
        }
        notify({
          title: 'Authentication Failed',
          message: errorMessage,
          level: 'error'
        })
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname)
        return
      }

      if (token && oauth) {
        // Set the auth token
        setAuthToken(token)

        // Show success message
        const provider = oauth === 'google' ? 'Google' : oauth === 'apple' ? 'Apple' : 'OAuth provider'
        notify({
          title: 'Signed in successfully!',
          message: `Welcome back! You signed in with ${provider}.`,
          level: 'success',
          useBrowserNotification: true,
        })

        // Clean up URL parameters
        window.history.replaceState({}, document.title, window.location.pathname)

        // Redirect to ride request or intended page
        const returnTo = urlParams.get('returnTo') || 'ride-request'
        window.location.href = `/${returnTo}`
      }
    }

    handleOAuthCallback()
  }, [])

  return null // This component doesn't render anything
}