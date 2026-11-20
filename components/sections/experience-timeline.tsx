"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import { timelineItems } from "@/data/timeline";
import { TimelineItem } from "@/types";
import { cn } from "@/lib/utils";

const typeConfig: Record<
  string,
  {
    border: string;
    iconColor: string;
    glow: string;
    badge: string;
  }
> = {
  education: {
    border: "border-violet-500",
    iconColor: "text-violet-400",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.55)]",
    badge: "bg-violet-500/15 text-violet-400 border-violet-500/40",
  },
  course: {
    border: "border-cyan-500",
    iconColor: "text-cyan-400",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.55)]",
    badge: "bg-cyan-500/15 text-cyan-400 border-cyan-500/40",
  },
  work: {
    border: "border-emerald-500",
    iconColor: "text-emerald-400",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.55)]",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
  },
  internship: {
    border: "border-amber-500",
    iconColor: "text-amber-400",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.55)]",
    badge: "bg-amber-500/15 text-amber-400 border-amber-500/40",
  },
};

const typeLabels: Record<string, string> = {
  education: "Education",
  course: "Course",
  work: "Freelance / Work",
  internship: "Internship",
};

interface MilestoneRowProps {
  item: TimelineItem;
  index: number;
}

function MilestoneRow({ item, index }: MilestoneRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Scroll tracking through this specific milestone
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 85%", "center 52%"],
  });

  const smoothItemProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  // Light wraps around the milestone circle's OWN border from top (12 o'clock) to bottom (6 o'clock)
  const circleProgress = useTransform(smoothItemProgress, [0.05, 0.95], [0, 1]);

  const isReached = useInView(rowRef, { margin: "0px 0px -25% 0px", once: true });
  const isInView = useInView(rowRef, { margin: "0px 0px -25% 0px", once: false });
  const isEnergized = isReached || isInView;
  const config = typeConfig[item.type] || typeConfig.education;

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative flex flex-col gap-4 pl-16 sm:w-1/2 sm:pl-0",
        isEven ? "sm:ml-0 sm:self-start sm:pr-12 sm:text-right" : "sm:self-end sm:pl-12"
      )}
    >
      {/* Milestone Node Container - Exactly 1 circle, no extra/separate circles underneath */}
      <div
        className={cn(
          "absolute top-4 z-20 flex h-11 w-11 items-center justify-center",
          "left-[26px] -translate-x-1/2",
          isEven
            ? "sm:left-auto sm:right-0 sm:translate-x-1/2"
            : "sm:right-auto sm:left-0 sm:-translate-x-1/2"
        )}
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 44 44">
            <defs>
              <linearGradient id={`milestone-grad-${item.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>

            {/* Solid opaque inner disc: completely blocks the vertical line so it NEVER cuts through the icon */}
            <circle cx="22" cy="22" r="20" className="fill-background dark:fill-zinc-950" />

            {/* Base dim border of the milestone circle */}
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border/60 dark:text-muted/50"
            />

            {/* Active Glowing Aura on the milestone circle's OWN border */}
            <motion.path
              d="M 22 2 A 20 20 0 0 0 22 42"
              fill="none"
              stroke={`url(#milestone-grad-${item.id})`}
              strokeWidth="6"
              strokeLinecap="round"
              className="blur-[3px] opacity-70"
              style={{ pathLength: circleProgress }}
            />
            <motion.path
              d="M 22 2 A 20 20 0 0 1 22 42"
              fill="none"
              stroke={`url(#milestone-grad-${item.id})`}
              strokeWidth="6"
              strokeLinecap="round"
              className="blur-[3px] opacity-70"
              style={{ pathLength: circleProgress }}
            />

            {/* Active Scroll Light - Flows directly along the milestone circle's OWN left & right border */}
            <motion.path
              d="M 22 2 A 20 20 0 0 0 22 42"
              fill="none"
              stroke={`url(#milestone-grad-${item.id})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: circleProgress }}
            />
            <motion.path
              d="M 22 2 A 20 20 0 0 1 22 42"
              fill="none"
              stroke={`url(#milestone-grad-${item.id})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: circleProgress }}
            />
          </svg>

          {/* Icon in Center */}
          <LucideIcon
            name={item.icon}
            className={cn(
              "relative z-10 h-5 w-5 transition-colors duration-300",
              isEnergized ? config.iconColor : "text-muted-foreground"
            )}
          />
        </div>
      </div>

      {/* Card Content */}
      <SpotlightCard
        spotlightColor="rgba(168, 85, 247, 0.18)"
        className={cn(
          "p-5 sm:p-6 bg-card/80 backdrop-blur-md border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
          isEnergized ? "border-primary/40 shadow-md shadow-primary/5" : "border-border/80"
        )}
      >
        <span
          className={cn(
            "mb-2 inline-block rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
            config.badge
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
}

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  // Smooth buttery spring physics for the vertical light beam
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamic light beam height
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

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
          {/* Base dim guide track line (Clean single line, NO separate circles underneath) */}
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

          {/* Timeline Milestone Rows */}
          <div className="flex flex-col gap-10">
            {timelineItems.map((item, index) => (
              <MilestoneRow key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
