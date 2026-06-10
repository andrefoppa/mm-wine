const momentos = [
  { emoji: "🍖", label: "Para Churrasco", slug: "churrasco", color: "#8a6a48" },
  { emoji: "❤️", label: "Jantar Romântico", slug: "romantico", color: "#b8945a" },
  { emoji: "🎁", label: "Para Presentear", slug: "presente", color: "#8a6a48" },
  { emoji: "🥂", label: "Celebrações", slug: "celebracao", color: "#b8945a" },
  { emoji: "🏠", label: "Dia a Dia", slug: "diaadia", color: "#8a6a48" },
  { emoji: "👔", label: "Corporativo", slug: "corporativo", color: "#b8945a" },
];

export default function MomentoSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#f5ede0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
            <span
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{ color: "#b8945a" }}
            >
              Comprar por Ocasião
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
          </div>
          <h2
            className="text-4xl font-light"
            style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
          >
            Encontre o vinho ideal.
          </h2>
          <p className="mt-4 text-[13px]" style={{ color: "#8a6a48" }}>
            Cada momento pede um vinho. Nós já escolhemos para você.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {momentos.map(({ emoji, label, slug }) => (
            <button
              key={slug}
              className="group flex flex-col items-center gap-4 py-8 px-4 transition-all"
              style={{
                backgroundColor: "white",
                border: "0.5px solid rgba(184,148,90,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2a1a0e";
                e.currentTarget.querySelectorAll("[data-label]").forEach(
                  (el) => ((el as HTMLElement).style.color = "#f5ede0")
                );
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.querySelectorAll("[data-label]").forEach(
                  (el) => ((el as HTMLElement).style.color = "#8a6a48")
                );
              }}
            >
              <span className="text-3xl">{emoji}</span>
              <span
                data-label="true"
                className="text-[11px] tracking-wide text-center transition-colors"
                style={{ color: "#8a6a48" }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
