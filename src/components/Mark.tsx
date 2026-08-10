"use client";

/**
 * DFS Mark — replaces the top-hat/monocle mascot.
 *
 * WHY THE MASCOT HAD TO GO
 * The previous mark was a top hat + monocle + handlebar mustache — visually, the Monopoly
 * Man. This firm's entire pitch is "someone may be taking money that belongs to you." A
 * cartoon plutocrat is the single worst mark that pitch could carry: it reads as a crypto
 * startup or a parody, and at 32px in the nav it collapsed into an unreadable blob.
 *
 * WHAT REPLACED IT
 * A plumb line inside a surveyor's ring. The plumb bob is the oldest instrument for
 * establishing true vertical — a tool that answers one question, honestly: is this straight
 * or is it not. That is literally what this firm sells. It's also period-correct for a
 * fourth-generation Texas oil family without being costume.
 *
 * Renders as pure geometry — no gradients, no faces, no whimsy. It reads at 24px and at 400px.
 */
export default function Mark({
  size = 48,
  className = "",
  showRing = true,
}: {
  size?: number;
  className?: string;
  showRing?: boolean;
}) {
  const gold = "#8a6a2f";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {showRing && (
        <>
          <circle cx="50" cy="50" r="46" stroke={gold} strokeWidth="1" opacity="0.35" />
          <circle cx="50" cy="50" r="41" stroke={gold} strokeWidth="0.5" opacity="0.18" />
          {/* Four cardinal ticks — a surveyor's reference, not decoration */}
          {[0, 90, 180, 270].map((deg) => (
            <line
              key={deg}
              x1="50"
              y1="6"
              x2="50"
              y2="12"
              stroke={gold}
              strokeWidth="1"
              opacity="0.45"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
        </>
      )}

      {/* Suspension point */}
      <circle cx="50" cy="22" r="2" fill={gold} opacity="0.9" />

      {/* The line — dead vertical, the whole point of the mark */}
      <line x1="50" y1="24" x2="50" y2="58" stroke={gold} strokeWidth="1.2" opacity="0.75" />

      {/* Plumb bob */}
      <path
        d="M50 58 L58 64 L50 84 L42 64 Z"
        fill={gold}
        opacity="0.85"
      />
      <path
        d="M50 58 L58 64 L50 84 L42 64 Z"
        stroke={gold}
        strokeWidth="0.75"
        opacity="0.9"
        fill="none"
      />
      {/* Facet, so the bob reads as a solid object rather than a flat triangle */}
      <path d="M50 58 L50 84" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.35" />
    </svg>
  );
}

/** Horizontal lockup: mark + wordmark. Use in the nav and the footer. */
export function MarkLockup({ size = 30 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <Mark size={size} />
      <span
        className="text-sm font-semibold tracking-[0.18em] uppercase"
        style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", color: "#8a6a2f" }}
      >
        DFS
      </span>
    </span>
  );
}
