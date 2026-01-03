const Complaint = require("../models/Complaint");



// STUDENT: Create a complaint
// const createComplaint = async (req, res) => {
//   try {
//     const { category, description } = req.body;

//     if (!category || !description) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const complaint = await Complaint.create({
//       category,
//       description,
//       createdBy: req.user.id, // from JWT
//     });

//     res.status(201).json({
//       message: "Complaint created successfully",
//       complaint,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
const createComplaint = async (req, res) => {
  try {
    const { category, description, block, room } = req.body;

    if (!category || !description || !block || !room) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const complaint = await Complaint.create({
      category,
      description,
      block,
      room,
      createdBy: req.user.id, // from JWT
    });

    res.status(201).json({
      message: "Complaint created successfully",
      complaint,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// STUDENT: View own complaints
const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      createdBy: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(complaints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ADMIN: View all complaints
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("createdBy", "name email role")
      .populate("assignedTo", "name email role")
      .sort({ createdAt: -1 });

    res.status(200).json(complaints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const User = require("../models/User");

// ADMIN: Assign complaint to staff (by ID or email)
const mongoose = require("mongoose");

const assignComplaint = async (req, res) => {
  try {
    const { staffId, staffEmail } = req.body;
    const complaintId = req.params.id;

    let staff = null;

    // ✅ Only treat staffId as ID if it's a valid ObjectId
    if (staffId && mongoose.Types.ObjectId.isValid(staffId)) {
      staff = await User.findById(staffId);
    } 
    // ✅ Otherwise treat as email
    else if (staffEmail) {
      staff = await User.findOne({ email: staffEmail });
    } 
    else {
      return res.status(400).json({
        message: "Staff ID or staff email is required",
      });
    }

    // ✅ Validate staff
    if (!staff || staff.role !== "STAFF") {
      return res.status(400).json({
        message: "Invalid staff selected",
      });
    }

    // ✅ Find complaint
    const complaint = await Complaint.findById(complaintId);
    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    // ✅ Assign
    complaint.assignedTo = staff._id;
    complaint.status = "ASSIGNED";
    await complaint.save();

    const updatedComplaint = await Complaint.findById(complaint._id)
  .populate("createdBy", "name email role")
  .populate("assignedTo", "name email role");

res.status(200).json({
  message: "Complaint assigned successfully",
  complaint: updatedComplaint,
});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



// STAFF: View assigned complaints
const getAssignedComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      assignedTo: req.user.id,
    })
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(complaints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// STAFF: Update complaint status
const updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const complaintId = req.params.id;

    const allowedStatuses = ["IN_PROGRESS", "RESOLVED"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status update" });
    }

    const complaint = await Complaint.findById(complaintId);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    // Ensure staff owns this complaint
    if (complaint.assignedTo.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    complaint.status = status;

    if (status === "RESOLVED") {
      complaint.resolvedAt = new Date();
    }

    await complaint.save();

    res.status(200).json({
      message: "Complaint status updated",
      complaint,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  assignComplaint,
  getAssignedComplaints,
  updateComplaintStatus,
};
