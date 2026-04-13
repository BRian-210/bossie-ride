import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { f as fetchAuthedJson, $ as $$BaseLayout } from "../BaseLayout.DdVmMhb3.js";
import { S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription } from "../card.BA4JS6QT.js";
import { A as Alert, a as AlertDescription } from "../alert.uiCSQyi5.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { r as requireAuth } from "../requireAuthClient.DpcUQgPl.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { renderers } from "../renderers.mjs";
function TransactionSummary({
  transaction
}) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return /* @__PURE__ */ jsx(Card, { className: "bg-muted/50 border-0", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "31", "data-source-line-end": "74", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6 space-y-4", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "32", "data-source-line-end": "73", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "34", "data-source-line-end": "37", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "35", "data-source-line-end": "35", children: "Amount to Pay" }),
      /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold text-primary", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "36", "data-source-line-end": "36", children: transaction.amount })
    ] }),
    /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "39", "data-source-line-end": "39" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "42", "data-source-line-end": "50", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "43", "data-source-line-end": "48", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "44", "data-source-line-end": "46", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Smartphone", size: 16, className: "text-primary", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "45", "data-source-line-end": "45" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "47", "data-source-line-end": "47", children: "Phone Number" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "49", "data-source-line-end": "49", children: transaction.phoneNumber })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "53", "data-source-line-end": "61", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "54", "data-source-line-end": "59", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "55", "data-source-line-end": "57", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 16, className: "text-primary", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "56", "data-source-line-end": "56" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: "Date & Time" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: formatDate(transaction.timestamp) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "64", "data-source-line-end": "72", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "65", "data-source-line-end": "70", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "66", "data-source-line-end": "68", children: /* @__PURE__ */ jsx(SafeIcon, { name: "CreditCard", size: 16, className: "text-primary", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "67", "data-source-line-end": "67" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "69", "data-source-line-end": "69", children: "Payment Method" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/mpesa-payment-confirmation/TransactionSummary.tsx", "data-source-line-start": "71", "data-source-line-end": "71", children: "M-Pesa" })
    ] })
  ] }) });
}
function ApprovalStatus({
  status,
  timeRemaining
}) {
  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    if (status !== "pending") {
      setIsAnimating(false);
    }
  }, [status]);
  if (status === "pending") {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-8 space-y-4", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "21", "data-source-line-end": "43", children: [
      /* @__PURE__ */ jsxs("div", { className: `relative w-20 h-20 ${isAnimating ? "animate-pulse" : ""}`, "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "22", "data-source-line-end": "36", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "23", "data-source-line-end": "29", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Smartphone", size: 40, className: "text-primary", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "24", "data-source-line-end": "28" }) }),
        isAnimating && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "32", "data-source-line-end": "32" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-2 rounded-full border-2 border-transparent border-b-primary border-l-primary animate-spin", style: {
            animationDirection: "reverse",
            animationDuration: "1.5s"
          }, "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "33", "data-source-line-end": "33" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "37", "data-source-line-end": "42", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "38", "data-source-line-end": "38", children: "Waiting for Approval" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "39", "data-source-line-end": "41", children: "Check your phone for the M-Pesa prompt" })
      ] })
    ] });
  }
  if (status === "approved") {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-8 space-y-4", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "49", "data-source-line-end": "65", children: [
      /* @__PURE__ */ jsx("div", { className: "relative w-20 h-20", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "50", "data-source-line-end": "58", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-green-100 flex items-center justify-center", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "51", "data-source-line-end": "57", children: /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 40, className: "text-green-600", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "52", "data-source-line-end": "56" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "59", "data-source-line-end": "64", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg text-green-600", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: "Payment Approved" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "61", "data-source-line-end": "63", children: "Processing your transaction" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-8 space-y-4", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "70", "data-source-line-end": "88", children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-20 h-20", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "71", "data-source-line-end": "79", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-red-100 flex items-center justify-center", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "72", "data-source-line-end": "78", children: /* @__PURE__ */ jsx(SafeIcon, { name: "XCircle", size: 40, className: "text-red-600", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "73", "data-source-line-end": "77" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "80", "data-source-line-end": "87", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg text-red-600", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "81", "data-source-line-end": "81", children: "Payment Failed" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/ApprovalStatus.tsx", "data-source-line-start": "82", "data-source-line-end": "86", children: timeRemaining === 0 ? "Request timed out" : "Transaction was not approved" })
    ] })
  ] });
}
const mockTransaction = {
  phoneNumber: "+254 712 345 678",
  amount: "KES 450.00",
  transactionRef: "TXN20250116001234",
  rideId: "RIDE20250116005",
  timestamp: (/* @__PURE__ */ new Date()).toISOString()
};
function MpesaPaymentConfirmation() {
  const [transaction, setTransaction] = useState(mockTransaction);
  const [status, setStatus] = useState("pending");
  const [timeRemaining, setTimeRemaining] = useState(120);
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutRequestId, setCheckoutRequestId] = useState(null);
  useEffect(() => {
    requireAuth("mpesa-payment-confirmation");
    if (typeof window === "undefined") return;
    const crid = sessionStorage.getItem("mpesaCheckoutRequestId");
    const phone = sessionStorage.getItem("mpesaPhoneNumber") || mockTransaction.phoneNumber;
    const amountKsh = sessionStorage.getItem("mpesaAmountKsh");
    const rideId = sessionStorage.getItem("currentRideId") || mockTransaction.rideId;
    setCheckoutRequestId(crid);
    setTransaction({
      phoneNumber: phone,
      amount: amountKsh ? `KES ${Number(amountKsh).toFixed(2)}` : mockTransaction.amount,
      transactionRef: crid || mockTransaction.transactionRef,
      rideId,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (status !== "pending") return;
    if (!checkoutRequestId) return;
    const interval = setInterval(() => {
      fetchAuthedJson(`./api/mpesa/status?checkoutRequestId=${encodeURIComponent(checkoutRequestId)}`, {
        method: "GET"
      }).then((res) => {
        const s = res.transaction.status;
        if (s === "success") setStatus("approved");
        if (s === "failed") setStatus("failed");
      }).catch(() => {
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [status, checkoutRequestId]);
  useEffect(() => {
    if (status !== "pending" || timeRemaining <= 0) return;
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setStatus("failed");
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, [status, timeRemaining]);
  const handleRetry = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./mpesa-payment-details.html";
    }
  };
  const handleSuccess = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./payment-success.html";
    }
  };
  const handleFailure = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./payment-failure.html";
    }
  };
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsx("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "127", "data-source-line-end": "263", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "128", "data-source-line-end": "262", children: [
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "130", "data-source-line-end": "195", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "131", "data-source-line-end": "136", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "132", "data-source-line-end": "132", children: "Confirm Payment" }),
        /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "133", "data-source-line-end": "135", children: "Complete the payment on your mobile device" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "137", "data-source-line-end": "194", children: [
        /* @__PURE__ */ jsx(ApprovalStatus, { status, timeRemaining, "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "139", "data-source-line-end": "139" }),
        /* @__PURE__ */ jsx(TransactionSummary, { transaction, "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "142", "data-source-line-end": "142" }),
        status === "pending" && /* @__PURE__ */ jsxs(Alert, { className: "bg-blue-50 border-blue-200", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "146", "data-source-line-end": "152", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 16, className: "text-blue-600", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "147", "data-source-line-end": "147" }),
          /* @__PURE__ */ jsxs(AlertDescription, { className: "text-blue-800 ml-2", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "148", "data-source-line-end": "151", children: [
            "A prompt has been sent to ",
            /* @__PURE__ */ jsx("strong", { "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "149", "data-source-line-end": "149", children: transaction.phoneNumber }),
            ". Enter your M-Pesa PIN to complete the payment."
          ] })
        ] }),
        status === "pending" && /* @__PURE__ */ jsxs("div", { className: "text-center", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "157", "data-source-line-end": "162", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "158", "data-source-line-end": "158", children: "Request expires in" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-primary font-mono", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "159", "data-source-line-end": "161", children: formatTime(timeRemaining) })
        ] }),
        status === "approved" && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "167", "data-source-line-end": "177", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "168", "data-source-line-end": "170", children: /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 32, className: "text-green-600", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "169", "data-source-line-end": "169" }) }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "171", "data-source-line-end": "176", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "172", "data-source-line-end": "172", children: "Payment Approved!" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "173", "data-source-line-end": "175", children: "Your payment has been successfully processed" })
          ] })
        ] }),
        status === "failed" && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "182", "data-source-line-end": "192", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "183", "data-source-line-end": "185", children: /* @__PURE__ */ jsx(SafeIcon, { name: "XCircle", size: 32, className: "text-red-600", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "184", "data-source-line-end": "184" }) }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "186", "data-source-line-end": "191", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "187", "data-source-line-end": "187", children: "Payment Failed" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "188", "data-source-line-end": "190", children: "The payment could not be processed. Please try again." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "198", "data-source-line-end": "245", children: [
      status === "pending" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Button, { onClick: handleBack, variant: "outline", className: "w-full", disabled: isProcessing, "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "201", "data-source-line-end": "208", children: "Back to Payment Details" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "209", "data-source-line-end": "211", children: "Do not close this page while waiting for approval" })
      ] }),
      status === "approved" && /* @__PURE__ */ jsxs(Button, { onClick: handleSuccess, className: "w-full", size: "lg", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "216", "data-source-line-end": "223", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle", size: 18, className: "mr-2", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "221", "data-source-line-end": "221" }),
        "Continue to Receipt"
      ] }),
      status === "failed" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(Button, { onClick: handleRetry, className: "w-full", size: "lg", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "228", "data-source-line-end": "235", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "RotateCcw", size: 18, className: "mr-2", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "233", "data-source-line-end": "233" }),
          "Retry Payment"
        ] }),
        /* @__PURE__ */ jsx(Button, { onClick: handleFailure, variant: "outline", className: "w-full", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "236", "data-source-line-end": "242", children: "View Error Details" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "bg-muted/50 border-0", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "248", "data-source-line-end": "261", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "249", "data-source-line-end": "260", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "250", "data-source-line-end": "259", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "251", "data-source-line-end": "254", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "252", "data-source-line-end": "252", children: "Transaction ID:" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono font-medium", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "253", "data-source-line-end": "253", children: transaction.transactionRef })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "255", "data-source-line-end": "258", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "256", "data-source-line-end": "256", children: "Ride ID:" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono font-medium", "data-source-file": "src/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "data-source-line-start": "257", "data-source-line-end": "257", children: transaction.rideId })
      ] })
    ] }) }) })
  ] }) });
}
const $$MpesaPaymentConfirmation = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "M-Pesa Payment Confirmation - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, showBackButton: true, title: "Payment Confirmation", "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/mpesa-payment-confirmation.astro" data-source-line-start="16" data-source-line-end="18" class="min-h-[calc(100vh-64px-64px)] pb-20">
    ${renderComponent($$result2, "MpesaPaymentConfirmation", MpesaPaymentConfirmation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/mpesa-payment-confirmation/MpesaPaymentConfirmation.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "home", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/mpesa-payment-confirmation.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/mpesa-payment-confirmation.astro";
const $$url = "/mpesa-payment-confirmation.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$MpesaPaymentConfirmation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
