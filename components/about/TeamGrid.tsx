"use client";

import SectionLabel from "@/components/shared/SectionLabel";
import { teamMembers } from "@/data/team";

export default function TeamGrid() {
  return (
    <section className="bg-an-surface py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionLabel text="THE TEAM" />
        <h2 className="text-4xl font-display md:text-5xl">
          The People Behind the Builds
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-an-border bg-an-black p-6 text-center transition hover:scale-[1.02] hover:border-an-gold"
              data-cursor="card"
            >
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-an-surface2" />
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-xs text-an-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
