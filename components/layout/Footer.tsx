"use client";

import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Logo from "@/components/shared/Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Web Development",
  "AI Automation",
  "Growth Marketing",
  "E-Commerce",
  "Custom Solutions",
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-an-border bg-an-black/70 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Logo size={52} glowing />
          </div>
          <p className="text-sm text-an-muted">Design • Build • Inspire • Impact</p>
          <div className="flex items-center gap-3 text-an-muted">
            <a href="https://instagram.com" aria-label="Instagram">
              <IconBrandInstagram className="h-5 w-5 transition hover:text-an-gold" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <IconBrandLinkedin className="h-5 w-5 transition hover:text-an-gold" />
            </a>
            <a href="https://wa.me/918637069862" aria-label="WhatsApp">
              <IconBrandWhatsapp className="h-5 w-5 transition hover:text-an-gold" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-an-gold">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-an-muted">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-an-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-an-gold">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-an-muted">
            {serviceLinks.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-an-gold">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-an-muted">
            <li>📞 8637069862 / 8348074730</li>
            <li>✉️ arcnexus.eco@gmail.com</li>
            <li>🌐 architectnexus.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-an-border px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-an-muted md:flex-row">
          <span>© 2025 Architect Nexus. All rights reserved.</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
