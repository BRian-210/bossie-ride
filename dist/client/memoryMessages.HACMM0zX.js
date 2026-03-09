import mongoose, { Schema } from "mongoose";
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
  getMemoryMessages as g
};
