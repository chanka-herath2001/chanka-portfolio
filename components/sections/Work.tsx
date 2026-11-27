"use client";

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { profile, projects } from "../data/content";
import { SectionTag } from "../ui/Motion";
import ProjectCard from "./ProjectCard";
import Skyline from "./Skyline";

/** Pinned section: vertical scroll drives a horizontal track of projects. */
export default function Work() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [idx, setIdx] = useState(1);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const x = useTransform(smooth, [0, 1], [0, -dist]);
  const vel = useVelocity(scrollYProgress);
  const skew = useSpring(useTransform(vel, [-1, 0, 1], [4, 0, -4]), { stiffness: 200, damping: 30 });
  const skyX = useTransform(smooth, [0, 1], ["0%", "-25%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setIdx(Math.min(projects.length, Math.max(1, Math.round(v * (projects.length - 1)) + 1)));
  });

  return (
    <section id="work" ref={section} data-theme-section="dusk" data-label="Selected Work"
      className="relative" style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Dusk sky */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0d0822_0%,#2a1450_45%,#7a2a6e_75%,#ff5fa2_100%)] opacity-60" />
        <motion.div style={{ x: skyX }} className="absolute bottom-0 left-0 h-[42%] w-[200%] text-[#0a061a]">
          <Skyline />
        </motion.div>

        <div className="t-mono relative z-10 flex items-center justify-between px-5 pt-24 md:px-8">
          <SectionTag index="04" label="Selected work" />
          <span className="opacity-70">
            <span className="text-a1">{String(idx).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <motion.div ref={track} style={{ x }} className="relative z-10 flex flex-1 items-center gap-6 pl-5 pr-[10vw] md:gap-10 md:pl-8">
          <div className="flex w-[80vw] shrink-0 flex-col justify-center md:w-[38vw]">
            <h2 className="t-serif text-[17vw] md:text-[8.5vw]">Selected<br /><span className="text-a1">work.</span></h2>
            <p className="mt-6 max-w-sm text-lg opacity-80">
              Products, platforms and research shipped between 2024 and 2026. Keep scrolling.
            </p>
            <motion.span className="t-mono mt-8 text-a1" animate={{ x: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
              Scroll ⟶
            </motion.span>
          </div>

          {projects.map((p, i) => (
            <motion.div key={p.title} style={{ skewX: skew }} className="shrink-0">
              <ProjectCard p={p} i={i} />
            </motion.div>
          ))}

          <a href={profile.links[0].href} target="_blank" rel="noreferrer" data-cursor="Open"
            className="group flex h-[62vh] w-[70vw] shrink-0 flex-col items-center justify-center border border-a1/40 md:w-[28vw]">
            <span className="t-mono opacity-60">Archive</span>
            <span className="t-display mt-4 text-center text-[12vw] transition-colors group-hover:text-a1 md:text-[4.5vw]">More on<br />GitHub ↗</span>
          </a>
        </motion.div>

        <div className="relative z-10 mx-5 mb-8 h-px bg-line md:mx-8">
          <motion.div style={{ scaleX: smooth }} className="absolute inset-0 origin-left bg-a1" />
        </div>
      </div>
    </section>
  );
}
