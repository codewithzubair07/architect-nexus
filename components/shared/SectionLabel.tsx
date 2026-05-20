"use client";

type SectionLabelProps = {
  text: string;
};

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-an-gold">
      <span className="h-px w-10 bg-an-gold" />
      <span>{text}</span>
      <span className="h-px w-10 bg-an-gold" />
    </div>
  );
}
