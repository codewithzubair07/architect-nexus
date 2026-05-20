"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";
import GoldButton from "@/components/shared/GoldButton";
import { workItems } from "@/data/work";
import { gsap, registerGsap } from "@/lib/gsap";

export default function WorkPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => track.scrollWidth - section.clientWidth;

    const tween = gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth}`,
        pin: true,
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="bg-an-black py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionLabel text="OUR WORK" />
        <h2 className="text-4xl font-display md:text-6xl">
          Proof Is In the Build.
        </h2>
      </div>
      <div ref={sectionRef} className="mt-12 overflow-hidden">
        <div ref={trackRef} className="flex gap-8 px-6">
          {workItems.slice(0, 4).map((item) => (
            <div
              key={item.slug}
              className="relative h-[500px] w-[400px] overflow-hidden rounded-2xl border border-an-border bg-an-surface"
              data-cursor="card"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 space-y-3">
                <span className="rounded-full bg-an-gold px-3 py-1 text-xs uppercase text-an-black">
                  {item.category}
                </span>
                <h3 className="font-display text-2xl text-an-white">
                  {item.name}
                </h3>
                <Link
                  href={`/work/${item.slug}`}
                  className="text-sm text-an-gold"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <GoldButton href="/work">View All Work</GoldButton>
      </div>
    </section>
  );
}
