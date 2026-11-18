"use client";

import { cn } from "@/lib/utils";

interface GradientBlobsProps {
  className?: string;
  variant?: "default" | "subtle" | "intense";
}

/**
 * Animated ambient lighting glow orbs used as luminous section backdrops.
 * Incorporates continuous gentle floating and pulsing keyframe animations.
 */
export function GradientBlobs({ className, variant = "default" }: GradientBlobsProps) {
  const intensityMap = {
    subtle: "opacity-40",
    default: "opacity-60",
    intense: "opacity-85",
  };

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none",
        intensityMap[variant],
        className
      )}
    >
      {/* Primary Brand Luminous Glow Orb - Floating Slow */}
      <div className="absolute -left-28 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-[110px] animate-float sm:h-[420px] sm:w-[420px]" />

      {/* Accent Violet/Cyan Glow Orb - Floating Delayed */}
      <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-accent/25 blur-[120px] animate-float-delayed sm:h-[380px] sm:w-[380px]" />

      {/* Center Breathing Light Core */}
      <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/20 blur-[100px] animate-glow-pulse sm:h-[320px] sm:w-[320px]" />

      {/* Subtle Micro Accent Glow */}
      <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-accent/15 blur-[90px] animate-float sm:h-64 sm:w-64" />
    </div>
  );
}
