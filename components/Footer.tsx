import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2a1a0e" }}>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">

        <div
          className="py-14 px-8 mb-16 text-center"
          style={{ border: "0.5px solid rgba(184,148,90,0.2)" }}
        >
          <p
            className="text-2xl font-light italic leading-relaxed max-w-2xl mx-auto mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "#f5ede0" }}
          >
            &ldquo;Acreditamos que grandes momentos começam ao redor de uma mesa.
            Nossa missão é encontrar vinhos extraordinários para que você viva
            experiências extraordinárias.&rdquo;
          </p>
          <div className="w-12 h-px mx-auto" style={{ backgroundColor: "#b8945a" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-1">
            <Image
              src="/Logo 2.png"
              alt="MM Wine"
              width={90}
              height={90}
              className="mb-5 brightness-0 invert opacity-90"
            />
            <p className="text-[12px] leading-relaxed" style={{ color: "rgba(245,237,224,0.5)" }}>
              Nós escolhemos os vinhos. Você cria os momentos.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[9px] tracking-[0.2em] uppercase pb-0.5 transition-colors"
                  style={{
                    color: "rgba(184,148,90,0.7)",
                    borderBottom: "0.5px solid rgba(184,148,90,0.3)",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div
              className="text-[9px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "#b8945a" }}
            >
              Clube
            </div>
            <ul className="space-y-3">
              {["Plano Essencial", "Plano Seleção", "Plano Reserva", "Como funciona", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12px] transition-colors"
                      style={{ color: "rgba(245,237,224,0.55)" }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div
              className="text-[9px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "#b8945a" }}
            >
              Loja
            </div>
            <ul className="space-y-3">
              {[
                "Todos os vinhos",
                "Seleção da Malu",
                "Presentes",
                "Corporativo",
                "Vinho do Mês",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[12px] transition-colors"
                    style={{ color: "rgba(245,237,224,0.55)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="text-[9px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "#b8945a" }}
            >
              Newsletter
            </div>
            <p
              className="text-[11px] mb-4 leading-relaxed"
              style={{ color: "rgba(245,237,224,0.5)" }}
            >
              Novidades e seleções exclusivas antes de todo mundo.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="text-[11px] px-4 py-3 outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "0.5px solid rgba(184,148,90,0.25)",
                  color: "#f5ede0",
                }}
              />
              <button
                className="text-[9px] tracking-[0.25em] uppercase py-3 transition-colors"
                style={{ backgroundColor: "#b8945a", color: "white" }}
              >
                Quero receber
              </button>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "0.5px solid rgba(184,148,90,0.12)" }}
        >
          <p className="text-[10px]" style={{ color: "rgba(245,237,224,0.3)" }}>
            © {new Date().getFullYear()} MM Wine. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-center" style={{ color: "rgba(245,237,224,0.3)" }}>
            Beba com moderação. Venda proibida para menores de 18 anos. Lei nº 9.294/96.
          </p>
          <div className="flex gap-6">
            {["Política de privacidade", "Termos de uso"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px]"
                style={{ color: "rgba(245,237,224,0.3)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
