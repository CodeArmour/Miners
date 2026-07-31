"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

export function FoundationStatus() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="glass-panel inline-flex items-center gap-2 px-4 py-2 text-sm text-text-primary">
      <span
        className={`size-2 rounded-full bg-brand-mint ${!reducedMotion ? "motion-safe:animate-pulse" : ""}`}
        aria-hidden="true"
      />
      Brand foundations
    </div>
  );
}
