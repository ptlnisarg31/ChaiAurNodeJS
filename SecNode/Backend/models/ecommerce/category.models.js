import mongoose from "mongoose";
new mongoose.Schema(
  {
    username: {
      type: String,
      reqired: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      reqired: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      reqired: true,
    },
  },
  { timestamps: true }
);
export const Category = mongoose.model("Category", ongoose.Schema);
