import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.G4c5_9v2.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.6nv4a3hw.js";
import { S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo, useEffect } from "react";
import { useFormContext, FormProvider, Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { e as cn, C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { Slot } from "@radix-ui/react-slot";
import { L as Label } from "../label.Da--91Bw.js";
import { A as Alert, a as AlertDescription } from "../alert.uiCSQyi5.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { f as fetchAuthedJson } from "../authClient.CZydr8qd.js";
import { n as notify } from "../notify.5u8Vcg9W.js";
import { renderers } from "../renderers.mjs";
const Form = FormProvider;
const FormFieldContext = React.createContext(null);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: {
    name: props.name
  }, children: /* @__PURE__ */ jsx(Controller, { ...props, "data-source-file": "src/components/ui/form.tsx", "data-source-line-start": "35", "data-source-line-end": "35" }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const {
    getFieldState,
    formState
  } = useFormContext();
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }
  const fieldState = getFieldState(fieldContext.name, formState);
  const {
    id
  } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext(null);
const FormItem = React.forwardRef(({
  className,
  ...props
}, ref) => {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: {
    id
  }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), ...props, "data-source-file": "src/components/ui/form.tsx", "data-source-line-start": "81", "data-source-line-end": "81" }) });
});
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({
  className,
  ...props
}, ref) => {
  const {
    error,
    formItemId
  } = useFormField();
  return /* @__PURE__ */ jsx(Label, { ref, className: cn(error && "text-destructive", className), htmlFor: formItemId, ...props, "data-source-file": "src/components/ui/form.tsx", "data-source-line-start": "94", "data-source-line-end": "99" });
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(({
  ...props
}, ref) => {
  const {
    error,
    formItemId,
    formDescriptionId,
    formMessageId
  } = useFormField();
  return /* @__PURE__ */ jsx(Slot, { ref, id: formItemId, "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error, ...props, "data-source-file": "src/components/ui/form.tsx", "data-source-line-start": "111", "data-source-line-end": "121" });
});
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(({
  className,
  ...props
}, ref) => {
  const {
    formDescriptionId
  } = useFormField();
  return /* @__PURE__ */ jsx("p", { ref, id: formDescriptionId, className: cn("text-[0.8rem] text-muted-foreground", className), ...props, "data-source-file": "src/components/ui/form.tsx", "data-source-line-start": "133", "data-source-line-end": "138" });
});
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => {
  const {
    error,
    formMessageId
  } = useFormField();
  const body = error ? String(error?.message ?? "") : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx("p", { ref, id: formMessageId, className: cn("text-[0.8rem] font-medium text-destructive", className), ...props, "data-source-file": "src/components/ui/form.tsx", "data-source-line-start": "155", "data-source-line-end": "162", children: body });
});
FormMessage.displayName = "FormMessage";
const mockPaymentData = {
  rideId: "RIDE-2024-001",
  pickupLocation: "Nairobi CBD, Tom Mboya Street",
  dropoffLocation: "Westlands, Mpesi Lane",
  fareAmount: 450,
  rideDate: "Today, 2:30 PM"
};
const mpesaPaymentSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required").regex(/^(\+254|0)[17]\d{8}$/, "Please enter a valid Kenyan phone number (e.g., 0712345678 or +254712345678)")
});
function MpesaPaymentDetailsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [amountKsh, setAmountKsh] = useState(mockPaymentData.fareAmount);
  const rideId = useMemo(() => {
    if (typeof window === "undefined") return void 0;
    return sessionStorage.getItem("currentRideId") || void 0;
  }, []);
  useEffect(() => {
    requireAuth("mpesa-payment-details");
    if (typeof window === "undefined") return;
    const v = Number(sessionStorage.getItem("paymentAmountKsh"));
    if (Number.isFinite(v) && v > 0) setAmountKsh(v);
  }, []);
  const form = useForm({
    resolver: zodResolver(mpesaPaymentSchema),
    defaultValues: {
      phoneNumber: ""
    }
  });
  const onSubmit = async (values) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 250));
    setShowConfirmation(true);
    setIsSubmitting(false);
  };
  const handleProceedToConfirmation = async () => {
    const phoneNumber = form.getValues("phoneNumber");
    setIsSubmitting(true);
    try {
      const res = await fetchAuthedJson("./api/mpesa/stkpush", {
        method: "POST",
        body: JSON.stringify({
          phoneNumber,
          amountKsh,
          rideId,
          accountReference: rideId ? `BOSSIE-RIDE-${rideId.slice(-6)}` : "BOSSIE-RIDE",
          transactionDesc: "Bossie Ride payment"
        })
      });
      if (typeof window !== "undefined") {
        sessionStorage.setItem("mpesaCheckoutRequestId", res.stk.checkoutRequestId);
        sessionStorage.setItem("mpesaPhoneNumber", phoneNumber);
        sessionStorage.setItem("mpesaAmountKsh", String(amountKsh));
        sessionStorage.setItem("mpesaTransactionId", res.transaction.id);
        window.location.href = "./mpesa-payment-confirmation.html";
      }
    } catch (e) {
      await notify({
        title: "Could not start M-Pesa prompt",
        message: e?.message || "Please try again.",
        level: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleBackToPaymentInitiation = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  if (showConfirmation) {
    return /* @__PURE__ */ jsxs("div", { className: "space-y-6", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "116", "data-source-line-end": "197", children: [
      /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "118", "data-source-line-end": "175", children: [
        /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "119", "data-source-line-end": "125", children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "120", "data-source-line-end": "123", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle", size: 24, className: "text-green-500", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "121", "data-source-line-end": "121" }),
            "Confirm Payment Details"
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "124", "data-source-line-end": "124", children: "Review your M-Pesa payment information" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "126", "data-source-line-end": "174", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "128", "data-source-line-end": "173", children: [
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "129", "data-source-line-end": "145", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "130", "data-source-line-end": "130", children: "Payment Summary" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "131", "data-source-line-end": "144", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "132", "data-source-line-end": "135", children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "133", "data-source-line-end": "133", children: "Ride ID:" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "134", "data-source-line-end": "134", children: mockPaymentData.rideId })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "136", "data-source-line-end": "139", children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "137", "data-source-line-end": "137", children: "From:" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-right max-w-xs", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "138", "data-source-line-end": "138", children: mockPaymentData.pickupLocation })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "140", "data-source-line-end": "143", children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "141", "data-source-line-end": "141", children: "To:" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-right max-w-xs", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "142", "data-source-line-end": "142", children: mockPaymentData.dropoffLocation })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "147", "data-source-line-end": "147" }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "150", "data-source-line-end": "162", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "151", "data-source-line-end": "151", children: "M-Pesa Payment" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "152", "data-source-line-end": "161", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "153", "data-source-line-end": "156", children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "154", "data-source-line-end": "154", children: "Phone Number:" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium font-mono", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "155", "data-source-line-end": "155", children: form.getValues("phoneNumber") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "157", "data-source-line-end": "160", children: [
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "158", "data-source-line-end": "158", children: "Amount:" }),
                /* @__PURE__ */ jsxs("span", { className: "font-bold text-lg text-primary", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "159", "data-source-line-end": "159", children: [
                  "KES ",
                  amountKsh
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "164", "data-source-line-end": "164" }),
          /* @__PURE__ */ jsxs(Alert, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "167", "data-source-line-end": "172", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 16, "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "168", "data-source-line-end": "168" }),
            /* @__PURE__ */ jsx(AlertDescription, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "169", "data-source-line-end": "171", children: "You will receive an M-Pesa prompt on your phone. Enter your M-Pesa PIN to complete the payment." })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "178", "data-source-line-end": "196", children: [
        /* @__PURE__ */ jsxs(Button, { onClick: handleProceedToConfirmation, size: "lg", className: "w-full", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "179", "data-source-line-end": "186", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Check", size: 18, className: "mr-2", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "184", "data-source-line-end": "184" }),
          "Proceed to Confirmation"
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: handleBackToPaymentInitiation, variant: "outline", size: "lg", className: "w-full", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "187", "data-source-line-end": "195", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 18, className: "mr-2", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "193", "data-source-line-end": "193" }),
          "Change Payment Method"
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "202", "data-source-line-end": "328", children: [
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "204", "data-source-line-end": "303", children: [
      /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "205", "data-source-line-end": "208", children: [
        /* @__PURE__ */ jsx(CardTitle, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "206", "data-source-line-end": "206", children: "Enter M-Pesa Details" }),
        /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "207", "data-source-line-end": "207", children: "Provide your phone number to complete the payment" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "209", "data-source-line-end": "302", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/50 rounded-lg p-4 space-y-3", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "211", "data-source-line-end": "229", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "212", "data-source-line-end": "212", children: "Ride Summary" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "213", "data-source-line-end": "228", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "214", "data-source-line-end": "220", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, className: "text-primary mt-0.5 flex-shrink-0", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "215", "data-source-line-end": "215" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "216", "data-source-line-end": "219", children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "217", "data-source-line-end": "217", children: "From" }),
                /* @__PURE__ */ jsx("p", { className: "font-medium truncate", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "218", "data-source-line-end": "218", children: mockPaymentData.pickupLocation })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "221", "data-source-line-end": "227", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, className: "text-destructive mt-0.5 flex-shrink-0", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "222", "data-source-line-end": "222" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "223", "data-source-line-end": "226", children: [
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "224", "data-source-line-end": "224", children: "To" }),
                /* @__PURE__ */ jsx("p", { className: "font-medium truncate", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "225", "data-source-line-end": "225", children: mockPaymentData.dropoffLocation })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "231", "data-source-line-end": "231" }),
        /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "234", "data-source-line-end": "238", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "235", "data-source-line-end": "235", children: "Amount to Pay" }),
          /* @__PURE__ */ jsxs("p", { className: "text-4xl font-bold text-primary", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "236", "data-source-line-end": "236", children: [
            "KES ",
            amountKsh
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "237", "data-source-line-end": "237", children: mockPaymentData.rideDate })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "240", "data-source-line-end": "240" }),
        /* @__PURE__ */ jsx(Form, { ...form, "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "243", "data-source-line-end": "301", children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "244", "data-source-line-end": "300", children: [
          /* @__PURE__ */ jsx(FormField, { control: form.control, name: "phoneNumber", render: ({
            field
          }) => /* @__PURE__ */ jsxs(FormItem, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "249", "data-source-line-end": "269", children: [
            /* @__PURE__ */ jsx(FormLabel, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "250", "data-source-line-end": "250", children: "M-Pesa Phone Number" }),
            /* @__PURE__ */ jsx(FormControl, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "251", "data-source-line-end": "264", children: /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "252", "data-source-line-end": "263", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "253", "data-source-line-end": "255", children: "🇰🇪" }),
              /* @__PURE__ */ jsx(Input, { ...field, placeholder: "0712345678", className: "pl-10", type: "tel", disabled: isSubmitting, "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "256", "data-source-line-end": "262" })
            ] }) }),
            /* @__PURE__ */ jsx(FormDescription, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "265", "data-source-line-end": "267", children: "Enter your Kenyan phone number (0712345678 or +254712345678)" }),
            /* @__PURE__ */ jsx(FormMessage, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "268", "data-source-line-end": "268" })
          ] }), "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "245", "data-source-line-end": "271" }),
          /* @__PURE__ */ jsxs(Alert, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "274", "data-source-line-end": "279", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 16, "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "275", "data-source-line-end": "275" }),
            /* @__PURE__ */ jsx(AlertDescription, { "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "276", "data-source-line-end": "278", children: "Make sure you have M-Pesa enabled on this phone number and sufficient balance." })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", className: "w-full", disabled: isSubmitting, "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "282", "data-source-line-end": "299", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "290", "data-source-line-end": "290" }),
            "Processing..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "CreditCard", size: 18, className: "mr-2", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "295", "data-source-line-end": "295" }),
            "Confirm Payment Details"
          ] }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Button, { onClick: handleBackToPaymentInitiation, variant: "outline", size: "lg", className: "w-full", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "306", "data-source-line-end": "314", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 18, className: "mr-2", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "312", "data-source-line-end": "312" }),
      "Back to Payment Method"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "317", "data-source-line-end": "327", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "318", "data-source-line-end": "326", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Lock", size: 16, className: "text-blue-600 mt-0.5 flex-shrink-0", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "319", "data-source-line-end": "319" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "320", "data-source-line-end": "325", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-blue-900", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "321", "data-source-line-end": "321", children: "Secure Payment" }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-800 text-xs mt-1", "data-source-file": "src/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "data-source-line-start": "322", "data-source-line-end": "324", children: "Your payment information is encrypted and secure. Bossie Ride never stores your M-Pesa PIN." })
      ] })
    ] }) })
  ] });
}
const $$MpesaPaymentDetails = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "M-Pesa Payment Details - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, showBackButton: true, title: "Payment Details", "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/mpesa-payment-details.astro" data-source-line-start="15" data-source-line-end="19" className="min-h-screen bg-background pb-20">
    <div data-source-file="src/pages/mpesa-payment-details.astro" data-source-line-start="16" data-source-line-end="18" className="container max-w-2xl mx-auto px-4 py-8">
      ${renderComponent($$result2, "MpesaPaymentDetailsForm", MpesaPaymentDetailsForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/mpesa-payments-details/MpesaPaymentDetailsForm.tsx", "client:component-export": "default" })}
    </div>
  </main>
` })}`, "/home/rayan/bossie-ride/src/pages/mpesa-payment-details.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/mpesa-payment-details.astro";
const $$url = "/mpesa-payment-details.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$MpesaPaymentDetails,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
