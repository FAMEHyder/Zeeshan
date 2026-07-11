"use client";

import { motion } from "framer-motion";
import { BookMarked, PenLine } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/data/research";
import { researchSkills } from "@/data/personal";

export function Research() {
  return (
    <section id="research" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Research"
          title="Research & publications"
          description="Academic writing and research work I've contributed to alongside my development studies."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-col gap-5"
          >
            {publications.map((pub) => (
              <motion.article
                key={pub.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <BookMarked className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold leading-snug">{pub.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{pub.journal}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Authors: {pub.authors}</p>
                <Badge variant="secondary" className="w-fit text-[11px]">
                  {pub.status}
                </Badge>
              </motion.article>
            ))}
          </motion.div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <PenLine className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold">Research & Writing Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {researchSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
