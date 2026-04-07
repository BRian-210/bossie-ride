'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon'
import { notify } from '@/lib/notify'
import { setAuthToken } from '@/lib/authClient'

function normalizePhone(value: string): string {
  let cleaned = value.replace(/[\s()-]/g, '')
  if (cleaned.startsWith('0')) {
    cleaned = '+254' + cleaned.slice(1)
  } else if (!cleaned.startsWith('+')) {
    cleaned = '+254' + cleaned
  }
  return cleaned
}

function looksLikePhone(value: string): boolean {
  const cleaned = value.replace(/[\s()-]/g, '')
  return /^(\+254|0)?[17]\d{8}$/.test(cleaned)
}

function isValidIdentifier(value: string): boolean {
  const trimmed = value.trim()
  if (!trimmed) return false
  return (
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ||
    looksLikePhone(trimmed)
  )
}

export default function LoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const returnTo = useMemo(() => {
    if (typeof window === 'undefined') return 'ride-request'
    const params = new URLSearchParams(window.location.search)
    return params.get('returnTo') || 'ride-request'
  }, [])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const trimmedId = identifier.trim()
    if (!trimmedId) {
      setError('Please enter your email or phone number')
      return
    }
    if (!password) {
      setError('Please enter your password')
      return
    }
    if (!isValidIdentifier(trimmedId)) {
      setError('Please enter a valid email or Kenyan phone number')
      return
    }

    setIsSubmitting(true)

    try {
      let payloadIdentifier = trimmedId
      if (looksLikePhone(trimmedId)) {
        payloadIdentifier = normalizePhone(trimmedId)
      }

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: payloadIdentifier,
          password,
        }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        let msg = data?.error || `Login failed (${res.status})`
        if (msg.toLowerCase().includes('not found') || msg.toLowerCase().includes('invalid')) {
          msg = 'Incorrect email/phone or password. Try again or sign up.'
        }
        throw new Error(msg)
      }

      setAuthToken(data.token)

      await notify({
        title: 'Welcome back!',
        message: 'You are now signed in to Bossie Ride.',
        level: 'success',
        useBrowserNotification: true,
      })

      window.location.href = `./${returnTo}`
    } catch (err: any) {
      const msg = err?.message || 'Login failed. Please try again.'
      setError(msg)
      notify({ title: 'Login Failed', message: msg, level: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <Card className="shadow-card border-amber-200/40">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Log in to request rides, track trips, and pay easily with M-Pesa
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Identifier (email or phone) */}
            <div className="space-y-2">
              <Label htmlFor="identifier">Email or Phone Number</Label>
              <div className="relative">
                <Input
                  id="identifier"
                  type="text"
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value)
                    setError('')
                  }}
                  placeholder="+254 712 345 678 or @example.com"
                  autoComplete="username webauthn"
                  className="pr-10"
                />
                {looksLikePhone(identifier) && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    +254
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Use your phone number (recommended) or email
              </p>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a
                  href="./forgot-password"
                  className="text-xs text-amber-700 hover:text-amber-800 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <SafeIcon name={showPassword ? 'EyeOff' : 'Eye'} size={18} />
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm">
                {error}
                {error.toLowerCase().includes('not found') && (
                  <div className="mt-2">
                    <a
                      href={`./signup?returnTo=${encodeURIComponent(returnTo)}`}
                      className="text-primary font-medium hover:underline"
                    >
                      Create a new account →
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              size="lg"
              disabled={isSubmitting || !identifier.trim() || !password}
            >
              {isSubmitting ? (
                <>
                  <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <SafeIcon name="LogIn" size={18} className="mr-2" />
                  Log In
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            New to Bossie Ride?{' '}
            <a
              href={`./signup?returnTo=${encodeURIComponent(returnTo)}`}
              className="text-amber-700 font-medium hover:underline"
            >
              Create an account
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}