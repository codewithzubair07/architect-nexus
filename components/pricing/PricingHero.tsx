"use client";

import SectionLabel from "@/components/shared/SectionLabel";

export default function PricingHero() {
  return (
    <section className="py-24" data-reveal>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center">
        <SectionLabel text="TRANSPARENT PRICING" />
        <h1 className="text-5xl font-display md:text-7xl">
          SIMPLE PRICING.
          <span className="block text-an-gold">REAL RESULTS.</span>
        </h1>
        <p className="text-lg text-an-muted">
          Affordable plans for every stage of your business.
        </p>
      </div>
    </section>
  );
}
