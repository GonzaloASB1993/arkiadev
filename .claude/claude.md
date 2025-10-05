# Claude.md - Guía del Proyecto ARKIA (ENFOQUE CORREGIDO)

## ⚠️ CAMBIO CRÍTICO DE ENFOQUE

### El Problema Detectado
El proyecto se estaba desarrollando como un **sitio técnico para desarrolladores** cuando debería ser un **sitio comercial para dueños de PYME sin conocimiento técnico**.

### El Enfoque Correcto
- **Audiencia**: Dueños de PYME, gerentes, emprendedores (NO desarrolladores)
- **Lenguaje**: Beneficios de negocio (NO términos técnicos)
- **Objetivo**: Generar confianza y leads (NO demostrar habilidades técnicas)
- **Métrica**: Conversión de visitantes a clientes (NO Lighthouse score)

---

## 🎯 Contexto del Proyecto Completo

### Información del Negocio
- **Nombre**: ARKIA - Arquitectura Digital Inteligente
- **Servicios**: Desarrollo web, tiendas online, sistemas personalizados, apps móviles
- **Diferenciador**: Soluciones digitales explicadas en español claro para PYMEs
- **Público objetivo**: Negocios pequeños y medianos SIN conocimiento técnico

### Las 3 Partes del Proyecto

**1. Landing Page (Pública)**
- Usuarios: Visitantes anónimos
- Objetivo: Captar y convertir leads
- Métrica: >8% conversión

**2. Portal Cliente (Autenticado)**
- Usuarios: Clientes activos de ARKIA
- Objetivo: Transparencia total del proyecto
- Métrica: >90% satisfacción

**3. Panel Admin (Interno)**
- Usuarios: Equipo ARKIA
- Objetivo: Gestión eficiente
- Métrica: -50% tiempo manual

---

## 💬 Reglas de Lenguaje (CRÍTICO)

### ✅ SIEMPRE Usar (Lenguaje de Negocio)

**Beneficios Tangibles**:
- "Vende mientras duermes"
- "Más clientes para tu negocio"
- "Ahorra X horas semanales"
- "Aumenta tus ventas un X%"
- "Cobra automáticamente con tarjeta"
- "Gestiona todo desde tu celular"

**Proceso Simple**:
- "En 3 pasos simples"
- "Listo en 4-6 semanas"
- "Sin conocimientos técnicos necesarios"
- "Te enseñamos a usarlo"

**Transparencia**:
- "Precio desde $XXX, sin sorpresas"
- "Sin letra chica"
- "Pagas solo por lo que necesitas"
- "Cancela cuando quieras"

**Cercanía**:
- "Hablamos español claro"
- "Somos personas reales, no robots"
- "Basados en [ciudad]"
- "WhatsApp directo con el equipo"

### ❌ NUNCA Usar (Lenguaje Técnico)

**Términos Prohibidos**:
- API, RESTful, GraphQL
- Frontend, Backend, Full-stack
- React, Next.js, Node.js
- TypeScript, JavaScript
- Microservicios, monolito
- CI/CD, DevOps, deployment
- Lighthouse, performance
- SEO score, Core Web Vitals
- Database, PostgreSQL, Prisma
- Framework, library, bundle

**Excepciones**: Solo usar términos técnicos si el cliente los menciona primero

---

## 🎨 Guía de Contenido por Parte

### PARTE 1: Landing Page

**Hero Section - Mensaje Principal**:
```
❌ "Desarrollamos soluciones web modernas con stack de vanguardia"
✅ "Más Clientes para tu Negocio con Presencia Digital"

❌ "Full-stack development con React, Node.js y PostgreSQL"
✅ "Páginas web, tiendas online y sistemas que aumentan ventas"
```

**Servicios - Lenguaje Simple**:
```
❌ "Desarrollo de API RESTful con autenticación JWT"
✅ "Sistema Personalizado - Automatiza tareas repetitivas de tu negocio"

Incluye:
• Qué es (1 párrafo simple)
• Para quién (tipos de negocio)
• Beneficios medibles (%, $, horas)
• Precio aproximado visible
• Ejemplos visuales (NO código)
```

**Casos de Éxito - Estructura**:
```
Nombre: Panadería Don José
Industria: Alimentos

Problema: "Perdíamos clientes porque solo atendíamos por teléfono"

Solución: Sistema de pedidos online con WhatsApp

Resultados (6 meses):
• +40% en ventas
• 10 horas/semana ahorradas
• 0 pedidos perdidos

Testimonio con foto del dueño
```

---

### PARTE 2: Portal Cliente

**Dashboard - Lenguaje Cliente**:
```
❌ "Progress: 75% | TTI: 2.3s | Lighthouse: 98"
✅ "Tu Proyecto: 75% completado | Próximo hito: 15 Nov"

Estado del Proyecto:
✓ Diseño completado
🔄 Desarrollo en progreso (75%)
⏳ Integración de pagos (próximo)

Pagos:
• Pagado: $1,500,000 de $2,000,000
• Próximo pago: $500,000 (vence 10 Dic)
```

