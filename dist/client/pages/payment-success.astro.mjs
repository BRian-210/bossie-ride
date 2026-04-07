import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.D-nZ0uYi.js";
import { S as SafeIcon, a as Button, B as Badge, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { c as mockSuccessReceipt } from "../payment.CLWALyqY.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { f as fetchAuthedJson } from "../authClient.CZydr8qd.js";
import { renderers } from "../renderers.mjs";
function PaymentSuccessContent() {
  const [receiptId, setReceiptId] = useState(mockSuccessReceipt.transactionId);
  const [amountPaid, setAmountPaid] = useState(mockSuccessReceipt.amountPaid);
  const rideRef = useMemo(() => {
    if (typeof window === "undefined") return mockSuccessReceipt.referenceRideId;
    return sessionStorage.getItem("currentRideId") || mockSuccessReceipt.referenceRideId;
  }, []);
  useEffect(() => {
    requireAuth("payment-success");
    if (typeof window === "undefined") return;
    const checkoutRequestId = sessionStorage.getItem("mpesaCheckoutRequestId");
    if (!checkoutRequestId) return;
    fetchAuthedJson(`./api/mpesa/status?checkoutRequestId=${encodeURIComponent(checkoutRequestId)}`, {
      method: "GET"
    }).then((res) => {
      if (res.transaction.receipt) setReceiptId(res.transaction.receipt);
      else if (res.transaction.reference) setReceiptId(res.transaction.reference);
      if (typeof res.transaction.amountKsh === "number") setAmountPaid(res.transaction.amountKsh);
    }).catch(() => {
    });
  }, []);
  const handleViewHistory = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./ride-history.html";
    }
  };
  const handleBackToRideDetails = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./ride-completed.html";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "54", "data-source-line-end": "187", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "56", "data-source-line-end": "66", children: /* @__PURE__ */ jsxs("div", { className: "relative w-24 h-24 rounded-full bg-success/10 flex items-center justify-center", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "57", "data-source-line-end": "65", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-success/5 animate-pulse", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "58", "data-source-line-end": "58" }),
      /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 56, className: "text-success relative z-10", strokeWidth: 1.5, "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "59", "data-source-line-end": "64" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "69", "data-source-line-end": "74", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground mb-2", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "70", "data-source-line-end": "70", children: "Payment Successful!" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "71", "data-source-line-end": "73", children: "Your payment has been processed successfully. Your ride is now confirmed." })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card mb-6", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "77", "data-source-line-end": "149", children: [
      /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "78", "data-source-line-end": "81", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "79", "data-source-line-end": "79", children: "Transaction Details" }),
        /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "80", "data-source-line-end": "80", children: "Keep this for your records" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "83", "data-source-line-end": "148", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "85", "data-source-line-end": "104", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: "Transaction ID" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "87", "data-source-line-end": "103", children: [
            /* @__PURE__ */ jsx("code", { className: "flex-1 bg-muted p-3 rounded-lg font-mono text-sm font-medium break-all", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "88", "data-source-line-end": "90", children: receiptId }),
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => {
              if (typeof window !== "undefined" && navigator.clipboard) {
                navigator.clipboard.writeText(receiptId);
              }
            }, "aria-label": "Copy transaction ID", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "91", "data-source-line-end": "102", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Copy", size: 18, "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "101", "data-source-line-end": "101" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "106", "data-source-line-end": "106" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "109", "data-source-line-end": "125", children: [
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "110", "data-source-line-end": "115", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "111", "data-source-line-end": "111", children: "Amount Paid" }),
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-success", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "112", "data-source-line-end": "114", children: [
              "KES ",
              amountPaid.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "116", "data-source-line-end": "124", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "117", "data-source-line-end": "117", children: "Payment Method" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "118", "data-source-line-end": "123", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "119", "data-source-line-end": "121", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Smartphone", size: 14, className: "text-primary", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "120", "data-source-line-end": "120" }) }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "122", "data-source-line-end": "122", children: receipt.method })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "127", "data-source-line-end": "127" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "130", "data-source-line-end": "139", children: [
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "131", "data-source-line-end": "134", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "132", "data-source-line-end": "132", children: "Date" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "133", "data-source-line-end": "133", children: receipt.date })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "135", "data-source-line-end": "138", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "136", "data-source-line-end": "136", children: "Time" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "137", "data-source-line-end": "137", children: receipt.time })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "141", "data-source-line-end": "141" }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "144", "data-source-line-end": "147", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "145", "data-source-line-end": "145", children: "Ride Reference" }),
          /* @__PURE__ */ jsx("p", { className: "font-mono text-sm font-medium", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "146", "data-source-line-end": "146", children: rideRef })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-8", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "152", "data-source-line-end": "157", children: /* @__PURE__ */ jsxs(Badge, { className: "bg-success/10 text-success border-success/20 flex items-center gap-2", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "153", "data-source-line-end": "156", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle", size: 14, "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "154", "data-source-line-end": "154" }),
      "Payment Confirmed"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "160", "data-source-line-end": "179", children: [
      /* @__PURE__ */ jsxs(Button, { onClick: handleViewHistory, className: "w-full", size: "lg", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "161", "data-source-line-end": "168", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 18, className: "mr-2", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "166", "data-source-line-end": "166" }),
        "View Ride History"
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleBackToRideDetails, variant: "outline", className: "w-full", size: "lg", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "170", "data-source-line-end": "178", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 18, className: "mr-2", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "176", "data-source-line-end": "176" }),
        "Back to Ride Details"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 p-4 bg-muted/50 rounded-lg", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "182", "data-source-line-end": "186", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-center", "data-source-file": "src/components/payment-success/PaymentSuccessContent.tsx", "data-source-line-start": "183", "data-source-line-end": "185", children: "A receipt has been sent to your registered email address. You can also view all your transactions in your ride history." }) })
  ] });
}
const $$PaymentSuccess = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Payment Successful - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Payment Confirmation", showNotifications: false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/payment-success.astro" data-source-line-start="16" data-source-line-end="18" class="flex-1 pb-20">
    ${renderComponent($$result2, "PaymentSuccessContent", PaymentSuccessContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/payment-success/PaymentSuccessContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/payment-success.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/payment-success.astro";
const $$url = "/payment-success.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PaymentSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
