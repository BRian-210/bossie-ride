import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.G4c5_9v2.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.6nv4a3hw.js";
import { a as Button, S as SafeIcon, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { L as Label } from "../label.Da--91Bw.js";
import { n as notify } from "../notify.5u8Vcg9W.js";
import { s as setAuthToken } from "../authClient.CZydr8qd.js";
import { renderers } from "../renderers.mjs";
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function isValidPhone(value) {
  return /^[+]?[\d\s()-]{7,}$/.test(value);
}
function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const returnTo = useMemo(() => {
    if (typeof window === "undefined") return "ride-request";
    const params = new URLSearchParams(window.location.search);
    return params.get("returnTo") || "profile";
  }, []);
  const isValid = isValidEmail(identifier) || isValidPhone(identifier);
  const handleLogin = async (event) => {
    event.preventDefault();
    if (!isValid) {
      setError("Enter a valid email or phone number.");
      return;
    }
    if (!password) {
      setError("Enter your password.");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("./api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          identifier: identifier.trim(),
          password
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || `Login failed (${res.status})`);
      }
      setAuthToken(data.token);
      await notify({
        title: "Welcome back",
        message: "You are signed in.",
        level: "success",
        useBrowserNotification: true
      });
      if (typeof window !== "undefined") window.location.href = `./${returnTo}`;
    } catch (e) {
      const msg = e?.message || "Login failed";
      setError(msg);
      await notify({
        title: "Login failed",
        message: msg,
        level: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "75", "data-source-line-end": "147", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "76", "data-source-line-end": "146", children: [
    /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "77", "data-source-line-end": "80", children: [
      /* @__PURE__ */ jsx(CardTitle, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "78", "data-source-line-end": "78", children: "Welcome back" }),
      /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "79", "data-source-line-end": "79", children: "Log in to request rides and view your profile." })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "81", "data-source-line-end": "145", children: [
      /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleLogin, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "82", "data-source-line-end": "137", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "83", "data-source-line-end": "96", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "identifier", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "84", "data-source-line-end": "84", children: "Email or phone" }),
          /* @__PURE__ */ jsx(Input, { id: "identifier", type: "text", value: identifier, onChange: (event) => {
            setIdentifier(event.target.value);
            setError("");
          }, placeholder: "jane.doe@email.com or +254700112233", autoComplete: "username", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "85", "data-source-line-end": "95" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "98", "data-source-line-end": "111", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "99", "data-source-line-end": "99", children: "Password" }),
          /* @__PURE__ */ jsx(Input, { id: "password", type: "password", value: password, onChange: (event) => {
            setPassword(event.target.value);
            setError("");
          }, placeholder: "Your password", autoComplete: "current-password", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "100", "data-source-line-end": "110" })
        ] }),
        error && /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "114", "data-source-line-end": "121", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "115", "data-source-line-end": "115", children: error }),
          error.toLowerCase().includes("sign up") && /* @__PURE__ */ jsx("a", { className: "text-sm font-medium text-primary hover:underline", href: `./signup?returnTo=${encodeURIComponent(returnTo)}`, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "117", "data-source-line-end": "119", children: "Create an account" })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", size: "lg", disabled: !identifier || !password || isSubmitting, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "124", "data-source-line-end": "136", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "127", "data-source-line-end": "127" }),
          "Signing in..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "LogIn", size: 18, className: "mr-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "132", "data-source-line-end": "132" }),
          "Log in"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "139", "data-source-line-end": "144", children: [
        "New here?",
        " ",
        /* @__PURE__ */ jsx("a", { className: "text-primary font-medium hover:underline", href: `./signup?returnTo=${encodeURIComponent(returnTo)}`, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "141", "data-source-line-end": "143", children: "Sign up" })
      ] })
    ] })
  ] }) });
}
const $$Login = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Log In - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Log In", showNotifications: false })}

  ${maybeRenderHead()}<main data-source-file="src/pages/login.astro" data-source-line-start="10" data-source-line-end="12" class="pb-12">
    ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/LoginForm.tsx", "client:component-export": "default" })}
  </main>
` })}`, "/home/rayan/bossie-ride/src/pages/login.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/login.astro";
const $$url = "/login.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
