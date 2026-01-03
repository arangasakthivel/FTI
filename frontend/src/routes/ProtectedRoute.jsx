import { Navigate } from "react-router-dom";

const roleRedirectMap = {
  STUDENT: "/student",
  ADMIN: "/admin",
  STAFF: "/staff",
};

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // ❌ Not logged in
  if (!token || !role) {
    return <Navigate to="/" replace />;
  }

  // ❌ Logged in but wrong role
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={roleRedirectMap[role] || "/"} replace />;
  }

  // ✅ Allowed
  return children;
};

export default ProtectedRoute;
