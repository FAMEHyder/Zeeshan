"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechIcon } from "@/components/shared/tech-icon";
import { techStack } from "@/data/techstack";

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools of the trade"
          description="An interactive look at the languages, frameworks and tools I reach for most often."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 transition-shadow hover:shadow-lg"
              style={{ "--tech-color": tech.color } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"
                style={{ backgroundColor: tech.color }}
              />
              <TechIcon name={tech.icon} className="h-7 w-7 text-foreground/80 transition-colors group-hover:text-primary sm:h-8 sm:w-8" />
              <span className="text-center text-[11px] font-medium text-muted-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
