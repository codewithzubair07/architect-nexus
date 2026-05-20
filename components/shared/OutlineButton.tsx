"use client";

import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";

type OutlineButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function OutlineButton({
  href,
  onClick,
  children,
}: OutlineButtonProps) {
  const className =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-[10px] border border-an-border bg-an-surface/50 px-6 py-3 text-sm text-an-gold transition hover:border-an-gold";

  const content = (
    <>
      <span className="relative z-10 font-medium transition group-hover:text-an-black">
        {children}
      </span>
      <IconArrowNarrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-1 group-hover:text-an-black" />
      <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-an-gold transition duration-300 group-hover:scale-x-100" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className} data-cursor="link">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} data-cursor="link">
      {content}
    </button>
  );
}
