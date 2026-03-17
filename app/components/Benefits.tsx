"use client";

import { Clock, Award, Settings, UserCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Presupuestos rápidos",
    description: "Respuesta inmediata a tus consultas"
  },
  {
    icon: Award,
    title: "Trabajo profesional",
    description: "Equipo capacitado y con experiencia"
  },
  {
    icon: Settings,
    title: "Soluciones integrales",
    description: "Todo lo que tu obra necesita en un solo lugar"
  },
  {
    icon: UserCheck,
    title: "Atención personalizada",
    description: "Nos adaptamos a tus necesidades"
  },
  {
    icon: Sparkles,
    title: "Experiencia en múltiples rubros",
    description:
      "Abarcamos todas las áreas de construcción y mantenimiento"
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
            ¿Por qué elegirnos?
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg hover:bg-[#F5F5F5] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-all">
                  <Icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-all" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

