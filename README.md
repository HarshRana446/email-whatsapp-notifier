# 📬 Multi-Channel Notification System 📱📧📲

A lightweight, scalable **Node.js notification system** that sends real-time notifications through **Email**, **WhatsApp**, and **SMS** using **Nodemailer** and **Twilio API**.  
Perfect for integrating alert systems into admin dashboards, prototypes, or personal projects.

---

## 📌 Features

- ✅ Send automated **email notifications** via **Gmail SMTP**
- ✅ Send **WhatsApp messages** via **Twilio Sandbox**
- ✅ Send **SMS alerts** using your **Twilio phone number**
- ✅ Clean, modular **Express.js REST API** structure
- ✅ Secure environment variable management using `.env`
- ✅ Ready-to-test API endpoints via **Postman**

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js  
- **Email Service:** Nodemailer (Gmail SMTP)  
- **Messaging Service:** Twilio (WhatsApp & SMS)  
- **Environment Management:** dotenv  
- **API Testing:** Postman  

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository:
git clone https://github.com/HarshRana446/email-whatsapp-notifier.git
cd email-whatsapp-notifier

2️⃣ Install Dependencies:
npm install

3️⃣ Setup .env File
Create a .env file in the root directory:
# Gmail SMTP
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# Twilio Credentials
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token

# Twilio Numbers
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_SMS_FROM=+16285009872

# Admin Recipient Numbers
ADMIN_WHATSAPP_TO=whatsapp:+91XXXXXXXXXX
ADMIN_SMS_TO=+91XXXXXXXXXX
✅ Never push this .env to public repositories.

▶️ Run the Server:
node app.js
📲 API Usage (Postman)
📤 POST /api/notify/signup
Request Body (JSON):
{
  "name": "Harsh Rana",
  "email": "ranaharsh669@gmail.com"
}
Response (Success):
{
  "message": "Email, WhatsApp & SMS notifications sent successfully"
}
🔒 Important Notes
📝 Twilio Sandbox: Join your sandbox by sending your unique code to +14155238886 on WhatsApp.

📧 Use Gmail App Password for secure SMTP authentication.

🔐 Never commit sensitive data like .env to your public repositories.
