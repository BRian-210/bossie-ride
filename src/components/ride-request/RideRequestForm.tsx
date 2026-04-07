'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import MapContainer from '@/components/common/MapContainer'
import LocationInputField from '@/components/ride-request/LocationInputField'
import { mockLocations } from '@/data/location'
import type { LocationModel } from '@/data/location'
import { requireAuth } from '@/lib/requireAuthClient'
import { notify } from '@/lib/notify'  // Added to fix the notify error

export default function RideRequestForm() {
  const [pickupLocation, setPickupLocation] = useState<LocationModel | null>(null)
  const [dropoffLocation, setDropoffLocation] = useState<LocationModel | null>(null)
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false)
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false)
  const [pickupSearchTerm, setPickupSearchTerm] = useState('')
  const [dropoffSearchTerm, setDropoffSearchTerm] = useState('')
  const [isLocating, setIsLocating] = useState(false)
  const [preview, setPreview] = useState<{
    distance: string
    time: string
    fare: string
  } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    requireAuth('ride-request')
  }, [])
  useEffect(() => {
    if (pickupLocation && dropoffLocation && pickupLocation.locationId !== dropoffLocation.locationId) {
      const distanceKm = (Math.random() * 30 + 2).toFixed(1)
      const timeMin = Math.round(Number(distanceKm) * 2.5 + 5)
      const fare = Math.round(150 + Number(distanceKm) * 35)

      setPreview({
        distance: `${distanceKm} km`,
        time: `${timeMin} min`,
        fare: `KSh ${fare.toLocaleString()}`,
      })
    } else {
      setPreview(null)
    }
  }, [pickupLocation, dropoffLocation])

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
    const tempLoc = pickupLocation
    setPickupLocation(dropoffLocation)
    setDropoffLocation(tempLoc)

    const tempSearch = pickupSearchTerm
    setPickupSearchTerm(dropoffSearchTerm)
    setDropoffSearchTerm(tempSearch)
  }

  const handleGetCurrentLocation = useCallback(() => {
    setIsLocating(true)
    setTimeout(() => { 
      const current = mockLocations[0] 
      setPickupLocation(current)
      setPickupSearchTerm(current.name)
      notify({
        title: 'Location Set',
        message: 'Using your current location',
        level: 'success',
      })
      setIsLocating(false)
    }, 800)
  }, [])

  const handleContinue = () => {
    if (pickupLocation && dropoffLocation) {
      sessionStorage.setItem('pickupLocation', JSON.stringify(pickupLocation))
      sessionStorage.setItem('dropoffLocation', JSON.stringify(dropoffLocation))
      window.location.href = './select-ride-type.html'
    }
  }

  const handleViewHistory = () => {
    window.location.href = './ride-history.html'
  }

  const isFormValid = pickupLocation && dropoffLocation && pickupLocation.locationId !== dropoffLocation.locationId

  return (
    <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Map Preview */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border">
        <MapContainer height="380px" showControls={true} />
      </div>

      {/* Location Input Card – semi-transparent with blur */}
      <Card className="bg-white/90 backdrop-blur-md border border-border/50 shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Where are you going?</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your pickup and dropoff locations
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Pickup Location with current location button */}
          <div className="space-y-2 relative">
            <LocationInputField
              label="Pickup Location"
              placeholder="Your current location or search..."
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

            {/* "Use my location" button positioned inside/near the input */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-3 top-[42px] z-10 text-amber-600 hover:text-amber-700 hover:bg-amber-50/50"
              onClick={handleGetCurrentLocation}
              disabled={isLocating}
            >
              {isLocating ? (
                <SafeIcon name="Loader2" size={16} className="mr-1.5 animate-spin" />
              ) : (
                <SafeIcon name="Crosshair" size={16} className="mr-1.5" />
              )}
              Use current location
            </Button>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-2 relative z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapLocations}
              className="rounded-full border-2 shadow-sm bg-background"
              aria-label="Swap pickup and dropoff locations"
            >
              <SafeIcon name="ArrowUpDown" size={20} />
            </Button>
          </div>

          {/* Dropoff Location */}
          <div className="space-y-2">
            <LocationInputField
              label="Dropoff Location"
              placeholder="Where to? (e.g. Two Rivers, JKIA, Westlands...)"
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

          {/* Distance / Time / Fare Preview */}
          {preview && (
            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 mt-2">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Distance</p>
                  <p className="font-semibold text-foreground">{preview.distance}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Est. Time</p>
                  <p className="font-semibold text-foreground">{preview.time}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Est. Fare</p>
                  <p className="font-semibold text-amber-700">{preview.fare}</p>
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-3 italic">
                Fare is an estimate — final price depends on traffic & ride type
              </p>
            </div>
          )}

          <Separator className="my-5" />

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleContinue}
              disabled={!isFormValid}
              className="w-full bg-foreground hover:bg-foreground/90 text-background"
              size="lg"
            >
              <SafeIcon name="ArrowRight" size={18} className="mr-2" />
              See Prices & Ride Options
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
                Tap anywhere on the map to quickly set pickup or dropoff.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}