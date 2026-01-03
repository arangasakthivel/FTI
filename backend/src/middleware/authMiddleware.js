const jwt = require("jsonwebtoken");

// Verify JWT token
const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token invalid" });
  }
};

// Role-based access
const isStudent = (req, res, next) => {
  if (req.user.role !== "STUDENT") {
    return res.status(403).json({ message: "Student access only" });
  }
  next();
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};

const isStaff = (req, res, next) => {
  if (req.user.role !== "STAFF") {
    return res.status(403).json({ message: "Staff access only" });
  }
  next();
};

module.exports = {
  protect,
  isStudent,
  isAdmin,
  isStaff,
};
