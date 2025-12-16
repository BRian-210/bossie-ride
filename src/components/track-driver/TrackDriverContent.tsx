
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import SafeIcon from '@/components/common/SafeIcon'
import MapContainer from '@/components/common/MapContainer'
import { mockCurrentRide } from '@/data/ride'

export default function TrackDriverContent() {
  const [mapZoom, setMapZoom] = useState(1)
  const ride = mockCurrentRide
  const driver = ride.driverDetails

  if (!driver) {
    return (
      <div className="container px-4 py-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">No driver assigned yet</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.5, 0.5))
  }

  const handleRecenter = () => {
    setMapZoom(1)
  }

  const handleContactDriver = () => {
    // Navigate to contact driver page
    if (typeof window !== 'undefined') {
      window.location.href = './contact-driver.html'
    }
  }

  const handleBackToRide = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <div className="container px-4 py-6 space-y-6">
      {/* Map Section */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Driver Location</h2>
        <MapContainer
          height="400px"
          showControls={true}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onRecenter={handleRecenter}
          className="shadow-card"
        >
          {/* Driver Marker */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" style={{ width: '80px', height: '80px', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }} />
              
              {/* Driver marker */}
              <div className="absolute w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
                <SafeIcon name="Navigation" size={24} color="white" />
              </div>
            </div>
          </div>
        </MapContainer>
      </div>

      {/* Driver Details Card */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Driver Details</CardTitle>
            <Badge variant="default" className="flex items-center gap-1">
              <SafeIcon name="Navigation" size={14} />
              En Route
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Driver Info */}
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={driver.profileImageUrl} alt={driver.name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                {driver.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-lg">{driver.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <SafeIcon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{driver.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">(Excellent)</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{driver.phone}</p>
            </div>
          </div>

          <Separator />

          {/* Vehicle Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Vehicle Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Model</p>
                <p className="font-medium">{driver.vehicle.model}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Plate Number</p>
                <p className="font-mono font-medium">{driver.vehicle.plateNumber}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground">Color</p>
                <div className="flex items-center gap-2 mt-1">
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-border"
                    style={{ 
                      backgroundColor: driver.vehicle.color.toLowerCase() === 'blue' ? '#3b82f6' : 
                                      driver.vehicle.color.toLowerCase() === 'white' ? '#ffffff' :
                                      driver.vehicle.color.toLowerCase() === 'black' ? '#000000' :
                                      '#6b7280'
                    }}
                  />
                  <p className="font-medium">{driver.vehicle.color}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* ETA and Distance */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/5 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Estimated Arrival</p>
              <p className="text-2xl font-bold text-primary mt-1">{ride.currentEtaMinutes} min</p>
            </div>
            <div className="bg-accent/5 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Distance</p>
              <p className="text-2xl font-bold text-accent mt-1">2.3 km</p>
            </div>
          </div>

          <Separator />

          {/* Route Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Route</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">From</p>
                  <p className="text-sm text-muted-foreground truncate">{ride.pickupLocation.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-sm bg-destructive" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">To</p>
                  <p className="text-sm text-muted-foreground truncate">{ride.dropoffLocation.name}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          onClick={handleContactDriver}
          className="w-full" 
          size="lg"
        >
          <SafeIcon name="Phone" size={18} className="mr-2" />
          Contact Driver
        </Button>
        <Button 
          onClick={handleBackToRide}
          variant="outline" 
          className="w-full" 
          size="lg"
        >
          <SafeIcon name="ChevronLeft" size={18} className="mr-2" />
          Back to Ride
        </Button>
      </div>

      {/* Safety Tips */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <SafeIcon name="AlertCircle" size={18} className="text-blue-600" />
            Safety Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-blue-900 space-y-2">
            <li className="flex gap-2">
              <span>•</span>
              <span>Verify the driver's name and vehicle details before boarding</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Share your ride details with a trusted contact</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Keep your phone charged during the ride</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
