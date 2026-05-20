import SectionLabel from "@/components/shared/SectionLabel";
import WorkGrid from "@/components/work/WorkGrid";

export default function WorkPage() {
  return (
    <>
      <section className="bg-an-black py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
          <SectionLabel text="OUR PORTFOLIO" />
          <h1 className="text-5xl font-display md:text-7xl">
            Work That Speaks.
          </h1>
        </div>
      </section>
      <WorkGrid />
    </>
  );
}
