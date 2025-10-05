# Planning.md - ARKIA (PROYECTO COMPLETO)

## 🎯 Visión del Proyecto Completo

### Objetivo Principal
Crear un **ecosistema digital integral** compuesto por 3 aplicaciones interconectadas:

1. **Landing Page Pública**: Captar y convertir leads de PYMEs
2. **Portal Cliente**: Clientes gestionan sus proyectos y pagos
3. **Panel Admin**: ARKIA gestiona proyectos, finanzas y operaciones

### Propuesta de Valor por Componente

#### 1️⃣ Landing Page (Público)
- **Usuarios**: Visitantes anónimos, potenciales clientes PYME
- **Objetivo**: Generar confianza y convertir a leads cualificados
- **Métrica**: >8% conversión visitante → lead

#### 2️⃣ Portal Cliente (Autenticado)
- **Usuarios**: Clientes activos de ARKIA
- **Objetivo**: Transparencia total del proyecto y autogestión
- **Métrica**: >90% satisfacción, <5% consultas de seguimiento

#### 3️⃣ Panel Admin (Interno)
- **Usuarios**: Equipo ARKIA (desarrolladores, PM, finanzas)
- **Objetivo**: Operación eficiente y data-driven
- **Métrica**: -50% tiempo en gestión manual

---

## 🏗️ Arquitectura General del Sistema

### Diagrama de Alto Nivel

```
┌─────────────────────────────────────────────────────┐
│                   FRONTEND (Next.js)                │
├─────────────────┬─────────────────┬─────────────────┤
│  Landing Page   │  Portal Cliente │   Panel Admin   │
│   (Público)     │  (Autenticado)  │   (Interno)     │
└────────┬────────┴────────┬────────┴────────┬────────┘
         │                 │                 │
         └─────────────────┼─────────────────┘
                           │
                    ┌──────▼──────┐
                    │  API REST   │
                    │  (Node.js)  │
                    └──────┬──────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌────▼────┐      ┌────▼────┐
    │PostgreSQL│      │  Redis  │      │Cloudinary│
    │(Prisma)  │      │ (Cache) │      │ (Files) │
    └──────────┘      └─────────┘      └─────────┘
```

### Stack Tecnológico Unificado

#### Frontend Monorepo
```javascript
// Estructura de carpetas
arkia-frontend/
├── apps/
│   ├── landing/          // Landing page pública
│   ├── client-portal/    // Portal del cliente
│   └── admin-panel/      // Panel administrativo
├── packages/
│   ├── ui/              // Componentes compartidos (shadcn/ui)
│   ├── auth/            // Lógica de autenticación
│   ├── api-client/      // Cliente API compartido
│   └── utils/           // Utilidades comunes
└── package.json

// Stack común
- Next.js 15+ (App Router)
- TypeScript 5+
- Tailwind CSS v4
- shadcn/ui
- React Query (cache y estado servidor)
- Zustand (estado cliente)
- React Hook Form + Zod
```

#### Backend API Unificada
```javascript
arkia-backend/
├── src/
│   ├── modules/
│   │   ├── auth/          // Autenticación (JWT + sessions)
│   │   ├── users/         // Usuarios (clientes + admin)
│   │   ├── projects/      // Gestión de proyectos
│   │   ├── payments/      // Pagos y facturación
│   │   ├── leads/         // Leads del landing
│   │   ├── files/         // Upload y gestión de archivos
│   │   └── analytics/     // Métricas y reportes
│   ├── middleware/        // Auth, validation, rate-limit
│   ├── utils/             // Helpers
│   └── config/            // Configuración
└── prisma/
    └── schema.prisma      // Schema único para todo

// Stack
- Node.js 18+ LTS
- Express.js o Fastify
- Prisma ORM
- PostgreSQL 15+
- Redis (sessions + cache)
- JWT + httpOnly cookies
- Zod (validación)
```

---

## 📊 Base de Datos - Schema Completo

### Tablas Principales

