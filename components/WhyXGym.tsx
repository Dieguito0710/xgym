"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WhyXGym() {
  return (
    <section id="about" className="py-40 md:py-60 relative">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Editorial split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[11px] tracking-[0.32em] text-[#C41E2A] mb-7">
                CONÓCENOS
              </div>
              <h2
                className="font-display font-bold text-5xl md:text-6xl lg:text-[64px] leading-[0.98] tracking-[-0.01em] mb-8"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                DESCUBRE
                <br />
                TU FUERZA
                <br />
                <span className="accent-text">EN X GYM</span>
              </h2>
              <p className="text-[15px] text-white/55 leading-relaxed mb-8 max-w-md">
                Somos los creadores de la experiencia deportiva más exclusiva e innovadora de México. Con instalaciones de última generación y el equipo de coaching mejor capacitado del sector.
              </p>
              <a
                href="#clubs"
                className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-[#C41E2A] hover:gap-4 transition-all duration-300 group"
              >
                MÁS INFORMACIÓN
                <ArrowUpRight size={14} className="group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[4/5] lg:aspect-[5/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=85"
                alt="Atletas en X Gym"
                className="w-full h-full object-cover img-cover"
              />
              {/* Tag floating */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-2.5 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C41E2A] animate-pulse-soft" />
                <span className="text-[10px] tracking-[0.24em] text-white/80">
                  COMUNIDAD ACTIVA
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-white/[0.06]"
        >
          {[
            { v: "+18", l: "CLUBES" },
            { v: "+3K", l: "MIEMBROS" },
            { v: "95%", l: "SATISFACCIÓN" },
            { v: "12+", l: "AÑOS DE EXPERIENCIA" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`py-10 px-6 ${i !== 0 ? "md:border-l border-white/[0.06]" : ""} ${i === 1 ? "border-l border-white/[0.06] md:border-l" : ""}`}
            >
              <div
                className="font-display font-bold text-4xl md:text-5xl mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {s.v}
              </div>
              <div className="text-[10px] tracking-[0.24em] text-white/45">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
