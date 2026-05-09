"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Diego Ramírez",
    role: "MIEMBRO DESDE 2022",
    quote:
      "En 6 meses cambié por completo. Es el primer gimnasio que me hace sentir parte de algo más grande.",
  },
  {
    name: "Valentina Torres",
    role: "ATLETA COMPETITIVA",
    quote:
      "Entrené en los mejores gimnasios de la ciudad. Nada se compara con la experiencia de X Gym.",
  },
  {
    name: "Marcos Herrera",
    role: "MIEMBRO DESDE 2021",
    quote:
      "El seguimiento personalizado hace toda la diferencia. Por fin progreso con un sistema real.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 md:py-60 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=2400&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <div className="text-[11px] tracking-[0.32em] text-[#C41E2A] mb-7">
            HISTORIAS REALES
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-6xl tracking-[-0.01em] leading-[0.98]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ELLOS YA
            <br />
            <span className="text-outline">CAMBIARON.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="bg-black/60 backdrop-blur-sm p-10 md:p-12 flex flex-col justify-between min-h-[320px] group hover:bg-black/75 transition-colors duration-500"
            >
              {/* Quote mark */}
              <div
                className="font-display text-6xl text-[#C41E2A]/30 leading-none mb-8 group-hover:text-[#C41E2A] transition-colors duration-500"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                &ldquo;
              </div>

              <p className="text-base text-white/70 leading-relaxed mb-8 flex-1">
                {t.quote}
              </p>

              <div className="pt-6 border-t border-white/[0.06]">
                <div className="text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                  {t.name}
                </div>
                <div className="text-[10px] tracking-[0.24em] text-white/40">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
