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

export default function SignupForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const returnTo = useMemo(() => {
    if (typeof window === 'undefined') return 'ride-request'
    const params = new URLSearchParams(window.location.search)
    return params.get('returnTo') || 'ride-request'
  }, [])

  const canSubmit =
    fullName.trim().length > 1 &&
    password.length >= 6 &&
    ((email.trim().length > 0 && isValidEmail(email.trim())) || (phone.trim().length > 0 && isValidPhone(phone.trim())))

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    if (!canSubmit) {
      setError('Please fill in your name, a valid email/phone, and a password (6+ chars).')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('./api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim() ? email.trim() : undefined,
          phone: phone.trim() ? phone.trim() : undefined,
          password,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || `Sign up failed (${res.status})`)
      }

      setAuthToken(data.token)
      await notify({
        title: 'Account created',
        message: 'You can now request rides with Bossie Ride.',
        level: 'success',
        useBrowserNotification: true,
      })

      if (typeof window !== 'undefined') window.location.href = `./${returnTo}`
    } catch (e: any) {
      setError(e?.message || 'Sign up failed')
      await notify({ title: 'Sign up failed', message: e?.message || 'Try again.', level: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>Sign up to request rides, track trips, and manage payments.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  setError('')
                }}
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="jane.doe@email.com"
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                  setError('')
                }}
                placeholder="+254700112233"
                autoComplete="tel"
              />
              <p className="text-xs text-muted-foreground">Provide either email or phone (or both).</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="At least 6 characters"
                autoComplete="new-password"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" className="w-full" size="lg" disabled={!canSubmit || isSubmitting}>
              {isSubmitting ? (
                <>
                  <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  <SafeIcon name="UserPlus" size={18} className="mr-2" />
                  Sign up
                </>
              )}
            </Button>
          </form>

          <div className="mt-4 text-sm text-muted-foreground">
            Already have an account?{' '}
            <a className="text-primary font-medium hover:underline" href={`./login?returnTo=${encodeURIComponent(returnTo)}`}>
              Log in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

