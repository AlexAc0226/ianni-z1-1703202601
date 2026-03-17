"use client";

import Image from "next/image";

export function Gallery() {
  const projects = [
    {
      title: "Colocación de pisos",
      image:
        "https://images.unsplash.com/photo-1761053133165-0f3acdaf1770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Pintura profesional",
      image:
        "https://images.unsplash.com/photo-1644413132413-a4c2eaa6c00a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Construcción en seco",
      image:
        "https://images.unsplash.com/photo-1768321914585-a333b72c310f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Trabajos de plomería",
      image:
        "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Instalación de pisos",
      image:
        "https://images.unsplash.com/photo-1760976354141-1b4428e1ac18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    {
      title: "Construcción y remodelación",
      image:
        "https://images.unsplash.com/photo-1642006953665-4046190641ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
            Galería de Trabajos
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Algunos de nuestros proyectos realizados con excelencia y
            profesionalismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/90 via-[#0B1F3B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="w-16 h-1 bg-[#D4AF37]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

