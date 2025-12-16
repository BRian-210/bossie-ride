
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import MapContainer from '@/components/common/MapContainer'
import LocationInputField from '@/components/ride-request/LocationInputField'
import { mockLocations } from '@/data/location'
import type { LocationModel } from '@/data/location'

export default function RideRequestForm() {
  const [pickupLocation, setPickupLocation] = useState<LocationModel | null>(mockLocations[0])
  const [dropoffLocation, setDropoffLocation] = useState<LocationModel | null>(mockLocations[1])
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false)
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false)
  const [pickupSearchTerm, setPickupSearchTerm] = useState(mockLocations[0].name)
  const [dropoffSearchTerm, setDropoffSearchTerm] = useState(mockLocations[1].name)

  const handlePickupChange = (value: string) => {
    setPickupSearchTerm(value)
    setShowPickupSuggestions(true)
  }

  const handleDropoffChange = (value: string) => {
    setDropoffSearchTerm(value)
    setShowDropoffSuggestions(true)
  }

  const handlePickupSelect = (location: LocationModel) => {
    setPickupLocation(location)
    setPickupSearchTerm(location.name)
    setShowPickupSuggestions(false)
  }

  const handleDropoffSelect = (location: LocationModel) => {
    setDropoffLocation(location)
    setDropoffSearchTerm(location.name)
    setShowDropoffSuggestions(false)
  }

  const handleSwapLocations = () => {
    const temp = pickupLocation
    setPickupLocation(dropoffLocation)
    setDropoffLocation(temp)
    
    const tempSearch = pickupSearchTerm
    setPickupSearchTerm(dropoffSearchTerm)
    setDropoffSearchTerm(tempSearch)
  }

  const handleContinue = () => {
    if (pickupLocation && dropoffLocation) {
      // Store selected locations in sessionStorage for next page
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('pickupLocation', JSON.stringify(pickupLocation))
        sessionStorage.setItem('dropoffLocation', JSON.stringify(dropoffLocation))
        window.location.href = './select-ride-type.html'
      }
    }
  }

  const handleViewHistory = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './ride-history.html'
    }
  }

  const isFormValid = pickupLocation && dropoffLocation && pickupLocation.locationId !== dropoffLocation.locationId

  return (
    <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Map Preview */}
      <MapContainer height="300px" showControls={true} />

      {/* Location Input Card */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Where are you going?</CardTitle>
          <CardDescription>Enter your pickup and dropoff locations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Pickup Location */}
          <div className="space-y-2">
            <LocationInputField
              label="Pickup Location"
              placeholder="Enter pickup location"
              value={pickupSearchTerm}
              onChange={handlePickupChange}
              onFocus={() => setShowPickupSuggestions(true)}
              onBlur={() => setTimeout(() => setShowPickupSuggestions(false), 200)}
              icon="MapPin"
              suggestions={mockLocations}
              showSuggestions={showPickupSuggestions}
              onSelectSuggestion={handlePickupSelect}
              selectedLocation={pickupLocation}
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapLocations}
              className="rounded-full"
              aria-label="Swap pickup and dropoff locations"
            >
              <SafeIcon name="ArrowUpDown" size={20} />
            </Button>
          </div>

          {/* Dropoff Location */}
          <div className="space-y-2">
            <LocationInputField
              label="Dropoff Location"
              placeholder="Enter dropoff location"
              value={dropoffSearchTerm}
              onChange={handleDropoffChange}
              onFocus={() => setShowDropoffSuggestions(true)}
              onBlur={() => setTimeout(() => setShowDropoffSuggestions(false), 200)}
              icon="MapPin"
              suggestions={mockLocations}
              showSuggestions={showDropoffSuggestions}
              onSelectSuggestion={handleDropoffSelect}
              selectedLocation={dropoffLocation}
            />
          </div>

          <Separator className="my-4" />

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleContinue}
              disabled={!isFormValid}
              className="w-full"
              size="lg"
            >
              <SafeIcon name="ArrowRight" size={18} className="mr-2" />
              Continue to Select Ride Type
            </Button>

            <Button
              onClick={handleViewHistory}
              variant="outline"
              className="w-full"
              size="lg"
            >
              <SafeIcon name="Clock" size={18} className="mr-2" />
              View Ride History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <SafeIcon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-medium text-sm">Pro Tip</p>
              <p className="text-sm text-muted-foreground">
                You can also tap on the map to select your pickup and dropoff locations directly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
