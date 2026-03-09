import { g as getAuthToken, f as fetchAuthedJson, c as clearAuthToken } from "./authClient.CZydr8qd.js";
async function requireAuth(returnTo) {
  if (typeof window === "undefined") return null;
  const token = getAuthToken();
  if (!token) {
    window.location.href = `./signup?returnTo=${encodeURIComponent(returnTo)}`;
    return null;
  }
  try {
    const data = await fetchAuthedJson("./api/auth/me", {
      method: "GET"
    });
    return data.user;
  } catch {
    clearAuthToken();
    window.location.href = `./signup?returnTo=${encodeURIComponent(returnTo)}`;
    return null;
  }
}
export {
  requireAuth as r
};
