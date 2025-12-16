
import { useEffect, useRef, useState } from 'react'
import MapContainer from '@/components/common/MapContainer'
import SafeIcon from '@/components/common/SafeIcon'
import type { CoordinatesModel } from '@/data/location'

interface DriverMapViewProps {
  driverLocation?: CoordinatesModel
  pickupLocation?: CoordinatesModel
  dropoffLocation?: CoordinatesModel
  mapImageUrl?: string
}

export default function DriverMapView({
  driverLocation,
  pickupLocation,
  dropoffLocation,
  mapImageUrl
}: DriverMapViewProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <div className="text-center space-y-2">
          <SafeIcon name="Map" size={48} className="mx-auto text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <MapContainer
      height="100%"
      showControls={true}
      className="w-full h-full"
    >
      {/* Map Background Image */}
      {mapImageUrl && (
        <img 
          src={mapImageUrl} 
          alt="Live map view" 
          className="w-full h-full object-cover"
        />
      )}

      {/* Driver Location Marker */}
      {driverLocation && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" style={{ width: '60px', height: '60px', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }} />
            
            {/* Driver Marker */}
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-white">
              <SafeIcon name="Car" size={24} color="white" />
            </div>
          </div>
        </div>
      )}

      {/* Pickup Location Marker */}
      {pickupLocation && (
        <div className="absolute top-1/4 left-1/4 z-5">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg border-2 border-white">
            <SafeIcon name="MapPin" size={16} color="white" />
          </div>
        </div>
      )}

      {/* Dropoff Location Marker */}
      {dropoffLocation && (
        <div className="absolute bottom-1/4 right-1/4 z-5">
          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shadow-lg border-2 border-white">
            <SafeIcon name="MapPin" size={16} color="white" />
          </div>
        </div>
      )}
    </MapContainer>
  )
}
