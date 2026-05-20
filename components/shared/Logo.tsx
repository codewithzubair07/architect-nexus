"use client";

type LogoProps = {
  size?: number;
  glowing?: boolean;
  className?: string;
};

export default function Logo({ size = 48, glowing = false, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Architect Nexus logo"
      role="img"
      style={{
        filter: glowing
          ? "drop-shadow(0 0 10px rgba(0, 229, 255, 0.65)) drop-shadow(0 0 24px rgba(0, 229, 255, 0.45))"
          : undefined,
      }}
    >
      <path
        d="M14 98L40 20L66 98M24 66H56"
        stroke="#00E5FF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74 98V22M106 98V22M74 98L106 22"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
