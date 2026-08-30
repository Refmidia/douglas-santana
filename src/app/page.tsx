"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AuthorityStats } from "@/components/AuthorityStats";
import { Footer } from "@/components/Footer";
import { LinkCard } from "@/components/LinkCard";
import { PageBackground } from "@/components/PageBackground";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ShareButton } from "@/components/ShareButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { links } from "@/data/profile";

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <PageBackground />
      <div className="page-shell">
        <main className="content-column page-main relative z-[1]">
          <div className="mb-6 flex items-center justify-between">
            <ThemeToggle />
            <ShareButton />
          </div>

          <ProfileHeader />
          <AuthorityStats />

          <motion.section
            className="mt-8"
            aria-labelledby="links-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.16 }}
          >
            <h2
              id="links-heading"
              className="font-display text-center text-[1.15rem] font-bold tracking-[-0.02em] text-[var(--text)] sm:text-[1.3rem]"
            >
              Escolha por onde começar
            </h2>
            <p className="mx-auto mt-2 max-w-[36ch] text-center text-sm text-[var(--text-muted)]">
              Redes, projetos e presença digital — direto ao ponto.
            </p>

            <div className="mt-6 flex flex-col gap-3.5">
              {links.map((link, index) => (
                <LinkCard key={link.id} link={link} index={index} />
              ))}
            </div>
          </motion.section>

          <Footer />
        </main>
      </div>
    </>
  );
}
