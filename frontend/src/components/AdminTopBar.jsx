import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AdminTopBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      className="
        fixed top-0 left-0 right-0 z-40
        h-16 px-10
        flex items-center justify-between
        bg-[#0b0f1a]/80 backdrop-blur-xl
        border-b border-white/10
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <span className="text-xl font-extrabold tracking-wide">
          Fix The Issue
          <span className="text-violet-400"> (FTI)</span>
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <span className="text-sm text-gray-300">
          Hello, <span className="text-white font-medium">
            {user?.name || "Admin"}
          </span>
        </span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="
            px-4 py-2 rounded-full text-sm font-semibold
            bg-gradient-to-r from-violet-500 to-indigo-500
          "
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
};

export default AdminTopBar;
