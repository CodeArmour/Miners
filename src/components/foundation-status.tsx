"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { classNames } from "@/lib/class-names";

export function FoundationStatus() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-sm text-slate-200">
      <span
        className={classNames(
          "size-2 rounded-full bg-emerald-400",
          !reducedMotion && "motion-safe:animate-pulse",
        )}
        aria-hidden="true"
      />
      Foundation online
    </div>
  );
}
