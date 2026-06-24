<<<<<<< HEAD
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { s as setAuthToken, n as notify, $ as $$BaseLayout } from "../BaseLayout.DdVmMhb3.js";
import { a as Button, S as SafeIcon, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { L as Label } from "../label.Da--91Bw.js";
import { renderers } from "../renderers.mjs";
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
      setError("Please enter your email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedId)) {
      setError("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: trimmedId,
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
  return /* @__PURE__ */ jsx("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "84", "data-source-line-end": "266", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-card border-amber-200/40", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "85", "data-source-line-end": "265", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "space-y-1", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "86", "data-source-line-end": "91", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-center", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "87", "data-source-line-end": "87", children: "Welcome back" }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-center", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "88", "data-source-line-end": "90", children: "Log in to request rides, track trips, and pay easily with M-Pesa" })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "93", "data-source-line-end": "264", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "95", "data-source-line-end": "160", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "96", "data-source-line-end": "105", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "97", "data-source-line-end": "99", children: /* @__PURE__ */ jsx("span", { className: "w-full border-t", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "98", "data-source-line-end": "98" }) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-xs uppercase", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "100", "data-source-line-end": "104", children: /* @__PURE__ */ jsx("span", { className: "bg-background px-2 text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "101", "data-source-line-end": "103", children: "Continue with" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "107", "data-source-line-end": "148", children: [
          /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", className: "w-full", onClick: () => window.location.href = "/api/auth/google", disabled: isSubmitting, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "108", "data-source-line-end": "134", children: [
            /* @__PURE__ */ jsxs("svg", { className: "mr-2 h-4 w-4", viewBox: "0 0 24 24", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "115", "data-source-line-end": "132", children: [
              /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "116", "data-source-line-end": "119" }),
              /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "120", "data-source-line-end": "123" }),
              /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "124", "data-source-line-end": "127" }),
              /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "128", "data-source-line-end": "131" })
            ] }),
            "Google"
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", className: "w-full", onClick: () => window.location.href = "/api/auth/apple", disabled: isSubmitting, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "136", "data-source-line-end": "147", children: [
            /* @__PURE__ */ jsx("svg", { className: "mr-2 h-4 w-4", viewBox: "0 0 24 24", fill: "currentColor", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "143", "data-source-line-end": "145", children: /* @__PURE__ */ jsx("path", { d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "144", "data-source-line-end": "144" }) }),
            "Apple"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "150", "data-source-line-end": "159", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "151", "data-source-line-end": "153", children: /* @__PURE__ */ jsx("span", { className: "w-full border-t", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "152", "data-source-line-end": "152" }) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-xs uppercase", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "154", "data-source-line-end": "158", children: /* @__PURE__ */ jsx("span", { className: "bg-background px-2 text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "155", "data-source-line-end": "157", children: "Or continue with email" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "space-y-6", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "162", "data-source-line-end": "253", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "164", "data-source-line-end": "181", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "identifier", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "165", "data-source-line-end": "165", children: "Email Address" }),
          /* @__PURE__ */ jsx(Input, { id: "identifier", type: "email", value: identifier, onChange: (e) => {
            setIdentifier(e.target.value);
            setError("");
          }, placeholder: "@example.com", autoComplete: "email", className: "pr-10", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "166", "data-source-line-end": "177" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "178", "data-source-line-end": "180", children: "Enter your email address" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "184", "data-source-line-end": "215", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "185", "data-source-line-end": "193", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "186", "data-source-line-end": "186", children: "Password" }),
            /* @__PURE__ */ jsx("a", { href: "./forgot-password", className: "text-xs text-amber-700 hover:text-amber-800 hover:underline", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "187", "data-source-line-end": "192", children: "Forgot password?" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "194", "data-source-line-end": "214", children: [
            /* @__PURE__ */ jsx(Input, { id: "password", type: showPassword ? "text" : "password", value: password, onChange: (e) => {
              setPassword(e.target.value);
              setError("");
            }, placeholder: "••••••••", autoComplete: "current-password", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "195", "data-source-line-end": "205" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", "aria-label": showPassword ? "Hide password" : "Show password", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "206", "data-source-line-end": "213", children: /* @__PURE__ */ jsx(SafeIcon, { name: showPassword ? "EyeOff" : "Eye", size: 18, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "212", "data-source-line-end": "212" }) })
          ] })
        ] }),
        error && /* @__PURE__ */ jsxs("div", { className: "bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "219", "data-source-line-end": "231", children: [
          error,
          error.toLowerCase().includes("not found") && /* @__PURE__ */ jsx("div", { className: "mt-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "222", "data-source-line-end": "229", children: /* @__PURE__ */ jsx("a", { href: `./signup?returnTo=${encodeURIComponent(returnTo)}`, className: "text-primary font-medium hover:underline", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "223", "data-source-line-end": "228", children: "Create a new account →" }) })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full bg-amber-600 hover:bg-amber-700 text-white", size: "lg", disabled: isSubmitting || !identifier.trim() || !password, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "235", "data-source-line-end": "252", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "243", "data-source-line-end": "243" }),
          "Signing in..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "LogIn", size: 18, className: "mr-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "248", "data-source-line-end": "248" }),
          "Log In"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center text-sm text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "255", "data-source-line-end": "263", children: [
        "New to Bossie Ride?",
        " ",
        /* @__PURE__ */ jsx("a", { href: `./signup?returnTo=${encodeURIComponent(returnTo)}`, className: "text-amber-700 font-medium hover:underline", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "257", "data-source-line-end": "262", children: "Create an account" })
=======
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.C9n97yqK.js";
import "piccolore";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, $ as $$BaseLayout } from "../card.DPXo1ZLP.js";
import { a as Button, S as SafeIcon, A as AppHeader } from "../AppHeader.h2OVAX_7.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { I as Input } from "../input.BkTF4_JO.js";
import { L as Label } from "../label.DDDXh6WB.js";
import { renderers } from "../renderers.mjs";
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function isValidPhone(value) {
  return /^[+]?[\d\s()-]{7,}$/.test(value);
}
function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState("identify");
  const [error, setError] = useState("");
  const returnTo = useMemo(() => {
    if (typeof window === "undefined") return "ride-request";
    const params = new URLSearchParams(window.location.search);
    return params.get("returnTo") || "profile";
  }, []);
  const isValid = isValidEmail(identifier) || isValidPhone(identifier);
  const handleRequestCode = (event) => {
    event.preventDefault();
    if (!isValid) {
      setError("Enter a valid email or phone number.");
      return;
    }
    setError("");
    setStep("verify");
  };
  const handleVerifyCode = (event) => {
    event.preventDefault();
    if (!/^\d{4,6}$/.test(code)) {
      setError("Enter the 4-6 digit code sent to you.");
      return;
    }
    if (typeof window !== "undefined") {
      sessionStorage.setItem("riderAuth", "true");
      sessionStorage.setItem("riderContact", identifier);
      sessionStorage.setItem("riderAuthMethod", isValidEmail(identifier) ? "email" : "phone");
      window.location.href = `./${returnTo}`;
    }
  };
  const handleAppleLogin = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("riderAuth", "true");
      sessionStorage.setItem("riderContact", "apple@signin");
      sessionStorage.setItem("riderAuthMethod", "apple");
      window.location.href = `./${returnTo}`;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "68", "data-source-line-end": "151", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-card", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "69", "data-source-line-end": "150", children: [
    /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "70", "data-source-line-end": "73", children: [
      /* @__PURE__ */ jsx(CardTitle, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "71", "data-source-line-end": "71", children: "Welcome back" }),
      /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "72", "data-source-line-end": "72", children: "Log in with your email or phone number to request a ride." })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "74", "data-source-line-end": "149", children: [
      step === "identify" ? /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleRequestCode, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "76", "data-source-line-end": "97", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "77", "data-source-line-end": "91", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "identifier", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "78", "data-source-line-end": "78", children: "Email or phone" }),
          /* @__PURE__ */ jsx(Input, { id: "identifier", type: "text", value: identifier, onChange: (event) => {
            setIdentifier(event.target.value);
            setError("");
          }, placeholder: "jane.doe@email.com or +254700112233", autoComplete: "username", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "79", "data-source-line-end": "89" }),
          error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "90", "data-source-line-end": "90", children: error })
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full", size: "lg", disabled: !identifier, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "93", "data-source-line-end": "96", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Send", size: 18, className: "mr-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "94", "data-source-line-end": "94" }),
          "Request Code"
        ] })
      ] }) : /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleVerifyCode, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "99", "data-source-line-end": "136", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "100", "data-source-line-end": "117", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "code", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "101", "data-source-line-end": "101", children: "Verification code" }),
          /* @__PURE__ */ jsx(Input, { id: "code", type: "text", value: code, onChange: (event) => {
            setCode(event.target.value);
            setError("");
          }, placeholder: "Enter code", autoComplete: "one-time-code", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "102", "data-source-line-end": "112" }),
          error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "113", "data-source-line-end": "113", children: error }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "114", "data-source-line-end": "116", children: [
            "Code sent to ",
            identifier,
            ". Use any 4-6 digits for this demo."
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full", size: "lg", disabled: !code, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "119", "data-source-line-end": "122", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle", size: 18, className: "mr-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "120", "data-source-line-end": "120" }),
          "Verify & Continue"
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", className: "w-full", onClick: () => {
          setStep("identify");
          setCode("");
          setError("");
        }, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "124", "data-source-line-end": "135", children: "Use a different email or phone" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 py-4", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "139", "data-source-line-end": "143", children: [
        /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-border", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "140", "data-source-line-end": "140" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "141", "data-source-line-end": "141", children: "or" }),
        /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-border", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "142", "data-source-line-end": "142" })
      ] }),
      /* @__PURE__ */ jsxs(Button, { type: "button", variant: "secondary", className: "w-full", size: "lg", onClick: handleAppleLogin, "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "145", "data-source-line-end": "148", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Apple", size: 18, className: "mr-2", "data-source-file": "src/components/auth/LoginForm.tsx", "data-source-line-start": "146", "data-source-line-end": "146" }),
        "Continue with Apple"
