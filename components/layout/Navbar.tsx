"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { gsap } from "@/lib/gsap";
import GoldButton from "@/components/shared/GoldButton";
import Logo from "@/components/shared/Logo";

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
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const tl = gsap.timeline();
    tl.fromTo(
      header.querySelector("[data-nav-logo]"),
      { x: -24, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
      .fromTo(
        header.querySelectorAll("[data-nav-link]"),
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.38, ease: "power2.out" },
        0.1
      )
      .fromTo(
        header.querySelector("[data-nav-cta]"),
        { x: 18, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
        0.15
      );

    return () => {
      tl.kill();
    };
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
      ref={headerRef}
      className={`fixed top-0 z-50 w-full transition ${
        scrolled
          ? "border-b border-an-border bg-an-black/80 shadow-[0_10px_40px_rgba(0,229,255,0.12)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-[80px] max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6">
        <Link href="/" className="flex items-center" data-nav-logo>
          <Logo size={46} glowing={scrolled} />
        </Link>
        <nav className="hidden items-center justify-center gap-8 text-xs uppercase tracking-[0.26em] text-an-white/80 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-nav-link
                className={`group relative pb-1 transition ${
                  isActive ? "text-an-gold" : "hover:text-an-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-an-gold transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block" data-nav-cta>
          <GoldButton href="/contact" size="sm">
            Start Project
          </GoldButton>
        </div>
        <button
          className="justify-self-end md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu2 className="h-7 w-7 text-an-gold" />
        </button>
      </div>
      {open ? (
        <div
          ref={mobileRef}
          className="fixed inset-0 z-50 flex flex-col bg-an-black/95 px-6 py-10 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <Logo size={44} glowing />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <IconX className="h-7 w-7 text-an-gold" />
            </button>
          </div>
          <div className="mt-14 flex flex-col gap-8 text-2xl font-display uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <GoldButton href="/contact" size="md">
              Start Project
            </GoldButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
