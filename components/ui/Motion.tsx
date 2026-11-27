"use client";

import { animate, motion, useInView, useMotionValue, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Line-masked headline reveal: each word rises out of its own clip. */
export function RevealText({ text, className = "", delay = 0, as: Tag = "h2" }: {
  text: string; className?: string; delay?: number; as?: "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 4 }}
            animate={inView ? { y: 0, rotate: 0 } : {}}
            transition={{ duration: 1, ease, delay: delay + i * 0.06 }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Paragraph whose words light up as it is scrolled through. */
export function ScrubText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} p={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>
      ))}
    </p>
  );
}

function Word({ children, p, range }: { children: string; p: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(p, range, [0.14, 1]);
  return <motion.span style={{ opacity }} className="inline-block">{children}&nbsp;</motion.span>;
}

/** Number that counts up when it enters view. */
export function Counter({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease, onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref} className={className}>{v}{suffix}</span>;
}

/** Section index tag in HUD style: ── 02 / Capabilities */
export function SectionTag({ index, label, className = "" }: { index: string; label: string; className?: string }) {
  return (
    <div className={`t-mono flex items-center gap-3 ${className}`}>
      <motion.span
        className="block h-px w-10 origin-left bg-a1"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, ease }}
      />
      <span className="text-a1">{index}</span>
      <span className="opacity-60">/ {label}</span>
    </div>
  );
}

/** Element drifts toward the pointer while hovered. */
export function Magnetic({ children, strength = 0.35, className = "" }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const onMove = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const reset = () => { animate(x, 0, { type: "spring", stiffness: 200, damping: 12 }); animate(y, 0, { type: "spring", stiffness: 200, damping: 12 }); };
  return (
    <motion.div ref={ref} onPointerMove={onMove} onPointerLeave={reset} style={{ x, y }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
}
