import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "white", borderTop: "0.5px solid rgba(184,148,90,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Image src="/logo.jpeg" alt="MM Wine" width={100} height={100} className="mb-4" />
            <p className="text-[12px] leading-relaxed max-w-xs" style={{ color: "#8a6a48" }}>
              Curadoria exclusiva de vinhos selecionados por sommelier certificado.
              Entregamos experiências, não apenas garrafas.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[9px] tracking-[0.2em] uppercase pb-0.5 transition-colors"
                  style={{
                    color: "#8a6a48",
                    borderBottom: "0.5px solid rgba(138,106,72,0.3)",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[9px] tracking-[0.25em] uppercase mb-6" style={{ color: "#b8945a" }}>
              Navegação
            </div>
            <ul className="space-y-3">
              {["Coleções", "Vinho do Mês", "Clube de Assinatura", "Sobre nós", "Contato"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-[12px] transition-colors" style={{ color: "#8a6a48" }}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div className="text-[9px] tracking-[0.25em] uppercase mb-6" style={{ color: "#b8945a" }}>
              Newsletter
            </div>
            <p className="text-[11px] mb-4 leading-relaxed" style={{ color: "#8a6a48" }}>
              Receba as notas do sommelier e novidades antes de todos.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="text-[11px] px-4 py-3 outline-none"
                style={{
                  backgroundColor: "#f5ede0",
                  border: "0.5px solid rgba(184,148,90,0.25)",
                  color: "#2a1a0e",
                }}
              />
              <button
                className="text-[9px] tracking-[0.25em] uppercase py-3 transition-colors"
                style={{ backgroundColor: "#2a1a0e", color: "#f5ede0" }}
              >
                Quero receber
              </button>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "0.5px solid rgba(184,148,90,0.15)" }}
        >
          <p className="text-[10px]" style={{ color: "rgba(138,106,72,0.6)" }}>
            © {new Date().getFullYear()} MM Wine. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-center" style={{ color: "rgba(138,106,72,0.6)" }}>
            Beba com moderação. Venda proibida para menores de 18 anos. Lei nº 9.294/96.
          </p>
          <div className="flex gap-6">
            {["Política de privacidade", "Termos de uso"].map((item) => (
              <a key={item} href="#" className="text-[10px] transition-colors" style={{ color: "rgba(138,106,72,0.6)" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
