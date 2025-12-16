
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import type { CurrentRideModel } from '@/data/ride'

interface RideDetailsPanelProps {
  ride: CurrentRideModel
}

export default function RideDetailsPanel({ ride }: RideDetailsPanelProps) {
  const driver = ride.driverDetails

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Ride Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Driver Info */}
        {driver && (
          <div className="flex items-center gap-3">
            <Avatar className="h-14 w-14">
              <AvatarImage src={driver.profileImageUrl} alt={driver.name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {driver.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base">{driver.name}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <SafeIcon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{driver.rating.toFixed(1)}</span>
                <span>•</span>
                <span>{driver.vehicle.model}</span>
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Vehicle Details */}
        {driver && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Vehicle</p>
              <p className="font-medium">{driver.vehicle.model}</p>
              <p className="text-xs text-muted-foreground">{driver.vehicle.color}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Plate Number</p>
              <p className="font-mono font-semibold text-primary">{driver.vehicle.plateNumber}</p>
            </div>
          </div>
        )}

        <Separator />

        {/* Route Details */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-muted-foreground">Pickup</p>
              <p className="font-medium truncate">{ride.pickupLocation.name}</p>
              <p className="text-xs text-muted-foreground truncate">{ride.pickupLocation.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-sm bg-destructive" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-muted-foreground">Dropoff</p>
              <p className="font-medium truncate">{ride.dropoffLocation.name}</p>
              <p className="text-xs text-muted-foreground truncate">{ride.dropoffLocation.address}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Ride Info */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-xs text-muted-foreground">ETA</p>
            <p className="font-semibold">{ride.currentEtaMinutes} min</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Fare</p>
            <p className="font-semibold text-primary">KES {ride.estimatedFare.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Status</p>
            <Badge variant="default" className="mt-1">
              <SafeIcon name="Navigation" size={12} className="mr-1" />
              In Transit
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
