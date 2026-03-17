"use client";

import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  const handleCalculateQuote = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/541162847863?text=Hola%2C%20quiero%20consultar%20por%20sus%20servicios",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B1F3B] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 md:mb-6 flex justify-center">
            <Logo className="h-48 md:h-64" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Soluciones integrales para{" "}
            <span className="text-[#D4AF37]">tu hogar</span> y{" "}
            <span className="text-[#D4AF37]">tu obra</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Plomería, electricidad, construcción en seco, colocación de pisos,
            pintura y mantenimiento general.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCalculateQuote}
              className="bg-[#D4AF37] text-[#0B1F3B] px-8 py-4 rounded-lg hover:bg-[#c5a133] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Calcular presupuesto
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5] to-transparent"></div>
    </section>
  );
}

