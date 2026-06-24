import { c as connectDB } from "../../../db.CUhxi6K0.js";
import { T as Transaction } from "../../../Transaction.CdD6lIQh.js";
import { p as parseStkCallback, r as readCallbackItem } from "../../../daraja.CzebFnJE.js";
import { renderers } from "../../../renderers.mjs";
function accepted() {
  return new Response(JSON.stringify({
    ResultCode: 0,
    ResultDesc: "Accepted"
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
const POST = async ({
  request,
  url
}) => {
  const expected = process.env.DARAJA_CALLBACK_TOKEN;
  if (expected) {
    const token = url.searchParams.get("token");
    if (token !== expected) return accepted();
  }
  const body = await request.json().catch(() => null);
  const cb = parseStkCallback(body);
  if (!cb) return accepted();
  await connectDB();
  const tx = await Transaction.findOne({
    mpesaCheckoutRequestId: cb.CheckoutRequestID
  });
  if (!tx) return accepted();
  tx.mpesaResultCode = cb.ResultCode;
  tx.mpesaResultDesc = cb.ResultDesc;
  if (cb.ResultCode === 0) {
    const receipt = readCallbackItem(cb, "MpesaReceiptNumber");
    const phone = readCallbackItem(cb, "PhoneNumber");
    const amount = readCallbackItem(cb, "Amount");
    tx.status = "success";
    if (receipt) tx.receipt = String(receipt);
    if (phone) tx.mpesaPhoneNumber = String(phone);
    if (amount && typeof amount === "number") tx.amountKsh = amount;
  } else {
    tx.status = "failed";
  }
  await tx.save();
  return accepted();
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
