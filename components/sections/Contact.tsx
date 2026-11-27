"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { profile } from "../data/content";
import { Magnetic, RevealText, SectionTag } from "../ui/Motion";
import { scrollToId, useLenis } from "../system/SmoothScroll";
import Tide from "./Tide";

const clouds = [
  { top: "12%", w: 420, dur: 70, delay: -10 },
  { top: "30%", w: 300, dur: 55, delay: -40 },
  { top: "50%", w: 520, dur: 90, delay: -25 },
  { top: "22%", w: 240, dur: 48, delay: -5 },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const bigX = useTransform(scrollYProgress, [0, 1], ["10%", "-35%"]);
  const tideY = useTransform(scrollYProgress, [0.3, 0.75], ["0%", "60%"]);

  const copy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      {/* Red tide — contact */}
      <div data-theme-section="finale" data-label="Contact" className="relative px-5 pb-48 pt-32 md:px-8 md:pt-44">
        <div className="mx-auto max-w-[1500px]">
          <SectionTag index="06" label="Contact" />
          <RevealText text="Let's build something that lasts." className="t-serif mt-8 max-w-[13ch] text-[15vw] md:text-[8.5vw]" />

          <div className="mt-16 flex flex-wrap items-center gap-6">
            <Magnetic>
              <a href={`mailto:${profile.email}`} data-cursor="Write"
                className="group relative grid h-40 w-40 place-items-center overflow-hidden rounded-full bg-fg text-bg md:h-52 md:w-52">
                <span className="absolute inset-0 translate-y-full rounded-full bg-a2 transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-y-0" />
                <span className="t-mono relative text-center font-bold group-hover:text-fg">Start a<br />conversation</span>
              </a>
            </Magnetic>
            <div className="space-y-3">
              <button onClick={copy} data-cursor="Copy" className="block text-left text-2xl font-semibold tracking-tight underline decoration-1 underline-offset-8 md:text-4xl">
                {profile.email}
              </button>
              <p className="t-mono opacity-80">{copied ? "Copied to clipboard ✓" : "Click to copy"}</p>
              <a href={profile.phoneHref} className="t-mono block opacity-80 hover:opacity-100">{profile.phone}</a>
            </div>
          </div>

          <div className="t-mono mt-16 flex flex-wrap gap-3">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" data-cursor="Open"
                className="border border-fg/50 px-4 py-2 transition-colors hover:bg-fg hover:text-bg">
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        <motion.div style={{ y: tideY }} className="absolute inset-x-0 bottom-0">
          <Tide className="h-40 md:h-56" />
        </motion.div>
      </div>

      {/* Open sky — footer */}
      <div data-theme-section="sky" data-label="End" className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#e0341a_0%,#2a52c9_22%,#1f43b8_60%,#14307f_100%)]" />
        {clouds.map((c, i) => (
          <div key={i} className="absolute left-0 h-24 rounded-full bg-white/80 blur-2xl"
            style={{ top: c.top, width: c.w, animation: `drift ${c.dur}s linear infinite`, animationDelay: `${c.delay}s` }} />
        ))}

        <div className="relative flex min-h-[90vh] flex-col justify-end px-5 pb-8 md:px-8">
          <motion.p style={{ x: bigX }} className="t-display whitespace-nowrap text-[26vw] leading-[0.8] text-white/90">
            Chanka Herath — Software Engineer —
          </motion.p>
          <div className="t-mono mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-white/30 pt-6 text-white/80">
            <span>© {new Date().getFullYear()} Chanka Herath</span>
            <span>{profile.location} · {profile.coords}</span>
            <button onClick={() => scrollToId(lenis, "top")} data-cursor="Top" className="hover:text-white">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
