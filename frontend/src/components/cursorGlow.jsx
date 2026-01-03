import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0
                 w-[320px] h-[320px] rounded-full
                 bg-gradient-to-r from-blue-500/25 to-purple-600/25
                 blur-[140px]"
      animate={{
        x: position.x - 160,
        y: position.y - 160,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 30,
        mass: 0.6,
      }}
    />
  );
};

export default CursorGlow;
