"use client";

import { pricingPlans } from "@/data/pricing";
import PricingCard from "@/components/pricing/PricingCard";

export default function PricingGrid() {
  const topRow = pricingPlans.slice(0, 3);
  const bottomRow = pricingPlans.slice(3);

  return (
    <section className="bg-an-black py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {topRow.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {bottomRow.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
