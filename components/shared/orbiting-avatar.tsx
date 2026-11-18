"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface OrbitingAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export function OrbitingAvatar({ src, alt, className = "" }: OrbitingAvatarProps) {
  return (
    <div className={`relative mx-auto flex items-center justify-center ${className}`}>
      {/* Ambient Pulsing Atmospheric Halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-45 blur-3xl animate-glow-pulse -z-10" />
      <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl -z-10" />

      {/* Orbit Track 2 (Outer - Subtle dashed ring) */}
      <div className="pointer-events-none absolute -inset-6 sm:-inset-8 rounded-full border border-dashed border-primary/25 dark:border-primary/30" />

      {/* Light 2 Orbit (Neon Violet / Purple - Counter-Clockwise, 11s) */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -inset-6 sm:-inset-8 rounded-full"
      >
        {/* Curved Comet Tail trailing behind Light 2 */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(192, 132, 252, 0.5) 0deg, transparent 45deg, transparent 360deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2px))",
          }}
        />

        {/* Light 2 Orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-9 w-9 rounded-full bg-purple-500/35 blur-md animate-pulse" />
            <span className="absolute h-5 w-5 rounded-full bg-purple-400/60 blur-[2px]" />
            <span className="relative h-3.5 w-3.5 rounded-full bg-white ring-2 ring-purple-300 shadow-[0_0_12px_#c084fc,0_0_24px_#a855f7,0_0_36px_#9333ea]" />
          </div>
        </div>
      </motion.div>

      {/* Orbit Track 1 (Inner - Subtle solid ring) */}
      <div className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-full border border-primary/20 dark:border-primary/25" />

      {/* Light 1 Orbit (Electric Cyan - Clockwise, 8s) */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-full"
      >
        {/* Curved Comet Tail trailing behind Light 1 */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 280deg, transparent 0deg, transparent 35deg, rgba(56, 189, 248, 0.5) 80deg, transparent 80.5deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2px))",
          }}
        />

        {/* Light 1 Orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-10 w-10 rounded-full bg-cyan-400/35 blur-md animate-pulse" />
            <span className="absolute h-6 w-6 rounded-full bg-cyan-400/60 blur-[2px]" />
            <span className="relative h-4 w-4 rounded-full bg-white ring-2 ring-cyan-300 shadow-[0_0_14px_#38bdf8,0_0_26px_#0284c7,0_0_40px_#0ea5e9]" />
          </div>
        </div>
      </motion.div>

      {/* Light 3 Orbit (Emerald Green / Mint - Clockwise, 14s, starts offset at 140deg) */}
      <motion.div
        animate={{ rotate: [140, 500] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-full"
      >
        {/* Curved Comet Tail trailing behind Light 3 */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 280deg, transparent 0deg, transparent 40deg, rgba(52, 211, 153, 0.45) 80deg, transparent 80.5deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px))",
          }}
        />

        {/* Light 3 Orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-8 w-8 rounded-full bg-emerald-400/30 blur-md animate-pulse" />
            <span className="absolute h-5 w-5 rounded-full bg-emerald-400/50 blur-[2px]" />
            <span className="relative h-3 w-3 rounded-full bg-white ring-2 ring-emerald-300 shadow-[0_0_12px_#34d399,0_0_22px_#10b981,0_0_34px_#059669]" />
          </div>
        </div>
      </motion.div>

      {/* Spinning Conic Gradient Rim around the circular border */}
      <div
        className="pointer-events-none absolute -inset-1 sm:-inset-1.5 rounded-full bg-[conic-gradient(from_0deg,transparent_0_100deg,oklch(0.72_0.19_285)_180deg,oklch(0.72_0.16_210)_240deg,transparent_320deg)] opacity-70 blur-[2px] animate-spin"
        style={{ animationDuration: "6s" }}
      />

      {/* Glass Photo Circle Frame */}
      <div className="glass glow-primary relative size-[260px] sm:size-[300px] md:size-[320px] rounded-full p-2.5 sm:p-3 border border-primary/35 shadow-2xl flex items-center justify-center">
        {/* Inner Circle Image Container with Circular Mask */}
        <div className="relative h-full w-full rounded-full overflow-hidden border border-white/20 dark:border-white/10 bg-card/60 shadow-inner">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 80vw, 340px"
            className="object-cover object-top transition-transform duration-700 hover:scale-105 select-none"
          />
        </div>
      </div>
    </div>
  );
}
