"use client";

import { motion } from "framer-motion";

const items = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=85",
    label: "ZONA DE PESAS",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=85",
    label: "CARDIO",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=85",
    label: "YOGA & MOBILITY",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=85",
    label: "BOX & FUNCIONAL",
  },
];

export default function Gallery() {
  return (
    <section className="py-40 md:py-60 relative">
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <div className="text-[11px] tracking-[0.32em] text-[#C41E2A] mb-7">
            INSTALACIONES
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-6xl tracking-[-0.01em] leading-[0.98]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            UN ESPACIO
            <br />
            QUE LO CAMBIA TODO.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={it.src}
                alt={it.label}
                className="w-full h-full object-cover img-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] tracking-[0.24em] text-white/90 group-hover:text-[#C41E2A] transition-colors">
                  {it.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
