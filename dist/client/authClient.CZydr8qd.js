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
export {
  clearAuthToken as c,
  fetchAuthedJson as f,
  getAuthToken as g,
  setAuthToken as s
};
