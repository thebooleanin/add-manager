import mongoose, { Schema } from "mongoose";

const Advertise = new Schema({
  title: { type: String },
  discription: { type: String },
  file: { type: String },
  startAt: { type: Date, require: true },
  expireTime: { type: Date, require: true },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
  updatedBy: { type: String },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

export const AdvertiseModel =
  mongoose.models.advertise || mongoose.model("advertise", Advertise);
