import type { APIRoute } from 'astro'

import connectDB from '@/lib/db'
import { requireUserId } from '@/lib/apiAuth'
import Transaction from '@/lib/models/Transaction'

export const GET: APIRoute = async ({ request, url }) => {
  let userId: string
  try {
    userId = await requireUserId(request)
  } catch {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const checkoutRequestId = url.searchParams.get('checkoutRequestId') || ''
  if (!checkoutRequestId) {
    return new Response(JSON.stringify({ error: 'checkoutRequestId is required' }), { status: 400 })
  }

  await connectDB()
  const tx = await Transaction.findOne({ userId, mpesaCheckoutRequestId: checkoutRequestId }).lean()
  if (!tx) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })

  return new Response(
    JSON.stringify({
      transaction: {
        id: String(tx._id),
        status: tx.status,
        amountKsh: tx.amountKsh,
        reference: tx.reference,
        receipt: tx.receipt,
        mpesaResultCode: tx.mpesaResultCode,
        mpesaResultDesc: tx.mpesaResultDesc,
      },
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}

