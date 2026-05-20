"use client";

import { useLayoutEffect, useRef } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import { gsap, registerGsap } from "@/lib/gsap";

const timelineItems = [
  {
    year: "2022",
    text: "Founded with a mission to make digital accessible",
  },
  {
    year: "2023",
    text: "Delivered first 25 projects across 3 states",
  },
  {
    year: "2024",
    text: "Launched AI Automation services",
  },
  {
    year: "2025",
    text: "50+ clients, growing across India",
  },
];

export default function Timeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    registerGsap();
    const line = lineRef.current;
    if (!line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
          },
        }
      );

      itemRefs.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-an-black py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6">
        <SectionLabel text="OUR JOURNEY" />
        <h2 className="text-4xl font-display md:text-5xl">How We Got Here</h2>
        <div className="relative pl-6">
          <div
            ref={lineRef}
            className="absolute left-[11px] top-0 h-full w-px bg-an-gold"
          />
          <div className="flex flex-col gap-10">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                ref={(el) => {
                  if (el) itemRefs.current[index] = el;
                }}
                className="relative flex gap-6"
              >
                <span className="mt-2 h-4 w-4 rounded-full bg-an-gold" />
                <div>
                  <div className="font-display text-3xl text-an-gold">
                    {item.year}
                  </div>
                  <p className="mt-2 text-sm text-an-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
