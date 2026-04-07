import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../astro/server.DvbP1VFY.js";
import "piccolore";
import { $ as $$BaseLayout } from "../BaseLayout.D-nZ0uYi.js";
import { S as SafeIcon, a as Button, A as AppHeader } from "../AppHeader.DiYVpvWN.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "../card.BA4JS6QT.js";
import { I as Input } from "../input.DrcO4c1k.js";
import { L as Label } from "../label.Da--91Bw.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "../tabs.Ll046Uyc.js";
import { n as notify } from "../notify.5u8Vcg9W.js";
import { s as setAuthToken } from "../authClient.CZydr8qd.js";
import { renderers } from "../renderers.mjs";
function isValidEmail(value) {
  return value.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
function isValidPhone(value) {
  const cleaned = value.replace(/[\s()-]/g, "");
  return cleaned === "" || /^(\+254|0)?[17]\d{8}$/.test(cleaned) && cleaned.length >= 9;
}
function SignupForm() {
  const [activeTab, setActiveTab] = useState("email");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    if (activeTab === "email") {
      if (!email.trim()) {
        errors.email = "Email is required when signing up with email";
      } else if (!isValidEmail(email)) {
        errors.email = "Please enter a valid email address";
      }
    } else {
      if (!phone.trim()) {
        errors.phone = "Phone number is required";
      } else if (!isValidPhone(phone)) {
        errors.phone = "Please enter a valid Kenyan phone number (e.g. 0712345678 or +254712345678)";
      }
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
        password
      };
      if (activeTab === "email") {
        payload.email = email.trim();
      } else {
        let normalizedPhone = phone.trim().replace(/[\s()-]/g, "");
        if (normalizedPhone.startsWith("0")) {
          normalizedPhone = "+254" + normalizedPhone.slice(1);
        } else if (!normalizedPhone.startsWith("+")) {
          normalizedPhone = "+254" + normalizedPhone;
        }
        payload.phone = normalizedPhone;
      }
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
  return /* @__PURE__ */ jsx("div", { className: "container max-w-md mx-auto px-4 py-8", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "128", "data-source-line-end": "277", children: /* @__PURE__ */ jsxs(Card, { className: "shadow-card border-amber-200/40", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "129", "data-source-line-end": "276", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "space-y-1", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "130", "data-source-line-end": "135", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-center", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "131", "data-source-line-end": "131", children: "Create Account" }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-center", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "132", "data-source-line-end": "134", children: "Join Bossie Ride and start moving around Nairobi easily" })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "137", "data-source-line-end": "275", children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "138", "data-source-line-end": "264", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "140", "data-source-line-end": "156", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "141", "data-source-line-end": "141", children: "Full Name" }),
          /* @__PURE__ */ jsx(Input, { id: "fullName", value: fullName, onChange: (e) => {
            setFullName(e.target.value);
            setFieldErrors((prev) => ({
              ...prev,
              fullName: ""
            }));
          }, placeholder: "Jane Kamau", autoComplete: "name", className: fieldErrors.fullName ? "border-destructive" : "", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "142", "data-source-line-end": "152" }),
          fieldErrors.fullName && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "154", "data-source-line-end": "154", children: fieldErrors.fullName })
        ] }),
        /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: (v) => setActiveTab(v), "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "159", "data-source-line-end": "210", children: [
          /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "160", "data-source-line-end": "163", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "phone", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "161", "data-source-line-end": "161", children: "Phone Number" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "email", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "162", "data-source-line-end": "162", children: "Email" })
          ] }),
          /* @__PURE__ */ jsxs(TabsContent, { value: "phone", className: "space-y-2 mt-4", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "165", "data-source-line-end": "190", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "166", "data-source-line-end": "166", children: "Phone Number" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "167", "data-source-line-end": "183", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "168", "data-source-line-end": "170", children: "+254" }),
              /* @__PURE__ */ jsx(Input, { id: "phone", type: "tel", value: phone, onChange: (e) => {
                setPhone(e.target.value);
                setFieldErrors((prev) => ({
                  ...prev,
                  phone: ""
                }));
              }, placeholder: "712 345 678", className: `pl-12 ${fieldErrors.phone ? "border-destructive" : ""}`, autoComplete: "tel", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "171", "data-source-line-end": "182" })
            ] }),
            fieldErrors.phone && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "185", "data-source-line-end": "185", children: fieldErrors.phone }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "187", "data-source-line-end": "189", children: "We'll verify your phone number later" })
          ] }),
          /* @__PURE__ */ jsxs(TabsContent, { value: "email", className: "space-y-2 mt-4", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "192", "data-source-line-end": "209", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "193", "data-source-line-end": "193", children: "Email Address" }),
            /* @__PURE__ */ jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => {
              setEmail(e.target.value);
              setFieldErrors((prev) => ({
                ...prev,
                email: ""
              }));
            }, placeholder: "@example.com", className: fieldErrors.email ? "border-destructive" : "", autoComplete: "email", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "194", "data-source-line-end": "205" }),
            fieldErrors.email && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "207", "data-source-line-end": "207", children: fieldErrors.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "213", "data-source-line-end": "239", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "214", "data-source-line-end": "214", children: "Password" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "215", "data-source-line-end": "235", children: [
            /* @__PURE__ */ jsx(Input, { id: "password", type: showPassword ? "text" : "password", value: password, onChange: (e) => {
              setPassword(e.target.value);
              setFieldErrors((prev) => ({
                ...prev,
                password: ""
              }));
            }, placeholder: "At least 6 characters", autoComplete: "new-password", className: fieldErrors.password ? "border-destructive" : "", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "216", "data-source-line-end": "227" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "228", "data-source-line-end": "234", children: /* @__PURE__ */ jsx(SafeIcon, { name: showPassword ? "EyeOff" : "Eye", size: 18, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "233", "data-source-line-end": "233" }) })
          ] }),
          fieldErrors.password && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "237", "data-source-line-end": "237", children: fieldErrors.password })
        ] }),
        error && /* @__PURE__ */ jsx("div", { className: "bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "243", "data-source-line-end": "245", children: error }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full bg-amber-600 hover:bg-amber-700 text-white", size: "lg", disabled: isSubmitting, "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "249", "data-source-line-end": "263", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "257", "data-source-line-end": "257" }),
          "Creating account..."
        ] }) : "Create Account" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center text-sm text-muted-foreground", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "266", "data-source-line-end": "274", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsx("a", { href: `./login?returnTo=${encodeURIComponent(returnTo)}`, className: "text-amber-700 font-medium hover:underline", "data-source-file": "src/components/auth/SignupForm.tsx", "data-source-line-start": "268", "data-source-line-end": "273", children: "Log in" })
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
