"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "BEng (Hons) Software Engineering",
    class: "First Class Honours",
    institution: "APIIT Sri Lanka",
    affiliation: "University of Staffordshire, UK",
    period: "Jul 2022 – Oct 2025",
    color: "#FFD700",
    icon: "🎓",
    badge: "FIRST CLASS",
    badgeColor: "#E63946",
  },
  {
    degree: "Higher National Diploma",
    class: "Psychology & Counseling",
    institution: "CIRP",
    affiliation: "Colombo Institute of Research & Psychology",
    period: "Jul 2022 – Oct 2024",
    color: "#7B2D8B",
    icon: "🧠",
    badge: "HND",
    badgeColor: "#7B2D8B",
  },
  {
    degree: "Secondary Education",
    class: "Science Stream",
    institution: "Ananda College, Colombo 10",
    affiliation: "Sri Lanka",
    period: "2007 – 2020",
    color: "#2D6A4F",
    icon: "📚",
    badge: "O/L & A/L",
    badgeColor: "#2D6A4F",
  },
];

const achievements = [
  { label: "2nd Place", sub: "Vetstoria Hackathon 2023", icon: "🏆", color: "#FFD700" },
  { label: "First Class", sub: "BEng Honours Grade", icon: "⭐", color: "#E63946" },
  { label: "IEEE Paper", sub: "Multimodal AI Review", icon: "📄", color: "#1D3557" },
  { label: "2x Symposium", sub: "APIIT Conference Speaker", icon: "🎤", color: "#457B9D" },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 halftone-bg relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#0D0D0D]" />
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#0D0D0D]" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-12">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#E63946] font-bold text-sm mb-2" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.2em" }}>
            BONUS STAGE
          </p>
          <h2 className="section-title text-5xl text-[#0D0D0D]" style={{ fontFamily: "'Bangers', cursive" }}>
            TRAINING ARC
          </h2>
          <p className="mt-6 text-[#1D3557] font-semibold max-w-xl mx-auto">
            Where I levelled up my skills.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0, rotate: i % 2 === 0 ? -2 : 2 }}
              animate={inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 120, delay: i * 0.12 }}
              whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? -1 : 1 }}
              className="cel-card overflow-hidden"
            >
              <div className="px-4 py-4 border-b-4 border-[#0D0D0D] text-center" style={{ background: edu.color }}>
                <div className="text-4xl mb-2">{edu.icon}</div>
                <span
                  className="text-xs px-3 py-1 border-2 border-[#0D0D0D] bg-white text-[#0D0D0D] font-black"
                  style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.1em" }}
                >
                  {edu.badge}
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-black text-[#0D0D0D] text-sm mb-1">{edu.degree}</h3>
                <p className="text-[#E63946] font-black text-sm">{edu.class}</p>
                <p className="text-[#0D0D0D] font-bold text-xs mt-2">{edu.institution}</p>
                <p className="text-[#457B9D] text-xs font-semibold">{edu.affiliation}</p>
                <div className="mt-3 px-3 py-1 border-2 border-[#0D0D0D] bg-gray-50 text-xs font-bold text-[#0D0D0D]" style={{ fontFamily: "'Bangers', cursive" }}>
                  {edu.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-3xl text-[#0D0D0D] mb-6 text-center" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.08em" }}>
            🏅 Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                className="cel-card p-4 text-center"
                style={{ background: ach.color }}
              >
                <div className="text-3xl mb-1">{ach.icon}</div>
                <div className="font-black text-white text-sm" style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.3)" }}>{ach.label}</div>
                <div className="text-xs text-white opacity-80 font-semibold mt-1">{ach.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
