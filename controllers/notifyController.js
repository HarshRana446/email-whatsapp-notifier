const transporter = require("../config/mailer.js");
const client = require("../config/twilio.js");

exports.sendNotification = (req, res) => {
  const { name, email } = req.body;

  // Send Email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to Our Service!",
    text: `Hi ${name}, thank you for signing up and message sent!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).send({ message: "Email Error" });
    }

    console.log("✅ Email sent successfully!");

    // Send WhatsApp
    client.messages
      .create({
        from: process.env.TWILIO_WHATSAPP_FROM,
        to: process.env.ADMIN_WHATSAPP_TO,
        body: `New signup: ${name} (${email})`,
      })
      .then((message) => {
        console.log("✅ WhatsApp message sent, SID:", message.sid);
        return res.status(200).send({
          message: "Email and WhatsApp notification sent successfully",
        });
      })
      .catch((err) => {
        console.error("WhatsApp sending error:", err);
        return res.status(500).send({ message: "WhatsApp Error" });
      });
  });
};
