"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    number: "+50",
    title: "CLASES",
    description:
      "Clases para todos los niveles, diseñadas para retar tu mente y transformar tu cuerpo.",
  },
  {
    number: "24/7",
    title: "ACCESO TOTAL",
    description:
      "Sin restricciones de horario. Entrena cuando tu cuerpo lo pida, cualquier día.",
  },
  {
    number: "+12",
    title: "ENTRENADORES",
    description:
      "Coaches certificados internacionalmente, listos para acompañarte hacia tu mejor versión.",
  },
  {
    number: "1:1",
    title: "PLAN PERSONALIZADO",
    description:
      "Cada miembro recibe un plan adaptado a sus objetivos, nivel y disponibilidad.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-40 md:py-60 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=2400&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="text-[11px] tracking-[0.32em] text-[#C41E2A] mb-7">
            TRANSFORMA TU
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            BIENESTAR INTEGRAL
          </h2>
        </motion.div>

        {/* 2x2 grid with thin separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {/* Vertical center divider */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.06]" />
          {/* Horizontal divider */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-white/[0.06]" />

          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group p-8 md:p-14 flex items-start gap-6 md:gap-10 border-b border-white/[0.06] md:border-b-0 last:border-b-0"
            >
              {/* Big number */}
              <div className="shrink-0">
                <div
                  className="font-display font-bold text-5xl md:text-6xl text-outline group-hover:text-[#C41E2A] transition-colors duration-500"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {b.number}
                </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3
                  className="text-base md:text-lg font-semibold tracking-[0.16em] mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm md:text-[15px] text-white/55 leading-relaxed max-w-xs">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
