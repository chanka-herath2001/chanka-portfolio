"use client";

import { motion } from "framer-motion";
import { education, honours, research } from "../data/content";
import { RevealText, SectionTag } from "../ui/Motion";

const ease = [0.22, 1, 0.36, 1] as const;

function Row({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.9, delay: i * 0.08, ease }}
      className="group relative border-t border-fg/20 py-8"
    >
      <span className="absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 bg-a1 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-x-100" />
      {children}
    </motion.div>
  );
}

export default function Research() {
  return (
    <section id="research" data-theme-section="proto" data-label="Research" className="relative overflow-hidden py-32 md:py-44">
      {/* Blueprint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8">
        <SectionTag index="05" label="Research & education" />
        <RevealText text="Research & foundations" className="t-serif mt-8 max-w-[14ch] text-[15vw] md:text-[7.5vw]" />

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-mono mb-4 text-a1">Publications</p>
            {research.map((r, i) => (
              <Row key={r.title} i={i}>
                <div className="t-mono flex gap-4 opacity-60"><span>{r.year}</span><span>{r.type}</span></div>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-3xl">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm opacity-70">{r.venue}</p>
              </Row>
            ))}
          </div>

          <div className="lg:col-span-5">
            <p className="t-mono mb-4 text-a1">Education</p>
            {education.map((e, i) => (
              <Row key={e.degree} i={i}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold leading-snug">{e.degree}</h3>
                  <span className="t-mono shrink-0 opacity-60">{e.period}</span>
                </div>
                <p className="mt-2 text-sm opacity-70">{e.place}</p>
                <span className="t-mono mt-3 inline-block border border-a2 px-2 py-0.5 text-a2">{e.note}</span>
              </Row>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px bg-fg/15 md:grid-cols-4">
          {honours.map((h, i) => (
            <motion.div key={h.label}
              initial={{ clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }} viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.12, ease: [0.76, 0, 0.24, 1] }}
              className="group bg-bg p-6 transition-colors duration-500 hover:bg-a1 hover:text-bg md:p-8">
              <span className="t-mono opacity-60">H—{String(i + 1).padStart(2, "0")}</span>
              <p className="t-display mt-8 text-4xl md:text-5xl">{h.label}</p>
              <p className="mt-2 text-sm opacity-70">{h.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
