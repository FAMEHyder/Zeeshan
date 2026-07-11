import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "nexora-dashboard",
    title: "Nexora Analytics Dashboard",
    description:
      "A dark-mode SaaS analytics dashboard with real-time charts, subscription tracking and team insights.",
    longDescription:
      "Nexora is a full-featured analytics dashboard built for SaaS teams to track revenue, subscriptions, active users and conversion rates in real time. Focused on data density without sacrificing clarity, using accessible charts and a fast, keyboard-friendly interface.",
    image: "/images/projects/project-dashboard.png",
    categories: ["Next.js", "Dashboard", "React"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Shadcn UI"],
    features: [
      "Real-time revenue & usage charts",
      "Dark mode first design system",
      "Responsive data tables",
      "Role-based dashboard views",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "lume-ecommerce",
    title: "Lumé — Fashion E-commerce",
    description:
      "A minimal, editorial-style e-commerce storefront focused on conversion and beautiful product presentation.",
    longDescription:
      "Lumé is a fashion e-commerce experience with a strong focus on typography, whitespace and imagery. Includes a fully responsive product grid, quick-view modals, animated cart drawer and a smooth checkout flow.",
    image: "/images/projects/project-ecommerce.png",
    categories: ["React", "Landing Pages", "UI/UX"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Editorial product grid layout",
      "Animated cart drawer",
      "Quick-view product modal",
      "Optimized for Core Web Vitals",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "flowbase-saas",
    title: "FlowBase — SaaS Landing Page",
    description:
      "A high-converting marketing landing page for a workflow automation SaaS product with glassmorphism UI.",
    longDescription:
      "FlowBase required a bold, modern marketing site to communicate a complex automation product simply. Built with glassmorphism cards, gradient blobs, and scroll-triggered animations to keep visitors engaged.",
    image: "/images/projects/project-saas-landing.png",
    categories: ["Landing Pages", "UI/UX", "Next.js"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Glassmorphism UI components",
      "Scroll-triggered animations",
      "Fully responsive hero section",
      "Lighthouse score 95+",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
    featured: true,
  },
  {
    id: "studio-martin-agency",
    title: "Studio Martin — Creative Agency",
    description:
      "A bold, editorial creative agency website with striking typography and a black & white photography grid.",
    longDescription:
      "Studio Martin needed a portfolio site that felt as bold as their creative work. The layout leans on oversized type, monochrome imagery and a single accent color to keep the focus on their case studies.",
    image: "/images/projects/project-agency.png",
    categories: ["UI/UX", "Landing Pages", "React"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Oversized editorial typography",
      "Case study grid with hover reveals",
      "Smooth page transitions",
      "Custom cursor interactions",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
  },
  {
    id: "fooddeli-app",
    title: "FoodDeli — Food Delivery Platform",
    description:
      "A responsive food delivery web app with restaurant discovery, cart management and live order tracking UI.",
    longDescription:
      "FoodDeli is a consumer-facing food delivery platform UI covering restaurant discovery, menu browsing, cart management and order tracking — designed mobile-first and scaled up to desktop.",
    image: "/images/projects/project-food-app.png",
    categories: ["React", "UI/UX", "Dashboard"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    features: [
      "Mobile-first restaurant discovery",
      "Animated cart & checkout flow",
      "Live order tracking UI",
      "Category-based filtering",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio Template",
    description:
      "A premium, animated personal portfolio template for developers with dark mode and smooth scroll interactions.",
    longDescription:
      "A reusable developer portfolio template featuring animated hero sections, project filtering, testimonials and a fully accessible dark/light theme — the same system powering this very site.",
    image: "/images/projects/project-portfolio.png",
    categories: ["Portfolio", "Next.js", "UI/UX"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    features: [
      "Dark & light theme toggle",
      "Framer Motion scroll reveals",
      "Fully accessible components",
      "SEO optimized with JSON-LD",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/",
  },
];

export const projectCategories = [
  "All",
  "React",
  "Next.js",
  "UI/UX",
  "Landing Pages",
  "Portfolio",
  "Dashboard",
] as const;
