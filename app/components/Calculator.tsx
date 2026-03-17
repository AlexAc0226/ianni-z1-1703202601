"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Calculator as CalcIcon, Send } from "lucide-react";

type ServiceType =
  | "plomeria"
  | "electricidad"
  | "paredes"
  | "nivelacion"
  | "pisos"
  | "pintura"
  | "machimbre"
  | "durlock"
  | "aires"
  | "generales";

type Unit = "m2" | "unidad" | "metro";

interface WorkOption {
  id: string;
  label: string;
  price: number;
  unit: Unit;
}

const serviceLabels: Record<ServiceType, string> = {
  plomeria: "Plomería",
  electricidad: "Instalaciones eléctricas",
  paredes: "Construcción de paredes",
  nivelacion: "Nivelación de superficies",
  pisos: "Colocación de pisos",
  pintura: "Pintura",
  machimbre: "Machimbre",
  durlock: "Construcción en seco (Durlock)",
  aires: "Aires acondicionados",
  generales: "Reparaciones generales"
};

const serviceWorkOptions: Record<ServiceType, WorkOption[]> = {
  plomeria: [
    { id: "rep_cañeria", label: "Reparación de cañería", price: 120000, unit: "unidad" },
    { id: "inst_griferia", label: "Instalación de grifería", price: 80000, unit: "unidad" },
    { id: "boca_agua", label: "Boca de agua", price: 50000, unit: "unidad" },
    { id: "inst_inodoro", label: "Instalación de inodoro", price: 60000, unit: "unidad" },
    {
      id: "inst_banio_completo",
      label: "Instalación completa baño",
      price: 350000,
      unit: "unidad"
    }
  ],
  electricidad: [
    { id: "boca_electrica", label: "Boca eléctrica", price: 30000, unit: "unidad" },
    { id: "enchufe", label: "Colocar enchufe", price: 25000, unit: "unidad" },
    { id: "luminaria", label: "Instalar luminaria", price: 20000, unit: "unidad" },
    { id: "tablero", label: "Tablero eléctrico", price: 100000, unit: "unidad" },
    {
      id: "inst_electrica_completa",
      label: "Instalación eléctrica completa",
      price: 300000,
      unit: "unidad"
    }
  ],
  paredes: [
    {
      id: "pared_ladrillo_hueco",
      label: "Levantar pared ladrillo hueco",
      price: 22000,
      unit: "m2"
    },
    {
      id: "pared_ladrillo_comun",
      label: "Levantar pared ladrillo común",
      price: 26000,
      unit: "m2"
    },
    {
      id: "pared_divisoria",
      label: "Pared divisoria interior",
      price: 21000,
      unit: "m2"
    },
    { id: "revoque_grueso", label: "Revoque grueso", price: 18000, unit: "m2" },
    { id: "revoque_fino", label: "Revoque fino", price: 16000, unit: "m2" },
    { id: "revoque_completo", label: "Revoque completo", price: 28000, unit: "m2" }
  ],
  nivelacion: [
    { id: "carpeta", label: "Carpeta niveladora", price: 16000, unit: "m2" },
    { id: "contrapiso", label: "Contrapiso", price: 22000, unit: "m2" },
    {
      id: "nivelacion_piso",
      label: "Nivelación para colocar piso",
      price: 18000,
      unit: "m2"
    },
    { id: "alisado", label: "Alisado de superficie", price: 15000, unit: "m2" }
  ],
  pisos: [
    { id: "ceramicos", label: "Cerámicos", price: 22000, unit: "m2" },
    { id: "porcelanato", label: "Porcelanato", price: 25000, unit: "m2" },
    { id: "extraccion_piso", label: "Extracción de piso", price: 14000, unit: "m2" },
    { id: "zocalos", label: "Zócalos", price: 4500, unit: "metro" }
  ],
  pintura: [
    { id: "pint_interior", label: "Pintura interior", price: 8000, unit: "m2" },
    { id: "cielorraso", label: "Cielorraso", price: 9000, unit: "m2" },
    { id: "pint_exterior", label: "Pintura exterior", price: 10000, unit: "m2" },
    { id: "puertas", label: "Puertas", price: 40000, unit: "unidad" },
    {
      id: "impermeabilizacion",
      label: "Impermeabilización techo",
      price: 18000,
      unit: "m2"
    }
  ],
  machimbre: [
    { id: "mach_pared", label: "Machimbre pared", price: 22000, unit: "m2" },
    { id: "mach_techo", label: "Machimbre techo", price: 24000, unit: "m2" },
    {
      id: "zocalos_madera",
      label: "Colocación zócalos madera",
      price: 5000,
      unit: "metro"
    }
  ],
  durlock: [
    { id: "pared_durlock", label: "Pared durlock", price: 22000, unit: "m2" },
    { id: "cielorraso_durlock", label: "Cielorraso durlock", price: 24000, unit: "m2" },
    {
      id: "revest_durlock",
      label: "Revestimiento durlock",
      price: 18000,
      unit: "m2"
    }
  ],
  aires: [
    {
      id: "inst_split",
      label: "Instalación aire split",
      price: 260000,
      unit: "unidad"
    },
    {
      id: "service",
      label: "Service mantenimiento",
      price: 60000,
      unit: "unidad"
    },
    {
      id: "carga_gas",
      label: "Carga de gas",
      price: 80000,
      unit: "unidad"
    }
  ],
  generales: [
    {
      id: "jornal_completo",
      label: "Jornal de reparación",
      price: 50000,
      unit: "unidad"
    },
    {
      id: "media_jornada",
      label: "Media jornada",
      price: 30000,
      unit: "unidad"
    },
    {
      id: "visita_tecnica",
      label: "Visita técnica",
      price: 12000,
      unit: "unidad"
    }
  ]
};

