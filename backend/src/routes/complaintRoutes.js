const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  assignComplaint,
  getAssignedComplaints,
  updateComplaintStatus
} = require("../controllers/complaintController");

const { protect, isStudent } = require("../middleware/authMiddleware");

const { isAdmin } = require("../middleware/authMiddleware");

const { isStaff } = require("../middleware/authMiddleware");



// Student creates complaint
router.post("/", protect, isStudent, createComplaint);

// Student views own complaints
router.get("/my", protect, isStudent, getMyComplaints);

router.get("/", protect, isAdmin, getAllComplaints);

router.put("/:id/assign", protect, isAdmin, assignComplaint);

router.get("/assigned", protect, isStaff, getAssignedComplaints);

router.put("/:id/status", protect, isStaff, updateComplaintStatus);


module.exports = router;
