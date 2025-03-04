import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  title: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

const Community = mongoose.model("Community", communitySchema);

// ✅ Correct export (Default Export)
export default Community;
