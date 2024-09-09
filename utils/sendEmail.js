const nodemailer = require("nodemailer");

const sendEmail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.verio.com", // SMTP server host
    port: 465, // Port (587 for TLS)
    secure: true, // Use TLS
    auth: {
      user: "letsplay@ipropaganda.com", // Your Verio email address
      pass: "Spring2023@April", // Your Verio email password
    },
    debug: true, // Enable debug output
  });

  const mailOptions = {
    from: "letsplay@ipropaganda.com",
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
