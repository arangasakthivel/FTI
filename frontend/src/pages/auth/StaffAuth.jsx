import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import CursorGlow from "../components/cursorGlow";

const StaffAuth = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStaffLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      const { token, user } = res.data;

      // 🔐 ROLE CHECK (CRITICAL)
      if (user.role !== "STAFF") {
        setError("You are not authorized as Staff.");
        setLoading(false);
        return;
      }

      // Store auth
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);

      navigate("/staff");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] relative px-6">
      {/* ✅ CURSOR ANIMATION */}
      <CursorGlow />

      {/* BACKGROUND */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[180px]" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-10 rounded-3xl z-10"
      >
        <h2
          className="
            text-3xl font-extrabold text-center mb-6
            bg-gradient-to-r from-violet-400 to-indigo-400
            bg-clip-text text-transparent
          "
        >
          Staff Login
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <input
          className="auth-input"
          placeholder="Staff Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="auth-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStaffLogin}
          disabled={loading}
          className="auth-btn mt-4"
        >
          {loading ? "Signing in..." : "Login as Staff"}
        </motion.button>

        <p
          className="text-sm text-gray-400 text-center mt-6 cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </p>
      </motion.div>
    </div>
  );
};

export default StaffAuth;
