
import { Card, CardContent } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'

interface RideCompletedHeaderProps {
  completedAt: string
}

export default function RideCompletedHeader({ completedAt }: RideCompletedHeaderProps) {
  return (
    <Card className="border-0 bg-gradient-to-r from-success/10 to-success/5 shadow-card">
      <CardContent className="pt-8 pb-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 bg-success/20 rounded-full animate-pulse" />
            <div className="relative w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
              <SafeIcon name="CheckCircle2" size={40} className="text-success" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Ride Completed!</h1>
            <p className="text-muted-foreground">{completedAt}</p>
          </div>

          <p className="text-sm text-muted-foreground max-w-sm">
            Thank you for choosing Bossie Ride. We hope you had a great experience!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
