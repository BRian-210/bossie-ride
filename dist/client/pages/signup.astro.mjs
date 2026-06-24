import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { s as setAuthToken, n as notify, $ as $$BaseLayout } from "../BaseLayout.CtgI0PpG.js";
import { a as Button, S as SafeIcon, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { L as Label } from "../label.Da--91Bw.js";
import { renderers } from "../renderers.mjs";
function isValidEmail(value) {
  return value.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const returnTo = useMemo(() => {
    if (typeof window === "undefined") return "ride-request";
    const params = new URLSearchParams(window.location.search);
    return params.get("returnTo") || "ride-request";
  }, []);
  const validateForm = () => {
    const errors = {};
    if (fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) {
      setError("Please correct the errors above.");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        fullName: fullName.trim(),
        email: email.trim(),
        password
      };
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || `Signup failed (${res.status})`);
      }
      setAuthToken(data.token);
      await notify({
        title: "Account Created!",
        message: "Welcome to Bossie Ride — you can now request rides.",
        level: "success",
        useBrowserNotification: true
      });
      window.location.href = `./${returnTo}`;
    } catch (err) {
      const msg = err?.message || "Something went wrong. Please try again.";
      setError(msg);
      notify({
        title: "Signup Failed",
        message: msg,
        level: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "101", "data-source-line-end": "284", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-card border-amber-200/40", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "102", "data-source-line-end": "283", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "space-y-1", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "103", "data-source-line-end": "108", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-center", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "104", "data-source-line-end": "104", children: "Create Account" }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-center", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "105", "data-source-line-end": "107", children: "Join Bossie Ride and start moving around Nairobi easily" })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "110", "data-source-line-end": "282", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "112", "data-source-line-end": "177", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "113", "data-source-line-end": "122", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "114", "data-source-line-end": "116", children: /* @__PURE__ */ jsx("span", { className: "w-full border-t", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "115", "data-source-line-end": "115" }) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-xs uppercase", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "117", "data-source-line-end": "121", children: /* @__PURE__ */ jsx("span", { className: "bg-background px-2 text-muted-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "118", "data-source-line-end": "120", children: "Continue with" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "124", "data-source-line-end": "165", children: [
          /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", className: "w-full", onClick: () => window.location.href = "/api/auth/google", disabled: isSubmitting, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "125", "data-source-line-end": "151", children: [
            /* @__PURE__ */ jsxs("svg", { className: "mr-2 h-4 w-4", viewBox: "0 0 24 24", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "132", "data-source-line-end": "149", children: [
              /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "133", "data-source-line-end": "136" }),
              /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "137", "data-source-line-end": "140" }),
              /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "141", "data-source-line-end": "144" }),
              /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "145", "data-source-line-end": "148" })
            ] }),
            "Google"
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", className: "w-full", onClick: () => window.location.href = "/api/auth/apple", disabled: isSubmitting, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "153", "data-source-line-end": "164", children: [
            /* @__PURE__ */ jsx("svg", { className: "mr-2 h-4 w-4", viewBox: "0 0 24 24", fill: "currentColor", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "160", "data-source-line-end": "162", children: /* @__PURE__ */ jsx("path", { d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "161", "data-source-line-end": "161" }) }),
            "Apple"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "167", "data-source-line-end": "176", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "168", "data-source-line-end": "170", children: /* @__PURE__ */ jsx("span", { className: "w-full border-t", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "169", "data-source-line-end": "169" }) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-xs uppercase", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "171", "data-source-line-end": "175", children: /* @__PURE__ */ jsx("span", { className: "bg-background px-2 text-muted-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "172", "data-source-line-end": "174", children: "Or continue with email" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "179", "data-source-line-end": "271", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "181", "data-source-line-end": "197", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "182", "data-source-line-end": "182", children: "Full Name" }),
          /* @__PURE__ */ jsx(Input, { id: "fullName", value: fullName, onChange: (e) => {
            setFullName(e.target.value);
            setFieldErrors((prev) => ({
              ...prev,
              fullName: ""
            }));
          }, placeholder: "Jane Kamau", autoComplete: "name", className: fieldErrors.fullName ? "border-destructive" : "", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "183", "data-source-line-end": "193" }),
          fieldErrors.fullName && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "195", "data-source-line-end": "195", children: fieldErrors.fullName })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "200", "data-source-line-end": "217", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "201", "data-source-line-end": "201", children: "Email Address" }),
          /* @__PURE__ */ jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => {
            setEmail(e.target.value);
            setFieldErrors((prev) => ({
              ...prev,
              email: ""
            }));
          }, placeholder: "@example.com", className: fieldErrors.email ? "border-destructive" : "", autoComplete: "email", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "202", "data-source-line-end": "213" }),
          fieldErrors.email && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "215", "data-source-line-end": "215", children: fieldErrors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "220", "data-source-line-end": "246", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "221", "data-source-line-end": "221", children: "Password" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "222", "data-source-line-end": "242", children: [
            /* @__PURE__ */ jsx(Input, { id: "password", type: showPassword ? "text" : "password", value: password, onChange: (e) => {
              setPassword(e.target.value);
              setFieldErrors((prev) => ({
                ...prev,
                password: ""
              }));
            }, placeholder: "At least 6 characters", autoComplete: "new-password", className: fieldErrors.password ? "border-destructive" : "", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "223", "data-source-line-end": "234" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "235", "data-source-line-end": "241", children: /* @__PURE__ */ jsx(SafeIcon, { name: showPassword ? "EyeOff" : "Eye", size: 18, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "240", "data-source-line-end": "240" }) })
          ] }),
          fieldErrors.password && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "244", "data-source-line-end": "244", children: fieldErrors.password })
        ] }),
        error && /* @__PURE__ */ jsx("div", { className: "bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "250", "data-source-line-end": "252", children: error }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full bg-amber-600 hover:bg-amber-700 text-white", size: "lg", disabled: isSubmitting, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "256", "data-source-line-end": "270", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "264", "data-source-line-end": "264" }),
          "Creating account..."
        ] }) : "Create Account" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center text-sm text-muted-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "273", "data-source-line-end": "281", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsx("a", { href: `./login?returnTo=${encodeURIComponent(returnTo)}`, className: "text-amber-700 font-medium hover:underline", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "275", "data-source-line-end": "280", children: "Log in" })
      ] })
    ] })
  ] }) });
}
const $$Signup = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Sign Up - Bossie Ride", description: "Create your Bossie Ride account with Google, Apple, phone number, or email. Start requesting rides in Nairobi today.", theme: "dark" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/signup.astro" data-source-line-start="12" data-source-line-end="39" class="min-h-dvh bg-background text-foreground flex flex-col">
    ${renderComponent($$result2, "AppHeader", AppHeader, { title: "Sign Up", showNotifications: false })}

    <main data-source-file="src/pages/signup.astro" data-source-line-start="15" data-source-line-end="38" class="flex-1 flex items-center justify-center px-4 py-10 md:py-16">
      <div data-source-file="src/pages/signup.astro" data-source-line-start="16" data-source-line-end="37" class="w-full max-w-md">
        <div data-source-file="src/pages/signup.astro" data-source-line-start="17" data-source-line-end="36" class="bg-card rounded-3xl shadow-card border border-border overflow-hidden">
          <div data-source-file="src/pages/signup.astro" data-source-line-start="18" data-source-line-end="35" class="p-7 md:p-10 space-y-8">
            <div data-source-file="src/pages/signup.astro" data-source-line-start="19" data-source-line-end="26" class="text-center space-y-2">
              <h1 data-source-file="src/pages/signup.astro" data-source-line-start="20" data-source-line-end="22" class="text-3xl md:text-3.5xl font-bold tracking-tight text-foreground">
                Join Bossie Ride
              </h1>
              <p data-source-file="src/pages/signup.astro" data-source-line-start="23" data-source-line-end="25" class="text-muted-foreground text-base">
                Quick & secure signup — start riding in minutes
              </p>
            </div>
            ${renderComponent($$result2, "SignupForm", SignupForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth/SignupForm.tsx", "client:component-export": "default" })}
            <div data-source-file="src/pages/signup.astro" data-source-line-start="28" data-source-line-end="34" class="text-center text-sm space-y-3 mt-6">
              <p data-source-file="src/pages/signup.astro" data-source-line-start="29" data-source-line-end="33" class="mt-8 text-center text-xs text-muted-foreground">
              By signing up, you agree to our 
               <a data-source-file="src/pages/signup.astro" data-source-line-start="31" data-source-line-end="31" href="./terms" class="hover:underline">Terms of Service</a> and 
                <a data-source-file="src/pages/signup.astro" data-source-line-start="32" data-source-line-end="32" href="./privacy" class="hover:underline">Privacy Policy</a>.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
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
