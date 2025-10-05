"use client";

import { Button } from "@/components/atoms/button";
import { ArrowRight, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-brand-cyan-50 to-brand-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-cyan-200 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">
              +50 negocios confían en nosotros
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-cyan-600 via-brand-blue-600 to-brand-blue-700 bg-clip-text text-transparent">
              Más Clientes para tu Negocio
            </span>
            <br />
            <span className="text-gray-900">con Presencia Digital</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ayudamos a PYMEs chilenas a crecer con páginas web, tiendas online y sistemas que{" "}
            <span className="font-semibold text-brand-green-600">aumentan ventas</span>,{" "}
            <span className="font-semibold text-brand-blue-600">ahorran tiempo</span> y permiten{" "}
            <span className="font-semibold text-brand-cyan-600">competir con grandes empresas</span>
            .
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="default" className="group">
              <Phone className="w-5 h-5" />
              Agenda una Llamada Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-brand-cyan-600 mb-2">+50</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-brand-green-600 mb-2">+35%</div>
              <div className="text-gray-600">Aumento de Ventas Promedio</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <div className="text-3xl font-bold text-brand-blue-600 mb-2">4-6 sem</div>
              <div className="text-gray-600">Tiempo de Desarrollo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-brand-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
