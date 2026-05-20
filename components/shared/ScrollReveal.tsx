"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { applyScrollReveal } from "@/lib/scrollReveal";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
};

export default function ScrollReveal({
  children,
  className,
  staggerChildren = 0.08,
}: ScrollRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const id = `reveal-${Math.random().toString(36).slice(2)}`;
    wrapper.setAttribute("data-reveal-id", id);
    const targets = Array.from(wrapper.children);
    targets.forEach((child) => child.setAttribute("data-reveal", id));

    const ctx = gsap.context(() => {
      applyScrollReveal(`[data-reveal='${id}']`, 42, staggerChildren);
    }, wrapper);

    return () => {
      targets.forEach((child) => child.removeAttribute("data-reveal"));
      wrapper.removeAttribute("data-reveal-id");
      ctx.revert();
    };
  }, [staggerChildren]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
