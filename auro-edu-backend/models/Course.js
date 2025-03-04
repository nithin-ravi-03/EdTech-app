

import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  category: String,
  level: { type: String, enum: ["beginner", "intermediate", "advanced"] },
  chapters: [{ title: String, content: String, quiz: [Object] }],
  finalExam: { questions: [Object], passingScore: Number }
});

export default mongoose.model("Course", CourseSchema);
