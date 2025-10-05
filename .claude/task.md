# Task.md - ARKIA (PROYECTO COMPLETO - 3 PARTES)

## 📋 Estado General del Proyecto

- **Fecha de inicio**: Enero 2025
- **Estado actual**: ✅ M0-M1 Completados | 🎯 M2 - SIGUIENTE
- **Enfoque**: Landing comercial PYME + Portal Cliente + Admin Panel
- **Total de partes**: 3 (Landing, Portal, Admin)
- **Duración estimada total**: 14-20 semanas

---

## 🎯 ENFOQUE DEL PROYECTO

### ✅ LO QUE VAMOS A HACER
- **Landing**: Sitio comercial simple para PYMEs
- **Portal Cliente**: Transparencia total del proyecto
- **Panel Admin**: Gestión interna eficiente
- **Lenguaje**: Beneficios de negocio (NO técnico)
- **Objetivo**: Más clientes, ahorro, ventas

### ❌ LO QUE NO VAMOS A HACER
- Sitio técnico para desarrolladores
- Demos de código o terminales
- Lenguaje complicado
- Enfoque en "cómo hacemos" vs "qué logras"

---

## ✅ M0: Project Planning & Setup (COMPLETADO)
**Duración**: 1 semana
**Estado**: ✅ **COMPLETADO**
**Fecha**: Enero 2025

### Documentación Base
- [x] Leer planning.md completo
- [x] Leer claude.md (guía de lenguaje)
- [x] Leer architecture.md (detalles técnicos)
- [x] Leer DESIGN_SYSTEM.md
- [x] Entender las 3 partes del proyecto

### Definición del Proyecto
- [x] Validar nombre: **ARKIA** ✓
- [x] Definir propuesta de valor principal
- [x] Identificar público objetivo (PYMEs)
- [x] Listar servicios principales (4)
- [x] Definir diferenciadores clave
- [x] Crear PROJECT_DEFINITION.md

### Setup Inicial
- [x] Crear repositorio Git
- [x] Configurar .gitignore
- [x] Crear README.md básico
- [x] Crear estructura de carpetas base
- [x] Variables de entorno (.env.example)
- [x] Commit inicial

### Branding Inicial
- [x] Paleta de colores definida (Cyan, Blue, Green)
- [x] Tipografía seleccionada (en DESIGN_SYSTEM.md)
- [x] Tono de voz documentado (en PROJECT_DEFINITION.md)
- [ ] Logo en diferentes formatos (pendiente para M1)

---

## ✅ M1: Project Foundation (COMPLETADO)
**Duración**: 1 semana
**Estado**: ✅ **COMPLETADO**
**Fecha**: Enero 2025

### Frontend Setup
- [x] Inicializar proyecto Next.js 15+
- [x] Configurar TypeScript
- [x] Instalar Tailwind CSS v4
- [x] Configurar shadcn/ui
- [x] Setup ESLint + Prettier
- [ ] Configurar Husky (pre-commit hooks) - Pendiente para M2
- [x] Instalar Framer Motion

### Estructura de Carpetas
```
src/
├── app/              # Next.js App Router
├── components/
│   ├── atoms/        # Botones, inputs, etc.
│   ├── molecules/    # Cards, forms, etc.
│   ├── organisms/    # Navbar, footer, etc.
│   └── sections/     # Hero, benefits, etc.
├── lib/
│   ├── utils/        # Utilidades
│   └── constants/    # Constantes
└── styles/           # Global styles
```

- [x] Crear estructura de carpetas
- [x] Configurar path aliases (@/)
- [x] Setup de fonts (Inter)

### Layout Base
- [x] Layout principal
- [x] Navbar básico
- [x] Footer básico
- [x] Page wrapper
- [x] Metadata SEO base

### Componentes Base
- [x] Button component (shadcn/ui style)
- [x] Utils (cn function)

### Testing Setup
- [ ] Configurar testing (pendiente para M2)
- [x] Scripts de npm (dev, build, start, lint)

---

