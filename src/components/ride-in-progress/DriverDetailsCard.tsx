
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import type { DriverModel } from '@/data/driver'

interface DriverDetailsCardProps {
  driver: DriverModel
  onContact?: () => void
  onTrack?: () => void
}

export default function DriverDetailsCard({
  driver,
  onContact,
  onTrack
}: DriverDetailsCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3 mb-3">
          {/* Driver Avatar */}
          <Avatar className="h-14 w-14">
            <AvatarImage src={driver.profileImageUrl} alt={driver.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {driver.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>

          {/* Driver Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{driver.name}</h3>
              <Badge variant="outline" className="flex items-center gap-1 text-xs">
                <SafeIcon name="Star" size={12} className="fill-yellow-400 text-yellow-400" />
                {driver.rating.toFixed(1)}
              </Badge>
            </div>
            
            {/* Vehicle Info */}
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {driver.vehicle.model}
              </p>
              <p className="text-sm font-mono font-semibold text-primary">
                {driver.vehicle.plateNumber}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            {onContact && (
              <button
                onClick={onContact}
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Call driver"
              >
                <SafeIcon name="Phone" size={18} className="text-primary" />
              </button>
            )}
            {onTrack && (
              <button
                onClick={onTrack}
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Track driver"
              >
                <SafeIcon name="MapPin" size={18} className="text-primary" />
              </button>
            )}
          </div>
        </div>

        {/* Vehicle Color */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div 
            className="w-4 h-4 rounded-full border-2 border-gray-300"
            style={{ backgroundColor: driver.vehicle.color.toLowerCase() }}
          />
          <span>{driver.vehicle.color}</span>
        </div>
      </CardContent>
    </Card>
  )
}
