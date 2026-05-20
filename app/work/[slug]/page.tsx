import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import CaseStudyBody from "@/components/work/CaseStudyBody";
import { workItems } from "@/data/work";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = params;
  const itemIndex = workItems.findIndex((item) => item.slug === slug);
  if (itemIndex === -1) return notFound();

  const item = workItems[itemIndex];
  const previous = workItems[itemIndex - 1];
  const next = workItems[itemIndex + 1];

  return (
    <>
      <CaseStudyHero item={item} />
      <CaseStudyBody item={item} previous={previous} next={next} />
    </>
  );
}