## 🎯 M2: CONTENIDO Y MENSAJE COMERCIAL (2 semanas)
**Estado**: ⏳ Pendiente

### Definir Mensajes Clave del Landing

#### Mensaje Principal del Hero
- [ ] **Título principal**
  - ✅ Ejemplo: "Más Clientes para tu Negocio con Presencia Digital"
  - ❌ Evitar: "Desarrollamos soluciones web modernas"

- [ ] **Subtítulo** (1 línea clara)
  - Beneficio principal
  - Para quién es

- [ ] **CTAs**
  - CTA principal: "Agenda una llamada gratis"
  - CTA secundario: "Ver casos de éxito"

#### 3 Beneficios Principales
- [ ] **Beneficio 1**: Vende 24/7 sin estar presente
  - Título corto
  - Descripción (2-3 líneas)
  - Ícono apropiado

- [ ] **Beneficio 2**: Ahorra tiempo en tareas manuales
  - Título corto
  - Descripción (2-3 líneas)
  - Ícono apropiado

- [ ] **Beneficio 3**: Compite con grandes empresas
  - Título corto
  - Descripción (2-3 líneas)
  - Ícono apropiado

### Crear Sección de Servicios

#### Servicio 1: Página Web Profesional
- [ ] Descripción: "Tu negocio online 24/7"
- [ ] Beneficios (3-4 bullets)
- [ ] Para quién: Restaurantes, consultorios, servicios
- [ ] Qué incluye (lista simple)
- [ ] Precio aproximado: Desde $XXX
- [ ] Ejemplos visuales (NO código)
- [ ] CTA: "Quiero esto"

#### Servicio 2: Tienda Online
- [ ] Descripción: "Vende por internet y cobra con tarjeta"
- [ ] Beneficios (3-4 bullets)
- [ ] Para quién: Boutiques, artesanías, retail
- [ ] Qué incluye
- [ ] Precio: Desde $XXX + $XX/mes
- [ ] Demo navegable (screenshot)
- [ ] CTA: "Solicitar demo"

#### Servicio 3: Sistema Personalizado
- [ ] Descripción: "Automatiza tareas repetitivas"
- [ ] Ejemplos: Inventario, reservas, agendamiento
- [ ] Para quién: Variado según necesidad
- [ ] Casos de uso por industria
- [ ] Precio: "Desde $XXX"
- [ ] CTA: "Agendar reunión"

#### Servicio 4: App Móvil
- [ ] Descripción: "Tus clientes te llevan en el bolsillo"
- [ ] Beneficios: Fidelización, notificaciones
- [ ] Para quién
- [ ] Screenshots de apps reales
- [ ] Precio: Cotización personalizada
- [ ] CTA: "Consultar"

### Documentar Casos de Éxito (Mínimo 3-4)

**Estructura por caso**:
- Nombre del negocio + foto
- Industria
- Problema (en sus palabras)
- Solución (sin términos técnicos)
- Resultados medibles (%, $, tiempo)
- Testimonio con foto del dueño
- Screenshots (sin código)

#### Caso 1: Panadería con Pedidos Online
- [ ] Nombre: Panadería Don José
- [ ] Industria: Alimentos
- [ ] Problema: "Perdíamos clientes porque solo atendíamos por teléfono"
- [ ] Solución: Sistema de pedidos vía WhatsApp y web
- [ ] Resultados: "+40% en ventas, 10 hrs/semana ahorradas"
- [ ] Testimonio de José Pérez con foto
- [ ] Screenshots del sistema

#### Caso 2: Consultora con Agenda Online
- [ ] Nombre: [Definir]
- [ ] Problema: "Secretaria gastaba 5 hrs/día agendando citas"
- [ ] Solución: Sistema de auto-agendamiento
- [ ] Resultados: "Ahorro de $XXX/mes, 0 llamadas perdidas"

#### Caso 3: Tienda de Ropa
- [ ] Nombre: [Definir]
- [ ] Problema: "Solo vendíamos en local físico"
- [ ] Solución: Catálogo online con WhatsApp
- [ ] Resultados: "35% de ventas online"

