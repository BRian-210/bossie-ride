import mongoose, { Schema } from "mongoose";
const TransactionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  rideId: {
    type: Schema.Types.ObjectId,
    ref: "Ride",
    index: true
  },
  provider: {
    type: String,
    enum: ["mpesa", "card", "cash"],
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    required: true,
    index: true
  },
  amountKsh: {
    type: Number,
    required: true
  },
  reference: {
    type: String,
    trim: true,
    index: true
  },
  receipt: {
    type: String,
    trim: true
  },
  mpesaCheckoutRequestId: {
    type: String,
    trim: true
  },
  mpesaMerchantRequestId: {
    type: String,
    trim: true
  },
  mpesaResultCode: {
    type: Number
  },
  mpesaResultDesc: {
    type: String,
    trim: true
  },
  mpesaPhoneNumber: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});
TransactionSchema.index({
  userId: 1,
  createdAt: -1
});
TransactionSchema.index({
  mpesaCheckoutRequestId: 1
}, {
  unique: true,
  sparse: true
});
const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
export {
  Transaction as T
};
