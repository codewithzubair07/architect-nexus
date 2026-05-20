import PricingHero from "@/components/pricing/PricingHero";
import PricingGrid from "@/components/pricing/PricingGrid";
import AddOnsStrip from "@/components/pricing/AddOnsStrip";
import PricingCTA from "@/components/pricing/PricingCTA";
import SectionLabel from "@/components/shared/SectionLabel";
import {
  IconBolt,
  IconCoins,
  IconRocket,
  IconTarget,
} from "@tabler/icons-react";

const whyChoose = [
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

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingGrid />
      <AddOnsStrip />
      <section className="bg-an-black py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          <SectionLabel text="WHY CHOOSE US" />
          <h2 className="text-4xl font-display md:text-5xl">
            Built for growing businesses
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-an-border bg-an-surface p-6"
                >
                  <Icon className="h-7 w-7 text-an-gold" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-an-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <PricingCTA />
    </>
  );
}
