
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'

interface TransactionData {
  phoneNumber: string
  amount: string
  transactionRef: string
  rideId: string
  timestamp: string
}

interface TransactionSummaryProps {
  transaction: TransactionData
}

export default function TransactionSummary({ transaction }: TransactionSummaryProps) {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <Card className="bg-muted/50 border-0">
      <CardContent className="pt-6 space-y-4">
        {/* Amount */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-1">Amount to Pay</p>
          <p className="text-4xl font-bold text-primary">{transaction.amount}</p>
        </div>

        <Separator />

        {/* Phone Number */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <SafeIcon name="Smartphone" size={16} className="text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Phone Number</span>
          </div>
          <span className="font-medium">{transaction.phoneNumber}</span>
        </div>

        {/* Date & Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <SafeIcon name="Clock" size={16} className="text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Date & Time</span>
          </div>
          <span className="font-medium text-sm">{formatDate(transaction.timestamp)}</span>
        </div>

        {/* Payment Method */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <SafeIcon name="CreditCard" size={16} className="text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Payment Method</span>
          </div>
          <span className="font-medium">M-Pesa</span>
        </div>
      </CardContent>
    </Card>
  )
}
