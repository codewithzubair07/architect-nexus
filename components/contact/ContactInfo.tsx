"use client";

import {
  IconMail,
  IconPhone,
  IconWorld,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-an-border bg-an-surface p-6">
        <IconPhone className="h-6 w-6 text-an-gold" />
        <h3 className="mt-3 text-sm font-semibold">Call or WhatsApp</h3>
        <p className="mt-2 text-sm text-an-muted">8637069862 / 8348074730</p>
        <a
          href="https://wa.me/918637069862"
          className="mt-4 inline-flex text-sm text-an-gold"
        >
          Open WhatsApp →
        </a>
      </div>
      <div className="rounded-xl border border-an-border bg-an-surface p-6">
        <IconMail className="h-6 w-6 text-an-gold" />
        <h3 className="mt-3 text-sm font-semibold">Email</h3>
        <p className="mt-2 text-sm text-an-muted">arcnexus.eco@gmail.com</p>
        <a
          href="mailto:arcnexus.eco@gmail.com"
          className="mt-4 inline-flex text-sm text-an-gold"
        >
          Send Email →
        </a>
      </div>
      <div className="rounded-xl border border-an-border bg-an-surface p-6">
        <IconWorld className="h-6 w-6 text-an-gold" />
        <h3 className="mt-3 text-sm font-semibold">Website</h3>
        <p className="mt-2 text-sm text-an-muted">architectnexus.in</p>
        <a
          href="https://architectnexus.in"
          className="mt-4 inline-flex text-sm text-an-gold"
        >
          Visit Site →
        </a>
      </div>
      <a
        href="https://wa.me/918637069862"
        className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-black"
      >
        <IconBrandWhatsapp className="h-5 w-5" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
