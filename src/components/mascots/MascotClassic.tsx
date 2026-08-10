"use client";

/**
 * Mascot Variant 1 — CLASSIC BUST
 * Head + shoulders silhouette. Gold outline, transparent fill.
 * Use for: nav logo, small seal, favicon base.
 */
export default function MascotClassic({ size = 72, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Hat */}
      <rect x="30" y="8" width="40" height="28" rx="1" fill="#8a6a2f" opacity="0.9" />
      <rect x="22" y="34" width="56" height="6" rx="1" fill="#8a6a2f" opacity="0.9" />
      <rect x="30" y="28" width="40" height="4" fill="#75591f" opacity="0.8" />

      {/* Head */}
      <ellipse cx="50" cy="55" rx="16" ry="15" fill="#8a6a2f" opacity="0.12" stroke="#8a6a2f" strokeWidth="0.8" />

      {/* Monocle */}
      <circle cx="59" cy="52" r="6.5" stroke="#8a6a2f" strokeWidth="1.5" fill="none" opacity="0.85" />
      <line x1="65.5" y1="52" x2="73" y2="62" stroke="#8a6a2f" strokeWidth="0.8" opacity="0.5" />
      <circle cx="57" cy="50" r="1.2" fill="#a8823c" opacity="0.5" />

      {/* Mustache (handlebar) */}
      <path d="M38 60 Q43 65 48 60 Q52 62 56 60 Q61 65 66 60" stroke="#8a6a2f" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Bow tie */}
      <path d="M42 72 L50 68 L58 72 L50 76 Z" fill="#8a6a2f" opacity="0.6" />
      <circle cx="50" cy="72" r="1.5" fill="#0a0a0a" />

      {/* Collar / shoulders */}
      <path d="M32 76 Q50 82 68 76 Q72 88 72 95 L28 95 Q28 88 32 76" fill="#8a6a2f" stroke="#8a6a2f" strokeWidth="0.5" opacity="0.25" />
    </svg>
  );
}
