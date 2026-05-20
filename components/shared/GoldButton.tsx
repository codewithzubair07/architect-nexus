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
  sm: "px-4 py-2 text-sm",
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
  const className = `group inline-flex items-center justify-center gap-2 rounded-[4px] bg-an-gold text-an-black transition hover:brightness-110 hover:scale-[1.02] ${sizeClasses[size]}`;

  if (href) {
    return (
      <Link href={href} className={className} data-cursor="link">
        <span className="font-medium">{children}</span>
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
      <span className="font-medium">{children}</span>
      <IconArrowNarrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}
