// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();


// // Middlewares
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log("Incoming request:", req.method, req.url);
//   next();
// });

// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

// const testRoutes = require("./routes/testRoutes");
// app.use("/api/test", testRoutes);

// const complaintRoutes = require("./routes/complaintRoutes");
// app.use("/api/complaints", complaintRoutes);

// const userRoutes = require("./routes/userRoutes");
// app.use("/api/users", userRoutes);

// const adminRoutes = require("./routes/adminRoutes");
// app.use("/api/admin", adminRoutes);



// // Test route
// app.get("/", (req, res) => {
//   res.status(200).send("Hostel Complaint API is running");
// });


// // Start server
// const PORT = process.env.PORT || 5000;



// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ============================
   CORS CONFIG (FIXED)
============================ */
const allowedOrigins = [
  "http://localhost:5173",
  "https://fix-the-issue.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without origin (Postman, Thunder Client)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Handle preflight requests


/* ============================
   MIDDLEWARES
============================ */
app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

/* ============================
   ROUTES
============================ */
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const testRoutes = require("./routes/testRoutes");
app.use("/api/test", testRoutes);

const complaintRoutes = require("./routes/complaintRoutes");
app.use("/api/complaints", complaintRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

/* ============================
   HEALTH CHECK
============================ */
app.get("/", (req, res) => {
  res.status(200).send("Hostel Complaint API is running");
});

/* ============================
   START SERVER
============================ */
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

