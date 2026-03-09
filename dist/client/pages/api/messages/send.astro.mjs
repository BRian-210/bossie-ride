import { c as connectDB } from "../../../db.Bk-H3Ses.js";
import { a as addMemoryMessage, M as Message } from "../../../memoryMessages.HACMM0zX.js";
import { renderers } from "../../../renderers.mjs";
const POST = async ({
  request
}) => {
  try {
    const body = await request.json();
    const {
      rideId,
      senderId,
      senderType,
      text
    } = body;
    if (!rideId || !senderId || !senderType || !text) {
      return new Response(JSON.stringify({
        error: "Missing required fields: rideId, senderId, senderType, text"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    if (!["rider", "driver"].includes(senderType)) {
      return new Response(JSON.stringify({
        error: 'Invalid senderType. Must be "rider" or "driver"'
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    if (!process.env.MONGODB_URI) {
      const message2 = addMemoryMessage({
        rideId,
        senderId,
        senderType,
        text: text.trim()
      });
      const timestamp2 = message2.createdAt.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
      return new Response(JSON.stringify({
        success: true,
        message: {
          id: message2.id,
          sender: message2.senderType,
          text: message2.text,
          timestamp: timestamp2
        }
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    await connectDB();
    const message = new Message({
      rideId,
      senderId,
      senderType,
      text: text.trim()
    });
    await message.save();
    const timestamp = new Date(message.createdAt).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    return new Response(JSON.stringify({
      success: true,
      message: {
        id: message._id.toString(),
        sender: message.senderType,
        text: message.text,
        timestamp
      }
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Send message error:", error);
    return new Response(JSON.stringify({
      error: error.message || "Failed to send message"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
