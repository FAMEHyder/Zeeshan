import { PersonalInfo, NavLink, SocialLink, AboutHighlight, EducationEntry } from "@/types";

// Update this file with your own information — it powers the Hero, About and Contact sections.
export const personalInfo: PersonalInfo = {
  name: "Arjun Mehta",
  initials: "AM",
  title: "Frontend Developer",
  tagline: "I design & build fast, accessible, pixel-perfect web experiences.",
  roles: [
    "Frontend Developer",
    "React & Next.js Specialist",
    "UI/UX Enthusiast",
    "Performance Optimizer",
  ],
  bio: "I'm a frontend developer who loves turning complex problems into clean, intuitive interfaces. I specialize in building fast, responsive, and accessible web applications using React, Next.js and modern tooling — with a strong eye for detail and design.",
  location: "Bengaluru, India",
  email: "hello.arjunmehta@gmail.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  avatar: "/images/profile-avatar.png",
  resumeUrl: "/resume/Arjun-Mehta-Resume.pdf",
  availableForWork: true,
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/", icon: "Github" },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: "Linkedin" },
  { name: "Email", href: "mailto:hello.arjunmehta@gmail.com", icon: "Mail" },
  { name: "X", href: "https://x.com/", icon: "Twitter" },
  { name: "Facebook", href: "https://facebook.com/", icon: "Facebook" },
];

export const aboutHighlights: AboutHighlight[] = [
  { icon: "GraduationCap", label: "Education", value: "B.Tech, Computer Science" },
  { icon: "Briefcase", label: "Experience", value: "3+ Years Freelancing" },
  { icon: "MapPin", label: "Location", value: "Bengaluru, India" },
  { icon: "Target", label: "Career Goal", value: "Building products that scale" },
];

export const educationEntries: EducationEntry[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Reva University",
    period: "2019 — 2023",
  },
];

export const strengths: string[] = [
  "Strong eye for design & detail",
  "Clean, maintainable code",
  "Fast learner & adaptable",
  "Great communication with clients",
  "Performance-obsessed",
  "Team player & self-driven",
];

export const enjoyedTech: { name: string; icon: string }[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Shadcn UI", icon: "shadcn" },
  { name: "Git", icon: "git" },
];
