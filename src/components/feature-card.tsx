import type { FoundationFeature } from "@/types/foundation";

const accentClasses = [
  "bg-brand-sky text-text-primary",
  "bg-brand-mint text-text-primary",
  "bg-neutral-graphite text-white",
];

const accentSecondaryClasses = [
  "text-text-primary",
  "text-text-primary",
  "text-white/75",
];

const accentForegroundClasses = [
  "text-text-primary",
  "text-text-primary",
  "text-white",
];

export function FeatureCard({
  feature,
  index,
}: {
  feature: FoundationFeature;
  index: number;
}) {
  return (
    <article
      className={`flex min-h-[180px] flex-col justify-end rounded-[28px] p-7 ${accentClasses[index % accentClasses.length]}`}
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className={`font-label ${accentForegroundClasses[index % accentForegroundClasses.length]}`}>
            {feature.marker}
          </p>
          <h2 className="font-card-title mt-5">
            {feature.title}
          </h2>
        </div>
        <span className={`font-label ${accentSecondaryClasses[index % accentSecondaryClasses.length]}`}>
          0{index + 1}
        </span>
      </div>
      <p className={`mt-2 max-w-md text-sm leading-6 ${accentSecondaryClasses[index % accentSecondaryClasses.length]}`}>
        {feature.description}
      </p>
    </article>
  );
}
