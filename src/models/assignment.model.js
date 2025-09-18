import { Schema, model } from "mongoose";

const assignmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    grade: {
      type: Number,
      required: false,
      min: 0,
      max: 10,
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

export const AssignmentModel = model("Assignment", assignmentSchema);
