"use client";

import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";

type GoldButtonProps = {
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

const sizeClasses: Record<NonNullable<GoldButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function GoldButton({
  href,
  onClick,
  size = "md",
  type = "button",
  children,
}: GoldButtonProps) {
  const className = `group inline-flex items-center justify-center gap-2 rounded-[10px] border border-cyan-300/40 bg-[linear-gradient(135deg,#00E5FF_0%,#0EA5E9_100%)] text-an-black shadow-[0_8px_30px_rgba(0,229,255,0.35)] transition hover:-translate-y-0.5 hover:brightness-110 ${sizeClasses[size]}`;

  if (href) {
    return (
      <Link href={href} className={className} data-cursor="link">
        <span className="font-semibold tracking-[0.02em]">{children}</span>
        <IconArrowNarrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      data-cursor="link"
    >
      <span className="font-semibold tracking-[0.02em]">{children}</span>
      <IconArrowNarrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}
