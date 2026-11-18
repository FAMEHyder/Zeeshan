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
      {/* Ambient Pulsing Atmospheric Halo behind portrait */}
      <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-45 blur-3xl animate-glow-pulse -z-10" />
      <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl -z-10" />

      {/* Orbit Track 3 Guide Ring (Outer) */}
      <div className="pointer-events-none absolute -inset-8 sm:-inset-10 rounded-full border border-dashed border-purple-400/20 dark:border-purple-400/25" />

      {/* Orbit Track 2 Guide Ring (Middle) */}
      <div className="pointer-events-none absolute -inset-5 sm:-inset-6.5 rounded-full border border-emerald-400/15 dark:border-emerald-400/20" />

      {/* Orbit Track 1 Guide Ring (Inner) */}
      <div className="pointer-events-none absolute -inset-2.5 sm:-inset-3.5 rounded-full border border-cyan-400/15 dark:border-cyan-400/20" />

      {/* ============================================================== */}
      {/* LIGHT 2: Neon Violet / Purple (Outer Track - Counter-Clockwise) */}
      {/* ============================================================== */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -inset-8 sm:-inset-10 rounded-full"
      >
        {/* Long Glowing Aura Tail (~150° arc trailing in clockwise direction) */}
        <div
          className="pointer-events-none absolute -inset-1.5 rounded-full blur-[5px]"
          style={{
            background:
              "conic-gradient(from 0deg, #ffffff 0deg, rgba(192, 132, 252, 0.95) 4deg, rgba(168, 85, 247, 0.75) 35deg, rgba(168, 85, 247, 0.35) 90deg, rgba(168, 85, 247, 0.08) 140deg, transparent 160deg, transparent 360deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px), #000 100%, transparent 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px), #000 100%, transparent 100%)",
          }}
        />

        {/* Crisp High-Intensity Core Tail */}
        <div
          className="pointer-events-none absolute -inset-[2px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #ffffff 0deg, #c084fc 4deg, rgba(192, 132, 252, 0.85) 30deg, rgba(168, 85, 247, 0.45) 85deg, rgba(168, 85, 247, 0.12) 135deg, transparent 150deg, transparent 360deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3.5px), #000 100%, transparent 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3.5px), #000 100%, transparent 100%)",
          }}
        />

        {/* Leading Light Glow Tip (pure light glow, no hard dot) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-8 w-8 rounded-full bg-purple-500/35 blur-md" />
            <span className="h-4 w-4 rounded-full bg-purple-400/50 blur-[2px]" />
          </div>
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* LIGHT 3: Emerald / Mint (Middle Track - Clockwise, 14s, 140° offset) */}
      {/* ============================================================== */}
      <motion.div
        animate={{ rotate: [140, 500] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -inset-5 sm:-inset-6.5 rounded-full"
      >
        {/* Long Glowing Aura Tail (~150° arc trailing in counter-clockwise direction) */}
        <div
          className="pointer-events-none absolute -inset-1.5 rounded-full blur-[5px]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 200deg, rgba(52, 211, 153, 0.06) 230deg, rgba(52, 211, 153, 0.35) 280deg, rgba(52, 211, 153, 0.75) 330deg, rgba(52, 211, 153, 0.95) 356deg, #ffffff 360deg, transparent 360.5deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px), #000 100%, transparent 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px), #000 100%, transparent 100%)",
          }}
        />

        {/* Crisp High-Intensity Core Tail */}
        <div
          className="pointer-events-none absolute -inset-[2px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 210deg, rgba(52, 211, 153, 0.12) 230deg, rgba(52, 211, 153, 0.45) 280deg, rgba(52, 211, 153, 0.85) 330deg, #34d399 355deg, #ffffff 360deg, transparent 360.5deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3.5px), #000 100%, transparent 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3.5px), #000 100%, transparent 100%)",
          }}
        />

        {/* Leading Light Glow Tip (pure light glow, no hard dot) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-7 w-7 rounded-full bg-emerald-400/30 blur-md" />
            <span className="h-3.5 w-3.5 rounded-full bg-emerald-400/50 blur-[2px]" />
          </div>
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* LIGHT 1: Electric Cyan (Inner Track - Clockwise, 8s)           */}
      {/* ============================================================== */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -inset-2.5 sm:-inset-3.5 rounded-full"
      >
        {/* Long Glowing Aura Tail (~150° arc trailing in counter-clockwise direction) */}
        <div
          className="pointer-events-none absolute -inset-1.5 rounded-full blur-[5px]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 200deg, rgba(56, 189, 248, 0.06) 230deg, rgba(56, 189, 248, 0.35) 280deg, rgba(56, 189, 248, 0.75) 330deg, rgba(56, 189, 248, 0.95) 356deg, #ffffff 360deg, transparent 360.5deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px), #000 100%, transparent 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 12px), #000 calc(100% - 11px), #000 100%, transparent 100%)",
          }}
        />

        {/* Crisp High-Intensity Core Tail */}
        <div
          className="pointer-events-none absolute -inset-[2px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 210deg, rgba(56, 189, 248, 0.12) 230deg, rgba(56, 189, 248, 0.45) 280deg, rgba(56, 189, 248, 0.85) 330deg, #38bdf8 355deg, #ffffff 360deg, transparent 360.5deg)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3.5px), #000 100%, transparent 100%)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3.5px), #000 100%, transparent 100%)",
          }}
        />

        {/* Leading Light Glow Tip (pure light glow, no hard dot) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-8 w-8 rounded-full bg-cyan-400/35 blur-md" />
            <span className="h-4 w-4 rounded-full bg-cyan-400/60 blur-[2px]" />
          </div>
        </div>
      </motion.div>

      {/* ============================================================== */}
      {/* Central Circular Profile Photo Frame                           */}
      {/* ============================================================== */}
      {/* Spinning Conic Gradient Rim along the photo border */}
      <div
        className="pointer-events-none absolute -inset-1 sm:-inset-1.5 rounded-full bg-[conic-gradient(from_0deg,transparent_0_100deg,oklch(0.72_0.19_285)_180deg,oklch(0.72_0.16_210)_240deg,transparent_320deg)] opacity-70 blur-[2px] animate-spin"
        style={{ animationDuration: "6s" }}
      />

      {/* Glass Photo Circle Frame */}
      <div className="glass glow-primary relative size-[255px] sm:size-[285px] md:size-[305px] rounded-full p-2.5 sm:p-3 border border-primary/35 shadow-2xl flex items-center justify-center">
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
