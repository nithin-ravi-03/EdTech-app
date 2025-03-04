import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import communityRoutes from "./routes/communityRoutes.js"; // ✅ Add Community Routes
import certificateRoutes from "./routes/certificateRoutes.js"; // ✅ Import Certificate Routes




dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/community", communityRoutes); // ✅ Include Community Routes
app.use("/api/certificates", certificateRoutes); // ✅ Include Certificate API


app.get("/", (req, res) => res.send("Auro.edu API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
