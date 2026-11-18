"use client";

import { motion } from "framer-motion";
import { BookMarked, PenLine, ExternalLink, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/data/research";
import { researchSkills } from "@/data/personal";

export function Research() {
  return (
    <section id="research" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <GradientBlobs className="opacity-50" />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Research"
          title="Research & publications"
          description="Academic writing and research work I've contributed to alongside my development studies."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
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
              >
                <SpotlightCard
                  spotlightColor="rgba(56, 189, 248, 0.2)"
                  className="group flex flex-col gap-4 p-6 sm:p-7 bg-card/75 backdrop-blur-md border-border/80 hover:border-primary/50 shadow-sm transition-all hover:shadow-2xl hover:shadow-primary/15"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                      <BookMarked className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title inline-flex items-center gap-1.5 font-heading text-base sm:text-lg font-bold leading-snug text-foreground hover:text-primary transition-colors"
                      >
                        <span>{pub.title}</span>
                        <ExternalLink className="h-4 w-4 shrink-0 opacity-70 transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 group-hover/title:opacity-100 text-primary" />
                      </a>
                      <p className="mt-1.5 text-sm font-semibold text-primary">{pub.journal}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground/80">Authors:</span> {pub.authors}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/50">
                    <Badge
                      variant="secondary"
                      className="w-fit text-[11px] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                      {pub.status}
                    </Badge>

                    <div className="flex items-center gap-2">
                      {pub.scholarUrl && (
                        <a
                          href={pub.scholarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-sm"
                        >
                          <GraduationCap className="h-3.5 w-3.5" />
                          <span>Google Scholar</span>
                        </a>
                      )}
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-primary/10 border border-primary/30 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-gradient-brand hover:text-white hover:shadow-[0_0_15px_var(--glow-primary)]"
                      >
                        <span>View Paper</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.article>
            ))}
          </motion.div>

          <SpotlightCard
            spotlightColor="rgba(168, 85, 247, 0.15)"
            className="flex flex-col gap-5 p-6 sm:p-8 bg-card/75 backdrop-blur-md border-border/80 shadow-md sticky top-24"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <PenLine className="h-4 w-4" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Research & Writing Skills</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Certified scholarly research proficiencies and scientific writing methods from prestigious research academies.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {researchSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border/70 bg-muted/40 px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
