"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useState } from "react";

const LenisCtx = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisCtx);

/** Smooth inertial scrolling + section-driven colour theming. */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const l = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95 });
    let raf = 0;
    const loop = (t: number) => { l.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame((t) => { setLenis(l); loop(t); });
    return () => { cancelAnimationFrame(raf); l.destroy(); };
  }, []);

  // Whichever section crosses the centre line owns the palette.
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-theme-section]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          document.documentElement.dataset.theme = el.dataset.themeSection;
          document.documentElement.dataset.section = el.dataset.label ?? "";
          window.dispatchEvent(new CustomEvent("section-change", { detail: el.dataset.label }));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return <LenisCtx.Provider value={lenis}>{children}</LenisCtx.Provider>;
}

export function scrollToId(lenis: Lenis | null, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else el.scrollIntoView({ behavior: "smooth" });
}
