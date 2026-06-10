import { wines } from "@/data/wines";

const FALLBACK = "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&q=80";

export default function FeaturedWine() {
  const wine = wines[0];

  return (
    <section className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px" style={{ backgroundColor: "#b8945a" }} />
          <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "#b8945a" }}>
            Vinho do Mês
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(184,148,90,0.2)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="w-64 h-96 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "#f5ede0" }}
              >
                <img
                  src={wine.image}
                  alt={`${wine.producer} ${wine.name}`}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK;
                  }}
                />
              </div>
              <div
                className="absolute -right-8 top-8 w-16 h-16 flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: "#b8945a", color: "white" }}
              >
                <div
                  className="text-xl font-light"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {wine.score}
                </div>
                <div className="text-[7px] tracking-wide">PTS</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[9px] tracking-[0.25em] uppercase mb-3" style={{ color: "#8a6a48" }}>
              {wine.region} · {wine.country} · {wine.vintage}
            </div>
            <h2
              className="text-4xl font-light mb-1"
              style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
            >
              {wine.producer}
            </h2>
            <p
              className="text-2xl italic mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#b8945a" }}
            >
              {wine.name}
            </p>

            <p
              className="text-[13px] leading-relaxed mb-8 italic pl-4"
              style={{
                color: "#8a6a48",
                borderLeft: "2px solid #b8945a",
              }}
            >
              &ldquo;{wine.sommelierNote}&rdquo;
              <span
                className="block mt-2 text-[9px] tracking-widest not-italic uppercase"
                style={{ color: "#b8945a" }}
              >
                Nota do Enólogo
              </span>
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {wine.notes.map((note) => (
                <span
                  key={note}
                  className="text-[10px] px-3 py-1"
                  style={{
                    color: "#8a6a48",
                    border: "0.5px solid rgba(184,148,90,0.25)",
                    backgroundColor: "#f5ede0",
                  }}
                >
                  {note}
                </span>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {[
                { label: "Corpo", value: wine.body },
                { label: "Taninos", value: wine.tannins },
                { label: "Acidez", value: wine.acidity },
                { label: "Final", value: wine.finish },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <span
                    className="text-[9px] tracking-widest uppercase w-14"
                    style={{ color: "#8a6a48" }}
                  >
                    {label}
                  </span>
                  <div className="flex-1 h-0.5" style={{ backgroundColor: "rgba(184,148,90,0.15)" }}>
                    <div
                      className="h-full"
                      style={{ width: `${value}%`, backgroundColor: "#b8945a" }}
                    />
                  </div>
                  <span
                    className="text-[9px] w-7 text-right"
                    style={{ color: "#8a6a48" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-4 pt-6"
              style={{ borderTop: "0.5px solid rgba(184,148,90,0.2)" }}
            >
              <div>
                <div
                  className="text-3xl font-light"
                  style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
                >
                  R$ {wine.price.toLocaleString("pt-BR")}
                </div>
                <div className="text-[9px]" style={{ color: "#8a6a48" }}>
                  por garrafa
                </div>
              </div>
              <button
                className="flex-1 text-[10px] tracking-[0.25em] uppercase py-4 transition-colors"
                style={{ backgroundColor: "#2a1a0e", color: "#f5ede0" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3d2812")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2a1a0e")}
              >
                Adicionar à Sacola
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
