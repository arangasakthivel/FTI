const Complaint = require("../models/Complaint");

const getAnalytics = async (req, res) => {
  try {
    const total = await Complaint.countDocuments();

    const pending = await Complaint.countDocuments({ status: "PENDING" });
    const assigned = await Complaint.countDocuments({ status: "ASSIGNED" });
    const resolved = await Complaint.countDocuments({ status: "RESOLVED" });

    const byCategory = await Complaint.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      total,
      pending,
      assigned,
      resolved,
      byCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to load analytics" });
  }
};

module.exports = { getAnalytics };
