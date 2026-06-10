const cards = [
  {
    icon: "✦",
    title: "Curadoria Especializada",
    text: "Selecionamos apenas vinhos que realmente merecem estar na sua mesa. Cada rótulo é escolhido com critério e paixão.",
  },
  {
    icon: "🌍",
    title: "Seleção Internacional",
    text: "Rótulos de diferentes países e terroirs, desde clássicos consagrados até descobertas surpreendentes.",
  },
  {
    icon: "✦",
    title: "Experiência Premium",
    text: "Da escolha à entrega, cada detalhe importa. Queremos que você sinta a diferença antes mesmo de abrir a garrafa.",
  },
  {
    icon: "📦",
    title: "Entrega com Elegância",
    text: "Embalagem premium, proteção térmica e apresentação impecável. O unboxing é parte da experiência.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
            <span
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{ color: "#b8945a" }}
            >
              Nossa proposta
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
          </div>
          <h2
            className="text-4xl font-light"
            style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
          >
            Por que escolher a MM Wine?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: "rgba(184,148,90,0.15)" }}>
          {cards.map(({ title, text }) => (
            <div
              key={title}
              className="p-8 group hover:bg-cream-50 transition-colors"
              style={{ backgroundColor: "white" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#fdf9f4")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <div
                className="w-8 h-px mb-8"
                style={{ backgroundColor: "#b8945a" }}
              />
              <h3
                className="text-xl font-light mb-4"
                style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
              >
                {title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "#8a6a48" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
