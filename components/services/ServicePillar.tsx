"use client";

import GoldButton from "@/components/shared/GoldButton";

type ServicePillarProps = {
  id: string;
  label: string;
  title: string;
  description: string[];
  features: string[];
  reverse?: boolean;
  showFlow?: boolean;
};

export default function ServicePillar({
  id,
  label,
  title,
  description,
  features,
  reverse,
  showFlow,
}: ServicePillarProps) {
  return (
    <section id={id} className="bg-an-black py-20">
      <div
        className={`mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex items-center justify-center">
          {showFlow ? (
            <div className="flex h-[280px] w-full items-center justify-center rounded-2xl border border-an-border bg-an-surface2">
              <svg
                width="260"
                height="120"
                viewBox="0 0 260 120"
                fill="none"
              >
                <path
                  d="M20 60H110M150 60H240"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <rect x="0" y="40" width="40" height="40" rx="8" fill="#111111" />
                <rect
                  x="110"
                  y="40"
                  width="40"
                  height="40"
                  rx="8"
                  fill="#111111"
                />
                <rect
                  x="220"
                  y="40"
                  width="40"
                  height="40"
                  rx="8"
                  fill="#111111"
                />
                <text x="8" y="66" fill="#C9A84C" fontSize="10">
                  Lead
                </text>
                <text x="118" y="66" fill="#C9A84C" fontSize="10">
                  Bot
                </text>
                <text x="228" y="66" fill="#C9A84C" fontSize="10">
                  CRM
                </text>
              </svg>
            </div>
          ) : (
            <div className="h-[320px] w-full rounded-2xl border border-an-border bg-an-surface" />
          )}
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.3em] text-an-gold">
            {label}
          </span>
          <h2 className="text-4xl font-display md:text-5xl">{title}</h2>
          {description.map((paragraph) => (
            <p key={paragraph} className="text-sm text-an-muted">
              {paragraph}
            </p>
          ))}
          <ul className="grid gap-3 text-sm text-an-white">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-an-gold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          {id === "web" ? (
            <GoldButton href="/pricing">View Pricing</GoldButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
