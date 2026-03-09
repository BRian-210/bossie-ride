import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.G4c5_9v2.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.6nv4a3hw.js";
import { B as Badge, a as Button, S as SafeIcon, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { A as AppBottomNav } from "../AppBottomNav.D_V8Uun5.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "../tabs.Ll046Uyc.js";
import { S as Separator } from "../separator.DdA1LhoM.js";
import { r as requireAuth } from "../requireAuthClient.BhWjweWu.js";
import { f as fetchAuthedJson, c as clearAuthToken } from "../authClient.CZydr8qd.js";
import { n as notify } from "../notify.5u8Vcg9W.js";
import { renderers } from "../renderers.mjs";
function formatKsh(amount) {
  if (typeof amount !== "number" || Number.isNaN(amount)) return "—";
  return `KES ${amount.toLocaleString("en-KE", {
    maximumFractionDigits: 2
  })}`;
}
function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString();
}
function getId(doc) {
  return String(doc?.id || doc?._id || "");
}
function computeDiscountPercent(rides) {
  const now = Date.now();
  const days28 = 28 * 24 * 60 * 60 * 1e3;
  const completed = rides.filter((r) => r?.status === "completed");
  const completed28 = completed.filter((r) => {
    const t = new Date(r?.completedAt || r?.updatedAt || r?.createdAt || 0).getTime();
    return t && now - t <= days28;
  });
  const n = completed28.length;
  if (n >= 15) return {
    percent: 15,
    rides28: n
  };
  if (n >= 8) return {
    percent: 10,
    rides28: n
  };
  if (n >= 3) return {
    percent: 5,
    rides28: n
  };
  return {
    percent: 0,
    rides28: n
  };
}
function ProfileContent() {
  const [user, setUser] = useState(null);
  const [rides, setRides] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const u = await requireAuth("profile");
      if (!u) return;
      setUser(u);
      try {
        setLoading(true);
        const [ridesRes, txRes] = await Promise.all([fetchAuthedJson("./api/rides", {
          method: "GET"
        }), fetchAuthedJson("./api/transactions", {
          method: "GET"
        })]);
        setRides(ridesRes.rides || []);
        setTransactions(txRes.transactions || []);
      } catch {
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  const discount = useMemo(() => computeDiscountPercent(rides), [rides]);
  const activeRides = useMemo(() => rides.filter((r) => r?.status === "requested" || r?.status === "in_progress"), [rides]);
  const completedRides = useMemo(() => rides.filter((r) => r?.status === "completed"), [rides]);
  const initials = (user?.fullName || "Bossie Rider").split(" ").filter(Boolean).map((p) => p[0]).join("").slice(0, 2).toUpperCase();
  const handleLogout = async () => {
    clearAuthToken();
    await notify({
      title: "Signed out",
      message: "See you next time.",
      level: "info"
    });
    if (typeof window !== "undefined") window.location.href = "./";
  };
  return /* @__PURE__ */ jsxs("div", { className: "container max-w-4xl mx-auto px-4 py-6 space-y-6", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "105", "data-source-line-end": "316", children: [
    /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "106", "data-source-line-end": "155", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-col gap-4 sm:flex-row sm:items-center", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "107", "data-source-line-end": "130", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "108", "data-source-line-end": "118", children: [
          /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-semibold", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "109", "data-source-line-end": "111", children: initials || "BR" }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "112", "data-source-line-end": "117", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "113", "data-source-line-end": "113", children: user?.fullName || "Your Profile" }),
            /* @__PURE__ */ jsx(CardDescription, { className: "mt-1", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "114", "data-source-line-end": "116", children: user?.email || user?.phone || "Signed in" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:ml-auto flex flex-wrap items-center gap-2", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "120", "data-source-line-end": "129", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "secondary", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "121", "data-source-line-end": "121", children: "Registered" }),
          /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "122", "data-source-line-end": "124", children: [
            "Discount: ",
            discount.percent,
            "%"
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleLogout, "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "125", "data-source-line-end": "128", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "LogOut", size: 16, className: "mr-2", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "126", "data-source-line-end": "126" }),
            "Sign out"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "131", "data-source-line-end": "154", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "132", "data-source-line-end": "145", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-background p-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "133", "data-source-line-end": "136", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "134", "data-source-line-end": "134", children: "Active rides" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-primary", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "135", "data-source-line-end": "135", children: activeRides.length })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-background p-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "137", "data-source-line-end": "140", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "138", "data-source-line-end": "138", children: "Completed rides" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "139", "data-source-line-end": "139", children: completedRides.length })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-background p-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "141", "data-source-line-end": "144", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "142", "data-source-line-end": "142", children: "Consistency (last 28 days)" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "143", "data-source-line-end": "143", children: discount.rides28 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-muted/40 p-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "147", "data-source-line-end": "153", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "148", "data-source-line-end": "148", children: "How your discount works" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "149", "data-source-line-end": "152", children: "We calculate your discount based on how many rides you complete in the last 28 days. Keep riding consistently to unlock higher tiers." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "overview", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "157", "data-source-line-end": "315", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "158", "data-source-line-end": "163", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "159", "data-source-line-end": "159", children: "Overview" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "active", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "160", "data-source-line-end": "160", children: "Active rides" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "history", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "161", "data-source-line-end": "161", children: "History" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "transactions", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "162", "data-source-line-end": "162", children: "Transactions" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "overview", className: "mt-4 space-y-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "165", "data-source-line-end": "191", children: /* @__PURE__ */ jsxs(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "166", "data-source-line-end": "190", children: [
        /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "167", "data-source-line-end": "170", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "168", "data-source-line-end": "168", children: "Account details" }),
          /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "169", "data-source-line-end": "169", children: "Your saved profile information." })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3 text-sm", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "171", "data-source-line-end": "189", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "172", "data-source-line-end": "175", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "173", "data-source-line-end": "173", children: "User ID" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "174", "data-source-line-end": "174", children: user?.id || "—" })
          ] }),
          /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "176", "data-source-line-end": "176" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "177", "data-source-line-end": "180", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "178", "data-source-line-end": "178", children: "Full name" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "179", "data-source-line-end": "179", children: user?.fullName || "—" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "181", "data-source-line-end": "184", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "182", "data-source-line-end": "182", children: "Email" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "183", "data-source-line-end": "183", children: user?.email || "—" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "185", "data-source-line-end": "188", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "186", "data-source-line-end": "186", children: "Phone" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "187", "data-source-line-end": "187", children: user?.phone || "—" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "active", className: "mt-4 space-y-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "193", "data-source-line-end": "236", children: activeRides.length === 0 ? /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "195", "data-source-line-end": "206", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-10 pb-10 text-center", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "196", "data-source-line-end": "205", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "197", "data-source-line-end": "197", children: "No active rides" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "198", "data-source-line-end": "198", children: "Request a ride to see it here." }),
        /* @__PURE__ */ jsx("a", { className: "inline-flex mt-4", href: "./ride-request.html", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "199", "data-source-line-end": "204", children: /* @__PURE__ */ jsxs(Button, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "200", "data-source-line-end": "203", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Plus", size: 18, className: "mr-2", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "201", "data-source-line-end": "201" }),
          "Request a ride"
        ] }) })
      ] }) }) : activeRides.map((r) => /* @__PURE__ */ jsxs(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "209", "data-source-line-end": "233", children: [
        /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "210", "data-source-line-end": "218", children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center justify-between", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "211", "data-source-line-end": "216", children: [
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "212", "data-source-line-end": "212", children: r?.rideType?.name || "Ride" }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "capitalize", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "213", "data-source-line-end": "215", children: r?.status })
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "217", "data-source-line-end": "217", children: formatDate(r?.createdAt) })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "text-sm space-y-2", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "219", "data-source-line-end": "232", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "220", "data-source-line-end": "223", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "221", "data-source-line-end": "221", children: "Pickup" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-right", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "222", "data-source-line-end": "222", children: r?.pickup?.name || "—" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "224", "data-source-line-end": "227", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "225", "data-source-line-end": "225", children: "Dropoff" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-right", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "226", "data-source-line-end": "226", children: r?.dropoff?.name || "—" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "228", "data-source-line-end": "231", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "229", "data-source-line-end": "229", children: "Estimated fare" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "230", "data-source-line-end": "230", children: formatKsh(r?.estimatedFareKsh) })
          ] })
        ] })
      ] }, getId(r))) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "history", className: "mt-4 space-y-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "238", "data-source-line-end": "275", children: loading ? /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "240", "data-source-line-end": "242", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-10 pb-10 text-center text-sm text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "241", "data-source-line-end": "241", children: "Loading…" }) }) : completedRides.length === 0 ? /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "244", "data-source-line-end": "249", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-10 pb-10 text-center", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "245", "data-source-line-end": "248", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "246", "data-source-line-end": "246", children: "No completed rides yet" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "247", "data-source-line-end": "247", children: "Your ride history will appear here." })
      ] }) }) : completedRides.slice(0, 20).map((r) => /* @__PURE__ */ jsxs(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "252", "data-source-line-end": "272", children: [
        /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "253", "data-source-line-end": "259", children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center justify-between", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "254", "data-source-line-end": "257", children: [
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "255", "data-source-line-end": "255", children: r?.rideType?.name || "Ride" }),
            /* @__PURE__ */ jsx(Badge, { className: "bg-success/10 text-success border-success/20", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "256", "data-source-line-end": "256", children: "Completed" })
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "258", "data-source-line-end": "258", children: formatDate(r?.completedAt || r?.updatedAt) })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "text-sm space-y-2", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "260", "data-source-line-end": "271", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "261", "data-source-line-end": "266", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "262", "data-source-line-end": "262", children: "Route" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium text-right", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "263", "data-source-line-end": "265", children: [
              r?.pickup?.name || "—",
              " → ",
              r?.dropoff?.name || "—"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "267", "data-source-line-end": "270", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "268", "data-source-line-end": "268", children: "Final fare" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "269", "data-source-line-end": "269", children: formatKsh(r?.finalFareKsh || r?.estimatedFareKsh) })
          ] })
        ] })
      ] }, getId(r))) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "transactions", className: "mt-4 space-y-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "277", "data-source-line-end": "314", children: loading ? /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "279", "data-source-line-end": "281", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-10 pb-10 text-center text-sm text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "280", "data-source-line-end": "280", children: "Loading…" }) }) : transactions.length === 0 ? /* @__PURE__ */ jsx(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "283", "data-source-line-end": "288", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-10 pb-10 text-center", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "284", "data-source-line-end": "287", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "285", "data-source-line-end": "285", children: "No transactions yet" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "286", "data-source-line-end": "286", children: "Payments you make will appear here." })
      ] }) }) : transactions.slice(0, 30).map((t) => /* @__PURE__ */ jsxs(Card, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "291", "data-source-line-end": "311", children: [
        /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "292", "data-source-line-end": "300", children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center justify-between", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "293", "data-source-line-end": "298", children: [
            /* @__PURE__ */ jsx("span", { className: "capitalize", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "294", "data-source-line-end": "294", children: t?.provider || "Payment" }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "capitalize", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "295", "data-source-line-end": "297", children: t?.status })
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "299", "data-source-line-end": "299", children: formatDate(t?.createdAt) })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "text-sm space-y-2", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "301", "data-source-line-end": "310", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "302", "data-source-line-end": "305", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "303", "data-source-line-end": "303", children: "Amount" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "304", "data-source-line-end": "304", children: formatKsh(t?.amountKsh) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "306", "data-source-line-end": "309", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "307", "data-source-line-end": "307", children: "Reference" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-right break-all", "data-source-file": "src/components/profile/ProfileContent.tsx", "data-source-line-start": "308", "data-source-line-end": "308", children: t?.reference || "—" })
          ] })
        ] })
      ] }, getId(t))) })
    ] })
  ] });
}
const $$Profile = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Profile - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Your Profile", showNotifications: false })}

  ${maybeRenderHead()}<main data-source-file="src/pages/profile.astro" data-source-line-start="11" data-source-line-end="13" class="pb-20">
    ${renderComponent($$result2, "ProfileContent", ProfileContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/profile/ProfileContent.tsx", "client:component-export": "default" })}
  </main>

  ${renderComponent($$result2, "AppBottomNav", AppBottomNav, { "client:idle": true, activeItem: "profile", "client:component-hydration": "idle", "client:component-path": "@/components/common/AppBottomNav.tsx", "client:component-export": "default" })}
` })}`, "/home/rayan/bossie-ride/src/pages/profile.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/profile.astro";
const $$url = "/profile.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
