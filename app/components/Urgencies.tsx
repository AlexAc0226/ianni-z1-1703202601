"use client";

import { AlertCircle, Droplets, Zap, Wrench } from "lucide-react";

export function Urgencies() {
  const urgencies = [
    { icon: Droplets, text: "Pérdidas de agua" },
    { icon: Zap, text: "Problemas eléctricos" },
    { icon: Wrench, text: "Roturas urgentes" }
  ];

  const handleUrgentContact = () => {
    window.open(
      "https://wa.me/541162847863?text=¡Tengo%20una%20urgencia!%20Necesito%20ayuda%20con:",
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#D4AF37]/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3B] mb-6">
              ¿Tenés una urgencia en tu casa?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos disponibles para emergencias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {urgencies.map((urgency, index) => {
              const Icon = urgency.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg text-center border-2 border-transparent hover:border-red-500 transition-all"
                >
                  <Icon className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <p className="font-medium text-[#0B1F3B]">{urgency.text}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={handleUrgentContact}
              className="bg-red-500 text-white px-10 py-5 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <AlertCircle className="w-6 h-6" />
              Contacto urgente por WhatsApp
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Atención inmediata para emergencias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

