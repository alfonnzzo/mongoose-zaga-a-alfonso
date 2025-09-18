import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema(
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
    courses:{
      type: Types.ObjectId,
      ref: "Courses",
    },
    assignment: {
      type: Types.ObjectId,
      ref: "Assignment",
    }
  },
  {
    versionKey: false,
  }
);

export const UserModel = model("User", UserSchema);
