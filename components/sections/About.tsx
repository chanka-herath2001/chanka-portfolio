"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { about } from "../data/content";
import { Counter, RevealText, ScrubText, SectionTag } from "../ui/Motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bigY = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);
  const stripeX = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const plate = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);

  return (
    <section id="about" ref={ref} data-theme-section="u01" data-label="Profile"
      className="relative overflow-hidden px-5 py-32 md:px-8 md:py-48">
      {/* Oversized numeral, outlined */}
      <motion.span style={{ y: bigY }} aria-hidden
        className="t-serif pointer-events-none absolute -right-[4vw] top-0 select-none text-[48vw] leading-none text-transparent [-webkit-text-stroke:1px_var(--a2)] opacity-60">
        01
      </motion.span>

      {/* Armour striping */}
      <motion.div style={{ x: stripeX }} aria-hidden className="pointer-events-none absolute bottom-24 left-0 flex w-[140%] -rotate-6 flex-col gap-2 opacity-90">
        <div className="h-3 bg-a1" />
        <div className="h-8 bg-a2/60" />
        <div className="h-1 bg-a1/60" />
      </motion.div>

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <SectionTag index="01" label="Profile" />
            <motion.div style={{ scaleY: plate }} className="mt-10 hidden h-64 w-px origin-top bg-a1 md:block" />
            <p className="t-mono mt-6 hidden max-w-[22ch] opacity-60 md:block">
              Engineering · Cloud · ML · Human-centred design
            </p>
          </div>

          <div className="col-span-12 md:col-span-9">
            <RevealText as="h2" text="Engineered with intent." className="t-serif mb-12 text-[13vw] text-a1 md:text-[7.5vw]" />
            <ScrubText text={about.statement} className="max-w-[28ch] text-[7vw] font-semibold leading-[1.08] tracking-tight md:text-[3.4vw]" />
          </div>
        </div>

        <div className="mt-28 grid grid-cols-2 border-t border-line md:grid-cols-4">
          {about.stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-b border-line p-5 md:border-b-0 md:border-r md:p-8 md:last:border-r-0">
              <span className="t-mono text-a1">{String(i + 1).padStart(2, "0")}</span>
              <div className="t-display mt-6 text-[18vw] md:text-[8vw]">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="t-mono mt-3 opacity-70">{s.label}</p>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-a1 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
