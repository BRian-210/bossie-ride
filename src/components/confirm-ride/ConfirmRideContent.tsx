
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import { mockCurrentRide, mockRideTypes } from '@/data/ride'
import { mockLocations } from '@/data/location'


export default function ConfirmRideContent() {
  const [isConfirming, setIsConfirming] = useState<boolean>(false)
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false)

  // Use mock data for initial render
  const ride = mockCurrentRide
  const rideType = ride.selectedRideType
  const pickupLocation = ride.pickupLocation
  const dropoffLocation = ride.dropoffLocation

  const handleConfirmBooking = () => {
    setIsConfirming(true)
    // Simulate booking confirmation delay
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location.href = './ride-in-progress'
      }
    }, 1000)
  }

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Ride Summary Card */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Ride Summary</CardTitle>
          <CardDescription>Review your booking details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Locations Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">Route</h3>
            
            {/* Pickup Location */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="w-0.5 h-12 bg-border" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-xs font-medium text-muted-foreground">PICKUP</p>
                <p className="font-semibold text-base">{pickupLocation.name}</p>
                <p className="text-sm text-muted-foreground">{pickupLocation.address}</p>
              </div>
            </div>

            {/* Dropoff Location */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <p className="text-xs font-medium text-muted-foreground">DROPOFF</p>
                <p className="font-semibold text-base">{dropoffLocation.name}</p>
                <p className="text-sm text-muted-foreground">{dropoffLocation.address}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Ride Type Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">Ride Type</h3>
            
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex gap-4 p-4">
                {/* Ride Type Image */}
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                  <img
                    src={rideType.imageUrl}
                    alt={rideType.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Ride Type Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{rideType.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {rideType.capacity} seats
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{rideType.description}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <SafeIcon name="Clock" size={16} />
                      <span>{rideType.etaMinutesDefault} min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Fare Breakdown Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">Fare Details</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Base Fare</span>
                <span className="font-medium">KES {rideType.baseFareKsh.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distance Estimate</span>
                <span className="font-medium">KES {(ride.estimatedFare - rideType.baseFareKsh).toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between items-center">
                <span className="font-semibold">Estimated Total</span>
                <span className="text-2xl font-bold text-primary">KES {ride.estimatedFare.toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
              <div className="flex gap-2">
                <SafeIcon name="Info" size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700">
                  Final fare may vary based on actual distance and traffic conditions
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* ETA Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">Estimated Time</h3>
            
            <div className="flex items-center gap-3 bg-primary/5 rounded-lg p-4">
              <SafeIcon name="Clock" size={24} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Estimated arrival</p>
                <p className="text-xl font-bold text-primary">{ride.currentEtaMinutes} minutes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms & Conditions */}
      <div className="bg-muted/50 rounded-lg p-4 space-y-2">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-border cursor-pointer"
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
            I agree to the{' '}
            <a href="#" className="text-primary hover:underline font-medium">
              Terms & Conditions
            </a>
            {' '}and{' '}
            <a href="#" className="text-primary hover:underline font-medium">
              Privacy Policy
            </a>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pb-4">
        <Button
          onClick={handleConfirmBooking}
          size="lg"
          className="w-full"
          disabled={isConfirming || !agreedToTerms}
        >
          {isConfirming ? (
            <>
              <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
              Confirming...
            </>
          ) : (
            <>
              <SafeIcon name="CheckCircle" size={18} className="mr-2" />
              Confirm Booking
            </>
          )}
        </Button>

        <Button
          onClick={handleBack}
          variant="outline"
          size="lg"
          className="w-full"
          disabled={isConfirming}
        >
          <SafeIcon name="ChevronLeft" size={18} className="mr-2" />
          Back to Ride Types
        </Button>
      </div>
    </div>
  )
}
