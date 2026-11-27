"use client";

import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "framer-motion";
import { useRef } from "react";

/**
 * Infinite rolling band. Base drift plus a kick from scroll velocity —
 * scroll harder and it spins faster, scroll up and it reverses.
 */
export default function Marquee({ children, speed = 2, className = "" }: {
  children: React.ReactNode; speed?: number; className?: string;
}) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(vel, [-1000, 0, 1000], [-4, 0, 4], { clamp: false });
  const x = useTransform(base, (v) => `${wrap(-25, -50, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    let move = dir.current * speed * (delta / 1000);
    const f = factor.get();
    if (f < -0.05) dir.current = -1;
    else if (f > 0.05) dir.current = 1;
    move += move * Math.abs(f);
    base.set(base.get() + move);
  });

  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex shrink-0 flex-nowrap" style={{ x }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i > 0}>{children}</div>
        ))}
      </motion.div>
    </div>
  );
}
