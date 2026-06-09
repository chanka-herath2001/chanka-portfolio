"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen halftone-bg flex items-center overflow-hidden pt-16">
      {/* Comic panel border lines */}
      <div className="absolute inset-0 border-8 border-[#0D0D0D] pointer-events-none z-10" />

      {/* Speed lines background */}
      <div className="absolute inset-0 speed-lines opacity-40" />

      {/* Top stripe accent */}
      <div className="absolute top-0 left-0 right-0 h-3 stripe-accent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-3 stripe-accent z-10" />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-20">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6">
          {/* "POW" burst label */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: -8 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="self-start"
          >
            <div
              className="bg-[#E63946] text-white px-5 py-2 border-4 border-[#0D0D0D] shadow-[4px_4px_0_#0D0D0D] rotate-[-3deg]"
              style={{ fontFamily: "'Bangers', cursive", fontSize: "1.1rem", letterSpacing: "0.1em" }}
            >
              ⚡ SOFTWARE ENGINEER
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <h1
              className="text-5xl sm:text-7xl md:text-8xl text-[#0D0D0D] leading-none"
              style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.03em" }}
            >
              CHANKA
              <br />
              <span className="text-[#E63946]">HERATH</span>
            </h1>
          </motion.div>

          {/* Speech bubble subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="speech-bubble px-6 py-4 mt-4 self-start max-w-md"
          >
            <p className="font-bold text-[#0D0D0D] text-lg leading-snug" style={{ fontFamily: "'Comic Neue', cursive" }}>
              Full-Stack Dev · UI/UX Thinker
              <br />
              <span className="text-[#457B9D] text-sm">First Class Honours · BEng Software Engineering</span>
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="cel-btn px-8 py-3 bg-[#FFD700] text-[#0D0D0D] rounded-none"
            >
              See My Work!
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="cel-btn px-8 py-3 bg-[#1D3557] text-white rounded-none"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 mt-2"
          >
            {[
              { label: "GitHub", url: "https://github.com/chanka-herath2001", color: "#0D0D0D" },
              { label: "LinkedIn", url: "https://www.linkedin.com/in/chanka-herath/", color: "#1D3557" },
              { label: "Email", url: "mailto:chankaherath2001@gmail.com", color: "#E63946" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target={s.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="skill-badge text-sm px-3 py-1"
                style={{ background: s.color, color: "white" }}
              >
                {s.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo in comic panel */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* "BOOM" label floating */}
            <motion.div
              animate={{ rotate: [8, 12, 8], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 z-30 bg-[#FFD700] border-4 border-[#0D0D0D] shadow-[4px_4px_0_#0D0D0D] px-3 py-1 sm:px-4 sm:py-2"
              style={{ fontFamily: "'Bangers', cursive", fontSize: "1.1rem", letterSpacing: "0.1em" }}
            >
              FIRST CLASS!
            </motion.div>

            {/* Main photo panel */}
            <div className="comic-panel-lg overflow-hidden relative w-64 h-80 sm:w-80 sm:h-100">
              {/* Halftone overlay */}
              <div className="absolute inset-0 bg-[#FFD700] opacity-10 z-10 pointer-events-none" />
              <Image
                src="/images/comic2.png"
                alt="Chanka Herath presenting"
                fill
                className="object-cover"
                style={{ filter: "contrast(1.05)" }}
              />
              {/* Bottom caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0D0D0D] text-[#FFD700] text-center py-2 border-t-4 border-[#FFD700] z-20"
                style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.1em", fontSize: "1rem" }}>
                GRADUATED DECEMBER 2025
              </div>
            </div>

            {/* Decorative dots */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 bg-[#E63946] border-4 border-[#0D0D0D] shadow-[4px_4px_0_#0D0D0D] z-0 opacity-80" />
            <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 bg-[#1D3557] border-4 border-[#0D0D0D] z-0 opacity-80" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-bold text-[#0D0D0D]" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.1em" }}>SCROLL</span>
        <div className="w-6 h-10 border-3 border-[#0D0D0D] rounded-full border-[3px] flex items-start justify-center pt-1">
          <div className="w-1.5 h-3 bg-[#0D0D0D] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
