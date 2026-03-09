import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    index: true
  },
  phone: {
    type: String,
    trim: true,
    index: true
  },
  passwordHash: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
UserSchema.index({
  email: 1
}, {
  unique: true,
  sparse: true
});
UserSchema.index({
  phone: 1
}, {
  unique: true,
  sparse: true
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);
function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set");
  return secret;
}
function signAuthToken(userId) {
  return jwt.sign({
    sub: userId
  }, getJwtSecret(), {
    expiresIn: process.env.JWT_EXPIRES_IN || "30d"
  });
}
function verifyAuthToken(token) {
  return jwt.verify(token, getJwtSecret());
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