```prisma
// prisma/schema.prisma

// ============================================
// AUTENTICACIÓN Y USUARIOS
// ============================================

enum UserRole {
  CLIENT      // Cliente de ARKIA
  ADMIN       // Equipo ARKIA
  SUPERADMIN  // Owner/fundador
}

model User {
  id            String   @id @default(cuid())
  email         String   @unique
  passwordHash  String
  role          UserRole @default(CLIENT)
  
  // Información personal
  firstName     String
  lastName      String
  phone         String?
  company       String?
  
  // Estado
  isActive      Boolean  @default(true)
  emailVerified Boolean  @default(false)
  
  // Timestamps
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  lastLoginAt   DateTime?
  
  // Relaciones
  projects      Project[]  @relation("ClientProjects")
  payments      Payment[]
  messages      Message[]
  sessions      Session[]
  
  @@map("users")
}

model Session {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())
  
  @@map("sessions")
}

// ============================================
// LEADS (desde Landing Page)
// ============================================

enum LeadStatus {
  NEW           // Recién llegó
  CONTACTED     // Ya contactamos
  QUALIFIED     // Lead cualificado
  PROPOSAL_SENT // Propuesta enviada
  WON           // Se convirtió en cliente
  LOST          // No se concretó
}

model Lead {
  id            String     @id @default(cuid())
  
  // Información de contacto
  name          String
  email         String
  phone         String?
  company       String?
  
  // Información del proyecto
  serviceType   String     // "web", "ecommerce", "custom", "mobile"
  budget        String?    // Rango de presupuesto
  message       String     @db.Text
  
  // Lead scoring
  score         Int        @default(0)
  status        LeadStatus @default(NEW)
  
  // Seguimiento
  assignedTo    String?    // ID del admin asignado
  notes         String?    @db.Text
  
  // Fuente
  source        String?    // "landing", "referral", "ads"
  utmSource     String?
  utmMedium     String?
  utmCampaign   String?
  
  // Timestamps
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
  contactedAt   DateTime?
  
  @@map("leads")
}

// ============================================
// PROYECTOS
// ============================================

enum ProjectStatus {
  PROPOSAL      // En propuesta
  APPROVED      // Propuesta aprobada
  IN_PROGRESS   // En desarrollo
  REVIEW        // En revisión del cliente
  COMPLETED     // Completado
  ON_HOLD       // Pausado
  CANCELLED     // Cancelado
}

enum ProjectType {
  WEB_BASIC      // Página web básica
  ECOMMERCE      // Tienda online
  CUSTOM_SYSTEM  // Sistema personalizado
  MOBILE_APP     // App móvil
  MAINTENANCE    // Mantenimiento
}

model Project {
  id              String        @id @default(cuid())
  
  // Información básica
  name            String
  description     String        @db.Text
  type            ProjectType
  status          ProjectStatus @default(PROPOSAL)
  
  // Cliente
  clientId        String
  client          User          @relation("ClientProjects", fields: [clientId], references: [id])
  
  // Equipo asignado
  assignedDevs    String[]      // Array de IDs de admins
  projectManager  String?       // ID del PM
  
  // Financiero
  budget          Decimal       @db.Decimal(10, 2)
  paid            Decimal       @default(0) @db.Decimal(10, 2)
  
  // Timeline
  estimatedHours  Int?
  startDate       DateTime?
  deadline        DateTime?
  completedAt     DateTime?
  
  // Progreso
  progress        Int           @default(0) // 0-100%
  
  // Timestamps
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  
  // Relaciones
  milestones      Milestone[]
  files           File[]
  payments        Payment[]
  messages        Message[]
  activities      Activity[]
  
  @@map("projects")
}

// ============================================
// MILESTONES (Hitos del Proyecto)
// ============================================

enum MilestoneStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
  APPROVED
}

model Milestone {
  id          String          @id @default(cuid())
  projectId   String
  project     Project         @relation(fields: [projectId], references: [id], onDelete: Cascade)
  
  name        String
  description String?         @db.Text
  status      MilestoneStatus @default(PENDING)
  order       Int             // Orden de ejecución
  
  // Timeline
  startDate   DateTime?
  dueDate     DateTime?
  completedAt DateTime?
  
  // Entregables
  deliverables String[]       // Array de URLs o descripciones
  
  createdAt   DateTime        @default(now())
  updatedAt   DateTime        @updatedAt
  
  @@map("milestones")
}

// ============================================
// PAGOS Y FACTURACIÓN
// ============================================

enum PaymentStatus {
  PENDING    // Pendiente
  PROCESSING // En proceso
  COMPLETED  // Completado
  FAILED     // Falló
  REFUNDED   // Reembolsado
}

enum PaymentMethod {
  WEBPAY
  MERCADOPAGO
  TRANSFER
  CASH
}

model Payment {
  id              String        @id @default(cuid())
  
  // Relaciones
  projectId       String
  project         Project       @relation(fields: [projectId], references: [id])
  userId          String
  user            User          @relation(fields: [userId], references: [id])
  
  // Detalles del pago
  amount          Decimal       @db.Decimal(10, 2)
  currency        String        @default("CLP")
  description     String
  
  // Estado y método
  status          PaymentStatus @default(PENDING)
  method          PaymentMethod
  
  // IDs externos (Webpay, MercadoPago)
  externalId      String?       @unique
  externalUrl     String?       // URL de pago
  
  // Facturación
  invoiceNumber   String?       @unique
  invoiceUrl      String?       // PDF de factura
  
  // Timestamps
  createdAt       DateTime      @default(now())
  paidAt          DateTime?
  
  @@map("payments")
}

// ============================================
// ARCHIVOS Y DOCUMENTOS
// ============================================

enum FileType {
  DOCUMENT    // PDF, DOCX, etc.
  IMAGE       // PNG, JPG, etc.
  VIDEO       // MP4, etc.
  OTHER
}

model File {
  id          String   @id @default(cuid())
  
  // Relaciones
  projectId   String
  project     Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  uploadedBy  String   // User ID
  
  // Información del archivo
  name        String
  type        FileType
  size        Int      // en bytes
  mimeType    String
  
  // URLs
  url         String   // Cloudinary URL
  thumbnailUrl String? // Para imágenes/videos
  
  // Metadata
  description String?
  isPublic    Boolean  @default(false) // ¿Visible para cliente?
  
  createdAt   DateTime @default(now())
  
  @@map("files")
}

// ============================================
// MENSAJES Y COMUNICACIÓN
// ============================================

model Message {
  id        String   @id @default(cuid())
  
  // Relaciones
  projectId String
  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  
  // Contenido
  subject   String?
  content   String   @db.Text
  
  // Estado
  isRead    Boolean  @default(false)
  isInternal Boolean @default(false) // Solo visible para admin
  
  createdAt DateTime @default(now())
  
  @@map("messages")
}

// ============================================
// ACTIVIDAD Y LOGS
// ============================================

enum ActivityType {
  PROJECT_CREATED
  STATUS_CHANGED
  MILESTONE_COMPLETED
  PAYMENT_RECEIVED
  FILE_UPLOADED
  MESSAGE_SENT
  COMMENT_ADDED
}

model Activity {
  id          String       @id @default(cuid())
  
  projectId   String
  project     Project      @relation(fields: [projectId], references: [id], onDelete: Cascade)
  
  type        ActivityType
  description String
  userId      String?      // Quién realizó la acción
  
  metadata    Json?        // Data adicional
  
  createdAt   DateTime     @default(now())
  
  @@map("activities")
}

// ============================================
// CASOS DE ÉXITO (Portfolio)
// ============================================

model CaseStudy {
  id            String   @id @default(cuid())
  
  // Información básica
  title         String
  clientName    String
  industry      String   // "restaurant", "ecommerce", etc.
  location      String
  
  // Contenido
  problemBefore String   @db.Text
  solution      String   @db.Text
  results       String   @db.Text
  testimonial   String   @db.Text
  
  // Métricas
  metricsJson   Json     // {sales: "+40%", time: "10hrs/week"}
  
  // Media
  coverImage    String
  images        String[] // Array de URLs
  videoUrl      String?
  
  // Meta
  featured      Boolean  @default(false)
  published     Boolean  @default(false)
  projectId     String?  // Opcional: vincula a proyecto real
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@map("case_studies")
}

// ============================================
// CONFIGURACIÓN Y SETTINGS
// ============================================

model Settings {
  id    String @id @default("global")
  
  // Configuración del negocio
  businessName     String
  businessEmail    String
  businessPhone    String
  businessAddress  String?
  
  // Redes sociales
  facebookUrl      String?
  instagramUrl     String?
  linkedinUrl      String?
  
  // Configuración de pagos
  webpayEnabled    Boolean @default(false)
  mercadopagoKey   String?
  
  // Email settings
  smtpHost         String?
  smtpPort         Int?
  smtpUser         String?
  smtpPassword     String?
  
  updatedAt        DateTime @updatedAt
  
  @@map("settings")
}
```

---

## 🎨 PARTE 1: Landing Page (Pública)

### Objetivo
Captar leads cualificados de PYMEs sin conocimiento técnico

### Páginas y Secciones

#### 1. Homepage
```
HERO SECTION:
- Título: "Más Clientes para tu Negocio con Presencia Digital"
- Subtítulo: "Páginas web, tiendas online y sistemas que aumentan ventas"
- CTAs: "Agenda llamada gratis" | "Ver casos de éxito"
- Visual: Animación sutil (NO técnica)

BENEFICIOS (3 cards):
1. 🌐 Vende 24/7
2. ⏰ Ahorra Tiempo
3. 💼 Compite con grandes

CASOS DE ÉXITO (3 destacados):
- Cards con nombre, industria, resultado (+40% ventas)
- Link a caso completo

SERVICIOS (4 cards):
- Página Web Profesional
- Tienda Online
- Sistema Personalizado
- App Móvil

PROCESO (5 pasos visuales):
1. Conversamos
2. Proponemos
3. Creamos
4. Probamos
5. Te acompañamos

TESTIMONIOS (carrusel):
- 3-4 clientes con foto real
- Cita corta + link a video

STATS (métricas sociales):
- X proyectos completados
- X clientes satisfechos
- X años de experiencia

CTA FINAL:
- Formulario simple (3 campos)
- WhatsApp flotante
```

#### 2. Servicios
- Detalle de cada servicio
- Qué incluye, para quién, precio
- Casos de uso por industria

#### 3. Casos de Éxito (Portfolio)
- Grid filtrable por industria
- Modal con caso completo
- Videos testimoniales

#### 4. Proceso
- 5 pasos explicados
- Video corto (2-3 min)
- FAQ por etapa

#### 5. Precios
- 3 paquetes visibles
- Comparativa
- CTAs claros

#### 6. Sobre Nosotros
- Historia humanizada
- Equipo con fotos
- Valores

#### 7. Contacto
- Formulario 3 campos
- WhatsApp, teléfono, email
- Calendly embebido

### Funcionalidades Técnicas

```javascript
// Formulario de contacto
POST /api/leads
{
  name: string,
  email: string,
  phone?: string,
  company?: string,
  serviceType: "web" | "ecommerce" | "custom" | "mobile",
  budget?: string,
  message: string,
  source: "landing",
  utm: {
    source?: string,
    medium?: string,
    campaign?: string
  }
}

// Lead scoring automático
- Email corporativo: +20 pts
- Budget >$1M: +30 pts
- Mensaje detallado: +15 pts
- Teléfono incluido: +10 pts

// Notificaciones
- Email al equipo ARKIA
- WhatsApp al PM de turno
- Guardar en BD + CRM
```

---

## 👤 PARTE 2: Portal Cliente

### Objetivo
Cliente gestiona su proyecto con transparencia total

### Acceso y Autenticación

```javascript
// Flujo de registro
1. Admin crea proyecto en Panel Admin
2. Sistema envía email automático al cliente:
   "Bienvenido a ARKIA - Accede a tu proyecto"
   Link: https://arkia.cl/portal/setup?token=XXX
3. Cliente crea contraseña
4. Accede a portal personalizado

// Login
POST /api/auth/login
{
  email: string,
  password: string
}

// Response
{
  user: {
    id, email, firstName, lastName, role: "CLIENT"
  },
  token: "jwt-token",
  redirectTo: "/portal/dashboard"
}
```

