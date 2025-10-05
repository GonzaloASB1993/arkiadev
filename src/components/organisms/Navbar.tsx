"use client";

import Link from "next/link";
import { Button } from "@/components/atoms/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-cyan-500 to-brand-blue-500 bg-clip-text text-transparent">
              ARKIA
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/servicios" className="text-gray-700 hover:text-brand-blue-500 transition">
              Servicios
            </Link>
            <Link href="/casos-exito" className="text-gray-700 hover:text-brand-blue-500 transition">
              Casos de Éxito
            </Link>
            <Link href="/proceso" className="text-gray-700 hover:text-brand-blue-500 transition">
              Proceso
            </Link>
            <Link href="/precios" className="text-gray-700 hover:text-brand-blue-500 transition">
              Precios
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-brand-blue-500 transition">
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="default" size="default">
              Agenda una Llamada Gratis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
