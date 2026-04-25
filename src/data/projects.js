import pulseEsgImg from "../assets/projects/PulseESGlogo.png"
import algoTraceXImg from "../assets/projects/algotracex.png"
import carsWorldImg from "../assets/projects/carsworld.png"
import wanderSplitImg from "../assets/projects/wandersplit.png"
import unnatiImg from "../assets/projects/unnati.png"

export const projects = [
  {
    title: "PulseESG",
    subtitle: "AI-Driven ESG Risk Intelligence Platform",
    image: pulseEsgImg,
    description:
      "An AI-powered ESG intelligence engine that analyzes unstructured text to extract ESG risk signals, compute scores, and provide enterprise-ready analytics with full audit trails.",
    highlights: [
      "Built AI-powered ESG engine using FastAPI and spaCy for NLP-based risk signal extraction",
      "Designed rule-based ESG scoring system with event-driven NLP logic and risk classification",
      "Developed secure backend with Spring Boot, JWT authentication, and RBAC",
      "Managed ESG data and audit history using PostgreSQL (Supabase)",
      "Created responsive analytics dashboard using React (Vite), Tailwind CSS, shadcn/ui, and Recharts",
    ],
    tech: [
      "Spring Boot",
      "FastAPI",
      "React",
      "PostgreSQL",
      "spaCy",
      "JWT",
      "RBAC",
    ],
    github: "https://github.com/darshanbhere7/PulseESG",
    live: "https://pulse-esg.vercel.app/",
  },
  {
    title: "AlgoTraceX",
    subtitle: "DSA Learning & Visualization Platform",
    image: algoTraceXImg,
    description:
      "A full-stack platform for interactive DSA learning with real-time visualizations, structured practice modules, and AI-powered assistance for code generation and debugging.",
    highlights: [
      "Developed interactive DSA learning platform with real-time visualizations and practice modules",
      "Designed scalable architecture with JWT authentication, RBAC, and optimized data models",
      "Integrated Gemini AI for chatbot, code generation, debugging, and complexity analysis",
      "Built admin features for content management, analytics, and test performance insights",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "JWT",
      "RBAC",
    ],
    github: "https://github.com/darshanbhere7/algotracex",
    live: "https://algo-trace-x.vercel.app/home",
  },
  {
    title: "CarsWorld",
    subtitle: "Full Stack Car Rental Platform",
    image: carsWorldImg,
    description:
      "A full-stack car rental platform with separate User and Admin modules, real-time booking updates, and interactive 3D car views.",
    highlights: [
      "Built full-stack car rental platform with JWT authentication and booking workflows",
      "Enabled real-time booking updates using Socket.io for availability consistency",
      "Implemented wishlists, reviews, and image uploads with ImageKit",
      "Designed modern UI with React, Tailwind CSS, ShadCN UI, Framer Motion, and Three.js",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Three.js",
      "ImageKit",
    ],
    github: "https://github.com/darshanbhere7/carsworld",
    live: "https://cars-world-dun.vercel.app/",
  },
  {
    title: "WanderSplit",
    subtitle: "Travel Expense Splitter App",
    image: wanderSplitImg,
    description:
      "A cross-platform mobile app to track and split group travel expenses with real-time sync, smart splitting, and beautiful analytics.",
    highlights: [
      "Developed cross-platform mobile app for group travel expense tracking",
      "Implemented custom expense splits, recurring costs, and settlement summaries",
      "Used Firebase Authentication and Cloud Firestore for real-time data storage",
      "Built clean responsive UI with dark/light mode and smooth onboarding flow",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "FL Chart",
    ],
    github: "https://github.com/darshanbhere7/wandersplit",
  },
  {
    title: "Unnati",
    subtitle: "Rural Girls' Empowerment Platform",
    image: unnatiImg,
    description:
      "A social impact web platform supporting digital learning and mentorship for rural girls, featuring dashboards, mentor sections, and learning toolkits.",
    highlights: [
      "Contributed to social impact platform for digital learning and mentorship",
      "Developed frontend components including dashboard, mentor sections, and toolkit pages",
      "Ensured cross-device responsiveness and accessibility compliance",
    ],
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/TejasDesai007/Rural_Girls_Empowerment",
  },
]
