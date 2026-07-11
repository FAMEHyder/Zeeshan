// Central type definitions for all portfolio content.
// Keeping these in one place makes the `data/*` files type-safe and easy to extend.

export interface SocialLink {
  name: string;
  href: string;
  icon: string; // lucide-react icon name
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  roles: string[]; // rotated in the hero typing effect
  bio: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  avatar: string;
  resumeUrl: string;
  availableForWork: boolean;
}

export interface AboutHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0 - 100
  category: "frontend" | "backend" | "tools";
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export type TimelineType = "education" | "course" | "work" | "internship";

export interface TimelineItem {
  id: string;
  type: TimelineType;
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  color: string;
}

export interface Statistic {
  icon: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  authors: string;
  status: string;
}
