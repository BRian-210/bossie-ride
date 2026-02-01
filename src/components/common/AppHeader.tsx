
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import UserMenu from './UserMenu'

interface AppHeaderProps {
  showBackButton?: boolean
  onBackClick?: () => void
  title?: string
  showNotifications?: boolean
  notificationCount?: number
}

export default function AppHeader({
  showBackButton = false,
  onBackClick,
  title,
  showNotifications = true,
  notificationCount = 0,
}: AppHeaderProps) {
  const handleBack = () => {
    if (onBackClick) {
      onBackClick()
    } else if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              aria-label="Go back"
            >
              <SafeIcon name="ChevronLeft" size={24} />
            </Button>
          )}
          
          {title ? (
            <h1 className="text-xl font-semibold">{title}</h1>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <SafeIcon name="Car" size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-primary">Bossie Ride</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showNotifications && (
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <SafeIcon name="Bell" size={20} />
              {notificationCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {notificationCount > 9 ? '9+' : notificationCount}
                </Badge>
              )}
            </Button>
          )}
          
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
