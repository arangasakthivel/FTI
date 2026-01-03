import { useEffect, useState } from "react";

const COLS = 12;
const ROWS = 10;
const TILE_SIZE = 64;

const InteractiveGrid = () => {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
<div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-6 md:grid-cols-12 gap-2 p-4">
      {Array.from({ length: COLS * ROWS }).map((_, i) => (
        <Tile key={i} mouse={mouse} />
      ))}
    </div>
  );
};

const Tile = ({ mouse }) => {
  const [el, setEl] = useState(null);

  let style = {};

  if (el) {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = mouse.x - cx;
    const dy = mouse.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const maxDist = 140;
    const intensity = Math.max(0, 1 - dist / maxDist);

    style = {
      transform: `translateY(${-intensity * 10}px)`,
      backgroundColor: `rgba(255,255,255,${0.04 + intensity * 0.12})`,
      boxShadow:
        intensity > 0
          ? `0 ${intensity * 18}px ${intensity * 36}px rgba(139,92,246,0.35)`
          : "none",
    };
  }

  return (
    <div
      ref={setEl}
      style={style}
      className="h-16 rounded-xl
                 transition-none
                 will-change-transform"
    />
  );
};

export default InteractiveGrid;
