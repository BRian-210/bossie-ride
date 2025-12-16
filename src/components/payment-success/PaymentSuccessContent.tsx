
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import { mockSuccessReceipt } from '@/data/payment'

export default function PaymentSuccessContent() {
  const receipt = mockSuccessReceipt

  const handleViewHistory = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './ride-history.html'
    }
  }

  const handleBackToRideDetails = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './ride-completed.html'
    }
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="relative w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-success/5 animate-pulse" />
          <SafeIcon 
            name="CheckCircle2" 
            size={56} 
            className="text-success relative z-10"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground">
          Your payment has been processed successfully. Your ride is now confirmed.
        </p>
      </div>

      {/* Receipt Card */}
      <Card className="shadow-card mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Transaction Details</CardTitle>
          <CardDescription>Keep this for your records</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Transaction ID */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Transaction ID</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-muted p-3 rounded-lg font-mono text-sm font-medium break-all">
                {receipt.transactionId}
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (typeof window !== 'undefined' && navigator.clipboard) {
                    navigator.clipboard.writeText(receipt.transactionId)
                  }
                }}
                aria-label="Copy transaction ID"
              >
                <SafeIcon name="Copy" size={18} />
              </Button>
            </div>
          </div>

          <Separator />

          {/* Amount Paid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Amount Paid</p>
              <p className="text-2xl font-bold text-success">
                KES {receipt.amountPaid.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Payment Method</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                  <SafeIcon name="Smartphone" size={14} className="text-primary" />
                </div>
                <p className="font-medium">{receipt.method}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">{receipt.date}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium">{receipt.time}</p>
            </div>
          </div>

          <Separator />

          {/* Reference Ride ID */}
          <div>
            <p className="text-sm text-muted-foreground">Ride Reference</p>
            <p className="font-mono text-sm font-medium">{receipt.referenceRideId}</p>
          </div>
        </CardContent>
      </Card>

      {/* Status Badge */}
      <div className="flex justify-center mb-8">
        <Badge className="bg-success/10 text-success border-success/20 flex items-center gap-2">
          <SafeIcon name="CheckCircle" size={14} />
          Payment Confirmed
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          onClick={handleViewHistory}
          className="w-full"
          size="lg"
        >
          <SafeIcon name="Clock" size={18} className="mr-2" />
          View Ride History
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

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          A receipt has been sent to your registered email address. You can also view all your transactions in your ride history.
        </p>
      </div>
    </div>
  )
}
