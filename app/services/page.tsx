import ServicesHero from "@/components/services/ServicesHero";
import ServicePillar from "@/components/services/ServicePillar";
import ProcessSteps from "@/components/services/ProcessSteps";
import GoldButton from "@/components/shared/GoldButton";
import { servicePillars } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {servicePillars.map((pillar, index) => (
        <ServicePillar
          key={pillar.id}
          id={pillar.id}
          label={pillar.label}
          title={pillar.title}
          description={pillar.description}
          features={pillar.features}
          reverse={index % 2 === 1}
          showFlow={pillar.id === "ai"}
        />
      ))}
      <ProcessSteps />
      <section className="bg-an-black py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-2xl border border-an-gold/20 bg-an-surface px-6 py-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-an-gold">
            Not sure which service you need? Let&apos;s figure it out together.
          </p>
          <GoldButton href="/contact">Book a Free Call</GoldButton>
        </div>
      </section>
    </>
  );
}
