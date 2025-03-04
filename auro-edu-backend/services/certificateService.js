import Certificate from "../models/Certificate.js";
import User from "../models/User.js";
import Course from "../models/Course.js";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

// Function to generate a certificate
export const generateCertificate = async (userId, courseId) => {
  try {
    // Check if the user and course exist
    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
      throw new Error("User or Course not found");
    }

    // Check if user has already completed the course
    const existingCertificate = await Certificate.findOne({ userId, courseId });
    if (existingCertificate) {
      return existingCertificate; // Return the existing certificate
    }

    // Generate a unique certificate ID
    const certificateId = uuidv4();
    const issueDate = moment().format("YYYY-MM-DD");

    // Create and save certificate
    const certificate = new Certificate({
      certificateId,
      userId,
      courseId,
      issueDate,
      userName: user.name,
      courseName: course.name,
    });

    await certificate.save();
    return certificate;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to validate a certificate
export const validateCertificate = async (certificateId) => {
  try {
    const certificate = await Certificate.findOne({ certificateId });

    if (!certificate) {
      return { valid: false, message: "Certificate not found" };
    }

    return { valid: true, certificate };
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get all certificates of a user
export const getUserCertificates = async (userId) => {
  try {
    const certificates = await Certificate.find({ userId });
    return certificates;
  } catch (error) {
    throw new Error(error.message);
  }
};
