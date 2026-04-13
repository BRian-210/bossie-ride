import { e as createComponent, f as createAstro, h as addAttribute, p as renderHead, q as renderSlot, k as renderComponent, v as renderScript, r as renderTemplate } from "./astro/server.DvbP1VFY.js";
import "piccolore";
import { jsx } from "react/jsx-runtime";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";
/* empty css                               */
function AppToaster() {
  return /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-right", "data-source-file": "src/components/common/AppToaster.tsx", "data-source-line-start": "6", "data-source-line-end": "6" });
}
const AUTH_TOKEN_KEY = "bossieRideAuthToken";
function getAuthToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}
function setAuthToken(token) {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}
function clearAuthToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
function withAuthHeaders(init) {
  const token = getAuthToken();
  const headers = new Headers(init?.headers || {});
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");
  return {
    ...init,
    headers
  };
}
async function fetchAuthedJson(input, init) {
  const res = await fetch(input, withAuthHeaders(init));
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const msg = data && (data.error || data.message) || `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data;
}
async function notify({
  title,
  message,
  level = "info",
  useBrowserNotification
}) {
  const description = message;
  if (level === "success") toast.success(title, {
    description
  });
  else if (level === "error") toast.error(title, {
    description
  });
  else toast(title, {
    description
  });
  if (!useBrowserNotification) return;
  if (typeof window === "undefined") return;
  if (!("Notification" in window)) return;
  try {
    const permission = Notification.permission === "default" ? await Notification.requestPermission() : Notification.permission;
    if (permission !== "granted") return;
    new Notification(title, {
      body: message || ""
    });
  } catch {
  }
}
function OAuthCallbackHandler() {
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      const oauth = urlParams.get("oauth");
      const error = urlParams.get("error");
      if (error) {
        let errorMessage = "Authentication failed";
        switch (error) {
          case "oauth_failed":
            errorMessage = "OAuth authentication failed";
            break;
          case "no_code":
            errorMessage = "Authorization code not received";
            break;
          case "token_exchange_failed":
            errorMessage = "Failed to exchange authorization code";
            break;
          case "user_info_failed":
            errorMessage = "Failed to get user information";
            break;
          case "invalid_token":
            errorMessage = "Invalid token received";
            break;
          case "server_error":
            errorMessage = "Server error during authentication";
            break;
        }
        notify({
          title: "Authentication Failed",
          message: errorMessage,
          level: "error"
        });
        window.history.replaceState({}, document.title, window.location.pathname);
        return;
      }
      if (token && oauth) {
        setAuthToken(token);
        const provider = oauth === "google" ? "Google" : oauth === "apple" ? "Apple" : "OAuth provider";
        notify({
          title: "Signed in successfully!",
          message: `Welcome back! You signed in with ${provider}.`,
          level: "success",
          useBrowserNotification: true
        });
        window.history.replaceState({}, document.title, window.location.pathname);
        const returnTo = urlParams.get("returnTo") || "ride-request";
        window.location.href = `/${returnTo}`;
      }
    };
    handleOAuthCallback();
  }, []);
  return null;
}
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$BaseLayout;
  const { title = "Bossie Ride", description = "Ride smarter. Arrive faster.", theme = "monster" } = Astro.props;
  return renderTemplate`<html data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="19" data-source-line-end="82" lang="en">
  <head data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="20" data-source-line-end="25">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"${addAttribute(description, "content")}>
    <title data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="24" data-source-line-end="24">${title}</title>
  ${renderHead()}</head>
  <body data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="26" data-source-line-end="81"${addAttribute(theme, "data-theme")}>
    <!-- Theme Toggle Button -->
    <div data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="28" data-source-line-end="28" class="theme-toggle" onclick="toggleTheme()"></div>

    ${renderSlot($$result, $$slots.default)}

    ${renderComponent($$result, "AppToaster", AppToaster, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/AppToaster", "client:component-export": "default" })}
    ${renderComponent($$result, "OAuthCallbackHandler", OAuthCallbackHandler, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/OAuthCallbackHandler", "client:component-export": "default" })}

    <!-- Safe Theme Script -->
    ${renderScript($$result, "/home/rayan/bossie-ride/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}

    <!-- Global Styles -->
    
  </body>
</html>`;
}, "/home/rayan/bossie-ride/src/layouts/BaseLayout.astro", void 0);
export {
  $$BaseLayout as $,
  clearAuthToken as c,
  fetchAuthedJson as f,
  getAuthToken as g,
  notify as n,
  setAuthToken as s
};
