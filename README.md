# 🛠️ Fix The Issue (FTI)

**Fix The Issue (FTI)** is a full-stack **Hostel Complaint Management System** designed to streamline how hostel-related issues are reported, managed, and resolved.

Students can raise complaints, wardens can assign them, and staff can resolve them — all with a transparent, role-based workflow.

🌐 **Live Website**: https://fix-the-issue.vercel.app  
🔗 **Backend API**: https://fti-backend-0uey.onrender.com  

---

## 🎯 Purpose of the Project

Traditional hostel complaint systems are slow, opaque, and unstructured.  
FTI solves this by providing:

- A centralized complaint system
- Role-based access (Student / Admin / Staff)
- Real-time status tracking
- Clear accountability and transparency

---

## 👥 User Roles & Capabilities

### 👩‍🎓 Student
- Register & login
- Raise hostel complaints
- View complaint status
- Track resolution progress

### 🧑‍💼 Admin (Warden)
- Secure admin login
- View all complaints
- Assign complaints to staff
- Monitor analytics and system health

### 🧑‍🔧 Staff
- Staff login
- View assigned complaints
- Update complaint status:
  - In Progress
  - Resolved

---

## 🚀 Core Features

- JWT-based authentication
- Role-based authorization
- Complaint lifecycle management
- Admin analytics dashboard
- Secure password hashing (bcrypt)
- Fully responsive UI
- Production-ready backend APIs

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion
- Axios
- Vercel (Deployment)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Render (Deployment)

---

## 🗂️ Project Structure
FTI/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── api/
│ │ └── App.jsx
│ ├── .env
│ └── package.json
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── models/
│ │ ├── middleware/
│ │ ├── seed/
│ │ └── server.js
│ ├── .env
│ └── package.json
│
└── README.md


---

## 🔐 Authentication & Security

- Passwords hashed using **bcrypt**
- JWT tokens for session management
- Role-based route protection (backend + frontend)
- Secure CORS configuration for production

---

## 📊 Admin Analytics

Admins can view:
- Total complaints
- Pending complaints
- Assigned complaints
- Resolved complaints
- Complaints by category

This helps wardens make faster and informed decisions.

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=https://fix-the-issue.vercel.app

Frontend (frontend/.env)
VITE_API_BASE_URL=https://fti-backend-0uey.onrender.com/api

🧪 Run Locally
1️⃣ Clone the repository
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

Environment variables are configured separately in Vercel and Render dashboards.

🧩 Known Limitations

No email notifications (yet)

No file uploads for complaints

Admin accounts are seeded manually

🔮 Future Enhancements

Email / push notifications

Complaint attachments (images/videos)

Advanced filtering & search

SLA tracking

Audit logs for admins

👤 Author

Aranga Sakthivel
🎓 B.Tech IT | VIT
💻 GitHub: https://github.com/arangasakthivel
