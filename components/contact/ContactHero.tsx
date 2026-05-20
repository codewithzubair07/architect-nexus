"use client";

import SectionLabel from "@/components/shared/SectionLabel";

export default function ContactHero() {
  return (
    <section className="bg-an-black py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
        <SectionLabel text="LET'S TALK" />
        <h1 className="text-5xl font-display md:text-7xl">Start Your Project.</h1>
        <p className="text-lg text-an-muted">
          Tell us about your business and we&apos;ll be in touch within 24 hours.
        </p>
      </div>
    </section>
  );
}
