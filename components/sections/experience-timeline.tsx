"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import { timelineItems } from "@/data/timeline";
import { cn } from "@/lib/utils";

const typeStyles: Record<string, string> = {
  education: "bg-violet-500/15 text-violet-400 border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.3)]",
  course: "bg-cyan-500/15 text-cyan-400 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]",
  work: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]",
  internship: "bg-amber-500/15 text-amber-400 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]",
};

const typeLabels: Record<string, string> = {
  education: "Education",
  course: "Course",
  work: "Freelance / Work",
  internship: "Internship",
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <GradientBlobs className="opacity-50" />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Experience & Education"
          title="My journey so far"
          description="A timeline of my education, courses and freelance work that shaped who I am as a developer today."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Luminous Glowing Timeline Bar */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2 shadow-[0_0_8px_var(--glow-primary)]" />

          <div className="flex flex-col gap-10">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "relative flex flex-col gap-4 pl-16 sm:w-1/2 sm:pl-0",
                    isEven ? "sm:pr-10 sm:text-right sm:self-start sm:ml-0" : "sm:pl-10 sm:self-end"
                  )}
                >
                  {/* Glowing Milestone Beacon Node */}
                  <div
                    className={cn(
                      "absolute left-2.5 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-card transition-all duration-300 hover:scale-125 sm:top-1",
                      typeStyles[item.type],
                      isEven ? "sm:-right-4 sm:left-auto" : "sm:-left-4"
                    )}
                  >
                    <LucideIcon name={item.icon} className="h-4 w-4" />
                  </div>

                  <SpotlightCard
                    spotlightColor="rgba(168, 85, 247, 0.18)"
                    className="p-5 sm:p-6 bg-card/80 backdrop-blur-md border-border/80 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <span
                      className={cn(
                        "mb-2 inline-block rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
                        typeStyles[item.type]
                      )}
                    >
                      {typeLabels[item.type]}
                    </span>
                    <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                    <p className="text-sm font-medium text-primary">{item.organization}</p>
                    <p className="mt-1 text-xs text-muted-foreground font-mono">{item.period}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
