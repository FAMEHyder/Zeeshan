"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Copy,
  Check,
  Sparkles,
  Terminal,
  Globe2,
  Layers,
  Flame,
} from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { TechIcon } from "@/components/shared/tech-icon";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import {
  aboutHighlights,
  enjoyedTech,
  fieldsOfInterest,
  languages,
  personalInfo,
  strengths,
} from "@/data/personal";

const codeSnippet = `// zeeshan.config.ts
export const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  education: "BS Computer Science (CGPA 3.6)",
  institution: "University of Baltistan, Skardu",
  experience: "8+ Months @ NetBots",
  coreStack: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
  location: "${personalInfo.location}",
  status: "${personalInfo.availableForWork ? "Available for Hire 🚀" : "Building Products"}"
};`;

export function About() {
  const [copiedCode, setCopiedCode] = useState(false);

  const copyConfig = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    toast.success("Developer config copied to clipboard!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting glow */}
      <GradientBlobs className="opacity-70" />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me & how I build"
          description="A snapshot of my developer journey, technical philosophy, and the drive behind everything I ship."
        />

        {/* TOP ROW: Balanced Bento Grid (Narrative Story & Interactive Terminal) */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Card 1: Narrative & Core Philosophy (7 Cols) */}
          <Reveal className="lg:col-span-7 h-full">
            <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-8 backdrop-blur-xl bg-card/70 border-border/80 hover:border-primary/50 shadow-lg">
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary shadow-[0_0_15px_var(--glow-primary)]">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>Full-Stack & MERN Specialist</span>
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Skardu, Pakistan
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold sm:text-3xl leading-snug">
                  Turning complex engineering into{" "}
                  <span className="text-gradient-brand">clean, intuitive web apps</span>.
                </h3>

                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {personalInfo.bio}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  My career goal is to continuously evolve as a full-stack engineer while
                  architecting products that solve meaningful problems — combining resilient backend
                  APIs with polished, accessible user experiences.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="mt-6 pt-6 border-t border-border/60 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2.5 rounded-xl bg-muted/40 p-2.5 border border-border/50 transition-colors hover:border-primary/40">
                  <Flame className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-semibold">MERN & Next.js</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-muted/40 p-2.5 border border-border/50 transition-colors hover:border-primary/40">
                  <Layers className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-xs font-semibold">Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-muted/40 p-2.5 border border-border/50 transition-colors hover:border-primary/40">
                  <Sparkles className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold">AI Integration</span>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Interactive Developer Terminal / Blueprint (5 Cols) */}
          <Reveal delay={0.1} className="lg:col-span-5 h-full">
            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.15)"
              className="h-full flex flex-col justify-between p-0 overflow-hidden bg-card/85 border-border/80 shadow-xl"
            >
              {/* macOS Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
                  <span className="ml-2 flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <Terminal className="h-3.5 w-3.5 text-primary" />
                    zeeshan.config.ts
                  </span>
                </div>

                <button
                  type="button"
                  onClick={copyConfig}
                  aria-label="Copy developer config"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted font-mono"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-foreground/90 space-y-1">
                <p className="text-muted-foreground">// Zeeshan Haider — Developer Blueprint</p>
                <p>
                  <span className="text-primary font-semibold">export const</span>{" "}
                  <span className="text-accent font-semibold">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">name:</span>{" "}
                  <span className="text-emerald-400">&quot;{personalInfo.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">role:</span>{" "}
                  <span className="text-emerald-400">&quot;{personalInfo.title}&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">education:</span>{" "}
                  <span className="text-amber-400">&quot;BS Computer Science (CGPA 3.6)&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">institution:</span>{" "}
                  <span className="text-emerald-400">&quot;University of Baltistan&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">experience:</span>{" "}
                  <span className="text-cyan-400">&quot;8+ Months @ NetBots&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">coreStack:</span> [
                  <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                  <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Node&quot;</span>,{" "}
                  <span className="text-purple-300">&quot;MongoDB&quot;</span>],
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">status:</span>{" "}
                  <span className="text-emerald-400">&quot;Available for Hire 🚀&quot;</span>
                </p>
                <p>
                  &#125;;
                  <span className="inline-block h-4 w-1.5 bg-primary animate-pulse ml-1 align-middle" />
                </p>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-muted/40 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  TypeScript 5.0
                </span>
                <span>UTF-8 • Production Ready</span>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* ROW 2: 4 Key Highlights Across the Screen */}
        <Reveal delay={0.15} className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {aboutHighlights.map((item) => (
              <SpotlightCard
                key={item.label}
                spotlightColor="rgba(168, 85, 247, 0.2)"
                className="p-5 flex items-center gap-4 bg-card/75 border-border/70 hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                  <LucideIcon name={item.icon} className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                    {item.value}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>

        {/* ROW 3: Bento Deep Dives (Strengths, Technologies, Interests & Languages) */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Card 1: Core Strengths */}
          <Reveal delay={0.2} className="h-full">
            <SpotlightCard className="h-full p-6 sm:p-7 flex flex-col justify-between bg-card/70 border-border/70 hover:border-primary/50">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold">Core Strengths</h4>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {strengths.map((strength) => (
                    <div
                      key={strength}
                      className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-muted/30 px-3.5 py-2 text-sm text-foreground/90 transition-all hover:border-primary/40 hover:bg-muted/60"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 text-xs text-muted-foreground font-mono">
                Continuous improvement & teamwork mindset
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Favorite Tech Stack */}
          <Reveal delay={0.25} className="h-full">
            <SpotlightCard className="h-full p-6 sm:p-7 flex flex-col justify-between bg-card/70 border-border/70 hover:border-primary/50">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold">Technologies I Love</h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {enjoyedTech.map((tech) => (
                    <span
                      key={tech.name}
                      className="group/tech flex items-center gap-2 rounded-xl border border-border/60 bg-muted/40 px-3.5 py-2 text-sm font-medium transition-all hover:border-primary/50 hover:bg-card hover:shadow-md hover:shadow-primary/10"
                    >
                      <TechIcon
                        name={tech.icon}
                        className="h-4 w-4 transition-transform group-hover/tech:scale-110"
                      />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                <p>Focused on fast performance, clean REST APIs, and responsive mobile-first UI.</p>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 3: Interests & Languages */}
          <Reveal delay={0.3} className="h-full">
            <SpotlightCard className="h-full p-6 sm:p-7 flex flex-col justify-between bg-card/70 border-border/70 hover:border-primary/50">
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Globe2 className="h-4 w-4" />
                    </div>
                    <h4 className="font-heading text-lg font-semibold">Fields of Interest</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {fieldsOfInterest.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Languages
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-foreground/90 shadow-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education snippet */}
              <div className="mt-6 pt-4 border-t border-border/40 text-xs text-muted-foreground flex items-center justify-between">
                <span>🎓 University of Baltistan</span>
                <span className="font-mono text-primary font-semibold">2023 — 2027</span>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
