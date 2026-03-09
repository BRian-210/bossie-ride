import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.G4c5_9v2.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.6nv4a3hw.js";
import { B as Badge, S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card, d as CardContent, a as CardHeader, b as CardTitle, c as CardDescription } from "../card.BA4JS6QT.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "../tabs.Ll046Uyc.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { renderers } from "../renderers.mjs";
function RideHistoryItem({
  ride
}) {
  const statusConfig = {
    completed: {
      label: "Completed",
      variant: "default",
      icon: "CheckCircle"
    },
    cancelled: {
      label: "Cancelled",
      variant: "destructive",
      icon: "XCircle"
    }
  };
  const config = statusConfig[ride.status];
  return /* @__PURE__ */ jsx(Card, { className: "hover:shadow-card transition-shadow cursor-pointer", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "43", "data-source-line-end": "122", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "44", "data-source-line-end": "121", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "45", "data-source-line-end": "120", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "47", "data-source-line-end": "65", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "48", "data-source-line-end": "57", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "49", "data-source-line-end": "55", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "50", "data-source-line-end": "50", children: [
            ride.date,
            " at ",
            ride.time
          ] }),
          /* @__PURE__ */ jsxs(Badge, { variant: config.variant, className: "flex items-center gap-1 text-xs", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "51", "data-source-line-end": "54", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: config.icon, size: 12, "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "52", "data-source-line-end": "52" }),
            config.label
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "56", "data-source-line-end": "56", children: [
          ride.vehicleType,
          " • ",
          ride.driverName
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-right flex-shrink-0", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "58", "data-source-line-end": "64", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-primary", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "59", "data-source-line-end": "59", children: ride.fare }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 justify-end mt-1", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "60", "data-source-line-end": "63", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 14, className: "fill-yellow-400 text-yellow-400", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "61", "data-source-line-end": "61" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "62", "data-source-line-end": "62", children: ride.driverRating })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "67", "data-source-line-end": "67" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "70", "data-source-line-end": "83", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "71", "data-source-line-end": "76", children: [
        /* @__PURE__ */ jsx("div", { className: "mt-1 w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "72", "data-source-line-end": "74", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "73", "data-source-line-end": "73" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-1", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "75", "data-source-line-end": "75", children: ride.pickupLocation })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "77", "data-source-line-end": "82", children: [
        /* @__PURE__ */ jsx("div", { className: "mt-1 w-3 h-3 rounded-sm bg-destructive/20 flex items-center justify-center flex-shrink-0", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "78", "data-source-line-end": "80", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-sm bg-destructive", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "79", "data-source-line-end": "79" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-1", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "81", "data-source-line-end": "81", children: ride.dropoffLocation })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "85", "data-source-line-end": "85" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "88", "data-source-line-end": "101", children: [
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "89", "data-source-line-end": "92", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "90", "data-source-line-end": "90", children: "Distance" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "91", "data-source-line-end": "91", children: ride.distance })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "93", "data-source-line-end": "96", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "94", "data-source-line-end": "94", children: "Duration" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "95", "data-source-line-end": "95", children: ride.duration })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "97", "data-source-line-end": "100", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "98", "data-source-line-end": "98", children: "Payment" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "99", "data-source-line-end": "99", children: ride.paymentMethod })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "103", "data-source-line-end": "103" }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "106", "data-source-line-end": "119", children: [
      /* @__PURE__ */ jsx("a", { href: `./ride-completed.html?id=${ride.id}`, className: "flex-1", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "107", "data-source-line-end": "112", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", size: "sm", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "108", "data-source-line-end": "111", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Eye", size: 16, className: "mr-2", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "109", "data-source-line-end": "109" }),
        "View Details"
      ] }) }),
      /* @__PURE__ */ jsx("a", { href: `./payment-success.html?rideId=${ride.id}`, className: "flex-1", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "113", "data-source-line-end": "118", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", size: "sm", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "114", "data-source-line-end": "117", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Receipt", size: 16, className: "mr-2", "data-source-file": "src/components/ride-history/RideHistoryItem.tsx", "data-source-line-start": "115", "data-source-line-end": "115" }),
        "Payment Details"
      ] }) })
    ] })
  ] }) }) });
}
const mockRideHistory = [{
  id: "ride-001",
  date: "Today",
  time: "2:30 PM",
  pickupLocation: "Nairobi CBD, Tom Mboya Street",
  dropoffLocation: "Westlands, Mpesi Lane",
  fare: "KES 450",
  status: "completed",
  driverName: "John Kipchoge",
  driverRating: 4.8,
  vehicleType: "Standard",
  distance: "8.5 km",
  duration: "22 mins",
  paymentMethod: "M-PESA"
}, {
  id: "ride-002",
  date: "Yesterday",
  time: "5:15 PM",
  pickupLocation: "Kilimani, Argwings Kodhek Road",
  dropoffLocation: "Karen, Langata Road",
  fare: "KES 680",
  status: "completed",
  driverName: "Mary Wanjiru",
  driverRating: 4.9,
  vehicleType: "Premium",
  distance: "12.3 km",
  duration: "28 mins",
  paymentMethod: "Card"
}, {
  id: "ride-003",
  date: "Dec 15, 2024",
  time: "10:45 AM",
  pickupLocation: "Parklands, Limuru Road",
  dropoffLocation: "Nairobi CBD, Kenyatta Avenue",
  fare: "KES 520",
  status: "completed",
  driverName: "Peter Mwangi",
  driverRating: 4.7,
  vehicleType: "Standard",
  distance: "9.8 km",
  duration: "25 mins",
  paymentMethod: "M-PESA"
}, {
  id: "ride-004",
  date: "Dec 14, 2024",
  time: "7:20 PM",
  pickupLocation: "Upperhill, Bishops Road",
  dropoffLocation: "Runda, Runda Road",
  fare: "KES 590",
  status: "completed",
  driverName: "Samuel Kiplagat",
  driverRating: 4.6,
  vehicleType: "Premium",
  distance: "11.2 km",
  duration: "26 mins",
  paymentMethod: "Cash"
}, {
  id: "ride-005",
  date: "Dec 13, 2024",
  time: "3:00 PM",
  pickupLocation: "Lavington, Argwings Kodhek Road",
  dropoffLocation: "Nairobi CBD, Muindi Mbingu Street",
  fare: "KES 420",
  status: "completed",
  driverName: "Grace Njeri",
  driverRating: 4.9,
  vehicleType: "Standard",
  distance: "7.5 km",
  duration: "20 mins",
  paymentMethod: "M-PESA"
}, {
  id: "ride-006",
  date: "Dec 12, 2024",
  time: "6:30 PM",
  pickupLocation: "Gigiri, UN Avenue",
  dropoffLocation: "Westlands, Mpesi Lane",
  fare: "KES 750",
  status: "completed",
  driverName: "David Ochieng",
  driverRating: 4.8,
  vehicleType: "Premium",
  distance: "14.2 km",
  duration: "32 mins",
  paymentMethod: "Card"
}];
function loadStoredHistory() {
  if (typeof window === "undefined") return mockRideHistory;
  const stored = sessionStorage.getItem("rideHistory");
  if (!stored) return mockRideHistory;
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [];
  } catch {
    return mockRideHistory;
  }
}
function RideHistoryList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [history, setHistory] = useState(() => loadStoredHistory());
  useEffect(() => {
    requireAuth("ride-history");
  }, []);
  const filteredRides = history.filter((ride) => {
    const matchesSearch = ride.pickupLocation.toLowerCase().includes(searchQuery.toLowerCase()) || ride.dropoffLocation.toLowerCase().includes(searchQuery.toLowerCase()) || ride.driverName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || ride.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const totalSpent = history.reduce((sum, ride) => {
    const amount = parseInt(ride.fare.replace("KES ", ""));
    return sum + amount;
  }, 0);
  const completedRides = history.filter((r) => r.status === "completed").length;
  const canClear = history.length > 0;
  const handleClearHistory = () => {
    if (typeof window === "undefined") return;
    const confirmed = confirm("Clear your ride history? This cannot be undone.");
    if (!confirmed) return;
    sessionStorage.setItem("rideHistory", JSON.stringify([]));
    setHistory([]);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "171", "data-source-line-end": "287", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "173", "data-source-line-end": "215", children: [
      /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "174", "data-source-line-end": "186", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "175", "data-source-line-end": "185", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "176", "data-source-line-end": "184", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "177", "data-source-line-end": "180", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "178", "data-source-line-end": "178", children: "Total Rides" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-primary", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "179", "data-source-line-end": "179", children: history.length })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "181", "data-source-line-end": "183", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Car", size: 24, className: "text-primary", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "182", "data-source-line-end": "182" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "188", "data-source-line-end": "200", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "189", "data-source-line-end": "199", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "190", "data-source-line-end": "198", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "191", "data-source-line-end": "194", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "192", "data-source-line-end": "192", children: "Completed" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-green-600", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "193", "data-source-line-end": "193", children: completedRides })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "195", "data-source-line-end": "197", children: /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle", size: 24, className: "text-green-600", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "196", "data-source-line-end": "196" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "202", "data-source-line-end": "214", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "203", "data-source-line-end": "213", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "204", "data-source-line-end": "212", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "205", "data-source-line-end": "208", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "206", "data-source-line-end": "206", children: "Total Spent" }),
          /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bold text-primary", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "207", "data-source-line-end": "207", children: [
            "KES ",
            totalSpent.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "209", "data-source-line-end": "211", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Wallet", size: 24, className: "text-primary", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "210", "data-source-line-end": "210" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "218", "data-source-line-end": "253", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between gap-4", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "219", "data-source-line-end": "233", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "220", "data-source-line-end": "223", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "221", "data-source-line-end": "221", children: "Search Rides" }),
          /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "222", "data-source-line-end": "222", children: "Find past trips and manage your history." })
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "destructive", size: "sm", onClick: handleClearHistory, disabled: !canClear, "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "224", "data-source-line-end": "232", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Trash2", size: 16, className: "mr-2", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "230", "data-source-line-end": "230" }),
          "Clear History"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "234", "data-source-line-end": "252", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "235", "data-source-line-end": "243", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Search", size: 18, className: "absolute left-3 top-3 text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "236", "data-source-line-end": "236" }),
          /* @__PURE__ */ jsx(Input, { placeholder: "Search by location or driver name...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "237", "data-source-line-end": "242" })
        ] }),
        /* @__PURE__ */ jsx(Tabs, { value: filterStatus, onValueChange: (value) => setFilterStatus(value), "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "245", "data-source-line-end": "251", children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-3", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "246", "data-source-line-end": "250", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "all", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "247", "data-source-line-end": "247", children: "All Rides" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "completed", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "248", "data-source-line-end": "248", children: "Completed" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "cancelled", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "249", "data-source-line-end": "249", children: "Cancelled" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "256", "data-source-line-end": "276", children: filteredRides.length > 0 ? filteredRides.map((ride) => /* @__PURE__ */ jsx(RideHistoryItem, { ride, "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "259", "data-source-line-end": "259" }, ride.id)) : /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "262", "data-source-line-end": "274", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-12 pb-12", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "263", "data-source-line-end": "273", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "264", "data-source-line-end": "272", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "265", "data-source-line-end": "267", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Search", size: 32, className: "text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "266", "data-source-line-end": "266" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-lg font-medium", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "268", "data-source-line-end": "268", children: "No rides found" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "269", "data-source-line-end": "271", children: searchQuery ? "Try adjusting your search criteria" : "Your ride history will appear here" })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "sticky bottom-24 left-0 right-0", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "279", "data-source-line-end": "286", children: /* @__PURE__ */ jsx("a", { href: "./ride-request.html", className: "block", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "280", "data-source-line-end": "285", children: /* @__PURE__ */ jsxs(Button, { className: "w-full", size: "lg", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "281", "data-source-line-end": "284", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Plus", size: 20, className: "mr-2", "data-source-file": "src/components/ride-history/RideHistoryList.tsx", "data-source-line-start": "282", "data-source-line-end": "282" }),
      "Request New Ride"
    ] }) }) })
  ] });
}
const $$RideHistory = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Ride History - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, showBackButton: true, title: "Ride History", showNotifications: true, notificationCount: 0, "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader.tsx", "client:component-export": "default" })}
  
  ${maybeRenderHead()}<main data-source-file="src/pages/ride-history.astro" data-source-line-start="18" data-source-line-end="22" class="pb-20 pt-4">
    <div data-source-file="src/pages/ride-history.astro" data-source-line-start="19" data-source-line-end="21" class="container px-4">
      ${renderComponent($$result2, "RideHistoryList", RideHistoryList, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/ride-history/RideHistoryList.tsx", "client:component-export": "default" })}
    </div>
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:load": true, activeItem: "history", "client:component-hydration": "load", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/ride-history.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/ride-history.astro";
const $$url = "/ride-history.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$RideHistory,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
