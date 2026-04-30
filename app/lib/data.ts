// ─── Shared data types and constants ───────────────────────────────────────

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  year: string;
  src: string;
  alt: string;
  description: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  body: string;
  tags?: string[];
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "Pkoin",
    title: "Pkoin - Crypto", // <-- Change this for the bold heading on the grid
    category: "Revamp",        // <-- Change this for the small category text
    year: "2026",                // <-- Change the year
    // CHANGE `src` to your new image path! (e.g. src: "/project1.jpg" if the image is in the public folder)
    src: "/img-sources/pkoin.png",
    alt: "Abstract geometric architectural 3D rendering with sharp edges and minimal lighting",
    // Note: The description is NOT shown on the grid cards. It is only shown on the full project detail page.
    description:
      "A comprehensive branding identity for a structural engineering firm. We designed a visual language that embodies precision, force, and geometric beauty — from mark to motion.",
    tags: ["Brand Identity", "Visual System", "Print"],
  },
  {
    id: "Legacy-Chain",
    title: "LEGACY CHAIN",
    category: "STARTUP",
    year: "2026",
    src: "/img-sources/Frame 1.jpg",
    alt: "High-tech industrial metal components with orange light reflections",
    description:
      "End-to-end AI platform development for a deep-tech startup. Built custom LLM pipelines, real-time inference APIs, and an intuitive dashboard for model management.",
    tags: ["LLM Integration", "API Development", "Dashboard UI"],
  },
  {
    id: "Dreelio",
    title: "DREELIO",
    category: "BUSINESST",
    year: "2026",
    src: "/img-sources/dreelio.jpeg",
    alt: "Flowing liquid metal textures with high contrast highlights",
    description:
      "A complete product design system and component library for a SaaS platform. Reduced design-to-dev handoff time by 60% with our bespoke Figma-to-code pipeline.",
    tags: ["Design System", "Component Library", "SaaS"],
  },
  {
    id: "core-engine",
    title: "CORE ENGINE",
    category: "FULLSTACK",
    year: "2023",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCFGFMq7D9OYgT1j6N14ZSGxkhu8rVVKiURAq85GT6-9ZN-lNyswXn-oTAjTF68gX54-x1lN0RSLrjfUwthSqX9JD5J3r6IPMXS62Rl56jWFFpZ1G7Qcf_sGrza0Xd3zCtax3yYZVaoW2t7_TF1XuH1O5TNV2vzGVJxtCAzKW8MItaIM2D42sdbC2HGpCuVoLG9g93-uFImNDCsnkI7DIJ0xHK0HIaeUZdl7V0BhKbH6kunXYlj9gYWIaE9Ls0-_UGpQU1RjqCLTc",
    alt: "Premium mechanical keyboard in a dark moody studio",
    description:
      "Full-stack platform rebuild for an enterprise software company. Migrated from legacy architecture to a modern Next.js + microservices stack, achieving 4× performance uplift.",
    tags: ["Next.js", "Microservices", "Cloud Infrastructure"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "fullstack",
    title: "FULLSTACK DEVELOPMENT",
    body: "End-to-end engineering excellence — from pixel-perfect frontends built with modern frameworks to robust, scalable backend architectures and cloud infrastructure. We ship fast and ship right.",
  },
  {
    id: "uiux",
    title: "UI / UX DESIGN",
    body: "Human-centred design that converts. We craft interfaces that feel inevitable — intuitive flows, rigorous research, and a visual language that makes your brand unforgettable.",
  },
  {
    id: "brand",
    title: "BRAND BUILDING",
    body: "Identity systems built to last decades. Logos, motion guidelines, typography, colour theory — we create the full brand ecosystem that resonates with your audience and stands out from the noise.",
  },
  {
    id: "revamp",
    title: "BRAND REVAMP",
    body: "Your existing brand has potential. We identify friction, modernise the visual system, and re-launch with a strategy that drives measurable growth while preserving brand equity.",
  },
  {
    id: "ai",
    title: "AI & AUTOMATION",
    body: "Integrating bleeding-edge LLMs and custom automation pipelines into your existing ecosystem. We don't just add chatboxes; we re-engineer your core workflows for the post-human era of efficiency.",
    tags: ["NEW ERA", "SCALABLE"],
  },
];

export const PROJECT_TYPES = [
  "Fullstack Development",
  "UI / UX Design",
  "Brand Identity",
  "Brand Revamp",
  "AI & Automation",
  "Other",
] as const;
