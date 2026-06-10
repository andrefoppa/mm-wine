"use client";

import { useState } from "react";
import AgeGate from "@/components/AgeGate";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import ClubSection from "@/components/ClubSection";
import MaluSection from "@/components/MaluSection";
import MomentoSection from "@/components/MomentoSection";
import FeaturedWine from "@/components/FeaturedWine";
import WineCollection from "@/components/WineCollection";
import Testimonials from "@/components/Testimonials";
import InstagramGrid from "@/components/InstagramGrid";
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
          <Diferenciais />
          <ClubSection />
          <MaluSection />
          <MomentoSection />
          <FeaturedWine />
          <WineCollection />
          <Testimonials />
          <InstagramGrid />
          <Footer />
        </main>
      )}
    </>
  );
}
