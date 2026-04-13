import jwt from "jsonwebtoken";
import { c as connectDB } from "../../../../db.Bk-H3Ses.js";
import { U as User, s as signAuthToken } from "../../../../auth.B8p_MpoA.js";
import { renderers } from "../../../../renderers.mjs";
const POST = async ({
  request,
  redirect
}) => {
  const formData = await request.formData();
  const code = formData.get("code");
  const idToken = formData.get("id_token");
  const error = formData.get("error");
  if (error) {
    return redirect(`${process.env.BASE_URL || "http://localhost:4321"}/login?error=oauth_failed`);
  }
  if (!code || !idToken) {
    return redirect(`${process.env.BASE_URL || "http://localhost:4321"}/login?error=no_code`);
  }
  try {
    const decoded = jwt.decode(idToken);
    if (!decoded || !decoded.sub) {
      return redirect(`${process.env.BASE_URL || "http://localhost:4321"}/login?error=invalid_token`);
    }
    const appleId = decoded.sub;
    const email = decoded.email || "";
    await connectDB();
    let user = await User.findOne({
      "oauthProviders.apple.id": appleId
    });
    if (!user) {
      user = await User.findOne({
        email
      });
      if (user) {
        user.oauthProviders = user.oauthProviders || {};
        user.oauthProviders.apple = {
          id: appleId,
          email
        };
        await user.save();
      } else {
        user = await User.create({
          fullName: "Apple User",
          // Could be updated later
          email,
          oauthProviders: {
            apple: {
              id: appleId,
              email
            }
          }
        });
      }
    }
    const token = signAuthToken(String(user._id));
    return redirect(`${process.env.BASE_URL || "http://localhost:4321"}/?token=${token}&oauth=apple`);
  } catch (err) {
    console.error("Apple OAuth callback error:", err);
    return redirect(`${process.env.BASE_URL || "http://localhost:4321"}/login?error=server_error`);
  }
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
