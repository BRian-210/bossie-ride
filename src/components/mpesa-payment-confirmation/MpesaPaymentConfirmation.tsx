
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import TransactionSummary from './TransactionSummary'
import ApprovalStatus from './ApprovalStatus'

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

  // Simulate M-Pesa approval process
  useEffect(() => {
    if (status !== 'pending') return

    // Simulate random approval/failure after 3-8 seconds
    const approvalTimer = setTimeout(() => {
      const isApproved = Math.random() > 0.3 // 70% success rate for demo
      setStatus(isApproved ? 'approved' : 'failed')
      setIsProcessing(false)
    }, 3000 + Math.random() * 5000)

    return () => clearTimeout(approvalTimer)
  }, [status])

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
    setStatus('pending')
    setTimeRemaining(120)
    setIsProcessing(true)
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
