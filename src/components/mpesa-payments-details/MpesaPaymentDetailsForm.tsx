
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'

// Mock payment data
const mockPaymentData = {
  rideId: 'RIDE-2024-001',
  pickupLocation: 'Nairobi CBD, Tom Mboya Street',
  dropoffLocation: 'Westlands, Mpesi Lane',
  fare: 'KES 450',
  fareAmount: 450,
  estimatedTime: '15 mins',
  rideDate: 'Today, 2:30 PM',
  vehicleType: 'Standard',
  driverName: 'John Kipchoge'
}

// Validation schema
const mpesaPaymentSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^(\+254|0)[17]\d{8}$/, 'Please enter a valid Kenyan phone number (e.g., 0712345678 or +254712345678)')
})

type MpesaPaymentFormValues = z.infer<typeof mpesaPaymentSchema>

export default function MpesaPaymentDetailsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const form = useForm<MpesaPaymentFormValues>({
    resolver: zodResolver(mpesaPaymentSchema),
    defaultValues: {
      phoneNumber: ''
    }
  })

  const onSubmit = async (values: MpesaPaymentFormValues) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    setShowConfirmation(true)
    setIsSubmitting(false)
  }

  const handleProceedToConfirmation = () => {
    if (typeof window !== 'undefined') {
      window.location.href = './mpesa-payment-confirmation.html'
    }
  }

  const handleBackToPaymentInitiation = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  if (showConfirmation) {
    return (
      <div className="space-y-6">
        {/* Confirmation Card */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SafeIcon name="CheckCircle" size={24} className="text-green-500" />
              Confirm Payment Details
            </CardTitle>
            <CardDescription>Review your M-Pesa payment information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Payment Summary */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Payment Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ride ID:</span>
                    <span className="font-medium">{mockPaymentData.rideId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">From:</span>
                    <span className="font-medium text-right max-w-xs">{mockPaymentData.pickupLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">To:</span>
                    <span className="font-medium text-right max-w-xs">{mockPaymentData.dropoffLocation}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* M-Pesa Details */}
              <div>
                <h3 className="font-semibold mb-3">M-Pesa Payment</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Number:</span>
                    <span className="font-medium font-mono">{form.getValues('phoneNumber')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-bold text-lg text-primary">{mockPaymentData.fare}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Instructions */}
              <Alert>
                <SafeIcon name="Info" size={16} />
                <AlertDescription>
                  You will receive an M-Pesa prompt on your phone. Enter your M-Pesa PIN to complete the payment.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleProceedToConfirmation}
            size="lg"
            className="w-full"
          >
            <SafeIcon name="Check" size={18} className="mr-2" />
            Proceed to Confirmation
          </Button>
          <Button 
            onClick={handleBackToPaymentInitiation}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <SafeIcon name="ChevronLeft" size={18} className="mr-2" />
            Change Payment Method
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Payment Details Card */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Enter M-Pesa Details</CardTitle>
          <CardDescription>Provide your phone number to complete the payment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Ride Summary */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-sm">Ride Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <SafeIcon name="MapPin" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-muted-foreground text-xs">From</p>
                  <p className="font-medium truncate">{mockPaymentData.pickupLocation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <SafeIcon name="MapPin" size={16} className="text-destructive mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-muted-foreground text-xs">To</p>
                  <p className="font-medium truncate">{mockPaymentData.dropoffLocation}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Amount Display */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Amount to Pay</p>
            <p className="text-4xl font-bold text-primary">{mockPaymentData.fare}</p>
            <p className="text-xs text-muted-foreground">{mockPaymentData.rideDate}</p>
          </div>

          <Separator />

          {/* M-Pesa Phone Number Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>M-Pesa Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          🇰🇪
                        </span>
                        <Input
                          {...field}
                          placeholder="0712345678"
                          className="pl-10"
                          type="tel"
                          disabled={isSubmitting}
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Enter your Kenyan phone number (0712345678 or +254712345678)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Info Alert */}
              <Alert>
                <SafeIcon name="AlertCircle" size={16} />
                <AlertDescription>
                  Make sure you have M-Pesa enabled on this phone number and sufficient balance.
                </AlertDescription>
              </Alert>

              {/* Submit Button */}
              <Button 
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <SafeIcon name="CreditCard" size={18} className="mr-2" />
                    Confirm Payment Details
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Back Button */}
      <Button 
        onClick={handleBackToPaymentInitiation}
        variant="outline"
        size="lg"
        className="w-full"
      >
        <SafeIcon name="ChevronLeft" size={18} className="mr-2" />
        Back to Payment Method
      </Button>

      {/* Security Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
        <div className="flex items-start gap-2">
          <SafeIcon name="Lock" size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-medium text-blue-900">Secure Payment</p>
            <p className="text-blue-800 text-xs mt-1">
              Your payment information is encrypted and secure. Bossie Ride never stores your M-Pesa PIN.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
