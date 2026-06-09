"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend",
    color: "#FFD700",
    bg: "#FFF3B0",
    icon: "🖥️",
    skills: ["React", "React Native", "Flutter", "JavaScript", "TypeScript", "HTML", "CSS", "Material-UI", "Bootstrap"],
  },
  {
    category: "Backend",
    color: "#E63946",
    bg: "#FFE0E0",
    icon: "⚙️",
    skills: ["Node.js", "Laravel", "Spring", "Java", "Kotlin", "C#", "FastAPI", "REST APIs"],
  },
  {
    category: "Cloud & DevOps",
    color: "#1D3557",
    bg: "#D0E4F5",
    icon: "☁️",
    skills: ["AWS S3", "AWS Lambda", "DynamoDB", "Cognito", "API Gateway", "CloudWatch", "SNS", "SQS", "KMS", "Serverless"],
  },
  {
    category: "ML & AI",
    color: "#457B9D",
    bg: "#D8EEF7",
    icon: "🤖",
    skills: ["DistilBERT", "RoBERTa", "SBERT", "Librosa", "Sentiment Analysis", "Recommender Systems", "NLP", "Audio Analysis"],
  },
  {
    category: "UI/UX & Design",
    color: "#7B2D8B",
    bg: "#EDD9F5",
    icon: "🎨",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "HCI", "Emotional Design", "User Testing"],
  },
  {
    category: "Psychology",
    color: "#2D6A4F",
    bg: "#D8F3DC",
    icon: "🧠",
    skills: ["User Behavior Analysis", "Cognitive Psychology", "Emotional Design", "HCI", "Counseling"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 halftone-bg relative overflow-hidden">
      {/* Section border lines */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#0D0D0D]" />
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#0D0D0D]" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-12">
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#E63946] font-bold text-sm mb-2" style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.2em" }}>
            CHAPTER 02
          </p>
          <h2 className="section-title text-5xl text-[#0D0D0D]" style={{ fontFamily: "'Bangers', cursive" }}>
            SKILLS GAINED
          </h2>
          <p className="mt-6 text-[#1D3557] font-semibold max-w-xl mx-auto">
            My tech arsenal every weapon I wield in battle.
          </p>
        </motion.div>

        {/* Skill group panels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ scale: 0.8, opacity: 0, rotate: gi % 2 === 0 ? -2 : 2 }}
              animate={inView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 160, delay: gi * 0.08 }}
              whileHover={{ rotate: gi % 2 === 0 ? -1 : 1, scale: 1.02 }}
              className="cel-card overflow-hidden cursor-pointer"
              onClick={() => setActive(active === gi ? null : gi)}
            >
              {/* Header */}
              <div
                className="px-4 py-3 border-b-4 border-[#0D0D0D] flex items-center gap-3"
                style={{ background: group.color }}
              >
                <span className="text-2xl">{group.icon}</span>
                <span
                  className="text-white text-xl"
                  style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.08em", textShadow: "2px 2px 0 rgba(0,0,0,0.4)" }}
                >
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              <div className="p-4 flex flex-wrap gap-2" style={{ background: group.bg }}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: "spring", delay: gi * 0.08 + si * 0.04 }}
                    whileHover={{ scale: 1.1, rotate: [-1, 1, -1], transition: { duration: 0.3 } }}
                    className="skill-badge text-sm px-3 py-1"
                    style={{ background: "white", color: "#0D0D0D", borderColor: "#0D0D0D" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus fun stat */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-6"
        >
          {[
            { label: "Languages & Frameworks", val: "15+" },
            // { label: "AWS Services", val: "10+" },
            { label: "Projects Shipped", val: "10+" },
            { label: "Years Coding", val: "4+" },
          ].map((stat) => (
            <div key={stat.label} className="cel-card px-6 py-4 text-center bg-[#1D3557] min-w-[140px]">
              <div className="text-4xl text-[#FFD700]" style={{ fontFamily: "'Bangers', cursive" }}>{stat.val}</div>
              <div className="text-black text-xs font-bold mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
