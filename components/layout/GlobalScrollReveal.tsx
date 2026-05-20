"use client";

import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";
import { applyScrollReveal } from "@/lib/scrollReveal";

export default function GlobalScrollReveal() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      applyScrollReveal("[data-reveal]", 30, 0.04);
    });

    return () => ctx.revert();
  }, []);

  return null;
}
