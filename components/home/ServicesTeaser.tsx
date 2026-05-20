"use client";

import {
  IconBrowser,
  IconRobot,
  IconTrendingUp,
} from "@tabler/icons-react";
import SectionLabel from "@/components/shared/SectionLabel";
import AnimatedText from "@/components/shared/AnimatedText";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Link from "next/link";

const services = [
  {
    title: "Web Design & Development",
    description:
      "From landing pages to full platforms — pixel-perfect, mobile-first, and built for speed.",
    icon: IconBrowser,
    href: "/services#web",
  },
  {
    title: "AI Automation Systems",
    description:
      "WhatsApp bots, CRM automation, lead capture — we automate what slows your business down.",
    icon: IconRobot,
    href: "/services#ai",
  },
  {
    title: "Digital Growth & Marketing",
    description:
      "SEO, ads, social media, Google Business — we handle your visibility while you handle your business.",
    icon: IconTrendingUp,
    href: "/services#growth",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="py-24" data-reveal>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <SectionLabel text="WHAT WE DO" />
        <div className="text-4xl font-display leading-tight md:text-6xl">
          <AnimatedText text="We Build Digital Experiences" />
          <br />
          <AnimatedText text="That Actually Grow Businesses." />
        </div>
        <ScrollReveal className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-an-border bg-an-surface/70 p-8 shadow-[0_0_0_1px_rgba(0,229,255,0.08)] transition hover:-translate-y-1 hover:border-an-gold/70"
                data-cursor="card"
              >
                <Icon className="h-8 w-8 text-an-gold" />
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-an-muted">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-an-gold"
                  data-cursor="link"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
