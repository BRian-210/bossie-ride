
import { mockCurrentRide } from '@/data/ride'
import { mockCurrentUser } from '@/data/user'
import { useMessaging } from '@/hooks/useMessaging'
import RideDetailsPanel from './RideDetailsPanel'
import MessagingInterface from './MessagingInterface'
import CallActionButtons from './CallActionButtons'

export default function ContactDriverContent() {
  const { messages, sendMessage, isConnected, isLoading, error } = useMessaging({
    rideId: mockCurrentRide.rideId,
    userId: mockCurrentUser.userId,
    userType: 'rider',
    socketUrl: import.meta.env.PUBLIC_SOCKET_URL,
  })

  const handleSendMessage = async (text: string) => {
    try {
      await sendMessage(text)
    } catch (err) {
      console.error('Failed to send message:', err)
    }
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
        isConnected={isConnected}
        isLoading={isLoading}
        error={error}
      />

      {/* Call Actions */}
      <CallActionButtons
        driverPhone={mockCurrentRide.driverDetails?.phone}
        onCall={handleCall}
      />
    </div>
  )
}
