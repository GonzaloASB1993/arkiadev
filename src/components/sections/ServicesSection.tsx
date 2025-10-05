"use client";

import { Button } from "@/components/atoms/button";
import { Globe, ShoppingCart, Settings, Smartphone, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Página Web Profesional",
    tagline: "Tu Negocio Online 24/7",
    description:
      "Una página web profesional que trabaja para ti las 24 horas. Tus clientes te encuentran en Google, conocen tus servicios y te contactan fácilmente.",
    features: ["Diseño moderno y profesional", "100% responsive", "Dominio + Hosting incluido"],
    price: "$500.000",
    period: "+ $20.000/mes",
    cta: "Quiero mi Página Web",
    highlight: false,
  },
  {
    icon: ShoppingCart,
    title: "Tienda Online",
    tagline: "Vende por Internet y Cobra con Tarjeta",
    description:
      "Una tienda online completa donde tus clientes compran con tarjeta 24/7. Gestiona todo desde un panel simple, sin conocimientos técnicos.",
    features: [
      "Catálogo ilimitado",
      "Pago con tarjeta (WebPay)",
      "Gestión de inventario",
      "Reportes de ventas",
    ],
    price: "$1.200.000",
    period: "+ $35.000/mes",
    cta: "Solicitar Demo",
    highlight: true,
  },
  {
    icon: Settings,
    title: "Sistema Personalizado",
    tagline: "Automatiza Tareas Repetitivas",
    description:
      "Un sistema hecho a medida que automatiza procesos específicos: reservas, inventario, agendamiento o lo que necesites.",
    features: [
      "Análisis completo incluido",
      "Desarrollo a medida",
      "Capacitación del equipo",
      "3 meses de ajustes",
    ],
    price: "Desde $2.500.000",
    period: "",
    cta: "Agendar Reunión",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "App Móvil",
    tagline: "Tus Clientes te Llevan en el Bolsillo",
    description:
      "Una app profesional para iOS y Android. Fideliza clientes, envía ofertas y mantén comunicación directa con notificaciones.",
    features: [
      "iOS + Android",
      "Diseño personalizado",
      "Notificaciones push",
      "1 año mantenimiento",
    ],
    price: "Desde $3.500.000",
    period: "",
    cta: "Solicitar Cotización",
    highlight: false,
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones digitales diseñadas para PYMEs, con precios transparentes y sin letra chica
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border-2 ${
                  service.highlight
                    ? "border-brand-blue-500 shadow-xl scale-105"
                    : "border-gray-200 hover:border-brand-cyan-300"
                } transition-all duration-300`}
              >
                {service.highlight && (
                  <div className="bg-brand-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Más Popular
                  </div>
                )}

                {/* Icon */}
                <div className="inline-flex p-3 bg-brand-cyan-50 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-brand-cyan-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>

                {/* Tagline */}
                <p className="text-sm font-medium text-brand-blue-600 mb-3">{service.tagline}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                  {service.period && <div className="text-sm text-gray-500">{service.period}</div>}
                </div>

                {/* CTA */}
                <Button
                  variant={service.highlight ? "default" : "outline"}
                  className="w-full group"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
