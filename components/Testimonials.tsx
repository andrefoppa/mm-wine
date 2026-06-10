const reviews = [
  {
    text: "Recebi minha primeira caixa do clube e me surpreendi completamente. Os vinhos são incríveis e a carta da Malu é um charme à parte.",
    name: "Fernanda R.",
    city: "São Paulo, SP",
  },
  {
    text: "Comprei de presente para o meu marido e ele adorou. A embalagem é lindíssima e os vinhos são de outro nível.",
    name: "Carolina M.",
    city: "Rio de Janeiro, RJ",
  },
  {
    text: "Já sou assinante há 6 meses. Cada mês é uma descoberta nova. Jamais escolheria esses vinhos sozinho.",
    name: "Ricardo A.",
    city: "Belo Horizonte, MG",
  },
  {
    text: "O que me conquistou foi a curadoria. Não é uma loja qualquer — percebe-se que cada garrafa foi escolhida com cuidado.",
    name: "Beatriz L.",
    city: "Curitiba, PR",
  },
  {
    text: "Presenteei minha sócia com uma caixa premium e ela ficou encantada. Embalagem impecável, vinho extraordinário.",
    name: "Marcos T.",
    city: "Porto Alegre, RS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
            <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: "#b8945a" }}>
              Depoimentos
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
          </div>
          <h2
            className="text-4xl font-light"
            style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
          >
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-8"
              style={{
                backgroundColor: i % 2 === 0 ? "#f5ede0" : "white",
                border: "0.5px solid rgba(184,148,90,0.15)",
              }}
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-sm" style={{ color: "#b8945a" }}>★</span>
                ))}
              </div>
              <p
                className="text-[14px] leading-relaxed italic mb-6"
                style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ borderTop: "0.5px solid rgba(184,148,90,0.2)", paddingTop: "16px" }}>
                <div className="text-[12px] font-medium" style={{ color: "#2a1a0e" }}>
                  {r.name}
                </div>
                <div className="text-[10px] mt-0.5" style={{ color: "#8a6a48" }}>
                  {r.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
