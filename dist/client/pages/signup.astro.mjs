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
function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const returnTo = useMemo(() => {
    if (typeof window === "undefined") return "ride-request";
    const params = new URLSearchParams(window.location.search);
    return params.get("returnTo") || "ride-request";
  }, []);
  const canSubmit = fullName.trim().length > 1 && password.length >= 6 && (email.trim().length > 0 && isValidEmail(email.trim()) || phone.trim().length > 0 && isValidPhone(phone.trim()));
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!canSubmit) {
      setError("Please fill in your name, a valid email/phone, and a password (6+ chars).");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("./api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim() ? email.trim() : void 0,
          phone: phone.trim() ? phone.trim() : void 0,
          password
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || `Sign up failed (${res.status})`);
      }
      setAuthToken(data.token);
      await notify({
        title: "Account created",
        message: "You can now request rides with Bossie Ride.",
        level: "success",
        useBrowserNotification: true
      });
      if (typeof window !== "undefined") window.location.href = `./${returnTo}`;
    } catch (e) {
      setError(e?.message || "Sign up failed");
      await notify({
        title: "Sign up failed",
        message: e?.message || "Try again.",
        level: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "82", "data-source-line-end": "175", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "83", "data-source-line-end": "174", children: [
    /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "84", "data-source-line-end": "87", children: [
      /* @__PURE__ */ jsx(CardTitle, { "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "85", "data-source-line-end": "85", children: "Create your account" }),
      /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: "Sign up to request rides, track trips, and manage payments." })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "88", "data-source-line-end": "173", children: [
      /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "89", "data-source-line-end": "165", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "90", "data-source-line-end": "102", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "91", "data-source-line-end": "91", children: "Full name" }),
          /* @__PURE__ */ jsx(Input, { id: "fullName", value: fullName, onChange: (e) => {
            setFullName(e.target.value);
            setError("");
          }, placeholder: "Jane Doe", autoComplete: "name", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "92", "data-source-line-end": "101" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "104", "data-source-line-end": "117", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "105", "data-source-line-end": "105", children: "Email (optional)" }),
          /* @__PURE__ */ jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => {
            setEmail(e.target.value);
            setError("");
          }, placeholder: "jane.doe@email.com", autoComplete: "email", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "106", "data-source-line-end": "116" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "119", "data-source-line-end": "133", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "phone", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "120", "data-source-line-end": "120", children: "Phone (optional)" }),
          /* @__PURE__ */ jsx(Input, { id: "phone", type: "tel", value: phone, onChange: (e) => {
            setPhone(e.target.value);
            setError("");
          }, placeholder: "+254700112233", autoComplete: "tel", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "121", "data-source-line-end": "131" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "132", "data-source-line-end": "132", children: "Provide either email or phone (or both)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "135", "data-source-line-end": "148", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "136", "data-source-line-end": "136", children: "Password" }),
          /* @__PURE__ */ jsx(Input, { id: "password", type: "password", value: password, onChange: (e) => {
            setPassword(e.target.value);
            setError("");
          }, placeholder: "At least 6 characters", autoComplete: "new-password", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "137", "data-source-line-end": "147" })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "150", "data-source-line-end": "150", children: error }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", size: "lg", disabled: !canSubmit || isSubmitting, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "152", "data-source-line-end": "164", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "155", "data-source-line-end": "155" }),
          "Creating account..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "UserPlus", size: 18, className: "mr-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "160", "data-source-line-end": "160" }),
          "Sign up"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-muted-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "167", "data-source-line-end": "172", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsx("a", { className: "text-primary font-medium hover:underline", href: `./login?returnTo=${encodeURIComponent(returnTo)}`, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "169", "data-source-line-end": "171", children: "Log in" })
      ] })
    ] })
  ] }) });
}
const $$Signup = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Sign Up - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Sign Up", showNotifications: false })}

  ${maybeRenderHead()}<main data-source-file="src/pages/signup.astro" data-source-line-start="10" data-source-line-end="12" class="pb-12">
    ${renderComponent($$result2, "SignupForm", SignupForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/SignupForm.tsx", "client:component-export": "default" })}
  </main>
` })}`, "/home/rayan/bossie-ride/src/pages/signup.astro", void 0);
const $$file = "/home/rayan/bossie-ride/src/pages/signup.astro";
const $$url = "/signup.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
