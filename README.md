# 🛠️ Fix The Issue (FTI)

**Fix The Issue (FTI)** is a full-stack **Hostel Complaint Management System** built to digitize and streamline hostel issue reporting, assignment, and resolution.

Students raise complaints, wardens manage them, and staff resolve them — all through a transparent, role-based workflow.

🌐 **Live Website**: https://fix-the-issue.vercel.app  


---

## 🎯 Purpose of the Project

Traditional hostel complaint systems are slow, manual, and lack transparency.  
**FTI** addresses these problems by providing:

- A centralized complaint management platform  
- Clear role-based responsibilities  
- Real-time complaint tracking  
- Accountability at every stage  

---

## 👥 User Roles & Capabilities

### 👩‍🎓 Student
- Register & login securely  
- Raise hostel complaints  
- View complaint status  
- Track resolution progress  

### 🧑‍💼 Admin (Warden)
- Secure admin login  
- View all complaints  
- Assign complaints to staff  
- Monitor analytics & system status  

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
- Production-ready REST APIs  

---

## 🖼️ Screenshots

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 28 38 PM" src="https://github.com/user-attachments/assets/7aae9dcb-c37e-46ed-aa82-8946cc8f5e68" />

### 🔐 Authentication

<img width="1440" height="781" alt="Screenshot 2026-01-03 at 9 50 35 PM" src="https://github.com/user-attachments/assets/cc4ba63e-f0a6-4a4a-955a-28471b8a1a39" />

<br>

<img width="1440" height="781" alt="Screenshot 2026-01-03 at 9 50 41 PM" src="https://github.com/user-attachments/assets/45c39e50-fcce-4aa8-bda7-8c818c3db32e" />

<br>

### 👩‍🎓 Student Dashboard

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 29 19 PM" src="https://github.com/user-attachments/assets/135f350f-f922-4b95-8163-87cede6f1c85" />

<br>

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 29 24 PM" src="https://github.com/user-attachments/assets/7c875ef4-591e-4bdf-be0a-9b49e46cb40c" />
<br>

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 30 17 PM" src="https://github.com/user-attachments/assets/85c3e5fd-c634-4d9f-b6ec-5500c3e7aa94" />


### 🧑‍💼 Admin (Warden) Panel

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 30 17 PM" src="https://github.com/user-attachments/assets/19c083c4-3912-416c-a7bc-0c38ea8ec443" />
<br>

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 30 50 PM" src="https://github.com/user-attachments/assets/89a13192-5595-4a1b-8f70-a7505a470cd2" />
<br>

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 30 56 PM" src="https://github.com/user-attachments/assets/79a1e12d-4407-4d7e-a5cc-bfb842296ac5" />
<br>

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 31 03 PM" src="https://github.com/user-attachments/assets/b430ff63-10e8-497f-831d-47d5e89c2890" />


### 🧑‍🔧 Staff Panel

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 31 11 PM" src="https://github.com/user-attachments/assets/db4dc828-cf42-4b2e-af1d-f2b689698188" />
<br>

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 34 32 PM" src="https://github.com/user-attachments/assets/b9e37b30-1e2b-4af4-a013-558754f3d786" />
<br>

<img width="1284" height="606" alt="Screenshot 2026-01-03 at 9 35 50 PM" src="https://github.com/user-attachments/assets/1577c6e2-0489-4a21-a2c9-1229586e0f6d" />
<br>

<img width="1439" height="779" alt="Screenshot 2026-01-03 at 9 35 09 PM" src="https://github.com/user-attachments/assets/0413f998-a8c7-4270-8fc5-d336fec71cb3" />

---

## 🧠 Tech Stack

### Frontend
- React (Vite)  
- Tailwind CSS  
- Framer Motion  
- Axios  
- Vercel  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- JWT Authentication  
- Render  

---

## 🗂️ Project Structure

```
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
```

---

## 🔐 Authentication & Security

- Passwords hashed using **bcrypt**
- JWT-based authentication
- Role-based route protection (frontend + backend)
- Secure CORS configuration

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
```

### Frontend (`frontend/.env`)
```env
VITE_API_BASE_URL=https: URL
```

---

## 🧪 Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/arangasakthivel/FTI.git
cd FTI
```

### 2️⃣ Start Backend
```bash
cd backend
npm install
npm run dev
```

Backend runs on: `http://localhost:5000`

### 3️⃣ Start Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## ☁️ Deployment Details

- **Frontend**: Vercel  
- **Backend**: Render  
- **Database**: MongoDB Atlas  

Environment variables are configured in their respective dashboards.

---

## 🧩 Known Limitations

- No email notifications
- No file attachments for complaints
- Admin accounts are seeded manually

---

## 🔮 Future Enhancements

- Email / push notifications
- Complaint attachments (images/videos)
- Advanced filtering & search
- SLA tracking
- Admin audit logs

---

## 👤 Author

**Aranga Sakthivel**  
🎓 B.Tech Information Technology | VIT  
💻 GitHub: https://github.com/arangasakthivel  

---

⭐ If you found this project useful, feel free to **star the repository**!


