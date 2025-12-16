
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'

export type RideStatus = 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled'

interface RideStatusCardProps {
  status: RideStatus
  pickupLocation?: string
  dropoffLocation?: string
  driverName?: string
  driverAvatar?: string
  driverRating?: number
  vehicleType?: string
  vehiclePlate?: string
  estimatedTime?: string
  fare?: string
  rideDate?: string
  onContactDriver?: () => void
  onTrackDriver?: () => void
  onCancelRide?: () => void
  onRateRide?: () => void
  className?: string
}

const statusConfig: Record<RideStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon: string }> = {
  pending: { label: 'Finding Driver', variant: 'secondary', icon: 'Search' },
  accepted: { label: 'Driver Assigned', variant: 'default', icon: 'CheckCircle' },
  'in-progress': { label: 'In Progress', variant: 'default', icon: 'Navigation' },
  completed: { label: 'Completed', variant: 'outline', icon: 'CheckCircle2' },
  cancelled: { label: 'Cancelled', variant: 'destructive', icon: 'XCircle' }
}

export default function RideStatusCard({
  status,
  pickupLocation,
  dropoffLocation,
  driverName,
  driverAvatar,
  driverRating,
  vehicleType,
  vehiclePlate,
  estimatedTime,
  fare,
  rideDate,
  onContactDriver,
  onTrackDriver,
  onCancelRide,
  onRateRide,
  className = ''
}: RideStatusCardProps) {
  const config = statusConfig[status]

  return (
    <Card className={`shadow-card ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Ride Details</CardTitle>
          <Badge variant={config.variant} className="flex items-center gap-1">
            <SafeIcon name={config.icon} size={14} />
            {config.label}
          </Badge>
        </div>
        {rideDate && (
          <CardDescription>{rideDate}</CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Locations */}
        {(pickupLocation || dropoffLocation) && (
          <div className="space-y-3">
            {pickupLocation && (
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Pickup</p>
                  <p className="text-sm text-muted-foreground truncate">{pickupLocation}</p>
                </div>
              </div>
            )}
            
            {dropoffLocation && (
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-sm bg-destructive" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Dropoff</p>
                  <p className="text-sm text-muted-foreground truncate">{dropoffLocation}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Driver Info */}
        {driverName && (
          <>
            <Separator />
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={driverAvatar} alt={driverName} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {driverName.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium">{driverName}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {vehicleType && <span>{vehicleType}</span>}
                  {vehiclePlate && (
                    <>
                      <span>•</span>
                      <span className="font-mono">{vehiclePlate}</span>
                    </>
                  )}
                </div>
                {driverRating && (
                  <div className="flex items-center gap-1 mt-1">
                    <SafeIcon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{driverRating.toFixed(1)}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Ride Info */}
        {(estimatedTime || fare) && (
          <>
            <Separator />
            <div className="grid grid-cols-2 gap-4">
              {estimatedTime && (
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Time</p>
                  <p className="font-medium">{estimatedTime}</p>
                </div>
              )}
              {fare && (
                <div>
                  <p className="text-sm text-muted-foreground">Fare</p>
                  <p className="font-medium text-primary">{fare}</p>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>

      {/* Actions */}
      {(onContactDriver || onTrackDriver || onCancelRide || onRateRide) && (
        <CardFooter className="flex flex-wrap gap-2">
          {onTrackDriver && (
            <Button onClick={onTrackDriver} className="flex-1" variant="outline">
              <SafeIcon name="MapPin" size={16} className="mr-2" />
              Track Driver
            </Button>
          )}
          {onContactDriver && (
            <Button onClick={onContactDriver} className="flex-1">
              <SafeIcon name="Phone" size={16} className="mr-2" />
              Contact
            </Button>
          )}
          {onCancelRide && (
            <Button onClick={onCancelRide} variant="destructive" className="w-full">
              <SafeIcon name="XCircle" size={16} className="mr-2" />
              Cancel Ride
            </Button>
          )}
          {onRateRide && (
            <Button onClick={onRateRide} className="w-full">
              <SafeIcon name="Star" size={16} className="mr-2" />
              Rate Driver
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
