# ARKIA Design System

Sistema de diseño para el proyecto ARKIA - Arquitectura Digital Inteligente

## 🎨 Paleta de Colores

### Colores de Marca

#### Primary (Cyan)

```css
--primary: #06b6d4;
```

Color principal de la marca, usado para CTAs primarios, enlaces y elementos destacados.

#### Secondary (Blue)

```css
--secondary: #3b82f6;
```

Color secundario para elementos complementarios y variaciones de estilo.

#### Accent (Green)

```css
--accent: #10b981;
```

Color de acento para estados de éxito, confirmaciones y elementos positivos.

### Uso del Gradiente

El gradiente oficial de ARKIA es de Cyan (#06b6d4) a Blue (#3b82f6):

```tsx
// Gradient text
<h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  ARKIA
</h1>

// Gradient background
<div className="bg-gradient-to-r from-primary to-secondary">
  Content
</div>

// Using utility
import { gradient } from "@/lib/utils/styles";

<h1 className={gradient.text()}>ARKIA</h1>
```

### Colores Neutrales

#### Light Mode

- Background: `#ffffff`
- Foreground: `#0f172a`
- Muted: `#f1f5f9`
- Border: `#e2e8f0`

#### Dark Mode

- Background: `#0a0a0a`
- Foreground: `#f8fafc`
- Muted: `#1e293b`
- Border: `#334155`

## 📐 Tipografía

### Fuentes

```typescript
// Sans-serif (Inter)
font-family: var(--font-inter)

// Monospace (JetBrains Mono)
font-family: var(--font-mono)
```

### Escala de Tamaños

```tsx
import { heading } from "@/lib/utils/styles";

// H1 - Hero titles
<h1 className={heading.h1()}>Title</h1>
// text-4xl sm:text-5xl lg:text-6xl

// H2 - Section titles
<h2 className={heading.h2()}>Title</h2>
// text-3xl sm:text-4xl lg:text-5xl

// H3 - Subsection titles
<h3 className={heading.h3()}>Title</h3>
// text-2xl sm:text-3xl lg:text-4xl

// H4, H5, H6 - Component titles
<h4 className={heading.h4()}>Title</h4>
<h5 className={heading.h5()}>Title</h5>
<h6 className={heading.h6()}>Title</h6>
```

### Font Weights

- `font-normal` (400) - Body text
- `font-medium` (500) - Emphasized text
- `font-semibold` (600) - Subheadings
- `font-bold` (700) - Headings

## 📦 Componentes

### shadcn/ui Base Components

Todos los componentes base están en `src/components/ui/`

#### Button

```tsx
import { Button } from "@/components/ui";

// Variants
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

#### Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>Card content here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>;
```

#### Input

```tsx
import { Input } from "@/components/ui";

<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="email@example.com" />
```

## 🎭 Utilidades de Estilo

### Container

```tsx
import { container } from "@/lib/utils/styles";

<div className={container()}>{/* Max-width container with responsive padding */}</div>;
```

### Section

```tsx
import { section } from "@/lib/utils/styles";

<section className={section()}>{/* Section with consistent vertical spacing */}</section>;
```

### Glass Morphism

```tsx
import { glassMorphism } from "@/lib/utils/styles";

<div className={glassMorphism()}>{/* Backdrop blur effect */}</div>;
```

### Card Hover

```tsx
import { cardHover } from "@/lib/utils/styles";

<Card className={cardHover()}>{/* Card with hover animation */}</Card>;
```

### Focus Ring

```tsx
import { focusRing } from "@/lib/utils/styles";

<button className={focusRing()}>{/* Accessible focus indicator */}</button>;
```

## 🎯 Border Radius

```css
--radius: 0.5rem (8px) --radius-sm: calc(var(--radius) - 4px) --radius-md: var(--radius)
  --radius-lg: calc(var(--radius) + 4px) --radius-xl: calc(var(--radius) + 8px);
```

## 🌓 Dark Mode

El dark mode se activa automáticamente según la preferencia del sistema:

```tsx
// Los colores CSS variables cambian automáticamente
// No necesitas agregar lógica adicional

<div className="bg-background text-foreground">{/* Se adapta automáticamente al dark mode */}</div>
```

## 📱 Responsive Design

### Breakpoints

```typescript
sm: 640px   // Mobile landscape
md: 768px   // Tablet portrait
lg: 1024px  // Tablet landscape / Small desktop
xl: 1280px  // Desktop
2xl: 1536px // Large desktop
```

### Mobile-First Approach

```tsx
// Base styles apply to mobile
// Add responsive classes for larger screens
<div className="text-sm md:text-base lg:text-lg">Responsive text</div>
```

## ✨ Animaciones

### Durations

```typescript
duration - 75; // 75ms
duration - 100; // 100ms
duration - 150; // 150ms (default)
duration - 200; // 200ms
duration - 300; // 300ms
duration - 500; // 500ms
duration - 700; // 700ms
duration - 1000; // 1000ms
```

### Timing Functions

```typescript
ease-linear   // linear
ease-in       // cubic-bezier(0.4, 0, 1, 1)
ease-out      // cubic-bezier(0, 0, 0.2, 1)
ease-in-out   // cubic-bezier(0.4, 0, 0.2, 1)
```

### Common Transitions

```tsx
// Hover effects
<button className="transition-all duration-300 hover:scale-105">
  Hover me
</button>

// Fade in
<div className="opacity-0 animate-in fade-in duration-500">
  Fading in
</div>
```

## 🎨 Design Tokens

Todos los tokens están definidos en `src/lib/constants/design-tokens.ts`:

```typescript
import { colors, spacing, fontSize, borderRadius } from "@/lib/constants/design-tokens";

// Usage in custom components
const customColor = colors.primary[500];
const customSpacing = spacing[4];
```

## 📚 Best Practices

### Component Composition

```tsx
// ✅ Good - Composable components
<Card className={cardHover()}>
  <CardHeader>
    <CardTitle className={gradient.text()}>Title</CardTitle>
  </CardHeader>
</Card>

// ❌ Bad - Hardcoded styles
<div style={{ padding: "20px", borderRadius: "8px" }}>
  Content
</div>
```

### Class Name Merging

```tsx
import { cn } from "@/lib/utils/cn";

// Always use cn() for conditional classes
<Button className={cn("custom-class", isActive && "bg-primary")}>Button</Button>;
```

### Accessibility

```tsx
// Always include focus states
<button className={focusRing()}>
  Accessible Button
</button>

// Use semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>
```

### Performance

```tsx
// Prefer CSS transitions over JS animations
<div className="transition-transform hover:scale-105" />

// Use CSS variables for dynamic values
<div style={{ "--custom-color": color } as React.CSSProperties} />
```

## 🔧 Extending the Design System

### Adding New Components

1. Create in appropriate directory (`atoms`, `molecules`, `organisms`)
2. Use design tokens and utilities
3. Follow TypeScript best practices
4. Add to exports in `index.ts`

### Custom Theme Colors

```tsx
// Add to globals.css :root
:root {
  --custom-color: #hexcode;
}

// Add to @theme inline
@theme inline {
  --color-custom: var(--custom-color);
}

// Use in components
<div className="text-custom">Content</div>
```

## 📖 Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Version**: 1.0.0
**Last Updated**: 2025
**Maintained By**: ARKIA Development Team
