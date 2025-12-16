
'use client'

import { useState, useEffect } from 'react'
import { mockCurrentRide } from '@/data/ride'
import DriverMapView from './DriverMapView'
import RideStatusOverlay from './RideStatusOverlay'
import DriverDetailsCard from './DriverDetailsCard'
import RideActionsPanel from './RideActionsPanel'
import RideSummaryCard from './RideSummaryCard'

export default function RideInProgressContent() {
  const [ride, setRide] = useState(mockCurrentRide)
  const [eta, setEta] = useState(ride.currentEtaMinutes)

  // Simulate ETA countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => (prev > 0 ? prev - 1 : 0))
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const handleTrackDriver = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './track-driver.html'
    }
  }

  const handleContactDriver = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './contact-driver.html'
    }
  }

  const handleCancelRide = () => {
    if (typeof window !== 'undefined') {
      const confirmed = confirm('Are you sure you want to cancel this ride?')
      if (confirmed) {
        window.location.href = './ride-request.html'
      }
    }
  }

  const handleRideCompleted = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './ride-completed.html'
    }
  }

  return (
    <div className="relative w-full h-[calc(100vh-64px-80px)] bg-background">
      {/* Map Background */}
      <DriverMapView 
        driverLocation={ride.driverDetails?.currentLocation}
        pickupLocation={ride.pickupLocation.coords}
        dropoffLocation={ride.dropoffLocation.coords}
        mapImageUrl={ride.driverMapImageUrl}
      />

      {/* Status Overlay */}
      <RideStatusOverlay 
        status={ride.status}
        eta={eta}
        pickupLocation={ride.pickupLocation.name}
        dropoffLocation={ride.dropoffLocation.name}
      />

      {/* Bottom Sheet Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl shadow-card max-h-[50vh] overflow-y-auto">
        <div className="p-4 space-y-4">
          {/* Driver Details */}
          {ride.driverDetails && (
            <DriverDetailsCard 
              driver={ride.driverDetails}
              onContact={handleContactDriver}
              onTrack={handleTrackDriver}
            />
          )}

          {/* Ride Summary */}
          <RideSummaryCard 
            pickupLocation={ride.pickupLocation.name}
            dropoffLocation={ride.dropoffLocation.name}
            fare={`KES ${ride.estimatedFare.toFixed(2)}`}
            rideType={ride.selectedRideType.name}
          />

          {/* Action Buttons */}
          <RideActionsPanel 
            onCancel={handleCancelRide}
            onTrack={handleTrackDriver}
            onContact={handleContactDriver}
            status={ride.status}
          />
        </div>
      </div>
    </div>
  )
}
