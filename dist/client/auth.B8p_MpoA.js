import mongoose, { Schema } from "mongoose";
import { sign, verify } from "jsonwebtoken";
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
function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
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
