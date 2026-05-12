
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import TransactionSummary from './TransactionSummary'
import ApprovalStatus from './ApprovalStatus'
import { requireAuth } from '@/lib/requireAuthClient'
import { fetchAuthedJson } from '@/lib/authClient'

interface TransactionData {
  phoneNumber: string
  amount: string
  transactionRef: string
  rideId: string
  timestamp: string
}

// Mock transaction data for SSG
const mockTransaction: TransactionData = {
  phoneNumber: '+254 712 345 678',
  amount: 'KES 450.00',
  transactionRef: 'TXN20250116001234',
  rideId: 'RIDE20250116005',
  timestamp: new Date().toISOString()
}

export default function MpesaPaymentConfirmation() {
  const [transaction, setTransaction] = useState<TransactionData>(mockTransaction)
  const [status, setStatus] = useState<'pending' | 'approved' | 'failed'>('pending')
  const [timeRemaining, setTimeRemaining] = useState(120) // 2 minutes
  const [isProcessing, setIsProcessing] = useState(false)
  const [checkoutRequestId, setCheckoutRequestId] = useState<string | null>(null)

  useEffect(() => {
    requireAuth('mpesa-payment-confirmation')
    if (typeof window === 'undefined') return
    const crid = sessionStorage.getItem('mpesaCheckoutRequestId')
    const phone = sessionStorage.getItem('mpesaPhoneNumber') || mockTransaction.phoneNumber
    const amountKsh = sessionStorage.getItem('mpesaAmountKsh')
    const rideId = sessionStorage.getItem('currentRideId') || mockTransaction.rideId

    setCheckoutRequestId(crid)
    setTransaction({
      phoneNumber: phone,
      amount: amountKsh ? `KES ${Number(amountKsh).toFixed(2)}` : mockTransaction.amount,
      transactionRef: crid || mockTransaction.transactionRef,
      rideId,
      timestamp: new Date().toISOString(),
    })
  }, [])

  // Poll backend for callback result
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (status !== 'pending') return
    if (!checkoutRequestId) return

    const interval = setInterval(() => {
      fetchAuthedJson<{ transaction: { status: string; receipt?: string; mpesaResultDesc?: string } }>(
        `./api/mpesa/status?checkoutRequestId=${encodeURIComponent(checkoutRequestId)}`,
        { method: 'GET' }
      )
        .then((res) => {
          const s = res.transaction.status
          if (s === 'success') setStatus('approved')
          if (s === 'failed') setStatus('failed')
        })
        .catch(() => {})
    }, 2500)

    return () => clearInterval(interval)
  }, [status, checkoutRequestId])

  // Countdown timer
  useEffect(() => {
    if (status !== 'pending' || timeRemaining <= 0) return

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setStatus('failed')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [status, timeRemaining])

  const handleRetry = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './mpesa-payment-details.html'
    }
  }

  const handleSuccess = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './payment-success.html'
    }
  }

  const handleFailure = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './payment-failure.html'
    }
  }

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Status Card */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Confirm Payment</CardTitle>
            <CardDescription>
              Complete the payment on your mobile device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Approval Status */}
            <ApprovalStatus status={status} timeRemaining={timeRemaining} />

            {/* Transaction Summary */}
            <TransactionSummary transaction={transaction} />

            {/* Instructions */}
            {status === 'pending' && (
              <Alert className="bg-blue-50 border-blue-200">
                <SafeIcon name="Info" size={16} className="text-blue-600" />
                <AlertDescription className="text-blue-800 ml-2">
                  A prompt has been sent to <strong>{transaction.phoneNumber}</strong>. 
                  Enter your M-Pesa PIN to complete the payment.
                </AlertDescription>
              </Alert>
            )}

            {/* Timer */}
            {status === 'pending' && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Request expires in</p>
                <p className="text-3xl font-bold text-primary font-mono">
                  {formatTime(timeRemaining)}
                </p>
              </div>
            )}

            {/* Success Message */}
            {status === 'approved' && (
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <SafeIcon name="CheckCircle2" size={32} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Payment Approved!</p>
                  <p className="text-sm text-muted-foreground">
                    Your payment has been successfully processed
                  </p>
                </div>
              </div>
            )}

            {/* Failure Message */}
            {status === 'failed' && (
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                  <SafeIcon name="XCircle" size={32} className="text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Payment Failed</p>
                  <p className="text-sm text-muted-foreground">
                    The payment could not be processed. Please try again.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          {status === 'pending' && (
            <>
              <Button 
                onClick={handleBack}
                variant="outline" 
                className="w-full"
                disabled={isProcessing}
              >
                Back to Payment Details
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Do not close this page while waiting for approval
              </p>
            </>
          )}

          {status === 'approved' && (
            <Button 
              onClick={handleSuccess}
              className="w-full"
              size="lg"
            >
              <SafeIcon name="CheckCircle" size={18} className="mr-2" />
              Continue to Receipt
            </Button>
          )}

          {status === 'failed' && (
            <>
              <Button 
                onClick={handleRetry}
                className="w-full"
                size="lg"
              >
                <SafeIcon name="RotateCcw" size={18} className="mr-2" />
                Retry Payment
              </Button>
              <Button 
                onClick={handleFailure}
                variant="outline"
                className="w-full"
              >
                View Error Details
              </Button>
            </>
          )}
        </div>

        {/* Additional Info */}
        <Card className="bg-muted/50 border-0">
          <CardContent className="pt-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction ID:</span>
                <span className="font-mono font-medium">{transaction.transactionRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ride ID:</span>
                <span className="font-mono font-medium">{transaction.rideId}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
