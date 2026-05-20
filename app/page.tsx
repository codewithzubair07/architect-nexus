import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import WorkPreview from "@/components/home/WorkPreview";
import Testimonials from "@/components/home/Testimonials";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesTeaser />
      <WorkPreview />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
