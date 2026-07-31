import { FeatureCard } from "@/components/feature-card";
import { FoundationStatus } from "@/components/foundation-status";
import type { FoundationFeature } from "@/types/foundation";

const features: FoundationFeature[] = [
  {
    marker: "01 / SYSTEM",
    title: "Structured to scale",
    description:
      "Clear boundaries for routes, components, hooks, utilities, and shared types.",
  },
  {
    marker: "02 / QUALITY",
    title: "Confidence built in",
    description:
      "Strict types, linting, and automated smoke coverage guard every iteration.",
  },
  {
    marker: "03 / DELIVERY",
    title: "Ready for production",
    description:
      "A reproducible build and lean runtime form a dependable launch point.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <a
            href="#main-content"
            className="rounded-md text-lg font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07111f]"
          >
            miners<span className="text-cyan-300">.</span>
          </a>
          <FoundationStatus />
        </header>

        <section
          id="main-content"
          className="flex flex-1 flex-col justify-center py-20 sm:py-28"
          aria-labelledby="foundation-heading"
        >
          <p className="mb-5 font-mono text-xs tracking-[0.24em] text-cyan-300 sm:text-sm">
            NEXT.JS FOUNDATION / 000
          </p>
          <h1
            id="foundation-heading"
            className="max-w-4xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]"
          >
            Built on
            <span className="block text-slate-500">solid ground.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            A precise, accessible, production-ready starting point—designed to
            turn ambitious ideas into durable products.
          </p>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.marker}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Engineered for the work ahead.</p>
          <p className="font-mono tracking-wider">TYPESCRIPT · APP ROUTER · TAILWIND</p>
        </footer>
      </div>
    </main>
  );
}
