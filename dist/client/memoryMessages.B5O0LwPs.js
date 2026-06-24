import mongoose, { Schema } from "mongoose";
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
const MessageSchema = new Schema({
  rideId: {
    type: String,
    required: [true, "Ride ID is required"],
    index: true
  },
  senderId: {
    type: String,
    required: [true, "Sender ID is required"]
  },
  senderType: {
    type: String,
    enum: ["rider", "driver"],
    required: [true, "Sender type is required"]
  },
  text: {
    type: String,
    required: [true, "Message text is required"],
    trim: true
  }
}, {
  timestamps: true
});
MessageSchema.index({
  rideId: 1,
  createdAt: -1
});
const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);
const memoryMessages = [];
function addMemoryMessage(input) {
  const message = {
    ...input,
    id: `mem_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    createdAt: /* @__PURE__ */ new Date()
  };
  memoryMessages.push(message);
  return message;
}
function getMemoryMessages(rideId) {
  return memoryMessages.filter((message) => message.rideId === rideId).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
}
export {
  Message as M,
  addMemoryMessage as a,
  connectDB as c,
  getMemoryMessages as g
};
