"use client";

import GoldButton from "@/components/shared/GoldButton";

export default function HomeCTA() {
  return (
    <section className="border-y border-an-border bg-an-surface/40 py-20 backdrop-blur" data-reveal>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-display md:text-5xl">
          Ready to Build Something Great?
        </h2>
        <p className="text-sm text-an-muted">Let&apos;s talk about your project.</p>
        <GoldButton href="/contact" size="lg">
          Start a Project
        </GoldButton>
        <a
          href="https://wa.me/918637069862"
          className="text-sm text-an-muted transition hover:text-an-gold"
        >
          or WhatsApp us directly
        </a>
      </div>
    </section>
  );
}
