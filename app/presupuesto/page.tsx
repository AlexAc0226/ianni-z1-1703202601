"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Calculator } from "../components/Calculator";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { WhatsAppMessage } from "../components/WhatsAppMessage";
import { useState } from "react";

export default function CalculatorPage() {
  const router = useRouter();
  const [showWhatsAppMessage, setShowWhatsAppMessage] = useState(true);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-[#0B1F3B] py-6 mb-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="text-white flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>
          <div className="flex-1 flex justify-center">
            <Logo className="h-12" />
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      <main className="pb-20">
        <Calculator />
      </main>

      <Footer />

      <WhatsAppButton />
      {showWhatsAppMessage && (
        <WhatsAppMessage onClose={() => setShowWhatsAppMessage(false)} />
      )}
    </div>
  );
}

