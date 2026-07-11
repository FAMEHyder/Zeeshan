"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) =>
      project.categories.includes(activeCategory as ProjectCategory)
    );
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & case studies"
          description="A curated selection of projects showcasing my range across dashboards, marketing sites, e-commerce and portfolios."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-2.5">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                activeCategory === category
                  ? "border-transparent bg-gradient-brand text-white shadow-md shadow-primary/25"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    {project.liveUrl && (
                      <Button asChild size="sm" className="rounded-full">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild size="sm" variant="secondary" className="rounded-full">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.categories.map((cat) => (
                      <Badge key={cat} variant="secondary" className="text-[11px]">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-heading text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
