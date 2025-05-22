const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate inputs (basic)
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
     from: `"${name}" <${process.env.EMAIL_USER}>`, // Show sender's name, actual email is your SMTP user
     to: process.env.EMAIL_USER,                      // Your email to receive the messages
     replyTo: email,                                  // Visitor's email, so you can reply directly
     subject: `Contact Form Message from ${name}`,
     text: `You have a new message from your website contact form:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
};


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
