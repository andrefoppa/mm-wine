export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "#f5ede0" }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px" style={{ backgroundColor: "#b8945a" }} />
              <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: "#b8945a" }}>
                Curadoria Premium de Vinhos
              </span>
            </div>

            <h1
              className="font-light leading-[1.1] mb-8"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#2a1a0e",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              }}
            >
              <em className="italic" style={{ color: "#b8945a" }}>
                Nós escolhemos
                <br />
                os vinhos.
              </em>
              <br />
              <span style={{ color: "#2a1a0e" }}>Você cria</span>
              <br />
              <span style={{ color: "#2a1a0e" }}>os momentos.</span>
            </h1>

            <p
              className="text-[15px] leading-relaxed mb-10 max-w-md"
              style={{ color: "#8a6a48" }}
            >
              Descubra rótulos cuidadosamente selecionados para transformar
              encontros, celebrações e experiências em memórias inesquecíveis.
            </p>

            <div className="flex flex-row gap-3">
              <a
                href="#clube"
                className="text-[11px] tracking-[0.25em] uppercase px-7 py-4 transition-colors"
                style={{ backgroundColor: "#b8945a", color: "white" }}
              >
                Conhecer o Clube
              </a>
              <a
                href="#colecoes"
                className="text-[11px] tracking-[0.25em] uppercase px-7 py-4 border transition-colors"
                style={{ borderColor: "rgba(42,26,14,0.35)", color: "#2a1a0e" }}
              >
                Comprar Vinhos
              </a>
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="relative w-full max-w-lg">
              <div
                className="aspect-[4/5] overflow-hidden"
                style={{ backgroundColor: "#ede3d4" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=800&q=90"
                  alt="Taça de cristal MM Wine"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute -bottom-5 -left-5 px-6 py-5 max-w-xs"
                style={{
                  backgroundColor: "white",
                  border: "0.5px solid rgba(184,148,90,0.2)",
                }}
              >
                <div
                  className="text-[8px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: "#b8945a" }}
                >
                  Clube MM Wine
                </div>
                <div
                  className="text-base font-light mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
                >
                  4 vinhos selecionados
                </div>
                <div className="text-[11px]" style={{ color: "#8a6a48" }}>
                  todo mês, na sua porta
                </div>
                <div
                  className="mt-3 text-[9px] tracking-[0.2em] uppercase"
                  style={{ color: "#b8945a" }}
                >
                  a partir de R$ 149,90
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20 border-t border-b"
          style={{ borderColor: "rgba(184,148,90,0.2)" }}
        >
          {[
            { num: "+200", label: "Rótulos disponíveis" },
            { num: "12", label: "Países representados" },
            { num: "+2.000", label: "Assinantes satisfeitos" },
            { num: "100%", label: "Curadoria especializada" },
          ].map(({ num, label }, i) => (
            <div
              key={label}
              className="py-8 px-6 text-center"
              style={{
                borderRight: i < 3 ? "0.5px solid rgba(184,148,90,0.2)" : "none",
              }}
            >
              <div
                className="text-3xl font-light mb-2"
                style={{ fontFamily: "var(--font-serif)", color: "#b8945a" }}
              >
                {num}
              </div>
              <div
                className="text-[9px] tracking-[0.15em] uppercase"
                style={{ color: "#8a6a48" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
