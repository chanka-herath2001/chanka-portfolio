export const profile = {
  name: "Chanka Herath",
  role: "Software Engineer",
  email: "chankaherath2001@gmail.com",
  phone: "+94 74 275 2959",
  phoneHref: "tel:+94742752959",
  location: "Colombo, Sri Lanka",
  coords: "06°55′N 79°51′E",
  links: [
    { label: "GitHub", href: "https://github.com/chanka-herath2001" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chanka-herath/" },
  ],
};

export const about = {
  statement:
    "I design and engineer software that holds up under real use — scalable full-stack products, cloud-native systems on AWS and machine-learning features people actually feel. A background in psychology shapes how I build: every interface starts with how a person thinks.",
  stats: [
    { value: 1, suffix: "st", label: "Class Honours, BEng" },
    { value: 4, suffix: "+", label: "Years building software" },
    { value: 25, suffix: "+", label: "Projects delivered" },
    { value: 15, suffix: "+", label: "Languages & frameworks" },
  ],
};

export const skillGroups = [
  { code: "01", category: "Frontend", skills: ["React", "Next.js", "React Native", "Flutter", "TypeScript", "JavaScript", "Tailwind", "Material-UI"] },
  { code: "02", category: "Backend", skills: ["Node.js", "Laravel", "Spring", "Java", "Kotlin", "C#", "FastAPI", "REST APIs"] },
  { code: "03", category: "Cloud & DevOps", skills: ["AWS Lambda", "S3", "DynamoDB", "Cognito", "API Gateway", "CloudWatch", "SNS / SQS", "KMS"] },
  { code: "04", category: "Machine Learning", skills: ["DistilBERT", "RoBERTa", "SBERT", "Librosa", "NLP", "Recommender Systems", "Audio Analysis"] },
  { code: "05", category: "Product Design", skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Testing", "HCI"] },
  { code: "06", category: "Human Factors", skills: ["Cognitive Psychology", "Behaviour Analysis", "Emotional Design", "Counselling"] },
];

export const experience = [
  {
    role: "Software Engineer", company: "DigiMe Ads", period: "Mar 2026 — Present", location: "Sri Lanka", current: true,
    bullets: ["Building product and engineering initiatives at an early-stage startup, from feature design to deployment."],
  },
  {
    role: "Associate Software Engineer", company: "Taurgo Limited", period: "Jan 2025 — Jun 2025", location: "UK · Remote",
    bullets: [
      "Engineered a modular React CRM for partner clients to manage leads and auto-generate inspection reports.",
      "Built a job-booking interface that streamlined tour scheduling, automating mobile-web workflows via REST APIs.",
      "Ran user testing to refine mobile UX, driving adoption among field agents.",
    ],
  },
  {
    role: "Software Engineering Intern", company: "Taurgo Limited", period: "Jul 2024 — Jan 2025", location: "UK · Remote",
    bullets: [
      "Rebuilt the company website frontend in React, improving responsiveness and load times.",
      "Developed a 360° virtual tour app and an inventory & inspection reporting app (Flutter, MongoDB, AWS).",
      "Shipped conversion-focused interfaces with the design team and led cross-device QA on Android and iOS.",
    ],
  },
  {
    role: "Web Development Intern", company: "Kingslake", period: "Jun 2024 — Jul 2024", location: "Sri Lanka",
    bullets: [
      "Delivered UI/UX improvements to the Blue Line Balancing site using Adobe XD.",
      "Developed CRUD features for EazyPay and designed a new landing page for Kingslake Blue.",
    ],
  },
];

export type Project = {
  title: string; url: string | null; year: string; tag: string; tech: string[];
  description: string; image: string; video?: string;
};

export const projects: Project[] = [
  { title: "Trimegos", url: "https://trimegos.com", year: "2026", tag: "Live", tech: ["Next.js", "Supabase", "PWA"], image: "/projects/trimegos.png",
    description: "Post a plan and meet people nearby — futsal, a hike, coffee. Always three or more, always somewhere public, with verified members." },
  { title: "Pearmo", url: "https://www.pearmo.com", year: "2026", tag: "Beta", tech: ["Next.js", "Tailwind", "Vercel"], image: "/projects/pearmo.png",
    description: "A safety-first dating platform — anonymous, psychology-matched profiles that open with an ice-breaker instead of a photo swipe." },
  { title: "TourneyKit", url: "https://tourney-kit.vercel.app", year: "2026", tag: "Live", tech: ["Next.js", "Tailwind", "Vercel"], image: "/projects/tourneykit.png",
    description: "Tournament builder for group stages, knockout brackets and parallel cup competitions, each with a live public link." },
  { title: "Kickerz Cup 2026", url: "https://kickerzcup.colombokickerz.lk", year: "2026", tag: "Live", tech: ["React", "Tailwind", "Firebase"], image: "/projects/tourneykit.png", video: "/projects/kickerz.mp4",
    description: "Full-stack football tournament platform with fixture generation, team registration and real-time score updates." },
  { title: "SpendGuardian", url: "https://spendguardian.online", year: "2026", tag: "Live", tech: ["React", "Node.js", "Analytics"], image: "/projects/spendguardian.png",
    description: "Upload financial CSVs and get an interactive analytics dashboard with spending insights and budget tracking." },
  { title: "ENOTH", url: "https://enoth.vercel.app", year: "2026", tag: "Live", tech: ["React", "Node.js", "Supabase"], image: "/projects/enoth.png",
    description: "A fashion startup platform for discovering and sharing sustainable fashion choices." },
  { title: "Diagnostic Report Ingestion", url: null, year: "2025", tag: "AWS", tech: ["S3", "Lambda", "DynamoDB", "Cognito", "KMS"], image: "/projects/aws.png",
    description: "Production-grade ingestion pipeline: encrypted CSV uploads via S3 + Lambda, DynamoDB storage, SNS alerts and a React admin console." },
  { title: "Cross-Domain Recommender", url: null, year: "2025", tag: "Thesis", tech: ["React", "Flask", "DistilBERT", "SBERT"], image: "/projects/moodflix.png",
    description: "Multimodal system linking listening habits to film recommendations through emotion analysis and an ML ensemble." },
  { title: "SYOS Retail System", url: null, year: "2024", tag: "Full-stack", tech: ["Java", "JSP", "MySQL", "JMeter"], image: "/projects/syos.png",
    description: "Supermarket platform with real-time cart, cashier billing, stock tracking and role-based admin controls." },
];

export const research = [
  { title: "Multimodal Generative AI Systems: A Critical Review of Sora, Gemini and Emerging Architectures", type: "IEEE-style review", year: "2025",
    venue: "InnovateX Emerging Tech Poster Symposium, APIIT Colombo" },
  { title: "Cross-Domain Recommendation Linking Music & Movie Preferences Using Emotion Analysis", type: "Final-year thesis", year: "2025",
    venue: "Final Year Project Symposium 2025, APIIT Colombo" },
];

export const education = [
  { degree: "BEng (Hons) Software Engineering", note: "First Class Honours", place: "APIIT Sri Lanka · University of Staffordshire", period: "2022 — 2025" },
  { degree: "Higher National Diploma, Psychology & Counselling", note: "Completed", place: "Colombo Institute of Research & Psychology", period: "2022 — 2024" },
  { degree: "Secondary Education, Science Stream", note: "O/L & A/L", place: "Ananda College, Colombo 10", period: "2007 — 2020" },
];

export const honours = [
  { label: "2nd Place", sub: "Vetstoria Hackathon 2023" },
  { label: "First Class", sub: "BEng Honours" },
  { label: "Published review", sub: "Multimodal AI" },
  { label: "2× Speaker", sub: "APIIT Symposia" },
];

export const sections = [
  { id: "top", label: "Index" },
  { id: "about", label: "Profile" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected Work" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];
