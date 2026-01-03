import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StudentTopBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      className="
        sticky top-0 z-40
        bg-gradient-to-r from-[#0f1222] via-[#14162d] to-[#0f1222]
        border-b border-white/10
        shadow-[0_10px_30px_rgba(0,0,0,0.45)]
      "
    >
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        {/* LEFT */}
        <h1 className="text-lg font-semibold tracking-wide text-white">
  Fix The Issue <span className="text-violet-400">(FTI)</span>
</h1>


        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <div className="text-right leading-tight">
  <p className="text-sm text-gray-400">
    Hello,
  </p>
  <p className="text-sm font-semibold
              bg-gradient-to-r from-violet-400 to-indigo-400
              bg-clip-text text-transparent">
  {user?.name || "Student"}
</p>

</div>


          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="
              px-4 py-2 rounded-full
              font-cta text-sm
              bg-gradient-to-r from-violet-500 to-indigo-500
              shadow-[0_8px_20px_rgba(139,92,246,0.35)]
            "
          >
            Logout
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default StudentTopBar;
