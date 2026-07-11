import Link from "next/link";
import { Heart } from "lucide-react";
import { SocialIcon } from "@/components/shared/social-icon";
import { navLinks, personalInfo, socialLinks } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="section-container flex flex-col gap-10 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Link href="#home" className="font-heading text-xl font-bold">
              <span className="text-gradient-brand">{`<${personalInfo.initials}/>`}</span>
            </Link>
            <p className="max-w-xs text-center text-sm text-muted-foreground sm:text-left">
              {personalInfo.title} crafting fast, accessible and beautiful web experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-1.5 text-center text-sm text-muted-foreground sm:text-left">
            &copy; {year} {personalInfo.name}. Built with
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> using Next.js.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <SocialIcon name={social.icon} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
