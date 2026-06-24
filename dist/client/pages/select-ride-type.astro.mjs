import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.CtgI0PpG.js";
import { S as SafeIcon, B as Badge, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as mockRideTypes } from "../ride.BbPk0mGh.js";
import { C as Card, e as cn, d as CardContent } from "../card.BA4JS6QT.js";
import { r as requireAuth } from "../requireAuthClient.BVNKX2L9.js";
import { renderers } from "../renderers.mjs";
function RideTypeCard({
  rideType,
  isSelected,
  onSelect
}) {
  const handleClick = () => {
    const summaryElement = document.getElementById("selected-ride-summary");
    if (summaryElement) {
      summaryElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    }
    onSelect();
  };
  return /* @__PURE__ */ jsxs(Card, { className: cn("cursor-pointer transition-all duration-300 ease-out overflow-hidden hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]", isSelected ? "ring-2 ring-primary border-primary shadow-lg scale-[1.02]" : "hover:border-primary/50"), onClick: handleClick, "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "33", "data-source-line-end": "100", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-40 bg-muted overflow-hidden", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "43", "data-source-line-end": "59", children: [
      /* @__PURE__ */ jsx("img", { src: rideType.imageUrl, alt: rideType.name, className: cn("w-full h-full object-cover transition-transform duration-300", isSelected ? "scale-110" : "scale-100"), "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "44", "data-source-line-end": "51" }),
      isSelected && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/10 flex items-center justify-center transition-opacity duration-300 opacity-100", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "53", "data-source-line-end": "57", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full p-2 transform scale-100 transition-transform duration-200", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "54", "data-source-line-end": "56", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Check", size: 24, color: "white", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "55", "data-source-line-end": "55" }) }) })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-4 space-y-3", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "61", "data-source-line-end": "99", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "63", "data-source-line-end": "71", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "64", "data-source-line-end": "67", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "65", "data-source-line-end": "65", children: rideType.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "66", "data-source-line-end": "66", children: rideType.description })
        ] }),
        isSelected && /* @__PURE__ */ jsx(Badge, { className: "flex-shrink-0", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "69", "data-source-line-end": "69", children: "Selected" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2 pt-2 border-t", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "74", "data-source-line-end": "79", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "75", "data-source-line-end": "78", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "76", "data-source-line-end": "76", children: "Base Fare" }),
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-primary text-lg", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "77", "data-source-line-end": "77", children: [
          "KES ",
          rideType.baseFareKsh
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 pt-2", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "82", "data-source-line-end": "98", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 p-2 bg-muted rounded", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "83", "data-source-line-end": "87", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Users", size: 18, className: "text-muted-foreground", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "84", "data-source-line-end": "84" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "85", "data-source-line-end": "85", children: rideType.capacity }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: "Seats" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 p-2 bg-muted rounded", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "88", "data-source-line-end": "92", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 18, className: "text-muted-foreground", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "89", "data-source-line-end": "89" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "90", "data-source-line-end": "90", children: rideType.etaMinutesDefault }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "91", "data-source-line-end": "91", children: "Min ETA" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 p-2 bg-muted rounded", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "93", "data-source-line-end": "97", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: rideType.iconName, size: 18, className: "text-muted-foreground", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "94", "data-source-line-end": "94" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "95", "data-source-line-end": "95", children: "Premium" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/select-ride-type/RideTypeCard.tsx", "data-source-line-start": "96", "data-source-line-end": "96", children: "Service" })
        ] })
      ] })
    ] })
  ] });
}
function SelectRideTypeContent() {
  const [selectedRideType, setSelectedRideType] = useState(mockRideTypes[0]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    requireAuth("select-ride-type");
  }, []);
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./ride-request";
    }
  };
  const handleConfirm = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedRideType", JSON.stringify(selectedRideType));
      window.location.href = "./confirm-ride";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-6 space-y-6", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "34", "data-source-line-end": "106", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "36", "data-source-line-end": "41", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "37", "data-source-line-end": "37", children: "Choose Your Ride" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "38", "data-source-line-end": "40", children: "Select a vehicle type that suits your needs. Compare prices, capacity, and estimated arrival times." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 scroll-smooth", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "44", "data-source-line-end": "53", children: mockRideTypes.map((rideType) => /* @__PURE__ */ jsx(RideTypeCard, { rideType, isSelected: selectedRideType.typeId === rideType.typeId, onSelect: () => setSelectedRideType(rideType), "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "46", "data-source-line-end": "51" }, rideType.typeId)) }),
    selectedRideType && /* @__PURE__ */ jsxs("div", { id: "selected-ride-summary", className: "bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3 transition-all duration-300", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "57", "data-source-line-end": "85", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "61", "data-source-line-end": "70", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "62", "data-source-line-end": "65", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: "Selected Ride" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "64", "data-source-line-end": "64", children: selectedRideType.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "66", "data-source-line-end": "69", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "67", "data-source-line-end": "67", children: "Estimated Fare" }),
          /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-primary", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "68", "data-source-line-end": "68", children: [
            "KES ",
            selectedRideType.baseFareKsh
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 pt-2 border-t border-primary/10", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "71", "data-source-line-end": "84", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "72", "data-source-line-end": "75", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "73", "data-source-line-end": "73", children: "Capacity" }),
          /* @__PURE__ */ jsxs("p", { className: "font-semibold", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "74", "data-source-line-end": "74", children: [
            selectedRideType.capacity,
            " passengers"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "76", "data-source-line-end": "79", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "77", "data-source-line-end": "77", children: "ETA" }),
          /* @__PURE__ */ jsxs("p", { className: "font-semibold", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "78", "data-source-line-end": "78", children: [
            selectedRideType.etaMinutesDefault,
            " min"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "80", "data-source-line-end": "83", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "81", "data-source-line-end": "81", children: "Type" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold capitalize", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "82", "data-source-line-end": "82", children: selectedRideType.name.split(" ")[1] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-4", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "89", "data-source-line-end": "105", children: [
      /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "flex-1", onClick: handleBack, "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "90", "data-source-line-end": "97", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 18, className: "mr-2", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "95", "data-source-line-end": "95" }),
        "Back"
      ] }),
      /* @__PURE__ */ jsxs(Button, { className: "flex-1", onClick: handleConfirm, "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "98", "data-source-line-end": "104", children: [
        "Confirm Ride",
        /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronRight", size: 18, className: "ml-2", "data-source-file": "src/components/select-ride-type/SelectRideTypeContent.tsx", "data-source-line-start": "103", "data-source-line-end": "103" })
      ] })
    ] })
  ] });
}
const $$SelectRideType = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Select Ride Type - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, showBackButton: true, title: "Choose Ride Type", showNotifications: false, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/select-ride-type.astro" data-source-line-start="17" data-source-line-end="19" class="pb-20">
    ${renderComponent($$result2, "SelectRideTypeContent", SelectRideTypeContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/select-ride-type/SelectRideTypeContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "home", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/select-ride-type.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/select-ride-type.astro";
const $$url = "/select-ride-type.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SelectRideType,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
