"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Mascot from "./Mascot";

const links = [
  { label: "Capabilities", href: "#services" },
  { label: "The System", href: "#about" },
  { label: "Inquiry", href: "#inquiry" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : ""
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Mascot size={32} />
          <span
            className="text-sm font-semibold tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", color: "#b8975a" }}
          >
            DFS
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ fontFamily: "var(--font-cinzel), Cinzel, serif", color: "#6b5d48" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#b8975a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b5d48")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#inquiry"
          className="hidden md:inline-flex btn-primary text-[10px] py-2.5 px-6"
        >
          Request Assessment
        </a>
      </div>
    </motion.nav>
  );
}
