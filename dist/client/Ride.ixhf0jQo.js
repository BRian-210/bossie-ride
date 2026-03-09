import mongoose, { Schema } from "mongoose";
const RideSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  pickup: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    coords: {
      lat: {
        type: Number
      },
      lng: {
        type: Number
      }
    }
  },
  dropoff: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      trim: true
    },
    coords: {
      lat: {
        type: Number
      },
      lng: {
        type: Number
      }
    }
  },
  rideType: {
    typeId: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    baseFareKsh: {
      type: Number
    }
  },
  status: {
    type: String,
    enum: ["requested", "in_progress", "completed", "cancelled"],
    default: "requested",
    index: true
  },
  estimatedFareKsh: {
    type: Number
  },
  finalFareKsh: {
    type: Number
  },
  distanceKm: {
    type: Number
  },
  durationMinutes: {
    type: Number
  },
  completedAt: {
    type: Date
  }
}, {
  timestamps: true
});
RideSchema.index({
  userId: 1,
  createdAt: -1
});
RideSchema.index({
  userId: 1,
  status: 1,
  createdAt: -1
});
const Ride = mongoose.models.Ride || mongoose.model("Ride", RideSchema);
export {
  Ride as R
};
