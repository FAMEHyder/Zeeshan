"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBlobs } from "@/components/shared/gradient-blobs";
import { SocialIcon } from "@/components/shared/social-icon";
import { personalInfo, socialLinks } from "@/data/personal";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export function Hero() {
  const typedText = useTypingEffect({ words: personalInfo.roles });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
      aria-label="Introduction"
    >
      <GradientBlobs />
      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personalInfo.availableForWork ? "Available for freelance work" : "Currently unavailable"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient-brand">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex h-9 items-center gap-2 font-heading text-xl font-semibold text-muted-foreground sm:text-2xl"
          >
            <Sparkles className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            <span aria-live="polite">
              {typedText}
              <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-primary align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            {personalInfo.tagline} Based in {personalInfo.location}, I turn ideas into polished,
            production-ready web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              className="rounded-full"
              nativeButton={false}
              render={
                <Link href="#experience">
                  View Experience
                  <ArrowRight className="h-4 w-4" />
                </Link>
              }
            />
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              nativeButton={false}
              render={
                <a href={personalInfo.resumeUrl} download>
                  Download Resume
                  <Download className="h-4 w-4" />
                </a>
              }
            />
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full"
              nativeButton={false}
              render={
                <Link href="#contact">
                  Contact Me
                  <MessageSquare className="h-4 w-4" />
                </Link>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-3 pt-2"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-brand opacity-30 blur-2xl" />
          <div className="glass glow-primary relative h-full w-full overflow-hidden rounded-[2.5rem] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src={personalInfo.avatar}
                alt={`Portrait of ${personalInfo.name}, ${personalInfo.title}`}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass absolute -left-6 bottom-8 hidden rounded-2xl px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-xs text-muted-foreground">Experience</p>
            <p className="font-heading text-lg font-bold text-gradient-brand">8+ Months</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass absolute -right-4 top-6 hidden rounded-2xl px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-xs text-muted-foreground">Focus</p>
            <p className="font-heading text-lg font-bold text-gradient-brand">MERN Stack</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
