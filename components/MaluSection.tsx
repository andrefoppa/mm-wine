"use client";

import { useState } from "react";
import { wines } from "@/data/wines";
import Image from "next/image";

export default function MaluSection() {
  const [added, setAdded] = useState<number | null>(null);
  const maluWines = wines.filter((w) => w.maluPick);

  const handleAdd = (id: number) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 2000);
  };

  return (
    <section id="selecao" className="py-24" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[9px] tracking-[0.4em] uppercase"
                style={{ color: "#b8945a" }}
              >
                Curadoria Pessoal
              </span>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "rgba(184,148,90,0.25)" }}
              />
            </div>

            <h2
              className="text-5xl font-light mb-4"
              style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
            >
              A Seleção da Malu
            </h2>

            <p
              className="text-xl italic font-light mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "#b8945a" }}
            >
              Os vinhos que eu escolheria para a minha própria mesa.
            </p>

            <p
              className="text-[14px] leading-relaxed mb-6 max-w-md"
              style={{ color: "#8a6a48" }}
            >
              Meu objetivo é tornar o vinho mais simples, prazeroso e acessível.
              Todos os meses selecionamos rótulos que realmente entregam
              qualidade, história e momentos especiais — sem complicação.
            </p>

            <p
              className="text-[14px] leading-relaxed mb-8 max-w-md"
              style={{ color: "#8a6a48" }}
            >
              Não é preciso entender de vinho para apreciá-lo.
              É preciso apenas estar presente no momento.
            </p>

            <div
              className="flex items-center gap-4 pt-6"
              style={{ borderTop: "0.5px solid rgba(184,148,90,0.2)" }}
            >
              <div
                className="text-base italic font-light"
                style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
              >
                Malu
              </div>
              <div className="w-12 h-px" style={{ backgroundColor: "#b8945a" }} />
              <div className="text-[10px] tracking-widest uppercase" style={{ color: "#8a6a48" }}>
                Fundadora MM Wine
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                className="w-72 h-96 overflow-hidden"
                style={{ backgroundColor: "#f5ede0" }}
              >
                <Image
                  src="/malu.jpeg"
                  alt="Malu — Fundadora MM Wine"
                  width={288}
                  height={384}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 px-4 py-3"
                style={{
                  backgroundColor: "#b8945a",
                  color: "white",
                }}
              >
                <div className="text-[8px] tracking-[0.2em] uppercase opacity-75 mb-1">
                  Fundadora
                </div>
                <div
                  className="text-base font-light italic"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Malu
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {maluWines.map((wine) => (
            <div
              key={wine.id}
              className="group"
              style={{
                border: "0.5px solid rgba(184,148,90,0.15)",
                backgroundColor: "#fdf9f4",
              }}
            >
              <div
                className="aspect-square overflow-hidden"
                style={{ backgroundColor: "#f5ede0" }}
              >
                <img
                  src={wine.image}
                  alt={`${wine.producer} ${wine.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=300&q=80";
                  }}
                />
              </div>
              <div className="p-3">
                <div
                  className="text-[7px] tracking-[0.2em] uppercase mb-1"
                  style={{ color: "#b8945a" }}
                >
                  {wine.country}
                </div>
                <div
                  className="text-sm font-light leading-tight mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "#2a1a0e" }}
                >
                  {wine.producer}
                </div>
                <div
                  className="text-xs italic mb-3"
                  style={{ fontFamily: "var(--font-serif)", color: "#8a6a48" }}
                >
                  {wine.name}
                </div>
                <div
                  className="text-sm font-light mb-3"
                  style={{ color: "#2a1a0e", fontFamily: "var(--font-serif)" }}
                >
                  R$ {wine.price.toLocaleString("pt-BR")}
                </div>
                <button
                  onClick={() => handleAdd(wine.id)}
                  className="w-full text-[8px] tracking-[0.15em] uppercase py-2 transition-all"
                  style={
                    added === wine.id
                      ? { backgroundColor: "#b8945a", color: "white" }
                      : {
                          backgroundColor: "transparent",
                          color: "#2a1a0e",
                          border: "0.5px solid rgba(42,26,14,0.25)",
                        }
                  }
                >
                  {added === wine.id ? "✓ Ok!" : "Comprar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
