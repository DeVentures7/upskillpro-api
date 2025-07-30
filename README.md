# 🧠 UpSkillPro API

UpSkillPro API is a modular, scalable Node.js backend that helps users define, track, and progress toward long-term career goals — like becoming an Android Architect or Full-Stack Developer.

This backend supports a clean Android app architecture and is designed to showcase professional Node.js, REST API, and modular feature design.

---

## 🔧 Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication (Auth module)
- Modular folder-by-feature structure
- Secure token-based login system
- Follows Clean Architecture alignment for Android integration

---

## 📁 Project Structure

upskillpro-api/
├── src/
│ ├── config/ # Database and app config
│ ├── middleware/ # JWT auth, error handlers
│ ├── modules/
│ │ └── auth/ # Login, Register, Profile (JWT)
│ ├── utils/ # Hashing, helpers
│ ├── app.js # Express setup
│ └── server.js # Entry point
├── .env # Environment variables
├── .gitignore
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🔐 Authentication API

- `POST /auth/register` – Create user account
- `POST /auth/login` – Login and get JWT token
- `GET /auth/profile` – Get user info (protected)

Example JWT Authorization Header:

Authorization: Bearer <your_token_here>

yaml
Copy
Edit

---

## 🚀 Getting Started

1. Clone the repo:

```bash
git clone https://github.com/DeVentures7/upskillpro-api.git
cd upskillpro-api
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Create a .env file:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/upskillpro
JWT_SECRET=your_secret_key_here
Run the server:

bash
Copy
Edit
node src/server.js
Server will run at: http://localhost:5000

🧪 Sample User Payload
json
Copy
Edit
{
  "name": "Dilip",
  "email": "dilip@example.com",
  "password": "secret123"
}
🧱 Android Clean Architecture Compatible
This API is designed to match modular Android feature layers:

Android Feature	API Endpoint(s)
feature-auth	/auth/register, /login
feature-progress	(future) /progress/*
feature-goal	(future) /goals/*

