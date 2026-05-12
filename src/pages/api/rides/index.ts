import type { APIRoute } from 'astro'

import Ride from '@/lib/models/Ride'
import connectDB from '@/lib/db'
import { requireUserId } from '@/lib/apiAuth'

export const GET: APIRoute = async ({ request }) => {
  try {
    const userId = await requireUserId(request)
    await connectDB()
    const rides = await Ride.find({ userId }).sort({ createdAt: -1 }).limit(100).lean()
    return new Response(JSON.stringify({ rides }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const userId = await requireUserId(request)
    const body = await request.json().catch((): null => null)
    if (!body) return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 })

    const pickup = body.pickup
    const dropoff = body.dropoff
    const rideType = body.rideType

    if (!pickup?.name || !dropoff?.name || !rideType?.name) {
      return new Response(JSON.stringify({ error: 'pickup, dropoff, and rideType are required' }), { status: 400 })
    }

    await connectDB()
    const ride = await Ride.create({
      userId,
      pickup,
      dropoff,
      rideType,
      status: 'requested',
      estimatedFareKsh: body.estimatedFareKsh,
    })

    return new Response(
      JSON.stringify({ ride: { id: String(ride._id), status: ride.status } }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (e: any) {
    const msg = e?.message === 'Unauthorized' ? 'Unauthorized' : 'Failed to create ride'
    return new Response(JSON.stringify({ error: msg }), { status: msg === 'Unauthorized' ? 401 : 500 })
  }
}

