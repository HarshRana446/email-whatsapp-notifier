# 📬 Email & WhatsApp Notification System 📱

A lightweight, scalable Node.js application that sends automated email notifications and WhatsApp messages via Twilio when specific events (like user signups) occur. Ideal for integrating quick alert systems into personal projects, prototypes, or admin dashboards.

---

## 📌 Features

- ✅ Send automated email notifications using **Nodemailer**
- ✅ Send **WhatsApp messages via Twilio Sandbox API**
- ✅ Secure environment variable management using `.env`
- ✅ Clean, modular Express.js REST API structure
- ✅ Postman-ready routes for easy testing and integration

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js  
- **Email Service:** Nodemailer (Gmail SMTP)  
- **Messaging Service:** Twilio WhatsApp Sandbox API  
- **Environment Management:** dotenv  
- **HTTP Client Test:** Postman  

---

## 📂 Project Structure

email-whatsapp-notifier/
├── config/
│ ├── mailer.js # Nodemailer setup
│ └── twilio.js # Twilio client config
│
├── controllers/
│ └── notifyController.js # API logic for sending notifications
│
├── routes/
│ └── notifyRoutes.js # API routing
│
├── .gitignore
├── .env # (not committed — for environment secrets)
├── app.js # Main application entry point
├── package.json
└── README.md


---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/HarshRana446/email-whatsapp-notifier.git
cd email-whatsapp-notifier

2️⃣ Install Dependencies
npm install

3️⃣ Setup .env File
Create a .env file in the root directory with:
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
ADMIN_WHATSAPP_TO=whatsapp:+91XXXXXXXXXX

4️⃣ Run the Server
node app.js

📲 API Usage (Test with Postman)
📤 POST /api/notify/signup
Request Body (JSON):
{
  "name": "Harsh Rana",
  "email": "ranaharsh669@gmail.com"
}
Response (Success):
{
  "message": "Email and WhatsApp notification sent successfully"
}

🔒 Important Notes
✅ Make sure to join the Twilio Sandbox by sending the provided code to +14155238886 before testing WhatsApp messages.

✅ Never commit .env or any sensitive credentials to public repositories.

✅ Use Gmail App Passwords for secure SMTP authentication.

📄 Author
Harsh Rana
🚀 Full Stack Developer | AI & DevTools Enthusiast

📧 ranaharsh669@gmail.com

🌐 Portfolio Website

🐙 GitHub

💼 LinkedIn
