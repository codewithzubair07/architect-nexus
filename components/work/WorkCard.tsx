"use client";

import Link from "next/link";
import { WorkItem } from "@/data/work";

type WorkCardProps = {
  item: WorkItem;
};

export default function WorkCard({ item }: WorkCardProps) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-an-border bg-an-surface"
      data-cursor="card"
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 transition group-hover:opacity-100" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition group-hover:opacity-100">
        <span className="mb-3 w-fit rounded-full bg-an-gold px-3 py-1 text-xs uppercase text-an-black">
          {item.category}
        </span>
        <h3 className="font-display text-2xl">{item.name}</h3>
        <span className="mt-2 text-sm text-an-gold">View Case Study →</span>
      </div>
    </Link>
  );
}