### Páginas del Portal Cliente

#### 1. Dashboard
```
URL: /portal/dashboard

RESUMEN DEL PROYECTO:
┌─────────────────────────────────────┐
│ Tienda Online - Boutique María     │
│ Estado: En Desarrollo 🟡            │
│ Progreso: ████████░░ 75%            │
│ Próximo hito: Integración de pagos │
│ Fecha estimada: 15 Nov 2025         │
└─────────────────────────────────────┘

STATS RÁPIDAS:
- Días transcurridos: 28 / 45
- Hitos completados: 3 / 5
- Pagos: $1,500,000 / $2,000,000
- Archivos compartidos: 12

ACTIVIDAD RECIENTE:
✓ 3 Nov - Hito "Diseño visual" completado
📁 2 Nov - Nuevos mockups subidos (3 archivos)
💬 1 Nov - Nuevo mensaje del equipo ARKIA
💰 30 Oct - Pago de $500,000 recibido

ACCIONES RÁPIDAS:
[Ver Proyecto Completo]  [Enviar Mensaje]  [Hacer Pago]
```

#### 2. Detalle del Proyecto
```
URL: /portal/project/[id]

TABS:
┌────────────────────────────────────────┐
│ General │ Hitos │ Archivos │ Mensajes │
└────────────────────────────────────────┘

TAB: GENERAL
- Descripción del proyecto
- Tipo: Tienda Online
- Tecnologías (explicadas simple):
  * Página web moderna
  * Carrito de compras
  * Pagos con tarjeta
  * Panel de administración
- Timeline visual
- Equipo asignado (con fotos)

TAB: HITOS
┌──────────────────────────────────────┐
│ ✅ 1. Planificación y Diseño         │
│    Completado: 15 Oct 2025           │
│    Entregables:                      │
│    • Wireframes [Ver PDF]            │
│    • Paleta de colores               │
│                                       │
│ ✅ 2. Diseño Visual                  │
│    Completado: 3 Nov 2025            │
│    • Mockups [Ver 8 imágenes]        │
│    • Prototipo interactivo [Ver]     │
│                                       │
│ 🔄 3. Desarrollo Frontend            │
│    En progreso (60%)                 │
│    • Páginas principales: ✅         │
│    • Carrito: 🔄                     │
│    • Checkout: ⏳                     │
│    Fecha estimada: 18 Nov            │
│                                       │
│ ⏳ 4. Integración de Pagos           │
│    Pendiente                         │
│    Inicio estimado: 20 Nov           │
│                                       │
│ ⏳ 5. Pruebas y Lanzamiento          │
│    Pendiente                         │
│    Fecha estimada: 5 Dic             │
└──────────────────────────────────────┘

[Botón: Aprobar Hito Actual] (si aplica)

TAB: ARCHIVOS
Carpetas:
├── 📁 Diseño
│   ├── wireframes.pdf (2.3 MB)
│   ├── mockup-home.png (1.8 MB)
│   └── logo-opciones.zip (5.2 MB)
├── 📁 Documentación
│   ├── manual-admin.pdf (890 KB)
│   └── guia-uso.pdf (1.2 MB)
└── 📁 Entregables
    └── demo-v1.mp4 (45 MB)

[Subir Archivo] (solo ciertos tipos)

TAB: MENSAJES
Sistema de chat con el equipo:
┌────────────────────────────────────┐
│ Matías (ARKIA) - 2 Nov, 10:30     │
│ Hola María! Ya subimos los nuevos │
│ mockups. ¿Qué te parecen los      │
│ colores?                           │
│                                    │
│ Tú - 2 Nov, 15:20                 │
│ Me encantan! Solo el botón de     │
│ compra me gustaría más verde.     │
│                                    │
│ Matías (ARKIA) - 3 Nov, 09:15     │
│ Perfecto, lo ajustamos. ¡Listo!   │
└────────────────────────────────────┘

[Textarea para nuevo mensaje]
[Adjuntar archivo]
[Enviar]
```

#### 3. Pagos y Facturación
```
URL: /portal/payments

RESUMEN FINANCIERO:
Total del Proyecto: $2,000,000
Pagado: $1,500,000 (75%)
Pendiente: $500,000

HISTORIAL DE PAGOS:
┌────────────────────────────────────┐
│ ✅ Pago Inicial - $800,000         │
│    30 Oct 2025                     │
│    Método: Transferencia           │
│    Factura: #001-2025 [Descargar] │
│                                    │
│ ✅ Pago Hito 2 - $700,000          │
│    15 Nov 2025                     │
│    Método: WebPay                  │
│    Factura: #002-2025 [Descargar] │
│                                    │
│ ⏳ Pago Final - $500,000           │
│    Vence: 10 Dic 2025              │
│    [Pagar Ahora]                   │
└────────────────────────────────────┘

GENERAR PAGO:
[Selector de monto pendiente]
Métodos disponibles:
○ WebPay (tarjeta)
○ Transferencia bancaria
[Generar Link de Pago]
```

#### 4. Configuración
```
URL: /portal/settings

MI CUENTA:
- Nombre: María González
- Email: maria@boutique.cl
- Teléfono: +56 9 8765 4321
- Empresa: Boutique María
[Editar Información]

SEGURIDAD:
- Cambiar contraseña
- Historial de sesiones
- Activar 2FA (opcional)

NOTIFICACIONES:
✅ Email cuando hay nuevo mensaje
✅ Email cuando se completa un hito
✅ Recordatorio de pagos pendientes
☐ Resumen semanal del proyecto
```

### API Endpoints - Portal Cliente

```javascript
// Obtener dashboard
GET /api/client/dashboard
Auth: Required (CLIENT role)
Response: {
  project: {...},
  stats: {...},
  recentActivity: [...],
  upcomingMilestones: [...]
}

// Obtener proyecto completo
GET /api/client/project/:id
Auth: Required (only own projects)
Response: {
  project: {...},
  milestones: [...],
  files: [...],
  team: [...]
}

// Enviar mensaje
POST /api/client/messages
Auth: Required
Body: {
  projectId: string,
  content: string,
  attachments?: string[]
}

// Generar pago
POST /api/client/payments/generate
Auth: Required
Body: {
  projectId: string,
  amount: number,
  method: "webpay" | "transfer"
}
Response: {
  paymentId: string,
  paymentUrl: string (si es webpay),
  bankDetails: {...} (si es transfer)
}

// Aprobar hito
POST /api/client/milestones/:id/approve
Auth: Required
Body: {
  approved: boolean,
  feedback?: string
}
```

---

## 🔧 PARTE 3: Panel Admin

### Objetivo
Gestión eficiente de operaciones, proyectos y finanzas

### Acceso y Roles

```javascript
// Roles de admin
enum AdminRole {
  DEVELOPER,     // Solo ve sus proyectos asignados
  PROJECT_MANAGER, // Ve todos los proyectos
  FINANCE,       // Acceso a finanzas
  SUPERADMIN     // Acceso total
}

// Permisos por rol
DEVELOPER:
  - Ver proyectos asignados
  - Actualizar progreso
  - Subir archivos
  - Enviar mensajes

PROJECT_MANAGER:
  - Todo lo de DEVELOPER
  - Crear/editar proyectos
  - Asignar equipo
  - Ver todos los leads

FINANCE:
  - Ver dashboard financiero
  - Generar facturas
  - Reportes de pagos
  - Gastos e ingresos

SUPERADMIN:
  - Acceso total
  - Gestionar usuarios
  - Configuración del sistema
  - Analytics completo
```

### Páginas del Panel Admin

