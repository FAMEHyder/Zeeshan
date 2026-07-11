"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say about me"
          description="Feedback from clients and collaborators I've had the pleasure of working with."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3 pt-2">
                <Avatar className="h-11 w-11 border border-border">
                  {testimonial.avatar && <AvatarImage src={testimonial.avatar} alt={testimonial.name} />}
                  <AvatarFallback className="bg-gradient-brand font-semibold text-white">
                    {getInitials(testimonial.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
