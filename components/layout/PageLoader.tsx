"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Logo from "@/components/shared/Logo";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("an_has_loaded");
    if (hasLoaded) {
      const raf = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(raf);
    }

    sessionStorage.setItem("an_has_loaded", "true");

    const container = containerRef.current;
    const logoWrap = logoWrapRef.current;
    const bar = barRef.current;
    const title = titleRef.current;
    if (!container || !logoWrap || !bar || !title) return;

    const logoPaths = logoWrap.querySelectorAll("path");
    logoPaths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    const tl = gsap.timeline({ onComplete: () => setVisible(false) });

    tl.to(logoPaths, {
      strokeDashoffset: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "power3.out",
    })
      .fromTo(
        bar,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.75, ease: "power2.inOut" },
        "<0.15"
      )
      .fromTo(
        title.querySelectorAll("span"),
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: "power2.out" },
        ">-0.2"
      )
      .to(container, {
        yPercent: -100,
        duration: 0.75,
        ease: "power2.inOut",
        delay: 0.2,
      });

    return () => tl.kill();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-an-black"
    >
      <div ref={logoWrapRef}>
        <Logo size={124} glowing />
      </div>
      <div className="h-px w-[220px] overflow-hidden rounded-full bg-an-border">
        <div ref={barRef} className="h-full w-full origin-left bg-an-gold" />
      </div>
      <div
        ref={titleRef}
        className="flex items-center gap-4 font-display text-4xl uppercase tracking-[0.25em]"
      >
        <span>Architect</span>
        <span className="text-an-gold">Nexus</span>
      </div>
    </div>
  );
}
