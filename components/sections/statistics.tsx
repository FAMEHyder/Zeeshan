"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import { statistics } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ stat, index }: { stat: (typeof statistics)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp({ end: stat.value, start: isInView, duration: 1600 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <SpotlightCard
        spotlightColor="rgba(168, 85, 247, 0.22)"
        className="group flex h-full flex-col items-center gap-3.5 rounded-3xl p-7 sm:p-8 text-center bg-card/75 backdrop-blur-md border-border/80 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/15"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--glow-primary)]">
          <LucideIcon name={stat.icon} className="h-7 w-7" />
        </div>
        <p className="font-heading text-4xl font-extrabold sm:text-5xl text-gradient-brand text-glow tracking-tight">
          {count}
          {stat.suffix}
        </p>
        <p className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
          {stat.label}
        </p>
      </SpotlightCard>
    </motion.div>
  );
}

export function Statistics() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Ambient background lighting */}
      <GradientBlobs className="opacity-45" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {statistics.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
