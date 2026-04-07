'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SafeIcon from '@/components/common/SafeIcon'
import { notify } from '@/lib/notify'
import { setAuthToken } from '@/lib/authClient'

function isValidEmail(value: string) {
  return value.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function isValidPhone(value: string) {
  const cleaned = value.replace(/[\s()-]/g, '')
  return cleaned === '' || (/^(\+254|0)?[17]\d{8}$/.test(cleaned) && cleaned.length >= 9)
}

export default function SignupForm() {
  const [activeTab, setActiveTab] = useState<'phone' | 'email'>('email') 
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const returnTo = useMemo(() => {
    if (typeof window === 'undefined') return 'ride-request'
    const params = new URLSearchParams(window.location.search)
    return params.get('returnTo') || 'ride-request'
  }, [])

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name'
    }

    if (activeTab === 'email') {
      if (!email.trim()) {
        errors.email = 'Email is required when signing up with email'
      } else if (!isValidEmail(email)) {
        errors.email = 'Please enter a valid email address'
      }
    } else {
      if (!phone.trim()) {
        errors.phone = 'Phone number is required'
      } else if (!isValidPhone(phone)) {
        errors.phone = 'Please enter a valid Kenyan phone number (e.g. 0712345678 or +254712345678)'
      }
    }

    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      setError('Please correct the errors above.')
      return
    }

    setIsSubmitting(true)

    try {
      const payload: any = {
        fullName: fullName.trim(),
        password,
      }

      if (activeTab === 'email') {
        payload.email = email.trim()
      } else {
        let normalizedPhone = phone.trim().replace(/[\s()-]/g, '')
        if (normalizedPhone.startsWith('0')) {
          normalizedPhone = '+254' + normalizedPhone.slice(1)
        } else if (!normalizedPhone.startsWith('+')) {
          normalizedPhone = '+254' + normalizedPhone
        }
        payload.phone = normalizedPhone
      }

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || `Signup failed (${res.status})`)
      }

      setAuthToken(data.token)

      await notify({
        title: 'Account Created!',
        message: 'Welcome to Bossie Ride — you can now request rides.',
        level: 'success',
        useBrowserNotification: true,
      })

      window.location.href = `./${returnTo}`
    } catch (err: any) {
      const msg = err?.message || 'Something went wrong. Please try again.'
      setError(msg)
      notify({ title: 'Signup Failed', message: msg, level: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <Card className="shadow-card border-amber-200/40">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Join Bossie Ride and start moving around Nairobi easily
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value)
                  setFieldErrors((prev) => ({ ...prev, fullName: '' }))
                }}
                placeholder="Jane Kamau"
                autoComplete="name"
                className={fieldErrors.fullName ? 'border-destructive' : ''}
              />
              {fieldErrors.fullName && (
                <p className="text-sm text-destructive">{fieldErrors.fullName}</p>
              )}
            </div>

            {/* Tabs: Phone or Email */}
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'phone' | 'email')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="phone">Phone Number</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
              </TabsList>

              <TabsContent value="phone" className="space-y-2 mt-4">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                    +254
                  </span>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value)
                      setFieldErrors((prev) => ({ ...prev, phone: '' }))
                    }}
                    placeholder="712 345 678"
                    className={`pl-12 ${fieldErrors.phone ? 'border-destructive' : ''}`}
                    autoComplete="tel"
                  />
                </div>
                {fieldErrors.phone && (
                  <p className="text-sm text-destructive">{fieldErrors.phone}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  We'll verify your phone number later
                </p>
              </TabsContent>

              <TabsContent value="email" className="space-y-2 mt-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setFieldErrors((prev) => ({ ...prev, email: '' }))
                  }}
                  placeholder="@example.com"
                  className={fieldErrors.email ? 'border-destructive' : ''}
                  autoComplete="email"
                />
                {fieldErrors.email && (
                  <p className="text-sm text-destructive">{fieldErrors.email}</p>
                )}
              </TabsContent>
            </Tabs>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setFieldErrors((prev) => ({ ...prev, password: '' }))
                  }}
                  placeholder="At least 6 characters"
                  autoComplete="new-password"
                  className={fieldErrors.password ? 'border-destructive' : ''}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <SafeIcon name={showPassword ? 'EyeOff' : 'Eye'} size={18} />
                </button>
              </div>
              {fieldErrors.password && (
                <p className="text-sm text-destructive">{fieldErrors.password}</p>
              )}
            </div>

            {/* Global error */}
            {error && (
              <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <a
              href={`./login?returnTo=${encodeURIComponent(returnTo)}`}
              className="text-amber-700 font-medium hover:underline"
            >
              Log in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}