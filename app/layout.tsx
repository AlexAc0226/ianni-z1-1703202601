import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IANNI OBRA - Soluciones integrales para tu hogar y tu obra",
  description:
    "Plomería, electricidad, construcción en seco, colocación de pisos, pintura y mantenimiento general.",
  icons: {
    icon: "/img/icon.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