#### Caso 4: Restaurante (Opcional)
- [ ] Nombre: [Definir]
- [ ] Problema: "Menús sucios, atención lenta"
- [ ] Solución: Menú digital + pedidos
- [ ] Resultados: "Mejor experiencia cliente"

---

## 🎨 M3: Diseño Visual y Componentes (2 semanas)
**Estado**: ⏳ Pendiente

### Componentes de Negocio (NO técnicos)

#### Calculadora de Ahorro/ROI
- [ ] Input: "¿Cuántas horas gastas en [tarea]?"
- [ ] Output: "Ahorrarías $XXX al mes"
- [ ] Diseño atractivo
- [ ] Interactivo

#### Comparador Antes/Después
- [ ] Slider visual
- [ ] Antes: Manual, lento, limitado
- [ ] Después: Automático, rápido, escalable
- [ ] Animación suave

#### Timeline de Proceso (5 pasos)
- [ ] Paso 1: Conversamos (30 min gratis)
- [ ] Paso 2: Proponemos (ejemplo + precio)
- [ ] Paso 3: Creamos (4-6 semanas)
- [ ] Paso 4: Probamos (juntos)
- [ ] Paso 5: Acompañamos (soporte)
- [ ] Íconos apropiados
- [ ] Animación al scroll

#### Widget de Testimonios
- [ ] Carrusel con fotos reales
- [ ] Citas cortas
- [ ] Rating (estrellas)
- [ ] Link a video testimonial (opcional)
- [ ] Auto-play

#### Checklist Interactivo
- [ ] "¿Tu negocio tiene...?"
- [ ] Checkboxes interactivos
- [ ] Resultado: "Te faltan X de 6 elementos clave"
- [ ] CTA al final

### Iconografía
- [ ] Reemplazar íconos técnicos por de negocio
  - ❌ Code, terminal, database
  - ✅ Dinero, reloj, clientes, gráficos

- [ ] Aplicar paleta de colores
  - Cyan: Tecnología, innovación
  - Blue: Confianza, profesionalismo
  - Green: Éxito, crecimiento

---

## 📄 M4: Páginas del Landing Completo (2 semanas)
**Estado**: ⏳ Pendiente

### Página: Inicio (Homepage)
- [ ] Hero con mensaje comercial
- [ ] 3 Beneficios destacados
- [ ] Servicios (cards de 4 servicios)
- [ ] 3 Casos de éxito destacados
- [ ] Proceso en 5 pasos
- [ ] Testimonios (carrusel)
- [ ] Stats de la empresa
- [ ] CTA final: WhatsApp + Formulario

### Página: Servicios (/servicios)
- [ ] Intro general
- [ ] 4 servicios detallados:
  - Qué es
  - Para quién
  - Beneficios
  - Qué incluye
  - Precio
  - Ejemplos
  - CTA

### Página: Casos de Éxito (/casos-exito)
- [ ] Grid de 6-8 casos
- [ ] Filtro por industria
- [ ] Modal/página individual por caso
- [ ] Videos testimoniales embebidos
- [ ] Resultados destacados
- [ ] CTA: "Quiero algo similar"

### Página: Proceso (/proceso)
- [ ] 5 Pasos explicados detalladamente
- [ ] Video corto explicativo (2-3 min)
- [ ] FAQ por etapa
- [ ] Garantías: "Si no te gusta, ajustamos"
- [ ] Tiempos estimados claros
- [ ] CTA: Iniciar proceso

### Página: Precios (/precios)
- [ ] **Paquete Básico - Presencia Digital**
  - Qué incluye
  - Para quién
  - Precio: $XXX
  - CTA: "Contratar"

- [ ] **Paquete Estándar - Tienda Online**
  - Todo lo anterior +
  - Catálogo, carrito, pagos
  - Precio: $XXX + $XX/mes
  - CTA: "Solicitar demo"

- [ ] **Paquete Premium - Personalizado**
  - Desarrollo a medida
  - Ejemplos
  - Precio: "Desde $XXX"
  - CTA: "Agendar reunión"

