"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
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
  onRegisterNode: (index: number, el: HTMLDivElement | null) => void;
}

function MilestoneRow({ item, index, onRegisterNode }: MilestoneRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Active viewing and permanent energized state once reached
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
      {/* Milestone Node Container - Mathematically aligned with the timeline line */}
      <div
        ref={(el) => {
          onRegisterNode(index, el);
        }}
        className={cn(
          "absolute top-4 z-20 flex h-12 w-12 items-center justify-center",
          "left-[26px] -translate-x-1/2",
          isEven
            ? "sm:left-auto sm:right-0 sm:translate-x-1/2"
            : "sm:right-auto sm:left-0 sm:-translate-x-1/2"
        )}
      >
        {/* Subtle Ambient Pulse Wave when scroll reaches this milestone */}
        {isInView && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-1.5 rounded-full border border-primary/40 bg-primary/10"
          />
        )}

        {/* Inner Solid Opaque Disc ("cheer k na jaye") */}
        {/* The scroll light routes around this disc, keeping the graduation cap / milestone icon crisp & untouched */}
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
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  // Smooth buttery spring physics for the scroll light beam
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // Dual symmetrical continuous SVG paths that detour around every milestone circle
  const [paths, setPaths] = useState<{ left: string; right: string }>({
    left: "",
    right: "",
  });

  const handleRegisterNode = useCallback((index: number, el: HTMLDivElement | null) => {
    nodeRefs.current[index] = el;
  }, []);

  const updatePaths = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 640;
    const X = isMobile ? 26 : containerRect.width / 2;
    const R = 24; // Radius of curve wrapping around milestone circle

    const coords: number[] = [];
    nodeRefs.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const centerY = r.top - containerRect.top + r.height / 2;
      coords.push(centerY);
    });

    if (coords.length === 0) return;

    const H = containerRect.height;
    let dLeft = `M ${X} 0`;
    let dRight = `M ${X} 0`;

    coords.forEach((y) => {
      const topY = Math.max(0, y - R);
      const bottomY = y + R;

      // Straight line to top of milestone circle
      dLeft += ` L ${X} ${topY}`;
      dRight += ` L ${X} ${topY}`;

      // Left arc around milestone circle (sweep = 0)
      dLeft += ` A ${R} ${R} 0 0 0 ${X} ${bottomY}`;

      // Right arc around milestone circle (sweep = 1)
      dRight += ` A ${R} ${R} 0 0 1 ${X} ${bottomY}`;
    });

    // Final straight segment to timeline bottom
    dLeft += ` L ${X} ${H}`;
    dRight += ` L ${X} ${H}`;

    setPaths({ left: dLeft, right: dRight });
  }, []);

  useEffect(() => {
    updatePaths();

    const handleResize = () => updatePaths();
    window.addEventListener("resize", handleResize);

    // Also observe container size changes
    const observer = new ResizeObserver(() => updatePaths());
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [updatePaths]);

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
          {/* ============================================================== */}
          {/* Unified SVG Timeline Tracks: Scroll Light Itself Curves Around Circles */}
          {/* ============================================================== */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full z-10 overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="timeline-beam-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>

            {/* Base Dim Guide Tracks (Straight lines + circular rings around each node) */}
            {paths.left && (
              <>
                <path
                  d={paths.left}
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-border/40 dark:text-muted/40"
                />
                <path
                  d={paths.right}
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-border/40 dark:text-muted/40"
                />
              </>
            )}

            {/* Fallback straight line while paths initialize on first render */}
            {!paths.left && (
              <line
                x1={typeof window !== "undefined" && window.innerWidth >= 640 ? "50%" : "26"}
                y1="0"
                x2={typeof window !== "undefined" && window.innerWidth >= 640 ? "50%" : "26"}
                y2="100%"
                stroke="currentColor"
                strokeWidth="2"
                className="text-border/40 dark:text-muted/40"
              />
            )}

            {/* Active Glowing Wide Aura Line (Scroll-Driven - Routes Around Circles) */}
            {paths.left && (
              <>
                <motion.path
                  d={paths.left}
                  fill="none"
                  stroke="url(#timeline-beam-grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="blur-[5px] opacity-75"
                  style={{ pathLength: smoothProgress }}
                />
                <motion.path
                  d={paths.right}
                  fill="none"
                  stroke="url(#timeline-beam-grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="blur-[5px] opacity-75"
                  style={{ pathLength: smoothProgress }}
                />
              </>
            )}

            {/* Active Solid Core Laser Beam (Scroll-Driven - Routes Around Circles) */}
            {paths.left && (
              <>
                <motion.path
                  d={paths.left}
                  fill="none"
                  stroke="url(#timeline-beam-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_8px_var(--glow-primary)]"
                  style={{ pathLength: smoothProgress }}
                />
                <motion.path
                  d={paths.right}
                  fill="none"
                  stroke="url(#timeline-beam-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_8px_var(--glow-primary)]"
                  style={{ pathLength: smoothProgress }}
                />
              </>
            )}
          </svg>

          {/* Timeline Milestone Rows */}
          <div className="flex flex-col gap-10">
            {timelineItems.map((item, index) => (
              <MilestoneRow
                key={item.id}
                item={item}
                index={index}
                onRegisterNode={handleRegisterNode}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
