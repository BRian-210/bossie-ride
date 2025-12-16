
'use client'

import { useState } from 'react'
import { useNavigate } from '@/hooks/useNavigate'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import PaymentMethodSelector from '@/components/common/PaymentMethodSelector'
import { mockPaymentSummary, mockPaymentOptions } from '@/data/payment'
import { mockCompletedRide } from '@/data/ride'

interface PaymentMethod {
  id: string
  name: string
  icon: string
  description?: string
}

export default function PaymentInitiationContent() {
  const [selectedMethod, setSelectedMethod] = useState('mpesa')
  const navigate = useNavigate()

  // Convert payment options to selector format
  const paymentMethods: PaymentMethod[] = mockPaymentOptions.map(option => ({
    id: option.method.toLowerCase(),
    name: option.name,
    icon: option.method === 'MPESA' ? 'Smartphone' : option.iconUrl,
    description: option.description
  }))

  const handleMethodChange = (methodId: string) => {
    setSelectedMethod(methodId)
  }

  const handleProceedToPayment = () => {
    if (selectedMethod === 'mpesa') {
      navigate('/mpesa-payment-details.html')
    } else {
      // For other methods, could navigate to different pages
      navigate('/mpesa-payment-details.html')
    }
  }

  const handleBackToRide = () => {
    navigate('/ride-completed.html')
  }

  const formatCurrency = (amount: number) => {
    return `KES ${amount.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Payment Summary Card */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Payment Summary</span>
            <Badge variant="outline" className="text-xs">
              <SafeIcon name="Clock" size={14} className="mr-1" />
              Pending
            </Badge>
          </CardTitle>
          <CardDescription>Ride ID: {mockPaymentSummary.rideId}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Ride Details */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground">From</p>
                <p className="font-medium truncate">{mockCompletedRide.pickupLocation.name}</p>
                <p className="text-sm text-muted-foreground truncate">{mockCompletedRide.pickupLocation.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-sm bg-destructive" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground">To</p>
                <p className="font-medium truncate">{mockCompletedRide.dropoffLocation.name}</p>
                <p className="text-sm text-muted-foreground truncate">{mockCompletedRide.dropoffLocation.address}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Amount Due */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Ride Fare</span>
              <span className="font-medium">{formatCurrency(mockCompletedRide.finalFare)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Distance</span>
              <span className="font-medium">{mockCompletedRide.distanceKm} km</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Duration</span>
              <span className="font-medium">{mockCompletedRide.durationMinutes} minutes</span>
            </div>
          </div>

          <Separator />

          {/* Total Amount */}
          <div className="bg-primary/5 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Amount Due</p>
            <p className="text-3xl font-bold text-primary">
              {formatCurrency(mockPaymentSummary.amountDue)}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Reference: {mockPaymentSummary.referenceNumber}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method Selector */}
      <PaymentMethodSelector
        amount={formatCurrency(mockPaymentSummary.amountDue)}
        selectedMethod={selectedMethod}
        onMethodChange={handleMethodChange}
        methods={paymentMethods}
        onConfirm={handleProceedToPayment}
      />

      {/* Additional Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <SafeIcon name="Info" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Payment Information</p>
              <p>Your payment will be processed securely. You'll receive a confirmation once the transaction is complete.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Back Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={handleBackToRide}
      >
        <SafeIcon name="ChevronLeft" size={16} className="mr-2" />
        Back to Ride Details
      </Button>
    </div>
  )
}
