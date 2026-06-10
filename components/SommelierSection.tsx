export default function SommelierSection() {
  return (
    <section id="sommelier" className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "#b8945a" }}>
                Curadoria Especializada
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(184,148,90,0.2)" }} />
            </div>

            <h2
              className="text-4xl font-light mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
            >
              Cada escolha,
              <br />
              <em className="italic" style={{ color: "#b8945a" }}>
                uma garantia.
              </em>
            </h2>

            <p className="text-[13px] leading-relaxed mb-6" style={{ color: "#8a6a48" }}>
              Nossa curadoria é conduzida por sommelier com certificação internacional
              WSET Level 3. Cada rótulo passa por avaliação de terroir, safra, produtor
              e potencial de harmonização antes de chegar até você.
            </p>

            <p className="text-[13px] leading-relaxed mb-10" style={{ color: "#8a6a48" }}>
              Não vendemos volume — vendemos experiência. O catálogo é pequeno,
              criterioso e atualizado a cada temporada.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏅", title: "WSET Level 3", sub: "Certificação internacional" },
                { icon: "🍷", title: "+500 degustações", sub: "Por ano, em visitas a vinícolas" },
                { icon: "🌍", title: "12 países", sub: "Curadoria in loco" },
                { icon: "📦", title: "Embalagem premium", sub: "Isolamento térmico garantido" },
              ].map(({ icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4"
                  style={{
                    backgroundColor: "#f5ede0",
                    border: "0.5px solid rgba(184,148,90,0.15)",
                  }}
                >
                  <span className="text-xl mt-0.5">{icon}</span>
                  <div>
                    <div className="text-[11px] font-medium" style={{ color: "#2a1a0e" }}>
                      {title}
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: "#8a6a48" }}>
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video overflow-hidden" style={{ backgroundColor: "#f5ede0" }}>
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=700&q=85"
                alt="Sommelier avaliando vinhos"
                className="w-full h-full object-cover"
              />
            </div>

            <blockquote
              className="pl-5 py-4 pr-4"
              style={{
                borderLeft: "2px solid #b8945a",
                backgroundColor: "#f5ede0",
              }}
            >
              <p
                className="text-lg font-light italic leading-relaxed"
                style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
              >
                &ldquo;Um vinho não é apenas uma bebida — é uma narrativa de solo,
                clima e dedicação humana. Minha missão é traduzir isso para a
                sua taça.&rdquo;
              </p>
              <cite className="block mt-3 text-[9px] tracking-[0.2em] not-italic uppercase" style={{ color: "#b8945a" }}>
                — Sommelier MM Wine · WSET Level 3
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
