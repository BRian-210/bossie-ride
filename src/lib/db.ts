import mongoose from 'mongoose';
import fs from 'fs'
import path from 'path'

function getEnvVar(name: string): string | undefined {
  if (process.env[name]) return process.env[name]
  try {
    const envPath = path.resolve(process.cwd(), '.env')
    if (!fs.existsSync(envPath)) return undefined
    const contents = fs.readFileSync(envPath, 'utf8')
    const m = contents.match(new RegExp('^' + name + "\\s*=\\s*(.*)$", 'm'))
    if (!m) return undefined
    let val = m[1].trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    return val || undefined
  } catch (e) {
    return undefined
  }
}

const MONGODB_URI = getEnvVar('MONGODB_URI');

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalForMongoose = globalThis as typeof globalThis & {
  __mongooseCache?: MongooseCache;
};

const cached = (globalForMongoose.__mongooseCache ??= {
  conn: null,
  promise: null,
});

export default async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not set');
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
