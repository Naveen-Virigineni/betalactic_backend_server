const nodemailer = require('nodemailer');

const sendContactEmail = async (req, res) => {
  // Extracting specific fields from your image
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Inquiry from ${firstName} ${lastName}`,
    // Using HTML for a professional look in your inbox
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Form Entry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { sendContactEmail };