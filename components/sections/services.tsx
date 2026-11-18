"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <GradientBlobs className="opacity-50" />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Services"
          title="How I can help you"
          description="From pixel-perfect UI implementation to fully optimized, production-ready websites — here's what I offer."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.22)"
                className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border/80 bg-card/75 backdrop-blur-md p-7 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15"
              >
                {/* Internal Pulsing Glow Orb */}
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/15 blur-2xl transition-transform duration-500 group-hover:scale-150 animate-glow-pulse" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--glow-primary)]">
                  <LucideIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-auto flex flex-col gap-2 pt-2 text-sm">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-muted-foreground transition-colors group-hover:text-foreground/90"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
