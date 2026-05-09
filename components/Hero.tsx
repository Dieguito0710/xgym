"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2400&q=85"
          alt="Gimnasio premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#C41E2A]" />
            <span className="text-[11px] tracking-[0.32em] text-[#C41E2A] font-medium">
              X GYM · MÉXICO
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] mb-8"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="block text-outline text-5xl md:text-7xl lg:text-[88px] font-bold mb-1">
              MÁS ALLÁ DE LOS LÍMITES,
            </span>
            <span className="block text-5xl md:text-7xl lg:text-[88px] font-bold text-white">
              ESTÁ TU MEJOR VERSIÓN.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base md:text-lg text-white/60 max-w-lg mb-12 leading-relaxed"
          >
            Entrena en el gimnasio donde la disciplina, el equipo y el ambiente convergen para sacar lo mejor de ti.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 px-8 py-4 btn-lime text-xs tracking-[0.18em] rounded-sm"
            >
              INSCRÍBETE
              <ArrowRight size={14} strokeWidth={2.2} />
            </a>
            <a
              href="#clubs"
              className="inline-flex items-center px-8 py-4 btn-outline text-xs tracking-[0.18em] rounded-sm"
            >
              CONOCE LOS CLUBES
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-end gap-3"
      >
        <span className="text-[10px] tracking-[0.32em] text-white/40">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#C41E2A]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
