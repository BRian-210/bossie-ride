
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'

interface RideSummaryCardProps {
  pickupLocation: string
  dropoffLocation: string
  driverName: string
  driverAvatar: string
  driverRating: number
  vehicleType: string
  vehiclePlate: string
  fare: string
  duration: string
  distance: string
}

export default function RideSummaryCard({
  pickupLocation,
  dropoffLocation,
  driverName,
  driverAvatar,
  driverRating,
  vehicleType,
  vehiclePlate,
  fare,
  duration,
  distance
}: RideSummaryCardProps) {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Ride Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Locations */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-muted-foreground uppercase">Pickup</p>
              <p className="text-sm font-medium truncate">{pickupLocation}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-sm bg-destructive" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-muted-foreground uppercase">Dropoff</p>
              <p className="text-sm font-medium truncate">{dropoffLocation}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Driver Info */}
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={driverAvatar} alt={driverName} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {driverName.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm">{driverName}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{vehicleType}</span>
              <span>•</span>
              <span className="font-mono">{vehiclePlate}</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <SafeIcon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{driverRating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Ride Details Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase">Duration</p>
            <p className="text-sm font-semibold mt-1">{duration}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase">Distance</p>
            <p className="text-sm font-semibold mt-1">{distance}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase">Fare</p>
            <p className="text-sm font-semibold text-primary mt-1">{fare}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
