"use client";

import Image from "next/image";
import type { Project } from "../data/content";

export default function ProjectCard({ p, i }: { p: Project; i: number }) {
  const Wrap = p.url ? "a" : "div";
  return (
    <Wrap
      {...(p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {})}
      data-cursor={p.url ? "Visit" : "Case study"}
      className="group relative flex h-[62vh] w-[82vw] flex-col md:w-[34vw]"
    >
      <div className="relative flex-1 overflow-hidden bg-black/40">
        {p.video ? (
          <video src={p.video} autoPlay loop muted playsInline preload="metadata"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
        ) : (
          <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 82vw, 34vw"
            className="object-cover transition-[transform,filter] duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] saturate-[.8] group-hover:scale-105 group-hover:saturate-100" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0822] via-transparent to-transparent opacity-80" />
        {/* Wipe on hover */}
        <div className="absolute inset-0 origin-bottom scale-y-0 bg-a1 mix-blend-color transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-y-100" />

        <div className="t-mono absolute left-4 right-4 top-4 flex justify-between">
          <span className="bg-bg/70 px-2 py-1 backdrop-blur">P—{String(i + 1).padStart(2, "0")}</span>
          <span className="bg-a1 px-2 py-1 text-bg">{p.tag}</span>
        </div>
        <span className="t-display absolute bottom-3 right-4 text-[6rem] leading-none text-white/10">{p.year}</span>
      </div>

      <div className="border-x border-b border-line bg-bg/60 p-5 backdrop-blur-md">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="t-display text-4xl md:text-5xl">{p.title}</h3>
          {p.url && <span className="t-mono text-a1 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>}
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed opacity-75">{p.description}</p>
        <div className="t-mono mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[0.6rem] opacity-60">
          {p.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </Wrap>
  );
}
