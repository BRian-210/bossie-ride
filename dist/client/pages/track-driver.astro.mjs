<<<<<<< HEAD
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.DdVmMhb3.js";
import { S as SafeIcon, B as Badge, b as Avatar, c as AvatarImage, d as AvatarFallback, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { M as MapContainer } from "../MapContainer.BYjNKSUp.js";
=======
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.C9n97yqK.js";
import "piccolore";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, $ as $$BaseLayout } from "../card.DPXo1ZLP.js";
import { S as SafeIcon, B as Badge, b as Avatar, c as AvatarImage, d as AvatarFallback, a as Button, A as AppHeader } from "../AppHeader.h2OVAX_7.js";
import { A as AppBottomNav } from "../AppBottomNav.DLBmlvIO.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { S as Separator } from "../separator.Jsv1lrSr.js";
import { M as MapContainer } from "../MapContainer.COZMwZ5f.js";
>>>>>>> e4f2f6c (git  commit -m "feat: add dist/client files")
import { m as mockCurrentRide } from "../ride.BbPk0mGh.js";
import { renderers } from "../renderers.mjs";
function TrackDriverContent() {
  const [mapZoom, setMapZoom] = useState(1);
  const ride = mockCurrentRide;
  const driver = ride.driverDetails;
  if (!driver) {
    return /* @__PURE__ */ jsx("div", { className: "container px-4 py-8", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "19", "data-source-line-end": "25", children: /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "20", "data-source-line-end": "24", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "21", "data-source-line-end": "23", children: /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "22", "data-source-line-end": "22", children: "No driver assigned yet" }) }) }) });
  }
  const handleZoomIn = () => {
    setMapZoom((prev) => Math.min(prev + 0.5, 3));
  };
  const handleZoomOut = () => {
    setMapZoom((prev) => Math.max(prev - 0.5, 0.5));
  };
  const handleRecenter = () => {
    setMapZoom(1);
  };
  const handleContactDriver = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./contact-driver.html";
    }
  };
  const handleBackToRide = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container px-4 py-6 space-y-6", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "55", "data-source-line-end": "235", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "57", "data-source-line-end": "80", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: "Driver Location" }),
      /* @__PURE__ */ jsx(MapContainer, { height: "400px", showControls: true, onZoomIn: handleZoomIn, onZoomOut: handleZoomOut, onRecenter: handleRecenter, className: "shadow-card", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "59", "data-source-line-end": "79", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "68", "data-source-line-end": "78", children: /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "69", "data-source-line-end": "77", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-primary/20 animate-pulse", style: {
          width: "80px",
          height: "80px",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%"
        }, "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "71", "data-source-line-end": "71" }),
        /* @__PURE__ */ jsx("div", { className: "absolute w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center", style: {
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%"
        }, "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "74", "data-source-line-end": "76", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Navigation", size: 24, color: "white", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "75", "data-source-line-end": "75" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "83", "data-source-line-end": "187", children: [
      /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "84", "data-source-line-end": "92", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "85", "data-source-line-end": "91", children: [
        /* @__PURE__ */ jsx(CardTitle, { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: "Driver Details" }),
        /* @__PURE__ */ jsxs(Badge, { variant: "default", className: "flex items-center gap-1", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "87", "data-source-line-end": "90", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Navigation", size: 14, "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "88", "data-source-line-end": "88" }),
          "En Route"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "94", "data-source-line-end": "186", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "96", "data-source-line-end": "112", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-16 w-16", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "97", "data-source-line-end": "102", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: driver.profileImageUrl, alt: driver.name, "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "98", "data-source-line-end": "98" }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary text-primary-foreground text-lg", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "99", "data-source-line-end": "101", children: driver.name.split(" ").map((n) => n[0]).join("").toUpperCase() })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "103", "data-source-line-end": "111", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "104", "data-source-line-end": "104", children: driver.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "105", "data-source-line-end": "109", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 16, className: "fill-yellow-400 text-yellow-400", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "106", "data-source-line-end": "106" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "107", "data-source-line-end": "107", children: driver.rating.toFixed(1) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "108", "data-source-line-end": "108", children: "(Excellent)" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "110", "data-source-line-end": "110", children: driver.phone })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "114", "data-source-line-end": "114" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "117", "data-source-line-end": "144", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "118", "data-source-line-end": "118", children: "Vehicle Information" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "119", "data-source-line-end": "143", children: [
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "120", "data-source-line-end": "123", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "121", "data-source-line-end": "121", children: "Model" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "122", "data-source-line-end": "122", children: driver.vehicle.model })
            ] }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "124", "data-source-line-end": "127", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "125", "data-source-line-end": "125", children: "Plate Number" }),
              /* @__PURE__ */ jsx("p", { className: "font-mono font-medium", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "126", "data-source-line-end": "126", children: driver.vehicle.plateNumber })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "128", "data-source-line-end": "142", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "129", "data-source-line-end": "129", children: "Color" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-1", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "130", "data-source-line-end": "141", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full border-2 border-border", style: {
                  backgroundColor: driver.vehicle.color.toLowerCase() === "blue" ? "#3b82f6" : driver.vehicle.color.toLowerCase() === "white" ? "#ffffff" : driver.vehicle.color.toLowerCase() === "black" ? "#000000" : "#6b7280"
                }, "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "131", "data-source-line-end": "139" }),
                /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "140", "data-source-line-end": "140", children: driver.vehicle.color })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "146", "data-source-line-end": "146" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "149", "data-source-line-end": "158", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 rounded-lg p-3", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "150", "data-source-line-end": "153", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "151", "data-source-line-end": "151", children: "Estimated Arrival" }),
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-primary mt-1", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "152", "data-source-line-end": "152", children: [
              ride.currentEtaMinutes,
              " min"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 rounded-lg p-3", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "154", "data-source-line-end": "157", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "155", "data-source-line-end": "155", children: "Distance" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-accent mt-1", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "156", "data-source-line-end": "156", children: "2.3 km" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "160", "data-source-line-end": "160" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "163", "data-source-line-end": "185", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "164", "data-source-line-end": "164", children: "Route" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "165", "data-source-line-end": "184", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "166", "data-source-line-end": "174", children: [
              /* @__PURE__ */ jsx("div", { className: "mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "167", "data-source-line-end": "169", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-primary", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "168", "data-source-line-end": "168" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "170", "data-source-line-end": "173", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "171", "data-source-line-end": "171", children: "From" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground truncate", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "172", "data-source-line-end": "172", children: ride.pickupLocation.name })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "175", "data-source-line-end": "183", children: [
              /* @__PURE__ */ jsx("div", { className: "mt-1 w-4 h-4 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "176", "data-source-line-end": "178", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-sm bg-destructive", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "177", "data-source-line-end": "177" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "179", "data-source-line-end": "182", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "180", "data-source-line-end": "180", children: "To" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground truncate", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "181", "data-source-line-end": "181", children: ride.dropoffLocation.name })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "190", "data-source-line-end": "208", children: [
      /* @__PURE__ */ jsxs(Button, { onClick: handleContactDriver, className: "w-full", size: "lg", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "191", "data-source-line-end": "198", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 18, className: "mr-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "196", "data-source-line-end": "196" }),
        "Contact Driver"
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleBackToRide, variant: "outline", className: "w-full", size: "lg", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "199", "data-source-line-end": "207", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 18, className: "mr-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "205", "data-source-line-end": "205" }),
        "Back to Ride"
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "bg-blue-50 border-blue-200", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "211", "data-source-line-end": "234", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "212", "data-source-line-end": "217", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-base flex items-center gap-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "213", "data-source-line-end": "216", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 18, className: "text-blue-600", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "214", "data-source-line-end": "214" }),
        "Safety Tips"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "218", "data-source-line-end": "233", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-900 space-y-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "219", "data-source-line-end": "232", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex gap-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "220", "data-source-line-end": "223", children: [
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "221", "data-source-line-end": "221", children: "•" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "222", "data-source-line-end": "222", children: "Verify the driver's name and vehicle details before boarding" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "224", "data-source-line-end": "227", children: [
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "225", "data-source-line-end": "225", children: "•" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "226", "data-source-line-end": "226", children: "Share your ride details with a trusted contact" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-2", "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "228", "data-source-line-end": "231", children: [
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "229", "data-source-line-end": "229", children: "•" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/track-driver/TrackDriverContent.tsx", "data-source-line-start": "230", "data-source-line-end": "230", children: "Keep your phone charged during the ride" })
        ] })
      ] }) })
    ] })
  ] });
}
const $$TrackDriver = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Track Driver - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { showBackButton: true, title: "Track Driver", showNotifications: false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/track-driver.astro" data-source-line-start="17" data-source-line-end="19" class="flex-1 pb-20">
    ${renderComponent($$result2, "TrackDriverContent", TrackDriverContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/track-driver/TrackDriverContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/track-driver.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/track-driver.astro";
const $$url = "/track-driver.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$TrackDriver,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
