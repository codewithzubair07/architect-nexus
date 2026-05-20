"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

const stats = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export default function StatsBar() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const items = wrapper.querySelectorAll("[data-stat]");
    items.forEach((item, index) => {
      const { value, suffix } = stats[index];
      const counter = { value: 0 };
      gsap.to(counter, {
        value,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 80%",
        },
        onUpdate: () => {
          item.textContent = `${Math.floor(counter.value)}${suffix}`;
        },
      });
    });
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="border-y border-an-border bg-an-surface/50 backdrop-blur"
      data-reveal
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              data-stat
              className="font-display text-5xl text-an-gold drop-shadow-[0_0_20px_rgba(0,229,255,0.45)] md:text-6xl"
            >
              0{stat.suffix}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-an-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
