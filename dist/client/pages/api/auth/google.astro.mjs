import { renderers } from "../../../renderers.mjs";
const GET = async ({
  request,
  redirect
}) => {
  const baseUrl = process.env.BASE_URL || "http://localhost:4321";
  const clientId = process.env.GOOGLE_CLIENT_ID || "your_google_client_id_here";
  const redirectUri = `${baseUrl}/api/auth/google/callback`;
  const scope = "openid email profile";
  const responseType = "code";
  const state = Math.random().toString(36).substring(7);
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&response_type=${responseType}&state=${state}&access_type=offline&prompt=consent`;
  return new Response(null, {
    status: 302,
    headers: {
      Location: authUrl
    }
  });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
