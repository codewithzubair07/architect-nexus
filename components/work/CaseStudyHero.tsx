"use client";

import { WorkItem } from "@/data/work";

type CaseStudyHeroProps = {
  item: WorkItem;
};

export default function CaseStudyHero({ item }: CaseStudyHeroProps) {
  return (
    <section className="bg-an-black py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <span className="w-fit rounded-full bg-an-gold px-4 py-1 text-xs uppercase text-an-black">
          {item.category}
        </span>
        <h1 className="text-5xl font-display md:text-7xl">{item.name}</h1>
        <div className="text-sm uppercase tracking-[0.2em] text-an-muted">
          {item.client} • {item.year}
        </div>
        <div className="flex flex-wrap gap-3">
          {[item.industry, item.services, item.duration].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-an-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-an-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12 h-[420px] w-full overflow-hidden">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
    </section>
  );
}
