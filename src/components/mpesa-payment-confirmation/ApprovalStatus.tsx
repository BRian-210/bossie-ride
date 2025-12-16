
import { useEffect, useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'

interface ApprovalStatusProps {
  status: 'pending' | 'approved' | 'failed'
  timeRemaining: number
}

export default function ApprovalStatus({ status, timeRemaining }: ApprovalStatusProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (status !== 'pending') {
      setIsAnimating(false)
    }
  }, [status])

  if (status === 'pending') {
    return (
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        <div className={`relative w-20 h-20 ${isAnimating ? 'animate-pulse' : ''}`}>
          <div className="absolute inset-0 rounded-full bg-primary/10 flex items-center justify-center">
            <SafeIcon 
              name="Smartphone" 
              size={40} 
              className="text-primary"
            />
          </div>
          {isAnimating && (
            <>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin" />
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary border-l-primary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
            </>
          )}
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg">Waiting for Approval</p>
          <p className="text-sm text-muted-foreground">
            Check your phone for the M-Pesa prompt
          </p>
        </div>
      </div>
    )
  }

  if (status === 'approved') {
    return (
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-green-100 flex items-center justify-center">
            <SafeIcon 
              name="CheckCircle2" 
              size={40} 
              className="text-green-600"
            />
          </div>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg text-green-600">Payment Approved</p>
          <p className="text-sm text-muted-foreground">
            Processing your transaction
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full bg-red-100 flex items-center justify-center">
          <SafeIcon 
            name="XCircle" 
            size={40} 
            className="text-red-600"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="font-semibold text-lg text-red-600">Payment Failed</p>
        <p className="text-sm text-muted-foreground">
          {timeRemaining === 0 
            ? 'Request timed out' 
            : 'Transaction was not approved'}
        </p>
      </div>
    </div>
  )
}
