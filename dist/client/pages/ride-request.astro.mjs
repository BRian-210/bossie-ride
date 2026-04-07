import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.D-nZ0uYi.js";
import { S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useCallback } from "react";
import { e as cn, C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { M as MapContainer } from "../MapContainer.BYjNKSUp.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { L as Label } from "../label.Da--91Bw.js";
import { m as mockLocations } from "../location.BmOrolG9.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { n as notify } from "../notify.5u8Vcg9W.js";
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
  selectedLocation,
  isLoading = false,
  className
}) {
  const filteredSuggestions = useMemo(() => {
    if (!value.trim()) return suggestions.slice(0, 5);
    const lowerValue = value.toLowerCase();
    return suggestions.filter((loc) => loc.name.toLowerCase().includes(lowerValue) || loc.address.toLowerCase().includes(lowerValue)).slice(0, 8);
  }, [value, suggestions]);
  const hasSuggestions = showSuggestions && (filteredSuggestions.length > 0 || isLoading);
  const noResults = showSuggestions && value.trim() && filteredSuggestions.length === 0 && !isLoading;
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-1.5 relative", className), "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "58", "data-source-line-end": "157", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: `loc-${label.toLowerCase().replace(/\s/g, "-")}`, className: "text-sm font-medium text-foreground/90", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "59", "data-source-line-end": "64", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "66", "data-source-line-end": "98", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "68", "data-source-line-end": "70", children: /* @__PURE__ */ jsx(SafeIcon, { name: icon, size: 18, "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "69", "data-source-line-end": "69" }) }),
      /* @__PURE__ */ jsx(Input, { id: `loc-${label.toLowerCase().replace(/\s/g, "-")}`, type: "text", value, onChange: (e) => onChange(e.target.value), onFocus, onBlur, placeholder, autoComplete: "off", spellCheck: false, className: cn("pl-11 pr-10 h-12 text-base transition-all", "focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500", "placeholder:text-muted-foreground/70"), "aria-autocomplete": "list", "aria-expanded": hasSuggestions, "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "73", "data-source-line-end": "90" }),
      isLoading && /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "94", "data-source-line-end": "96", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 16, className: "animate-spin text-primary", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "95", "data-source-line-end": "95" }) })
    ] }),
    hasSuggestions && /* @__PURE__ */ jsx(Card, { className: cn("absolute w-full mt-1.5 z-50 shadow-xl border border-border/50 rounded-xl overflow-hidden", "animate-in fade-in-60 zoom-in-95 duration-150", "max-h-[320px] overflow-y-auto scrollbar-thin"), "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "102", "data-source-line-end": "146", children: isLoading ? /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 text-center text-sm text-muted-foreground", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "110", "data-source-line-end": "113", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 20, className: "animate-spin mx-auto mb-2", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "111", "data-source-line-end": "111" }),
      "Searching locations..."
    ] }) : filteredSuggestions.map((loc) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => onSelectSuggestion?.(loc), className: cn("w-full px-4 py-3.5 text-left flex items-start gap-3", "hover:bg-amber-50/70 transition-colors border-b last:border-b-0", "focus-visible:bg-amber-100 outline-none", selectedLocation?.locationId === loc.locationId && "bg-amber-50/50"), "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "116", "data-source-line-end": "143", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 18, className: "text-amber-600 flex-shrink-0 mt-1", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "127", "data-source-line-end": "131" }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "132", "data-source-line-end": "139", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm leading-tight truncate", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "133", "data-source-line-end": "135", children: loc.name }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate mt-0.5", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "136", "data-source-line-end": "138", children: loc.address })
      ] }),
      selectedLocation?.locationId === loc.locationId && /* @__PURE__ */ jsx(SafeIcon, { name: "Check", size: 18, className: "text-amber-600 flex-shrink-0 mt-1", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "141", "data-source-line-end": "141" })
    ] }, loc.locationId)) }),
    noResults && /* @__PURE__ */ jsx(Card, { className: "absolute w-full mt-1.5 z-50 shadow-xl rounded-xl border border-border/50", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "151", "data-source-line-end": "155", children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 text-sm text-muted-foreground text-center", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "152", "data-source-line-end": "154", children: [
      "No matching locations found for ",
      /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/ride-request/LocationInputField.tsx", "data-source-line-start": "153", "data-source-line-end": "153", children: [
        '"',
        value,
        '"'
      ] })
    ] }) })
  ] });
}
function RideRequestForm() {
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);
  const [pickupSearchTerm, setPickupSearchTerm] = useState("");
  const [dropoffSearchTerm, setDropoffSearchTerm] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    requireAuth("ride-request");
  }, []);
  useEffect(() => {
    if (pickupLocation && dropoffLocation && pickupLocation.locationId !== dropoffLocation.locationId) {
      const distanceKm = (Math.random() * 30 + 2).toFixed(1);
      const timeMin = Math.round(Number(distanceKm) * 2.5 + 5);
      const fare = Math.round(150 + Number(distanceKm) * 35);
      setPreview({
        distance: `${distanceKm} km`,
        time: `${timeMin} min`,
        fare: `KSh ${fare.toLocaleString()}`
      });
    } else {
      setPreview(null);
    }
  }, [pickupLocation, dropoffLocation]);
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
    const tempLoc = pickupLocation;
    setPickupLocation(dropoffLocation);
    setDropoffLocation(tempLoc);
    const tempSearch = pickupSearchTerm;
    setPickupSearchTerm(dropoffSearchTerm);
    setDropoffSearchTerm(tempSearch);
  };
  const handleGetCurrentLocation = useCallback(() => {
    setIsLocating(true);
    setTimeout(() => {
      const current = mockLocations[0];
      setPickupLocation(current);
      setPickupSearchTerm(current.name);
      notify({
        title: "Location Set",
        message: "Using your current location",
        level: "success"
      });
      setIsLocating(false);
    }, 800);
  }, []);
  const handleContinue = () => {
    if (pickupLocation && dropoffLocation) {
      sessionStorage.setItem("pickupLocation", JSON.stringify(pickupLocation));
      sessionStorage.setItem("dropoffLocation", JSON.stringify(dropoffLocation));
      window.location.href = "./select-ride-type.html";
    }
  };
  const handleViewHistory = () => {
    window.location.href = "./ride-history.html";
  };
  const isFormValid = pickupLocation && dropoffLocation && pickupLocation.locationId !== dropoffLocation.locationId;
  return /* @__PURE__ */ jsxs("div", { className: "container max-w-2xl mx-auto px-4 py-6 space-y-6", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "111", "data-source-line-end": "254", children: [
    /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl overflow-hidden shadow-lg border border-border", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "113", "data-source-line-end": "115", children: /* @__PURE__ */ jsx(MapContainer, { height: "380px", showControls: true, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "114", "data-source-line-end": "114" }) }),
    /* @__PURE__ */ jsxs(Card, { className: "bg-white/90 backdrop-blur-md border border-border/50 shadow-xl", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "118", "data-source-line-end": "238", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "119", "data-source-line-end": "124", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-semibold", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "120", "data-source-line-end": "120", children: "Where are you going?" }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-muted-foreground", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "121", "data-source-line-end": "123", children: "Enter your pickup and dropoff locations" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-5", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "126", "data-source-line-end": "237", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 relative", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "128", "data-source-line-end": "158", children: [
          /* @__PURE__ */ jsx(LocationInputField, { label: "Pickup Location", placeholder: "Your current location or search...", value: pickupSearchTerm, onChange: handlePickupChange, onFocus: () => setShowPickupSuggestions(true), onBlur: () => setTimeout(() => setShowPickupSuggestions(false), 200), icon: "MapPin", suggestions: mockLocations, showSuggestions: showPickupSuggestions, onSelectSuggestion: handlePickupSelect, selectedLocation: pickupLocation, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "129", "data-source-line-end": "141" }),
          /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "absolute right-3 top-[42px] z-10 text-amber-600 hover:text-amber-700 hover:bg-amber-50/50", onClick: handleGetCurrentLocation, disabled: isLocating, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "144", "data-source-line-end": "157", children: [
            isLocating ? /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 16, className: "mr-1.5 animate-spin", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "152", "data-source-line-end": "152" }) : /* @__PURE__ */ jsx(SafeIcon, { name: "Crosshair", size: 16, className: "mr-1.5", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "154", "data-source-line-end": "154" }),
            "Use current location"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center -my-2 relative z-10", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "161", "data-source-line-end": "171", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: handleSwapLocations, className: "rounded-full border-2 shadow-sm bg-background", "aria-label": "Swap pickup and dropoff locations", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "162", "data-source-line-end": "170", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowUpDown", size: 20, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "169", "data-source-line-end": "169" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "174", "data-source-line-end": "188", children: /* @__PURE__ */ jsx(LocationInputField, { label: "Dropoff Location", placeholder: "Where to? (e.g. Two Rivers, JKIA, Westlands...)", value: dropoffSearchTerm, onChange: handleDropoffChange, onFocus: () => setShowDropoffSuggestions(true), onBlur: () => setTimeout(() => setShowDropoffSuggestions(false), 200), icon: "MapPin", suggestions: mockLocations, showSuggestions: showDropoffSuggestions, onSelectSuggestion: handleDropoffSelect, selectedLocation: dropoffLocation, "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "175", "data-source-line-end": "187" }) }),
        preview && /* @__PURE__ */ jsxs("div", { className: "bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 mt-2", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "192", "data-source-line-end": "210", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "193", "data-source-line-end": "206", children: [
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "194", "data-source-line-end": "197", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "195", "data-source-line-end": "195", children: "Distance" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "196", "data-source-line-end": "196", children: preview.distance })
            ] }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "198", "data-source-line-end": "201", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "199", "data-source-line-end": "199", children: "Est. Time" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "200", "data-source-line-end": "200", children: preview.time })
            ] }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "202", "data-source-line-end": "205", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "203", "data-source-line-end": "203", children: "Est. Fare" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-amber-700", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "204", "data-source-line-end": "204", children: preview.fare })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-muted-foreground mt-3 italic", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "207", "data-source-line-end": "209", children: "Fare is an estimate — final price depends on traffic & ride type" })
        ] }),
        /* @__PURE__ */ jsx(Separator, { className: "my-5", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "213", "data-source-line-end": "213" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "216", "data-source-line-end": "236", children: [
          /* @__PURE__ */ jsxs(Button, { onClick: handleContinue, disabled: !isFormValid, className: "w-full bg-foreground hover:bg-foreground/90 text-background", size: "lg", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "217", "data-source-line-end": "225", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 18, className: "mr-2", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "223", "data-source-line-end": "223" }),
            "See Prices & Ride Options"
          ] }),
          /* @__PURE__ */ jsxs(Button, { onClick: handleViewHistory, variant: "outline", className: "w-full", size: "lg", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "227", "data-source-line-end": "235", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 18, className: "mr-2", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "233", "data-source-line-end": "233" }),
            "View Ride History"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "bg-primary/5 border-primary/20", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "241", "data-source-line-end": "253", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "242", "data-source-line-end": "252", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "243", "data-source-line-end": "251", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 20, className: "text-primary flex-shrink-0 mt-0.5", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "244", "data-source-line-end": "244" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "245", "data-source-line-end": "250", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "246", "data-source-line-end": "246", children: "Pro Tip" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-request/RideRequestForm.tsx", "data-source-line-start": "247", "data-source-line-end": "249", children: "Tap anywhere on the map to quickly set pickup or dropoff." })
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
