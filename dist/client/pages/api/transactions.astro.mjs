import { T as Transaction } from "../../Transaction.CdD6lIQh.js";
import { c as connectDB } from "../../db.CUhxi6K0.js";
import { r as requireUserId } from "../../apiAuth.BGd6cIjK.js";
import { renderers } from "../../renderers.mjs";
const GET = async ({
  request
}) => {
  try {
    const userId = await requireUserId(request);
    await connectDB();
    const transactions = await Transaction.find({
      userId
    }).sort({
      createdAt: -1
    }).limit(100).lean();
    return new Response(JSON.stringify({
      transactions
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch {
    return new Response(JSON.stringify({
      error: "Unauthorized"
    }), {
      status: 401
    });
  }
};
const POST = async ({
  request
}) => {
  try {
    const userId = await requireUserId(request);
    const body = await request.json().catch(() => null);
    if (!body) return new Response(JSON.stringify({
      error: "Invalid JSON body"
    }), {
      status: 400
    });
    const provider = body.provider;
    const status = body.status;
    const amountKsh = body.amountKsh;
    if (!provider || !status || typeof amountKsh !== "number") {
      return new Response(JSON.stringify({
        error: "provider, status and amountKsh are required"
      }), {
        status: 400
      });
    }
    await connectDB();
    const tx = await Transaction.create({
      userId,
      rideId: body.rideId,
      provider,
      status,
      amountKsh,
      reference: body.reference,
      receipt: body.receipt
    });
    return new Response(JSON.stringify({
      transaction: {
        id: String(tx._id),
        status: tx.status
      }
    }), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    const msg = e?.message === "Unauthorized" ? "Unauthorized" : "Failed to create transaction";
    return new Response(JSON.stringify({
      error: msg
    }), {
      status: msg === "Unauthorized" ? 401 : 500
    });
  }
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