#### 1. Dashboard Principal
```
URL: /admin/dashboard

MÉTRICAS CLAVE:
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Leads Activos│ Proyectos    │ Ingresos     │ Tasa Conv.   │
│     23       │ En Progreso  │ Este Mes     │              │
│ +5 esta sem  │      8       │ $12,500,000  │    8.5%      │
└──────────────┴──────────────┴──────────────┴──────────────┘

PROYECTOS ACTIVOS:
┌────────────────────────────────────────────────┐
│ 🟡 Boutique María - Tienda Online             │
│    Cliente: María González                     │
│    Progreso: 75% | Dev: Matías | Vence: 5 Dic │
│    [Ver Proyecto]                              │
│                                                 │
│ 🟢 Panadería Don José - Sistema Pedidos       │
│    Cliente: José Pérez                         │
│    Progreso: 90% | Dev: Sebastián | Por cerrar│
│    [Ver Proyecto]                              │
│                                                 │
│ 🔴 Consultora Pérez - Agenda Online           │
│    Cliente: Ana Pérez                          │
│    Progreso: 30% | Dev: Matías | ⚠️ Atrasado  │
│    [Ver Proyecto]                              │
└────────────────────────────────────────────────┘

LEADS RECIENTES (últimos 7 días):
┌────────────────────────────────────────────────┐
│ 🔥 High Priority (3)                           │
│ Carlos Ruiz - Tienda de ropa - $2M+ budget    │
│ [Contactar] [Ver Detalle]                      │
│                                                 │
│ 📧 Medium Priority (12)                        │
│ [Ver todos los leads]                          │
│                                                 │
│ 📝 Low Priority (8)                            │
│ [Ver todos los leads]                          │
└────────────────────────────────────────────────┘

PAGOS PENDIENTES:
- 3 pagos vencen esta semana ($1,200,000)
- 2 facturas sin generar
[Ir a Finanzas]

TAREAS URGENTES:
☐ Responder lead de Carlos Ruiz (2 horas)
☐ Enviar propuesta a Ferretería López (hoy)
☐ Reunión seguimiento Boutique María (mañana 10am)
```

#### 2. Gestión de Leads (CRM)
```
URL: /admin/leads

FILTROS:
[Todos] [Nuevos] [Contactados] [Propuesta Enviada] [Ganados] [Perdidos]
Ordenar por: [Score ▼] [Fecha] [Budget]
Buscar: [____________]

LISTA DE LEADS:
┌────────────────────────────────────────────────────────────┐
│ Carlos Ruiz | carlos@tiendaropa.cl | +56912345678          │
│ Score: 85/100 🔥 | Estado: Nuevo | Hace 2 horas            │
│ Servicio: Tienda Online | Budget: $2M-3M                   │
│ Mensaje: "Necesito urgente tienda online para navidad..."  │
│ Fuente: Google Ads (santiago-tienda-online)                │
│ [Contactar] [Asignar a PM] [Ver Completo] [Marcar perdido] │
├────────────────────────────────────────────────────────────┤
│ Ana Torres | ana@consultora.cl | +56987654321             │
│ Score: 65/100 | Estado: Contactada | Hace 1 día            │
│ Servicio: Sistema Personalizado | Budget: $1M-2M           │
│ Última acción: Llamada programada para mañana 3pm          │
│ [Agregar Nota] [Enviar Propuesta] [Ver Historial]         │
└────────────────────────────────────────────────────────────┘

VISTA DETALLADA (modal o página):
┌─────────────────────────────────────────┐
│ Lead: Carlos Ruiz                        │
│ carlos@tiendaropa.cl | +56912345678      │
│                                          │
│ INFORMACIÓN:                             │
│ • Empresa: Tienda de Ropa Elegante      │
│ • Industria: Retail / Moda               │
│ • Empleados: ~5                          │
│ • Servicio: Tienda Online                │
│ • Budget: $2M-3M CLP                     │
│ • Urgencia: Alta (necesita para navidad) │
│                                          │
│ MENSAJE COMPLETO:                        │
│ "Necesito urgente una tienda online      │
│  para vender antes de navidad. Tengo     │
│  local físico en Providencia pero        │
│  pierdo muchas ventas por no estar       │
│  online. Tengo ~200 productos..."        │
│                                          │
│ SCORE: 85/100                            │
│ ✓ Email corporativo (+20)                │
│ ✓ Budget alto (+30)                      │
│ ✓ Mensaje detallado (+15)                │
│ ✓ Teléfono incluido (+10)                │
│ ✓ Urgencia clara (+10)                   │
│                                          │
│ FUENTE:                                  │
│ Google Ads - santiago-tienda-online      │
│ Landing: /servicios/tienda-online        │
│                                          │
│ SIGUIENTE PASO:                          │
│ [Asignar a: Matías ▼]                    │
│ [Estado: Contactado ▼]                   │
│ Agregar nota:                            │
│ [_____________________________]          │
│ [Programar Llamada] [Enviar Email]       │
│ [Crear Propuesta] [Convertir a Cliente] │
└─────────────────────────────────────────┘
```

#### 3. Gestión de Proyectos
```
URL: /admin/projects

VISTA DE LISTA:
Filtros: [Todos] [En Progreso] [En Revisión] [Completados]
Vista: [Lista] [Kanban] [Timeline]

KANBAN VIEW:
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ Propuesta   │ En Progreso │ Revisión    │ Completados │
│             │             │             │             │
│ ┌─────────┐ │ ┌─────────┐│ ┌─────────┐ │ ┌─────────┐ │
│ │Ferretería│ │ │Boutique ││ │Panadería│ │ │Gimnasio │ │
│ │López    │ │ │María    ││ │Don José │ │ │Fitness  │ │
│ │$1.5M    │ │ │75%      ││ │90%      │ │ │100%     │ │
│ │PM: ---  │ │ │PM: Mat. ││ │PM: Seb. │ │ │10 Oct   │ │
│ └─────────┘ │ └─────────┘│ └─────────┘ │ └─────────┘ │
│             │             │             │             │
│ [+ Nuevo]   │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘

DETALLE DE PROYECTO (admin):
┌────────────────────────────────────────────────┐
│ 🏪 Tienda Online - Boutique María             │
│ Estado: En Progreso 🟡 | Progreso: 75%        │
├────────────────────────────────────────────────┤
│                                                 │
│ INFORMACIÓN GENERAL:                            │
│ Cliente: María González (maria@boutique.cl)    │
│ Tipo: Ecommerce                                │
│ Inicio: 15 Oct 2025                            │
│ Deadline: 5 Dic 2025 (30 días restantes)      │
│                                                 │
│ EQUIPO:                                         │
│ PM: Matías Rojas                               │
│ Desarrolladores: Sebastián López, Matías       │
│ Horas estimadas: 120 hrs                       │
│ Horas consumidas: 85 hrs (71%)                 │
│                                                 │
│ FINANCIERO:                                     │
│ Budget Total: $2,000,000                       │
│ Pagado: $1,500,000 (75%)                       │
│ Pendiente: $500,000                            │
│ Próximo pago: 10 Dic 2025                      │
│                                                 │
│ DESCRIPCIÓN:                                    │
│ Tienda online para boutique de ropa con:       │
│ - Catálogo de ~150 productos                   │
│ - Carrito de compras                           │
│ - Integración WebPay                           │
│ - Panel admin para gestionar productos         │
│ - Sistema de inventario básico                 │
│                                                 │
│ ACCIONES:                                       │
│ [Editar Proyecto] [Actualizar Progreso]        │
│ [Asignar Equipo] [Generar Factura]             │
│ [Ver en Portal Cliente] [Exportar Reporte]     │
└────────────────────────────────────────────────┘

TABS:
┌─────────────────────────────────────────────┐
│ Hitos │ Archivos │ Mensajes │ Actividad    │
└─────────────────────────────────────────────┘

TAB HITOS (admin):
┌────────────────────────────────────────────┐
│ Hito 3: Desarrollo Frontend                │
│ Estado: En Progreso (60%)                  │
│ Asignado: Sebastián López                  │
│ Inicio: 1 Nov | Fin Est: 18 Nov           │
│                                             │
│ Tareas:                                     │
│ ✅ Configurar proyecto Next.js             │
│ ✅ Componentes base                        │
│ ✅ Página de inicio                        │
│ ✅ Página de productos                     │
│ 🔄 Carrito de compras (80%)                │
│ ⏳ Checkout                                 │
│ ⏳ Panel de usuario                         │
│                                             │
│ [Actualizar Progreso]                       │
│ [Marcar Completado]                         │
│ [Agregar Tarea]                             │
│ [Notificar Cliente]                         │
└────────────────────────────────────────────┘

ACTUALIZACIÓN RÁPIDA DE PROGRESO:
┌────────────────────────────────────┐
│ Actualizar Progreso General        │
│                                     │
│ Progreso: [████████░░] 75%         │
│           (arrastra el slider)     │
│                                     │
│ ¿Qué se completó hoy?              │
│ [___________________________]      │
│                                     │
│ Horas trabajadas hoy: [__] hrs     │
│                                     │
│ Siguiente paso:                    │
│ [___________________________]      │
│                                     │
│ ☑️ Notificar al cliente            │
│                                     │
│ [Guardar Actualización]            │
└────────────────────────────────────┘
```

