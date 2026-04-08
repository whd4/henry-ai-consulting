"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white text-xs font-bold">H</span>
          </div>
          <span className="text-base font-semibold tracking-tight">
            HENRY AI
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5"
        >
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-white/[0.04] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-center text-sm"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