**Hitos - Explicados Simple**:
```
❌ "Sprint 3: Frontend development with React components"
✅ "Desarrollo de tu Tienda - En progreso"

Qué estamos haciendo:
• Página de inicio: ✅ Listo
• Catálogo de productos: ✅ Listo
• Carrito de compras: 🔄 80% completado
• Proceso de pago: ⏳ Próximo

Fecha estimada: 18 Noviembre
```

---

### PARTE 3: Panel Admin

**Dashboard Admin - Métricas Internas**:
```
Aquí SÍ podemos usar lenguaje técnico (solo para equipo):

Proyectos Activos: 8
- Boutique María: 75% | React + Shopify API
- Panadería José: 90% | Next.js + Stripe

Leads Nuevos: 23
- High priority (score >70): 3
- Requieren seguimiento hoy: 5

Performance:
- API response time: 145ms avg
- Frontend Lighthouse: 96
```

**Diferencia Clave**: En admin podemos ser técnicos porque son desarrolladores. En portal cliente, NUNCA términos técnicos.

---

## 📝 Protocolo de Trabajo con Claude

### Al Iniciar Sesión

1. **SIEMPRE leer**:
   - planning.md (arquitectura completa)
   - task.md (tareas pendientes)
   - claude.md (este archivo)

2. **Verificar enfoque**:
   - ¿El contenido es para Landing o Portal Cliente? → Lenguaje PYME
   - ¿Es para Panel Admin? → Puede ser técnico
   - ¿Evité términos técnicos donde corresponde? ✅

3. **Checkear prioridades**:
   - Ver sección "URGENTE" en task.md
   - Identificar siguiente milestone
   - Revisar dependencias

### Al Crear Contenido

**Checklist OBLIGATORIO para Landing/Portal Cliente**:
- [ ] ¿Lo entendería alguien sin conocimiento técnico?
- [ ] ¿El beneficio está en los primeros 10 segundos?
- [ ] ¿Hay números/resultados concretos?
- [ ] ¿Incluye prueba social? (caso, testimonio)
- [ ] ¿El CTA es claro?
- [ ] ¿Suena humano y cercano?
- [ ] ¿Evité TODO lenguaje técnico?

**Para Panel Admin** (solo equipo interno):
- Aquí SÍ puedes usar lenguaje técnico
- Métricas técnicas permitidas
- Términos de desarrollo OK

### Al Completar Tareas

1. Marcar como completada en task.md: [✅]
2. Agregar nota si hubo cambios importantes
3. Actualizar fecha de modificación
4. Si descubriste nuevas tareas, agregarlas

---

## 📋 Templates Reutilizables

### Template: Descripción de Servicio (Landing)

```markdown
# [NOMBRE DEL SERVICIO EN LENGUAJE SIMPLE]

## Qué Es (1 línea)
[Descripción ultra-simple del servicio]

## Para Quién Es
Ideal si tu negocio es:
- [Tipo de negocio 1]
- [Tipo de negocio 2]
- [Tipo de negocio 3]

## Problemas que Resuelve
❌ [Dolor 1 actual]
❌ [Dolor 2 actual]
❌ [Dolor 3 actual]

## Beneficios
✓ [Beneficio 1 medible]
✓ [Beneficio 2 medible]
✓ [Beneficio 3 medible]

## Qué Incluye
- [Feature 1 en lenguaje simple]
- [Feature 2 en lenguaje simple]
- [Feature 3 en lenguaje simple]
- Soporte y capacitación

## Precio
Desde $XXX + $XX/mes
[Link: Ver planes completos]

[CTA: "Quiero este servicio"]
```

### Template: Caso de Éxito

```markdown
# [Nombre del Negocio]

**Industria**: [Restaurante / Tienda / Servicios]
**Ubicación**: [Ciudad, Región]

## Antes de ARKIA
"[Problema que tenían, en sus palabras]"

**Problemas específicos**:
- [Problema 1 con impacto]
- [Problema 2 con impacto]
- [Problema 3 con impacto]

## Solución
[Descripción simple, SIN términos técnicos]

## Resultados (X meses después)
• [Métrica 1]: +X%
• [Métrica 2]: X horas ahorradas
• [Métrica 3]: $XXX ahorrados

## Testimonio
"[Cita del dueño, 2-3 oraciones]"

⭐⭐⭐⭐⭐ (5/5)

- [Nombre], [Cargo]
  [Nombre del Negocio]

[Fotos: Local, dueño, screenshots]
[Video testimonial: 1-2 minutos]
```

### Template: Notificación al Cliente

