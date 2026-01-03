🛠️ Fix The Issue (FTI)

Fix The Issue (FTI) is a full-stack Hostel Complaint Management System built to digitize and streamline hostel issue reporting, assignment, and resolution.

Students raise complaints, wardens manage them, and staff resolve them — all through a transparent, role-based workflow.

🌐 Live Website: https://fix-the-issue.vercel.app

🔗 Backend API: https://fti-backend-0uey.onrender.com

🎯 Purpose of the Project

Traditional hostel complaint systems are slow, manual, and lack transparency.
FTI addresses these problems by providing:

A centralized complaint management platform

Clear role-based responsibilities

Real-time complaint tracking

Accountability at every stage

👥 User Roles & Capabilities
👩‍🎓 Student

Register & login securely

Raise hostel complaints

View complaint status

Track resolution progress

🧑‍💼 Admin (Warden)

Secure admin login

View all complaints

Assign complaints to staff

Monitor analytics & system status

🧑‍🔧 Staff

Staff login

View assigned complaints

Update complaint status:

In Progress

Resolved

🚀 Core Features

JWT-based authentication

Role-based authorization

Complaint lifecycle management

Admin analytics dashboard

Secure password hashing (bcrypt)

Fully responsive UI

Production-ready REST APIs

🖼️ Screenshots

📌 Note: Place all screenshots inside a /screenshots folder in the root directory.

🔐 Authentication




👩‍🎓 Student Dashboard






🧑‍💼 Admin (Warden) Panel






🧑‍🔧 Staff Panel




🧠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Framer Motion

Axios

Vercel (Deployment)

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

Render (Deployment)

🗂️ Project Structure
FTI/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── App.jsx
│   ├── .env
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── seed/
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── screenshots/
│   └── *.png
│
└── README.md

🔐 Authentication & Security

Passwords hashed using bcrypt

JWT-based authentication

Role-based route protection (frontend + backend)

Secure CORS configuration for production

📊 Admin Analytics

Admins can view:

Total complaints

Pending complaints

Assigned complaints

Resolved complaints

Complaints by category

This enables faster decisions and better hostel management.

⚙️ Environment Variables
Backend (backend/.env)
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=https://fix-the-issue.vercel.app

Frontend (frontend/.env)
VITE_API_BASE_URL=https://fti-backend-0uey.onrender.com/api

🧪 Run Locally
1️⃣ Clone the Repository
git clone https://github.com/arangasakthivel/FTI.git
cd FTI

2️⃣ Start Backend
cd backend
npm install
npm run dev


Backend runs on: http://localhost:5000

3️⃣ Start Frontend
cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

☁️ Deployment Details

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

Environment variables are configured in respective deployment dashboards.

🧩 Known Limitations

No email notifications

No file attachments for complaints

Admin accounts are seeded manually

🔮 Future Enhancements

Email / push notifications

Complaint attachments (images/videos)

Advanced filtering & search

SLA tracking

Admin audit logs

👤 Author

Aranga Sakthivel
🎓 B.Tech Information Technology | VIT
💻 GitHub: https://github.com/arangasakthivel

⭐ If you found this project useful, feel free to star the repository!
