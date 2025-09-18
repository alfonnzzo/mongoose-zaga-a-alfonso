import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      phone: {
        type: String,
        required: false,
      },
      address: {
        city: { type: String, required: false },
        country: { type: String, required: false },
      },
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    versionKey: false,
  }
);

export const UserModel = model("User", userSchema);
