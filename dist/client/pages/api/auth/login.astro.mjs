import bcrypt from "bcryptjs";
import { c as connectDB } from "../../../db.CUhxi6K0.js";
import { U as User, s as signAuthToken } from "../../../auth.w8bA9ONt.js";
import { renderers } from "../../../renderers.mjs";
const POST = async ({
  request
}) => {
  const body = await request.json().catch(() => null);
  if (!body) {
    return new Response(JSON.stringify({
      error: "Invalid JSON body"
    }), {
      status: 400
    });
  }
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  if (!email) {
    return new Response(JSON.stringify({
      error: "Email is required"
    }), {
      status: 400
    });
  }
  if (!password) {
    return new Response(JSON.stringify({
      error: "Password is required"
    }), {
      status: 400
    });
  }
  await connectDB();
  const user = await User.findOne({
    email
  });
  if (!user) {
    return new Response(JSON.stringify({
      error: "Account not found. Please sign up."
    }), {
      status: 404
    });
  }
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    return new Response(JSON.stringify({
      error: "Invalid credentials"
    }), {
      status: 401
    });
  }
  const token = signAuthToken(String(user._id));
  return new Response(JSON.stringify({
    token,
    user: {
      id: String(user._id),
      fullName: user.fullName,
      email: user.email
    }
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
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
