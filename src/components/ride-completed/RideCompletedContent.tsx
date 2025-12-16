
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import RideCompletedHeader from './RideCompletedHeader'
import RideSummaryCard from './RideSummaryCard'
import DriverRatingCard from './DriverRatingCard'

interface RideData {
  id: string
  pickupLocation: string
  dropoffLocation: string
  driverName: string
  driverAvatar: string
  driverRating: number
  vehicleType: string
  vehiclePlate: string
  fare: string
  duration: string
  distance: string
  completedAt: string
}

// Mock data for SSG initialization
const mockRideData: RideData = {
  id: 'RIDE-2024-001',
  pickupLocation: 'Nairobi CBD, Tom Mboya Street',
  dropoffLocation: 'Westlands, Mpesi Lane',
  driverName: 'John Kariuki',
  driverAvatar: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/21/2371a68c-fc0f-4411-9a16-36554e8385c2.png',
  driverRating: 4.8,
  vehicleType: 'Toyota Prius',
  vehiclePlate: 'KBZ 123A',
  fare: 'KES 450',
  duration: '18 minutes',
  distance: '8.5 km',
  completedAt: 'Today at 2:45 PM'
}

export default function RideCompletedContent() {
  const [rideData] = useState<RideData>(mockRideData)
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [isSubmittingRating, setIsSubmittingRating] = useState(false)

  const handleRatingSubmit = () => {
    setIsSubmittingRating(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmittingRating(false)
      // Show success toast or navigate
    }, 1000)
  }

  const handleViewHistory = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './ride-history.html'
    }
  }

  const handleRequestNewRide = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './ride-request.html'
    }
  }

  const handleMakePayment = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './payment-initiation.html'
    }
  }

  const handleBackToRideDetails = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Completion Header */}
      <RideCompletedHeader completedAt={rideData.completedAt} />

      {/* Ride Summary */}
      <RideSummaryCard
        pickupLocation={rideData.pickupLocation}
        dropoffLocation={rideData.dropoffLocation}
        driverName={rideData.driverName}
        driverAvatar={rideData.driverAvatar}
        driverRating={rideData.driverRating}
        vehicleType={rideData.vehicleType}
        vehiclePlate={rideData.vehiclePlate}
        fare={rideData.fare}
        duration={rideData.duration}
        distance={rideData.distance}
      />

      {/* Fare Breakdown */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Fare Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Base Fare</span>
            <span className="font-medium">KES 250</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Distance ({rideData.distance})</span>
            <span className="font-medium">KES 150</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Service Fee</span>
            <span className="font-medium">KES 50</span>
          </div>
          <Separator />
          <div className="flex justify-between items-center pt-2">
            <span className="font-semibold">Total Fare</span>
            <span className="text-2xl font-bold text-primary">{rideData.fare}</span>
          </div>
        </CardContent>
      </Card>

      {/* Driver Rating */}
      <DriverRatingCard
        driverName={rideData.driverName}
        rating={rating}
        onRatingChange={setRating}
        feedback={feedback}
        onFeedbackChange={setFeedback}
        onSubmit={handleRatingSubmit}
        isSubmitting={isSubmittingRating}
      />

      {/* Action Buttons */}
      <div className="space-y-3 pb-4">
        <Button
          onClick={handleMakePayment}
          size="lg"
          className="w-full"
        >
          <SafeIcon name="CreditCard" size={18} className="mr-2" />
          Make Payment
        </Button>

        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={handleRequestNewRide}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <SafeIcon name="Plus" size={18} className="mr-2" />
            New Ride
          </Button>

          <Button
            onClick={handleViewHistory}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <SafeIcon name="Clock" size={18} className="mr-2" />
            History
          </Button>
        </div>

        <Button
          onClick={handleBackToRideDetails}
          variant="ghost"
          size="lg"
          className="w-full"
        >
          <SafeIcon name="ChevronLeft" size={18} className="mr-2" />
          Back to Details
        </Button>
      </div>
    </div>
  )
}
