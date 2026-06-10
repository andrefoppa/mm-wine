const plans = [
  {
    tag: "Essencial",
    name: "Duo",
    price: "199",
    bottles: "2 garrafas / mês",
    features: ["Carta mensal do sommelier", "Frete grátis", "Acesso à loja online"],
    featured: false,
  },
  {
    tag: "Mais Popular",
    name: "Quarteto",
    price: "369",
    bottles: "4 garrafas / mês",
    features: [
      "Nota de degustação individual",
      "10% de desconto na loja",
      "Frete grátis",
      "Acesso antecipado a lançamentos",
    ],
    featured: true,
  },
  {
    tag: "Premium",
    name: "Colecionador",
    price: "689",
    bottles: "6 garrafas — seleção rara",
    features: [
      "Consultoria exclusiva",
      "Vinhos de edição limitada",
      "15% de desconto na loja",
      "Frete expresso grátis",
      "Convite para eventos",
    ],
    featured: false,
  },
];

export default function ClubSection() {
  return (
    <section id="clube" className="py-24" style={{ backgroundColor: "#f5ede0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-16" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
            <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "#b8945a" }}>
              Assinatura
            </span>
            <div className="h-px w-16" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
          </div>
          <h2
            className="text-4xl font-light mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
          >
            Clube MM Wine
          </h2>
          <p className="text-[13px] max-w-md mx-auto leading-relaxed" style={{ color: "#8a6a48" }}>
            Receba vinhos selecionados todo mês com desconto exclusivo,
            carta do sommelier e embalagem premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8 transition-all"
              style={
                plan.featured
                  ? { backgroundColor: "white", border: "1.5px solid #b8945a" }
                  : {
                      backgroundColor: "white",
                      border: "0.5px solid rgba(184,148,90,0.2)",
                    }
              }
            >
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.2em] uppercase px-4 py-1"
                  style={{ backgroundColor: "#b8945a", color: "white" }}
                >
                  {plan.tag}
                </div>
              )}

              {!plan.featured && (
                <div
                  className="text-[9px] tracking-[0.2em] uppercase mb-3"
                  style={{ color: "#8a6a48" }}
                >
                  {plan.tag}
                </div>
              )}

              <div
                className="text-2xl font-light mb-1"
                style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
              >
                {plan.name}
              </div>

              <div className="flex items-baseline gap-1 my-4">
                <span
                  className="text-4xl font-light"
                  style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
                >
                  R$ {plan.price}
                </span>
                <span className="text-[11px]" style={{ color: "#8a6a48" }}>
                  /mês
                </span>
              </div>

              <div
                className="text-[10px] tracking-wide mb-6 pb-6"
                style={{
                  color: "#b8945a",
                  borderBottom: "0.5px solid rgba(184,148,90,0.15)",
                }}
              >
                {plan.bottles}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[11px]" style={{ color: "#8a6a48" }}>
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "#b8945a" }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="w-full text-[10px] tracking-[0.2em] uppercase py-3.5 transition-all"
                style={
                  plan.featured
                    ? { backgroundColor: "#b8945a", color: "white" }
                    : {
                        backgroundColor: "transparent",
                        color: "#2a1a0e",
                        border: "0.5px solid rgba(42,26,14,0.3)",
                      }
                }
              >
                Assinar agora
              </button>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8"
          style={{ backgroundColor: "white", border: "0.5px solid rgba(184,148,90,0.15)" }}
        >
          {[
            { icon: "📦", title: "Frete grátis", text: "Embalagem térmica premium para qualquer estado do Brasil" },
            { icon: "🔄", title: "Cancele quando quiser", text: "Sem fidelidade. Pause, altere ou cancele a qualquer momento" },
            { icon: "🎁", title: "Presente especial", text: "Assine como presente — enviamos cartão personalizado do sommelier" },
          ].map(({ icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="text-2xl mt-0.5">{icon}</span>
              <div>
                <div className="text-[11px] font-medium mb-1" style={{ color: "#2a1a0e" }}>
                  {title}
                </div>
                <div className="text-[11px] leading-relaxed" style={{ color: "#8a6a48" }}>
                  {text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
