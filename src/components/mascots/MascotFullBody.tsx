"use client";

/**
 * Mascot Variant 4 — FULL BODY STANDING
 * Complete gentleman with cane, three-piece suit, pocket watch chain.
 * Use for: hero illustration, About page centerpiece, large marketing asset.
 */
export default function MascotFullBody({ size = 160, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 120 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Hat */}
      <rect x="42" y="10" width="36" height="28" rx="1" fill="#8a6a2f" opacity="0.9" />
      <rect x="35" y="36" width="50" height="5" rx="1" fill="#8a6a2f" opacity="0.9" />
      <rect x="42" y="31" width="36" height="3" fill="#75591f" />

      {/* Head */}
      <ellipse cx="60" cy="55" rx="16" ry="15" fill="#8a6a2f" opacity="0.12" stroke="#8a6a2f" strokeWidth="0.7" />

      {/* Monocle */}
      <circle cx="68" cy="52" r="6" stroke="#8a6a2f" strokeWidth="1.4" fill="none" opacity="0.85" />
      <line x1="74" y1="52" x2="82" y2="62" stroke="#8a6a2f" strokeWidth="0.7" opacity="0.5" />
      <circle cx="66" cy="50" r="1.2" fill="#a8823c" opacity="0.5" />

      {/* Mustache */}
      <path d="M48 61 Q53 66 58 61 Q62 63 66 61 Q71 66 76 61" stroke="#8a6a2f" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      {/* Bow tie */}
      <path d="M51 74 L60 70 L69 74 L60 78 Z" fill="#8a6a2f" opacity="0.7" />
      <circle cx="60" cy="74" r="1.5" fill="#0a0a0a" />

      {/* Torso / jacket */}
      <path d="M38 80 Q60 85 82 80 L88 160 L32 160 Z" fill="#8a6a2f" opacity="0.12" stroke="#8a6a2f" strokeWidth="0.7" />

      {/* Lapels */}
      <path d="M54 82 L44 140" stroke="#8a6a2f" strokeWidth="0.9" opacity="0.5" />
      <path d="M66 82 L76 140" stroke="#8a6a2f" strokeWidth="0.9" opacity="0.5" />

      {/* Vest (triangle visible between lapels) */}
      <path d="M54 82 L60 100 L66 82" stroke="#8a6a2f" strokeWidth="0.8" fill="#8a6a2f" opacity="0.08" />

      {/* Buttons */}
      {[95, 105, 115, 125, 135].map((y, i) => (
        <circle key={i} cx="60" cy={y} r="0.9" fill="#8a6a2f" opacity="0.7" />
      ))}

      {/* Pocket watch chain */}
      <path d="M52 105 Q47 112 52 120 Q57 125 50 132" stroke="#8a6a2f" strokeWidth="0.9" fill="none" opacity="0.7" strokeDasharray="1.5 1.5" />
      {/* Watch */}
      <circle cx="50" cy="134" r="3" stroke="#8a6a2f" strokeWidth="0.9" fill="#0a0604" />
      <circle cx="50" cy="134" r="0.6" fill="#8a6a2f" />

      {/* Legs (trousers) */}
      <path d="M40 160 L36 220 L52 220 L56 160 Z" fill="#8a6a2f" opacity="0.1" stroke="#8a6a2f" strokeWidth="0.6" />
      <path d="M64 160 L68 220 L84 220 L80 160 Z" fill="#8a6a2f" opacity="0.1" stroke="#8a6a2f" strokeWidth="0.6" />

      {/* Shoes */}
      <ellipse cx="44" cy="225" rx="10" ry="3.5" fill="#8a6a2f" opacity="0.5" />
      <ellipse cx="76" cy="225" rx="10" ry="3.5" fill="#8a6a2f" opacity="0.5" />

      {/* Cane (right side) */}
      <line x1="96" y1="120" x2="92" y2="230" stroke="#8a6a2f" strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
      <circle cx="97" cy="118" r="3" fill="#8a6a2f" opacity="0.85" />
      <circle cx="97" cy="117" r="1" fill="#a8823c" />

      {/* Right arm holding cane */}
      <path d="M82 95 Q92 105 96 118" stroke="#8a6a2f" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.75" />

      {/* Left arm at side */}
      <path d="M38 95 Q33 130 35 155" stroke="#8a6a2f" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}
