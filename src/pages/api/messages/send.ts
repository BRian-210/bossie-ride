import type { APIRoute } from 'astro';
import connectDB from '@/lib/db';
import Message from '@/lib/models/Message';

export const POST: APIRoute = async ({ request }) => {
  try {
    await connectDB();

    const body = await request.json();
    const { rideId, senderId, senderType, text } = body;

    // Validation
    if (!rideId || !senderId || !senderType || !text) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: rideId, senderId, senderType, text' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!['rider', 'driver'].includes(senderType)) {
      return new Response(
        JSON.stringify({ error: 'Invalid senderType. Must be "rider" or "driver"' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create message
    const message = new Message({
      rideId,
      senderId,
      senderType,
      text: text.trim(),
    });

    await message.save();

    // Format timestamp for frontend
    const timestamp = new Date(message.createdAt).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    // Return message data
    return new Response(
      JSON.stringify({
        success: true,
        message: {
          id: message._id.toString(),
          sender: message.senderType,
          text: message.text,
          timestamp,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Send message error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to send message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

