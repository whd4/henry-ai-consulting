"use client";

/**
 * Mascot Variant 6 — PROFILE (side-facing, like currency portraits)
 * Side view silhouette — echoes Founding Fathers on US currency.
 * Use for: banknote-style pages, oval frames, currency design elements.
 */
export default function MascotProfile({ size = 120, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Hat (profile view — rectangle) */}
      <rect x="38" y="8" width="48" height="30" rx="1" fill="#b8975a" opacity="0.9" />
      <rect x="32" y="36" width="58" height="5" rx="1" fill="#b8975a" opacity="0.9" />
      <rect x="38" y="31" width="48" height="3" fill="#8a6d3a" />
      {/* Hat band */}
      <line x1="40" y1="20" x2="85" y2="20" stroke="#d4b068" strokeWidth="0.6" opacity="0.6" />

      {/* Profile head (side-facing, looking right) */}
      <path
        d="M 50 45
           Q 45 50 45 58
           Q 43 62 46 66
           L 48 70
           Q 50 75 55 78
           Q 58 82 58 86
           L 58 92
           L 45 92
           L 45 95"
        stroke="#b8975a"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />

      {/* Face profile outline */}
      <path
        d="M 50 45
           L 52 48
           L 74 50
           Q 78 54 80 58
           Q 82 62 80 66
           L 78 70
           Q 76 74 74 76
           L 76 78
           Q 78 80 76 82
           L 70 86
           Q 65 88 60 88
           L 58 92"
        stroke="#b8975a"
        strokeWidth="1.5"
        fill="#b8975a"
        fillOpacity="0.08"
        strokeLinecap="round"
      />

      {/* Eye (single, since it's profile) */}
      <ellipse cx="68" cy="58" rx="1.5" ry="1" fill="#b8975a" opacity="0.8" />
      <circle cx="68" cy="58" r="0.6" fill="#0a0a0a" />

      {/* Eyebrow */}
      <path d="M64 54 Q68 53 72 54" stroke="#b8975a" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Nose (prominent profile) */}
      <path d="M76 58 Q80 62 79 66 L76 68" stroke="#b8975a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.8" />

      {/* Mustache (profile view — flows to the right) */}
      <path d="M68 72 Q74 74 82 72" stroke="#b8975a" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Mouth */}
      <line x1="70" y1="75" x2="77" y2="75" stroke="#b8975a" strokeWidth="0.8" opacity="0.7" strokeLinecap="round" />

      {/* Chin + beard hint */}
      <path d="M70 80 Q74 82 76 80" stroke="#b8975a" strokeWidth="0.8" fill="none" opacity="0.6" />

      {/* Ear */}
      <ellipse cx="55" cy="62" rx="2" ry="3.5" stroke="#b8975a" strokeWidth="0.8" fill="#b8975a" fillOpacity="0.1" />

      {/* Monocle cord */}
      <path d="M70 58 Q65 75 58 85" stroke="#b8975a" strokeWidth="0.7" fill="none" opacity="0.5" strokeDasharray="1 1" />

      {/* Shoulder / collar */}
      <path d="M40 95 L42 115 L85 115 L82 95 Q78 92 65 92 Q50 92 40 95 Z" fill="#b8975a" stroke="#b8975a" strokeWidth="0.7" opacity="0.3" />

      {/* Collar detail */}
      <path d="M52 94 L58 105 L60 94" stroke="#b8975a" strokeWidth="0.8" opacity="0.6" />
      <path d="M72 94 L66 105 L64 94" stroke="#b8975a" strokeWidth="0.8" opacity="0.6" />

      {/* Bow tie (profile view — smaller) */}
      <path d="M56 102 L62 100 L62 104 Z" fill="#b8975a" opacity="0.7" />
      <path d="M66 100 L72 102 L66 104 Z" fill="#b8975a" opacity="0.7" />

      {/* "In Dwyer We Trust" style banner below */}
      <text x="60" y="130" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="6" fontWeight="600" fill="#b8975a" letterSpacing="2" opacity="0.85">
        IN FORENSICS WE TRUST
      </text>
    </svg>
  );
}
