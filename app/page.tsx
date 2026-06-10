"use client";

import { useState } from "react";
import AgeGate from "@/components/AgeGate";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SommelierSection from "@/components/SommelierSection";
import FeaturedWine from "@/components/FeaturedWine";
import WineCollection from "@/components/WineCollection";
import ClubSection from "@/components/ClubSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <AgeGate onConfirm={() => setConfirmed(true)} />
      {confirmed && (
        <main>
          <Navbar />
          <Hero />
          <SommelierSection />
          <FeaturedWine />
          <WineCollection />
          <ClubSection />
          <Footer />
        </main>
      )}
    </>
  );
}
