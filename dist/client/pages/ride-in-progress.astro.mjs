import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.D-nZ0uYi.js";
import { S as SafeIcon, B as Badge, b as Avatar, c as AvatarImage, d as AvatarFallback, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { m as mockCurrentRide, a as mockRideTypes } from "../ride.BbPk0mGh.js";
import { M as MapContainer } from "../MapContainer.BYjNKSUp.js";
import { C as Card, d as CardContent } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { f as fetchAuthedJson } from "../authClient.CZydr8qd.js";
import { renderers } from "../renderers.mjs";
function DriverMapView({
  driverLocation,
  pickupLocation,
  dropoffLocation,
  mapImageUrl
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-muted flex items-center justify-center", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "28", "data-source-line-end": "33", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "29", "data-source-line-end": "32", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Map", size: 48, className: "mx-auto text-muted-foreground", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "30", "data-source-line-end": "30" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "31", "data-source-line-end": "31", children: "Loading map..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxs(MapContainer, { height: "100%", showControls: true, className: "w-full h-full", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "38", "data-source-line-end": "84", children: [
    mapImageUrl && /* @__PURE__ */ jsx("img", { src: mapImageUrl, alt: "Live map view", className: "w-full h-full object-cover", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "45", "data-source-line-end": "49" }),
    driverLocation && /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "54", "data-source-line-end": "64", children: /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "55", "data-source-line-end": "63", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-primary/20 animate-pulse", style: {
        width: "60px",
        height: "60px",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%"
      }, "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "57", "data-source-line-end": "57" }),
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-white", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "60", "data-source-line-end": "62", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Car", size: 24, color: "white", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "61", "data-source-line-end": "61" }) })
    ] }) }),
    pickupLocation && /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 z-5", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "69", "data-source-line-end": "73", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg border-2 border-white", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "70", "data-source-line-end": "72", children: /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, color: "white", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "71", "data-source-line-end": "71" }) }) }),
    dropoffLocation && /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 z-5", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "78", "data-source-line-end": "82", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shadow-lg border-2 border-white", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "79", "data-source-line-end": "81", children: /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, color: "white", "data-source-file": "src/components/ride-in-progress/DriverMapView.tsx", "data-source-line-start": "80", "data-source-line-end": "80" }) }) })
  ] });
}
const statusConfig = {
  REQUESTING: {
    label: "Finding Driver",
    icon: "Search",
    color: "bg-yellow-500"
  },
  PENDING: {
    label: "Driver Assigned",
    icon: "CheckCircle",
    color: "bg-blue-500"
  },
  ACCEPTED: {
    label: "Driver Accepted",
    icon: "CheckCircle",
    color: "bg-blue-500"
  },
  IN_TRANSIT: {
    label: "On the Way",
    icon: "Navigation",
    color: "bg-primary"
  },
  ARRIVED: {
    label: "Driver Arrived",
    icon: "MapPin",
    color: "bg-green-500"
  },
  COMPLETED: {
    label: "Completed",
    icon: "CheckCircle2",
    color: "bg-green-500"
  },
  CANCELLED: {
    label: "Cancelled",
    icon: "XCircle",
    color: "bg-red-500"
  }
};
function RideStatusOverlay({
  status,
  eta,
  pickupLocation,
  dropoffLocation
}) {
  const config = statusConfig[status];
  return /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 right-4 z-20", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "33", "data-source-line-end": "68", children: /* @__PURE__ */ jsx(Card, { className: "shadow-lg", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "34", "data-source-line-end": "67", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "35", "data-source-line-end": "66", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "37", "data-source-line-end": "48", children: [
      /* @__PURE__ */ jsxs(Badge, { className: `${config.color} text-white flex items-center gap-1`, "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "38", "data-source-line-end": "41", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: config.icon, size: 14, "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "39", "data-source-line-end": "39" }),
        config.label
      ] }),
      eta > 0 && /* @__PURE__ */ jsxs("div", { className: "text-right", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "43", "data-source-line-end": "46", children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-primary", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "44", "data-source-line-end": "44", children: eta }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "45", "data-source-line-end": "45", children: "min away" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "51", "data-source-line-end": "65", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "52", "data-source-line-end": "57", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "53", "data-source-line-end": "55", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "54", "data-source-line-end": "54" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "56", "data-source-line-end": "56", children: pickupLocation })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "59", "data-source-line-end": "64", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "60", "data-source-line-end": "62", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "61", "data-source-line-end": "61" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", "data-source-file": "src/components/ride-in-progress/RideStatusOverlay.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: dropoffLocation })
      ] })
    ] })
  ] }) }) });
}
function DriverDetailsCard({
  driver,
  onContact,
  onTrack
}) {
  return /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "20", "data-source-line-end": "84", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "21", "data-source-line-end": "83", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "22", "data-source-line-end": "73", children: [
      /* @__PURE__ */ jsxs(Avatar, { className: "h-14 w-14", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "24", "data-source-line-end": "29", children: [
        /* @__PURE__ */ jsx(AvatarImage, { src: driver.profileImageUrl, alt: driver.name, "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "25", "data-source-line-end": "25" }),
        /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10 text-primary font-semibold", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "26", "data-source-line-end": "28", children: driver.name.split(" ").map((n) => n[0]).join("").toUpperCase() })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "32", "data-source-line-end": "50", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "33", "data-source-line-end": "39", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "34", "data-source-line-end": "34", children: driver.name }),
          /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "flex items-center gap-1 text-xs", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "35", "data-source-line-end": "38", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 12, className: "fill-yellow-400 text-yellow-400", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "36", "data-source-line-end": "36" }),
            driver.rating.toFixed(1)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "42", "data-source-line-end": "49", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "43", "data-source-line-end": "45", children: driver.vehicle.model }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-mono font-semibold text-primary", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "46", "data-source-line-end": "48", children: driver.vehicle.plateNumber })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "53", "data-source-line-end": "72", children: [
        onContact && /* @__PURE__ */ jsx("button", { onClick: onContact, className: "p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors", "aria-label": "Call driver", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "55", "data-source-line-end": "61", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 18, className: "text-primary", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "60", "data-source-line-end": "60" }) }),
        onTrack && /* @__PURE__ */ jsx("button", { onClick: onTrack, className: "p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors", "aria-label": "Track driver", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "64", "data-source-line-end": "70", children: /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 18, className: "text-primary", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "69", "data-source-line-end": "69" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "76", "data-source-line-end": "82", children: [
      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full border-2 border-gray-300", style: {
        backgroundColor: driver.vehicle.color.toLowerCase()
      }, "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "77", "data-source-line-end": "80" }),
      /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/ride-in-progress/DriverDetailsCard.tsx", "data-source-line-start": "81", "data-source-line-end": "81", children: driver.vehicle.color })
    ] })
  ] }) });
}
function RideActionsPanel({
  status,
  onCancel,
  onTrack,
  onContact,
  onPay
}) {
  const isCompleted = status === "COMPLETED";
  const isCancelled = status === "CANCELLED";
  const isActive = !isCompleted && !isCancelled;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "26", "data-source-line-end": "92", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "28", "data-source-line-end": "49", children: [
      onTrack && isActive && /* @__PURE__ */ jsxs(Button, { onClick: onTrack, variant: "outline", className: "w-full", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "30", "data-source-line-end": "37", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, className: "mr-2", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "35", "data-source-line-end": "35" }),
        "Track Driver"
      ] }),
      onContact && isActive && /* @__PURE__ */ jsxs(Button, { onClick: onContact, className: "w-full", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "41", "data-source-line-end": "47", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 16, className: "mr-2", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "45", "data-source-line-end": "45" }),
        "Contact"
      ] })
    ] }),
    onPay && isActive && /* @__PURE__ */ jsxs(Button, { onClick: onPay, variant: "secondary", className: "w-full", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "52", "data-source-line-end": "59", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "CreditCard", size: 16, className: "mr-2", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "57", "data-source-line-end": "57" }),
      "Pay for Ride"
    ] }),
    onCancel && isActive && /* @__PURE__ */ jsxs(Button, { onClick: onCancel, variant: "destructive", className: "w-full", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "64", "data-source-line-end": "71", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "XCircle", size: 16, className: "mr-2", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "69", "data-source-line-end": "69" }),
      "Cancel Ride"
    ] }),
    isCompleted && /* @__PURE__ */ jsx("div", { className: "p-3 rounded-lg bg-green-50 border border-green-200", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "76", "data-source-line-end": "81", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-green-900", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "77", "data-source-line-end": "80", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 16, className: "inline mr-2", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "78", "data-source-line-end": "78" }),
      "Ride Completed"
    ] }) }),
    isCancelled && /* @__PURE__ */ jsx("div", { className: "p-3 rounded-lg bg-red-50 border border-red-200", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "85", "data-source-line-end": "90", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-red-900", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "86", "data-source-line-end": "89", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "XCircle", size: 16, className: "inline mr-2", "data-source-file": "src/components/ride-in-progress/RideActionsPanel.tsx", "data-source-line-start": "87", "data-source-line-end": "87" }),
      "Ride Cancelled"
    ] }) })
  ] });
}
function RideSummaryCard({
  pickupLocation,
  dropoffLocation,
  fare,
  rideType
}) {
  return /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "20", "data-source-line-end": "61", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4 space-y-3", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "21", "data-source-line-end": "60", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "23", "data-source-line-end": "26", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "24", "data-source-line-end": "24", children: "Ride Type" }),
      /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "25", "data-source-line-end": "25", children: rideType })
    ] }),
    /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "28", "data-source-line-end": "28" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "31", "data-source-line-end": "51", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "32", "data-source-line-end": "40", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "33", "data-source-line-end": "35", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "34", "data-source-line-end": "34" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "36", "data-source-line-end": "39", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "37", "data-source-line-end": "37", children: "From" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "38", "data-source-line-end": "38", children: pickupLocation })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "42", "data-source-line-end": "50", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "43", "data-source-line-end": "45", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "44", "data-source-line-end": "44" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "46", "data-source-line-end": "49", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "47", "data-source-line-end": "47", children: "To" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "48", "data-source-line-end": "48", children: dropoffLocation })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "53", "data-source-line-end": "53" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "56", "data-source-line-end": "59", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: "Estimated Fare" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-primary", "data-source-file": "src/components/ride-in-progress/RideSummaryCard.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: fare })
    ] })
  ] }) });
}
function RideInProgressContent() {
  const [ride, setRide] = useState(mockCurrentRide);
  const [eta, setEta] = useState(ride.currentEtaMinutes);
  const distanceEstimate = mockCurrentRide.estimatedFare - mockCurrentRide.selectedRideType.baseFareKsh;
  useEffect(() => {
    if (typeof window === "undefined") return;
    requireAuth("ride-in-progress");
    const rideId = sessionStorage.getItem("currentRideId");
    if (rideId) {
      fetchAuthedJson(`./api/rides/${rideId}`, {
        method: "PATCH",
        body: JSON.stringify({
          status: "in_progress"
        })
      }).catch(() => {
      });
    }
    const stored = sessionStorage.getItem("selectedRideType");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      const matched = mockRideTypes.find((type) => type.typeId === parsed.typeId);
      if (!matched) return;
      const updatedRide = {
        ...mockCurrentRide,
        selectedRideType: matched,
        estimatedFare: Math.max(matched.baseFareKsh + distanceEstimate, matched.baseFareKsh)
      };
      setRide(updatedRide);
      setEta(updatedRide.currentEtaMinutes);
    } catch {
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => prev > 0 ? prev - 1 : 0);
    }, 6e4);
    return () => clearInterval(interval);
  }, []);
  const handleTrackDriver = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./track-driver.html";
    }
  };
  const handleContactDriver = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./contact-driver.html";
    }
  };
  const handlePayment = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./payment-initiation.html";
    }
  };
  const handleCancelRide = () => {
    if (typeof window !== "undefined") {
      const confirmed = confirm("Are you sure you want to cancel this ride?");
      if (confirmed) {
        window.location.href = "./ride-request.html";
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[calc(100vh-64px-80px)] bg-background", "data-source-file": "src/components/ride-in-progress/RideInProgressContent.tsx", "data-source-line-start": "90", "data-source-line-end": "137", children: [
    /* @__PURE__ */ jsx(DriverMapView, { driverLocation: ride.driverDetails?.currentLocation, pickupLocation: ride.pickupLocation.coords, dropoffLocation: ride.dropoffLocation.coords, mapImageUrl: ride.driverMapImageUrl, "data-source-file": "src/components/ride-in-progress/RideInProgressContent.tsx", "data-source-line-start": "92", "data-source-line-end": "97" }),
    /* @__PURE__ */ jsx(RideStatusOverlay, { status: ride.status, eta, pickupLocation: ride.pickupLocation.name, dropoffLocation: ride.dropoffLocation.name, "data-source-file": "src/components/ride-in-progress/RideInProgressContent.tsx", "data-source-line-start": "100", "data-source-line-end": "105" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl shadow-card max-h-[50vh] overflow-y-auto", "data-source-file": "src/components/ride-in-progress/RideInProgressContent.tsx", "data-source-line-start": "108", "data-source-line-end": "136", children: /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-4", "data-source-file": "src/components/ride-in-progress/RideInProgressContent.tsx", "data-source-line-start": "109", "data-source-line-end": "135", children: [
      ride.driverDetails && /* @__PURE__ */ jsx(DriverDetailsCard, { driver: ride.driverDetails, onContact: handleContactDriver, onTrack: handleTrackDriver, "data-source-file": "src/components/ride-in-progress/RideInProgressContent.tsx", "data-source-line-start": "112", "data-source-line-end": "116" }),
      /* @__PURE__ */ jsx(RideSummaryCard, { pickupLocation: ride.pickupLocation.name, dropoffLocation: ride.dropoffLocation.name, fare: `KES ${ride.estimatedFare.toFixed(2)}`, rideType: ride.selectedRideType.name, "data-source-file": "src/components/ride-in-progress/RideInProgressContent.tsx", "data-source-line-start": "120", "data-source-line-end": "125" }),
      /* @__PURE__ */ jsx(RideActionsPanel, { onCancel: handleCancelRide, onTrack: handleTrackDriver, onContact: handleContactDriver, onPay: handlePayment, status: ride.status, "data-source-file": "src/components/ride-in-progress/RideInProgressContent.tsx", "data-source-line-start": "128", "data-source-line-end": "134" })
    ] }) })
  ] });
}
const $$RideInProgress = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Ride In Progress - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, showBackButton: false, title: "Your Ride", showNotifications: false, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/ride-in-progress.astro" data-source-line-start="17" data-source-line-end="19" className="flex-1 pb-20">
    ${renderComponent($$result2, "RideInProgressContent", RideInProgressContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ride-in-progress/RideInProgressContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "home", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/ride-in-progress.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/ride-in-progress.astro";
const $$url = "/ride-in-progress.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$RideInProgress,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
