const express = require("express");
const router = express.Router();

const { protect, isAdmin } = require("../middleware/authMiddleware");
const { getAllStaff } = require("../controllers/userController");

// ADMIN: Get all staff
router.get("/staff", protect, isAdmin, getAllStaff);

module.exports = router;
