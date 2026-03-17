"use client";

import { useRouter } from "next/navigation";
import {
  Wrench,
  Zap,
  PaintBucket,
  Hammer,
  Droplet,
  Home,
  Grid3x3,
  Settings,
  Layers,
  PanelTop,
  AirVent
} from "lucide-react";

const services = [
  {
    id: "plomeria",
    icon: Droplet,
    title: "Plomería y reparación de cañerías",
    description:
      "Instalación, reparación y mantenimiento de sistemas de agua y desagües."
  },
  {
    id: "electricidad",
    icon: Zap,
    title: "Instalaciones eléctricas",
    description:
      "Instalaciones nuevas, reparaciones y certificaciones eléctricas."
  },
  {
    id: "durlock",
    icon: Layers,
    title: "Construcción en seco (Durlock)",
    description: "Paredes, cielorrasos y divisiones en placas de yeso."
  },
  {
    id: "paredes",
    icon: Hammer,
    title: "Construcción de paredes",
    description: "Levantamiento de paredes de ladrillo y revoques."
  },
  {
    id: "machimbre",
    icon: PanelTop,
    title: "Colocación de machimbre",
    description: "Instalación de machimbre en paredes y techos."
  },
  {
    id: "pintura",
    icon: PaintBucket,
    title: "Pintura interior y exterior",
    description: "Pintura profesional con acabados de calidad."
  },
  {
    id: "pisos",
    icon: Grid3x3,
    title: "Colocación de pisos",
    description:
      "Instalación de cerámicos, porcelanatos, pisos flotantes y más."
  },
  {
    id: "extraccion",
    icon: Settings,
    title: "Extracción de pisos antiguos",
    description: "Retiro y preparación de superficies."
  },
  {
    id: "nivelacion",
    icon: Home,
    title: "Nivelación de superficies",
    description: "Preparación y nivelación para nuevas instalaciones."
  },
  {
    id: "aires",
    icon: AirVent,
    title: "Instalación y mantenimiento de aires",
    description: "Colocación, reparación y mantenimiento de aires acondicionados."
  },
  {
    id: "generales",
    icon: Wrench,
    title: "Reparaciones generales",
    description: "Mantenimiento integral del hogar."
  }
];

export function Services() {
  const router = useRouter();

  const handleQuoteRequest = (serviceId: string) => {
    router.push(`/presupuesto?service=${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => handleQuoteRequest(service.id)}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#0B1F3B] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-[#D4AF37] hover:text-[#0B1F3B] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Solicitar presupuesto
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

