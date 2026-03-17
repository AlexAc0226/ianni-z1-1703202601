"use client";

import { useState } from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
// import { Gallery } from "./components/Gallery";
import { HowWeWork } from "./components/HowWeWork";
import { Urgencies } from "./components/Urgencies";
import { Benefits } from "./components/Benefits";
import { ServiceZone } from "./components/ServiceZone";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { WhatsAppMessage } from "./components/WhatsAppMessage";

export default function HomePage() {
  const [showWhatsAppMessage, setShowWhatsAppMessage] = useState(true);

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      {/* <Gallery /> */}
      <HowWeWork />
      <Urgencies />
      <Benefits />
      <ServiceZone />
      <Footer />

      <WhatsAppButton />
      {showWhatsAppMessage && (
        <WhatsAppMessage onClose={() => setShowWhatsAppMessage(false)} />
      )}
    </div>
  );
}

