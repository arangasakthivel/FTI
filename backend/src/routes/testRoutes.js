const express = require("express");
const router = express.Router();

const { protect, isStudent, isAdmin, isStaff } = require("../middleware/authMiddleware");

router.get("/student", protect, isStudent, (req, res) => {
  res.json({ message: "Student route accessed", user: req.user });
});

router.get("/admin", protect, isAdmin, (req, res) => {
  res.json({ message: "Admin route accessed", user: req.user });
});

router.get("/staff", protect, isStaff, (req, res) => {
  res.json({ message: "Staff route accessed", user: req.user });
});

module.exports = router;
