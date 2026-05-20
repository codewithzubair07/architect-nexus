"use client";

import GoldButton from "@/components/shared/GoldButton";
import OutlineButton from "@/components/shared/OutlineButton";

export default function PricingCTA() {
  return (
    <section className="bg-an-black py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-display md:text-5xl">
          Not sure which plan is right for you?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <GoldButton href="https://wa.me/918637069862">
            Talk to Us on WhatsApp
          </GoldButton>
          <OutlineButton href="/contact">Or Book a Call</OutlineButton>
        </div>
      </div>
    </section>
  );
}
