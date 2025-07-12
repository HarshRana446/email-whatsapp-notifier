const twilio = require("twilio");
require("dotenv").config();

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.messages
  .create({
    from: process.env.TWILIO_WHATSAPP_FROM,
    to: process.env.ADMIN_WHATSAPP_TO,
    body: "Test WhatsApp message from Node.js 👌",
  })
  .then((message) => console.log("WhatsApp sent ✅ SID:", message.sid))
  .catch((err) => console.error("❌ WhatsApp Error:", err));
