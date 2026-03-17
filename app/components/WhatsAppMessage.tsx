"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface WhatsAppMessageProps {
  onClose: () => void;
}

export function WhatsAppMessage({ onClose }: WhatsAppMessageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      handleClose();
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/541162847863?text=Hola%2C%20necesito%20un%20presupuesto%20rápido%20para%20mi%20obra",
      "_blank"
    );
    handleClose();
  };

  return (
    <div
      className={`fixed bottom-28 right-6 w-80 bg-white rounded-lg shadow-2xl z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-[#25D366] text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl">👋</span>
          </div>
          <div>
            <p className="font-medium">IANNI OBRA</p>
            <p className="text-xs text-white/80">En línea</p>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <div className="bg-[#F5F5F5] rounded-lg p-3 mb-3">
          <p className="text-sm text-[#0B1F3B]">
            Hola 👋 ¿Necesitás un presupuesto rápido para tu obra?
          </p>
          <p className="text-xs text-gray-500 mt-1">Ahora</p>
        </div>
        <button
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] text-white py-2 rounded-lg hover:bg-[#20BA5A] transition-colors"
        >
          Iniciar conversación
        </button>
      </div>
    </div>
  );
}

