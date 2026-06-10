"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(245,237,224,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(184,148,90,0.2)" : "none",
        paddingTop: scrolled ? "10px" : "20px",
        paddingBottom: scrolled ? "10px" : "20px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Image src="/Logo 2.png" alt="MM Wine" width={70} height={70} className="object-contain" />

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Coleções", href: "#colecoes" },
            { label: "Enólogo", href: "#enólogo" },
            { label: "Clube", href: "#clube" },
            { label: "Sobre", href: "#sobre" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[10px] tracking-[0.25em] uppercase transition-colors"
              style={{ color: "#8a6a48" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#b8945a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a6a48")}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all"
          style={{ borderColor: "rgba(42,26,14,0.3)", color: "#2a1a0e" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2a1a0e";
            e.currentTarget.style.color = "#f5ede0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#2a1a0e";
          }}
        >
          Sacola (0)
        </button>
      </div>
    </nav>
  );
}