- [ ] Tabla comparativa
- [ ] Opciones de pago
- [ ] Add-ons disponibles

### Página: Sobre Nosotros (/nosotros)
- [ ] Historia humanizada
- [ ] Equipo con fotos reales
- [ ] Valores de la empresa
- [ ] Ubicación y contacto
- [ ] "Por qué hacemos esto"

### Página: Contacto (/contacto)
- [ ] Formulario simple (3-4 campos)
- [ ] WhatsApp con mensaje pre-cargado
- [ ] Teléfono + horarios
- [ ] Email directo
- [ ] Calendly embebido
- [ ] Tiempo de respuesta: "<24 hrs"

---

## 🔧 M5: Funcionalidades Landing (1.5 semanas)
**Estado**: ⏳ Pendiente

### Backend Setup
- [ ] Inicializar proyecto backend (Node.js + Express)
- [ ] Configurar Prisma ORM
- [ ] Setup PostgreSQL
- [ ] Configurar variables de entorno
- [ ] CORS configuration
- [ ] Error handling middleware

### Sistema de Leads
- [ ] Crear modelo Lead en Prisma
- [ ] POST /api/leads endpoint
- [ ] Validación con Zod
- [ ] Lead scoring automático
- [ ] Guardar en BD
- [ ] Email a equipo ARKIA (Nodemailer/SendGrid)
- [ ] WhatsApp al PM (opcional - Twilio)
- [ ] Auto-respuesta al cliente

### Formulario de Contacto
- [ ] Componente de formulario
- [ ] Validación en tiempo real
- [ ] Mensajes de error claros
- [ ] Auto-save en localStorage
- [ ] Confirmación visual
- [ ] Integración con API

### Integración WhatsApp
- [ ] Botón flotante de WhatsApp
- [ ] Mensaje pre-cargado según página:
  - Servicios: "Hola, me interesa [servicio]"
  - Casos: "Vi el caso de [negocio]..."
  - Precios: "Quiero el plan [X]"

### Integración Calendly
- [ ] Embebido en página de contacto
- [ ] Tipos de reunión:
  - Consulta gratis (30 min)
  - Presentación propuesta (45 min)

### Analytics
- [ ] Google Analytics 4 configurado
- [ ] Eventos tracking:
  - Formulario enviado
  - WhatsApp clickeado
  - Caso de éxito visto
  - Precio revisado
  - CTA clickeado

---

## 📱 M6: Responsive & Mobile (1 semana)
**Estado**: ⏳ Pendiente

### Mobile-First Design
- [ ] Todo perfecto en móvil PRIMERO
- [ ] Menú hamburguesa funcional
- [ ] Botones grandes (fácil tocar)
- [ ] Formularios cómodos
- [ ] WhatsApp flotante visible
- [ ] CTAs claros

### Performance
- [ ] Imágenes optimizadas (WebP)
- [ ] Lazy loading implementado
- [ ] Videos con poster
- [ ] Fuentes optimizadas
- [ ] Code splitting
- [ ] Testing en dispositivos reales

### Testing Responsive
- [ ] iPhone (varios modelos)
- [ ] Android (varios modelos)
- [ ] Tablet (iPad, Android)
- [ ] Desktop (varios tamaños)

---

## 🔐 M7: Sistema de Autenticación (1 semana)
**Estado**: ⏳ Pendiente - **REQUERIDO PARA FASES 2 Y 3**

### Backend Auth
- [ ] Schema User en Prisma
- [ ] Endpoints de autenticación:
  - POST /api/auth/login
  - POST /api/auth/logout
  - POST /api/auth/setup
  - POST /api/auth/forgot-password
  - POST /api/auth/reset-password

- [ ] JWT generation
- [ ] httpOnly cookies
- [ ] Session en Redis
- [ ] Password hashing (bcrypt 12 rounds)
- [ ] Middleware de autenticación
- [ ] Rate limiting en login (5 intentos/15min)

### Frontend Auth
- [ ] useAuth hook compartido
- [ ] AuthProvider (React Context)
- [ ] Protected routes
- [ ] Login page
- [ ] Logout functionality
- [ ] Setup password flow
- [ ] Forgot password flow

