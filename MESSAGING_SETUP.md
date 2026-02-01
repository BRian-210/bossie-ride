# Messaging Service Setup Guide

This application now uses an external messaging service for real-time communication between riders and drivers.

## Architecture

The messaging system consists of:
1. **API Endpoints** - REST API for sending and retrieving messages
2. **Socket.io Client** - Real-time WebSocket connection for instant message delivery
3. **MongoDB Storage** - Persistent message storage

## Installation

1. Install the required dependency:
```bash
npm install socket.io-client
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/bossie-ride

# Socket.io Server URL (optional - if not set, messaging works via API only)
PUBLIC_SOCKET_URL=http://localhost:3001
```

### Socket.io Server Setup

The messaging system requires a Socket.io server for real-time functionality. You have two options:

#### Option 1: Use a Hosted Service
- Use services like Pusher, Ably, or Stream Chat
- Update `PUBLIC_SOCKET_URL` to point to your service

#### Option 2: Run Your Own Socket.io Server

Create a simple Socket.io server (example in `socket-server-example.js`):

```javascript
const io = require('socket.io')(3001, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  const { rideId, userId, userType } = socket.handshake.query;
  
  // Join ride room
  socket.on('join-ride', ({ rideId }) => {
    socket.join(`ride:${rideId}`);
  });

  // Broadcast new messages to all clients in the ride room
  socket.on('new-message', (message) => {
    io.to(`ride:${message.rideId}`).emit('new-message', message);
  });
});
```

## API Endpoints

### Send Message
- **POST** `/api/messages/send`
- **Body:**
  ```json
  {
    "rideId": "RIDE_123456",
    "senderId": "user_123",
    "senderType": "rider" | "driver",
    "text": "Message text"
  }
  ```

### Get Messages
- **GET** `/api/messages/get?rideId=RIDE_123456`
- **Response:**
  ```json
  {
    "success": true,
    "messages": [
      {
        "id": "msg_123",
        "sender": "rider",
        "text": "Message text",
        "timestamp": "14:32"
      }
    ]
  }
  ```

## Usage

The messaging system is integrated into `ContactDriverContent` component using the `useMessaging` hook:

```typescript
const { messages, sendMessage, isConnected, isLoading, error } = useMessaging({
  rideId: 'RIDE_123456',
  userId: 'user_123',
  userType: 'rider',
  socketUrl: import.meta.env.PUBLIC_SOCKET_URL,
});
```

## Features

- ✅ Real-time message delivery via WebSocket
- ✅ Persistent message storage in MongoDB
- ✅ Connection status indicator
- ✅ Loading and error states
- ✅ Fallback to API-only mode if Socket.io server is not available

## Notes

- If `PUBLIC_SOCKET_URL` is not configured, the system will work in API-only mode (messages are sent/received via REST API, but no real-time updates)
- Messages are stored in MongoDB and persist across sessions
- The Socket.io server should broadcast new messages to all clients in the same ride room

