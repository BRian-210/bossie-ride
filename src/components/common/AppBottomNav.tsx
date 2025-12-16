
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'

interface NavItem {
  id: string
  label: string
  icon: string
  href: string
}

interface AppBottomNavProps {
  activeItem?: string
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'Home', href: './ride-request' },
  { id: 'history', label: 'History', icon: 'Clock', href: './ride-history' },
  { id: 'profile', label: 'Profile', icon: 'User', href: './placeholder' }
]

export default function AppBottomNav({ activeItem }: AppBottomNavProps) {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  const isActive = (item: NavItem) => {
    if (activeItem) {
      return activeItem === item.id
    }
    return currentPath.includes(item.href.replace('./', '').replace('.html', ''))
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 safe-area-inset-bottom">
      <div className="container flex h-16 items-center justify-around px-4">
        {navItems.map((item) => {
          const active = isActive(item)
          return (
            <a
              key={item.id}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 flex-1 min-w-0"
            >
              <Button
                variant="ghost"
                size="icon"
                className={`h-10 w-10 ${active ? 'text-primary' : 'text-muted-foreground'}`}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                <SafeIcon name={item.icon} size={20} />
              </Button>
              <span className={`text-xs font-medium ${active ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
