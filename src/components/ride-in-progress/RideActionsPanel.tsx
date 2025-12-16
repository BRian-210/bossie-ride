
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import type { RideStatus } from '@/data/ride'

interface RideActionsPanelProps {
  status: RideStatus
  onCancel?: () => void
  onTrack?: () => void
  onContact?: () => void
}

export default function RideActionsPanel({
  status,
  onCancel,
  onTrack,
  onContact
}: RideActionsPanelProps) {
  const isCompleted = status === 'COMPLETED'
  const isCancelled = status === 'CANCELLED'
  const isActive = !isCompleted && !isCancelled

  return (
    <div className="space-y-2">
      {/* Primary Actions */}
      <div className="grid grid-cols-2 gap-2">
        {onTrack && isActive && (
          <Button 
            onClick={onTrack}
            variant="outline"
            className="w-full"
          >
            <SafeIcon name="MapPin" size={16} className="mr-2" />
            Track Driver
          </Button>
        )}
        
        {onContact && isActive && (
          <Button 
            onClick={onContact}
            className="w-full"
          >
            <SafeIcon name="Phone" size={16} className="mr-2" />
            Contact
          </Button>
        )}
      </div>

      {/* Cancel Button */}
      {onCancel && isActive && (
        <Button 
          onClick={onCancel}
          variant="destructive"
          className="w-full"
        >
          <SafeIcon name="XCircle" size={16} className="mr-2" />
          Cancel Ride
        </Button>
      )}

      {/* Status Messages */}
      {isCompleted && (
        <div className="p-3 rounded-lg bg-green-50 border border-green-200">
          <p className="text-sm font-medium text-green-900">
            <SafeIcon name="CheckCircle2" size={16} className="inline mr-2" />
            Ride Completed
          </p>
        </div>
      )}

      {isCancelled && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200">
          <p className="text-sm font-medium text-red-900">
            <SafeIcon name="XCircle" size={16} className="inline mr-2" />
            Ride Cancelled
          </p>
        </div>
      )}
    </div>
  )
}
