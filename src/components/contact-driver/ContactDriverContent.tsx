
import { useState } from 'react'
import { mockCurrentRide } from '@/data/ride'
import RideDetailsPanel from './RideDetailsPanel'
import MessagingInterface from './MessagingInterface'
import CallActionButtons from './CallActionButtons'

export default function ContactDriverContent() {
  const [messages, setMessages] = useState<Array<{ id: string; sender: 'rider' | 'driver'; text: string; timestamp: string }>>([
    {
      id: '1',
      sender: 'driver',
      text: 'Hi! I\'m on my way. I\'ll be there in about 5 minutes.',
      timestamp: '14:32'
    },
    {
      id: '2',
      sender: 'rider',
      text: 'Great! I\'m ready. I\'ll be waiting outside.',
      timestamp: '14:33'
    },
    {
      id: '3',
      sender: 'driver',
      text: 'Perfect! I\'m driving a blue Suzuki Swift, plate KDD 543Z.',
      timestamp: '14:34'
    }
  ])

  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: String(messages.length + 1),
      sender: 'rider' as const,
      text,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    }
    setMessages([...messages, newMessage])
  }

  const handleCall = () => {
    if (mockCurrentRide.driverDetails?.phone) {
      window.location.href = `tel:${mockCurrentRide.driverDetails.phone}`
    }
  }

  const handleQuickMessage = (message: string) => {
    handleSendMessage(message)
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-4 space-y-4">
      {/* Ride Details */}
      <RideDetailsPanel ride={mockCurrentRide} />

      {/* Messaging Interface */}
      <MessagingInterface
        messages={messages}
        driverName={mockCurrentRide.driverDetails?.name || 'Driver'}
        driverAvatar={mockCurrentRide.driverDetails?.profileImageUrl}
        onSendMessage={handleSendMessage}
        onQuickMessage={handleQuickMessage}
      />

      {/* Call Actions */}
      <CallActionButtons
        driverPhone={mockCurrentRide.driverDetails?.phone}
        onCall={handleCall}
      />
    </div>
  )
}
