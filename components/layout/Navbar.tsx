"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { gsap } from "@/lib/gsap";
import GoldButton from "@/components/shared/GoldButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open || !mobileRef.current) return;
    const links = mobileRef.current.querySelectorAll("a");
    gsap.fromTo(
      links,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power2.out" }
    );
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition ${
        scrolled
          ? "bg-an-black/80 backdrop-blur border-b border-an-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
          <span className="font-display text-2xl tracking-widest text-an-gold">
            AN
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  isActive ? "text-an-gold" : "text-an-white/80 hover:text-an-gold"
                }`}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-an-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <GoldButton href="/contact" size="sm">
            Get Started
          </GoldButton>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu2 className="h-7 w-7 text-an-gold" />
        </button>
      </div>
      {open ? (
        <div
          ref={mobileRef}
          className="fixed inset-0 z-50 flex flex-col bg-an-black px-6 py-10"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl tracking-widest text-an-gold">
              AN
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <IconX className="h-7 w-7 text-an-gold" />
            </button>
          </div>
          <div className="mt-16 flex flex-col gap-8 text-2xl font-display uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <GoldButton href="/contact" size="md">
              Get Started
            </GoldButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
