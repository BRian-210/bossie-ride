'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockCurrentUser } from '@/data/user'

interface ProfileState {
  name: string
  contact: string
  method: string
  userId: string
  isRegistered: boolean
}

const defaultProfile: ProfileState = {
  name: `${mockCurrentUser.firstName} ${mockCurrentUser.lastName}`.trim(),
  contact: mockCurrentUser.email,
  method: 'email',
  userId: mockCurrentUser.userId,
  isRegistered: mockCurrentUser.isRegistered,
}

export default function ProfileContent() {
  const [profile, setProfile] = useState<ProfileState>(defaultProfile)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isAuthed = sessionStorage.getItem('riderAuth') === 'true'
    if (!isAuthed) {
      window.location.href = './login?returnTo=profile'
      return
    }

    const contact = sessionStorage.getItem('riderContact') || defaultProfile.contact
    const method = sessionStorage.getItem('riderAuthMethod') || defaultProfile.method
    const displayName =
      method === 'apple'
        ? 'Apple Rider'
        : contact.includes('@')
          ? contact.split('@')[0]
          : 'Bossie Rider'

    setProfile({
      ...defaultProfile,
      name: displayName,
      contact,
      method,
    })
  }, [])

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const registrationLabel = profile.isRegistered ? 'Registered' : 'Guest'

  return (
    <div className="container max-w-xl mx-auto px-4 py-6 space-y-6">
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-semibold">
            {initials || 'BR'}
          </div>
          <div>
            <CardTitle className="text-xl">{profile.name}</CardTitle>
            <CardDescription className="mt-1">Rider profile</CardDescription>
          </div>
          <div className="ml-auto">
            <Badge variant="secondary">{registrationLabel}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">User ID</span>
            <span className="font-medium">{profile.userId}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Login method</span>
            <span className="font-medium capitalize">{profile.method}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Contact</span>
            <span className="font-medium">{profile.contact}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