---

## 🎥 M8: Contenido Multimedia (2 semanas)
**Estado**: ⏳ Pendiente

### Videos a Crear
- [ ] **Video Hero** (30 segundos)
  - Qué hace ARKIA
  - Para quién
  - Cómo ayuda
  - Tono cercano

- [ ] **Video del Proceso** (2-3 minutos)
  - Los 5 pasos explicados
  - Ejemplos visuales
  - Tono profesional pero cercano

- [ ] **Testimonios en Video** (3-6 videos)
  - Clientes reales
  - Antes/después
  - 1-2 minutos c/u
  - Con subtítulos

### Fotografías
- [ ] Fotos del equipo (profesionales)
- [ ] Fotos de clientes (con permiso)
- [ ] Screenshots de proyectos
- [ ] Fotos de oficina (si aplica)
- [ ] Evitar stock photos

### Contenido Escrito
- [ ] 6-8 Testimonios escritos
- [ ] 6-8 Casos de éxito completos
- [ ] 20-30 FAQs
- [ ] Descripciones de servicios
- [ ] Textos de garantías
- [ ] Historia de ARKIA
- [ ] Biografías del equipo

---

## 🔍 M9: SEO para PYMEs (1.5 semanas)
**Estado**: ⏳ Pendiente

### Keywords Research
- [ ] "página web para [tipo negocio] [ciudad]"
- [ ] "tienda online pyme [ciudad]"
- [ ] "sistema de reservas [ciudad]"
- [ ] "diseño web empresas [ciudad]"
- [ ] "desarrollo web pymes [ciudad]"

### On-Page SEO
- [ ] Meta titles optimizados
- [ ] Meta descriptions persuasivas
- [ ] Headers (H1-H6) con keywords
- [ ] Alt text en todas las imágenes
- [ ] URLs amigables
- [ ] Schema markup:
  - LocalBusiness
  - Service
  - Review
  - FAQPage

### Landing Pages por Industria (opcional)
- [ ] "Página web para restaurantes"
- [ ] "Sistema para consultorías"
- [ ] "Tienda online para boutique"

### Local SEO
- [ ] Google My Business
- [ ] NAP consistente
- [ ] Reviews de clientes
- [ ] Backlinks locales

---

## ✅ M10: Testing & QA (2 semanas)
**Estado**: ⏳ Pendiente

### Testing de Usuario
- [ ] 5-10 personas del público objetivo
- [ ] Preguntas clave:
  - ¿Entiendes qué hacemos?
  - ¿Confiarías en nosotros?
  - ¿El proceso es claro?
  - ¿Los precios son comprensibles?

### A/B Testing
- [ ] 2 versiones del Hero
- [ ] Diferentes CTAs
- [ ] Formulario largo vs corto

### Performance Testing
- [ ] Lighthouse Score >90
- [ ] Velocidad de carga <3 segundos
- [ ] Testing en 3G/4G
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

### Quality Assurance
- [ ] Ortografía y gramática
- [ ] Sin lenguaje técnico
- [ ] Precios actualizados
- [ ] Todos los links funcionan
- [ ] Formularios enviando correctamente
- [ ] Responsive en todos los dispositivos

---

## 🚀 M11: Lanzamiento Landing (1 semana)
**Estado**: ⏳ Pendiente

### Pre-Lanzamiento
- [ ] Comprar dominio (.cl)
- [ ] Configurar DNS
- [ ] Certificado SSL configurado
- [ ] Configurar emails (@arkia.cl)
- [ ] Backup completo del sitio
- [ ] Última revisión completa

### Lanzamiento
- [ ] Deploy a producción (Vercel)
- [ ] Verificar que todo funciona
- [ ] Configurar redirects necesarios
- [ ] Submit sitemap a Google
- [ ] Google Search Console setup
- [ ] Google Analytics verificado

