"use client";

import { MessageCircle, Search, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contacto por WhatsApp",
    description: "Nos contactás y nos contás qué necesitás."
  },
  {
    number: "02",
    icon: Search,
    title: "Evaluación del trabajo",
    description: "Evaluamos el trabajo y te asesoramos sobre la mejor solución."
  },
  {
    number: "03",
    icon: FileText,
    title: "Presupuesto claro",
    description: "Te enviamos un presupuesto detallado sin sorpresas."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Trabajo profesional",
    description: "Realizamos el trabajo con calidad y profesionalismo."
  }
];

export function HowWeWork() {
  return (
    <section className="py-20 bg-[#0B1F3B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Cómo Trabajamos?
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-10 h-10 text-[#0B1F3B]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[#0B1F3B] text-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

