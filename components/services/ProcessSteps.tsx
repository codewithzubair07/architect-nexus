"use client";

import SectionLabel from "@/components/shared/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn your business, goals, and audience.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We map the plan, tech, and timeline.",
  },
  {
    number: "03",
    title: "Build",
    description: "We design, develop, and test everything.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We go live, hand over, and stay available.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-an-surface py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionLabel text="HOW WE WORK" />
        <h2 className="text-4xl font-display md:text-5xl">Our Process</h2>
        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 top-7 hidden h-px w-full border-t border-dashed border-an-gold md:block" />
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-xl border border-an-border bg-an-black p-6"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-an-gold">
                {step.number}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-an-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
