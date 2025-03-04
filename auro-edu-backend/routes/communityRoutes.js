import express from "express";
import Community from "../models/Community.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @route   GET /api/community
 * @desc    Fetch all community posts
 * @access  Public
 */
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Community.find().sort({ createdAt: -1 });
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching community posts", error });
//   }
// });

router.get("/", async (req, res) => {
    try {
      const posts = await Community.find();
      res.json({ success: true, data: posts }); // ✅ Wrap in an object
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });
  

/**
 * @route   POST /api/community
 * @desc    Create a new post, question, or poll
 * @access  Private (Logged-in users)
 */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { type, content } = req.body;
    if (!type || !content) {
      return res.status(400).json({ message: "Type and content are required" });
    }

    const newPost = await Community.create({
      userId: req.user._id,
      type,
      content,
    });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating community post", error });
  }
});

/**
 * @route   PUT /api/community/:id/upvote
 * @desc    Upvote a post
 * @access  Private (Logged-in users)
 */
router.put("/:id/upvote", authMiddleware, async (req, res) => {
  try {
    const post = await Community.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.upvotes += 1;
    await post.save();
    res.json({ message: "Post upvoted", post });
  } catch (error) {
    res.status(500).json({ message: "Error upvoting post", error });
  }
});

/**
 * @route   PUT /api/community/:id/downvote
 * @desc    Downvote a post
 * @access  Private (Logged-in users)
 */
router.put("/:id/downvote", authMiddleware, async (req, res) => {
  try {
    const post = await Community.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.downvotes += 1;
    await post.save();
    res.json({ message: "Post downvoted", post });
  } catch (error) {
    res.status(500).json({ message: "Error downvoting post", error });
  }
});

/**
 * @route   POST /api/community/:id/comment
 * @desc    Add a comment to a post
 * @access  Private (Logged-in users)
 */
router.post("/:id/comment", authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Comment text is required" });

    const post = await Community.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ userId: req.user._id, text });
    await post.save();

    res.json({ message: "Comment added", post });
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
});

/**
 * @route   DELETE /api/community/:id
 * @desc    Delete a community post
 * @access  Private (Admin or Owner only)
 */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const post = await Community.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (req.user.role !== "admin" && post.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this post" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
});

export default router;
