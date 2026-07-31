import { FeatureCard } from "@/components/feature-card";
import { FoundationStatus } from "@/components/foundation-status";
import type { FoundationFeature } from "@/types/foundation";

const features: FoundationFeature[] = [
  {
    marker: "BRAND / SKY",
    title: "Clarity",
    description: "A bright primary accent for optimistic, direct moments.",
  },
  {
    marker: "BRAND / MINT",
    title: "Momentum",
    description: "A fresh secondary note for progress and positive action.",
  },
  {
    marker: "NEUTRAL / GRAPHITE",
    title: "Weight",
    description: "A grounded dark surface for contrast and serious outcomes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-surface-canvas text-text-primary">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-14 px-5 py-8 sm:px-10 sm:py-12 lg:px-24 lg:py-24">
        <header className="flex items-center justify-between gap-6">
          <a href="#brand-foundations" className="focus-ring font-label tracking-[0.02em]">
            miners<span className="text-brand-sky">.</span>
          </a>
          <FoundationStatus />
        </header>

        <section
          id="brand-foundations"
          className="flex flex-1 flex-col justify-center"
          aria-labelledby="brand-heading"
        >
          <p className="font-label text-text-secondary">
            MINERS GROUP — VISUAL IDENTITY 01
          </p>
          <h1 id="brand-heading" className="font-display mt-8 max-w-5xl">
            Friendly technology.
            <span className="block text-text-secondary">Serious outcomes.</span>
          </h1>

          <div className="mt-12 grid gap-4 md:grid-cols-3" aria-label="Core palette">
            {features.map((feature, index) => (
              <FeatureCard key={feature.marker} feature={feature} index={index} />
            ))}
          </div>

          <aside className="glass-panel mt-6 flex flex-col gap-3 px-6 py-7 sm:px-9 sm:py-8">
            <h2 className="font-display text-2xl tracking-[-0.6px] sm:text-[28px]">
              Liquid glass is a focal layer, not the entire interface.
            </h2>
            <p className="font-body max-w-4xl text-text-secondary">
              Use it for navigation, interactive previews and conversion panels.
              Keep core content crisp, bright and readable.
            </p>
          </aside>
        </section>

        <footer className="flex flex-col gap-2 border-t border-border-frost pt-5 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>Engineered for the work ahead.</p>
          <p className="font-label tracking-[0.08em]">INTER · MANROPE · MINERS</p>
        </footer>
      </div>
    </main>
  );
}
