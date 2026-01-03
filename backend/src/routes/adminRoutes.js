const express = require("express");
const router = express.Router();

const { protect, isAdmin } = require("../middleware/authmiddleware");
const { getAnalytics } = require("../controllers/adminController");

router.get("/analytics", protect, isAdmin, getAnalytics);

module.exports = router;
