"use client";

import GoldButton from "@/components/shared/GoldButton";
import OutlineButton from "@/components/shared/OutlineButton";

type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
  badge?: string | null;
  featured?: boolean;
  cta: string;
  ctaLabel: string;
};

export default function PricingCard({
  name,
  price,
  features,
  badge,
  featured,
  cta,
  ctaLabel,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-8 backdrop-blur ${
        featured
          ? "border-an-gold bg-an-surface2 shadow-[0_0_35px_rgba(0,229,255,0.2)]"
          : "border-an-border bg-an-surface/70"
      }`}
      data-reveal
    >
      {badge ? (
        <span className="absolute -top-4 left-6 rounded-full border border-an-gold/70 bg-an-black px-4 py-1 text-xs font-semibold text-an-gold">
          {badge}
        </span>
      ) : null}
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="mt-3 text-2xl font-display text-an-gold">{price}</div>
      <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-an-muted">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-an-white">
            <span className="text-an-gold">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {featured ? (
          <GoldButton href={cta}>{ctaLabel}</GoldButton>
        ) : (
          <OutlineButton href={cta}>{ctaLabel}</OutlineButton>
        )}
      </div>
    </div>
  );
}
