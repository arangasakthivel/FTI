import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Clock, Users } from "lucide-react";
import InteractiveGrid from "../components/InteractiveGrid";

const features = [
  {
    icon: AlertCircle,
    title: "Raise Complaints Easily",
    desc: "Report hostel issues in seconds with clear tracking.",
  },
  {
    icon: Clock,
    title: "Fast Resolution",
    desc: "Wardens assign tasks quickly to technicians.",
  },
  {
    icon: Users,
    title: "Transparent Workflow",
    desc: "Students, admins, and staff stay in sync.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white relative overflow-hidden px-6">

      {/* BACKGROUND INTERACTIVE GRID */}
      <InteractiveGrid />

      {/* TOP RIGHT ADMIN / STAFF PORTALS */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-4">

        {/* ADMIN */}
        <motion.button
          onClick={() => navigate("/auth/admin")}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 12px 30px rgba(139,92,246,0.35)",
          }}
          whileTap={{ scale: 0.95 }}
          className="
            px-5 py-2.5 rounded-full
            font-cta
            flex items-center gap-2
            text-sm font-medium
            text-violet-200
            border border-violet-400/40
            bg-black/40 backdrop-blur-xl
            shadow-lg
            hover:bg-violet-500/10
            transition
          "
        >
         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
 Warden 
        </motion.button>

        {/* STAFF */}
        <motion.button
          onClick={() => navigate("/auth/staff")}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 12px 30px rgba(99,102,241,0.35)",
          }}
          whileTap={{ scale: 0.95 }}
          className="
            px-5 py-2.5 rounded-full
            font-cta
            flex items-center gap-2
            text-sm font-medium
            text-indigo-200
            border border-indigo-400/40
            bg-black/40 backdrop-blur-xl
            shadow-lg
            hover:bg-indigo-500/10
            transition
          "
        >
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"/>
</svg>
 Staff
        </motion.button>
      </div>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto pt-28 text-center"
      >
        <motion.h1
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.05em", opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Fix The Issue{" "}
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
            (FTI)
          </span>
        </motion.h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          A modern hostel complaint platform that helps students raise issues,
          wardens manage them, and technicians resolve them efficiently — all in one place.
        </p>

        {/* STUDENT CTA */}
        <motion.button
          onClick={() => navigate("/auth")}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 30px 60px rgba(139,92,246,0.45)",
          }}
          whileTap={{ scale: 0.95 }}
          className="
            relative group px-14 py-4 rounded-full overflow-hidden
            font-cta
            bg-gradient-to-r from-violet-500 to-indigo-500
            text-lg font-semibold
            shadow-[0_20px_40px_rgba(139,92,246,0.35)]
          "
        >
          {/* Shine */}
          <span
            className="
              absolute inset-0 translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition-transform duration-700
              bg-gradient-to-r from-transparent via-white/30 to-transparent
            "
          />
          <span className="relative z-10 flex items-center gap-2">
            Start Complaining <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z"/>
</svg>

          </span>
        </motion.button>
      </motion.div>

      {/* FEATURE CARDS */}
      <div className="relative z-10 max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-8 pb-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-8 text-center
            "
          >
            <f.icon className="mx-auto mb-4 text-violet-400" size={40} />
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
