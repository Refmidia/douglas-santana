"use client";

import { BadgeCheck, Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";

export function ProfileHeader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="flex flex-col items-center text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="relative mb-5">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] blur-2xl"
        />
        <div className="rounded-full bg-[linear-gradient(145deg,var(--gold-bright),var(--gold),#5c4a12)] p-[2px]">
          <div className="overflow-hidden rounded-full bg-[var(--bg)] p-[3px]">
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              width={120}
              height={120}
              priority
              sizes="120px"
              className="h-[7.5rem] w-[7.5rem] rounded-full object-cover object-[center_18%]"
            />
          </div>
        </div>
      </div>

      <p className="mb-1 text-xs font-medium tracking-[0.22em] text-[var(--gold)] uppercase">
        {profile.handle}
      </p>

      <div className="mb-1.5 flex items-center justify-center gap-1.5">
        <h1 className="font-display text-[1.85rem] leading-none font-bold tracking-[-0.03em] text-[var(--text)] sm:text-[2.1rem]">
          {profile.name}
        </h1>
        {profile.verified ? (
          <BadgeCheck
            className="h-5 w-5 shrink-0 fill-[var(--gold)] text-[var(--bg)]"
            aria-label="Perfil verificado"
          />
        ) : null}
      </div>

      <p className="text-[0.98rem] font-semibold text-[var(--gold-bright)]">
        {profile.role}
      </p>
      <p className="mt-1.5 max-w-[28ch] text-sm text-[var(--text-muted)]">
        {profile.tagline}
      </p>

      <p className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-wide text-[var(--text-soft)]">
        <Quote className="h-3.5 w-3.5 text-[var(--gold)]" aria-hidden="true" />
        <span>{profile.verse}</span>
        <span className="opacity-40">·</span>
        <span>{profile.location}</span>
      </p>
    </motion.header>
  );
}
