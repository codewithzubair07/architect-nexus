import { gsap, registerGsap } from "@/lib/gsap";

export const applyScrollReveal = (selector: string, y = 36, stagger = 0.08) => {
  registerGsap();
  const targets = gsap.utils.toArray<HTMLElement>(selector);
  if (!targets.length) return;

  gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      stagger,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: targets[0],
        start: "top 88%",
      },
    }
  );
};
