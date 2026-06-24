import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { lazy, Suspense, createElement } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { e as cn } from "./card.DPXo1ZLP.js";
import { Circle, ChevronRight, Check } from "lucide-react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = React.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props, "data-source-file": "src/components/ui/button.tsx", "data-source-line-start": "47", "data-source-line-end": "51" });
});
Button.displayName = "Button";
const badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Badge({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({
    variant
  }), className), ...props, "data-source-file": "src/components/ui/badge.tsx", "data-source-line-start": "32", "data-source-line-end": "32" });
}
const iconCache = /* @__PURE__ */ new Map();
function SafeIcon({
  name,
  ...props
}) {
  if (!iconCache.has(name)) {
    try {
      const IconComponent2 = lazy(() => import("lucide-react").then((module) => {
        const icon = module[name];
        if (!icon) {
          console.warn(`Icon "${name}" not found in lucide-react, using fallback`);
          return {
            default: Circle
          };
        }
        return {
          default: icon
        };
      }).catch(() => {
        console.warn(`Failed to load icon "${name}", using fallback`);
        return {
          default: Circle
        };
      }));
      iconCache.set(name, IconComponent2);
    } catch {
      iconCache.set(name, Circle);
    }
  }
  const IconComponent = iconCache.get(name) || Circle;
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Circle, { ...props, "data-source-file": "src/components/common/SafeIcon.tsx", "data-source-line-start": "40", "data-source-line-end": "40" }), "data-source-file": "src/components/common/SafeIcon.tsx", "data-source-line-start": "40", "data-source-line-end": "42", children: createElement(IconComponent, props) });
}
const Avatar = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Root, { ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props }));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Fallback, { ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props }));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({
  className,
  inset,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.SubTrigger, { ref, className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className), ...props, children: [
  children,
  /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "37", "data-source-line-end": "37" })
] }));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.SubContent, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className), ...props }));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({
  className,
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, { ref, sideOffset, className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className), ...props }) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, { ref, className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className), ...props }));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({
  className,
  children,
  checked,
  ...props
}, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.CheckboxItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked, ...props, children: [
  /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "109", "data-source-line-end": "113", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "111", "data-source-line-end": "111" }) }) }),
  children
] }));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.RadioItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [
  /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "132", "data-source-line-end": "136", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "134", "data-source-line-end": "134" }) }) }),
  children
] }));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Label, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props }));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
function UserMenu() {
  return /* @__PURE__ */ jsxs(DropdownMenu, { "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "15", "data-source-line-end": "47", children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "16", "data-source-line-end": "24", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full", "aria-label": "User menu", "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "17", "data-source-line-end": "23", children: /* @__PURE__ */ jsx(Avatar, { className: "h-8 w-8", "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "18", "data-source-line-end": "22", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary text-primary-foreground text-sm", "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "19", "data-source-line-end": "21", children: "BR" }) }) }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-56", "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "25", "data-source-line-end": "46", children: [
      /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => {
        if (typeof window !== "undefined") {
          window.location.href = "./ride-history";
        }
      }, "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "26", "data-source-line-end": "35", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "History", size: 16, className: "mr-2", "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "33", "data-source-line-end": "33" }),
        "Ride History"
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => {
        if (typeof window !== "undefined") {
          window.location.href = "./profile";
        }
      }, "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "36", "data-source-line-end": "45", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 16, className: "mr-2", "data-source-file": "src/components/common/UserMenu.tsx", "data-source-line-start": "43", "data-source-line-end": "43" }),
        "Profile"
      ] })
    ] })
  ] });
}
function AppHeader({
  showBackButton = false,
  onBackClick,
  title,
  showNotifications = true,
  notificationCount = 0
}) {
  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "31", "data-source-line-end": "75", children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center justify-between px-4", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "32", "data-source-line-end": "74", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "33", "data-source-line-end": "55", children: [
      showBackButton && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: handleBack, "aria-label": "Go back", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "35", "data-source-line-end": "42", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronLeft", size: 24, "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "41", "data-source-line-end": "41" }) }),
      title ? /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "46", "data-source-line-end": "46", children: title }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "48", "data-source-line-end": "53", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "49", "data-source-line-end": "51", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Car", size: 20, color: "white", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "50", "data-source-line-end": "50" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-primary", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "52", "data-source-line-end": "52", children: "Bossie Ride" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "57", "data-source-line-end": "73", children: [
      showNotifications && /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "relative", "aria-label": "Notifications", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "59", "data-source-line-end": "69", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Bell", size: 20, "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "60", "data-source-line-end": "60" }),
        notificationCount > 0 && /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "62", "data-source-line-end": "67", children: notificationCount > 9 ? "9+" : notificationCount })
      ] }),
      /* @__PURE__ */ jsx(UserMenu, { "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "72", "data-source-line-end": "72" })
    ] })
  ] }) });
}
export {
  AppHeader as A,
  Badge as B,
  SafeIcon as S,
  Button as a,
  Avatar as b,
  AvatarImage as c,
  AvatarFallback as d
};
