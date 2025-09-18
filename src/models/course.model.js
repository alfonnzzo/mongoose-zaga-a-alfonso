import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    lessons: [
      {
        title: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    versionKey: false,
  }
);

export const CourseModel = model("Course", courseSchema);
