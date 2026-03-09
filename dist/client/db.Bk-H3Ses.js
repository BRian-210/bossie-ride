import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
const globalForMongoose = globalThis;
const cached = globalForMongoose.__mongooseCache ??= {
  conn: null,
  promise: null
};
async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not set");
  }
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export {
  connectDB as c
};
