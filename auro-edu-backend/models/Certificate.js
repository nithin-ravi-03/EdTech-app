import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
  certificateId: { type: String, unique: true, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  userName: { type: String, required: true },
  courseName: { type: String, required: true },
  issueDate: { type: String, required: true },
});

export default mongoose.model("Certificate", CertificateSchema);
