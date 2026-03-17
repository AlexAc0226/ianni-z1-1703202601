"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      "https://wa.me/541162847863?text=Hola%2C%20quiero%20consultar%20por%20sus%20servicios",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-bounce hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}

