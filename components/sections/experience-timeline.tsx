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
    gradientStop: string;
  }
> = {
  education: {
    border: "border-violet-500",
    iconColor: "text-violet-400",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.55)]",
    badge: "bg-violet-500/15 text-violet-400 border-violet-500/40",
    gradientStop: "#8b5cf6",
  },
  course: {
    border: "border-cyan-500",
    iconColor: "text-cyan-400",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.55)]",
    badge: "bg-cyan-500/15 text-cyan-400 border-cyan-500/40",
    gradientStop: "#06b6d4",
  },
  work: {
    border: "border-emerald-500",
    iconColor: "text-emerald-400",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.55)]",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
    gradientStop: "#10b981",
  },
  internship: {
    border: "border-amber-500",
    iconColor: "text-amber-400",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.55)]",
    badge: "bg-amber-500/15 text-amber-400 border-amber-500/40",
    gradientStop: "#f59e0b",
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

  // Tracks active viewing band and permanently energized state once reached
  const isInView = useInView(rowRef, { margin: "0px 0px -28% 0px", once: false });
  const hasReached = useInView(rowRef, { margin: "0px 0px -28% 0px", once: true });

  const isEnergized = isInView || hasReached;
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
      {/* Milestone Node Container - Mathematically centered on the timeline line */}
      <div
        className={cn(
          "absolute top-4 z-20 flex h-12 w-12 items-center justify-center",
          "left-[26px] -translate-x-1/2",
          isEven
            ? "sm:left-auto sm:right-0 sm:translate-x-1/2"
            : "sm:right-auto sm:left-0 sm:-translate-x-1/2"
        )}
      >
        {/* Circular Guide Ring Track */}
        <div className="pointer-events-none absolute -inset-1 rounded-full border border-border/40 dark:border-muted/50" />

        {/* Orbiting Laser Beam ("light b usi circle may goomay") */}
        {isEnergized && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="pointer-events-none absolute -inset-2.5 z-30 rounded-full"
          >
            {/* Luminous orbiting photon bead with glowing tail */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#06b6d4,0_0_24px_#a855f7]" />
              <span className="absolute -inset-1 rounded-full bg-cyan-400 blur-sm opacity-90" />
            </div>
          </motion.div>
        )}

        {/* SVG Circular Light Path that illuminates around the perimeter */}
        <svg
          className="pointer-events-none absolute -inset-2 z-25 h-[calc(100%+16px)] w-[calc(100%+16px)] -rotate-90"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient id={`milestone-grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke={`url(#milestone-grad-${item.id})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 26}
            initial={{ strokeDashoffset: 2 * Math.PI * 26 }}
            animate={
              isEnergized
                ? { strokeDashoffset: 0 }
                : { strokeDashoffset: 2 * Math.PI * 26 }
            }
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </svg>

        {/* Pulsing Light Wave when reached */}
        {isInView && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0.7 }}
            animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-2 rounded-full border border-primary/50 bg-primary/10"
          />
        )}

        {/* Inner Solid Opaque Disc ("cheer k na jaye") */}
        {/* Solid background guarantees vertical laser line NEVER cuts through the icon */}
        <div
          className={cn(
            "relative z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 bg-background dark:bg-zinc-950 transition-all duration-300",
            config.border,
            isEnergized ? config.glow : "border-border/60 shadow-sm"
          )}
        >
          <LucideIcon
            name={item.icon}
            className={cn(
              "h-5 w-5 transition-colors duration-300",
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

  // Smooth spring physics for the light beam
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
