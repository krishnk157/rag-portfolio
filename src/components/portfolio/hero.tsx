"use client";

import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import type { ResumeData } from "@/data/resume";
import { cn } from "@/lib/utils";

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero({ data }: { data: ResumeData }) {
  const reduce = useReducedMotion();
  const words = data.name.split(" ");

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
        {words.map((word, i) => (
          <motion.span
            key={word}
            className="mr-[0.25em] inline-block last:mr-0"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotateX: 45 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + i * 0.15,
              ease,
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="mt-5 max-w-xl text-xl font-medium text-foreground/70 sm:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease }}
      >
        {data.title}
      </motion.p>

      <motion.p
        className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease }}
      >
        {data.summary}
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease }}
      >
        <a
          href={`mailto:${data.contact.email}`}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Mail className="mr-2 size-4" />
          {data.contact.email}
        </a>
        <a
          href={data.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <ExternalLink className="mr-2 size-4" />
          {data.contact.linkedinDisplay}
        </a>
        <a
          href={`tel:${data.contact.phone}`}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <Phone className="mr-2 size-4" />
          {data.contact.phone}
        </a>
        <span
          className={cn(
            buttonVariants({ variant: "outline" }),
            "pointer-events-none",
          )}
        >
          <MapPin className="mr-2 size-4" />
          {data.location}
        </span>
      </motion.div>
    </div>
  );
}
