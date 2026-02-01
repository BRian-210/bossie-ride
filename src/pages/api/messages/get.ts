import type { APIRoute } from 'astro';
import connectDB from '@/lib/db';
import Message from '@/lib/models/Message';

export const GET: APIRoute = async ({ url }) => {
  try {
    await connectDB();

    const rideId = url.searchParams.get('rideId');

    if (!rideId) {
      return new Response(
        JSON.stringify({ error: 'rideId parameter is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Fetch messages for the ride, sorted by creation date (oldest first)
    const messages = await Message.find({ rideId })
      .sort({ createdAt: 1 })
      .lean();

    // Format messages for frontend
    const formattedMessages = messages.map((msg) => ({
      id: msg._id.toString(),
      sender: msg.senderType,
      text: msg.text,
      timestamp: new Date(msg.createdAt).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    }));

    return new Response(
      JSON.stringify({
        success: true,
        messages: formattedMessages,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Get messages error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to fetch messages' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

