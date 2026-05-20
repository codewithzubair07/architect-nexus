"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.38, ease: "easeOut" }}
        className="relative z-[1] flex-1"
      >
        <motion.div
          key={`${pathname}-bar`}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="pointer-events-none fixed left-0 top-0 z-50 h-[3px] w-full bg-an-gold shadow-[0_0_16px_rgba(0,229,255,0.8)]"
        />
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
