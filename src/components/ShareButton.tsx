"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/profile";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({
          title: siteConfig.shareTitle,
          text: siteConfig.shareText,
          url,
        });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      } catch {
        setCopied(false);
      }
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleShare}
        className="icon-btn focus-ring"
        aria-label="Compartilhar página"
      >
        {copied ? (
          <Check className="h-[18px] w-[18px]" aria-hidden="true" />
        ) : (
          <Share2 className="h-[18px] w-[18px]" aria-hidden="true" />
        )}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute top-full right-0 mt-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Link copiado
      </span>
    </div>
  );
}
