"use client";

import { motion } from "motion/react";

const lines = [
  "compiling ideas...",
  "stretching the vector space...",
  "warming up the model...",
  "chunking the unknown...",
  "embedding things...",
];

export function BuildingTag() {
  const line = lines[Math.floor(Math.random() * lines.length)];

  return (
    <div className="mt-4 flex items-center gap-2 font-mono text-sm text-foreground/50">
      <span className="text-foreground/30">{">"}</span>
      <span>{line}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="inline-block h-4 w-1.5 bg-foreground/40"
      />
    </div>
  );
}
