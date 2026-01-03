import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0b0f1a] text-white">

      {/* Background gradients */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[420px] rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-10"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center mb-2"
        >
          Welcome Back
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 0.4 }}
          className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
        />

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="you@hostel.com"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
          />
        </div>

        {/* Password Field */}
        <div className="mb-8">
          <label className="block text-sm text-gray-400 mb-2">
            Password
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="••••••••"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
          />
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg shadow-lg shadow-blue-500/30"
        >
          Sign In
        </motion.button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Hostel Complaint Management System
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
