import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate } from "./astro/server.C9n97yqK.js";
import "piccolore";
import { clsx } from "clsx";
/* empty css                               */
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { twMerge } from "tailwind-merge";
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$BaseLayout;
  const { title = "Project", description = "Built with Astro" } = Astro.props;
  return renderTemplate`<html data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="11" data-source-line-end="21" lang="en">
  <head data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="12" data-source-line-end="17">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"${addAttribute(description, "content")}>
    <title data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="16" data-source-line-end="16">${title}</title>
  ${renderHead()}</head>
  <body data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="18" data-source-line-end="20">
    ${renderSlot($$result, $$slots.default)}
  </body></html>`;
}, "/home/rayan/bossie-ride/src/layouts/BaseLayout.astro", void 0);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Card = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("rounded-xl border bg-card text-card-foreground shadow", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "9", "data-source-line-end": "16" }));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "24", "data-source-line-end": "28" }));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("font-semibold leading-none tracking-tight", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "36", "data-source-line-end": "40" }));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "48", "data-source-line-end": "52" }));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "60", "data-source-line-end": "60" }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "68", "data-source-line-end": "72" }));
CardFooter.displayName = "CardFooter";
export {
  $$BaseLayout as $,
  Card as C,
  CardHeader as a,
  CardTitle as b,
  CardDescription as c,
  CardContent as d,
  cn as e
};