#### 4. Finanzas
```
URL: /admin/finance

DASHBOARD FINANCIERO:
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Ingresos     │ Gastos       │ Utilidad     │ Proyectado   │
│ Este Mes     │ Este Mes     │ Mes          │ Próx. Mes    │
│ $12,500,000  │ $4,200,000   │ $8,300,000   │ $15,000,000  │
│ +15% vs Oct  │ +5% vs Oct   │              │              │
└──────────────┴──────────────┴──────────────┴──────────────┘

GRÁFICA DE INGRESOS (últimos 6 meses):
[Gráfica de barras/líneas]

PAGOS RECIENTES:
┌────────────────────────────────────────────────┐
│ ✅ Boutique María - $700,000                   │
│    15 Nov 2025 | WebPay | Fact: #002-2025     │
│    [Ver Factura] [Enviar Email]                │
│                                                 │
│ ✅ Panadería Don José - $500,000               │
│    10 Nov 2025 | Transferencia | #003-2025    │
│                                                 │
│ ⏳ Consultora Pérez - $400,000                 │
│    Pendiente | Vence: 20 Nov                   │
│    [Enviar Recordatorio] [Generar Link]        │
└────────────────────────────────────────────────┘

FACTURAS:
Filtros: [Todas] [Pagadas] [Pendientes] [Vencidas]
Periodo: [Nov 2025 ▼]

┌────────────────────────────────────────────────┐
│ #002-2025 | Boutique María | $700,000         │
│ 15 Nov 2025 | Pagada ✅                        │
│ [Descargar PDF] [Enviar Email] [Ver Detalles] │
├────────────────────────────────────────────────┤
│ #001-2025 | Boutique María | $800,000         │
│ 30 Oct 2025 | Pagada ✅                        │
│ [Descargar PDF]                                │
└────────────────────────────────────────────────┘

[Generar Nueva Factura]

GENERAR FACTURA (modal):
┌────────────────────────────────────┐
│ Nueva Factura                       │
│                                     │
│ Cliente: [María González ▼]        │
│ Proyecto: [Boutique María ▼]       │
│                                     │
│ Items:                              │
│ 1. [Descripción: Pago Hito 2___]   │
│    Monto: [$700,000_____]           │
│ [+ Agregar Item]                    │
│                                     │
│ Subtotal: $700,000                  │
│ IVA (19%): $133,000                 │
│ TOTAL: $833,000                     │
│                                     │
│ Vencimiento: [20 Nov 2025]          │
│                                     │
│ [Generar Factura]                   │
└────────────────────────────────────┘

GASTOS:
[+ Nuevo Gasto]

┌────────────────────────────────────────────────┐
│ Hosting Vercel - $50,000                       │
│ 1 Nov 2025 | Categoría: Infraestructura        │
│                                                 │
│ Licencias Figma - $30,000                      │
│ 1 Nov 2025 | Categoría: Herramientas           │
│                                                 │
│ Publicidad Google Ads - $200,000               │
│ 31 Oct 2025 | Categoría: Marketing             │
└────────────────────────────────────────────────┘

REPORTES:
[Exportar a Excel] [Exportar a PDF]
- Reporte de ingresos mensual
- Reporte de gastos por categoría
- Estado de cuentas por cobrar
- Proyección de flujo de caja
```

#### 5. Clientes
```
URL: /admin/clients

LISTA DE CLIENTES:
Buscar: [____________]
Filtros: [Activos] [Con proyectos] [Inactivos]

┌────────────────────────────────────────────────┐
│ 👤 María González                              │
│    maria@boutique.cl | +56987654321            │
│    Empresa: Boutique María                     │
│    Proyectos: 1 activo, 0 completados          │
│    Cliente desde: Oct 2025                     │
│    Valor total: $2,000,000                     │
│    [Ver Perfil] [Ver Proyectos] [Enviar Email]│
├────────────────────────────────────────────────┤
│ 👤 José Pérez                                  │
│    jose@panaderia.cl | +56912345678            │
│    Empresa: Panadería Don José                 │
│    Proyectos: 1 activo, 0 completados          │
│    Cliente desde: Sep 2025                     │
│    Valor total: $1,800,000                     │
│    [Ver Perfil] [Ver Proyectos]                │
└────────────────────────────────────────────────┘

PERFIL DE CLIENTE:
┌────────────────────────────────────────────────┐
│ 👤 María González                              │
│                                                 │
│ INFORMACIÓN DE CONTACTO:                        │
│ Email: maria@boutique.cl                       │
│ Teléfono: +56987654321                         │
│ Empresa: Boutique María                        │
│ RUT: 12.345.678-9                              │
│ Dirección: Av. Providencia 1234, Santiago      │
│                                                 │
│ PROYECTOS:                                      │
│ • Tienda Online (En Progreso)                  │
│   Inicio: 15 Oct | Fin Est: 5 Dic              │
│   Pagado: $1,500,000 de $2,000,000             │
│                                                 │
│ HISTORIAL DE PAGOS:                            │
│ Total pagado: $1,500,000                       │
│ Pendiente: $500,000                            │
│ [Ver todos los pagos]                          │
│                                                 │
│ NOTAS INTERNAS:                                │
│ "Cliente muy colaborativo, responde rápido.    │
│  Tiene urgencia por navidad."                  │
│                                                 │
│ ACCIONES:                                       │
│ [Editar Info] [Crear Proyecto] [Ver Portal]   │
│ [Enviar Email] [Programar Llamada]             │
└────────────────────────────────────────────────┘
```

#### 6. Equipo y Usuarios
```
URL: /admin/team

MIEMBROS DEL EQUIPO:
[+ Invitar Miembro]

┌────────────────────────────────────────────────┐
│ Matías Rojas | matias@arkia.cl                │
│ Rol: Superadmin | Developer + PM               │
│ Proyectos activos: 3                           │
│ Horas este mes: 145 hrs                        │
│ [Ver Perfil] [Editar] [Ver Proyectos]         │
├────────────────────────────────────────────────┤
│ Sebastián López | sebastian@arkia.cl           │
│ Rol: Developer                                 │
│ Proyectos activos: 2                           │
│ Horas este mes: 120 hrs                        │
│ [Ver Perfil] [Asignar Proyecto]                │
└────────────────────────────────────────────────┘

CREAR/EDITAR USUARIO:
┌────────────────────────────────────┐
│ Nuevo Miembro del Equipo            │
│                                     │
│ Nombre: [________________]          │
│ Apellido: [________________]        │
│ Email: [________________]           │
│                                     │
│ Rol:                                │
│ ○ Developer                         │
│ ○ Project Manager                   │
│ ○ Finance                           │
│ ○ Superadmin                        │
│                                     │
│ Permisos especiales:                │
│ ☑️ Puede crear proyectos            │
│ ☑️ Puede ver finanzas               │
│ ☐ Puede gestionar equipo            │
│                                     │
│ [Enviar Invitación]                 │
└────────────────────────────────────┘
```

