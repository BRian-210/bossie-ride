
import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'

interface MapContainerProps {
  height?: string
  showControls?: boolean
  onZoomIn?: () => void
  onZoomOut?: () => void
  onRecenter?: () => void
  className?: string
  children?: React.ReactNode
}

export default function MapContainer({
  height = '400px',
  showControls = true,
  onZoomIn,
  onZoomOut,
  onRecenter,
  className = '',
  children
}: MapContainerProps) {
  const [isClient, setIsClient] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleZoomIn = () => {
    onZoomIn?.()
  }

  const handleZoomOut = () => {
    onZoomOut?.()
  }

  const handleRecenter = () => {
    onRecenter?.()
  }

  if (!isClient) {
    return (
      <Card className={`relative overflow-hidden bg-muted ${className}`} style={{ height }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <SafeIcon name="Map" size={48} className="mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className={`relative overflow-hidden ${className}`} style={{ height }}>
      {/* Map Placeholder */}
      <div 
        ref={mapRef}
        className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50"
        style={{
          backgroundImage: `url("https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/626b5934-cf34-4926-9f89-0182464bcb31.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {children}
      </div>

      {/* Map Controls */}
      {showControls && (
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <Button
            size="icon"
            variant="secondary"
            className="shadow-lg"
            onClick={handleZoomIn}
            aria-label="Zoom in"
          >
            <SafeIcon name="Plus" size={20} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="shadow-lg"
            onClick={handleZoomOut}
            aria-label="Zoom out"
          >
            <SafeIcon name="Minus" size={20} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="shadow-lg"
            onClick={handleRecenter}
            aria-label="Recenter map"
          >
            <SafeIcon name="Locate" size={20} />
          </Button>
        </div>
      )}
    </Card>
  )
}
