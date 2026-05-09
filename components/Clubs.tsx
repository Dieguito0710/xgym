"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const clubs = [
  {
    name: "DOWNTOWN PUEBLA",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=85",
    distance: "2 KM",
    address: "Av. Reforma 304, Centro Histórico",
    badge: "PRÓXIMAMENTE",
  },
  {
    name: "NOMAD INTERLOMAS",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=85",
    distance: "4 KM",
    address: "Blvd. Interlomas 5, Huixquilucan",
    badge: null,
  },
  {
    name: "SAN ÁNGEL",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=85",
    distance: "7 KM",
    address: "Av. Revolución 1267, San Ángel",
    badge: null,
  },
];

export default function Clubs() {
  return (
    <section id="clubs" className="py-40 md:py-60 relative bg-[#070707]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="text-[11px] tracking-[0.32em] text-[#C41E2A] mb-7">
              ENCUENTRA TU
            </div>
            <h2
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-[-0.01em] leading-[0.98]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              X GYM MÁS CERCANO
            </h2>
          </div>
          <a
            href="#"
            className="text-xs tracking-[0.18em] text-white/60 hover:text-[#C41E2A] flex items-center gap-2 transition-colors"
          >
            VER TODOS LOS CLUBES
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubs.map((club, i) => (
            <motion.a
              key={club.name}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden mb-5">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover img-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {club.badge && (
                  <div className="absolute top-5 left-5 px-3 py-1.5 bg-[#C41E2A] text-white text-[10px] tracking-[0.18em] font-semibold">
                    {club.badge}
                  </div>
                )}

                {/* Arrow */}
                <div className="absolute top-5 right-5 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#C41E2A] transition-all duration-300">
                  <ArrowUpRight size={16} className="text-white group-hover:text-[#C41E2A]" />
                </div>
              </div>

              {/* Info */}
              <h3
                className="text-lg font-bold tracking-[0.04em] mb-2 group-hover:text-[#C41E2A] transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {club.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <MapPin size={12} />
                <span>DISTANCIA · {club.distance}</span>
              </div>
              <p className="text-xs text-white/40 mt-2">{club.address}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
