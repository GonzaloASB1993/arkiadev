"use client";

import { Button } from "@/components/atoms/button";
import { Star, TrendingUp, Clock, MapPin, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    name: "Panadería Don José",
    industry: "Alimentos y Bebidas",
    location: "Ñuñoa, Santiago",
    problem: "Perdíamos clientes porque solo atendíamos por teléfono",
    solution: "Sistema de pedidos online + WhatsApp",
    results: [
      { label: "Ventas", value: "+40%", icon: TrendingUp },
      { label: "Tiempo ahorrado", value: "10 hrs/sem", icon: Clock },
      { label: "Pedidos digitales", value: "60%", icon: TrendingUp },
    ],
    testimonial:
      "No puedo creer cómo cambió nuestro negocio. Los pedidos llegan solos al sistema, sin errores. La inversión se pagó sola en 3 meses.",
    author: "José Pérez",
    role: "Dueño",
    rating: 5,
    image: "/images/cases/panaderia.jpg", // Placeholder
  },
  {
    name: "Centro Médico Vitalis",
    industry: "Salud",
    location: "Providencia, Santiago",
    problem: "Secretaria gastaba 5 hrs/día solo agendando citas",
    solution: "Sistema de agendamiento online 24/7",
    results: [
      { label: "Ahorro mensual", value: "$400K", icon: TrendingUp },
      { label: "Reservas online", value: "75%", icon: TrendingUp },
      { label: "Menos inasistencias", value: "-60%", icon: Clock },
    ],
    testimonial:
      "Los pacientes están felices porque pueden agendar a cualquier hora. El sistema se pagó solo en 2 meses con el ahorro.",
    author: "Dra. Carolina Soto",
    role: "Directora",
    rating: 5,
    image: "/images/cases/medico.jpg", // Placeholder
  },
  {
    name: "Boutique María",
    industry: "Retail / Moda",
    location: "Viña del Mar",
    problem: "Solo vendíamos en nuestro local físico",
    solution: "Tienda online completa con WebPay",
    results: [
      { label: "Ventas totales", value: "+65%", icon: TrendingUp },
      { label: "Ventas online", value: "35%", icon: TrendingUp },
      { label: "Cobertura", value: "12 regiones", icon: MapPin },
    ],
    testimonial:
      "Ahora vendo mientras duermo, tengo clientas de todo Chile. Las ventas online son un tercio de mi facturación.",
    author: "María Fernández",
    role: "Dueña",
    rating: 5,
    image: "/images/cases/boutique.jpg", // Placeholder
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Casos de Éxito Reales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PYMEs chilenas que transformaron su negocio con soluciones digitales
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => {
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-brand-cyan-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{caseStudy.name}</h3>
                    <div className="flex gap-0.5">
                      {[...Array(caseStudy.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{caseStudy.industry}</div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {caseStudy.location}
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-1">Problema:</div>
                  <p className="text-gray-600 italic">"{caseStudy.problem}"</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-1">Solución:</div>
                  <p className="text-gray-900 font-medium">{caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {caseStudy.results.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div key={idx} className="bg-brand-green-50 rounded-lg p-3 text-center">
                        <Icon className="w-4 h-4 text-brand-green-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-brand-green-700">
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <p className="text-gray-700 text-sm mb-3 italic">"{caseStudy.testimonial}"</p>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{caseStudy.author}</div>
                    <div className="text-gray-500">{caseStudy.role}</div>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group">
                  Ver Caso Completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button size="lg" variant="default">
            Ver Todos los Casos de Éxito
          </Button>
        </div>
      </div>
    </section>
  );
}
