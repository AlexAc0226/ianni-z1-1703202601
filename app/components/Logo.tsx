"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-32" }: LogoProps) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <Image
        src="/img/logo_ianni_obra.png"
        alt="IANNI OBRA - Soluciones integrales para tu hogar y tu obra"
        className="w-full h-full object-contain"
        width={400}
        height={400}
        priority
      />
    </div>
  );
}

