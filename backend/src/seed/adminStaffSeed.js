const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB Atlas");

    // Optional: clear existing admin/staff to avoid duplicates
    await User.deleteMany({ role: { $in: ["ADMIN", "STAFF"] } });

    const adminPassword = await bcrypt.hash("admin123", 10);
    const staffPassword = await bcrypt.hash("staff123", 10);

    await User.create([
      // 🔐 ADMIN
      {
        name: "Warden Admin",
        email: "warden@fti.com",
        password: adminPassword,
        role: "ADMIN",
      },

      // 🧑‍🔧 STAFF (CATEGORY BASED)
      {
        name: "Technician Staff",
        email: "staff1@fti.com",
        password: staffPassword,
        role: "STAFF",
        department: "electricity",
      },
      {
        name: "Water Staff",
        email: "water@fti.com",
        password: staffPassword,
        role: "STAFF",
        department: "water",
      },
      {
        name: "Internet Staff",
        email: "internet@fti.com",
        password: staffPassword,
        role: "STAFF",
        department: "internet",
      },
      {
        name: "Maintenance Staff",
        email: "maintenance@fti.com",
        password: staffPassword,
        role: "STAFF",
        department: "maintenance",
      },
      {
        name: "Cleanliness Staff",
        email: "cleanliness@fti.com",
        password: staffPassword,
        role: "STAFF",
        department: "cleanliness",
      },
    ]);

    console.log("✅ Admin & Category-based Staff created");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seed();
