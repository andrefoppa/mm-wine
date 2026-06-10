export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24" style={{ backgroundColor: "#f5ede0" }}>
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px" style={{ backgroundColor: "#b8945a" }} />
              <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "#b8945a" }}>
                Curadoria Exclusiva
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl font-light leading-tight mb-6 italic"
              style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
            >
              Vinhos que
              <br />
              <span style={{ color: "#b8945a" }}>contam histórias.</span>
            </h1>

            <p className="text-[13px] leading-relaxed max-w-md mb-10" style={{ color: "#8a6a48" }}>
              Cada garrafa selecionada pessoalmente pelo nosso enólogo certificado.
              Rótulos raros, produtores independentes e safras únicas, entregues
              na sua porta com elegância.
            </p>

            <div className="flex flex-row gap-3 mb-12">
              <a
                href="#colecoes"
                className="text-[10px] tracking-[0.25em] uppercase px-8 py-4 transition-colors inline-block"
                style={{ backgroundColor: "#2a1a0e", color: "#f5ede0" }}
              >
                Explorar Coleção
              </a>
              <a
                href="#clube"
                className="text-[10px] tracking-[0.25em] uppercase px-8 py-4 border transition-colors inline-block"
                style={{ borderColor: "rgba(42,26,14,0.3)", color: "#2a1a0e" }}
              >
                Conhecer o Clube
              </a>
            </div>

            <div
              className="grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: "0.5px solid rgba(184,148,90,0.2)" }}
            >
              {[
                { num: "+200", label: "Rótulos selecionados" },
                { num: "12", label: "Países representados" },
                { num: "100%", label: "Curadoria enólogo" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="text-3xl font-light mb-1"
                    style={{ fontFamily: "var(--font-serif)", color: "#b8945a" }}
                  >
                    {num}
                  </div>
                  <div className="text-[9px] tracking-[0.15em] uppercase" style={{ color: "#8a6a48" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-end">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[3/4] overflow-hidden" style={{ backgroundColor: "#ede3d4" }}>
                <img
                  src="https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=700&q=90"
                  alt="Taça de cristal MM Wine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 px-6 py-4"
                style={{
                  backgroundColor: "white",
                  border: "0.5px solid rgba(184,148,90,0.2)",
                }}
              >
                <div className="text-[8px] tracking-[0.25em] uppercase mb-1" style={{ color: "#b8945a" }}>
                  Vinho do Mês
                </div>
                <div
                  className="text-lg font-light"
                  style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
                >
                  Achaval Ferrer Quimera
                </div>
                <div className="text-[10px] mt-0.5" style={{ color: "#8a6a48" }}>
                  Mendoza · 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