#### 7. Configuración del Sistema
```
URL: /admin/settings

TABS:
┌──────────────────────────────────────────────┐
│ General │ Pagos │ Email │ Integraciones      │
└──────────────────────────────────────────────┘

TAB GENERAL:
┌────────────────────────────────────┐
│ INFORMACIÓN DEL NEGOCIO             │
│                                     │
│ Nombre: [ARKIA_______________]      │
│ Email: [hola@arkia.cl_______]       │
│ Teléfono: [+56 2 XXXX XXXX__]      │
│ Dirección: [________________]       │
│                                     │
│ REDES SOCIALES:                     │
│ Facebook: [________________]        │
│ Instagram: [________________]       │
│ LinkedIn: [________________]        │
│                                     │
│ [Guardar Cambios]                   │
└────────────────────────────────────┘

TAB PAGOS:
┌────────────────────────────────────┐
│ MÉTODOS DE PAGO                     │
│                                     │
│ WebPay:                             │
│ ☑️ Habilitado                       │
│ Commerce Code: [________]           │
│ API Key: [****************]         │
│ [Probar Conexión]                   │
│                                     │
│ Mercado Pago:                       │
│ ☐ Habilitado                        │
│ Access Token: [________________]    │
│                                     │
│ Transferencia Bancaria:             │
│ ☑️ Habilitado                       │
│ Banco: [Banco de Chile_______]      │
│ Cuenta: [XXXX-XXXX-XXXX____]       │
│ RUT: [12.345.678-9_________]        │
│                                     │
│ [Guardar Configuración]             │
└────────────────────────────────────┘

TAB EMAIL:
┌────────────────────────────────────┐
│ CONFIGURACIÓN SMTP                  │
│                                     │
│ Host: [smtp.gmail.com_______]       │
│ Puerto: [587___]                    │
│ Usuario: [hola@arkia.cl_____]       │
│ Contraseña: [**************]        │
│                                     │
│ [Enviar Email de Prueba]            │
│                                     │
│ PLANTILLAS DE EMAIL:                │
│ • Bienvenida nuevo cliente          │
│ • Notificación nuevo hito           │
│ • Recordatorio de pago              │
│ • Proyecto completado               │
│                                     │
│ [Editar Plantillas]                 │
└────────────────────────────────────┘

TAB INTEGRACIONES:
┌────────────────────────────────────┐
│ SERVICIOS EXTERNOS                  │
│                                     │
│ Cloudinary (Archivos):              │
│ ☑️ Conectado                        │
│ Cloud Name: [arkia_______]          │
│ [Reconectar]                        │
│                                     │
│ Google Analytics:                   │
│ ☑️ Activo                           │
│ Tracking ID: [UA-XXXXXX-X]          │
│                                     │
│ Calendly (Agendamiento):            │
│ ☐ No conectado                      │
│ [Conectar Calendly]                 │
│                                     │
│ WhatsApp Business API:              │
│ ☐ No conectado                      │
│ [Configurar WhatsApp]               │
└────────────────────────────────────┘
```

#### 8. Analytics y Reportes
```
URL: /admin/analytics

DASHBOARD DE MÉTRICAS:

KPIs PRINCIPALES (Este mes):
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Leads        │ Conversión   │ Ingresos     │ Proyectos    │
│ Nuevos       │ Lead→Cliente │ Totales      │ Completados  │
│     23       │     8.5%     │ $12,500,000  │      4       │
│ +15% vs mes  │ +2.1% vs mes │ +20% vs mes  │ +1 vs mes    │
└──────────────┴──────────────┴──────────────┴──────────────┘

FUENTES DE LEADS (Este mes):
┌────────────────────────────────────┐
│ Google Ads: 12 (52%)               │
│ Orgánico: 7 (30%)                  │
│ Referidos: 3 (13%)                 │
│ Directo: 1 (4%)                    │
└────────────────────────────────────┘
[Ver gráfica de pastel]

SERVICIOS MÁS SOLICITADOS:
1. Tienda Online: 35%
2. Página Web Básica: 30%
3. Sistema Personalizado: 25%
4. App Móvil: 10%

TIEMPO PROMEDIO POR PROYECTO:
- Página Web: 4.2 semanas
- Tienda Online: 6.8 semanas
- Sistema Custom: 9.5 semanas

SATISFACCIÓN DE CLIENTES:
Promedio: 4.8/5 ⭐⭐⭐⭐⭐
NPS Score: 85

REPORTES DISPONIBLES:
[Exportar] Reporte Mensual Completo
[Exportar] Análisis de Conversión
[Exportar] Performance del Equipo
[Exportar] Flujo de Caja Proyectado
```

### API Endpoints - Panel Admin

```javascript
// ============================================
// LEADS
// ============================================

// Listar leads
GET /api/admin/leads
Auth: Required (PM+)
Query: {
  status?: LeadStatus,
  source?: string,
  sortBy?: "score" | "createdAt" | "budget",
  page?: number
}
Response: {
  leads: [...],
  pagination: {...},
  stats: {totalNew, totalQualified, ...}
}

// Actualizar lead
PATCH /api/admin/leads/:id
Auth: Required (PM+)
Body: {
  status?: LeadStatus,
  assignedTo?: string,
  score?: number,
  notes?: string
}

// Convertir lead a cliente/proyecto
POST /api/admin/leads/:id/convert
Auth: Required (PM+)
Body: {
  projectDetails: {...},
  clientInfo: {...}
}
Response: {
  client: {...},
  project: {...}
}

// ============================================
// PROYECTOS
// ============================================

// Crear proyecto
POST /api/admin/projects
Auth: Required (PM+)
Body: {
  name: string,
  type: ProjectType,
  clientId: string,
  description: string,
  budget: number,
  estimatedHours: number,
  deadline: Date,
  assignedDevs: string[],
  milestones: [...]
}

// Actualizar proyecto
PATCH /api/admin/projects/:id
Auth: Required (PM+)
Body: {
  status?: ProjectStatus,
  progress?: number,
  assignedDevs?: string[],
  notes?: string
}

// Actualizar hito
PATCH /api/admin/milestones/:id
Auth: Required (DEV+)
Body: {
  status?: MilestoneStatus,
  progress?: number,
  completedAt?: Date,
  deliverables?: string[]
}

// ============================================
// CLIENTES
// ============================================

// Listar clientes
GET /api/admin/clients
Auth: Required (PM+)
Response: {
  clients: [...],
  stats: {total, active, totalRevenue}
}

// Ver perfil completo de cliente
GET /api/admin/clients/:id
Auth: Required (PM+)
Response: {
  client: {...},
  projects: [...],
  payments: [...],
  totalRevenue: number
}

// ============================================
// FINANZAS
// ============================================

// Dashboard financiero
GET /api/admin/finance/dashboard
Auth: Required (FINANCE+)
Query: {
  startDate?: Date,
  endDate?: Date
}
Response: {
  income: {...},
  expenses: {...},
  profit: {...},
  projections: {...}
}

// Generar factura
POST /api/admin/finance/invoices
Auth: Required (FINANCE+)
Body: {
  clientId: string,
  projectId: string,
  items: [{description, amount}],
  dueDate: Date
}

// Registrar gasto
POST /api/admin/finance/expenses
Auth: Required (FINANCE+)
Body: {
  amount: number,
  category: string,
  description: string,
  date: Date
}

// ============================================
// ANALYTICS
// ============================================

// Métricas generales
GET /api/admin/analytics/overview
Auth: Required (PM+)
Query: {
  period: "week" | "month" | "quarter" | "year"
}
Response: {
  leads: {...},
  projects: {...},
  revenue: {...},
  conversion: {...}
}

// Exportar reporte
GET /api/admin/analytics/export
Auth: Required (PM+)
Query: {
  type: "monthly" | "conversion" | "performance" | "cashflow",
  format: "pdf" | "excel"
}
Response: File download
```

---

## 🔐 Autenticación y Seguridad

