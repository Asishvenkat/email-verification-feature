
# Trizen Email Verification Signup System

## Overview
A full-featured, production-grade signup and email verification system built with Node.js, Express, MongoDB Atlas, JWT, and React. Includes secure authentication, modern UI, and Docker support.

---

## 🚀 Setup & Run Instructions

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd Trizen-2
```

### 2. Backend Setup
```sh
cd backend
npm install
# Create a .env file with your MongoDB, JWT, SMTP credentials
npm start
```

### 3. Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```

### 4. Docker (Backend)
```sh
cd backend
docker build -t asishvenkat/trizen-backend:latest .
docker run -p 5000:5000 --env-file .env asishvenkat/trizen-backend:latest
```

---


# Demo Video

Watch the project demo here: [Google Drive Video](https://drive.google.com/file/d/1myqflOTQRFFG4_zf4LOjNHU3U3_IinrX/view?usp=sharing)

# Project Images

Below are the images present in the `public` folder, shown in the same order (1, 2, 3, 4):

<div align="center">
	<img src="frontend/public/1.png" alt="Image 1" width="420" style="margin:16px;" />
	<img src="frontend/public/2.png" alt="Image 2" width="420" style="margin:16px;" />
</div>
<div align="center">
	<img src="frontend/public/3.png" alt="Image 3" width="420" style="margin:16px;" />
	<img src="frontend/public/4.png" alt="Image 4" width="420" style="margin:16px;" />
</div>

## 🛠️ Design Choices
- **JWT for verification tokens:** Secure, expirable, and stateless.
- **MongoDB Atlas:** Scalable, cloud-based database.
- **Nodemailer:** For sending transactional emails.
- **React + Vite:** Fast, modern frontend with professional UI.
- **Docker:** Easy deployment and environment consistency.
- **Password validation:** Enforced on both frontend and backend.
- **Rate limiting:** Prevents abuse of resend functionality.
- **Clear user flow:** Modern UX with clear feedback and error handling.

---

## 📦 Libraries & Services Used
- **Backend:**
	- express
	- mongoose
	- jsonwebtoken
	- bcryptjs
	- nodemailer
	- dotenv
- **Frontend:**
	- react
	- react-router-dom
	- axios
	- vite
- **Other:**
	- MongoDB Atlas
	- Docker

---

## 🙏 Credits
Developed by asishvenkat

---

## 📧 Contact
For questions or support, contact [asishvenkat.a2004@gmail.com](mailto:asishvenkat.a2004@gmail.com)

## Security & Scalability
- Tokens are signed, expirable, and non-reusable
- HTTPS enforced in email links
- Rate limiting for resends
- Scalable DB and stateless token design

## Demo Video
(Add a short screen recording here)

## (Optional) Deployed Demo
(Add demo URL or Postman collection if deployed)
