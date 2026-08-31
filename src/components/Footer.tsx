import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-[color-mix(in_srgb,var(--gold)_20%,var(--border))] pt-6 pb-2 text-center">
      <p className="font-display text-sm font-semibold tracking-[-0.01em] text-[var(--text-soft)]">
        {profile.name}
      </p>
      <p className="mt-1 text-xs tracking-[0.18em] text-[var(--gold)] uppercase">
        Engajamento.app
      </p>
    </footer>
  );
}
