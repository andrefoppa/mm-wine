"use client";

import { useState } from "react";
import { wines } from "@/data/wines";
import WineCard from "./WineCard";

const categories = ["todos", "tinto", "branco", "espumante", "rosé"] as const;
type Cat = (typeof categories)[number];

export default function WineCollection() {
  const [active, setActive] = useState<Cat>("todos");

  const filtered = active === "todos" ? wines : wines.filter((w) => w.category === active);

  return (
    <section id="colecoes" className="py-24" style={{ backgroundColor: "#f5ede0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "#b8945a" }}>
                Coleção Atual
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(184,148,90,0.2)" }} />
            </div>
            <h2
              className="text-4xl font-light"
              style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
            >
              Seleção da temporada
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-[9px] tracking-[0.2em] uppercase px-4 py-2 border transition-all"
                style={
                  active === cat
                    ? { backgroundColor: "#2a1a0e", color: "#f5ede0", borderColor: "#2a1a0e" }
                    : {
                        backgroundColor: "transparent",
                        color: "#8a6a48",
                        borderColor: "rgba(184,148,90,0.3)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </div>
    </section>
  );
}
