import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.D-nZ0uYi.js";
import { B as Badge, S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { m as mockCurrentRide, a as mockRideTypes } from "../ride.BbPk0mGh.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { f as fetchAuthedJson } from "../authClient.CZydr8qd.js";
import { n as notify } from "../notify.5u8Vcg9W.js";
import { renderers } from "../renderers.mjs";
function ConfirmRideContent() {
  const [isConfirming, setIsConfirming] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [ride, setRide] = useState(mockCurrentRide);
  const [rideType, setRideType] = useState(mockCurrentRide.selectedRideType);
  const distanceEstimate = mockCurrentRide.estimatedFare - mockCurrentRide.selectedRideType.baseFareKsh;
  const applyRideType = (selected) => {
    setRideType(selected);
    setRide({
      ...mockCurrentRide,
      selectedRideType: selected,
      estimatedFare: Math.max(selected.baseFareKsh + distanceEstimate, selected.baseFareKsh)
    });
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    requireAuth("confirm-ride");
    const stored = sessionStorage.getItem("selectedRideType");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      const matched = mockRideTypes.find((type) => type.typeId === parsed.typeId);
      if (matched) {
        applyRideType(matched);
      }
    } catch {
    }
  }, []);
  const pickupLocation = ride.pickupLocation;
  const dropoffLocation = ride.dropoffLocation;
  const handleConfirmBooking = () => {
    (async () => {
      setIsConfirming(true);
      try {
        const result = await fetchAuthedJson("./api/rides", {
          method: "POST",
          body: JSON.stringify({
            pickup: ride.pickupLocation,
            dropoff: ride.dropoffLocation,
            rideType: {
              typeId: rideType.typeId,
              name: rideType.name,
              baseFareKsh: rideType.baseFareKsh
            },
            estimatedFareKsh: ride.estimatedFare
          })
        });
        if (typeof window !== "undefined") {
          sessionStorage.setItem("currentRideId", result.ride.id);
        }
        await notify({
          title: "Ride requested",
          message: "We are connecting you with a driver.",
          level: "success",
          useBrowserNotification: true
        });
        if (typeof window !== "undefined") window.location.href = "./ride-in-progress";
      } catch (e) {
        await notify({
          title: "Could not request ride",
          message: e?.message || "Try again.",
          level: "error"
        });
      } finally {
        setIsConfirming(false);
      }
    })();
  };
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-6 space-y-6", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "97", "data-source-line-end": "282", children: [
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "99", "data-source-line-end": "225", children: [
      /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "100", "data-source-line-end": "103", children: [
        /* @__PURE__ */ jsx(CardTitle, { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "101", "data-source-line-end": "101", children: "Ride Summary" }),
        /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "102", "data-source-line-end": "102", children: "Review your booking details" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "104", "data-source-line-end": "224", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "106", "data-source-line-end": "137", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm text-muted-foreground uppercase", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "107", "data-source-line-end": "107", children: "Route" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "110", "data-source-line-end": "122", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "111", "data-source-line-end": "116", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "112", "data-source-line-end": "114", children: /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-primary", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "113", "data-source-line-end": "113" }) }),
              /* @__PURE__ */ jsx("div", { className: "w-0.5 h-12 bg-border", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "115", "data-source-line-end": "115" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-1", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "117", "data-source-line-end": "121", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "118", "data-source-line-end": "118", children: "PICKUP" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-base", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "119", "data-source-line-end": "119", children: pickupLocation.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "120", "data-source-line-end": "120", children: pickupLocation.address })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "125", "data-source-line-end": "136", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "126", "data-source-line-end": "130", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "127", "data-source-line-end": "129", children: /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-destructive", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "128", "data-source-line-end": "128" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-1", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "131", "data-source-line-end": "135", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "132", "data-source-line-end": "132", children: "DROPOFF" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-base", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "133", "data-source-line-end": "133", children: dropoffLocation.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "134", "data-source-line-end": "134", children: dropoffLocation.address })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "139", "data-source-line-end": "139" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "142", "data-source-line-end": "176", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm text-muted-foreground uppercase", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "143", "data-source-line-end": "143", children: "Ride Type" }),
          /* @__PURE__ */ jsx("div", { className: "border rounded-lg overflow-hidden hover:shadow-md transition-shadow", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "145", "data-source-line-end": "175", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-4", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "146", "data-source-line-end": "174", children: [
            /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "148", "data-source-line-end": "154", children: /* @__PURE__ */ jsx("img", { src: rideType.imageUrl, alt: rideType.name, className: "w-full h-full object-cover", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "149", "data-source-line-end": "153" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-between", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "157", "data-source-line-end": "173", children: [
              /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "158", "data-source-line-end": "166", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "159", "data-source-line-end": "164", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "160", "data-source-line-end": "160", children: rideType.name }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-xs", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "161", "data-source-line-end": "163", children: [
                    rideType.capacity,
                    " seats"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "165", "data-source-line-end": "165", children: rideType.description })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-sm", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "167", "data-source-line-end": "172", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "168", "data-source-line-end": "171", children: [
                /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 16, "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "169", "data-source-line-end": "169" }),
                /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "170", "data-source-line-end": "170", children: [
                  rideType.etaMinutesDefault,
                  " min"
                ] })
              ] }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "178", "data-source-line-end": "178" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "181", "data-source-line-end": "208", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm text-muted-foreground uppercase", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "182", "data-source-line-end": "182", children: "Fare Details" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "184", "data-source-line-end": "198", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "185", "data-source-line-end": "188", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "186", "data-source-line-end": "186", children: "Base Fare" }),
              /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "187", "data-source-line-end": "187", children: [
                "KES ",
                rideType.baseFareKsh.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "189", "data-source-line-end": "192", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "190", "data-source-line-end": "190", children: "Distance Estimate" }),
              /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "191", "data-source-line-end": "191", children: [
                "KES ",
                (ride.estimatedFare - rideType.baseFareKsh).toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsx(Separator, { className: "my-2", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "193", "data-source-line-end": "193" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "194", "data-source-line-end": "197", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "195", "data-source-line-end": "195", children: "Estimated Total" }),
              /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-primary", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "196", "data-source-line-end": "196", children: [
                "KES ",
                ride.estimatedFare.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "200", "data-source-line-end": "207", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "201", "data-source-line-end": "206", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 16, className: "text-blue-600 flex-shrink-0 mt-0.5", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "202", "data-source-line-end": "202" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "203", "data-source-line-end": "205", children: "Final fare may vary based on actual distance and traffic conditions" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "210", "data-source-line-end": "210" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "213", "data-source-line-end": "223", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm text-muted-foreground uppercase", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "214", "data-source-line-end": "214", children: "Estimated Time" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-primary/5 rounded-lg p-4", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "216", "data-source-line-end": "222", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 24, className: "text-primary", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "217", "data-source-line-end": "217" }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "218", "data-source-line-end": "221", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "219", "data-source-line-end": "219", children: "Estimated arrival" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xl font-bold text-primary", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "220", "data-source-line-end": "220", children: [
                ride.currentEtaMinutes,
                " minutes"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-muted/50 rounded-lg p-4 space-y-2", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "228", "data-source-line-end": "248", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "229", "data-source-line-end": "247", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", id: "terms", checked: agreedToTerms, onChange: (e) => setAgreedToTerms(e.target.checked), className: "mt-1 w-4 h-4 rounded border-border cursor-pointer", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "230", "data-source-line-end": "236" }),
      /* @__PURE__ */ jsxs("label", { htmlFor: "terms", className: "text-sm text-muted-foreground cursor-pointer", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "237", "data-source-line-end": "246", children: [
        "I agree to the",
        " ",
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-primary hover:underline font-medium", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "239", "data-source-line-end": "241", children: "Terms & Conditions" }),
        " ",
        "and",
        " ",
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-primary hover:underline font-medium", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "243", "data-source-line-end": "245", children: "Privacy Policy" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 pb-4", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "251", "data-source-line-end": "281", children: [
      /* @__PURE__ */ jsx(Button, { onClick: handleConfirmBooking, size: "lg", className: "w-full", disabled: isConfirming || !agreedToTerms, "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "252", "data-source-line-end": "269", children: isConfirming ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "260", "data-source-line-end": "260" }),
        "Confirming..."
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle", size: 18, className: "mr-2", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "265", "data-source-line-end": "265" }),
        "Confirm Booking"
      ] }) }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleBack, variant: "outline", size: "lg", className: "w-full", disabled: isConfirming, "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "271", "data-source-line-end": "280", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 18, className: "mr-2", "data-source-file": "src/components/confirm-ride/ConfirmRideContent.tsx", "data-source-line-start": "278", "data-source-line-end": "278" }),
        "Back to Ride Types"
      ] })
    ] })
  ] });
}
const $$ConfirmRide = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Confirm Ride - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, showBackButton: true, title: "Confirm Ride", showNotifications: false, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/confirm-ride.astro" data-source-line-start="17" data-source-line-end="19" class="flex-1 pb-20">
    ${renderComponent($$result2, "ConfirmRideContent", ConfirmRideContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/confirm-ride/ConfirmRideContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "home", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/confirm-ride.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/confirm-ride.astro";
const $$url = "/confirm-ride.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ConfirmRide,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
