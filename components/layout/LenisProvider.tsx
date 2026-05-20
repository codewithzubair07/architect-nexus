"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";

type LenisProviderProps = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const cleanup = initLenis();
    document.documentElement.classList.add("lenis");

    return () => {
      document.documentElement.classList.remove("lenis");
      cleanup();
    };
  }, []);

  return <>{children}</>;
}
