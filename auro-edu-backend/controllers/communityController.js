import Community from "../models/Community.js";

export const createPost = async (req, res) => {
  const post = await Community.create({ userId: req.user._id, ...req.body });
  res.json(post);
};

export const upvotePost = async (req, res) => {
  await Community.findByIdAndUpdate(req.params.id, { $inc: { upvotes: 1 } });
  res.json({ message: "Upvoted" });
};
