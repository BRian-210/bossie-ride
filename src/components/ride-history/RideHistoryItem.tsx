
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'

interface RideHistoryItemProps {
  ride: {
    id: string
    date: string
    time: string
    pickupLocation: string
    dropoffLocation: string
    fare: string
    status: 'completed' | 'cancelled'
    driverName: string
    driverRating: number
    vehicleType: string
    distance: string
    duration: string
    paymentMethod: string
  }
}

export default function RideHistoryItem({ ride }: RideHistoryItemProps) {
  const statusConfig = {
    completed: {
      label: 'Completed',
      variant: 'default' as const,
      icon: 'CheckCircle'
    },
    cancelled: {
      label: 'Cancelled',
      variant: 'destructive' as const,
      icon: 'XCircle'
    }
  }

  const config = statusConfig[ride.status]

  return (
    <Card className="hover:shadow-card transition-shadow cursor-pointer">
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* Header with Status */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm font-medium text-muted-foreground">{ride.date} at {ride.time}</p>
                <Badge variant={config.variant} className="flex items-center gap-1 text-xs">
                  <SafeIcon name={config.icon} size={12} />
                  {config.label}
                </Badge>
              </div>
              <p className="text-sm font-medium">{ride.vehicleType} • {ride.driverName}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-lg font-bold text-primary">{ride.fare}</p>
              <div className="flex items-center gap-1 justify-end mt-1">
                <SafeIcon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium">{ride.driverRating}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Route */}
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">{ride.pickupLocation}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-3 h-3 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-sm bg-destructive" />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">{ride.dropoffLocation}</p>
            </div>
          </div>

          <Separator />

          {/* Details */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-xs text-muted-foreground">Distance</p>
              <p className="text-sm font-medium">{ride.distance}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="text-sm font-medium">{ride.duration}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Payment</p>
              <p className="text-sm font-medium">{ride.paymentMethod}</p>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex gap-2">
            <a href={`./ride-completed.html?id=${ride.id}`} className="flex-1">
              <Button variant="outline" className="w-full" size="sm">
                <SafeIcon name="Eye" size={16} className="mr-2" />
                View Details
              </Button>
            </a>
            <a href={`./payment-success.html?rideId=${ride.id}`} className="flex-1">
              <Button variant="outline" className="w-full" size="sm">
                <SafeIcon name="Receipt" size={16} className="mr-2" />
                Payment Details
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
