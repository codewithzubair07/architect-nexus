"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

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
    registerGsap();
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const targets = wrapper.children;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: staggerChildren,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 85%",
          },
        }
      );
    }, wrapper);

    return () => ctx.revert();
  }, [staggerChildren]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
