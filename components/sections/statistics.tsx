"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "@/components/shared/lucide-icon";
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
      className="glass flex flex-col items-center gap-3 rounded-3xl p-8 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white">
        <LucideIcon name={stat.icon} className="h-7 w-7" />
      </div>
      <p className="font-heading text-4xl font-extrabold sm:text-5xl">
        {count}
        {stat.suffix}
      </p>
      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}

export function Statistics() {
  return (
    <section className="relative py-20">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {statistics.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
