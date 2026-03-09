import { e as createComponent, f as createAstro, h as addAttribute, p as renderHead, q as renderSlot, k as renderComponent, r as renderTemplate } from "./astro/server.G4c5_9v2.js";
import "piccolore";
import { jsx } from "react/jsx-runtime";
import { Toaster } from "sonner";
/* empty css                               */
function AppToaster() {
  return /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-right", "data-source-file": "src/components/common/AppToaster.tsx", "data-source-line-start": "6", "data-source-line-end": "6" });
}
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$BaseLayout;
  const { title = "Project", description = "Built with Astro" } = Astro.props;
  return renderTemplate`<html data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="13" data-source-line-end="24" lang="en">
  <head data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="14" data-source-line-end="19">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"${addAttribute(description, "content")}>
    <title data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="18" data-source-line-end="18">${title}</title>
  ${renderHead()}</head>
  <body data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="20" data-source-line-end="23">
    ${renderSlot($$result, $$slots.default)}
    ${renderComponent($$result, "AppToaster", AppToaster, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/AppToaster", "client:component-export": "default" })}
  </body></html>`;
}, "/home/rayan/bossie-ride/src/layouts/BaseLayout.astro", void 0);
export {
  $$BaseLayout as $
};
