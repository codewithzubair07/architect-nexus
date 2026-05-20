"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { initThreeLogo } from "@/lib/three-logo";
import GoldButton from "@/components/shared/GoldButton";
import OutlineButton from "@/components/shared/OutlineButton";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const words = wrapper.querySelectorAll("[data-hero-word]");
    const tl = gsap.timeline();
    tl.fromTo(
      words,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.6
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6 },
        0.9
      );

    return () => {
      tl.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (!threeRef.current) return;
    return initThreeLogo(threeRef.current);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center bg-an-black">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div ref={wrapperRef} className="flex flex-col justify-center gap-6">
          <span className="text-xs uppercase tracking-[0.2em] text-an-gold">
            DIGITAL AGENCY — EST. 2022
          </span>
          <div className="font-display text-6xl leading-none md:text-[120px]">
            <div>
              <span data-hero-word className="inline-block">
                ARCHITECT
              </span>
            </div>
            <div>
              <span data-hero-word className="inline-block text-an-gold">
                NEXUS
              </span>
            </div>
          </div>
          <p ref={subRef} className="text-lg text-an-muted">
            Design • Build • Inspire • Impact
          </p>
          <div ref={buttonRef} className="flex flex-wrap gap-4">
            <OutlineButton href="/work">Explore Our Work</OutlineButton>
            <GoldButton href="/contact">Get Started</GoldButton>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div ref={threeRef} className="h-[380px] w-full md:h-[480px]" />
        </div>
      </div>
      <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-an-muted animate-pulse">
        ↓ SCROLL
      </span>
    </section>
  );
}
