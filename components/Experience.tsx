"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "DigiMe Ads",
    period: "Mar 2026 – Present",
    location: "Sri Lanka",
    color: "#FFD700",
    tag: "CURRENT",
    tagColor: "#E63946",
    bullets: [
      "Working as a software engineer at a startup, contributing to product development and engineering initiatives.",
    ],
    icon: "🚀",
  },
  {
    role: "Associate Software Engineer",
    company: "Taurgo Limited",
    period: "Jan 2025 – Jun 2025",
    location: "UK (Remote)",
    color: "#1D3557",
    tag: "ASSOCIATE",
    tagColor: "#457B9D",
    bullets: [
      "Engineered a modular CRM system in React for partner clients to manage leads and auto-generate inspection reports, reducing manual work significantly.",
      "Built a job booking interface streamlining tour scheduling, and improved mobile-web workflow automation via REST APIs.",
      "Conducted user testing to refine mobile UX, ensuring high adoption among field agents.",
    ],
    icon: "💼",
  },
  {
    role: "Intern Software Engineer",
    company: "Taurgo Limited",
    period: "Jul 2024 – Jan 2025",
    location: "UK (Remote)",
    color: "#457B9D",
    tag: "INTERN",
    tagColor: "#1D3557",
    bullets: [
      "Rebuilt company website frontend in React, improving UI responsiveness and reducing load times.",
      "Developed a 360° Virtual Tour App in Flutter and an Inventory & Inspection Reporting App (Flutter, MongoDB, AWS).",
      "Collaborated with UI/UX team; designed clean, modern interfaces optimized for conversions.",
      "Conducted QA testing across Android/iOS devices to ensure performance and usability.",
    ],
    icon: "🛠️",
  },
  {
    role: "Intern Web Developer",
    company: "Kingslake",
    period: "Jun 2024 – Jul 2024",
    location: "Sri Lanka",
    color: "#2D6A4F",
    tag: "INTERN",
    tagColor: "#2D6A4F",
    bullets: [
      "Delivered UI/UX improvements to the Kingslake Blue Line Balancing site using Adobe XD.",
      "Developed CRUD functions for EazyPay, improving user interaction and data management.",
      "Designed a new user-friendly landing page for the Kingslake Blue site.",
    ],
    icon: "🌐",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ background: "#FFFDF0" }}>
      {/* Comic panel vertical lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#0D0D0D] opacity-10 hidden lg:block" />

      <div ref={ref} className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#E63946] font-bold text-sm mb-2" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.2em" }}>
            CHAPTER 03
          </p>
          <h2 className="section-title text-5xl text-[#0D0D0D]" style={{ fontFamily: "'Bangers', cursive" }}>
            ORIGIN STORY
          </h2>
          <p className="mt-6 text-[#1D3557] font-semibold max-w-xl mx-auto">
            Every hero has a journey. Here&apos;s mine.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-1 bg-[#0D0D0D]" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.12 }}
                className="flex gap-3 sm:gap-6 items-start"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-10 sm:w-16">
                  <div
                    className="w-9 h-9 sm:w-12 sm:h-12 border-4 border-[#0D0D0D] flex items-center justify-center text-base sm:text-xl z-10 relative shadow-[3px_3px_0_#0D0D0D]"
                    style={{ background: exp.color }}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 cel-card overflow-hidden cursor-pointer"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {/* Header */}
                  <div className="p-4 border-b-4 border-[#0D0D0D] flex flex-wrap items-start justify-between gap-2" style={{ background: exp.color }}>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-xl text-white" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em", textShadow: "2px 2px 0 rgba(0,0,0,0.3)" }}>
                          {exp.role}
                        </h3>
                        {exp.tag === "CURRENT" && (
                          <span className="text-xs px-2 py-0.5 animate-pulse border-2 border-[#0D0D0D]" style={{ background: exp.tagColor, color: "white", fontFamily: "'Bangers', cursive" }}>
                            ● CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-white font-black text-sm opacity-90">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="text-xs font-bold border-2 border-[#0D0D0D] px-2 py-1 bg-white text-[#0D0D0D]" style={{ fontFamily: "'Bangers', cursive", whiteSpace: "nowrap" }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Expandable bullets */}
                  <motion.div
                    initial={false}
                    animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <ul className="p-4 flex flex-col gap-2">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2 items-start text-sm text-[#0D0D0D] font-semibold">
                          <span className="text-[#E63946] mt-0.5 flex-shrink-0">▶</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Expand hint */}
                  <div className="px-4 pb-2 text-xs text-[#457B9D] font-bold" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.08em" }}>
                    {expanded === i ? "▲ COLLAPSE" : "▼ EXPAND"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
