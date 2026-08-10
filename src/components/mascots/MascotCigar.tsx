"use client";

/**
 * Mascot Variant 5 — WITH CIGAR (confident, established)
 * Gentleman smoking cigar, slight smirk, slightly tilted hat.
 * Use for: case study pages, "we get results" sections, testimonials.
 */
export default function MascotCigar({ size = 96, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Hat (slightly tilted) */}
      <g transform="translate(40, 10) rotate(-6)">
        <rect x="0" y="0" width="36" height="28" rx="1" fill="#8a6a2f" opacity="0.9" />
        <rect x="-7" y="26" width="50" height="5" rx="1" fill="#8a6a2f" opacity="0.9" />
        <rect x="0" y="21" width="36" height="3" fill="#75591f" />
        {/* Hat band detail */}
        <line x1="5" y1="8" x2="31" y2="8" stroke="#a8823c" strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* Head */}
      <ellipse cx="58" cy="58" rx="18" ry="17" fill="#8a6a2f" opacity="0.12" stroke="#8a6a2f" strokeWidth="0.8" />

      {/* Monocle */}
      <circle cx="66" cy="55" r="6.5" stroke="#8a6a2f" strokeWidth="1.5" fill="none" opacity="0.9" />
      <line x1="72.5" y1="55" x2="80" y2="65" stroke="#8a6a2f" strokeWidth="0.8" opacity="0.5" />
      <circle cx="64" cy="53" r="1.4" fill="#a8823c" opacity="0.6" />

      {/* Eye (other side - squinted confident look) */}
      <path d="M46 56 Q50 54 54 56" stroke="#8a6a2f" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.8" />

      {/* Smirking mustache (asymmetric) */}
      <path d="M42 65 Q48 71 55 66 Q59 68 62 66 Q70 72 74 65" stroke="#8a6a2f" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Cigar */}
      <rect x="74" y="68" width="22" height="4" rx="1" fill="#75591f" opacity="0.9" />
      <rect x="74" y="68" width="4" height="4" rx="1" fill="#8a6a2f" opacity="0.7" />
      <rect x="72" y="68" width="3" height="4" rx="1" fill="#a8823c" />

      {/* Cigar band */}
      <rect x="82" y="68.5" width="3" height="3" fill="#8a6a2f" opacity="0.7" />

      {/* Smoke wisps */}
      <path d="M96 68 Q98 60 94 54 Q100 48 96 42" stroke="#8a6a2f" strokeWidth="0.8" fill="none" opacity="0.35" strokeDasharray="1 1.5" />
      <path d="M99 65 Q104 58 100 50" stroke="#8a6a2f" strokeWidth="0.6" fill="none" opacity="0.3" strokeDasharray="0.8 1.5" />

      {/* Ember glow at cigar tip */}
      <circle cx="73" cy="70" r="1.8" fill="#e8743a" opacity="0.6" />
      <circle cx="73" cy="70" r="0.8" fill="#fff" opacity="0.4" />

      {/* Bow tie */}
      <path d="M49 80 L58 76 L67 80 L58 84 Z" fill="#8a6a2f" opacity="0.7" />
      <circle cx="58" cy="80" r="1.5" fill="#0a0a0a" />

      {/* Shoulders */}
      <path d="M38 86 Q58 92 78 86 L82 115 L34 115 Z" fill="#8a6a2f" stroke="#8a6a2f" strokeWidth="0.5" opacity="0.25" />

      {/* Pocket square */}
      <path d="M68 92 L72 89 L74 96 Z" fill="#a8823c" opacity="0.5" />
    </svg>
  );
}
