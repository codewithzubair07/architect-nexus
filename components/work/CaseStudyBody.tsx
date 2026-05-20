"use client";

import Link from "next/link";
import GoldButton from "@/components/shared/GoldButton";
import { WorkItem } from "@/data/work";

type CaseStudyBodyProps = {
  item: WorkItem;
  previous?: WorkItem;
  next?: WorkItem;
};

export default function CaseStudyBody({ item, previous, next }: CaseStudyBodyProps) {
  return (
    <section className="bg-an-black py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl font-display">The Challenge</h2>
          <p className="text-sm text-an-muted">{item.challenge}</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl font-display">The Solution</h2>
          <div className="space-y-4 text-sm text-an-muted">
            <p>{item.solution}</p>
            <ul className="space-y-2">
              {item.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-center gap-2 text-an-white">
                  <span className="text-an-gold">✓</span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {item.results.map((result) => (
            <div
              key={result.label}
              className="rounded-xl border border-an-border bg-an-surface p-6"
            >
              <div className="text-3xl font-display text-an-gold">{result.value}</div>
              <div className="mt-2 text-sm text-an-muted">{result.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-an-border pt-8">
          {previous ? (
            <Link href={`/work/${previous.slug}`} className="text-sm text-an-gold">
              ← {previous.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/work/${next.slug}`} className="text-sm text-an-gold">
              {next.name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-an-border bg-an-surface p-10 text-center">
          <h3 className="text-2xl font-display">Want results like these?</h3>
          <GoldButton href="/contact">Start Your Project</GoldButton>
        </div>
      </div>
    </section>
  );
}
