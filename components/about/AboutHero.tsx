"use client";

import SectionLabel from "@/components/shared/SectionLabel";

export default function AboutHero() {
  return (
    <section className="relative flex h-[60vh] items-center overflow-hidden bg-an-black">
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.25),_transparent_55%)]" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6">
        <SectionLabel text="WHO WE ARE" />
        <h1 className="text-5xl font-display md:text-7xl">
          We Are Architect Nexus.
        </h1>
        <p className="max-w-2xl text-lg text-an-muted">
          A digital agency obsessed with building things that work.
        </p>
      </div>
    </section>
  );
}
