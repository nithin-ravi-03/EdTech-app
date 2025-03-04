import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

export const sendCertificateEmail = async (userEmail, certificateUrl) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Your Course Certificate",
    html: `<p>Congratulations! Your certificate is ready.</p><a href="${certificateUrl}">Download Certificate</a>`
  };

  await transporter.sendMail(mailOptions);
};
