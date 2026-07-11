"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/personal";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const githubLink = socialLinks.find((s) => s.icon === "Github")?.href ?? "#";
  const linkedinLink = socialLinks.find((s) => s.icon === "Linkedin")?.href ?? "#";

  async function onSubmit() {
    // Frontend-only demo: simulate a network request, no backend/API involved.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    toast.success("Message sent! I'll get back to you within 24 hours.");
    reset();
  }

  function copyEmail() {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="glass flex items-center justify-between rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-semibold">{personalInfo.email}</p>
                </div>
              </div>
              <Button size="icon" variant="ghost" onClick={copyEmail} aria-label="Copy email address">
                {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="glass flex items-center gap-3 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-semibold">{personalInfo.phone}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-3 rounded-2xl p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <FaWhatsapp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <p className="text-sm font-semibold">Chat with me</p>
              </div>
            </a>

            <div className="glass flex items-center gap-3 rounded-2xl p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-semibold">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                <FaLinkedinIn className="h-4 w-4" /> LinkedIn
              </a>
            </div>

            <p className="pt-1 text-center text-xs text-muted-foreground">
              References available upon request.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass flex flex-col gap-5 rounded-3xl p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Project inquiry" {...register("subject")} />
              {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Tell me a bit about your project..."
                {...register("message")}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <Button type="submit" size="lg" className="rounded-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              This form is frontend-only — no data is stored or sent anywhere.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
