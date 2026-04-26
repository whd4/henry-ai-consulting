"use client";

/**
 * DFS Gentleman — Top hat + monocle silhouette mascot
 * Inspired by the classic wealthy industrialist aesthetic (NOT Monopoly IP)
 */
export default function Mascot({ size = 48, className = "" }: { size?: number; className?: string }) {
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
      <rect x="30" y="8" width="40" height="28" rx="2" fill="#b8975a" opacity="0.9" />
      <rect x="22" y="34" width="56" height="6" rx="1" fill="#b8975a" opacity="0.9" />
      {/* Hat band */}
      <rect x="30" y="28" width="40" height="4" fill="#8a6d3a" opacity="0.8" />

      {/* Head silhouette */}
      <ellipse cx="50" cy="52" rx="18" ry="16" fill="#b8975a" opacity="0.15" />

      {/* Monocle */}
      <circle cx="60" cy="50" r="7" stroke="#b8975a" strokeWidth="1.5" fill="none" opacity="0.8" />
      <line x1="67" y1="50" x2="75" y2="62" stroke="#b8975a" strokeWidth="1" opacity="0.5" />
      {/* Monocle glint */}
      <circle cx="58" cy="48" r="1.5" fill="#d4b068" opacity="0.4" />

      {/* Mustache */}
      <path
        d="M40 58 Q45 62 50 58 Q55 62 60 58"
        stroke="#b8975a"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />

      {/* Collar/Bow tie hint */}
      <path
        d="M38 68 L50 72 L62 68"
        stroke="#b8975a"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M44 70 L50 66 L56 70 L50 72 Z"
        fill="#b8975a"
        opacity="0.3"
      />

      {/* Shoulders */}
      <path
        d="M32 72 Q50 78 68 72 Q72 80 72 90 L28 90 Q28 80 32 72"
        fill="#b8975a"
        opacity="0.08"
      />
    </svg>
  );
}
