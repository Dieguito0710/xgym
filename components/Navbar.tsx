"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "INICIO", href: "#hero" },
  { label: "CONÓCENOS", href: "#about" },
  { label: "CLUBES", href: "#clubs" },
  { label: "BENEFICIOS", href: "#benefits" },
  { label: "PRECIOS", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.04] py-4"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 flex items-center justify-center border border-[#C41E2A] rotate-45">
              <span className="-rotate-45 text-[#C41E2A] font-bold text-xs">X</span>
            </div>
            <span
              className="font-display text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              XGYM
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.18em] text-white/70 hover:text-[#C41E2A] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-[11px] tracking-[0.18em] px-5 py-2.5 btn-lime rounded-sm"
            >
              INSCRÍBETE
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-[#C41E2A] transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-black/95 backdrop-blur-xl border-b border-white/[0.05] px-8 py-6 md:hidden"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.16em] text-white/70 hover:text-[#C41E2A]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#hero"
                className="mt-2 text-center text-xs tracking-[0.18em] py-3 btn-lime rounded-sm"
                onClick={() => setMenuOpen(false)}
              >
                INSCRÍBETE
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
