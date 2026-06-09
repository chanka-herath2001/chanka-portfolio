"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Kickerz Cup 2026",
    url: "https://kickerzcup.colombokickerz.lk",
    year: "2026",
    tech: ["React", "Tailwind", "Firebase"],
    color: "#E63946",
    headerText: "white",
    tag: "LIVE",
    description: "A full-stack football tournament management platform built for the Kickerz Cup 2026, featuring fixture creation and live score updates.",
    image: "/projects/kickerz.png",
    video: "/projects/kickerz.mp4",
    highlights: ["Real-time match updates", "Team registration flow", "Admin dashboard for tournament management"],
  },
  {
    title: "SpendGuardian",
    url: "https://spendguardian.online",
    year: "2026",
    tech: ["React", "Node.js", "CSV Analytics"],
    color: "#FFD700",
    headerText: "#0D0D0D",
    tag: "LIVE",
    description: "A personal finance web platform where users upload financial CSVs and receive an interactive analytics dashboard with spending insights.",
    image: "/projects/spendguardian.png",
    highlights: ["CSV ingestion pipeline", "Interactive charts & analytics", "Budget tracking & insights"],
  },
  {
    title: "ENOTH",
    url: "https://enoth.vercel.app",
    year: "2026",
    tech: ["React", "Node.js", "REST APIs", "Supabase"],
    color: "#1D3557",
    headerText: "white",
    tag: "LIVE",
    description: "ENOTH is a fashion startup platform for discovering and sharing sustainable fashion choices.",
    image: "/projects/enoth.png",
    highlights: ["Markdown editor", "Real-time sync with Supabase", "Clean, intuitive UI"],
  },
  // {
  //   title: "MoodFlix",
  //   url: "https://moodflix.site",
  //   year: "2025",
  //   tech: ["React", "FastAPI", "DistilBERT", "Librosa", "ML Ensemble"],
  //   color: "#E63946",
  //   headerText: "white",
  //   tag: "LIVE",
  //   description: "Full-stack platform that analyses music preferences and generates personalised movie recommendations using an emotion-based ML ensemble.",
  //   image: "/projects/moodflix.png",
  //   highlights: ["DistilBERT lyrics NLP", "Custom audio MLP model", "Spotify OAuth integration", "Explainable AI outputs"],
  // },
  {
    title: "Diagnostic Report Ingestion",
    url: null,
    year: "2025",
    tech: ["AWS S3", "Lambda", "DynamoDB", "Cognito", "React", "KMS"],
    color: "#1D3557",
    headerText: "white",
    tag: "AWS",
    description: "Production-grade cloud solution for MediSys Diagnostics: secure CSV ingestion via S3 + Lambda, DynamoDB storage, SNS notifications, and React admin dashboard.",
    image: "/projects/aws.png",
    highlights: ["Cognito auth (Admin/Client)", "KMS encryption", "CloudWatch monitoring", "DLQ fault tolerance"],
  },
  {
    title: "Cross-Domain Recommendation",
    url: null,
    year: "2025",
    tech: ["React", "Flask", "DistilBERT", "SBERT", "Librosa", "TMDB API"],
    color: "#457B9D",
    headerText: "white",
    tag: "THESIS",
    description: "Final year thesis: multimodal recommendation system linking Spotify music habits to movie preferences using emotion analysis and ML ensemble models.",
    image: "/projects/moodflix.png",
    highlights: ["Spotify OAuth integration", "Emotion vector mapping", "User preference calibration", "High accuracy & personalisation"],
  },
  {
    title: "InterConnect",
    url: null,
    year: "2024",
    tech: ["React", "Node.js", "REST APIs"],
    color: "#7B2D8B",
    headerText: "white",
    tag: "TEAM",
    description: "Web-based CV management system for university students and academic administrators. Designed student CV submission and admin review UI.",
    image: "/projects/apiit_final.jpg",
    highlights: ["Role-based access", "CV submission & review flow", "Stakeholder collaboration"],
  },
  {
    title: "SYOS Supermarket System",
    url: null,
    year: "2024",
    tech: ["JSP", "Java", "MySQL", "Apache JMeter"],
    color: "#2D6A4F",
    headerText: "white",
    tag: "FULLSTACK",
    description: "Full-stack supermarket app with real-time cart management, cashier billing, stock tracking, and admin control panel with role-based login.",
    image: "/projects/syos.png",
    highlights: ["Real-time cart management", "Role-based login (Admin/Cashier)", "Apache JMeter performance testing"],
  },
];

