"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-48 md:py-72 relative overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=2000&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="text-[11px] tracking-[0.32em] text-[#C41E2A] mb-7">
            EMPIEZA HOY
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-7xl lg:text-8xl tracking-[-0.02em] leading-[0.95] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            TU TRANSFORMACIÓN
            <br />
            <span className="text-outline">EMPIEZA AHORA.</span>
          </h2>
          <p className="text-base md:text-lg text-white/55 max-w-lg mb-8 leading-relaxed">
            Cada día que pasa es un día más alejado de quien podrías ser. El mejor momento fue ayer. El segundo mejor momento es ahora.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href={`https://wa.me/5215551234567?text=${encodeURIComponent("Hola, quiero comenzar mi prueba gratis en X Gym. ¿Cómo me inscribo?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 btn-lime text-xs tracking-[0.18em] rounded-sm"
            >
              EMPIEZA TU PRUEBA GRATIS
              <ArrowRight size={14} strokeWidth={2.2} />
            </a>
            <a
              href="tel:+525551234567"
              className="inline-flex items-center px-8 py-4 btn-outline text-xs tracking-[0.18em] rounded-sm"
            >
              LLÁMANOS · (55) 1234 5678
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
