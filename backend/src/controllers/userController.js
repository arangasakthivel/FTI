const User = require("../models/User");

// ADMIN: Get all staff users
const getAllStaff = async (req, res) => {
  try {
    const staff = await User.find({ role: "STAFF" })
      .select("_id name email");

    res.status(200).json(staff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllStaff,
};
