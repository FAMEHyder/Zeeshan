"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { LucideIcon } from "@/components/shared/lucide-icon";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-container">
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
              className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-md shadow-primary/20">
                <LucideIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <ul className="mt-1 flex flex-col gap-1.5 text-sm">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
