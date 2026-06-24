import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { f as fetchAuthedJson, $ as $$BaseLayout } from "../BaseLayout.CtgI0PpG.js";
import { S as SafeIcon, b as Avatar, c as AvatarImage, d as AvatarFallback, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, e as cn, c as CardDescription } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { r as requireAuth } from "../requireAuthClient.BVNKX2L9.js";
import { renderers } from "../renderers.mjs";
function RideCompletedHeader({
  completedAt
}) {
  return /* @__PURE__ */ jsx(Card, { className: "border-0 bg-gradient-to-r from-success/10 to-success/5 shadow-card", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "11", "data-source-line-end": "31", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-8 pb-8", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "12", "data-source-line-end": "30", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-4", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "13", "data-source-line-end": "29", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "14", "data-source-line-end": "19", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-success/20 rounded-full animate-pulse", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "15", "data-source-line-end": "15" }),
      /* @__PURE__ */ jsx("div", { className: "relative w-16 h-16 rounded-full bg-success/10 flex items-center justify-center", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "16", "data-source-line-end": "18", children: /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 40, className: "text-success", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "17", "data-source-line-end": "17" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "21", "data-source-line-end": "24", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "22", "data-source-line-end": "22", children: "Ride Completed!" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "23", "data-source-line-end": "23", children: completedAt })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-sm", "data-source-file": "src/components/ride-completed/RideCompletedHeader.tsx", "data-source-line-start": "26", "data-source-line-end": "28", children: "Thank you for choosing Bossie Ride. We hope you had a great experience!" })
  ] }) }) });
}
function RideSummaryCard({
  pickupLocation,
  dropoffLocation,
  driverName,
  driverAvatar,
  driverRating,
  vehicleType,
  vehiclePlate,
  fare,
  duration,
  distance
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "33", "data-source-line-end": "104", children: [
    /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "34", "data-source-line-end": "36", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "35", "data-source-line-end": "35", children: "Ride Summary" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "38", "data-source-line-end": "103", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "40", "data-source-line-end": "60", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "41", "data-source-line-end": "49", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "42", "data-source-line-end": "44", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-primary", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "43", "data-source-line-end": "43" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "45", "data-source-line-end": "48", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "46", "data-source-line-end": "46", children: "Pickup" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "47", "data-source-line-end": "47", children: pickupLocation })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "51", "data-source-line-end": "59", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "52", "data-source-line-end": "54", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-sm bg-destructive", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "53", "data-source-line-end": "53" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "55", "data-source-line-end": "58", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "56", "data-source-line-end": "56", children: "Dropoff" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: dropoffLocation })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "62", "data-source-line-end": "62" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "65", "data-source-line-end": "84", children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "h-12 w-12", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "66", "data-source-line-end": "71", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: driverAvatar, alt: driverName, "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "67", "data-source-line-end": "67" }),
          /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10 text-primary font-semibold", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "68", "data-source-line-end": "70", children: driverName.split(" ").map((n) => n[0]).join("").toUpperCase() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "72", "data-source-line-end": "83", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "73", "data-source-line-end": "73", children: driverName }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "74", "data-source-line-end": "78", children: [
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "75", "data-source-line-end": "75", children: vehicleType }),
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "76", "data-source-line-end": "76", children: "•" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "77", "data-source-line-end": "77", children: vehiclePlate })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-1", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "79", "data-source-line-end": "82", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 14, className: "fill-yellow-400 text-yellow-400", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "80", "data-source-line-end": "80" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "81", "data-source-line-end": "81", children: driverRating.toFixed(1) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "86", "data-source-line-end": "86" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "89", "data-source-line-end": "102", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "90", "data-source-line-end": "93", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "91", "data-source-line-end": "91", children: "Duration" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mt-1", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "92", "data-source-line-end": "92", children: duration })
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "94", "data-source-line-end": "97", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "95", "data-source-line-end": "95", children: "Distance" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold mt-1", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "96", "data-source-line-end": "96", children: distance })
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "98", "data-source-line-end": "101", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "99", "data-source-line-end": "99", children: "Fare" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary mt-1", "data-source-file": "src/components/ride-completed/RideSummaryCard.tsx", "data-source-line-start": "100", "data-source-line-end": "100", children: fare })
        ] })
      ] })
    ] })
  ] });
}
const Textarea = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx("textarea", { className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref, ...props, "data-source-file": "src/components/ui/textarea.tsx", "data-source-line-start": "10", "data-source-line-end": "17" });
});
Textarea.displayName = "Textarea";
function DriverRatingCard({
  driverName,
  rating,
  onRatingChange,
  feedback,
  onFeedbackChange,
  onSubmit,
  isSubmitting
}) {
  const handleStarClick = (star) => {
    onRatingChange(rating === star ? 0 : star);
  };
  return /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "31", "data-source-line-end": "107", children: [
    /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "32", "data-source-line-end": "35", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "33", "data-source-line-end": "33", children: "Rate Your Experience" }),
      /* @__PURE__ */ jsxs(CardDescription, { "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "34", "data-source-line-end": "34", children: [
        "Help us improve by rating ",
        driverName
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "37", "data-source-line-end": "106", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "39", "data-source-line-end": "58", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx("button", { onClick: () => handleStarClick(star), className: "transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1", "aria-label": `Rate ${star} stars`, "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "41", "data-source-line-end": "56", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 32, className: `transition-colors ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`, "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "47", "data-source-line-end": "55" }) }, star)) }),
      rating > 0 && /* @__PURE__ */ jsx("div", { className: "text-center", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "61", "data-source-line-end": "69", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-muted-foreground", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "62", "data-source-line-end": "68", children: [
        rating === 1 && "Poor",
        rating === 2 && "Fair",
        rating === 3 && "Good",
        rating === 4 && "Very Good",
        rating === 5 && "Excellent"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "73", "data-source-line-end": "85", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "feedback", className: "text-sm font-medium", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "74", "data-source-line-end": "76", children: "Additional Feedback (Optional)" }),
        /* @__PURE__ */ jsx(Textarea, { id: "feedback", placeholder: "Share your experience with this ride...", value: feedback, onChange: (e) => onFeedbackChange(e.target.value), className: "resize-none", rows: 3, "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "77", "data-source-line-end": "84" })
      ] }),
      /* @__PURE__ */ jsx(Button, { onClick: onSubmit, disabled: rating === 0 || isSubmitting, className: "w-full", size: "lg", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "88", "data-source-line-end": "105", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "96", "data-source-line-end": "96" }),
        "Submitting..."
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Send", size: 18, className: "mr-2", "data-source-file": "src/components/ride-completed/DriverRatingCard.tsx", "data-source-line-start": "101", "data-source-line-end": "101" }),
        "Submit Rating"
      ] }) })
    ] })
  ] });
}
const mockRideData = {
  id: "RIDE-2024-001",
  pickupLocation: "Nairobi CBD, Tom Mboya Street",
  dropoffLocation: "Westlands, Mpesi Lane",
  driverName: "John Kariuki",
  driverAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/21/2371a68c-fc0f-4411-9a16-36554e8385c2.png",
  driverRating: 4.8,
  vehicleType: "Toyota Prius",
  vehiclePlate: "KBZ 123A",
  fare: "KES 450",
  duration: "18 minutes",
  distance: "8.5 km",
  completedAt: "Today at 2:45 PM"
};
function RideCompletedContent() {
  const [rideData] = useState(mockRideData);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmittingRating, setIsSubmittingRating] = useState(false);
  useEffect(() => {
    requireAuth("ride-completed");
    if (typeof window === "undefined") return;
    const rideId = sessionStorage.getItem("currentRideId");
    if (!rideId) return;
    const amount = Number(String(rideData.fare).replace(/[^\d.]/g, "")) || void 0;
    fetchAuthedJson(`./api/rides/${rideId}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: "completed",
        finalFareKsh: amount
      })
    }).catch(() => {
    });
  }, [rideData.fare]);
  const handleRatingSubmit = () => {
    setIsSubmittingRating(true);
    setTimeout(() => {
      setIsSubmittingRating(false);
    }, 1e3);
  };
  const handleViewHistory = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./ride-history.html";
    }
  };
  const handleRequestNewRide = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./ride-request.html";
    }
  };
  const handleMakePayment = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./payment-initiation.html";
    }
  };
  const handleBackToRideDetails = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6 max-w-2xl mx-auto", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "98", "data-source-line-end": "196", children: [
    /* @__PURE__ */ jsx(RideCompletedHeader, { completedAt: rideData.completedAt, "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "100", "data-source-line-end": "100" }),
    /* @__PURE__ */ jsx(RideSummaryCard, { pickupLocation: rideData.pickupLocation, dropoffLocation: rideData.dropoffLocation, driverName: rideData.driverName, driverAvatar: rideData.driverAvatar, driverRating: rideData.driverRating, vehicleType: rideData.vehicleType, vehiclePlate: rideData.vehiclePlate, fare: rideData.fare, duration: rideData.duration, distance: rideData.distance, "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "103", "data-source-line-end": "114" }),
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "117", "data-source-line-end": "140", children: [
      /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "118", "data-source-line-end": "120", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "119", "data-source-line-end": "119", children: "Fare Breakdown" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "121", "data-source-line-end": "139", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "122", "data-source-line-end": "125", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "123", "data-source-line-end": "123", children: "Base Fare" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "124", "data-source-line-end": "124", children: "KES 250" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "126", "data-source-line-end": "129", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "127", "data-source-line-end": "127", children: [
            "Distance (",
            rideData.distance,
            ")"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "128", "data-source-line-end": "128", children: "KES 150" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "130", "data-source-line-end": "133", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "131", "data-source-line-end": "131", children: "Service Fee" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "132", "data-source-line-end": "132", children: "KES 50" })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "134", "data-source-line-end": "134" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-2", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "135", "data-source-line-end": "138", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "136", "data-source-line-end": "136", children: "Total Fare" }),
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-primary", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "137", "data-source-line-end": "137", children: rideData.fare })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(DriverRatingCard, { driverName: rideData.driverName, rating, onRatingChange: setRating, feedback, onFeedbackChange: setFeedback, onSubmit: handleRatingSubmit, isSubmitting: isSubmittingRating, "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "143", "data-source-line-end": "151" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3 pb-4", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "154", "data-source-line-end": "195", children: [
      /* @__PURE__ */ jsxs(Button, { onClick: handleMakePayment, size: "lg", className: "w-full", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "155", "data-source-line-end": "162", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "CreditCard", size: 18, className: "mr-2", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "160", "data-source-line-end": "160" }),
        "Make Payment"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "164", "data-source-line-end": "184", children: [
        /* @__PURE__ */ jsxs(Button, { onClick: handleRequestNewRide, variant: "outline", size: "lg", className: "w-full", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "165", "data-source-line-end": "173", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Plus", size: 18, className: "mr-2", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "171", "data-source-line-end": "171" }),
          "New Ride"
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: handleViewHistory, variant: "outline", size: "lg", className: "w-full", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "175", "data-source-line-end": "183", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 18, className: "mr-2", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "181", "data-source-line-end": "181" }),
          "History"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleBackToRideDetails, variant: "ghost", size: "lg", className: "w-full", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "186", "data-source-line-end": "194", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 18, className: "mr-2", "data-source-file": "src/components/ride-completed/RideCompletedContent.tsx", "data-source-line-start": "192", "data-source-line-end": "192" }),
        "Back to Details"
      ] })
    ] })
  ] });
}
const $$RideCompleted = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Ride Completed - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, title: "Ride Completed", showBackButton: true, showNotifications: false, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/ride-completed.astro" data-source-line-start="17" data-source-line-end="21" class="pb-20 pt-4">
    <div data-source-file="src/pages/ride-completed.astro" data-source-line-start="18" data-source-line-end="20" class="container px-4">
      ${renderComponent($$result2, "RideCompletedContent", RideCompletedContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ride-completed/RideCompletedContent.tsx", "client:component-export": "default" })}
    </div>
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "home", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/ride-completed.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/ride-completed.astro";
const $$url = "/ride-completed.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$RideCompleted,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
