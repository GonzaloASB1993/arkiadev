"use client";

import { TrendingUp, Clock, Rocket } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Vende Mientras Duermes",
    description:
      "Tu negocio disponible las 24 horas, los 7 días de la semana. Los clientes pueden ver tus productos, hacer pedidos y pagar con tarjeta en cualquier momento, desde cualquier lugar. No pierdes ninguna venta por estar cerrado.",
    metric: "+35% de ventas en promedio",
    color: "cyan",
  },
  {
    icon: Clock,
    title: "Recupera Tu Tiempo Valioso",
    description:
      "Automatiza tareas repetitivas como tomar pedidos por teléfono, agendar citas, actualizar inventario o enviar recordatorios. Dedica tu tiempo a hacer crecer el negocio, no a tareas administrativas.",
    metric: "10-15 horas ahorradas por semana",
    color: "blue",
  },
  {
    icon: Rocket,
    title: "Profesionalismo al Nivel de las Grandes Marcas",
    description:
      "Proyecta una imagen profesional con una presencia digital moderna. Tus clientes te verán al mismo nivel que las grandes empresas, sin importar el tamaño de tu negocio. La tecnología ya no es solo para los grandes.",
    metric: "Mejora percepción de marca en 90%",
    color: "green",
  },
];

const colorClasses = {
  cyan: {
    bg: "bg-brand-cyan-50",
    icon: "text-brand-cyan-600",
    border: "border-brand-cyan-200",
    metric: "text-brand-cyan-700",
  },
  blue: {
    bg: "bg-brand-blue-50",
    icon: "text-brand-blue-600",
    border: "border-brand-blue-200",
    metric: "text-brand-blue-700",
  },
  green: {
    bg: "bg-brand-green-50",
    icon: "text-brand-green-600",
    border: "border-brand-green-200",
    metric: "text-brand-green-700",
  },
};

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegir ARKIA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos tu negocio con soluciones digitales que generan resultados reales y
            medibles
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = colorClasses[benefit.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 ${colors.bg} rounded-xl mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>

                {/* Metric */}
                <div className={`font-semibold ${colors.metric} text-lg`}>{benefit.metric}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