### Sistema de Autenticación Unificado

```javascript
// Flujo de autenticación
1. Usuario hace login (landing, portal, o admin)
2. Backend valida credenciales
3. Genera JWT + crea session en Redis
4. Envía token en httpOnly cookie
5. Frontend guarda en memoria (no localStorage)
6. Requests siguientes incluyen cookie automáticamente
7. Middleware valida token + session en cada request

// JWT Payload
{
  userId: string,
  email: string,
  role: "CLIENT" | "ADMIN" | "SUPERADMIN",
  sessionId: string,
  iat: number,
  exp: number // 7 días
}

// Middleware de autorización
function requireAuth(roles: UserRole[]) {
  return async (req, res, next) => {
    // 1. Extraer token de cookie
    // 2. Verificar JWT
    // 3. Validar session en Redis
    // 4. Verificar rol
    // 5. Adjuntar user a req
    // 6. next() o 401/403
  }
}

// Rate limiting por endpoint
- Login: 5 intentos por 15 min
- API general: 100 req/min por IP
- File upload: 10 archivos/hora por usuario
- Payment generation: 3 req/min por usuario
```

### Seguridad por Capa

```javascript
// Frontend
- No localStorage para tokens (solo httpOnly cookies)
- Input sanitization (XSS protection)
- CSP headers configurados
- HTTPS obligatorio en producción

// API
- Helmet.js para security headers
- CORS configurado estrictamente
- Rate limiting (express-rate-limit)
- Input validation con Zod
- SQL injection prevention (Prisma)
- File upload restrictions (tamaño, tipos)

// Database
- Passwords con bcrypt (12 rounds)
- Prepared statements (Prisma)
- Row-level security en Postgres
- Backups automáticos diarios

// Infraestructura
- Secrets en variables de entorno
- No commits de .env
- API keys rotadas cada 90 días
- Logs de auditoría
```

---

## 📧 Notificaciones y Comunicación

### Sistema de Notificaciones

```javascript
// Tipos de notificaciones

1. EMAIL (vía SMTP):
   - Nuevo lead (a equipo ARKIA)
   - Bienvenida cliente
   - Nuevo hito completado
   - Pago recibido
   - Recordatorio de pago
   - Proyecto completado

2. IN-APP (en portal/admin):
   - Nuevo mensaje
   - Actualización de proyecto
   - Archivo subido
   - Cambio de estado

3. WHATSAPP (opcional):
   - Lead urgente (score >80)
   - Pago vencido
   - Proyecto completado

// Configuración de notificaciones
model NotificationPreferences {
  userId          String @id
  emailOnMessage  Boolean @default(true)
  emailOnMilestone Boolean @default(true)
  emailOnPayment  Boolean @default(true)
  weeklyDigest    Boolean @default(true)
  smsEnabled      Boolean @default(false)
}
```

### Templates de Email

```html
<!-- Bienvenida Cliente -->
Asunto: Bienvenido a ARKIA - Accede a tu Proyecto

Hola {{clientName}},

¡Bienvenido a ARKIA! Estamos emocionados de trabajar contigo en 
{{projectName}}.

Creamos un portal donde podrás:
✓ Ver el progreso de tu proyecto en tiempo real
✓ Revisar archivos y entregables
✓ Comunicarte con el equipo
✓ Gestionar pagos

ACCEDE AQUÍ: {{setupLink}}
(Este link expira en 48 horas)

Una vez dentro, podrás crear tu contraseña y explorar todo.

¿Preguntas? Responde este email o escríbenos a WhatsApp.

¡Comencemos! 🚀

Equipo ARKIA
hola@arkia.cl | +56 2 XXXX XXXX

<!-- Hito Completado -->
Asunto: ✅ Hito Completado: {{milestoneName}}

Hola {{clientName}},

¡Tenemos buenas noticias! Completamos el hito:
"{{milestoneName}}"

ENTREGABLES:
{{#each deliverables}}
- {{this}}
{{/each}}

Puedes revisarlo en tu portal: {{projectLink}}

PRÓXIMO PASO:
{{nextMilestone}} (estimado: {{estimatedDate}})

Si tienes feedback, déjanos saber en el portal o responde 
este email.

¡Seguimos avanzando! 💪

Equipo ARKIA

<!-- Recordatorio de Pago -->
Asunto: Recordatorio: Pago pendiente - {{projectName}}

Hola {{clientName}},

Te recordamos que tienes un pago pendiente:

Proyecto: {{projectName}}
Monto: ${{amount}}
Vencimiento: {{dueDate}}

PAGAR AHORA: {{paymentLink}}

Métodos disponibles:
• WebPay (tarjeta de crédito/débito)
• Transferencia bancaria

¿Algún problema? Escríbenos y lo resolvemos.

Gracias,
Equipo ARKIA
```

---

## 🚀 Estrategia de Desarrollo por Fases

### FASE 1: MVP Landing + Auth (6-8 semanas)

**Objetivo**: Captar leads mientras construimos el resto

**Entregables**:
1. Landing page completa y funcional
2. Sistema de autenticación básico (base para fases 2 y 3)
3. Base de datos con schema completo
4. API base con endpoints de leads

**Tecnologías**:
- Frontend: Next.js 15 (landing en /app/page.tsx)
- Backend: Node + Express básico
- DB: PostgreSQL con Prisma
- Auth: JWT + bcrypt

**Prioridad**:
1. Hero section y formulario de contacto
2. Casos de éxito (3-4 iniciales)
3. Servicios explicados simple
4. Sistema de leads (crear + notificar)
5. Auth básico (registro/login)

**Métricas de Éxito**:
- Landing carga en <3 seg
- >5% conversión visitante → lead
- 0 bugs críticos

---

### FASE 2: Portal Cliente (4-6 semanas)

**Objetivo**: Entregar proyectos profesionalmente con portal

**Entregables**:
1. Dashboard del cliente
2. Vista de proyecto con hitos
3. Sistema de archivos
4. Mensajería cliente-equipo
5. Generación de pagos

**Nuevos Endpoints API**:
```javascript
// Portal Cliente
GET  /api/client/dashboard
GET  /api/client/project/:id
POST /api/client/messages
POST /api/client/payments/generate
GET  /api/client/files/:projectId
```

**Funcionalidades Clave**:
- Cliente ve progreso en tiempo real
- Puede aprobar hitos
- Genera links de pago
- Descarga archivos entregables
- Comunica con equipo

**Métricas de Éxito**:
- >90% clientes usan el portal
- <5% consultas sobre "¿cómo va mi proyecto?"
- 0 pagos perdidos por falta de seguimiento

---

### FASE 3: Panel Admin (4-6 semanas)

**Objetivo**: Optimizar operaciones internas

**Entregables**:
1. Dashboard con métricas
2. Gestión completa de proyectos
3. CRM para leads
4. Dashboard financiero
5. Sistema de reportes

**Nuevos Endpoints API**:
```javascript
// Admin
GET  /api/admin/leads
POST /api/admin/projects
PATCH /api/admin/projects/:id
GET  /api/admin/finance/dashboard
POST /api/admin/finance/invoices
GET  /api/admin/analytics/overview
```

**Funcionalidades Clave**:
- Kanban de proyectos
- Lead scoring automático
- Generación de facturas
- Reportes exportables
- Métricas en tiempo real

**Métricas de Éxito**:
- -50% tiempo en gestión manual
- 100% proyectos trackeados digitalmente
- Reportes generados en <2 clics

---

## 📁 Estructura de Carpetas del Proyecto

### Monorepo Completo

