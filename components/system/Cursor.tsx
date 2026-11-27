"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Targeting reticle that trails the pointer and locks on to interactive elements. */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [enabled, setEnabled] = useState(false);
  const [lock, setLock] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");
    const move = (e: PointerEvent) => {
      setEnabled(true);
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement).closest<HTMLElement>("a,button,[data-cursor]");
      setLock(!!t);
      setLabel(t?.dataset.cursor ?? "");
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-a1"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}>
        <motion.div
          animate={{ width: lock ? 64 : 34, height: lock ? 64 : 34, rotate: lock ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="relative"
        >
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="absolute h-2.5 w-2.5 border-a1"
              style={{
                top: i < 2 ? 0 : undefined, bottom: i >= 2 ? 0 : undefined,
                left: i % 2 === 0 ? 0 : undefined, right: i % 2 === 1 ? 0 : undefined,
                borderTopWidth: i < 2 ? 1.5 : 0, borderBottomWidth: i >= 2 ? 1.5 : 0,
                borderLeftWidth: i % 2 === 0 ? 1.5 : 0, borderRightWidth: i % 2 === 1 ? 1.5 : 0,
              }} />
          ))}
        </motion.div>
        {label && (
          <span className="t-mono absolute left-10 top-6 whitespace-nowrap bg-a1 px-1.5 py-0.5 text-[0.6rem] text-bg">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
