import { c as connectDB } from "../../../db.CUhxi6K0.js";
import { r as requireUserId } from "../../../apiAuth.BGd6cIjK.js";
import { T as Transaction } from "../../../Transaction.CdD6lIQh.js";
import { renderers } from "../../../renderers.mjs";
const GET = async ({
  request,
  url
}) => {
  let userId;
  try {
    userId = await requireUserId(request);
  } catch {
    return new Response(JSON.stringify({
      error: "Unauthorized"
    }), {
      status: 401
    });
  }
  const checkoutRequestId = url.searchParams.get("checkoutRequestId") || "";
  if (!checkoutRequestId) {
    return new Response(JSON.stringify({
      error: "checkoutRequestId is required"
    }), {
      status: 400
    });
  }
  await connectDB();
  const tx = await Transaction.findOne({
    userId,
    mpesaCheckoutRequestId: checkoutRequestId
  }).lean();
  if (!tx) return new Response(JSON.stringify({
    error: "Not found"
  }), {
    status: 404
  });
  return new Response(JSON.stringify({
    transaction: {
      id: String(tx._id),
      status: tx.status,
      amountKsh: tx.amountKsh,
      reference: tx.reference,
      receipt: tx.receipt,
      mpesaResultCode: tx.mpesaResultCode,
      mpesaResultDesc: tx.mpesaResultDesc
    }
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
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
