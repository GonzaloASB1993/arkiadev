"use client";

import { TrendingUp, Clock, Rocket } from "lucide-react";
import { heading, container, section, cardHover } from "@/lib/utils/styles";

const benefits = [
  {
    icon: TrendingUp,
    title: "Vende Mientras Duermes",
    description: "Tu negocio abierto 24/7. Los clientes compran cuando quieren, sin que estés presente.",
    metric: "+35%",
    metricLabel: "de ventas en promedio",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Recupera Tu Tiempo Valioso",
    description: "Automatiza tareas repetitivas. Dedica tu tiempo a hacer crecer el negocio.",
    metric: "10-15 hrs",
    metricLabel: "ahorradas por semana",
    color: "secondary",
  },
  {
    icon: Rocket,
    title: "Profesionalismo de Gran Empresa",
    description: "Compite con las grandes marcas. Da una imagen moderna y confiable a tus clientes.",
    metric: "90%",
    metricLabel: "mejora en percepción",
    color: "accent",
  },
];

export function BenefitsSection() {
  return (
    <section className={section("bg-muted")}>
      <div className={container()}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={heading.h2("text-foreground mb-4")}>
            ¿Por Qué Tu Negocio Necesita Presencia Digital?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            No es solo tener una página web. Es transformar cómo trabajas y vendes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClass = benefit.color;

            return (
              <div
                key={index}
                className={cardHover("bg-background rounded-2xl p-8 border-2 border-border")}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 bg-${colorClass}/10 rounded-xl mb-6`}>
                  <Icon className={`w-8 h-8 text-${colorClass}`} />
                </div>

                {/* Title */}
                <h3 className={heading.h4("text-foreground mb-3")}>{benefit.title}</h3>

                {/* Description */}
                <p className="text-foreground/70 mb-6">{benefit.description}</p>

                {/* Metric */}
                <div className={`bg-${colorClass}/5 rounded-xl p-4`}>
                  <div className={`text-3xl font-bold text-${colorClass} mb-1`}>
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-foreground/60">{benefit.metricLabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
