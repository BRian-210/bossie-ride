import { c as connectDB } from "./db.Bk-H3Ses.js";
import { g as getBearerToken, v as verifyAuthToken, U as User } from "./auth.CgSulwnn.js";
async function requireUserId(request) {
  const token = getBearerToken(request);
  if (!token) throw new Error("Unauthorized");
  let payload;
  try {
    payload = verifyAuthToken(token);
  } catch {
    throw new Error("Unauthorized");
  }
  await connectDB();
  const user = await User.findById(payload.sub).select("_id").lean();
  if (!user) throw new Error("Unauthorized");
  return String(user._id);
}
export {
  requireUserId as r
};
