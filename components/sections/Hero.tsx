"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { profile } from "../data/content";
import Marquee from "../ui/Marquee";
import Rings from "./HeroRings";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 80, damping: 18 });
  const onMove = (e: React.PointerEvent) => {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  const first = "CHANKA".split("");
  const last = "HERATH".split("");

  return (
    <section id="top" ref={ref} data-theme-section="hq" data-label="Index" onPointerMove={onMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-20">
      <div className="hex-bg absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <motion.div className="absolute right-[-10%] top-[8%] h-[70vmin] w-[70vmin] text-a1 opacity-50 md:right-[4%]" style={{ opacity: fade }}>
        <Rings />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] flex-1 grid-cols-12 gap-4 px-5 md:px-8">
        {/* Left meta column */}
        <motion.div style={{ opacity: fade }} className="t-mono col-span-12 flex flex-col justify-end gap-6 pb-6 md:col-span-3 md:pb-24">
          <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 1 }} className="space-y-1.5">
            <p className="text-a1">● Available for work</p>
            <p className="opacity-60">{profile.location}</p>
            <p className="opacity-60">{profile.coords}</p>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.15, duration: 1, ease }}
            className="max-w-[30ch] font-sans text-sm normal-case leading-relaxed tracking-normal opacity-80">
            Full-stack software engineer building across web, cloud and machine learning — with a psychologist&apos;s eye for how people use what I make.
          </motion.p>
        </motion.div>

        {/* Portrait */}
        <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
          className="relative col-span-12 row-start-1 mx-auto mt-6 w-[68vw] max-w-[420px] md:col-span-4 md:col-start-6 md:row-start-auto md:mt-10 md:w-full">
          <motion.div initial={{ clipPath: "inset(50% 0 50% 0)" }} animate={ready ? { clipPath: "inset(0% 0 0% 0)" } : {}}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="group relative aspect-[3/4] overflow-hidden" data-cursor="Hello">
            <motion.div style={{ scale: photoScale, y: photoY }} className="absolute inset-0">
              <Image src="/images/portrait.jpg" alt="Chanka Herath" fill priority sizes="(max-width:768px) 70vw, 420px"
                className="object-cover grayscale contrast-125 transition-[filter] duration-700 group-hover:grayscale-0 group-hover:contrast-100" />
            </motion.div>
            <div className="absolute inset-0 bg-a1 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#0005_0_1px,transparent_1px_4px)]" />
            <motion.div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent"
              animate={{ y: ["-30%", "520%"] }} transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }} />
          </motion.div>
          <div className="t-mono pointer-events-none absolute -inset-3 flex flex-col justify-between">
            <div className="flex justify-between"><span>┌ Subject</span><span>REF·CH-2001 ┐</span></div>
            <div className="flex justify-between"><span>└ Signal stable</span><span className="blink text-a1">REC ┘</span></div>
          </div>
        </motion.div>

        {/* Role column */}
        <motion.div style={{ opacity: fade }} className="t-mono col-span-12 hidden flex-col items-end justify-end gap-2 pb-24 text-right md:col-span-3 md:col-start-10 md:flex">
          {["Full-Stack", "Cloud · AWS", "Machine Learning", "Product Design"].map((r, i) => (
            <motion.span key={r} initial={{ opacity: 0, x: 20 }} animate={ready ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1.2 + i * 0.08 }}>
              <span className="text-a1">{String(i + 1).padStart(2, "0")}</span> {r}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Name */}
      <motion.h1 style={{ y: nameY }} aria-label="Chanka Herath"
        className="t-display relative z-20 mt-2 flex justify-between px-3 text-[17.5vw] mix-blend-difference md:-mt-[9vw] md:px-6">
        {[...first, " ", ...last].map((c, i) => (
          <span key={i} className="inline-block overflow-hidden" aria-hidden>
            <motion.span className="inline-block" initial={{ y: "105%" }} animate={ready ? { y: 0 } : {}}
              transition={{ duration: 1.1, ease, delay: 0.35 + i * 0.045 }}>
              {c === " " ? " " : c}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <div className="relative z-20 border-y border-line bg-a1 py-2 text-bg">
        <Marquee speed={1.6}>
          {["Software Engineer", "Full-Stack Systems", "Cloud Architecture", "Machine Learning", "Interface Design", "Human Factors"].map((t) => (
            <span key={t} className="t-mono flex items-center gap-6 pr-6 text-[0.75rem] font-bold">
              {t}<span className="inline-block h-2 w-2 rotate-45 bg-bg" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
