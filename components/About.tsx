"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const facts = [
  { icon: "🎓", label: "First Class Honours", sub: "BEng Software Engineering" },
  { icon: "🧠", label: "Psychology + Code", sub: "HND Psychology & HCI" },
  { icon: "🏆", label: "Hackathon Winner", sub: "2nd Place – Vetstoria 2023" },
  // { icon: "🔬", label: "Published Research", sub: "IEEE-style review paper" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 halftone-bg-dark relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#FFD700] border-b-4 border-[#0D0D0D]" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FFD700] border-t-4 border-[#0D0D0D]" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Photo panel */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 80 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="comic-panel-lg overflow-hidden w-60 h-72 sm:w-75 sm:h-90">
              <Image
                src="/images/chanka.jpeg"
                alt="Chanka Herath"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1D3557] opacity-10 pointer-events-none" />
            </div>
            {/* Rotated caption */}
            <div
              className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-[#E63946] border-4 border-[#0D0D0D] px-3 py-1 sm:px-4 sm:py-2 shadow-[4px_4px_0_#0D0D0D] rotate-[4deg]"
              style={{ fontFamily: "'Bangers', cursive", color: "white", letterSpacing: "0.08em", fontSize: "0.85rem" }}
            >
              THAT&apos;S ME!
            </div>
            {/* Decorative square */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full border-4 border-[#FFD700] -z-10" />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 80, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          {/* Section title */}
          <div>
            <p className="text-[#FFD700] font-bold text-sm mb-2" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.2em" }}>
              CHAPTER 01
            </p>
            <h2 className="section-title text-5xl text-white" style={{ fontFamily: "'Bangers', cursive" }}>
              ABOUT ME
            </h2>
          </div>

          {/* Body text in comic style */}
          <div className="speech-bubble p-5 mt-4">
            <p className="text-[#0D0D0D] text-base leading-relaxed" style={{ fontFamily: "'Comic Neue', cursive" }}>
              I&apos;m a <strong>Software Engineer</strong> with a First Class Honours in BEng Software Engineering from
              APIIT Sri Lanka (University of Staffordshire). I build scalable full-stack applications,
              cloud-native architectures on AWS, and ML-powered products.
            </p>
            <p className="text-[#0D0D0D] text-base leading-relaxed mt-3" style={{ fontFamily: "'Comic Neue', cursive" }}>
              What makes me different? I also hold an <strong>HND in Psychology & Counseling</strong> — giving me
              a unique edge in UX, Human-Computer Interaction, and Emotional Design that goes beyond just the code.
            </p>
          </div>

          {/* Fact cards */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ scale: 0, rotate: -5 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 + i * 0.1 }}
                className="cel-card p-3 bg-[#FFFDF0] flex flex-col gap-1"
              >
                <span className="text-2xl">{fact.icon}</span>
                <span className="font-black text-sm text-[#0D0D0D] leading-tight">{fact.label}</span>
                <span className="text-xs text-[#457B9D] font-semibold">{fact.sub}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
