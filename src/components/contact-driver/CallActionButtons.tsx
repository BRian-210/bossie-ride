
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'

interface CallActionButtonsProps {
  driverPhone?: string
  onCall: () => void
}

export default function CallActionButtons({ driverPhone, onCall }: CallActionButtonsProps) {
  const handleCall = () => {
    onCall()
  }

  const handleSMS = () => {
    if (driverPhone) {
      window.location.href = `sms:${driverPhone}`
    }
  }

  return (
    <Card className="shadow-card">
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={handleCall}
            disabled={!driverPhone}
            size="lg"
            className="h-14"
          >
            <SafeIcon name="Phone" size={20} className="mr-2" />
            Call Driver
          </Button>
          <Button
            onClick={handleSMS}
            disabled={!driverPhone}
            variant="outline"
            size="lg"
            className="h-14"
          >
            <SafeIcon name="MessageCircle" size={20} className="mr-2" />
            Send SMS
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">
          {driverPhone ? `Driver: ${driverPhone}` : 'Driver phone not available'}
        </p>
      </CardContent>
    </Card>
  )
}
