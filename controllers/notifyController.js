const transporter = require("../config/mailer");
const client = require("../config/twilio");

// Send Notifications Controller
exports.sendNotification = (req, res) => {
  const { name, email } = req.body;

  // Email Options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to Our Service!",
    text: `Hi ${name}, thank you for signing up.`,
  };

  // Send Email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).send({ message: "Email Error" });
    }

    // Send WhatsApp Message
    client.messages
      .create({
        from: process.env.TWILIO_WHATSAPP_FROM,
        to: process.env.ADMIN_WHATSAPP_TO,
        body: `📝 New signup: ${name} (${email})`,
      })
      .then(() => {
        // Send SMS Message
        return client.messages.create({
          from: process.env.TWILIO_SMS_FROM,
          to: process.env.ADMIN_SMS_TO,
          body: `New signup: ${name} (${email})`,
        });
      })
      .then(() => {
        res.status(200).send({
          message: "Email, WhatsApp & SMS notifications sent successfully",
        });
      })
      .catch((err) => {
        console.error("Notification error:", err);
        res.status(500).send({ message: "Notification Error" });
      });
  });
};
