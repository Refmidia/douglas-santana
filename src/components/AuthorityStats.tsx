"use client";

import { motion, useReducedMotion } from "framer-motion";
import { authorityStats } from "@/data/profile";

export function AuthorityStats() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      aria-label="Indicadores"
      className="mt-7 grid grid-cols-3 gap-2.5"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.08 }}
    >
      {authorityStats.map((stat) => (
        <article
          key={stat.id}
          className="stat-card rounded-2xl px-2 py-3 text-center sm:px-3"
          aria-label={stat.fullLabel}
        >
          <p className="font-display text-sm font-bold tracking-tight text-[var(--text)] sm:text-base">
            {stat.value}
          </p>
          <p className="mt-0.5 text-[0.68rem] leading-tight text-[var(--text-muted)] sm:text-xs">
            {stat.label}
          </p>
        </article>
      ))}
    </motion.section>
  );
}
