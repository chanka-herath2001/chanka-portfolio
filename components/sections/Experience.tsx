"use client";

import { AnimatePresence, motion, useInView, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { experience } from "../data/content";
import { RevealText, SectionTag } from "../ui/Motion";

type Exp = (typeof experience)[number];

function Entry({ e, i, onActive, active }: { e: Exp; i: number; onActive: (i: number) => void; active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => { if (inView) onActive(i); }, [inView, i, onActive]);

  return (
    <div ref={ref} className="relative pb-24 pl-10 md:pl-16">
      <motion.span animate={{ scale: active ? 1 : 0.5, backgroundColor: active ? "var(--a1)" : "var(--bg)" }}
        className="absolute left-[-7px] top-2 h-3.5 w-3.5 rotate-45 border-2 border-a1" />
      <div className="t-mono flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="text-a2">{e.period}</span>
        <span className="opacity-60">{e.location}</span>
        {e.current && <span className="bg-a1 px-1.5 py-0.5 text-bg">Current</span>}
      </div>
      <motion.h3 animate={{ opacity: active ? 1 : 0.35, x: active ? 0 : -8 }} transition={{ duration: 0.5 }}
        className="t-display mt-4 text-[11vw] md:text-[4.6vw]">
        {e.role}
      </motion.h3>
      <p className="t-serif mt-2 text-3xl text-a1 md:text-4xl">{e.company}</p>
      <ul className="mt-6 max-w-2xl space-y-3">
        {e.bullets.map((b, bi) => (
          <motion.li key={bi} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: bi * 0.08, duration: 0.7 }}
            className="flex gap-3 text-base leading-relaxed opacity-85 md:text-lg">
            <span className="mt-2.5 h-px w-5 shrink-0 bg-a2" />{b}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const list = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 60%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" data-theme-section="u02" data-label="Experience" className="relative py-32 md:py-44">
      <div className="hazard absolute inset-x-0 top-0 h-3 opacity-80" />
      <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-6 px-5 md:px-8">
        <div className="col-span-12 md:col-span-5">
          <div className="md:sticky md:top-28">
            <SectionTag index="03" label="Experience" />
            <RevealText text="Where I've shipped" className="t-serif mt-8 text-[15vw] md:text-[6.5vw]" />
            <div className="mt-12 hidden items-end gap-4 md:flex">
              <div className="t-display relative h-[11vw] overflow-hidden text-[11vw] text-a1">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span key={active} className="block"
                    initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}>
                    {String(active + 1).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="t-mono pb-4 opacity-60">/ {String(experience.length).padStart(2, "0")}<br />Positions</div>
            </div>
          </div>
        </div>

        <div ref={list} className="relative col-span-12 md:col-span-7">
          <div className="absolute bottom-24 left-0 top-0 w-px bg-line" />
          <motion.div style={{ scaleY: line }} className="absolute bottom-24 left-0 top-0 w-px origin-top bg-a1" />
          {experience.map((e, i) => (
            <Entry key={i} e={e} i={i} active={active === i} onActive={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
