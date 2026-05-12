import { c as connectDB } from "../../../db.Bk-H3Ses.js";
import { g as getMemoryMessages, M as Message } from "../../../memoryMessages.HACMM0zX.js";
import { renderers } from "../../../renderers.mjs";
const GET = async ({
  url
}) => {
  try {
    const rideId = url.searchParams.get("rideId");
    if (!rideId) {
      return new Response(JSON.stringify({
        error: "rideId parameter is required"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    if (!process.env.MONGODB_URI) {
      const messages2 = getMemoryMessages(rideId);
      const formattedMessages2 = messages2.map((msg) => ({
        id: msg.id,
        sender: msg.senderType,
        text: msg.text,
        timestamp: msg.createdAt.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        })
      }));
      return new Response(JSON.stringify({
        success: true,
        messages: formattedMessages2
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    await connectDB();
    const messages = await Message.find({
      rideId
    }).sort({
      createdAt: 1
    }).lean();
    const formattedMessages = messages.map((msg) => ({
      id: msg._id.toString(),
      sender: msg.senderType,
      text: msg.text,
      timestamp: new Date(msg.createdAt).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      })
    }));
    return new Response(JSON.stringify({
      success: true,
      messages: formattedMessages
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Get messages error:", error);
    return new Response(JSON.stringify({
      error: error.message || "Failed to fetch messages"
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
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
