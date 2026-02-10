'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon'

type LoginStep = 'identify' | 'verify'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isValidPhone(value: string) {
  return /^[+]?[\d\s()-]{7,}$/.test(value)
}

export default function LoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState<LoginStep>('identify')
  const [error, setError] = useState('')

  const returnTo = useMemo(() => {
    if (typeof window === 'undefined') return 'ride-request'
    const params = new URLSearchParams(window.location.search)
    return params.get('returnTo') || 'profile'
  }, [])

  const isValid = isValidEmail(identifier) || isValidPhone(identifier)

  const handleRequestCode = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid) {
      setError('Enter a valid email or phone number.')
      return
    }
    setError('')
    setStep('verify')
  }

  const handleVerifyCode = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^\d{4,6}$/.test(code)) {
      setError('Enter the 4-6 digit code sent to you.')
      return
    }
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('riderAuth', 'true')
      sessionStorage.setItem('riderContact', identifier)
      sessionStorage.setItem('riderAuthMethod', isValidEmail(identifier) ? 'email' : 'phone')
      window.location.href = `./${returnTo}`
    }
  }

  const handleAppleLogin = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('riderAuth', 'true')
      sessionStorage.setItem('riderContact', 'apple@signin')
      sessionStorage.setItem('riderAuthMethod', 'apple')
      window.location.href = `./${returnTo}`
    }
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Log in with your email or phone number to request a ride.</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 'identify' ? (
            <form className="space-y-4" onSubmit={handleRequestCode}>
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
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={!identifier}>
                <SafeIcon name="Send" size={18} className="mr-2" />
                Request Code
              </Button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleVerifyCode}>
              <div className="space-y-2">
                <Label htmlFor="code">Verification code</Label>
                <Input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(event) => {
                    setCode(event.target.value)
                    setError('')
                  }}
                  placeholder="Enter code"
                  autoComplete="one-time-code"
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <p className="text-xs text-muted-foreground">
                  Code sent to {identifier}. Use any 4-6 digits for this demo.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={!code}>
                <SafeIcon name="CheckCircle" size={18} className="mr-2" />
                Verify &amp; Continue
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => {
                  setStep('identify')
                  setCode('')
                  setError('')
                }}
              >
                Use a different email or phone
              </Button>
            </form>
          )}

          <div className="flex items-center gap-3 py-4">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground uppercase">or</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <Button type="button" variant="secondary" className="w-full" size="lg" onClick={handleAppleLogin}>
            <SafeIcon name="Apple" size={18} className="mr-2" />
            Continue with Apple
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
