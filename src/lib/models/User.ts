import mongoose, { Schema, type Document, type Model } from 'mongoose'

export interface IUser extends Document {
  fullName: string
  email?: string
  phone?: string
  passwordHash: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true, index: true },
    phone: { type: String, trim: true, index: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
)

// Unique indexes (sparse allows missing values)
UserSchema.index({ email: 1 }, { unique: true, sparse: true })
UserSchema.index({ phone: 1 }, { unique: true, sparse: true })

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
export default User

