import { c as connectDB } from "../../../db.CUhxi6K0.js";
import { g as getBearerToken, v as verifyAuthToken, U as User } from "../../../auth.w8bA9ONt.js";
import { renderers } from "../../../renderers.mjs";
const GET = async ({
  request
}) => {
  const token = getBearerToken(request);
  if (!token) {
    return new Response(JSON.stringify({
      error: "Unauthorized"
    }), {
      status: 401
    });
  }
  let payload;
  try {
    payload = verifyAuthToken(token);
  } catch {
    return new Response(JSON.stringify({
      error: "Unauthorized"
    }), {
      status: 401
    });
  }
  await connectDB();
  const user = await User.findById(payload.sub).lean();
  if (!user) {
    return new Response(JSON.stringify({
      error: "Unauthorized"
    }), {
      status: 401
    });
  }
  return new Response(JSON.stringify({
    user: {
      id: String(user._id),
      fullName: user.fullName,
      email: user.email,
      createdAt: user.createdAt
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
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
