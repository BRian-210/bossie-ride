
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import { mockFailureDetails } from '@/data/payment'

interface PaymentFailureContentProps {
  className?: string
}

export default function PaymentFailureContent({ className = '' }: PaymentFailureContentProps) {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetryPayment = () => {
    setIsRetrying(true)
    // Navigate to mpesa payment details page
    if (typeof window !== 'undefined') {
      window.location.href = './mpesa-payment-details.html'
    }
  }

  const handleBackToRideDetails = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './ride-completed.html'
    }
  }

  return (
    <div className={`container max-w-2xl mx-auto px-4 py-8 ${className}`}>
      {/* Error Icon and Title */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-4">
          <SafeIcon name="XCircle" size={48} className="text-destructive" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Payment Failed</h1>
        <p className="text-muted-foreground">
          Unfortunately, your payment could not be processed
        </p>
      </div>

      {/* Error Details Card */}
      <Card className="shadow-card mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Error Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Error Code */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Error Code</p>
            <p className="font-mono font-bold text-foreground">{mockFailureDetails.errorCode}</p>
          </div>

          {/* Error Message */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Error Message</p>
            <Alert variant="destructive">
              <SafeIcon name="AlertCircle" size={16} />
              <AlertTitle>Payment Error</AlertTitle>
              <AlertDescription>{mockFailureDetails.errorMessage}</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting Steps */}
      <Card className="shadow-card mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Troubleshooting Steps</CardTitle>
          <CardDescription>
            Try these steps to resolve the issue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockFailureDetails.suggestions.map((suggestion, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-semibold text-primary">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{suggestion}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Help */}
      <Card className="shadow-card mb-8 border-blue-200 bg-blue-50/50">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <SafeIcon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900 mb-1">Need Help?</p>
              <p className="text-sm text-blue-800">
                If you continue to experience issues, please contact our support team at support@bossieride.com or call +254 700 000 000
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={handleRetryPayment}
          disabled={isRetrying}
          className="w-full"
          size="lg"
        >
          {isRetrying ? (
            <>
              <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
              Retrying...
            </>
          ) : (
            <>
              <SafeIcon name="RotateCcw" size={18} className="mr-2" />
              Retry Payment
            </>
          )}
        </Button>

        <Button
          onClick={handleBackToRideDetails}
          variant="outline"
          className="w-full"
          size="lg"
        >
          <SafeIcon name="ChevronLeft" size={18} className="mr-2" />
          Back to Ride Details
        </Button>
      </div>

      {/* Transaction Reference */}
      <div className="mt-8 pt-6 border-t text-center">
        <p className="text-xs text-muted-foreground mb-2">Transaction Reference</p>
        <p className="font-mono text-sm text-foreground">BOSSIE_TX_00987</p>
      </div>
    </div>
  )
}
