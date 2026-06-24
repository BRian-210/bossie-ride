import mongoose from "mongoose";
import fs from "fs";
import path from "path";
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
const MONGODB_URI = getEnvVar("MONGODB_URI");
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
