import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Mail, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";

const socialIconMap: Record<string, IconType | ComponentType<LucideProps>> = {
  Github: FaGithub,
  Linkedin: FaLinkedinIn,
  Twitter: FaXTwitter,
  Facebook: FaFacebookF,
  Mail: Mail,
};

interface SocialIconProps {
  name: string;
  className?: string;
}

/** Resolves a social platform key to its brand icon (email falls back to the lucide Mail icon). */
export function SocialIcon({ name, className }: SocialIconProps) {
  const Icon = socialIconMap[name] ?? Mail;
  return <Icon className={className} aria-hidden />;
}
