"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AgeGate({ onConfirm }: { onConfirm: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const confirmed = sessionStorage.getItem("mm-age-confirmed");
    if (confirmed) {
      onConfirm();
    } else {
      setVisible(true);
    }
  }, [onConfirm]);

  const handleYes = () => {
    sessionStorage.setItem("mm-age-confirmed", "true");
    setVisible(false);
    onConfirm();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "#f5ede0" }}>
      <div className="flex flex-col items-center text-center px-8 max-w-md w-full">
        <div className="mb-6">
          <Image
            src="/logo.jpeg"
            alt="MM Wine"
            width={200}
            height={200}
            priority
            className="mx-auto"
          />
        </div>

        <div className="flex items-center gap-4 mb-8 w-full">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(184,148,90,0.3)" }} />
          <p className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "#8a6a48" }}>
            Bons Vinhos, Bons Momentos.
          </p>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(184,148,90,0.3)" }} />
        </div>

        <p className="text-[11px] tracking-[0.25em] mb-8 uppercase" style={{ color: "#8a6a48" }}>
          Você tem 18 anos ou mais?
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleYes}
            className="text-[10px] tracking-[0.25em] uppercase px-8 py-3 transition-colors"
            style={{ backgroundColor: "#2a1a0e", color: "#f5ede0" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3d2812")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2a1a0e")}
          >
            Sim, tenho 18+
          </button>
          <button
            className="text-[10px] tracking-[0.25em] uppercase px-8 py-3 border transition-colors"
            style={{ borderColor: "rgba(138,106,72,0.4)", color: "#8a6a48" }}
          >
            Não
          </button>
        </div>

        <p className="mt-8 text-[10px] leading-relaxed max-w-sm" style={{ color: "rgba(138,106,72,0.6)" }}>
          Ao entrar, você confirma que tem idade legal para consumo de bebidas alcoólicas.
          Beba com moderação.
        </p>
      </div>
    </div>
  );
}
