"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../data/content";
import Marquee from "../ui/Marquee";
import { RevealText, SectionTag } from "../ui/Motion";

const all = skillGroups.flatMap((g) => g.skills);
const rowA = all.slice(0, Math.ceil(all.length / 2));
const rowB = all.slice(Math.ceil(all.length / 2));

export default function Capabilities() {
  return (
    <section id="capabilities" data-theme-section="u00" data-label="Capabilities" className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionTag index="02" label="Capabilities" />
            <RevealText text="Systems I build with" className="t-serif mt-8 max-w-[12ch] text-[15vw] md:text-[8vw]" />
          </div>
          <p className="max-w-sm text-lg leading-relaxed opacity-80">
            Six disciplines, one toolkit — from interface to infrastructure, and the research that connects them.
          </p>
        </div>
      </div>

      {/* Rolling bands — react to scroll speed and direction */}
      <div className="mt-20 -rotate-2 space-y-1">
        <div className="bg-fg py-3 text-bg">
          <Marquee speed={2.2}>
            {rowA.map((s) => (
              <span key={s} className="t-display flex items-center gap-6 pr-6 text-[9vw] md:text-[5vw]">
                {s}<span className="inline-block h-[0.35em] w-[0.35em] bg-a1" />
              </span>
            ))}
          </Marquee>
        </div>
        <div className="py-3">
          <Marquee speed={-1.6}>
            {rowB.map((s) => (
              <span key={s} className="t-display flex items-center gap-6 pr-6 text-[9vw] text-transparent [-webkit-text-stroke:1.5px_var(--fg)] md:text-[5vw]">
                {s}<span className="inline-block h-[0.35em] w-[0.35em] rotate-45 bg-a2" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="truss mt-16 h-10 opacity-70" />

      {/* Module plates */}
      <div className="mx-auto mt-16 grid max-w-[1500px] gap-4 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <motion.article key={g.code}
            initial={{ opacity: 0, y: 60, rotateX: -25 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 900 }}
            data-cursor="Module"
            className="group relative overflow-hidden border-2 border-fg bg-[#f6f1e7] p-6 transition-colors duration-500 hover:bg-a1">
            <div className="flex items-start justify-between">
              <div className="border-2 border-fg bg-white px-2 pb-1 pt-2 text-center">
                <span className="t-mono block text-[0.55rem]">Module</span>
                <span className="t-serif block text-6xl text-a2">{g.code}</span>
              </div>
              <span className="t-mono opacity-60">{g.skills.length} items</span>
            </div>
            <h3 className="t-display mt-10 text-5xl">{g.category}</h3>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {g.skills.map((s) => (
                <li key={s} className="t-mono border border-fg/40 px-2 py-1 text-[0.62rem] transition-colors group-hover:border-fg">
                  {s}
                </li>
              ))}
            </ul>
            <span className="hazard absolute -right-8 top-0 h-full w-6 opacity-0 transition-all duration-500 group-hover:right-0 group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
