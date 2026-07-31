import type { FoundationFeature } from "@/types/foundation";

export function FeatureCard({
  feature,
  index,
}: {
  feature: FoundationFeature;
  index: number;
}) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/8">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.18em] text-cyan-300">
          {feature.marker}
        </span>
        <span className="text-xs text-slate-400">0{index + 1}</span>
      </div>
      <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        {feature.description}
      </p>
    </article>
  );
}
