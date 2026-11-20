"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Lock,
  Maximize2,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

function ProjectBrowserCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "0px 0px -15% 0px", once: true });
  const [isInteractive, setIsInteractive] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col"
    >
      <SpotlightCard
        spotlightColor="rgba(168, 85, 247, 0.16)"
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* ============================================================== */}
        {/* Browser Mockup Header / Address Bar                            */}
        {/* ============================================================== */}
        <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-4 py-2.5 backdrop-blur-md">
          {/* Traffic lights macOS window controls */}
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 transition-opacity hover:opacity-100" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 transition-opacity hover:opacity-100" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 transition-opacity hover:opacity-100" />
          </div>

          {/* Browser Address Pill */}
          <div className="flex max-w-[280px] sm:max-w-xs md:max-w-sm flex-1 items-center justify-between gap-2 mx-3 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-mono text-muted-foreground shadow-inner">
            <div className="flex items-center gap-1.5 truncate">
              <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
              <span className="truncate text-foreground/90 font-medium">{domain}</span>
            </div>
            <button
              onClick={handleRefresh}
              aria-label="Refresh preview"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <RefreshCw
                className={cn("h-3 w-3", isRefreshing && "animate-spin text-primary")}
              />
            </button>
          </div>

          {/* Status & Live Link Controls */}
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Live</span>
            </span>

            {project.allowsIframe && (
              <button
                type="button"
                onClick={() => setIsInteractive(!isInteractive)}
                className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-primary transition-colors border border-border/60 rounded-md px-1.5 py-0.5 bg-background/50"
                title={isInteractive ? "Switch to snapshot preview" : "Switch to live interactive frame"}
              >
                <Maximize2 className="h-3 w-3" />
                <span>{isInteractive ? "Snapshot" : "Live Frame"}</span>
              </button>
            )}

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Landing Page Preview Screen (With Fetch / Scan Animation)      */}
        {/* ============================================================== */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950/90 select-none">
          {/* Simulated Fetch Laser Scanline that runs when entering viewport */}
          {isInView && (
            <motion.div
              initial={{ y: "-100%", opacity: 1 }}
              animate={{ y: "200%", opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.2 }}
              className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent z-20"
            />
          )}

          {isInteractive && project.allowsIframe ? (
            <iframe
              src={project.url}
              title={project.title}
              className="h-full w-full border-0 bg-background"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/preview block h-full w-full relative overflow-hidden cursor-pointer"
            >
              {/* Fetched Landing Page Screenshot */}
              <Image
                src={project.image}
                alt={`${project.title} landing page preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={cn(
                  "object-cover object-top transition-all duration-700 group-hover/preview:scale-[1.03]",
                  isRefreshing ? "opacity-30 blur-sm scale-95" : "opacity-100 blur-0"
                )}
                priority={index === 0}
              />

              {/* Subtle hover overlay with CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/preview:opacity-100 flex items-end justify-center p-6">
                <span className="flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-md transition-transform group-hover/preview:scale-105">
                  <Globe className="h-3.5 w-3.5" />
                  <span>Explore Live Landing Page</span>
                  <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </a>
          )}
        </div>

        {/* ============================================================== */}
        {/* Project Details & Tech Stack Metadata                          */}
        {/* ============================================================== */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                <Sparkles className="h-3 w-3" />
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-muted-foreground">
                {project.status}
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/70 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Direct Launch CTA Button */}
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <Button
                variant="default"
                size="sm"
                className="w-full rounded-xl shadow-md shadow-primary/20 hover:shadow-primary/35 transition-all group-hover:scale-[1.01]"
                nativeButton={false}
                render={
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <span>Visit Live Website</span>
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <GradientBlobs className="opacity-45" />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Live Production Work"
          description="A selection of deployed web applications, SaaS platforms and administrative dashboards with live landing page previews."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectBrowserCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
