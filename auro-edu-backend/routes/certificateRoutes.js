import express from "express";
import { generateCertificate, validateCertificate, getUserCertificates } from "../services/certificateService.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

// Route to generate a certificate
router.post("/generate", authMiddleware, async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id; // Extracted from JWT
    const certificate = await generateCertificate(userId, courseId);
    res.status(201).json({ success: true, certificate });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Route to validate a certificate
router.get("/validate/:certificateId", async (req, res) => {
  try {
    const result = await validateCertificate(req.params.certificateId);
    res.json(result);
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Route to get all certificates of a user
router.get("/user-certificates", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from JWT
    const certificates = await getUserCertificates(userId);
    res.json({ success: true, certificates });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;
