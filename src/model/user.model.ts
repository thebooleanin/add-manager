import mongoose, { Schema, Types } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, require: true },
  password: { type: String, require: true },
  userRole: { type: String, require: true, enum: ["admin"] },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
  updatedBy: { type: String },
  createdBy: { type: String },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

export const UserModel =
  mongoose.models.users || mongoose.model("users", UserSchema);
