import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.G4c5_9v2.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.6nv4a3hw.js";
import { S as SafeIcon, a as Button, B as Badge, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { e as cn, C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { L as Label } from "../label.Da--91Bw.js";
import { a as mockPaymentSummary, b as mockPaymentOptions } from "../payment.CLWALyqY.js";
import { b as mockCompletedRide } from "../ride.BbPk0mGh.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { renderers } from "../renderers.mjs";
function useNavigate() {
  const navigate = (path) => {
    if (typeof window !== "undefined") {
      window.location.href = path;
    }
  };
  return navigate;
}
const RadioGroup = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Item, { ref, className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className), ...props, children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 fill-primary", "data-source-file": "src/components/ui/radio-group.tsx", "data-source-line-start": "35", "data-source-line-end": "35" }) }) });
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
const defaultMethods = [{
  id: "mpesa",
  name: "M-Pesa",
  icon: "Smartphone",
  description: "Pay with M-Pesa mobile money"
}, {
  id: "card",
  name: "Credit/Debit Card",
  icon: "CreditCard",
  description: "Pay with your card"
}, {
  id: "cash",
  name: "Cash",
  icon: "Banknote",
  description: "Pay with cash to driver"
}];
function PaymentMethodSelector({
  amount,
  selectedMethod = "mpesa",
  onMethodChange,
  onConfirm,
  methods = defaultMethods,
  className = ""
}) {
  const handleMethodChange = (value) => {
    onMethodChange?.(value);
  };
  const handleConfirm = () => {
    onConfirm?.();
  };
  return /* @__PURE__ */ jsxs(Card, { className, "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "62", "data-source-line-end": "102", children: [
    /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "63", "data-source-line-end": "70", children: [
      /* @__PURE__ */ jsx(CardTitle, { "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "64", "data-source-line-end": "64", children: "Payment Method" }),
      amount && /* @__PURE__ */ jsx(CardDescription, { className: "text-2xl font-bold text-primary mt-2", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "66", "data-source-line-end": "68", children: amount })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "71", "data-source-line-end": "101", children: [
      /* @__PURE__ */ jsx(RadioGroup, { value: selectedMethod, onValueChange: handleMethodChange, "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "72", "data-source-line-end": "94", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "73", "data-source-line-end": "93", children: methods.map((method) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "75", "data-source-line-end": "91", children: [
        /* @__PURE__ */ jsx(RadioGroupItem, { value: method.id, id: method.id, "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "76", "data-source-line-end": "76" }),
        /* @__PURE__ */ jsxs(Label, { htmlFor: method.id, className: "flex items-center gap-3 flex-1 cursor-pointer", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "77", "data-source-line-end": "90", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "81", "data-source-line-end": "83", children: /* @__PURE__ */ jsx(SafeIcon, { name: method.icon, size: 20, className: "text-primary", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "82", "data-source-line-end": "82" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "84", "data-source-line-end": "89", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "85", "data-source-line-end": "85", children: method.name }),
            method.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "87", "data-source-line-end": "87", children: method.description })
          ] })
        ] })
      ] }, method.id)) }) }),
      onConfirm && /* @__PURE__ */ jsx(Button, { onClick: handleConfirm, className: "w-full", size: "lg", "data-source-file": "src/components/common/PaymentMethodSelector.tsx", "data-source-line-start": "97", "data-source-line-end": "99", children: "Continue to Payment" })
    ] })
  ] });
}
function PaymentInitiationContent() {
  const [selectedMethod, setSelectedMethod] = useState("mpesa");
  const navigate = useNavigate();
  useEffect(() => {
    requireAuth("payment-initiation");
    if (typeof window === "undefined") return;
    sessionStorage.setItem("paymentAmountKsh", String(mockPaymentSummary.amountDue));
  }, []);
  const paymentMethods = mockPaymentOptions.map((option) => ({
    id: option.method.toLowerCase(),
    name: option.name,
    icon: option.method === "MPESA" ? "Smartphone" : option.iconUrl,
    description: option.description
  }));
  const handleMethodChange = (methodId) => {
    setSelectedMethod(methodId);
  };
  const handleProceedToPayment = () => {
    if (selectedMethod === "mpesa") {
      navigate("/mpesa-payment-details.html");
    } else {
      navigate("/mpesa-payment-details.html");
    }
  };
  const handleBackToRide = () => {
    navigate("/ride-completed.html");
  };
  const formatCurrency = (amount) => {
    return `KES ${amount.toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-6 space-y-6", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "63", "data-source-line-end": "166", children: [
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "65", "data-source-line-end": "133", children: [
      /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "66", "data-source-line-end": "75", children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "67", "data-source-line-end": "73", children: [
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "68", "data-source-line-end": "68", children: "Payment Summary" }),
          /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "69", "data-source-line-end": "72", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 14, className: "mr-1", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "70", "data-source-line-end": "70" }),
            "Pending"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(CardDescription, { "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "74", "data-source-line-end": "74", children: [
          "Ride ID: ",
          mockPaymentSummary.rideId
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "76", "data-source-line-end": "132", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "78", "data-source-line-end": "100", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "79", "data-source-line-end": "88", children: [
            /* @__PURE__ */ jsx("div", { className: "mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "80", "data-source-line-end": "82", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-primary", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "81", "data-source-line-end": "81" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "83", "data-source-line-end": "87", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "84", "data-source-line-end": "84", children: "From" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium truncate", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "85", "data-source-line-end": "85", children: mockCompletedRide.pickupLocation.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground truncate", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: mockCompletedRide.pickupLocation.address })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "90", "data-source-line-end": "99", children: [
            /* @__PURE__ */ jsx("div", { className: "mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "91", "data-source-line-end": "93", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-sm bg-destructive", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "92", "data-source-line-end": "92" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "94", "data-source-line-end": "98", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "95", "data-source-line-end": "95", children: "To" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium truncate", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "96", "data-source-line-end": "96", children: mockCompletedRide.dropoffLocation.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground truncate", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "97", "data-source-line-end": "97", children: mockCompletedRide.dropoffLocation.address })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "102", "data-source-line-end": "102" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "105", "data-source-line-end": "118", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "106", "data-source-line-end": "109", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "107", "data-source-line-end": "107", children: "Ride Fare" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "108", "data-source-line-end": "108", children: formatCurrency(mockCompletedRide.finalFare) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "110", "data-source-line-end": "113", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "111", "data-source-line-end": "111", children: "Distance" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "112", "data-source-line-end": "112", children: [
              mockCompletedRide.distanceKm,
              " km"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "114", "data-source-line-end": "117", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "115", "data-source-line-end": "115", children: "Duration" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "116", "data-source-line-end": "116", children: [
              mockCompletedRide.durationMinutes,
              " minutes"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "120", "data-source-line-end": "120" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 rounded-lg p-4", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "123", "data-source-line-end": "131", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-1", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "124", "data-source-line-end": "124", children: "Amount Due" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-primary", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "125", "data-source-line-end": "127", children: formatCurrency(mockPaymentSummary.amountDue) }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "128", "data-source-line-end": "130", children: [
            "Reference: ",
            mockPaymentSummary.referenceNumber
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PaymentMethodSelector, { amount: formatCurrency(mockPaymentSummary.amountDue), selectedMethod, onMethodChange: handleMethodChange, methods: paymentMethods, onConfirm: handleProceedToPayment, "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "136", "data-source-line-end": "142" }),
    /* @__PURE__ */ jsx(Card, { className: "bg-blue-50 border-blue-200", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "145", "data-source-line-end": "155", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "146", "data-source-line-end": "154", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "147", "data-source-line-end": "153", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 20, className: "text-blue-600 flex-shrink-0 mt-0.5", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "148", "data-source-line-end": "148" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-blue-900", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "149", "data-source-line-end": "152", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium mb-1", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "150", "data-source-line-end": "150", children: "Payment Information" }),
        /* @__PURE__ */ jsx("p", { "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "151", "data-source-line-end": "151", children: "Your payment will be processed securely. You'll receive a confirmation once the transaction is complete." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", onClick: handleBackToRide, "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "158", "data-source-line-end": "165", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 16, className: "mr-2", "data-source-file": "src/components/payment-initiation/PaymentInitiationContent.tsx", "data-source-line-start": "163", "data-source-line-end": "163" }),
      "Back to Ride Details"
    ] })
  ] });
}
const $$PaymentInitiation = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Payment - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, showBackButton: true, title: "Payment", showNotifications: false, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/payment-initiation.astro" data-source-line-start="17" data-source-line-end="19" class="flex-1 pb-20">
    ${renderComponent($$result2, "PaymentInitiationContent", PaymentInitiationContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/payment-initiation/PaymentInitiationContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "home", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/payment-initiation.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/payment-initiation.astro";
const $$url = "/payment-initiation.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PaymentInitiation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
