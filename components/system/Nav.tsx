"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, sections } from "../data/content";
import { scrollToId, useLenis } from "./SmoothScroll";

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Colombo", hour12: false }));
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{t || "--:--:--"} LKT</span>;
}

export default function Nav() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("Index");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const pctText = useTransform(scrollYProgress, (v) => String(Math.round(v * 100)).padStart(3, "0"));

  useEffect(() => {
    const h = (e: Event) => setCurrent((e as CustomEvent<string>).detail || "Index");
    window.addEventListener("section-change", h);
    return () => window.removeEventListener("section-change", h);
  }, []);

  const go = (id: string) => { setOpen(false); lenis?.start(); scrollToId(lenis, id); };
  useEffect(() => { if (open) lenis?.stop(); else lenis?.start(); }, [open, lenis]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] mix-blend-difference text-white">
        <div className="t-mono flex items-center justify-between px-5 py-4 md:px-8">
          <button onClick={() => go("top")} className="flex items-center gap-2" data-cursor="Top">
            <span className="grid h-7 w-7 place-items-center border border-white text-[0.65rem] font-bold">CH</span>
            <span className="hidden sm:inline">Chanka Herath</span>
          </button>
          <div className="hidden items-center gap-3 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-white blink" />
            <AnimatePresence mode="wait">
              <motion.span key={current} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }}>
                {current}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden lg:inline"><Clock /></span>
            <button onClick={() => setOpen((o) => !o)} className="border border-white px-3 py-1.5" data-cursor={open ? "Close" : "Menu"}>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Side progress rail */}
      <div className="pointer-events-none fixed bottom-6 right-5 z-[80] hidden flex-col items-end gap-2 mix-blend-difference text-white md:flex">
        <motion.span className="t-mono">{pctText}</motion.span>
        <div className="relative h-28 w-px bg-white/25">
          <motion.div className="absolute inset-x-0 top-0 origin-top bg-white" style={{ scaleY: progress, height: "100%" }} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-[70] flex flex-col justify-end bg-[#0b0b0d] p-5 text-[#f2ebe0] md:p-10"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="hex-bg absolute inset-0 opacity-60" />
            <ul className="relative">
              {sections.map((s, i) => (
                <li key={s.id} className="overflow-hidden border-t border-white/10">
                  <motion.button
                    onClick={() => go(s.id)}
                    initial={{ y: "100%" }} animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex w-full items-baseline gap-4 py-1 text-left md:gap-8"
                  >
                    <span className="t-mono text-[#ff5a1f]">{String(i).padStart(2, "0")}</span>
                    <span className="t-display text-[11vw] transition-[color,transform] duration-500 group-hover:translate-x-4 group-hover:text-[#ff5a1f] md:text-[6.5vw]">
                      {s.label}
                    </span>
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="t-mono relative mt-8 flex flex-wrap justify-between gap-4 text-[#f2ebe0]/60">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{profile.coords}</span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
