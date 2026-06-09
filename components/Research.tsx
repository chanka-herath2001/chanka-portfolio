"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const publications = [
  {
    title: "Multimodal Generative AI Systems: A Critical Review of Sora, Gemini, and Emerging Architectures",
    year: "2025",
    type: "IEEE-Style Review Paper",
    venue: "InnovateX: Emerging Tech Poster Symposium, APIIT Colombo",
    color: "#1D3557",
    icon: "📄",
    bullets: [
      "Authored a critical IEEE-style review paper analysing multimodal AI architectures.",
      "Focused on challenges in text-to-video generation, scalability, semantic alignment, and controllability.",
      "Proposed hybrid transformer-diffusion architectures and benchmarking strategies for future research.",
    ],
  },
  {
    title: "Cross-Domain Recommendation System Linking Music & Movie Preferences Using Emotion Analysis",
    year: "2025",
    type: "Final Year Thesis",
    venue: "Final Year Project Symposium 2025 – 'From Vision to Reality', APIIT Colombo",
    color: "#E63946",
    icon: "🎓",
    bullets: [
      "Investigated hybrid sentiment-based recommendation frameworks using multimodal datasets (Mood4Lyrics, DEAM, TMDB).",
      "Conducted empirical testing on ensemble weightings; evaluated accuracy vs. user surveys.",
      "Proposed improvements in explainable recommendation design.",
    ],
  },
];

const conferences = [
  {
    title: "Final Year Project Symposium 2025 – 'From Vision to Reality'",
    venue: "APIIT, Colombo",
    year: "2025",
    role: "Presenter",
    color: "#E63946",
  },
  {
    title: "InnovateX: Emerging Tech Poster Symposium",
    venue: "APIIT, Colombo",
    year: "2025",
    role: "Poster Presenter",
    color: "#457B9D",
  },
];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-24 halftone-bg-dark relative overflow-hidden">
      {/* Side borders */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#FFD700] border-b-4 border-[#0D0D0D]" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FFD700] border-t-4 border-[#0D0D0D]" />

      <div ref={ref} className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#FFD700] font-bold text-sm mb-2" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.2em" }}>
            CHAPTER 05
          </p>
          <h2 className="section-title text-5xl text-white" style={{ fontFamily: "'Bangers', cursive" }}>
            THE LAB
          </h2>
          <p className="mt-6 text-[#A8DADC] font-semibold max-w-xl mx-auto">
            Research, publications & conference appearances.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="flex flex-col gap-8 mb-16">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: i * 0.15 }}
              className="cel-card overflow-hidden bg-white"
            >
              {/* Header */}
              <div className="px-5 py-4 border-b-4 border-[#0D0D0D] flex items-start gap-4" style={{ background: pub.color }}>
                <span className="text-4xl flex-shrink-0">{pub.icon}</span>
                <div>
                  <div className="flex gap-2 flex-wrap items-center mb-1">
                    <span className="text-xs px-2 py-0.5 bg-white text-[#0D0D0D] border-2 border-[#0D0D0D] font-black" style={{ fontFamily: "'Bangers', cursive" }}>
                      {pub.type}
                    </span>
                    <span className="text-xs text-white font-bold opacity-80">{pub.year}</span>
                  </div>
                  <h3 className="text-lg text-white leading-snug" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.03em", textShadow: "1px 1px 0 rgba(0,0,0,0.3)" }}>
                    {pub.title}
                  </h3>
                  <p className="text-xs text-white opacity-80 font-semibold mt-1">📍 {pub.venue}</p>
                </div>
              </div>
              {/* Bullets */}
              <ul className="p-5 flex flex-col gap-2">
                {pub.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-2 items-start text-sm text-[#0D0D0D] font-semibold">
                    <span className="text-[#E63946] mt-0.5 flex-shrink-0">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Conferences */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl text-[#FFD700] mb-6 text-center" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.08em" }}>
            🎤 Conferences & Symposiums
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {conferences.map((conf, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? -1 : 1 }}
                className="cel-card bg-white overflow-hidden"
              >
                <div className="h-2" style={{ background: conf.color }} />
                <div className="p-4">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-black text-sm text-[#0D0D0D] leading-tight">{conf.title}</h4>
                    <span className="text-xs font-bold px-2 py-0.5 border-2 border-[#0D0D0D] flex-shrink-0" style={{ background: conf.color, color: "white", fontFamily: "'Bangers', cursive" }}>
                      {conf.year}
                    </span>
                  </div>
                  <p className="text-xs text-[#457B9D] font-semibold">📍 {conf.venue}</p>
                  <p className="text-xs font-bold text-[#0D0D0D] mt-2">Role: {conf.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
