"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";

export default function OurStory() {
  return (
    <section className="bg-an-black py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div className="h-[360px] rounded-2xl border border-an-border bg-an-surface" />
        <ScrollReveal className="flex flex-col gap-6">
          <h2 className="text-4xl font-display md:text-5xl">Built Different.</h2>
          <p className="text-sm text-an-muted">
            Architect Nexus was born to make premium digital experiences accessible
            for every ambitious business owner.
          </p>
          <p className="text-sm text-an-muted">
            We combine bold design with high-performing development to build
            platforms that not only look good, but drive growth every day.
          </p>
          <p className="text-sm text-an-muted">
            From strategy to launch, we stay laser-focused on the outcomes that
            matter most to your business.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