export function Calculator() {
  const searchParams = useSearchParams();
  const [service, setService] = useState<ServiceType>("plomeria");
  const [workId, setWorkId] = useState<string>("rep_cañeria");
  const [amount, setAmount] = useState<string>("1");
  const [budget, setBudget] = useState<number | null>(null);

  useEffect(() => {
    const serviceParam = searchParams.get("service") as ServiceType | null;
    if (serviceParam && serviceLabels[serviceParam]) {
      setService(serviceParam);
      const first = serviceWorkOptions[serviceParam][0];
      setWorkId(first.id);
      setBudget(null);
    }
  }, [searchParams]);

  const currentWork = useMemo(() => {
    return (
      serviceWorkOptions[service].find((w) => w.id === workId) ??
      serviceWorkOptions[service][0]
    );
  }, [service, workId]);

  const unitLabel = useMemo(() => {
    if (currentWork.unit === "m2") return "Metros cuadrados";
    if (currentWork.unit === "metro") return "Metros lineales";
    return "Cantidad de unidades";
  }, [currentWork.unit]);

  const calculateBudget = () => {
    const qty = parseFloat(amount);
    if (isNaN(qty) || qty <= 0) {
      alert("Por favor ingrese una cantidad válida.");
      return;
    }

    const total = currentWork.price * qty;
    setBudget(total);
  };

  const sendToWhatsApp = () => {
    if (budget === null) {
      alert("Por favor calcule el presupuesto primero");
      return;
    }

    const message = `Hola, quiero consultar por este trabajo:\n\nServicio: ${
      serviceLabels[service]
    }\nTrabajo: ${currentWork.label}\nUnidad: ${
      currentWork.unit
    }\nCantidad: ${amount}\nPresupuesto estimado: $${budget.toLocaleString(
      "es-AR"
    )}`;

    window.open(
      `https://wa.me/541162847863?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="calculator" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
              <CalcIcon className="w-8 h-8 text-[#0B1F3B]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3B] mb-4">
              Calculadora Inteligente de Presupuesto
            </h2>
            <p className="text-gray-600">
              Obtén un presupuesto aproximado al instante
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-[#0B1F3B] mb-2">
                  Rubro / Servicio
                </label>
                <select
                  value={service}
                  onChange={(e) => {
                    const newService = e.target.value as ServiceType;
                    setService(newService);
                    const first = serviceWorkOptions[newService][0];
                    setWorkId(first.id);
                    setBudget(null);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  {Object.entries(serviceLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#0B1F3B] mb-2">
                  Tipo de trabajo
                </label>
                <select
                  value={workId}
                  onChange={(e) => {
                    setWorkId(e.target.value);
                    setBudget(null);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  {serviceWorkOptions[service].map((work) => (
                    <option key={work.id} value={work.id}>
                      {work.label} — ${work.price.toLocaleString("es-AR")} /{" "}
                      {work.unit}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#0B1F3B] mb-2">
                  {unitLabel}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setBudget(null);
                  }}
                  placeholder="Ej: 10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  min={currentWork.unit === "unidad" ? 1 : 0.1}
                  step={currentWork.unit === "unidad" ? 1 : 0.5}
                />
              </div>

              <button
                onClick={calculateBudget}
                className="w-full bg-[#0B1F3B] text-white py-4 rounded-lg hover:bg-[#0B1F3B]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Calcular presupuesto
              </button>

              {budget !== null && (
                <div className="mt-6 p-6 bg-[#D4AF37]/10 rounded-lg border-2 border-[#D4AF37]">
                  <p className="text-center text-[#0B1F3B] mb-4">
                    Presupuesto estimado:
                  </p>
                  <p className="text-4xl font-bold text-center text-[#0B1F3B] mb-2">
                    ${budget.toLocaleString("es-AR")}
                  </p>
                  <p className="text-sm text-center text-gray-600 mb-4">
                    Valores promedio de mano de obra en 2026. El monto final puede
                    variar según la complejidad del trabajo.
                  </p>
                  <button
                    onClick={sendToWhatsApp}
                    className="w-full bg-[#25D366] text-white py-3 rounded-lg hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar detalle por WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

