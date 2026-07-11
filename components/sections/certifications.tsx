"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Courses & certifications"
          description="Continuous learning is core to how I work — here are a few certifications I've earned along the way."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-brand/10 bg-muted p-8">
                <div className="relative h-24 w-24">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} badge`}
                    fill
                    loading="lazy"
                    sizes="100px"
                    className="object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="font-heading text-base font-bold leading-snug">{cert.title}</h3>
                <p className="text-sm font-medium text-primary">{cert.organization}</p>
                <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {cert.date}
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      Verify <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
