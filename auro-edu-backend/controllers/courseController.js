import Course from "../models/Course.js";
import User from "../models/User.js"; // Ensure you have User model

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ success: true, courses });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const userId = req.user.id; // Extract user from auth middleware
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if user is already enrolled
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ success: false, message: "Already enrolled" });
    }

    // Enroll user
    user.enrolledCourses.push(courseId);
    await user.save();

    res.status(200).json({ success: true, message: "Enrolled successfully", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
