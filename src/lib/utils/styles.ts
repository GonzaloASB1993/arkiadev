import { cn } from "@/lib/utils";

/**
 * Gradient utilities for ARKIA brand
 * Official gradient: Cyan (#06b6d4) to Blue (#3b82f6)
 */
export const gradient = {
  text: () => "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
  bg: () => "bg-gradient-to-r from-primary to-secondary",
  bgVertical: () => "bg-gradient-to-b from-primary to-secondary",
};

/**
 * Heading utilities with responsive sizing
 */
export const heading = {
  h1: (className?: string) =>
    cn("text-4xl sm:text-5xl lg:text-6xl font-bold", className),
  h2: (className?: string) =>
    cn("text-3xl sm:text-4xl lg:text-5xl font-bold", className),
  h3: (className?: string) =>
    cn("text-2xl sm:text-3xl lg:text-4xl font-semibold", className),
  h4: (className?: string) =>
    cn("text-xl sm:text-2xl lg:text-3xl font-semibold", className),
  h5: (className?: string) =>
    cn("text-lg sm:text-xl lg:text-2xl font-semibold", className),
  h6: (className?: string) =>
    cn("text-base sm:text-lg lg:text-xl font-semibold", className),
};

/**
 * Container with max-width and responsive padding
 */
export const container = (className?: string) =>
  cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className);

/**
 * Section with consistent vertical spacing
 */
export const section = (className?: string) =>
  cn("py-12 sm:py-16 lg:py-20", className);

/**
 * Glass morphism effect
 */
export const glassMorphism = (className?: string) =>
  cn("backdrop-blur-md bg-white/10 border border-white/20", className);

/**
 * Card hover animation
 */
export const cardHover = (className?: string) =>
  cn(
    "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
    className
  );

/**
 * Focus ring for accessibility
 */
export const focusRing = (className?: string) =>
  cn(
    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
    className
  );

/**
 * Button base styles matching design system
 */
export const buttonBase = {
  primary: () =>
    "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
  secondary: () =>
    "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
  accent: () =>
    "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
  outline: () =>
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};
