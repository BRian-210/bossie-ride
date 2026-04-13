import mongoose, { Schema, type Document, type Model } from 'mongoose'

export interface IUser extends Document {
  fullName: string
  email: string
  passwordHash?: string
  oauthProviders: {
    google?: {
      id: string
      email: string
    }
    apple?: {
      id: string
      email: string
    }
  }
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    passwordHash: { type: String },
    oauthProviders: {
      google: {
        id: String,
        email: String,
      },
      apple: {
        id: String,
        email: String,
      },
    },
  },
  { timestamps: true }
)

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
export default User

