import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiShadcnui,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNpm,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { Code2, Webhook, BrainCircuit, FlaskConical, FileSpreadsheet, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, IconType | ComponentType<LucideProps>> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: RiNextjsFill,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  mui: SiMui,
  shadcn: SiShadcnui,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  vercel: SiVercel,
  vscode: VscVscode,
  npm: SiNpm,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  api: Webhook,
  aitraining: BrainCircuit,
  scientificworkplace: FlaskConical,
  msoffice: FileSpreadsheet,
};

interface TechIconProps {
  name: string;
  className?: string;
}

/** Resolves a tech key (e.g. "react") to its brand icon, falling back to a generic code icon. */
export function TechIcon({ name, className }: TechIconProps) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon className={className} aria-hidden />;
}
