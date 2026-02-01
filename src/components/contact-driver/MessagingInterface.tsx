
import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import SafeIcon from '@/components/common/SafeIcon'

interface Message {
  id: string
  sender: 'rider' | 'driver'
  text: string
  timestamp: string
}

interface MessagingInterfaceProps {
  messages: Message[]
  driverName: string
  driverAvatar?: string
  onSendMessage: (text: string) => void
  onQuickMessage: (message: string) => void
  isConnected?: boolean
  isLoading?: boolean
  error?: string | null
}

const quickMessages = [
  'I\'m running late',
  'Where are you?',
  'I\'m ready',
  'Thank you!'
]

export default function MessagingInterface({
  messages,
  driverName,
  driverAvatar,
  onSendMessage,
  onQuickMessage,
  isConnected,
  isLoading = false,
  error
}: MessagingInterfaceProps) {
  const [inputValue, setInputValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue)
      setInputValue('')
    }
  }

  const handleQuickMessage = (message: string) => {
    onQuickMessage(message)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="shadow-card flex flex-col h-[500px]">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Messages with {driverName}</CardTitle>
          {isConnected !== undefined && (
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="text-xs text-muted-foreground">
                {isConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Error Message */}
        {error && (
          <div className="p-3 bg-destructive/10 text-destructive text-sm border-b">
            {error}
          </div>
        )}
        
        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          {isLoading && messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-muted-foreground">Loading messages...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'rider' ? 'flex-row-reverse' : ''}`}
              >
                {message.sender === 'driver' && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarImage src={driverAvatar} alt={driverName} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {driverName.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                )}

                <div className={`flex flex-col gap-1 max-w-xs ${message.sender === 'rider' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.sender === 'rider'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted text-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm break-words">{message.text}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                </div>
              </div>
              ))}
              <div ref={scrollRef} />
            </div>
          )}
        </ScrollArea>

        {/* Quick Messages */}
        <div className="border-t p-3 space-y-2">
          <p className="text-xs text-muted-foreground px-1">Quick replies:</p>
          <div className="grid grid-cols-2 gap-2">
            {quickMessages.map((msg, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                onClick={() => handleQuickMessage(msg)}
                className="text-xs h-8"
              >
                {msg}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t p-3 flex gap-2">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="flex-shrink-0"
          >
            <SafeIcon name="Send" size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