```markdown
Asunto: ✅ Hito Completado: [Nombre del Hito]

Hola [Nombre],

¡Buenas noticias! Completamos:
"[Nombre del Hito]"

Qué hicimos:
• [Logro 1 explicado simple]
• [Logro 2 explicado simple]
• [Logro 3 explicado simple]

Puedes verlo aquí: [Link al portal]

Próximo paso:
[Siguiente hito] (estimado: [fecha])

¿Dudas? Responde este email o escríbenos.

Equipo ARKIA
```

---

## 🚨 Errores Comunes a Evitar

### Error #1: Lenguaje Técnico
❌ "Implementamos autenticación JWT con refresh tokens"
✅ "Tu sistema es seguro, solo usuarios autorizados entran"

### Error #2: Features sin Beneficios
❌ "Incluye dashboard administrativo responsivo"
✅ "Ves tus ventas y clientes desde tu celular"

### Error #3: Proceso Complicado
❌ "Fase de discovery, wireframing, sprint planning, QA..."
✅ "1. Conversamos → 2. Creamos → 3. Lanzamos"

### Error #4: Sin Prueba Social
❌ "Hacemos excelentes páginas web"
✅ "La Panadería Don José aumentó 40% sus ventas"

### Error #5: CTA Confuso
❌ "Solicitar información adicional complementaria"
✅ "Agendar llamada gratis"

### Error #6: Ausencia de Números
❌ "Mejoramos significativamente tu negocio"
✅ "+35% ventas en promedio para nuestros clientes"

### Error #7: Sin Transparencia de Precio
❌ "Contáctanos para obtener cotización personalizada"
✅ "Desde $XXX/mes - Ver planes completos"

---

## ✅ Checklist Final Antes de Publicar

### Contenido (Landing/Portal Cliente)
- [ ] ¿0 términos técnicos sin explicar?
- [ ] ¿Beneficios claros en primeros 10 seg?
- [ ] ¿Al menos 1 número/resultado concreto?
- [ ] ¿Incluye prueba social?
- [ ] ¿CTA claro y simple?
- [ ] ¿Tono cercano y humano?

### Contenido (Panel Admin)
- [ ] ¿Métricas técnicas útiles para el equipo?
- [ ] ¿Información completa para gestión?
- [ ] ¿Filtros y acciones claras?

### Visual (Todas las partes)
- [ ] ¿Fotos reales (no stock)?
- [ ] ¿Íconos apropiados?
- [ ] ¿Colores según guía (Cyan, Blue, Green)?
- [ ] ¿Responsive mobile-first?
- [ ] ¿CTAs visibles?

### Funcional
- [ ] ¿Formularios funcionan?
- [ ] ¿Links correctos?
- [ ] ¿Carga rápido (<3 seg)?
- [ ] ¿Sin errores de consola?

---

## 🎯 Ejemplos de Transformación

### Ejemplo 1: Hero Section

**❌ ANTES (Técnico)**:
```
Desarrollo Full-Stack de Aplicaciones Web Modernas

Expertos en React, Next.js, Node.js y PostgreSQL
Arquitecturas escalables con microservicios
CI/CD automatizado y deploy continuo

[Solicitar demo técnico]
```

**✅ AHORA (Comercial)**:
```
Más Clientes para tu Negocio con Presencia Digital

Páginas web, tiendas online y sistemas que 
aumentan ventas y ahorran tiempo

+35% ventas en promedio | 4-6 semanas | Desde $XXX

[Agenda una llamada gratis] [Ver casos de éxito]
```

---

### Ejemplo 2: Actualización de Proyecto

**❌ ANTES (Para cliente - Técnico)**:
```
Update #15

Sprint 3 completed:
- Implemented React components for shopping cart
- Integrated Stripe API with webhook handlers
- Deployed to Vercel with CI/CD pipeline
- Lighthouse score: 96

Next sprint: Backend optimization
```

**✅ AHORA (Para cliente - Simple)**:
```
Avance de tu Tienda Online

¡Progreso al 75%! ✅

Qué completamos esta semana:
• Carrito de compras funcionando
• Sistema de pago con tarjeta listo
• Página publicada para que la pruebes

Próximo paso:
Agregar panel para que gestiones tus productos

Prueba tu tienda: [link]
¿Dudas? Responde o escríbenos
```

---

## 📚 Recursos de Referencia

### Stack Técnico (Solo para desarrollo)
- Next.js, Prisma, PostgreSQL (nunca mencionar al cliente)
- Usar internamente, explicar externamente con beneficios

### Documentación Interna
- planning.md: Arquitectura completa
- task.md: Roadmap y tareas
- architecture.md: Detalles técnicos

### Inspiración de Lenguaje
- Buscar referencias en sitios como Shopify, Wix, Squarespace
- Estudiar cómo explican features técnicas en lenguaje simple

---

**Última actualización**: Octubre 2025  
**Versión**: 3.0 - Proyecto Completo  
**Enfoque**: ✅ Comercial PYME (Landing + Portal) + Técnico (Admin)  
**Próximo paso**: Desarrollar contenido con lenguaje correcto