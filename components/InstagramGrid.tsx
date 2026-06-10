const photos = [
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=85",
    alt: "Momento especial",
  },
  {
    src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&q=85",
    alt: "Taça de vinho",
  },
  {
    src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&q=85",
    alt: "Jantar elegante",
  },
  {
    src: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=85",
    alt: "Vinho tinto",
  },
  {
    src: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400&q=85",
    alt: "Adega",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=85",
    alt: "Vinho branco",
  },
];

export default function InstagramGrid() {
  return (
    <section className="py-24" style={{ backgroundColor: "#f5ede0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
            <span className="text-[9px] tracking-[0.4em] uppercase" style={{ color: "#b8945a" }}>
              @mmwine
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "rgba(184,148,90,0.4)" }} />
          </div>
          <h2
            className="text-4xl font-light"
            style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
          >
            Momentos MM Wine
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {photos.map(({ src, alt }) => (
            <div
              key={src}
              className="group aspect-square overflow-hidden cursor-pointer"
              style={{ backgroundColor: "#ede3d4" }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 group-hover:opacity-90"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="text-[10px] tracking-[0.3em] uppercase pb-0.5 transition-colors"
            style={{
              color: "#8a6a48",
              borderBottom: "0.5px solid rgba(138,106,72,0.4)",
            }}
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
