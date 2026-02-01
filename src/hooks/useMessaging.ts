import { useState, useEffect, useCallback, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export interface Message {
  id: string;
  sender: 'rider' | 'driver';
  text: string;
  timestamp: string;
}

interface UseMessagingOptions {
  rideId: string;
  userId: string;
  userType: 'rider' | 'driver';
  socketUrl?: string;
}

export function useMessaging({
  rideId,
  userId,
  userType,
  socketUrl = process.env.PUBLIC_SOCKET_URL || 'http://localhost:3001',
}: UseMessagingOptions) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  // Fetch initial messages from API
  const fetchMessages = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/messages/get?rideId=${rideId}`);
      const data = await response.json();

      if (data.success) {
        setMessages(data.messages);
      } else {
        setError(data.error || 'Failed to load messages');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load messages');
    } finally {
      setIsLoading(false);
    }
  }, [rideId]);

  // Send message via API
  const sendMessage = useCallback(
    async (text: string) => {
      try {
        const response = await fetch('/api/messages/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            rideId,
            senderId: userId,
            senderType: userType,
            text,
          }),
        });

        const data = await response.json();

        if (data.success) {
          // Add message optimistically (socket event will also add it, but this provides instant feedback)
          setMessages((prev) => {
            // Check if message already exists (from socket event)
            const exists = prev.some((msg) => msg.id === data.message.id);
            if (exists) {
              return prev;
            }
            return [...prev, data.message];
          });
          return data.message;
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (err: any) {
        setError(err.message || 'Failed to send message');
        throw err;
      }
    },
    [rideId, userId, userType]
  );

  // Initialize socket connection
  useEffect(() => {
    // Only connect if socket URL is provided
    if (!socketUrl || socketUrl === '') {
      console.warn('Socket URL not configured. Real-time messaging disabled.');
      fetchMessages();
      return;
    }

    // Initialize socket connection
    const socket = io(socketUrl, {
      query: {
        rideId,
        userId,
        userType,
      },
      transports: ['websocket', 'polling'],
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to messaging server');
      // Join the ride room
      socket.emit('join-ride', { rideId });
      // Fetch messages after connection
      fetchMessages();
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from messaging server');
    });

    socket.on('error', (err: any) => {
      setError(err.message || 'Socket connection error');
    });

    // Listen for new messages
    socket.on('new-message', (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [rideId, userId, userType, socketUrl, fetchMessages]);

  return {
    messages,
    sendMessage,
    isConnected,
    isLoading,
    error,
  };
}

