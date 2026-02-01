import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  rideId: string;
  senderId: string;
  senderType: 'rider' | 'driver';
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    rideId: {
      type: String,
      required: [true, 'Ride ID is required'],
      index: true,
    },
    senderId: {
      type: String,
      required: [true, 'Sender ID is required'],
    },
    senderType: {
      type: String,
      enum: ['rider', 'driver'],
      required: [true, 'Sender type is required'],
    },
    text: {
      type: String,
      required: [true, 'Message text is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient querying by rideId
MessageSchema.index({ rideId: 1, createdAt: -1 });

export default mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);

