
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'

interface RideSummaryCardProps {
  pickupLocation: string
  dropoffLocation: string
  fare: string
  rideType: string
}

export default function RideSummaryCard({
  pickupLocation,
  dropoffLocation,
  fare,
  rideType
}: RideSummaryCardProps) {
  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        {/* Ride Type */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Ride Type</span>
          <span className="font-medium">{rideType}</span>
        </div>

        <Separator />

        {/* Route */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">From</p>
              <p className="text-sm font-medium truncate">{pickupLocation}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">To</p>
              <p className="text-sm font-medium truncate">{dropoffLocation}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Fare */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Estimated Fare</span>
          <span className="text-lg font-bold text-primary">{fare}</span>
        </div>
      </CardContent>
    </Card>
  )
}
