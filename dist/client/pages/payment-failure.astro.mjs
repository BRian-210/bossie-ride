import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.CtgI0PpG.js";
import { S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, c as CardDescription } from "../card.BA4JS6QT.js";
import { A as Alert, b as AlertTitle, a as AlertDescription } from "../alert.uiCSQyi5.js";
import "../separator.DdA1LhoM.js";
import { m as mockFailureDetails } from "../payment.CLWALyqY.js";
import { renderers } from "../renderers.mjs";
function PaymentFailureContent({
  className = ""
}) {
  const [isRetrying, setIsRetrying] = useState(false);
  const handleRetryPayment = () => {
    setIsRetrying(true);
    if (typeof window !== "undefined") {
      window.location.href = "./mpesa-payment-details.html";
    }
  };
  const handleBackToRideDetails = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./ride-completed.html";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `container max-w-2xl mx-auto px-4 py-8 ${className}`, "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "32", "data-source-line-end": "144", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "34", "data-source-line-end": "42", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-4", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "35", "data-source-line-end": "37", children: /* @__PURE__ */ jsx(SafeIcon, { name: "XCircle", size: 48, className: "text-destructive", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "36", "data-source-line-end": "36" }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground mb-2", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "38", "data-source-line-end": "38", children: "Payment Failed" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "39", "data-source-line-end": "41", children: "Unfortunately, your payment could not be processed" })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card mb-6", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "45", "data-source-line-end": "66", children: [
      /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "46", "data-source-line-end": "48", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "47", "data-source-line-end": "47", children: "Error Details" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "49", "data-source-line-end": "65", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/50 rounded-lg p-4", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "51", "data-source-line-end": "54", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "52", "data-source-line-end": "52", children: "Error Code" }),
          /* @__PURE__ */ jsx("p", { className: "font-mono font-bold text-foreground", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "53", "data-source-line-end": "53", children: mockFailureDetails.errorCode })
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "57", "data-source-line-end": "64", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: "Error Message" }),
          /* @__PURE__ */ jsxs(Alert, { variant: "destructive", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "59", "data-source-line-end": "63", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 16, "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "60", "data-source-line-end": "60" }),
            /* @__PURE__ */ jsx(AlertTitle, { "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "61", "data-source-line-end": "61", children: "Payment Error" }),
            /* @__PURE__ */ jsx(AlertDescription, { "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "62", "data-source-line-end": "62", children: mockFailureDetails.errorMessage })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card mb-6", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "69", "data-source-line-end": "90", children: [
      /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "70", "data-source-line-end": "75", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "71", "data-source-line-end": "71", children: "Troubleshooting Steps" }),
        /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "72", "data-source-line-end": "74", children: "Try these steps to resolve the issue" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "76", "data-source-line-end": "89", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "77", "data-source-line-end": "88", children: mockFailureDetails.suggestions.map((suggestion, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "79", "data-source-line-end": "86", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "80", "data-source-line-end": "82", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "81", "data-source-line-end": "81", children: index + 1 }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "83", "data-source-line-end": "85", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "84", "data-source-line-end": "84", children: suggestion }) })
      ] }, index)) }) })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "shadow-card mb-8 border-blue-200 bg-blue-50/50", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "93", "data-source-line-end": "105", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "94", "data-source-line-end": "104", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "95", "data-source-line-end": "103", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 20, className: "text-blue-600 flex-shrink-0 mt-0.5", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "96", "data-source-line-end": "96" }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "97", "data-source-line-end": "102", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-blue-900 mb-1", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "98", "data-source-line-end": "98", children: "Need Help?" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-800", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "99", "data-source-line-end": "101", children: "If you continue to experience issues, please contact our support team at support@bossieride.com or call +254 700 000 000" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "108", "data-source-line-end": "137", children: [
      /* @__PURE__ */ jsx(Button, { onClick: handleRetryPayment, disabled: isRetrying, className: "w-full", size: "lg", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "109", "data-source-line-end": "126", children: isRetrying ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "117", "data-source-line-end": "117" }),
        "Retrying..."
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "RotateCcw", size: 18, className: "mr-2", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "122", "data-source-line-end": "122" }),
        "Retry Payment"
      ] }) }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleBackToRideDetails, variant: "outline", className: "w-full", size: "lg", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "128", "data-source-line-end": "136", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 18, className: "mr-2", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "134", "data-source-line-end": "134" }),
        "Back to Ride Details"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t text-center", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "140", "data-source-line-end": "143", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mb-2", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "141", "data-source-line-end": "141", children: "Transaction Reference" }),
      /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-foreground", "data-source-file": "src/components/payment-failure/PaymentFailureContent.tsx", "data-source-line-start": "142", "data-source-line-end": "142", children: "BOSSIE_TX_00987" })
    ] })
  ] });
}
const $$PaymentFailure = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Payment Failed - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Payment Failed", showBackButton: false, showNotifications: false })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/payment-failure.astro" data-source-line-start="16" data-source-line-end="18" class="flex-1 pb-20">
    ${renderComponent($$result2, "PaymentFailureContent", PaymentFailureContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/payment-failure/PaymentFailureContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/payment-failure.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/payment-failure.astro";
const $$url = "/payment-failure.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PaymentFailure,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
