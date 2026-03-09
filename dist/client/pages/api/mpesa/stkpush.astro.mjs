import { c as connectDB } from "../../../db.Bk-H3Ses.js";
import { r as requireUserId } from "../../../apiAuth.pN4veGNE.js";
import { T as Transaction } from "../../../Transaction.BMZuEaBc.js";
import { a as requestStkPush } from "../../../daraja.CzebFnJE.js";
import { renderers } from "../../../renderers.mjs";
const POST = async ({
  request
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
  const body = await request.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({
    error: "Invalid JSON body"
  }), {
    status: 400
  });
  const phoneNumber = String(body.phoneNumber || "").trim();
  const amountKsh = Number(body.amountKsh);
  const rideId = body.rideId;
  if (!phoneNumber) return new Response(JSON.stringify({
    error: "phoneNumber is required"
  }), {
    status: 400
  });
  if (!Number.isFinite(amountKsh) || amountKsh <= 0) {
    return new Response(JSON.stringify({
      error: "amountKsh must be a positive number"
    }), {
      status: 400
    });
  }
  await connectDB();
  const tx = await Transaction.create({
    userId,
    rideId,
    provider: "mpesa",
    status: "pending",
    amountKsh: Math.round(amountKsh),
    mpesaPhoneNumber: phoneNumber
  });
  try {
    const stk = await requestStkPush({
      amountKsh: Math.round(amountKsh),
      phoneNumber,
      accountReference: String(body.accountReference || `BOSSIE-${String(tx._id).slice(-6)}`),
      transactionDesc: String(body.transactionDesc || "Bossie Ride payment")
    });
    tx.mpesaCheckoutRequestId = stk.CheckoutRequestID;
    tx.mpesaMerchantRequestId = stk.MerchantRequestID;
    tx.reference = stk.CheckoutRequestID;
    await tx.save();
    return new Response(JSON.stringify({
      transaction: {
        id: String(tx._id),
        status: tx.status
      },
      stk: {
        checkoutRequestId: stk.CheckoutRequestID,
        merchantRequestId: stk.MerchantRequestID,
        customerMessage: stk.CustomerMessage
      }
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    tx.status = "failed";
    tx.mpesaResultDesc = e?.message || "STK push failed";
    await tx.save();
    return new Response(JSON.stringify({
      error: tx.mpesaResultDesc
    }), {
      status: 500
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
