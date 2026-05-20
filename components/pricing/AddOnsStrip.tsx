"use client";

import {
  IconCloud,
  IconMail,
  IconPalette,
  IconBrandInstagram,
  IconSearch,
  IconTool,
} from "@tabler/icons-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { addOns } from "@/data/pricing";

const icons = [
  IconCloud,
  IconMail,
  IconPalette,
  IconBrandInstagram,
  IconSearch,
  IconTool,
];

export default function AddOnsStrip() {
  return (
    <section className="border-y border-an-gold/20 bg-an-surface py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
        <SectionLabel text="ADD-ON SERVICES" />
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-6">
          {addOns.map((addon, index) => {
            const Icon = icons[index];
            return (
              <div
                key={addon.name}
                className="min-w-[180px] rounded-xl border border-an-border bg-an-black p-4 text-center md:min-w-0"
              >
                <Icon className="mx-auto h-6 w-6 text-an-gold" />
                <div className="mt-3 text-xs uppercase tracking-[0.2em]">
                  {addon.name}
                </div>
                <div className="mt-2 text-sm text-an-gold">{addon.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
