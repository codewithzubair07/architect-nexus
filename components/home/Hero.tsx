"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import GoldButton from "@/components/shared/GoldButton";
import OutlineButton from "@/components/shared/OutlineButton";
import Logo from "@/components/shared/Logo";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const words = wrapper.querySelectorAll("[data-hero-word]");
    const tl = gsap.timeline();
    tl.fromTo(
      words,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.14, duration: 0.85, ease: "power3.out" }
    )
      .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.5)
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.5 },
        0.7
      )
      .fromTo(
        orbitRef.current,
        { opacity: 0, scale: 0.9, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power2.out" },
        0.55
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-[80px]" data-reveal>
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
        <div ref={wrapperRef} className="flex flex-col justify-center gap-6">
          <span className="text-xs uppercase tracking-[0.28em] text-an-gold">
            NEXT-GEN DIGITAL AGENCY
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
          <p ref={subRef} className="max-w-xl text-base text-an-muted md:text-lg">
            We design high-converting websites, automation systems, and growth funnels that move your business forward.
          </p>
          <div ref={buttonRef} className="flex flex-wrap gap-4">
            <GoldButton href="/contact">Start Your Build</GoldButton>
            <OutlineButton href="/work">Explore Our Work</OutlineButton>
          </div>
        </div>
        <div ref={orbitRef} className="relative flex items-center justify-center">
          <div className="relative flex h-[360px] w-[360px] items-center justify-center md:h-[480px] md:w-[480px]">
            <div className="orbit-ring absolute h-[72%] w-[72%] animate-pulseGlow" />
            <div className="orbit-ring absolute hidden h-[92%] w-[92%] md:block" />
            <div className="orbit-path absolute h-[72%] w-[72%]">
              <span className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-an-gold shadow-[0_0_20px_rgba(0,229,255,0.85)]" />
            </div>
            <div className="orbit-path absolute hidden h-[92%] w-[92%] [animation-duration:22s] md:block">
              <span className="absolute bottom-1 left-0 h-2.5 w-2.5 rounded-full bg-an-white/80" />
            </div>
            <div className="relative rounded-full border border-an-border bg-an-surface/70 p-8 shadow-[0_0_60px_rgba(0,229,255,0.2)] md:p-10">
              <Logo size={136} glowing className="md:h-[160px] md:w-[160px]" />
            </div>
          </div>
        </div>
      </div>
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.45em] text-an-muted animate-pulse">
        Scroll
      </span>
    </section>
  );
}
