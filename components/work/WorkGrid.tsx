"use client";

import { useMemo, useState } from "react";
import { workItems } from "@/data/work";
import WorkCard from "@/components/work/WorkCard";
import ScrollReveal from "@/components/shared/ScrollReveal";

const filters = ["All", "Web", "AI Automation", "E-Commerce"];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return workItems;
    return workItems.filter((item) =>
      item.category.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] ${
              activeFilter === filter
                ? "bg-an-gold text-an-black"
                : "border border-an-border text-an-muted"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <ScrollReveal className="grid gap-6 md:grid-cols-2">
        {filtered.map((item) => (
          <WorkCard key={item.slug} item={item} />
        ))}
      </ScrollReveal>
    </div>
  );
}
