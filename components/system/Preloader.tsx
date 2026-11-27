"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "Initialising interface",
  "Loading modules · frontend / backend / cloud / ml",
  "Calibrating motion systems",
  "Linking project archive",
  "All systems nominal",
];

/** Boot sequence; the two halves part like hangar doors once loading completes. */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 9 + 3);
      setPct(Math.floor(p));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => { setOpen(true); document.documentElement.style.overflow = ""; onDone(); }, 350);
      }
    }, 70);
    return () => clearInterval(id);
  }, [onDone]);

  const shown = Math.min(lines.length, Math.floor(pct / 20) + 1);
  const ease = [0.76, 0, 0.24, 1] as const;

  return (
    <AnimatePresence>
      {!open && (
        <motion.div key="pre" className="fixed inset-0 z-[120] text-[#f2ebe0]" exit={{ pointerEvents: "none" }}>
          <motion.div className="absolute inset-x-0 top-0 h-1/2 bg-[#0b0b0d]" exit={{ y: "-100%" }} transition={{ duration: 1, ease }} />
          <motion.div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0b0b0d]" exit={{ y: "100%" }} transition={{ duration: 1, ease }} />
          <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
            <div className="t-mono flex justify-between text-[#ff5a1f]">
              <span>CH / Portfolio System</span><span>Build 2026.11</span>
            </div>
            <div className="mx-auto w-full max-w-xl">
              <div className="t-mono mb-6 space-y-1.5 text-[#f2ebe0]/70">
                {lines.slice(0, shown).map((l, i) => (
                  <motion.p key={l} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <span className="text-[#ff5a1f]">{String(i + 1).padStart(2, "0")}</span>&nbsp;&nbsp;{l}
                    {i === shown - 1 && pct < 100 && <span className="blink">_</span>}
                  </motion.p>
                ))}
              </div>
              <div className="relative h-[3px] w-full bg-white/10">
                <div className="absolute inset-y-0 left-0 bg-[#ff5a1f] transition-[width] duration-100" style={{ width: `${pct}%` }} />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span className="t-mono text-[#f2ebe0]/50">Colombo · LK</span>
              <span className="t-display text-[22vw] leading-none text-[#ff5a1f] md:text-[12vw]">
                {String(pct).padStart(3, "0")}
              </span>
            </div>
          </motion.div>
          <motion.div className="absolute left-0 right-0 top-1/2 h-px bg-[#ff5a1f]" exit={{ scaleX: 0 }} transition={{ duration: 0.4 }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
