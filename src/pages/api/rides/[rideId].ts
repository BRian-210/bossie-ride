import type { APIRoute } from 'astro'

import Ride, { type RideStatus } from '@/lib/models/Ride'
import connectDB from '@/lib/db'
import { requireUserId } from '@/lib/apiAuth'

const allowed: RideStatus[] = ['requested', 'in_progress', 'completed', 'cancelled']

export const PATCH: APIRoute = async ({ request, params }) => {
  const rideId = params.rideId
  if (!rideId) return new Response(JSON.stringify({ error: 'rideId is required' }), { status: 400 })

  try {
    const userId = await requireUserId(request)
    const body = await request.json().catch(() => null)
    if (!body) return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 })

    const status = body.status as RideStatus | undefined
    if (status && !allowed.includes(status)) {
      return new Response(JSON.stringify({ error: 'Invalid status' }), { status: 400 })
    }

    await connectDB()
    const ride = await Ride.findOne({ _id: rideId, userId })
    if (!ride) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })

    if (status) ride.status = status
    if (typeof body.finalFareKsh === 'number') ride.finalFareKsh = body.finalFareKsh
    if (typeof body.distanceKm === 'number') ride.distanceKm = body.distanceKm
    if (typeof body.durationMinutes === 'number') ride.durationMinutes = body.durationMinutes

    if (status === 'completed') ride.completedAt = new Date()

    await ride.save()

    return new Response(JSON.stringify({ ride: { id: String(ride._id), status: ride.status } }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e: any) {
    const msg = e?.message === 'Unauthorized' ? 'Unauthorized' : 'Failed to update ride'
    return new Response(JSON.stringify({ error: msg }), { status: msg === 'Unauthorized' ? 401 : 500 })
  }
}

