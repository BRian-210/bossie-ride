'use client'

import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import { requireAuth } from '@/lib/requireAuthClient'
import { clearAuthToken, fetchAuthedJson } from '@/lib/authClient'
import { notify } from '@/lib/notify'

type ApiRide = any
type ApiTransaction = any

type User = {
  id: string
  fullName: string
  email: string
}

function formatKsh(amount?: number) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '—'
  return `KES ${amount.toLocaleString('en-KE', { maximumFractionDigits: 2 })}`
}

function formatDate(value?: string) {
  if (!value) return '—'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleString()
}

function getId(doc: any) {
  return String(doc?.id || doc?._id || '')
}

function computeDiscountPercent(rides: ApiRide[]) {
  const now = Date.now()
  const days28 = 28 * 24 * 60 * 60 * 1000
  const completed = rides.filter((r) => r?.status === 'completed')
  const completed28 = completed.filter((r) => {
    const t = new Date(r?.completedAt || r?.updatedAt || r?.createdAt || 0).getTime()
    return t && now - t <= days28
  })
  const n = completed28.length
  if (n >= 15) return { percent: 15, rides28: n }
  if (n >= 8) return { percent: 10, rides28: n }
  if (n >= 3) return { percent: 5, rides28: n }
  return { percent: 0, rides28: n }
}

export default function ProfileContent() {
  const [user, setUser] = useState<User | null>(null)
  const [rides, setRides] = useState<ApiRide[]>([])
  const [transactions, setTransactions] = useState<ApiTransaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const u = await requireAuth('profile')
      if (!u) return
      setUser(u as User)
      try {
        setLoading(true)
        const [ridesRes, txRes] = await Promise.all([
          fetchAuthedJson<{ rides: ApiRide[] }>('./api/rides', { method: 'GET' }),
          fetchAuthedJson<{ transactions: ApiTransaction[] }>('./api/transactions', { method: 'GET' }),
        ])
        setRides(ridesRes.rides || [])
        setTransactions(txRes.transactions || [])
      } catch {
        // ignore
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const discount = useMemo(() => computeDiscountPercent(rides), [rides])

  const activeRides = useMemo(
    () => rides.filter((r) => r?.status === 'requested' || r?.status === 'in_progress'),
    [rides]
  )
  const completedRides = useMemo(() => rides.filter((r) => r?.status === 'completed'), [rides])

  const initials = (user?.fullName || 'Bossie Rider')
    .split(' ')
    .filter(Boolean)
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const handleLogout = async () => {
    clearAuthToken()
    await notify({ title: 'Signed out', message: 'See you next time.', level: 'info' })
    if (typeof window !== 'undefined') window.location.href = './'
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
      <Card className="shadow-card">
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-semibold">
              {initials || 'BR'}
            </div>
            <div>
              <CardTitle className="text-xl">{user?.fullName || 'Your Profile'}</CardTitle>
              <CardDescription className="mt-1">
                {user?.email || user?.phone || 'Signed in'}
              </CardDescription>
            </div>
          </div>

          <div className="sm:ml-auto flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Registered</Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Discount: {discount.percent}%
            </Badge>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <SafeIcon name="LogOut" size={16} className="mr-2" />
              Sign out
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm text-muted-foreground">Active rides</p>
              <p className="text-3xl font-bold text-primary">{activeRides.length}</p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm text-muted-foreground">Completed rides</p>
              <p className="text-3xl font-bold">{completedRides.length}</p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm text-muted-foreground">Consistency (last 28 days)</p>
              <p className="text-3xl font-bold">{discount.rides28}</p>
            </div>
          </div>

          <div className="rounded-lg border bg-muted/40 p-4">
            <p className="text-sm font-medium">How your discount works</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We calculate your discount based on how many rides you complete in the last 28 days.
              Keep riding consistently to unlock higher tiers.
            </p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="active">Active rides</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Account details</CardTitle>
              <CardDescription>Your saved profile information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">User ID</span>
                <span className="font-mono">{user?.id || '—'}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Full name</span>
                <span className="font-medium">{user?.fullName || '—'}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">{user?.email || '—'}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Phone</span>
                <span className="font-medium">{user?.phone || '—'}</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="mt-4 space-y-4">
          {activeRides.length === 0 ? (
            <Card>
              <CardContent className="pt-10 pb-10 text-center">
                <p className="font-medium">No active rides</p>
                <p className="text-sm text-muted-foreground mt-1">Request a ride to see it here.</p>
                <a className="inline-flex mt-4" href="./ride-request.html">
                  <Button>
                    <SafeIcon name="Plus" size={18} className="mr-2" />
                    Request a ride
                  </Button>
                </a>
              </CardContent>
            </Card>
          ) : (
            activeRides.map((r) => (
              <Card key={getId(r)}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{r?.rideType?.name || 'Ride'}</span>
                    <Badge variant="outline" className="capitalize">
                      {r?.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{formatDate(r?.createdAt)}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Pickup</span>
                    <span className="font-medium text-right">{r?.pickup?.name || '—'}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Dropoff</span>
                    <span className="font-medium text-right">{r?.dropoff?.name || '—'}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Estimated fare</span>
                    <span className="font-medium">{formatKsh(r?.estimatedFareKsh)}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="history" className="mt-4 space-y-4">
          {loading ? (
            <Card>
              <CardContent className="pt-10 pb-10 text-center text-sm text-muted-foreground">Loading…</CardContent>
            </Card>
          ) : completedRides.length === 0 ? (
            <Card>
              <CardContent className="pt-10 pb-10 text-center">
                <p className="font-medium">No completed rides yet</p>
                <p className="text-sm text-muted-foreground mt-1">Your ride history will appear here.</p>
              </CardContent>
            </Card>
          ) : (
            completedRides.slice(0, 20).map((r) => (
              <Card key={getId(r)}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{r?.rideType?.name || 'Ride'}</span>
                    <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>
                  </CardTitle>
                  <CardDescription>{formatDate(r?.completedAt || r?.updatedAt)}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Route</span>
                    <span className="font-medium text-right">
                      {r?.pickup?.name || '—'} → {r?.dropoff?.name || '—'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Final fare</span>
                    <span className="font-medium">{formatKsh(r?.finalFareKsh || r?.estimatedFareKsh)}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="transactions" className="mt-4 space-y-4">
          {loading ? (
            <Card>
              <CardContent className="pt-10 pb-10 text-center text-sm text-muted-foreground">Loading…</CardContent>
            </Card>
          ) : transactions.length === 0 ? (
            <Card>
              <CardContent className="pt-10 pb-10 text-center">
                <p className="font-medium">No transactions yet</p>
                <p className="text-sm text-muted-foreground mt-1">Payments you make will appear here.</p>
              </CardContent>
            </Card>
          ) : (
            transactions.slice(0, 30).map((t) => (
              <Card key={getId(t)}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="capitalize">{t?.provider || 'Payment'}</span>
                    <Badge variant="outline" className="capitalize">
                      {t?.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{formatDate(t?.createdAt)}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-medium">{formatKsh(t?.amountKsh)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">Reference</span>
                    <span className="font-mono text-right break-all">{t?.reference || '—'}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
