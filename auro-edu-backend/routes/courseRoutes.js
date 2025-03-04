import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", (req, res) => res.json({ message: "Courses endpoint" }));
router.post("/:id/enroll", authMiddleware, (req, res) => res.json({ message: "Enroll endpoint" }));

export default router;
