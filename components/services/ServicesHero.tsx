"use client";

import SectionLabel from "@/components/shared/SectionLabel";

export default function ServicesHero() {
  return (
    <section className="flex h-[60vh] items-center bg-an-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
        <SectionLabel text="WHAT WE OFFER" />
        <h1 className="text-5xl font-display md:text-7xl">
          Services That Actually Move the Needle.
        </h1>
        <p className="text-lg text-an-muted">
          Three core pillars. One agency. Zero fluff.
        </p>
        <div className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-an-gold">
          <a href="#web" className="border border-an-gold px-4 py-2">
            Web & Dev
          </a>
          <a href="#ai" className="border border-an-gold px-4 py-2">
            AI Automation
          </a>
          <a href="#growth" className="border border-an-gold px-4 py-2">
            Growth & Marketing
          </a>
        </div>
      </div>
    </section>
  );
}
