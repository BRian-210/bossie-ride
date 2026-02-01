
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { type RideTypeModel } from '@/data/ride'
import SafeIcon from '@/components/common/SafeIcon'
import { cn } from '@/lib/utils'

interface RideTypeCardProps {
  rideType: RideTypeModel
  isSelected: boolean
  onSelect: () => void
}

export default function RideTypeCard({
  rideType,
  isSelected,
  onSelect
}: RideTypeCardProps) {
  const handleClick = () => {
    // Smooth scroll to selected summary if not already visible
    const summaryElement = document.getElementById('selected-ride-summary');
    if (summaryElement) {
      summaryElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest',
        inline: 'nearest'
      });
    }
    onSelect();
  };

  return (
    <Card
      className={cn(
        'cursor-pointer transition-all duration-300 ease-out overflow-hidden hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
        isSelected
          ? 'ring-2 ring-primary border-primary shadow-lg scale-[1.02]'
          : 'hover:border-primary/50'
      )}
      onClick={handleClick}
    >
      {/* Vehicle Image */}
      <div className="relative h-40 bg-muted overflow-hidden">
        <img
          src={rideType.imageUrl}
          alt={rideType.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-300",
            isSelected ? "scale-110" : "scale-100"
          )}
        />
        {isSelected && (
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center transition-opacity duration-300 opacity-100">
            <div className="bg-primary rounded-full p-2 transform scale-100 transition-transform duration-200">
              <SafeIcon name="Check" size={24} color="white" />
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Title and Badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{rideType.name}</h3>
            <p className="text-sm text-muted-foreground">{rideType.description}</p>
          </div>
          {isSelected && (
            <Badge className="flex-shrink-0">Selected</Badge>
          )}
        </div>

        {/* Pricing and Details */}
        <div className="space-y-2 pt-2 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Base Fare</span>
            <span className="font-bold text-primary text-lg">KES {rideType.baseFareKsh}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="flex flex-col items-center gap-1 p-2 bg-muted rounded">
            <SafeIcon name="Users" size={18} className="text-muted-foreground" />
            <span className="text-xs font-medium">{rideType.capacity}</span>
            <span className="text-xs text-muted-foreground">Seats</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-muted rounded">
            <SafeIcon name="Clock" size={18} className="text-muted-foreground" />
            <span className="text-xs font-medium">{rideType.etaMinutesDefault}</span>
            <span className="text-xs text-muted-foreground">Min ETA</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-muted rounded">
            <SafeIcon name={rideType.iconName} size={18} className="text-muted-foreground" />
            <span className="text-xs font-medium">Premium</span>
            <span className="text-xs text-muted-foreground">Service</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
