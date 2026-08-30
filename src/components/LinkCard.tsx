"use client";

import { ArrowUpRight, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LinkItem } from "@/data/profile";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type LinkCardProps = {
  link: LinkItem;
  index: number;
};

function LinkIcon({ id }: { id: string }) {
  if (id === "whatsapp") {
    return <WhatsAppIcon className="h-5 w-5" />;
  }
  if (id === "engajamento") {
    return <Zap className="h-5 w-5" aria-hidden="true" />;
  }
  return <ArrowUpRight className="h-5 w-5" aria-hidden="true" />;
}

export function LinkCard({ link, index }: LinkCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={`link-card link-card--${link.accent} focus-ring group block px-4 py-4 sm:px-5`}
      aria-label={link.label}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.3,
        delay: reduceMotion ? 0 : index * 0.07,
        ease: "easeOut",
      }}
    >
      <span className="link-card__shine" aria-hidden="true" />
      <span className="relative flex items-center gap-3">
        <span
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            link.accent === "outline"
              ? "border border-[color-mix(in_srgb,var(--gold)_35%,var(--border))] bg-[color-mix(in_srgb,var(--gold)_10%,transparent)] text-[var(--gold-bright)]"
              : "bg-black/10"
          }`}
        >
          <LinkIcon id={link.id} />
        </span>
        <span className="min-w-0 flex-1 text-left">
          <span className="font-display block text-[1.05rem] font-bold tracking-[-0.02em]">
            {link.label}
          </span>
          <span
            className={`mt-0.5 block text-sm ${
              link.accent === "outline" ? "text-[var(--text-muted)]" : "opacity-75"
            }`}
          >
            {link.description}
          </span>
        </span>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 opacity-70 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </motion.a>
  );
}
