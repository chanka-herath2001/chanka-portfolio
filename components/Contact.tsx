"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const contactLinks = [
  {
    label: "Email",
    value: "chankaherath2001@gmail.com",
    href: "mailto:chankaherath2001@gmail.com",
    icon: "✉️",
    color: "#E63946",
  },
  {
    label: "Phone",
    value: "+94 74 275 2959",
    href: "tel:+94742752959",
    icon: "📱",
    color: "#1D3557",
  },
  {
    label: "LinkedIn",
    value: "chanka-herath",
    href: "https://www.linkedin.com/in/chanka-herath/",
    icon: "💼",
    color: "#457B9D",
  },
  {
    label: "GitHub",
    value: "chanka-herath2001",
    href: "https://github.com/chanka-herath2001",
    icon: "🐙",
    color: "#0D0D0D",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("chankaherath2001@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 halftone-bg-red relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#0D0D0D]" />

      <div ref={ref} className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#FFD700] font-bold text-sm mb-2" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.2em" }}>
            FINAL CHAPTER
          </p>
          <h2 className="section-title text-5xl text-white" style={{ fontFamily: "'Bangers', cursive" }}>
            CALL TO ACTION!
          </h2>
          <p className="mt-6 text-white font-semibold max-w-xl mx-auto opacity-90">
            Ready to team up? Let&apos;s build something epic together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact cards */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 80 }}
            className="flex flex-col gap-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ x: -40, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="cel-card p-4 flex items-center gap-4 bg-white cursor-pointer"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-2xl border-3 border-[#0D0D0D] flex-shrink-0"
                  style={{ background: link.color, border: "3px solid #0D0D0D" }}
                >
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#457B9D] font-black uppercase tracking-widest">{link.label}</div>
                  <div className="font-black text-[#0D0D0D] text-sm break-all">{link.value}</div>
                </div>
                <div className="ml-auto text-[#0D0D0D] opacity-30 text-lg">→</div>
              </motion.a>
            ))}

            {/* Copy email */}
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="cel-btn w-full py-3 bg-[#FFD700] text-[#0D0D0D] mt-2"
            >
              {copied ? "✅ COPIED!" : "📋 COPY EMAIL"}
            </motion.button>
          </motion.div>

          {/* Right: Photo + speech bubble */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Speech bubble */}
            <div className="speech-bubble px-6 py-5 max-w-sm text-center">
              <p className="text-lg font-black text-[#0D0D0D]" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em" }}>
                I&apos;m always open to new opportunities!
              </p>
              <p className="text-sm text-[#457B9D] font-semibold mt-2" style={{ fontFamily: "'Comic Neue', cursive" }}>
                Whether it&apos;s a full-time role, freelance project, or just a chat about tech, hit me up!
              </p>
            </div>

            {/* Photo */}
            <div className="comic-panel-lg overflow-hidden relative mt-8" style={{ width: 240, height: 280 }}>
              <Image
                src="/images/chill2.jpeg"
                alt="Chanka Herath"
                width={240}
                height={280}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 border-t-4 border-[#0D0D0D] pt-8 text-center"
        >
          <p className="text-white font-bold text-sm opacity-80" style={{ fontFamily: "'Comic Neue', cursive" }}>
            Designed & Built by <strong>Chanka Herath</strong> · {new Date().getFullYear()}
          </p>
          <p className="text-white text-xs opacity-60 mt-1">
            Full-Stack Engineer · ML Enthusiast · First Class Honours Graduate
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-4">
            {["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"].map((t) => (
              <span key={t} className="text-xs text-white opacity-70 font-bold">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