function ProjectCard({ project, i, inView }: { project: typeof projects[0]; i: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 60, opacity: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
      animate={inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
      transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
      whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
      className="cel-card overflow-hidden flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project image */}
      <div className="project-img-placeholder border-b-4 border-[#0D0D0D] relative overflow-hidden">
        {"video" in project && project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => {}}
            style={{ display: "block" }}
          />
        )}
        {/* Fallback shown via CSS if image 404s */}
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
          style={{ opacity: hovered ? 0 : 1, transition: "opacity 0.3s" }}>
          <span className="text-5xl">🖼️</span>
          <span className="text-xs font-bold text-[#0D0D0D] mt-2 opacity-60">Upload image to</span>
          <span className="text-xs font-mono text-[#0D0D0D] opacity-60">public/projects/</span>
        </div> */}

        {/* Tag */}
        <div
          className="absolute top-3 right-3 z-20 border-3 border-[#0D0D0D] px-3 py-0.5 text-xs"
          style={{ background: project.color, color: project.headerText, fontFamily: "'Bangers', cursive", letterSpacing: "0.1em", border: "3px solid #0D0D0D", boxShadow: "2px 2px 0 #0D0D0D" }}
        >
          {project.tag}
        </div>
      </div>

      {/* Card header */}
      <div className="px-4 py-3 border-b-4 border-[#0D0D0D]" style={{ background: project.color }}>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg leading-tight" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.05em", color: project.headerText, textShadow: "1px 1px 0 rgba(0,0,0,0.2)" }}>
            {project.title}
          </h3>
          <span className="text-xs font-bold border-2 border-[#0D0D0D] px-2 py-0.5 bg-white text-[#0D0D0D] flex-shrink-0" style={{ fontFamily: "'Bangers', cursive" }}>
            {project.year}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-3">
        <p className="text-sm text-[#0D0D0D] leading-relaxed font-semibold">{project.description}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 items-start text-xs text-[#0D0D0D]">
              <span style={{ color: project.color, WebkitTextStroke: "0.5px #0D0D0D" }}>◆</span>
              <span className="font-semibold">{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 border-2 border-[#0D0D0D] font-bold"
              style={{ background: "#F5F5F5" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      {project.url && (
        <div className="border-t-4 border-[#0D0D0D] p-3">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cel-btn w-full block text-center py-2 text-sm"
            style={{ background: project.color, color: project.headerText }}
          >
            VISIT SITE →
          </motion.a>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 halftone-bg-yellow relative overflow-hidden">
      {/* Border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#0D0D0D]" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#0D0D0D]" />

      <div ref={ref} className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#E63946] font-bold text-sm mb-2" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.2em" }}>
            CHAPTER 04
          </p>
          <h2 className="section-title text-5xl text-[#0D0D0D]" style={{ fontFamily: "'Bangers', cursive" }}>
            THE MISSIONS
          </h2>
          <p className="mt-6 text-[#1D3557] font-semibold max-w-xl mx-auto">
            Projects I&apos;ve built, shipped, and battled through.
          </p>
          {/* <div className="mt-4 speech-bubble inline-block px-4 py-2 text-sm text-[#0D0D0D] font-semibold" style={{ fontFamily: "'Comic Neue', cursive" }}>
            💡 Add your screenshots to <code className="font-mono bg-gray-100 px-1">public/projects/</code> to make them visible!
          </div> */}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
