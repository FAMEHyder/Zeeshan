"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

/** Premium splash screen with circular loader orbiting the user's logo */
export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // SVG circle geometry for circular loading
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-background select-none"
        >
          {/* Ambient luminous glow behind loader */}
          <div className="absolute h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse pointer-events-none" />

          {/* Circular Loader Container */}
          <div className="relative flex h-36 w-36 items-center justify-center">
            {/* SVG Circular Progress Track & Fill */}
            <svg
              className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none"
              viewBox="0 0 144 144"
            >
              <defs>
                <linearGradient id="pageLoaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="loaderGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background dim circular track */}
              <circle
                cx="72"
                cy="72"
                r={radius}
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-primary/15"
              />

              {/* Animated Glowing Progress Ring */}
              <motion.circle
                cx="72"
                cy="72"
                r={radius}
                stroke="url(#pageLoaderGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                filter="url(#loaderGlow)"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </svg>

            {/* Orbiting Laser Particle spinning around the circular path */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute top-[18px] left-1/2 -translate-x-1/2">
                <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#06b6d4,0_0_22px_#ec4899]" />
                <div className="absolute -inset-1 rounded-full bg-cyan-400 blur-sm opacity-90" />
              </div>
            </motion.div>

            {/* Outer subtle decorative dashed ring spinning counter-clockwise */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-primary/25"
            />

            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/40 bg-card p-1 shadow-[0_0_24px_var(--glow-primary)]"
            >
              <Image
                src={personalInfo.logo || "/images/logo.jpeg"}
                alt={personalInfo.name}
                fill
                sizes="96px"
                className="rounded-full object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Brand Name & Loading Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="font-heading text-lg font-bold tracking-tight text-gradient-brand">
              {personalInfo.name}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <span>Loading</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                ...
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
