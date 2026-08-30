"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";

export function PageBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const lock = () => {
      const height = window.visualViewport?.height ?? window.innerHeight;
      root.style.height = `${height}px`;
      root.style.width = `${window.innerWidth}px`;
    };

    lock();
    window.addEventListener("resize", lock);
    window.addEventListener("orientationchange", lock);
    window.visualViewport?.addEventListener("resize", lock);
    window.visualViewport?.addEventListener("scroll", lock);

    return () => {
      window.removeEventListener("resize", lock);
      window.removeEventListener("orientationchange", lock);
      window.visualViewport?.removeEventListener("resize", lock);
      window.visualViewport?.removeEventListener("scroll", lock);
    };
  }, []);

  return (
    <div className="page-bg" aria-hidden="true" ref={rootRef}>
      <div
        className="page-bg__image"
        style={{ backgroundImage: `url(${profile.backgroundImage})` }}
      />
      <div className="page-bg__veil" />
      <div className="page-bg__frame" />
    </div>
  );
}
