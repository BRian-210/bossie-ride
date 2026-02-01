
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { mockRideTypes, type RideTypeModel } from '@/data/ride'
import RideTypeCard from './RideTypeCard'
import SafeIcon from '@/components/common/SafeIcon'

export default function SelectRideTypeContent() {
  const [selectedRideType, setSelectedRideType] = useState<RideTypeModel>(mockRideTypes[0])

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './ride-request'
    }
  }

  const handleConfirm = () => {
    if (typeof window !== 'undefined') {
      // Store selected ride type in sessionStorage for next page
      sessionStorage.setItem('selectedRideType', JSON.stringify(selectedRideType))
      window.location.href = './confirm-ride'
    }
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Header Info */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Choose Your Ride</h2>
        <p className="text-muted-foreground">
          Select a vehicle type that suits your needs. Compare prices, capacity, and estimated arrival times.
        </p>
      </div>

      {/* Ride Type Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 scroll-smooth">
        {mockRideTypes.map((rideType) => (
          <RideTypeCard
            key={rideType.typeId}
            rideType={rideType}
            isSelected={selectedRideType.typeId === rideType.typeId}
            onSelect={() => setSelectedRideType(rideType)}
          />
        ))}
      </div>

      {/* Selected Ride Summary */}
      {selectedRideType && (
        <div 
          id="selected-ride-summary"
          className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Selected Ride</p>
              <p className="text-lg font-semibold">{selectedRideType.name}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Estimated Fare</p>
              <p className="text-2xl font-bold text-primary">KES {selectedRideType.baseFareKsh}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-primary/10">
            <div>
              <p className="text-xs text-muted-foreground">Capacity</p>
              <p className="font-semibold">{selectedRideType.capacity} passengers</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">ETA</p>
              <p className="font-semibold">{selectedRideType.etaMinutesDefault} min</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Type</p>
              <p className="font-semibold capitalize">{selectedRideType.name.split(' ')[1]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleBack}
        >
          <SafeIcon name="ChevronLeft" size={18} className="mr-2" />
          Back
        </Button>
        <Button
          className="flex-1"
          onClick={handleConfirm}
        >
          Confirm Ride
          <SafeIcon name="ChevronRight" size={18} className="ml-2" />
        </Button>
      </div>
    </div>
  )
}
