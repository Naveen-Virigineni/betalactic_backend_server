# Betalactic Assignment - Backend Server

This is the Node.js/Express backend server for the Betalactic web application. It handles secure form submissions and automates email notifications via Nodemailer.

**Live API Endpoint:** [https://betalactic-backend-server.vercel.app](https://betalactic-backend-server.vercel.app)  
**Frontend Live Site:** [https://betalactic-frontend-server.vercel.app](https://betalactic-frontend-server.vercel.app)

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Email Service:** Nodemailer
- **Hosting:** Vercel (Serverless Functions)
- **Security:** CORS, Dotenv

## 📧 Email Integration

The backend provides a robust `POST` endpoint to handle the contact form. 
- **Validation:** Ensures all required fields (Name, Email, Message) are present.
- **SMTP Transport:** Configured with Nodemailer to send real-time alerts to the inbox whenever a new lead is captured on the website.
- **Async Handling:** Implemented using async/await for non-blocking email processing.

## ⚙️ Environment Variables

To run this project locally, create a `.env` file and add:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
RECEIVER_EMAIL=your-inbox@gmail.com