import { Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="bg-an-black py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[3fr_2fr]">
          <Suspense
            fallback={<div className="rounded-2xl border border-an-border bg-an-surface p-10" />}
          >
            <ContactForm />
          </Suspense>
          <ContactInfo />
        </div>
      </section>
      <section className="bg-an-surface py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 text-sm text-an-muted md:grid-cols-3">
          <div>📞 8637069862 / 8348074730</div>
          <div>✉️ arcnexus.eco@gmail.com</div>
          <div>🌐 architectnexus.in</div>
        </div>
      </section>
    </>
  );
}
