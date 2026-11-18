"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechIcon } from "@/components/shared/tech-icon";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
] as const;

export function Skills() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "tools">("frontend");
  const filtered = skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <GradientBlobs className="opacity-50" />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A blend of core frontend languages, frameworks and the tools I use daily to ship quality work."
        />

        <div className="mb-10 flex justify-center">
          <div className="glass inline-flex rounded-full p-1.5 shadow-lg border border-border/80">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative rounded-full px-6 py-2 text-sm font-medium transition-colors",
                  activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="skills-tab-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-brand shadow-[0_0_20px_var(--glow-primary)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
            >
              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.2)"
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border/80 bg-card/75 backdrop-blur-md p-5 text-center shadow-sm transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-[0_0_20px_var(--glow-primary)]">
                  <TechIcon name={skill.icon} className="h-7 w-7" />
                </div>
                <p className="text-sm font-semibold">{skill.name}</p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-gradient-brand shadow-[0_0_10px_var(--glow-primary)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
