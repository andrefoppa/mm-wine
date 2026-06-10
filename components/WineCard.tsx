"use client";

import { useState } from "react";
import type { Wine } from "@/data/wines";

const FALLBACK = "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&q=80";

const badgeStyles: Record<string, { bg: string; color: string }> = {
  Sommelier: { bg: "#b8945a", color: "white" },
  Destaque: { bg: "#2a1a0e", color: "#f5ede0" },
  Novo: { bg: "white", color: "#b8945a" },
  Exclusivo: { bg: "#6b1a2a", color: "white" },
};

export default function WineCard({ wine }: { wine: Wine }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const badge = wine.badge ? badgeStyles[wine.badge] : null;

  return (
    <div
      className="group transition-all duration-300"
      style={{
        backgroundColor: "white",
        border: "0.5px solid rgba(184,148,90,0.2)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.border = "0.5px solid rgba(184,148,90,0.6)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.border = "0.5px solid rgba(184,148,90,0.2)")
      }
    >
      <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: "#f5ede0" }}>
        <img
          src={wine.image}
          alt={`${wine.producer} ${wine.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = FALLBACK;
          }}
        />
        {badge && (
          <span
            className="absolute top-3 left-3 text-[8px] tracking-[0.15em] uppercase px-2.5 py-1"
            style={{
              backgroundColor: badge.bg,
              color: badge.color,
              border: wine.badge === "Novo" ? "0.5px solid #b8945a" : "none",
            }}
          >
            {wine.badge}
          </span>
        )}
        <div
          className="absolute top-3 right-3 text-[9px] font-medium px-2 py-1"
          style={{
            backgroundColor: "rgba(255,255,255,0.92)",
            color: "#2a1a0e",
            border: "0.5px solid rgba(184,148,90,0.2)",
          }}
        >
          {wine.score} pts
        </div>
      </div>

      <div className="p-5">
        <div className="text-[8px] tracking-[0.25em] uppercase mb-1.5" style={{ color: "#8a6a48" }}>
          {wine.region} · {wine.country}
        </div>
        <h3
          className="text-xl font-light leading-tight"
          style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
        >
          {wine.producer}
        </h3>
        <p
          className="text-base italic"
          style={{ fontFamily: "var(--font-serif)", color: "#b8945a" }}
        >
          {wine.name}
        </p>
        <p className="text-[10px] mt-1 mb-4" style={{ color: "rgba(138,106,72,0.7)" }}>
          {wine.grape} · {wine.vintage}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {wine.notes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="text-[9px] px-2 py-0.5"
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

        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "0.5px solid rgba(184,148,90,0.12)" }}
        >
          <div>
            <div
              className="text-2xl font-light"
              style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
            >
              R$ {wine.price.toLocaleString("pt-BR")}
            </div>
            <div className="text-[9px]" style={{ color: "#8a6a48" }}>
              por garrafa
            </div>
          </div>
          <button
            onClick={handleAdd}
            className="text-[9px] tracking-[0.15em] uppercase px-4 py-2.5 transition-all"
            style={
              added
                ? {
                    backgroundColor: "rgba(184,148,90,0.1)",
                    color: "#b8945a",
                    border: "0.5px solid #b8945a",
                  }
                : {
                    backgroundColor: "#2a1a0e",
                    color: "#f5ede0",
                    border: "0.5px solid #2a1a0e",
                  }
            }
          >
            {added ? "✓ Adicionado" : "Adicionar"}
          </button>
        </div>
      </div>
    </div>
  );
}
