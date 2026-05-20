"use client";

import { IconBolt, IconCoins, IconRocket, IconTarget } from "@tabler/icons-react";
import SectionLabel from "@/components/shared/SectionLabel";

const values = [
  {
    title: "Affordable",
    description: "Low entry pricing for every business.",
    icon: IconCoins,
  },
  {
    title: "Flexible",
    description: "Pay for what you need. Upgrade anytime.",
    icon: IconBolt,
  },
  {
    title: "Scalable",
    description: "Plans grow with your business.",
    icon: IconRocket,
  },
  {
    title: "Result Driven",
    description: "Focused on your growth and ROI.",
    icon: IconTarget,
  },
];

export default function ValuesGrid() {
  return (
    <section className="bg-an-surface py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionLabel text="OUR VALUES" />
        <h2 className="text-4xl font-display md:text-5xl">What Drives Us</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-xl border border-an-border bg-an-black p-6"
                data-cursor="card"
              >
                <Icon className="h-7 w-7 text-an-gold" />
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-an-muted">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
