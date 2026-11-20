import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "shiaquraninstitute",
    title: "Shia Quran Institute",
    category: "EdTech & E-Learning Platform",
    description:
      "A complete online Quran education institution providing 1-on-1 personalized lessons, qualified male and female tutors, structured Islamic courses, student enrollment management, and interactive virtual classrooms.",
    url: "https://shiaquraninstitute.com",
    image: "/images/projects/shiaquraninstitute.png",
    tags: ["React", "Next.js", "Node.js", "Tailwind CSS", "REST APIs", "Vercel"],
    featured: true,
    status: "Live Production",
    allowsIframe: false,
  },
  {
    id: "smindruk",
    title: "Smindruk — Social Media Management",
    category: "SaaS & Digital Marketing Suite",
    description:
      "Modern all-in-one social media publishing and management platform designed to schedule campaigns, manage multi-channel social presences, track audience growth, and simplify content workflows.",
    url: "https://smindruk.vercel.app",
    image: "/images/projects/smindruk.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Social Media APIs", "Framer Motion"],
    featured: true,
    status: "Live Web App",
    allowsIframe: true,
  },
  {
    id: "dashboard-smindruk",
    title: "Smindruk Admin & Analytics Dashboard",
    category: "Admin Backoffice & Analytics Portal",
    description:
      "Enterprise-grade administrative console with real-time analytics graphs, user permission controls, account monitoring, multi-tenant workspace oversight, and performance telemetry.",
    url: "https://dashboard-smindruk.vercel.app",
    image: "/images/projects/dashboard-smindruk.png",
    tags: ["Next.js", "React", "TypeScript", "Charts & Telemetry", "Data Analytics", "Tailwind CSS"],
    featured: true,
    status: "Live Dashboard",
    allowsIframe: true,
  },
];
