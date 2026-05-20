"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGPathElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("an_has_loaded");
    if (hasLoaded) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem("an_has_loaded", "true");

    const container = containerRef.current;
    const logo = logoRef.current;
    const counter = counterRef.current;
    if (!container || !logo || !counter) return;

    const length = logo.getTotalLength();
    logo.style.strokeDasharray = `${length}`;
    logo.style.strokeDashoffset = `${length}`;

    const progress = { value: 0 };

    const timeline = gsap.timeline({
      onComplete: () => setVisible(false),
    });

    timeline
      .to(logo, { strokeDashoffset: 0, duration: 1.2, ease: "power3.out" })
      .to(
        progress,
        {
          value: 100,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            counter.textContent = `${Math.round(progress.value)}`.padStart(2, "0");
          },
        },
        0
      )
      .to(
        container,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.3,
        },
        ">-0.1"
      )
      .to(
        logo,
        { scale: 1.1, opacity: 0, duration: 0.6, ease: "power2.inOut" },
        "<"
      );

    return () => {
      timeline.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-an-black"
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <path
          ref={logoRef}
          d="M20 96L60 20L100 96M38 68H82M72 26V94M92 26V94"
          stroke="#C9A84C"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        ref={counterRef}
        className="font-display text-2xl tracking-[0.3em] text-an-gold"
      >
        00
      </span>
    </div>
  );
}