### Post-Lanzamiento
- [ ] Anuncio en redes sociales
- [ ] Email a base de contactos
- [ ] Avisar a clientes actuales
- [ ] Pedir primeras reviews
- [ ] Monitorear errores (Sentry)
- [ ] Responder consultas rápidamente

---

## 👤 FASE 2: PORTAL CLIENTE (4-6 semanas)

## M12: Setup Portal Cliente (1 semana)
**Estado**: ⏳ Pendiente

### Estructura Frontend
- [ ] Nueva app en monorepo: `apps/portal`
- [ ] Auth flow completo
- [ ] Layout base portal
- [ ] Protected routes
- [ ] Navegación del portal

### API Endpoints Nuevos
- [ ] GET /api/client/dashboard
- [ ] GET /api/client/project/:id
- [ ] GET /api/client/files/:projectId
- [ ] POST /api/client/messages
- [ ] POST /api/client/payments/generate
- [ ] GET /api/client/payments

---

## M13: Dashboard del Cliente (1.5 semanas)
**Estado**: ⏳ Pendiente

### Vista Principal
- [ ] Resumen del proyecto actual
- [ ] Progreso visual (%)
- [ ] Próximo hito destacado
- [ ] Stats rápidas:
  - Días transcurridos / total
  - Hitos completados / total
  - Pagos realizados / total
  - Archivos compartidos

- [ ] Actividad reciente (últimos 5)
- [ ] Acciones rápidas:
  - Ver proyecto
  - Enviar mensaje
  - Hacer pago

---

## M14: Vista de Proyecto (2 semanas)
**Estado**: ⏳ Pendiente

### Tabs del Proyecto

**Tab: General**
- [ ] Descripción del proyecto
- [ ] Tipo (en lenguaje simple)
- [ ] Características principales
- [ ] Timeline visual
- [ ] Equipo asignado (fotos)

**Tab: Hitos**
- [ ] Lista de hitos con status
- [ ] Por cada hito:
  - Nombre y descripción
  - Fecha inicio/fin
  - Entregables con links
  - Botón "Aprobar"

**Tab: Archivos**
- [ ] Estructura de carpetas
- [ ] Por archivo:
  - Thumbnail
  - Nombre, tamaño, fecha
  - Botón descargar

**Tab: Mensajes**
- [ ] Chat con el equipo
- [ ] Enviar mensajes
- [ ] Adjuntar archivos
- [ ] Indicador de no leídos

---

## M15: Sistema de Pagos (1 semana)
**Estado**: ⏳ Pendiente

### Vista de Pagos
- [ ] Resumen financiero
- [ ] Historial de pagos
- [ ] Generar nuevo pago
- [ ] Integración WebPay
- [ ] Generar factura automática

---

## M16: Portal Cliente - Polish (1 semana)
**Estado**: ⏳ Pendiente

- [ ] Notificaciones in-app
- [ ] Configuración de cuenta
- [ ] Cambiar contraseña
- [ ] Preferencias de notificaciones
- [ ] Responsive design
- [ ] Testing completo

---

## 🔧 FASE 3: PANEL ADMIN (4-6 semanas)

## M17: Setup Panel Admin (1 semana)
**Estado**: ⏳ Pendiente

### Estructura
- [ ] Nueva app: `apps/admin`
- [ ] Auth con roles
- [ ] Layout base admin
- [ ] Navegación sidebar
- [ ] Protected routes por rol

### Permisos
- [ ] Middleware de roles
- [ ] DEVELOPER: Solo proyectos asignados
- [ ] PROJECT_MANAGER: Todos los proyectos
- [ ] FINANCE: Dashboard financiero
- [ ] SUPERADMIN: Acceso total

---

## M18: Dashboard Admin (1.5 semanas)
**Estado**: ⏳ Pendiente

### Métricas Clave
- [ ] Leads activos
- [ ] Proyectos en progreso
- [ ] Ingresos del mes
- [ ] Tasa de conversión

### Widgets
- [ ] Proyectos activos (top 5)
- [ ] Leads recientes
- [ ] Pagos pendientes
- [ ] Tareas urgentes

---

