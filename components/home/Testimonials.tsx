"use client";

import SectionLabel from "@/components/shared/SectionLabel";

const testimonials = [
  {
    quote:
      "Architect Nexus turned our vision into a site that actually brings in leads every day.",
    name: "Arif Khan",
    company: "Spice Garden Restaurant",
  },
  {
    quote:
      "The automation flows saved our team hours every week and boosted conversions instantly.",
    name: "Neha Verma",
    company: "AutoDrive Motors",
  },
  {
    quote:
      "Their growth strategy doubled our membership inquiries within the first month.",
    name: "Rahul Mehta",
    company: "FitLife Gym",
  },
];

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="bg-an-surface py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <SectionLabel text="CLIENT LOVE" />
        <h2 className="text-4xl font-display md:text-6xl">
          What Our Clients Say
        </h2>
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="flex w-[200%] animate-marquee gap-6 hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="w-[320px] rounded-xl border border-an-border bg-an-black p-6"
            >
              <div className="text-5xl text-an-gold">“</div>
              <p className="mt-3 text-sm text-an-muted">{item.quote}</p>
              <div className="mt-4 text-sm font-semibold">{item.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-an-muted">
                {item.company}
              </div>
              <div className="mt-3 text-xs text-an-gold">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
