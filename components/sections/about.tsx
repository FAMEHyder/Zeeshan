"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { TechIcon } from "@/components/shared/tech-icon";
import {
  aboutHighlights,
  enjoyedTech,
  personalInfo,
  strengths,
} from "@/data/personal";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me a little better"
          description="A snapshot of who I am, what I care about, and how I like to build for the web."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-brand opacity-15 blur-2xl" />
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} working`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {aboutHighlights.map((item) => (
                <div key={item.label} className="glass rounded-2xl p-4">
                  <LucideIcon name={item.icon} className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.05}>
              <h3 className="font-heading text-2xl font-bold sm:text-3xl">
                Frontend developer crafting delightful digital products.
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {personalInfo.bio} My career goal is to keep growing as an engineer while
                contributing to products that genuinely improve people&apos;s workflows and lives —
                collaborating with teams that care as much about craft as I do.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h4 className="mb-3 font-heading text-lg font-semibold">My Strengths</h4>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {strengths.map((strength) => (
                    <div key={strength} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h4 className="mb-3 font-heading text-lg font-semibold">
                  Technologies I Enjoy Working With
                </h4>
                <div className="flex flex-wrap gap-3">
                  {enjoyedTech.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                    >
                      <TechIcon name={tech.icon} className="h-4 w-4" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
