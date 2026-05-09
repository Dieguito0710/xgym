"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const WA_NUMBER = "5215551234567";

const periods = [
  { key: "monthly",   label: "MENSUAL",     months: 1,  discount: 0  },
  { key: "quarterly", label: "TRIMESTRAL",  months: 3,  discount: 10 },
  { key: "semester",  label: "SEMESTRAL",   months: 6,  discount: 15 },
  { key: "annual",    label: "ANUAL",       months: 12, discount: 20 },
] as const;

type PeriodKey = typeof periods[number]["key"];

const plans = [
  {
    name: "BASIC",
    basePrice: 799,
    description: "Perfecto para comenzar tu transformación.",
    features: [
      "Acceso 6:00 — 22:00",
      "Área de pesas y cardio",
      "2 clases grupales / semana",
      "Evaluación inicial",
    ],
    featured: false,
  },
  {
    name: "PRO",
    basePrice: 1299,
    description: "El plan favorito de los miembros más comprometidos.",
    features: [
      "Acceso 24/7 todos los días",
      "Clases grupales ilimitadas",
      "1 sesión 1:1 / semana",
      "Plan nutricional personalizado",
      "Seguimiento mensual",
    ],
    featured: true,
  },
  {
    name: "ELITE",
    basePrice: 2499,
    description: "Para atletas que exigen lo mejor.",
    features: [
      "Todo lo incluido en Pro",
      "Coach personal dedicado",
      "Sesiones privadas ilimitadas",
      "Acceso a área VIP",
      "Análisis corporal mensual",
    ],
    featured: false,
  },
];

function calcPrice(base: number, discount: number) {
  return Math.round(base * (1 - discount / 100));
}

function formatMXN(n: number) {
  return n.toLocaleString("es-MX");
}

export default function Pricing() {
  const [period, setPeriod] = useState<PeriodKey>("monthly");
  const active = periods.find((p) => p.key === period)!;

  return (
    <section id="pricing" className="py-40 md:py-60 relative">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="text-[11px] tracking-[0.32em] text-[#C41E2A] mb-7">
            ELIGE TU PLAN
          </div>
          <h2
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-[-0.01em] leading-[0.98] mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            INVERSIÓN EN
            <br />
            <span className="text-outline">TU MEJOR VERSIÓN</span>
          </h2>
          <p className="text-sm text-white/45 max-w-md mx-auto">
            Sin contratos de permanencia. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Period selector */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="grid grid-cols-2 md:flex bg-white/[0.04] border border-white/[0.08] p-1 gap-1">
            {periods.map((p) => (
              <button
                key={p.key}
                onClick={() => setPeriod(p.key)}
                className={`relative px-4 md:px-5 py-2.5 text-[10px] tracking-[0.16em] md:tracking-[0.2em] font-semibold transition-all duration-300 ${
                  period === p.key
                    ? "bg-[#C41E2A] text-white"
                    : "text-white/45 hover:text-white/80"
                }`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {p.label}
                {p.discount > 0 && (
                  <span
                    className={`absolute -top-2.5 -right-1 text-[8px] tracking-[0.1em] px-1 py-0.5 leading-none ${
                      period === p.key
                        ? "bg-white text-[#C41E2A]"
                        : "bg-[#C41E2A]/70 text-white"
                    }`}
                  >
                    -{p.discount}%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {plans.map((plan, i) => {
            const monthlyPrice = calcPrice(plan.basePrice, active.discount);
            const total = monthlyPrice * active.months;
            const waMsg = `Hola, me interesa el plan ${plan.name} de X Gym — pago ${active.label.toLowerCase()} ($${formatMXN(total)} MXN total). ¿Me pueden dar más información?`;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`relative p-10 md:p-12 transition-colors duration-500 ${
                  plan.featured
                    ? "bg-[#0F0F0A]"
                    : "bg-[#050505] hover:bg-[#0A0A0A]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-[#C41E2A]" />
                )}

                <div className="flex items-start justify-between mb-8">
                  <div
                    className="text-sm font-bold tracking-[0.24em]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {plan.name}
                  </div>
                  {plan.featured && (
                    <div className="text-[10px] tracking-[0.24em] text-[#C41E2A] px-3 py-1 border border-[#C41E2A]/40">
                      POPULAR
                    </div>
                  )}
                </div>

                <p className="text-sm text-white/45 leading-relaxed mb-8 min-h-[3rem]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-10 pb-10 border-b border-white/[0.06]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${plan.name}-${period}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-xs text-white/40">$</span>
                        <span
                          className={`font-display font-bold text-6xl tracking-[-0.02em] ${plan.featured ? "accent-text" : "text-white"}`}
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {formatMXN(monthlyPrice)}
                        </span>
                        <span className="text-xs text-white/40 ml-1">MXN/MES</span>
                      </div>
                      {active.months > 1 && (
                        <div className="text-[11px] text-white/35 tracking-[0.1em]">
                          TOTAL ${formatMXN(total)} MXN · {active.months} MESES
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <ul className="flex flex-col gap-4 mb-12">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/65">
                      <Check
                        size={12}
                        strokeWidth={2.5}
                        className={plan.featured ? "text-[#C41E2A]" : "text-white/30"}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between w-full px-6 py-4 text-xs tracking-[0.18em] transition-all ${
                    plan.featured ? "btn-lime rounded-sm" : "btn-outline rounded-sm"
                  }`}
                >
                  <span>EMPEZAR {plan.name}</span>
                  <ArrowRight size={14} strokeWidth={2.2} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[11px] text-white/25 tracking-[0.12em] mt-10"
        >
          PRECIOS EN PESOS MEXICANOS · IVA INCLUIDO · PAGO ÚNICO POR PERIODO
        </motion.p>
      </div>
    </section>
  );
}
