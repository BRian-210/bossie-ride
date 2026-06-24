import mongoose, { Schema } from "mongoose";
import pkg from "jsonwebtoken";
import fs from "fs";
import path from "path";
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  passwordHash: {
    type: String
  },
  oauthProviders: {
    google: {
      id: String,
      email: String
    },
    apple: {
      id: String,
      email: String
    }
  }
}, {
  timestamps: true
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);
const {
  sign,
  verify
} = pkg;
function getEnvVar(name) {
  if (process.env[name]) return process.env[name];
  try {
    const envPath = path.resolve(process.cwd(), ".env");
    if (!fs.existsSync(envPath)) return void 0;
    const contents = fs.readFileSync(envPath, "utf8");
    const m = contents.match(new RegExp("^" + name + "\\s*=\\s*(.*)$", "m"));
    if (!m) return void 0;
    let val = m[1].trim();
    if (val.startsWith('"') && val.endsWith('"') || val.startsWith("'") && val.endsWith("'")) {
      val = val.slice(1, -1);
    }
    return val || void 0;
  } catch (e) {
    return void 0;
  }
}
function getJwtSecret() {
  const secret = process.env.JWT_SECRET || getEnvVar("JWT_SECRET");
  if (!secret) throw new Error("JWT_SECRET is not set");
  return secret;
}
function signAuthToken(userId) {
  const payload = {
    sub: userId
  };
  const options = {
    expiresIn: process.env.JWT_EXPIRES_IN || "30d"
  };
  return sign(payload, getJwtSecret(), options);
}
function verifyAuthToken(token) {
  return verify(token, getJwtSecret());
}
function getBearerToken(request) {
  const auth = request.headers.get("authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match?.[1] || null;
}
export {
  User as U,
  getBearerToken as g,
  signAuthToken as s,
  verifyAuthToken as v
};
