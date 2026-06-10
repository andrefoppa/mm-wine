const plans = [
  {
    tag: "Essencial",
    name: "Essencial",
    price: "149,90",
    bottles: "4 vinhos selecionados",
    features: [
      "Curadoria MM Wine",
      "Carta com história dos vinhos",
      "Frete grátis",
      "Benefícios exclusivos",
    ],
    featured: false,
    cta: "Assinar",
  },
  {
    tag: "Mais Popular",
    name: "Seleção",
    price: "199,90",
    bottles: "4 vinhos premiados",
    features: [
      "Vinhos mais premiados",
      "Curadoria avançada",
      "Carta da Malu",
      "10% de desconto na loja",
      "Frete grátis",
    ],
    featured: true,
    cta: "Assinar",
  },
  {
    tag: "Premium",
    name: "Reserva",
    price: "299,90",
    bottles: "4 rótulos premium",
    features: [
      "Rótulos premium e raros",
      "Edições especiais",
      "Acesso prioritário",
      "15% de desconto na loja",
      "Frete expresso grátis",
      "Convite para eventos",
    ],
    featured: false,
    cta: "Assinar",
  },
];

export default function ClubSection() {
  return (
    <section id="clube" className="py-24" style={{ backgroundColor: "#f5ede0" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[9px] tracking-[0.4em] uppercase"
                style={{ color: "#b8945a" }}
              >
                Assinatura Mensal
              </span>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "rgba(184,148,90,0.25)" }}
              />
            </div>
            <h2
              className="text-5xl font-light mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
            >
              Clube MM Wine
            </h2>
            <p
              className="text-[15px] leading-relaxed mb-8 max-w-md"
              style={{ color: "#8a6a48" }}
            >
              Receba 4 vinhos selecionados todos os meses. Sem complicação,
              sem surpresas. Só bons momentos ao redor da mesa.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Cancele quando quiser, sem burocracia",
                "Embalagem premium com proteção térmica",
                "Carta mensal com história de cada rótulo",
                "Desconto exclusivo na loja para assinantes",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#b8945a" }}
                  />
                  <span className="text-[13px]" style={{ color: "#8a6a48" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="aspect-[4/3] overflow-hidden"
            style={{ backgroundColor: "#ede3d4" }}
          >
            <img
              src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=700&q=90"
              alt="Momentos MM Wine"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8"
              style={
                plan.featured
                  ? { backgroundColor: "#2a1a0e", border: "1.5px solid #2a1a0e" }
                  : { backgroundColor: "white", border: "0.5px solid rgba(184,148,90,0.2)" }
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
                  className="text-[9px] tracking-[0.25em] uppercase mb-4"
                  style={{ color: "#8a6a48" }}
                >
                  {plan.tag}
                </div>
              )}

              {plan.featured && (
                <div
                  className="text-[9px] tracking-[0.25em] uppercase mb-4"
                  style={{ color: "rgba(184,148,90,0.7)" }}
                >
                  {plan.tag}
                </div>
              )}

              <div
                className="text-2xl font-light mb-2"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: plan.featured ? "#f5ede0" : "#2a1a0e",
                }}
              >
                {plan.name}
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="text-[11px]"
                  style={{ color: plan.featured ? "rgba(245,237,224,0.6)" : "#8a6a48" }}
                >
                  R$
                </span>
                <span
                  className="text-4xl font-light"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: plan.featured ? "#f5ede0" : "#2a1a0e",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-[11px]"
                  style={{ color: plan.featured ? "rgba(245,237,224,0.6)" : "#8a6a48" }}
                >
                  /mês
                </span>
              </div>

              <div
                className="text-[10px] tracking-wide mb-6 pb-5"
                style={{
                  color: plan.featured ? "#b8945a" : "#b8945a",
                  borderBottom: plan.featured
                    ? "0.5px solid rgba(184,148,90,0.2)"
                    : "0.5px solid rgba(184,148,90,0.2)",
                }}
              >
                {plan.bottles}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[12px]"
                    style={{
                      color: plan.featured ? "rgba(245,237,224,0.75)" : "#8a6a48",
                    }}
                  >
                    <span
                      className="mt-1 flex-shrink-0 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "#b8945a", display: "inline-block" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="w-full text-[10px] tracking-[0.25em] uppercase py-4 transition-all"
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
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
