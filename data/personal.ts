import { PersonalInfo, NavLink, SocialLink, AboutHighlight, EducationEntry } from "@/types";

// Update this file with your own information — it powers the Hero, About and Contact sections.
export const personalInfo: PersonalInfo = {
  name: "Zeeshan Haider",
  initials: "ZH",
  title: "Full-Stack Developer (MERN Stack)",
  tagline: "I design & build fast, scalable full-stack web apps with the MERN stack and Next.js.",
  roles: [
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "AI Enthusiast",
  ],
  bio: "I'm a Computer Science student and full-stack developer who enjoys turning complex problems into clean, intuitive interfaces. I specialize in building fast, responsive and scalable web applications using the MERN stack and Next.js — with hands-on experience in RESTful APIs, database design and AI-driven solutions.",
  location: "Skardu, Gilgit-Baltistan, Pakistan",
  email: "famehyder9999@gmail.com",
  phone: "+92 341 7405991",
  whatsapp: "+923417405991",
  avatar: "/images/profile-avatar.png",
  resumeUrl: "/resume/Zeeshan-Haider-CV.pdf",
  availableForWork: true,
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/FAMEHyder", icon: "Github" },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: "Linkedin" },
  { name: "Email", href: "mailto:famehyder9999@gmail.com", icon: "Mail" },
  { name: "X", href: "https://x.com/", icon: "Twitter" },
  { name: "Facebook", href: "https://facebook.com/", icon: "Facebook" },
];

export const aboutHighlights: AboutHighlight[] = [
  { icon: "GraduationCap", label: "Education", value: "BS Computer Science" },
  { icon: "Briefcase", label: "Experience", value: "8+ Months @ NetBots" },
  { icon: "MapPin", label: "Location", value: "Skardu, Pakistan" },
  { icon: "Target", label: "Career Goal", value: "Pursuing MSCS & AI-driven apps" },
];

export const educationEntries: EducationEntry[] = [
  {
    degree: "BS Computer Science (CGPA 3.6)",
    institution: "University of Baltistan, Skardu",
    period: "2023 — 2027",
  },
  {
    degree: "Intermediate",
    institution: "Public School and College Skardu",
    period: "2019 — 2020",
  },
  {
    degree: "Matriculation",
    institution: "Baltistan Public School and College Skardu",
    period: "2017 — 2018",
  },
];

export const strengths: string[] = [
  "Fast learner & adaptable",
  "Clean, maintainable code",
  "Excellent leadership skills",
  "Effective communication",
  "Problem-solving mindset",
  "Positive attitude toward teamwork",
];

export const enjoyedTech: { name: string; icon: string }[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Git", icon: "git" },
];

export const fieldsOfInterest: string[] = [
  "Internet of Things",
  "Artificial Intelligence",
  "Marketing Science",
  "Scientific Research",
  "Teaching",
];

export const languages: string[] = ["English", "Urdu", "Balti"];

export const researchSkills: string[] = [
  "Writing in Marketing Science",
  "Writing in AI Fields",
  "How to Write and Publish a Scientific Paper",
  "Understanding Research Methods",
  "Editor's Guide to Writing a Review Article (Researcher Academy)",
];
