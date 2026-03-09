'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon'
import { notify } from '@/lib/notify'
import { setAuthToken } from '@/lib/authClient'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidPhone(value: string) {
  return /^[+]?[\d\s()-]{7,}$/.test(value)
}

export default function LoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const returnTo = useMemo(() => {
    if (typeof window === 'undefined') return 'ride-request'
    const params = new URLSearchParams(window.location.search)
    return params.get('returnTo') || 'profile'
  }, [])

  const isValid = isValidEmail(identifier) || isValidPhone(identifier)

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid) {
      setError('Enter a valid email or phone number.')
      return
    }
    if (!password) {
      setError('Enter your password.')
      return
    }

    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('./api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: identifier.trim(), password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || `Login failed (${res.status})`)
      }
      setAuthToken(data.token)
      await notify({
        title: 'Welcome back',
        message: 'You are signed in.',
        level: 'success',
        useBrowserNotification: true,
      })
      if (typeof window !== 'undefined') window.location.href = `./${returnTo}`
    } catch (e: any) {
      const msg = e?.message || 'Login failed'
      setError(msg)
      await notify({ title: 'Login failed', message: msg, level: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Log in to request rides and view your profile.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="identifier">Email or phone</Label>
              <Input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(event) => {
                  setIdentifier(event.target.value)
                  setError('')
                }}
                placeholder="jane.doe@email.com or +254700112233"
                autoComplete="username"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setError('')
                }}
                placeholder="Your password"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="space-y-2">
                <p className="text-sm text-destructive">{error}</p>
                {error.toLowerCase().includes('sign up') && (
                  <a className="text-sm font-medium text-primary hover:underline" href={`./signup?returnTo=${encodeURIComponent(returnTo)}`}>
                    Create an account
                  </a>
                )}
              </div>
            )}

            <Button type="submit" className="w-full" size="lg" disabled={!identifier || !password || isSubmitting}>
              {isSubmitting ? (
                <>
                  <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <SafeIcon name="LogIn" size={18} className="mr-2" />
                  Log in
                </>
              )}
            </Button>
          </form>

          <div className="mt-4 text-sm text-muted-foreground">
            New here?{' '}
            <a className="text-primary font-medium hover:underline" href={`./signup?returnTo=${encodeURIComponent(returnTo)}`}>
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
