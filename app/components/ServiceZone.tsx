"use client";

import { MapPin } from "lucide-react";

export function ServiceZone() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3B] mb-6">
            Zona de Servicio
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Trabajamos en{" "}
            <span className="font-bold text-[#0B1F3B]">
              CABA y alrededores
            </span>
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-4">
              Brindamos nuestros servicios en toda la Ciudad Autónoma de Buenos
              Aires y en las siguientes zonas del Gran Buenos Aires:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[#0B1F3B] font-medium">
              <div>Zona Norte</div>
              <div>Zona Oeste</div>
              <div>Zona Sur</div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              * Consultá disponibilidad para otras zonas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

