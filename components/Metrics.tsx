"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, suffix = "", duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        let start = 0;
        const step = target / (duration / 16);
        const t = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(t);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Metrics() {
  return (
    <section className="py-40 md:py-60 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=2400&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <div className="text-[11px] tracking-[0.32em] text-[#C41E2A] mb-7">
            LOS NÚMEROS HABLAN
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-[-0.01em] leading-[0.98]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-outline-white">RESULTADOS</span>
            <br />
            QUE NO MIENTEN.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {[
            { v: 3000, s: "+", l: "MIEMBROS ACTIVOS", d: "Y creciendo cada mes" },
            { v: 95, s: "%", l: "SATISFACCIÓN", d: "Índice NPS" },
            { v: 12, s: "+", l: "ENTRENADORES", d: "Certificados internacionalmente" },
            { v: 24, s: "", l: "CLASES SEMANALES", d: "Para todos los niveles" },
          ].map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="bg-[#050505] p-8 md:p-12 group hover:bg-[#0A0A0A] transition-colors duration-500"
            >
              <div
                className="font-display font-bold text-5xl md:text-6xl mb-6 group-hover:text-[#C41E2A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <Counter target={m.v} suffix={m.s} />
              </div>
              <div className="text-[10px] tracking-[0.24em] text-white/70 mb-2">
                {m.l}
              </div>
              <div className="text-xs text-white/35">{m.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
