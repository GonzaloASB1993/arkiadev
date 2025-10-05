"use client";

import { Button } from "@/components/atoms/button";
import { ArrowRight, Phone } from "lucide-react";
import { gradient, heading, container } from "@/lib/utils/styles";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-primary/5 to-secondary/10 py-20 md:py-32 overflow-hidden">
      {/* Animated blob backgrounds */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className={container("relative z-10")}>
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-foreground/70">
              +50 negocios confían en nosotros
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={heading.h1("mb-6")}>
            <span className={gradient.text()}>
              Más Clientes para tu Negocio
            </span>
            <br />
            <span className="text-foreground">con Presencia Digital</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12">
            Páginas web, tiendas online y sistemas que{" "}
            <span className="font-semibold text-primary">aumentan ventas</span>,{" "}
            <span className="font-semibold text-secondary">ahorran tiempo</span> y{" "}
            <span className="font-semibold text-accent">te hacen competir</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="default" className="text-lg">
              Agenda una Llamada Gratis
              <Phone className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Ver Casos de Éxito
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">+35%</div>
              <div className="text-foreground/70">Ventas en promedio</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 shadow-lg">
              <div className="text-4xl font-bold text-secondary mb-2">4-6</div>
              <div className="text-foreground/70">Semanas de entrega</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 shadow-lg">
              <div className="text-4xl font-bold text-accent mb-2">$500K</div>
              <div className="text-foreground/70">Desde (página web)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