```
arkia-project/
├── frontend/                    # Monorepo Next.js
│   ├── apps/
│   │   ├── landing/            # Landing page pública
│   │   │   ├── app/
│   │   │   │   ├── page.tsx           # Homepage
│   │   │   │   ├── servicios/         # Servicios
│   │   │   │   ├── casos-exito/       # Portfolio
│   │   │   │   ├── precios/           # Pricing
│   │   │   │   └── contacto/          # Contact
│   │   │   ├── components/
│   │   │   │   ├── sections/          # Hero, Benefits, etc.
│   │   │   │   └── forms/             # Contact form
│   │   │   └── public/
│   │   │       └── images/
│   │   │
│   │   ├── portal/             # Portal del cliente
│   │   │   ├── app/
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/
│   │   │   │   │   └── setup/
│   │   │   │   └── (dashboard)/
│   │   │   │       ├── dashboard/     # Dashboard
│   │   │   │       ├── project/       # Proyecto
│   │   │   │       ├── payments/      # Pagos
│   │   │   │       └── settings/      # Config
│   │   │   ├── components/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── project/
│   │   │   │   └── shared/
│   │   │   └── hooks/
│   │   │
│   │   └── admin/              # Panel admin
│   │       ├── app/
│   │       │   ├── (auth)/
│   │       │   │   └── login/
│   │       │   └── (dashboard)/
│   │       │       ├── dashboard/     # Dashboard
│   │       │       ├── leads/         # CRM
│   │       │       ├── projects/      # Proyectos
│   │       │       ├── clients/       # Clientes
│   │       │       ├── finance/       # Finanzas
│   │       │       ├── team/          # Equipo
│   │       │       ├── analytics/     # Analytics
│   │       │       └── settings/      # Config
│   │       ├── components/
│   │       │   ├── leads/
│   │       │   ├── projects/
│   │       │   ├── finance/
│   │       │   └── shared/
│   │       └── hooks/
│   │
│   └── packages/               # Código compartido
│       ├── ui/                 # Componentes UI (shadcn/ui)
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── input.tsx
│       │   └── ...
│       ├── auth/               # Lógica de autenticación
│       │   ├── hooks/
│       │   │   └── useAuth.ts
│       │   ├── providers/
│       │   │   └── AuthProvider.tsx
│       │   └── utils/
│       │       └── auth.ts
│       ├── api-client/         # Cliente API compartido
│       │   ├── client.ts       # Axios/fetch instance
│       │   ├── leads.ts
│       │   ├── projects.ts
│       │   ├── payments.ts
│       │   └── ...
│       └── utils/              # Utilidades
│           ├── format.ts
│           ├── validation.ts
│           └── constants.ts
│
├── backend/                    # API Node.js
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.routes.ts
│   │   │   │   └── auth.validation.ts
│   │   │   ├── users/
│   │   │   │   └── ...
│   │   │   ├── leads/
│   │   │   │   ├── leads.controller.ts
│   │   │   │   ├── leads.service.ts
│   │   │   │   └── leads.routes.ts
│   │   │   ├── projects/
│   │   │   │   └── ...
│   │   │   ├── payments/
│   │   │   │   └── ...
│   │   │   ├── files/
│   │   │   │   └── ...
│   │   │   └── analytics/
│   │   │       └── ...
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   ├── rateLimit.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── utils/
│   │   │   ├── jwt.ts
│   │   │   ├── email.ts
│   │   │   ├── notifications.ts
│   │   │   └── helpers.ts
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── redis.ts
│   │   │   └── env.ts
│   │   └── index.ts            # Entry point
│   ├── prisma/
│   │   ├── schema.prisma       # Schema completo
│   │   ├── migrations/
│   │   └── seed.ts             # Data inicial
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   ├── .env.example
│   └── package.json
│
├── docs/                       # Documentación
│   ├── planning.md             # Este archivo
│   ├── task.md                 # Tareas
│   ├── claude.md               # Guía Claude
│   ├── architecture.md         # Arquitectura técnica
│   ├── api.md                  # Documentación API
│   └── deployment.md           # Guía de deploy
│
└── README.md
```

---

## 🎯 Prioridades Inmediatas

### Semana 1-2: Setup Inicial
- [x] Documentación completa (planning, task, claude)
- [ ] Setup monorepo frontend (Turborepo o Nx)
- [ ] Setup backend básico con Express
- [ ] Configurar Prisma + PostgreSQL
- [ ] Implementar schema de BD completo
- [ ] Sistema de autenticación funcional

### Semana 3-4: Landing MVP
- [ ] Hero section funcional
- [ ] Formulario de contacto con validación
- [ ] 3 casos de éxito documentados
- [ ] Páginas de servicios
- [ ] API endpoint para leads
- [ ] Email notifications funcionando

### Semana 5-6: Landing Completa
- [ ] Todas las páginas del landing
- [ ] Responsive design perfecto
- [ ] Performance optimizado
- [ ] SEO básico implementado
- [ ] Analytics integrado

### Semana 7-8: Portal Cliente Base
- [ ] Login/registro funcional
- [ ] Dashboard básico
- [ ] Vista de proyecto
- [ ] Sistema de archivos
- [ ] Mensajería básica

---

## 🔄 Ciclo de Desarrollo

### Workflow Recomendado

```bash
# 1. Crear feature branch
git checkout -b feature/client-portal-dashboard

# 2. Desarrollar en local
npm run dev  # Levanta frontend + backend

# 3. Testing
npm run test

# 4. Commit con conventional commits
git commit -m "feat(portal): add client dashboard"

# 5. Push y PR
git push origin feature/client-portal-dashboard

# 6. Review y merge
# 7. Deploy automático (GitHub Actions)
```

### Environments

```
Development (local):
- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- DB: PostgreSQL local

Staging:
- Frontend: https://staging.arkia.cl
- Backend: https://api-staging.arkia.cl
- DB: PostgreSQL staging

Production:
- Frontend: https://arkia.cl
- Backend: https://api.arkia.cl
- DB: PostgreSQL production (con backups)
```

---

## 📊 Métricas de Éxito por Fase

### Fase 1: Landing
- ✅ >1000 visitantes/mes
- ✅ >5% conversión
- ✅ >20 leads calificados/mes
- ✅ Lighthouse >90

### Fase 2: Portal Cliente
- ✅ >80% clientes activos en portal
- ✅ <2 consultas/proyecto sobre estado
- ✅ >95% pagos a tiempo
- ✅ 4.5+ satisfacción promedio

### Fase 3: Panel Admin
- ✅ -50% tiempo en gestión manual
- ✅ 100% proyectos digitalizados
- ✅ Reportes generados en <2 min
- ✅ 0 errores en facturación

---

## 🎓 Aprendizajes y Mejoras Continuas

### Post-Launch (primeros 3 meses)

**Semana 1-2**:
- Monitorear errores y bugs
- Recopilar feedback de primeros clientes
- Ajustes de UX urgentes

**Mes 1**:
- A/B testing en landing
- Optimización de conversión
- Mejoras basadas en analytics

**Mes 2-3**:
- Features adicionales basadas en feedback
- Optimización de performance
- Expansión de contenido (más casos de éxito)

### Roadmap Futuro (6+ meses)

**Posibles Features**:
- Sistema de notificaciones push
- App móvil nativa (React Native)
- Integración con Slack/Discord
- Firma digital de contratos
- Sistema de referidos
- Multi-idioma (inglés)
- Modo white-label para reventa

---

## 📞 Soporte y Mantenimiento

### Plan de Soporte

**Horarios**:
- Lunes a Viernes: 9:00 - 18:00 (email, portal)
- WhatsApp: 9:00 - 20:00
- Emergencias: 24/7 (solo clientes premium)

**SLA por Tipo**:
- Crítico (sistema caído): 1 hora
- Alto (funcionalidad importante): 4 horas
- Medio (bug menor): 24 horas
- Bajo (mejora): 72 horas

### Mantenimiento Programado

**Diario**:
- Backups automáticos de BD
- Monitoreo de uptime
- Revisión de logs de errores

**Semanal**:
- Actualización de dependencias
- Revisión de métricas
- Limpieza de archivos temporales

**Mensual**:
- Auditoría de seguridad
- Optimización de performance
- Revisión de costos de infraestructura

---

**Última actualización**: Octubre 2025  
**Versión**: 3.0 - Proyecto Completo (3 Partes)  
**Estado**: Documentación completa  
**Próximo paso**: Iniciar Fase 1 - Landing MVP