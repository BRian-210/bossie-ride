/**
 * Example Socket.io Server for Real-time Messaging
 * 
 * This is a basic example of a Socket.io server that can be used
 * with the messaging system. Run this server separately from your
 * Astro application.
 * 
 * Installation:
 *   npm install socket.io
 * 
 * Usage:
 *   node socket-server-example.js
 */

const { Server } = require('socket.io');

// Create Socket.io server on port 3001
const io = new Server(3001, {
  cors: {
    origin: "*", // In production, specify your frontend URL
    methods: ["GET", "POST"],
    credentials: true
  }
});

console.log('Socket.io server running on http://localhost:3001');

io.on('connection', (socket) => {
  const { rideId, userId, userType } = socket.handshake.query;
  
  console.log(`Client connected: ${userId} (${userType}) for ride ${rideId}`);

  // Join ride room when client connects
  if (rideId) {
    socket.join(`ride:${rideId}`);
    console.log(`Client ${userId} joined room: ride:${rideId}`);
  }

  // Handle explicit join-ride event
  socket.on('join-ride', ({ rideId }) => {
    if (rideId) {
      socket.join(`ride:${rideId}`);
      console.log(`Client ${userId} joined room: ride:${rideId}`);
    }
  });

  // Handle new messages from clients
  // Note: In a production setup, you'd validate the message
  // and save it to the database before broadcasting
  socket.on('new-message', (message) => {
    if (message.rideId) {
      // Broadcast to all clients in the ride room
      io.to(`ride:${message.rideId}`).emit('new-message', message);
      console.log(`Broadcasting message in room: ride:${message.rideId}`);
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${userId}`);
  });

  // Handle errors
  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  io.close(() => {
    console.log('Socket.io server closed');
    process.exit(0);
  });
});

