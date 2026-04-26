export default function Footer() {
  return (
    <footer className="py-14" style={{ borderTop: "1px solid rgba(184, 151, 90, 0.06)" }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span
            className="text-xs tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", color: "#b8975a" }}
          >
            Dwyer Financial Security
          </span>

          <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#4a3f30" }}>
            Houston, Texas
          </span>

          <p className="text-[9px]" style={{ color: "#3a3025" }}>
            &copy; {new Date().getFullYear()} Dwyer Financial Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
