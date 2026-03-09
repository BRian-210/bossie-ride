import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.G4c5_9v2.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.6nv4a3hw.js";
import { S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { M as MapContainer } from "../MapContainer.BYjNKSUp.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { L as Label } from "../label.Da--91Bw.js";
import { m as mockLocations } from "../location.BmOrolG9.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { renderers } from "../renderers.mjs";
function LocationInputField({
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  icon = "MapPin",
  suggestions = [],
  showSuggestions = false,
  onSelectSuggestion,
  selectedLocation
}) {
  const filteredSuggestions = suggestions.filter((loc) => loc.name.toLowerCase().includes(value.toLowerCase()) || loc.address.toLowerCase().includes(value.toLowerCase()));
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2 relative", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "41", "data-source-line-end": "96", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: `location-${label}`, className: "text-sm font-medium", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "42", "data-source-line-end": "44", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "46", "data-source-line-end": "62", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "47", "data-source-line-end": "49", children: /* @__PURE__ */ jsx(SafeIcon, { name: icon, size: 18, "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "48", "data-source-line-end": "48" }) }),
      /* @__PURE__ */ jsx(Input, { id: `location-${label}`, type: "text", placeholder, value, onChange: (e) => onChange(e.target.value), onFocus, onBlur, className: "pl-10 pr-4", autoComplete: "off", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "51", "data-source-line-end": "61" })
    ] }),
    showSuggestions && filteredSuggestions.length > 0 && /* @__PURE__ */ jsx(Card, { className: "absolute top-full left-0 right-0 mt-1 z-50 shadow-lg", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "66", "data-source-line-end": "85", children: /* @__PURE__ */ jsx("div", { className: "max-h-64 overflow-y-auto", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "67", "data-source-line-end": "84", children: filteredSuggestions.map((location) => /* @__PURE__ */ jsxs("button", { onClick: () => onSelectSuggestion?.(location), className: "w-full px-4 py-3 text-left hover:bg-muted transition-colors border-b last:border-b-0 flex items-start gap-3", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "69", "data-source-line-end": "82", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 18, className: "text-primary flex-shrink-0 mt-0.5", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "74", "data-source-line-end": "74" }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "75", "data-source-line-end": "78", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "76", "data-source-line-end": "76", children: location.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "77", "data-source-line-end": "77", children: location.address })
      ] }),
      selectedLocation?.locationId === location.locationId && /* @__PURE__ */ jsx(SafeIcon, { name: "Check", size: 18, className: "text-primary flex-shrink-0", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "80", "data-source-line-end": "80" })
    ] }, location.locationId)) }) }),
    showSuggestions && value && filteredSuggestions.length === 0 && /* @__PURE__ */ jsx(Card, { className: "absolute top-full left-0 right-0 mt-1 z-50 shadow-lg", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "90", "data-source-line-end": "94", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 text-center text-sm text-muted-foreground", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "91", "data-source-line-end": "93", children: [
      'No locations found for "',
      value,
      '"'
    ] }) })
  ] });
}
function RideRequestForm() {
  const [pickupLocation, setPickupLocation] = useState(mockLocations[0]);
  const [dropoffLocation, setDropoffLocation] = useState(mockLocations[1]);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);
  const [pickupSearchTerm, setPickupSearchTerm] = useState(mockLocations[0].name);
  const [dropoffSearchTerm, setDropoffSearchTerm] = useState(mockLocations[1].name);
  useEffect(() => {
    if (typeof window === "undefined") return;
    requireAuth("ride-request");
  }, []);
  const handlePickupChange = (value) => {
    setPickupSearchTerm(value);
    setShowPickupSuggestions(true);
  };
  const handleDropoffChange = (value) => {
    setDropoffSearchTerm(value);
    setShowDropoffSuggestions(true);
  };
  const handlePickupSelect = (location) => {
    setPickupLocation(location);
    setPickupSearchTerm(location.name);
    setShowPickupSuggestions(false);
  };
  const handleDropoffSelect = (location) => {
    setDropoffLocation(location);
    setDropoffSearchTerm(location.name);
    setShowDropoffSuggestions(false);
  };
  const handleSwapLocations = () => {
    const temp = pickupLocation;
    setPickupLocation(dropoffLocation);
    setDropoffLocation(temp);
    const tempSearch = pickupSearchTerm;
    setPickupSearchTerm(dropoffSearchTerm);
    setDropoffSearchTerm(tempSearch);
  };
  const handleContinue = () => {
    if (pickupLocation && dropoffLocation) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("pickupLocation", JSON.stringify(pickupLocation));
        sessionStorage.setItem("dropoffLocation", JSON.stringify(dropoffLocation));
        window.location.href = "./select-ride-type.html";
      }
    }
  };
  const handleViewHistory = () => {
    if (typeof window !== "undefined") {
      window.location.href = "./ride-history.html";
    }
  };
  const isFormValid = pickupLocation && dropoffLocation && pickupLocation.locationId !== dropoffLocation.locationId;
  return /* @__PURE__ */ jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-6 space-y-6", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "80", "data-source-line-end": "179", children: [
    /* @__PURE__ */ jsx(MapContainer, { height: "300px", showControls: true, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "82", "data-source-line-end": "82" }),
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "85", "data-source-line-end": "163", children: [
      /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "86", "data-source-line-end": "89", children: [
        /* @__PURE__ */ jsx(CardTitle, { "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "87", "data-source-line-end": "87", children: "Where are you going?" }),
        /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "88", "data-source-line-end": "88", children: "Enter your pickup and dropoff locations" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "90", "data-source-line-end": "162", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-2", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "92", "data-source-line-end": "106", children: /* @__PURE__ */ jsx(LocationInputField, { label: "Pickup Location", placeholder: "Enter pickup location", value: pickupSearchTerm, onChange: handlePickupChange, onFocus: () => setShowPickupSuggestions(true), onBlur: () => setTimeout(() => setShowPickupSuggestions(false), 200), icon: "MapPin", suggestions: mockLocations, showSuggestions: showPickupSuggestions, onSelectSuggestion: handlePickupSelect, selectedLocation: pickupLocation, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "93", "data-source-line-end": "105" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "109", "data-source-line-end": "119", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: handleSwapLocations, className: "rounded-full", "aria-label": "Swap pickup and dropoff locations", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "110", "data-source-line-end": "118", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowUpDown", size: 20, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "117", "data-source-line-end": "117" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "122", "data-source-line-end": "136", children: /* @__PURE__ */ jsx(LocationInputField, { label: "Dropoff Location", placeholder: "Enter dropoff location", value: dropoffSearchTerm, onChange: handleDropoffChange, onFocus: () => setShowDropoffSuggestions(true), onBlur: () => setTimeout(() => setShowDropoffSuggestions(false), 200), icon: "MapPin", suggestions: mockLocations, showSuggestions: showDropoffSuggestions, onSelectSuggestion: handleDropoffSelect, selectedLocation: dropoffLocation, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "123", "data-source-line-end": "135" }) }),
        /* @__PURE__ */ jsx(Separator, { className: "my-4", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "138", "data-source-line-end": "138" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "141", "data-source-line-end": "161", children: [
          /* @__PURE__ */ jsxs(Button, { onClick: handleContinue, disabled: !isFormValid, className: "w-full", size: "lg", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "142", "data-source-line-end": "150", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 18, className: "mr-2", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "148", "data-source-line-end": "148" }),
            "Continue to Select Ride Type"
          ] }),
          /* @__PURE__ */ jsxs(Button, { onClick: handleViewHistory, variant: "outline", className: "w-full", size: "lg", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "152", "data-source-line-end": "160", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 18, className: "mr-2", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "158", "data-source-line-end": "158" }),
            "View Ride History"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "bg-primary/5 border-primary/20", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "166", "data-source-line-end": "178", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "167", "data-source-line-end": "177", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "168", "data-source-line-end": "176", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 20, className: "text-primary flex-shrink-0 mt-0.5", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "169", "data-source-line-end": "169" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "170", "data-source-line-end": "175", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "171", "data-source-line-end": "171", children: "Pro Tip" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "172", "data-source-line-end": "174", children: "You can also tap on the map to select your pickup and dropoff locations directly." })
      ] })
    ] }) }) })
  ] });
}
const $$RideRequest = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Ride Request - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Request a Ride", showNotifications: true })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/ride-request.astro" data-source-line-start="12" data-source-line-end="14" class="pb-20">
    ${renderComponent($$result2, "RideRequestForm", RideRequestForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ride-request/RideRequestForm.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "home", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/ride-request.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/ride-request.astro";
const $$url = "/ride-request.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$RideRequest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