>>>>>>> e4f2f6c (git  commit -m "feat: add dist/client files")
      ] })
    ] })
  ] }) });
}
<<<<<<< HEAD
const $$Login = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Log In - Bossie Ride", description: "Sign in with Google, Apple, phone number, or email to request rides in Nairobi and beyond.", theme: "dark" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/login.astro" data-source-line-start="12" data-source-line-end="76" class="min-h-dvh bg-background text-foreground flex flex-col">
    ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Log In", showNotifications: false })}

    <main data-source-file="src/pages/login.astro" data-source-line-start="15" data-source-line-end="75" class="flex-1 flex items-center justify-center px-4 py-12">
      <div data-source-file="src/pages/login.astro" data-source-line-start="16" data-source-line-end="74" class="w-full max-w-md">
        <div data-source-file="src/pages/login.astro" data-source-line-start="17" data-source-line-end="73" class="bg-card rounded-3xl shadow-card border border-border overflow-hidden">
          <div data-source-file="src/pages/login.astro" data-source-line-start="18" data-source-line-end="72" class="p-8 md:p-10 space-y-8">
            <div data-source-file="src/pages/login.astro" data-source-line-start="19" data-source-line-end="26" class="text-center space-y-2">
              <h1 data-source-file="src/pages/login.astro" data-source-line-start="20" data-source-line-end="22" class="text-3xl font-bold tracking-tight text-foreground">
                Welcome back to Bossie Ride
              </h1>
              <p data-source-file="src/pages/login.astro" data-source-line-start="23" data-source-line-end="25" class="text-muted-foreground">
                Sign in to request rides, view history & pay with M-Pesa
              </p>
            </div>

            <!-- Social & Phone Login Buttons -->
            <div data-source-file="src/pages/login.astro" data-source-line-start="29" data-source-line-end="54" class="space-y-4">
              <!-- Google Sign In -->
              <button data-source-file="src/pages/login.astro" data-source-line-start="31" data-source-line-end="37" type="button" class="w-full flex items-center justify-center gap-3 rounded-xl border border-border bg-white py-3.5 text-sm font-medium hover:bg-muted transition-colors shadow-sm">
                <svg data-source-file="src/pages/login.astro" data-source-line-start="35" data-source-line-end="35" class="h-5 w-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.84c-.25 1.31-.98 2.42-2.07 3.16v2.63h3.35c1.96-1.81 3.09-4.47 3.09-7.25z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-1.01 7.28-2.73l-3.35-2.63c-1.01.68-2.29 1.08-3.93 1.08-3.02 0-5.58-2.04-6.49-4.79H.96v2.67C2.77 20.39 6.62 23 12 23z"></path><path fill="#FBBC05" d="M5.51 14.21c-.23-.68-.36-1.41-.36-2.21s.13-1.53.36-2.21V7.34H.96C.35 8.85 0 10.39 0 12s.35 3.15.96 4.66l4.55-2.45z"></path><path fill="#EA4335" d="M12 4.98c1.64 0 3.11.56 4.27 1.66l3.19-3.19C17.46 1.01 14.97 0 12 0 6.62 0 2.77 2.61.96 6.34l4.55 2.45C6.42 6.02 8.98 4.98 12 4.98z"></path></svg>
                Continue with Google
              </button>

              <!-- Apple Sign In (show on iOS or always with fallback) -->
              <button data-source-file="src/pages/login.astro" data-source-line-start="40" data-source-line-end="46" type="button" class="w-full flex items-center justify-center gap-3 rounded-xl border border-border bg-white py-3.5 text-sm font-medium hover:bg-muted transition-colors shadow-sm">
                <svg data-source-file="src/pages/login.astro" data-source-line-start="44" data-source-line-end="44" class="h-5 w-5" viewBox="0 0 24 24" fill="black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L13.5 9.09l1.41 1.41-3.5 3.5-1.41-1.41 3.5-3.5-1.41-1.41 3.09-3.09c.39-.39 1.03-.39 1.42 0l2.12 2.12c.39.39.39 1.03 0 1.42z"></path></svg>
                Continue with Apple
              </button>
              <button data-source-file="src/pages/login.astro" data-source-line-start="47" data-source-line-end="53" type="button" class="w-full flex items-center justify-center gap-3 rounded-xl border border-border bg-white py-3.5 text-sm font-medium hover:bg-muted transition-colors shadow-sm">
                <span data-source-file="src/pages/login.astro" data-source-line-start="51" data-source-line-end="51" class="text-xl">📱</span>
                Continue with Phone Number
              </button>
            </div>

            <div data-source-file="src/pages/login.astro" data-source-line-start="56" data-source-line-end="63" class="relative my-6">
              <div data-source-file="src/pages/login.astro" data-source-line-start="57" data-source-line-end="59" class="absolute inset-0 flex items-center">
                <div data-source-file="src/pages/login.astro" data-source-line-start="58" data-source-line-end="58" class="w-full border-t border-border"></div>
              </div>
              <div data-source-file="src/pages/login.astro" data-source-line-start="60" data-source-line-end="62" class="relative flex justify-center text-xs uppercase">
                <span data-source-file="src/pages/login.astro" data-source-line-start="61" data-source-line-end="61" class="bg-white/90 px-4 text-muted-foreground">Or sign in with email</span>
              </div>
            </div>

            <!-- Your existing email/password form -->
            ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/LoginForm.tsx", "client:component-export": "default" })}
            <div data-source-file="src/pages/login.astro" data-source-line-start="67" data-source-line-end="71" class="space-y-4 text-center text-sm">
                <p data-source-file="src/pages/login.astro" data-source-line-start="68" data-source-line-end="70" class="mt-8 text-center text-xs text-muted-foreground">
                 By continuing, you agree to our <a data-source-file="src/pages/login.astro" data-source-line-start="69" data-source-line-end="69" href="./terms" class="hover:underline">Terms</a> and <a href="./privacy" class="hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
=======
const $$Login = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Log In - Bossie Ride" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Log In", showNotifications: false })}

  ${maybeRenderHead()}<main data-source-file="src/pages/login.astro" data-source-line-start="10" data-source-line-end="12" class="pb-12">
    ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/LoginForm.tsx", "client:component-export": "default" })}
  </main>
>>>>>>> e4f2f6c (git  commit -m "feat: add dist/client files")
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
