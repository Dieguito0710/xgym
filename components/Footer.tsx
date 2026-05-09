"use client";

const footerLinks = {
  GIMNASIO: ["Nosotros", "Instalaciones", "Equipo", "Clases"],
  MEMBRESÍAS: ["Plan Basic", "Plan Pro", "Plan Elite", "Corporativo"],
  CONTACTO: ["FAQ", "Privacidad", "Términos"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 flex items-center justify-center border border-[#C41E2A] rotate-45">
                <span className="-rotate-45 text-[#C41E2A] font-bold text-xs">X</span>
              </div>
              <span
                className="font-display text-lg font-bold"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                XGYM
              </span>
            </a>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs mb-8">
              El gimnasio donde la disciplina, el equipo y el ambiente convergen para sacar lo mejor de ti.
            </p>
            <div className="flex items-center gap-4 text-[10px] tracking-[0.24em] text-white/40">
              <a href="#" className="hover:text-[#C41E2A] transition-colors">INSTAGRAM</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a href="#" className="hover:text-[#C41E2A] transition-colors">YOUTUBE</a>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <a href="#" className="hover:text-[#C41E2A] transition-colors">TIKTOK</a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[10px] tracking-[0.24em] text-white/40 mb-5">
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-[#C41E2A] transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.24em] text-white/30">
            © 2025 X GYM · TODOS LOS DERECHOS RESERVADOS
          </p>
          <p className="text-[10px] tracking-[0.24em] text-white/20">
            DISEÑADO PARA CAMPEONES
          </p>
        </div>
      </div>
    </footer>
  );
}
