"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

type AnimatedTextProps = {
  text: string;
  splitBy?: "words" | "chars";
  delay?: number;
  stagger?: number;
  trigger?: string;
  className?: string;
};

export default function AnimatedText({
  text,
  splitBy = "words",
  delay = 0,
  stagger,
  className,
}: AnimatedTextProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const targets = wrapper.querySelectorAll("span[data-split]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: stagger ?? (splitBy === "chars" ? 0.04 : 0.1),
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 85%",
          },
        }
      );
    }, wrapper);

    return () => ctx.revert();
  }, [delay, splitBy, stagger]);

  const parts =
    splitBy === "chars"
      ? text.split("")
      : text.split(" ").map((word) => `${word} `);

  return (
    <span ref={wrapperRef} className={className}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} data-split className="inline-block">
          {part === " " ? "\u00A0" : part}
        </span>
      ))}
    </span>
  );
}
