import mongoose, { Schema, type Document, type Model, type Types } from 'mongoose'

export type RideStatus = 'requested' | 'in_progress' | 'completed' | 'cancelled'

export interface RideLocation {
  name: string
  address?: string
  coords?: { lat: number; lng: number }
}

export interface RideTypeInfo {
  typeId?: string
  name: string
  baseFareKsh?: number
}

export interface IRide extends Document {
  userId: Types.ObjectId
  pickup: RideLocation
  dropoff: RideLocation
  rideType: RideTypeInfo
  status: RideStatus
  estimatedFareKsh?: number
  finalFareKsh?: number
  distanceKm?: number
  durationMinutes?: number
  createdAt: Date
  updatedAt: Date
  completedAt?: Date
}

const RideSchema = new Schema<IRide>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    pickup: {
      name: { type: String, required: true, trim: true },
      address: { type: String, trim: true },
      coords: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    dropoff: {
      name: { type: String, required: true, trim: true },
      address: { type: String, trim: true },
      coords: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    rideType: {
      typeId: { type: String, trim: true },
      name: { type: String, required: true, trim: true },
      baseFareKsh: { type: Number },
    },
    status: {
      type: String,
      enum: ['requested', 'in_progress', 'completed', 'cancelled'],
      default: 'requested',
      index: true,
    },
    estimatedFareKsh: { type: Number },
    finalFareKsh: { type: Number },
    distanceKm: { type: Number },
    durationMinutes: { type: Number },
    completedAt: { type: Date },
  },
  { timestamps: true }
)

RideSchema.index({ userId: 1, createdAt: -1 })
RideSchema.index({ userId: 1, status: 1, createdAt: -1 })

const Ride: Model<IRide> = mongoose.models.Ride || mongoose.model<IRide>('Ride', RideSchema)
export default Ride

