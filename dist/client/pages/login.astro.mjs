import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.D-nZ0uYi.js";
import { S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { L as Label } from "../label.Da--91Bw.js";
import { n as notify } from "../notify.5u8Vcg9W.js";
import { s as setAuthToken } from "../authClient.CZydr8qd.js";
import { renderers } from "../renderers.mjs";
function normalizePhone(value) {
  let cleaned = value.replace(/[\s()-]/g, "");
  if (cleaned.startsWith("0")) {
    cleaned = "+254" + cleaned.slice(1);
  } else if (!cleaned.startsWith("+")) {
    cleaned = "+254" + cleaned;
  }
  return cleaned;
}
function looksLikePhone(value) {
  const cleaned = value.replace(/[\s()-]/g, "");
  return /^(\+254|0)?[17]\d{8}$/.test(cleaned);
}
function isValidIdentifier(value) {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || looksLikePhone(trimmed);
}
function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const returnTo = useMemo(() => {
    if (typeof window === "undefined") return "ride-request";
    const params = new URLSearchParams(window.location.search);
    return params.get("returnTo") || "ride-request";
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const trimmedId = identifier.trim();
    if (!trimmedId) {
      setError("Please enter your email or phone number");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    if (!isValidIdentifier(trimmedId)) {
      setError("Please enter a valid email or Kenyan phone number");
      return;
    }
    setIsSubmitting(true);
    try {
      let payloadIdentifier = trimmedId;
      if (looksLikePhone(trimmedId)) {
        payloadIdentifier = normalizePhone(trimmedId);
      }
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          identifier: payloadIdentifier,
          password
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        let msg = data?.error || `Login failed (${res.status})`;
        if (msg.toLowerCase().includes("not found") || msg.toLowerCase().includes("invalid")) {
          msg = "Incorrect email/phone or password. Try again or sign up.";
        }
        throw new Error(msg);
      }
      setAuthToken(data.token);
      await notify({
        title: "Welcome back!",
        message: "You are now signed in to Bossie Ride.",
        level: "success",
        useBrowserNotification: true
      });
      window.location.href = `./${returnTo}`;
    } catch (err) {
      const msg = err?.message || "Login failed. Please try again.";
      setError(msg);
      notify({
        title: "Login Failed",
        message: msg,
        level: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "113", "data-source-line-end": "234", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-card border-amber-200/40", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "114", "data-source-line-end": "233", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "space-y-1", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "115", "data-source-line-end": "120", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-center", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "116", "data-source-line-end": "116", children: "Welcome back" }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-center", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "117", "data-source-line-end": "119", children: "Log in to request rides, track trips, and pay easily with M-Pesa" })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "122", "data-source-line-end": "232", children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "space-y-6", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "123", "data-source-line-end": "221", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "125", "data-source-line-end": "149", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "identifier", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "126", "data-source-line-end": "126", children: "Email or Phone Number" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "127", "data-source-line-end": "145", children: [
            /* @__PURE__ */ jsx(Input, { id: "identifier", type: "text", value: identifier, onChange: (e) => {
              setIdentifier(e.target.value);
              setError("");
            }, placeholder: "+254 712 345 678 or @example.com", autoComplete: "username webauthn", className: "pr-10", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "128", "data-source-line-end": "139" }),
            looksLikePhone(identifier) && /* @__PURE__ */ jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "141", "data-source-line-end": "143", children: "+254" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "146", "data-source-line-end": "148", children: "Use your phone number (recommended) or email" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "152", "data-source-line-end": "183", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "153", "data-source-line-end": "161", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "154", "data-source-line-end": "154", children: "Password" }),
            /* @__PURE__ */ jsx("a", { href: "./forgot-password", className: "text-xs text-amber-700 hover:text-amber-800 hover:underline", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "155", "data-source-line-end": "160", children: "Forgot password?" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "162", "data-source-line-end": "182", children: [
            /* @__PURE__ */ jsx(Input, { id: "password", type: showPassword ? "text" : "password", value: password, onChange: (e) => {
              setPassword(e.target.value);
              setError("");
            }, placeholder: "••••••••", autoComplete: "current-password", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "163", "data-source-line-end": "173" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", "aria-label": showPassword ? "Hide password" : "Show password", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "174", "data-source-line-end": "181", children: /* @__PURE__ */ jsx(SafeIcon, { name: showPassword ? "EyeOff" : "Eye", size: 18, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "180", "data-source-line-end": "180" }) })
          ] })
        ] }),
        error && /* @__PURE__ */ jsxs("div", { className: "bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "187", "data-source-line-end": "199", children: [
          error,
          error.toLowerCase().includes("not found") && /* @__PURE__ */ jsx("div", { className: "mt-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "190", "data-source-line-end": "197", children: /* @__PURE__ */ jsx("a", { href: `./signup?returnTo=${encodeURIComponent(returnTo)}`, className: "text-primary font-medium hover:underline", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "191", "data-source-line-end": "196", children: "Create a new account →" }) })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full bg-amber-600 hover:bg-amber-700 text-white", size: "lg", disabled: isSubmitting || !identifier.trim() || !password, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "203", "data-source-line-end": "220", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "211", "data-source-line-end": "211" }),
          "Signing in..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "LogIn", size: 18, className: "mr-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "216", "data-source-line-end": "216" }),
          "Log In"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center text-sm text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "223", "data-source-line-end": "231", children: [
        "New to Bossie Ride?",
        " ",
        /* @__PURE__ */ jsx("a", { href: `./signup?returnTo=${encodeURIComponent(returnTo)}`, className: "text-amber-700 font-medium hover:underline", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "225", "data-source-line-end": "230", children: "Create an account" })
      ] })
    ] })
  ] }) });
}
const $$Login = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Log In - Bossie Ride", description: "Sign in with Google, Apple, phone number, or email to request rides in Nairobi and beyond.", theme: "dark" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/login.astro" data-source-line-start="12" data-source-line-end="79" class="min-h-dvh bg-background text-foreground flex flex-col">
    ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Log In", showNotifications: false })}

    <main data-source-file="src/pages/login.astro" data-source-line-start="15" data-source-line-end="78" class="flex-1 flex items-center justify-center px-4 py-12">
      <div data-source-file="src/pages/login.astro" data-source-line-start="16" data-source-line-end="77" class="w-full max-w-md">
        <div data-source-file="src/pages/login.astro" data-source-line-start="17" data-source-line-end="76" class="bg-card rounded-3xl shadow-card border border-border overflow-hidden">
          <div data-source-file="src/pages/login.astro" data-source-line-start="18" data-source-line-end="75" class="p-8 md:p-10 space-y-8">
            <div data-source-file="src/pages/login.astro" data-source-line-start="19" data-source-line-end="26" class="text-center space-y-2">
              <h1 data-source-file="src/pages/login.astro" data-source-line-start="20" data-source-line-end="22" class="text-3xl font-bold tracking-tight text-foreground">
                Welcome back to Bossie Ride
              </h1>
              <p data-source-file="src/pages/login.astro" data-source-line-start="23" data-source-line-end="25" class="text-muted-foreground">
                Sign in to request rides, view history & pay with M-Pesa
              </p>
            </div>

            <!-- Social & Phone Login Buttons -->
            <div data-source-file="src/pages/login.astro" data-source-line-start="29" data-source-line-end="57" class="space-y-4">
              <!-- Google Sign In -->
              <button data-source-file="src/pages/login.astro" data-source-line-start="31" data-source-line-end="38" type="button" class="w-full flex items-center justify-center gap-3 rounded-xl border border-border bg-white py-3.5 text-sm font-medium hover:bg-muted transition-colors shadow-sm"${addAttribute(() => {
}, "onClick")}>
                <svg data-source-file="src/pages/login.astro" data-source-line-start="36" data-source-line-end="36" class="h-5 w-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.84c-.25 1.31-.98 2.42-2.07 3.16v2.63h3.35c1.96-1.81 3.09-4.47 3.09-7.25z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-1.01 7.28-2.73l-3.35-2.63c-1.01.68-2.29 1.08-3.93 1.08-3.02 0-5.58-2.04-6.49-4.79H.96v2.67C2.77 20.39 6.62 23 12 23z"></path><path fill="#FBBC05" d="M5.51 14.21c-.23-.68-.36-1.41-.36-2.21s.13-1.53.36-2.21V7.34H.96C.35 8.85 0 10.39 0 12s.35 3.15.96 4.66l4.55-2.45z"></path><path fill="#EA4335" d="M12 4.98c1.64 0 3.11.56 4.27 1.66l3.19-3.19C17.46 1.01 14.97 0 12 0 6.62 0 2.77 2.61.96 6.34l4.55 2.45C6.42 6.02 8.98 4.98 12 4.98z"></path></svg>
                Continue with Google
              </button>

              <!-- Apple Sign In (show on iOS or always with fallback) -->
              <button data-source-file="src/pages/login.astro" data-source-line-start="41" data-source-line-end="48" type="button" class="w-full flex items-center justify-center gap-3 rounded-xl border border-border bg-white py-3.5 text-sm font-medium hover:bg-muted transition-colors shadow-sm"${addAttribute(() => {
}, "onClick")}>
                <svg data-source-file="src/pages/login.astro" data-source-line-start="46" data-source-line-end="46" class="h-5 w-5" viewBox="0 0 24 24" fill="black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L13.5 9.09l1.41 1.41-3.5 3.5-1.41-1.41 3.5-3.5-1.41-1.41 3.09-3.09c.39-.39 1.03-.39 1.42 0l2.12 2.12c.39.39.39 1.03 0 1.42z"></path></svg>
                Continue with Apple
              </button>
              <button data-source-file="src/pages/login.astro" data-source-line-start="49" data-source-line-end="56" type="button" class="w-full flex items-center justify-center gap-3 rounded-xl border border-border bg-white py-3.5 text-sm font-medium hover:bg-muted transition-colors shadow-sm"${addAttribute(() => {
}, "onClick")}>
                <span data-source-file="src/pages/login.astro" data-source-line-start="54" data-source-line-end="54" class="text-xl">📱</span>
                Continue with Phone Number
              </button>
            </div>

            <div data-source-file="src/pages/login.astro" data-source-line-start="59" data-source-line-end="66" class="relative my-6">
              <div data-source-file="src/pages/login.astro" data-source-line-start="60" data-source-line-end="62" class="absolute inset-0 flex items-center">
                <div data-source-file="src/pages/login.astro" data-source-line-start="61" data-source-line-end="61" class="w-full border-t border-border"></div>
              </div>
              <div data-source-file="src/pages/login.astro" data-source-line-start="63" data-source-line-end="65" class="relative flex justify-center text-xs uppercase">
                <span data-source-file="src/pages/login.astro" data-source-line-start="64" data-source-line-end="64" class="bg-white/90 px-4 text-muted-foreground">Or sign in with email</span>
              </div>
            </div>

            <!-- Your existing email/password form -->
            ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/LoginForm.tsx", "client:component-export": "default" })}
            <div data-source-file="src/pages/login.astro" data-source-line-start="70" data-source-line-end="74" class="space-y-4 text-center text-sm">
                <p data-source-file="src/pages/login.astro" data-source-line-start="71" data-source-line-end="73" class="mt-8 text-center text-xs text-muted-foreground">
                 By continuing, you agree to our <a data-source-file="src/pages/login.astro" data-source-line-start="72" data-source-line-end="72" href="./terms" class="hover:underline">Terms</a> and <a href="./privacy" class="hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
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
