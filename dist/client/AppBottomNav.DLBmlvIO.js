import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as Button, S as SafeIcon } from "./AppHeader.h2OVAX_7.js";
const navItems = [{
  id: "home",
  label: "Home",
  icon: "Home",
  href: "./ride-request"
}, {
  id: "history",
  label: "History",
  icon: "Clock",
  href: "./ride-history"
}, {
  id: "profile",
  label: "Profile",
  icon: "User",
  href: "./profile"
}];
function AppBottomNav({
  activeItem
}) {
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  const isActive = (item) => {
    if (activeItem) {
      return activeItem === item.id;
    }
    return currentPath.includes(item.href.replace("./", "").replace(".html", ""));
  };
  return /* @__PURE__ */ jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 safe-area-inset-bottom", "data-source-file": "src/components/common/AppBottomNav.tsx", "data-source-line-start": "40", "data-source-line-end": "66", children: /* @__PURE__ */ jsx("div", { className: "container flex h-16 items-center justify-around px-4", "data-source-file": "src/components/common/AppBottomNav.tsx", "data-source-line-start": "41", "data-source-line-end": "65", children: navItems.map((item) => {
    const active = isActive(item);
    return /* @__PURE__ */ jsxs("a", { href: item.href, className: "flex flex-col items-center justify-center gap-1 flex-1 min-w-0", "data-source-file": "src/components/common/AppBottomNav.tsx", "data-source-line-start": "45", "data-source-line-end": "62", children: [
      /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: `h-10 w-10 ${active ? "text-primary" : "text-muted-foreground"}`, "aria-label": item.label, "aria-current": active ? "page" : void 0, "data-source-file": "src/components/common/AppBottomNav.tsx", "data-source-line-start": "50", "data-source-line-end": "58", children: /* @__PURE__ */ jsx(SafeIcon, { name: item.icon, size: 20, "data-source-file": "src/components/common/AppBottomNav.tsx", "data-source-line-start": "57", "data-source-line-end": "57" }) }),
      /* @__PURE__ */ jsx("span", { className: `text-xs font-medium ${active ? "text-primary" : "text-muted-foreground"}`, "data-source-file": "src/components/common/AppBottomNav.tsx", "data-source-line-start": "59", "data-source-line-end": "61", children: item.label })
    ] }, item.id);
  }) }) });
}
export {
  AppBottomNav as A
};
