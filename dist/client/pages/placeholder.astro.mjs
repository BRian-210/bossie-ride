import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.D-nZ0uYi.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { renderers } from "../renderers.mjs";
const $$Placeholder = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Page Under Construction - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/placeholder.astro" data-source-line-start="8" data-source-line-end="41" class="min-h-screen flex items-center justify-center bg-muted/30 p-4">
    ${renderComponent($$result2, "Card", Card, { class: "max-w-md w-full" }, { default: ($$result3) => renderTemplate`
      ${renderComponent($$result3, "CardHeader", CardHeader, { class: "text-center" }, { default: ($$result4) => renderTemplate`
        <div data-source-file="src/pages/placeholder.astro" data-source-line-start="11" data-source-line-end="26" class="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
            <path data-source-file="src/pages/placeholder.astro" data-source-line-start="24" data-source-line-end="24" d="M12 2v20M2 12h20"></path>
          </svg>
        </div>
        ${renderComponent($$result4, "CardTitle", CardTitle, { class: "text-2xl" }, { default: ($$result5) => renderTemplate`Page Under Construction` })}
        ${renderComponent($$result4, "CardDescription", CardDescription, { class: "text-base mt-2" }, { default: ($$result5) => renderTemplate`
          This page is currently being built. Please check back soon!
        ` })}
      ` })}
      ${renderComponent($$result3, "CardContent", CardContent, { class: "text-center" }, { default: ($$result4) => renderTemplate`
        <a href="./ride-request.html" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
          Return to Home
        </a>
      ` })}
    ` })}
  </div>
` })}`, "/home/rayan/bossie-ride/src/pages/placeholder.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/placeholder.astro";
const $$url = "/placeholder.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Placeholder,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