## M19: CRM de Leads (2 semanas)
**Estado**: ⏳ Pendiente

### Lista de Leads
- [ ] Tabla con filtros
- [ ] Acciones (ver, contactar, convertir)
- [ ] Vista detallada de lead
- [ ] Lead scoring
- [ ] Convertir a cliente

---

## M20: Gestión de Proyectos (2 semanas)
**Estado**: ⏳ Pendiente

### Vista de Proyectos
- [ ] Lista con filtros
- [ ] Kanban view
- [ ] CRUD de proyectos
- [ ] Gestión de hitos
- [ ] Vista detallada

---

## M21: Dashboard Financiero (1.5 semanas)
**Estado**: ⏳ Pendiente

### Overview Financiero
- [ ] Ingresos y gastos
- [ ] Pagos y facturas
- [ ] Reportes exportables

---

## M22: Gestión de Clientes (1 semana)
**Estado**: ⏳ Pendiente

- [ ] Lista de clientes
- [ ] Perfil de cliente
- [ ] Historial

---

## M23: Analytics y Reportes (1 semana)
**Estado**: ⏳ Pendiente

- [ ] Dashboard de métricas
- [ ] Reportes exportables

---

## M24: Configuración del Sistema (1 semana)
**Estado**: ⏳ Pendiente

- [ ] Settings generales
- [ ] Configuración de pagos
- [ ] Email settings
- [ ] Integraciones

---

## 🎯 PRIORIDADES INMEDIATAS

### ⚡ ESTA SEMANA (M0)
1. [ ] Leer toda la documentación
2. [ ] Entender el enfoque comercial PYME
3. [ ] Crear repositorio GitHub
4. [ ] Definir propuesta de valor
5. [ ] Listar servicios principales

### 🔥 PRÓXIMA SEMANA (M1)
1. [ ] Setup de Next.js + Tailwind + shadcn/ui
2. [ ] Estructura de carpetas
3. [ ] Layout base
4. [ ] Navbar y Footer básicos

### 📅 PRÓXIMAS 2 SEMANAS (M2)
1. [ ] Definir mensaje del Hero
2. [ ] Escribir 3 beneficios
3. [ ] Documentar 4 servicios
4. [ ] Crear 3-4 casos de éxito

---

## 📝 Checklist de Contenido

### Textos Necesarios
- [ ] Hero (título + subtítulo)
- [ ] 3 Beneficios
- [ ] 4 Servicios
- [ ] 6-8 Casos de éxito
- [ ] 10-15 Testimonios
- [ ] Proceso (5 pasos)
- [ ] 3 Paquetes de precio
- [ ] Historia de ARKIA
- [ ] 20-30 FAQs

### Assets Visuales
- [ ] Logo
- [ ] Fotos equipo
- [ ] Fotos clientes
- [ ] Screenshots proyectos
- [ ] Íconos (servicios, beneficios, proceso)
- [ ] Video hero
- [ ] Video proceso
- [ ] Videos testimoniales

---

## 📊 Progreso General

### Completado
- ✅ M0: Project Planning & Setup
  - Documentación completa leída
  - Propuesta de valor definida
  - Repositorio Git inicializado
  - Estructura de carpetas creada
  - Archivos base configurados

- ✅ M1: Project Foundation
  - Next.js 15.5.4 configurado
  - TypeScript + Tailwind CSS v4
  - shadcn/ui base
  - ESLint + Prettier
  - Framer Motion instalado
  - Navbar y Footer básicos
  - Layout principal

### En Progreso
- Ninguno actualmente

### Pendiente
- ⏳ M2: Contenido y Mensaje Comercial (SIGUIENTE)
- ⏳ M3-M24

---

**Última actualización**: Enero 2025
**Versión**: 4.0 - RESET COMPLETO
**Estado**: ✅ M0-M1 Completados | 🎯 M2 SIGUIENTE
**Total milestones**: 25 (M0-M24)
**Duración estimada**: 14-20 semanas
**Progreso**: 2/25 milestones (8%)
**Próximo paso**: M2 - Contenido y Mensaje Comercial
