"use client";

/**
 * Mascot Variant 2 — TIPPING HAT (greeting pose)
 * Gentleman lifting hat in greeting — welcoming, approachable.
 * Use for: hero section, welcome area, confirmation pages.
 */
export default function MascotTipHat({ size = 96, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Arm holding hat (up and to the right) */}
      <path d="M78 58 Q88 45 92 30" stroke="#8a6a2f" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.75" />

      {/* Top Hat (lifted, tilted) */}
      <g transform="translate(82, 15) rotate(-15)">
        <rect x="0" y="0" width="30" height="22" rx="1" fill="#8a6a2f" opacity="0.9" />
        <rect x="-6" y="20" width="42" height="5" rx="1" fill="#8a6a2f" opacity="0.9" />
        <rect x="0" y="16" width="30" height="3" fill="#75591f" />
      </g>

      {/* Head (bald top since hat is off) */}
      <ellipse cx="55" cy="55" rx="17" ry="18" fill="#8a6a2f" opacity="0.12" stroke="#8a6a2f" strokeWidth="0.8" />

      {/* Hair ring / back of head */}
      <path d="M38 55 Q38 68 50 70 Q58 68 62 65" stroke="#8a6a2f" strokeWidth="1.2" fill="none" opacity="0.5" />

      {/* Monocle */}
      <circle cx="63" cy="52" r="6" stroke="#8a6a2f" strokeWidth="1.5" fill="none" opacity="0.85" />
      <line x1="69" y1="52" x2="76" y2="60" stroke="#8a6a2f" strokeWidth="0.8" opacity="0.5" />
      <circle cx="61" cy="50" r="1.2" fill="#a8823c" opacity="0.5" />

      {/* Mustache */}
      <path d="M42 62 Q47 67 52 62 Q56 64 60 62 Q65 67 70 62" stroke="#8a6a2f" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Bow tie */}
      <path d="M46 75 L55 71 L64 75 L55 79 Z" fill="#8a6a2f" opacity="0.6" />
      <circle cx="55" cy="75" r="1.5" fill="#0a0a0a" />

      {/* Body / torso */}
      <path d="M35 82 Q55 88 75 82 L80 115 L30 115 Z" fill="#8a6a2f" stroke="#8a6a2f" strokeWidth="0.6" opacity="0.25" />

      {/* Lapels */}
      <path d="M48 85 L43 110" stroke="#8a6a2f" strokeWidth="0.8" opacity="0.4" />
      <path d="M62 85 L67 110" stroke="#8a6a2f" strokeWidth="0.8" opacity="0.4" />

      {/* Vest / buttons */}
      <circle cx="55" cy="92" r="0.8" fill="#8a6a2f" opacity="0.6" />
      <circle cx="55" cy="99" r="0.8" fill="#8a6a2f" opacity="0.6" />
      <circle cx="55" cy="106" r="0.8" fill="#8a6a2f" opacity="0.6" />
    </svg>
  );
}
