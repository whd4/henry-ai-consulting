"use client";

/**
 * Mascot Variant 3 — CIRCULAR SEAL
 * Gentleman head inside a currency-style ornate medallion.
 * Use for: watermark, certificate seal, letterhead, favicon.
 */
export default function MascotSeal({ size = 120, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer decorative ring */}
      <circle cx="60" cy="60" r="58" stroke="#b8975a" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="60" cy="60" r="54" stroke="#b8975a" strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Inner circle border */}
      <circle cx="60" cy="60" r="44" stroke="#b8975a" strokeWidth="1" fill="none" opacity="0.7" />

      {/* Guilloche pattern (simplified spirograph hints) */}
      {[...Array(36)].map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const x1 = 60 + Math.cos(angle) * 54;
        const y1 = 60 + Math.sin(angle) * 54;
        const x2 = 60 + Math.cos(angle) * 58;
        const y2 = 60 + Math.sin(angle) * 58;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#b8975a" strokeWidth="0.6" opacity="0.5" />;
      })}

      {/* Inner portrait oval */}
      <ellipse cx="60" cy="58" rx="28" ry="34" stroke="#b8975a" strokeWidth="1" fill="#0a0604" />

      {/* Top Hat */}
      <rect x="48" y="30" width="24" height="16" rx="0.5" fill="#b8975a" opacity="0.9" />
      <rect x="43" y="45" width="34" height="4" rx="0.5" fill="#b8975a" opacity="0.9" />
      <rect x="48" y="43" width="24" height="3" fill="#8a6d3a" />

      {/* Head */}
      <ellipse cx="60" cy="60" rx="12" ry="11" fill="#b8975a" opacity="0.12" stroke="#b8975a" strokeWidth="0.6" />

      {/* Monocle */}
      <circle cx="66" cy="58" r="4.5" stroke="#b8975a" strokeWidth="1" fill="none" opacity="0.85" />
      <circle cx="64.5" cy="57" r="0.8" fill="#d4b068" opacity="0.5" />

      {/* Mustache */}
      <path d="M51 64 Q55 67 59 64 Q61 65 63 64 Q67 67 71 64" stroke="#b8975a" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Bow tie below */}
      <path d="M55 73 L60 71 L65 73 L60 75 Z" fill="#b8975a" opacity="0.7" />

      {/* Shoulders */}
      <path d="M48 76 Q60 80 72 76 L74 85 L46 85 Z" fill="#b8975a" opacity="0.15" />

      {/* Bottom banner text "DFS" */}
      <text x="60" y="110" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="8" fontWeight="700" fill="#b8975a" letterSpacing="3">
        DFS
      </text>
      <text x="60" y="100" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="5" fill="#b8975a" opacity="0.7" letterSpacing="2">
        ★ EST 2026 ★
      </text>
    </svg>
  );
}
