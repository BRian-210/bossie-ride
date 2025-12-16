
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import type { RideStatus } from '@/data/ride'

interface RideStatusOverlayProps {
  status: RideStatus
  eta: number
  pickupLocation: string
  dropoffLocation: string
}

const statusConfig: Record<RideStatus, { label: string; icon: string; color: string }> = {
  REQUESTING: { label: 'Finding Driver', icon: 'Search', color: 'bg-yellow-500' },
  PENDING: { label: 'Driver Assigned', icon: 'CheckCircle', color: 'bg-blue-500' },
  ACCEPTED: { label: 'Driver Accepted', icon: 'CheckCircle', color: 'bg-blue-500' },
  IN_TRANSIT: { label: 'On the Way', icon: 'Navigation', color: 'bg-primary' },
  ARRIVED: { label: 'Driver Arrived', icon: 'MapPin', color: 'bg-green-500' },
  COMPLETED: { label: 'Completed', icon: 'CheckCircle2', color: 'bg-green-500' },
  CANCELLED: { label: 'Cancelled', icon: 'XCircle', color: 'bg-red-500' }
}

export default function RideStatusOverlay({
  status,
  eta,
  pickupLocation,
  dropoffLocation
}: RideStatusOverlayProps) {
  const config = statusConfig[status]

  return (
    <div className="absolute top-4 left-4 right-4 z-20">
      <Card className="shadow-lg">
        <CardContent className="p-4">
          {/* Status Badge */}
          <div className="flex items-center justify-between mb-3">
            <Badge className={`${config.color} text-white flex items-center gap-1`}>
              <SafeIcon name={config.icon} size={14} />
              {config.label}
            </Badge>
            {eta > 0 && (
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{eta}</p>
                <p className="text-xs text-muted-foreground">min away</p>
              </div>
            )}
          </div>

          {/* Route Summary */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <p className="text-sm font-medium truncate">{pickupLocation}</p>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-red-500" />
              </div>
              <p className="text-sm font-medium truncate">{dropoffLocation}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
