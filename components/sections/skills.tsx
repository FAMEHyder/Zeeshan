"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechIcon } from "@/components/shared/tech-icon";
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
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A blend of core frontend languages, frameworks and the tools I use daily to ship quality work."
        />

        <div className="mb-10 flex justify-center">
          <div className="glass inline-flex rounded-full p-1.5">
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
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-brand"
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
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white">
                <TechIcon name={skill.icon} className="h-7 w-7" />
              </div>
              <p className="text-sm font-semibold">{skill.name}</p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-gradient-brand"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
