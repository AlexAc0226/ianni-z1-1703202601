"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#" + id);
    }
  };

  return (
    <footer className="bg-[#0B1F3B] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/">
              <Logo className="h-20 mb-4" />
            </Link>
            <p className="text-white/70 mb-4">
              Soluciones integrales para tu hogar y tu obra. Profesionalismo y
              calidad garantizada.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/presupuesto")}
                  className="text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  Presupuesto
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  Galería
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open("https://wa.me/541162847863", "_blank")
                  }
                  className="text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <a
                  href="https://wa.me/541162847863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  +54 9 11 6284-7863
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white/70">CABA y alrededores</span>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.instagram.com/ianni.obra?igsh=MWVyaHltdWhoOXlyNQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} IANNI OBRA - Servicios Integrales.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

