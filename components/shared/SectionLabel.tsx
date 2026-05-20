"use client";

type SectionLabelProps = {
  text: string;
};

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-an-gold" data-reveal>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-an-gold" />
      <span>{text}</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-an-gold" />
    </div>
  );
}
