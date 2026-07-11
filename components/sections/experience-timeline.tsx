"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { timelineItems } from "@/data/timeline";
import { cn } from "@/lib/utils";

const typeStyles: Record<string, string> = {
  education: "bg-violet-500/10 text-violet-500 border-violet-500/30",
  course: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
  work: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  internship: "bg-amber-500/10 text-amber-500 border-amber-500/30",
};

const typeLabels: Record<string, string> = {
  education: "Education",
  course: "Course",
  work: "Freelance / Work",
  internship: "Internship",
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience & Education"
          title="My journey so far"
          description="A timeline of my education, courses and freelance work that shaped who I am as a developer today."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:left-1/2" />

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
                  <div
                    className={cn(
                      "absolute left-2.5 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background sm:top-1",
                      typeStyles[item.type],
                      isEven ? "sm:-right-4 sm:left-auto" : "sm:-left-4"
                    )}
                  >
                    <LucideIcon name={item.icon} className="h-4 w-4" />
                  </div>

                  <div className="glass rounded-2xl p-5">
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
                    <p className="mt-1 text-xs text-muted-foreground">{item.period}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
