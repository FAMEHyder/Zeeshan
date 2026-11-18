"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  // Smooth buttery spring physics for the light beam
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamic light beam height and traveling orb position
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const lightTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const lightOpacity = useTransform(smoothProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0.9]);

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

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          {/* Base dim guide track line */}
          <div className="absolute left-[26px] top-0 h-full w-[2px] -translate-x-1/2 bg-border/40 dark:bg-muted/40 sm:left-1/2" />

          {/* Active Glowing Wide Aura Line (Scroll-driven) */}
          <motion.div
            style={{ height: lineHeight }}
            className="pointer-events-none absolute left-[26px] top-0 w-[8px] -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-cyan-400 sm:left-1/2 blur-[4px] opacity-80 origin-top z-10"
          />

          {/* Active Solid Core Light Beam (Scroll-driven) with continuous flowing laser pulse */}
          <motion.div
            style={{ height: lineHeight }}
            className="pointer-events-none absolute left-[26px] top-0 w-[2.5px] -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-cyan-400 sm:left-1/2 shadow-[0_0_12px_var(--glow-primary),0_0_20px_var(--glow-accent)] origin-top z-10 overflow-hidden"
          >
            {/* Shimmer pulse traveling down the line continuously */}
            <motion.div
              animate={{ y: ["-100%", "400%"] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute inset-x-0 h-32 w-full bg-gradient-to-b from-transparent via-white/90 to-transparent"
            />
          </motion.div>

          {/* Traveling Glowing Light Orb / Laser Tip riding the scroll edge */}
          <motion.div
            style={{ top: lightTop, opacity: lightOpacity }}
            className="pointer-events-none absolute left-[26px] -translate-x-1/2 -translate-y-1/2 sm:left-1/2 z-20"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer Pulsing Flare */}
              <span className="absolute h-9 w-9 rounded-full bg-cyan-400/40 blur-md animate-pulse" />
              <span className="absolute h-5 w-5 rounded-full bg-primary/70 blur-[2px]" />
              {/* White-Hot Core Spark */}
              <span className="relative h-3.5 w-3.5 rounded-full bg-white ring-2 ring-cyan-300 shadow-[0_0_14px_#38bdf8,0_0_28px_#0284c7,0_0_42px_#a855f7]" />
            </div>
          </motion.div>

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
