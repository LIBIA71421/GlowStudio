# GlowStudio

Sitio web de GlowStudio, salón de uñas y belleza en Cochabamba. Está construido con Next.js App Router, React y TypeScript, con estilos responsive y una identidad visual soft beauty.

## Requisitos

- Node.js `20.9.0` o posterior.
- npm incluido con Node.js.
- Conexión a internet para descargar dependencias y cargar las fuentes de Google.

## Instalación y ejecución

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Otros comandos disponibles:

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` genera el sitio estático en `out/`, listo para publicar en GitHub Pages.
El sitio se despliega automáticamente al hacer push a `main`.

## Arquitectura híbrida: capas y funcionalidades

El código se organiza primero por capas compartidas y, dentro de la capa de interfaz, por funcionalidades. Cada feature encapsula la sección y las interacciones que le pertenecen.

```text
GlowStudio/
├── public/
│   └── assets/
│       ├── images/                    # Fotografías locales del salón
│       └── video/                     # Video local del salón
├── src/
│   ├── app/                           # Capa de aplicación y rutas Next.js
│   │   ├── (marketing)/
│   │   │   └── page.tsx               # Composición de la página de inicio
│   │   ├── globals.css                # Estilos globales y responsive
│   │   └── layout.tsx                 # Layout raíz, metadata y estilos base
│   ├── features/                      # Capa de funcionalidades de negocio/UI
│   │   ├── booking/
│   │   ├── experience/
│   │   ├── gallery/
│   │   ├── hero/
│   │   ├── services/
│   │   └── vip/
│   └── shared/                        # Capa transversal reutilizable
│       ├── components/
│       │   └── navigation/            # Header, footer y accesos sociales
│       └── config/
│           └── site.ts                # Contactos y datos de marca
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

### Responsabilidades

- **`app`** define rutas, metadata y composición de la pantalla; no concentra el detalle interno de cada sección.
- **`features`** contiene componentes independientes para hero, servicios, galería, experiencia, promoción VIP y reservas. Los componentes cliente se limitan a funciones interactivas que requieren estado del navegador.
- **`shared`** concentra configuración y componentes transversales, como navegación y pie de página.
- **`public/assets`** sirve los archivos multimedia con rutas estables `/assets/...`.

## Contenido e interacciones

- Catálogo de servicios y paquete VIP con precios en bolivianos (Bs).
- Galería con filtros y lightbox compatible con teclado (Escape).
- Video del salón servido desde `public/assets/video`.
- Formulario validado por el navegador que prepara una solicitud y abre WhatsApp solo cuando la persona lo confirma.
- Enlaces a WhatsApp, Instagram y TikTok.
- Bootstrap para el sistema de grid y componentes, Bootstrap Icons para iconografía y AOS para animaciones al desplazarse. Next.js optimiza y autoalberga Playfair Display y DM Sans durante la compilación.
- Imágenes con `next/image`, texto alternativo y tamaños adaptativos.
- Metadatos para compartir y preferencia de movimiento reducido.

El formulario no reserva citas automáticamente, no valida disponibilidad y no almacena ni transmite los datos a un servidor. La clienta revisa y envía el mensaje desde WhatsApp.

## Datos del salón

Los datos públicos se centralizan en `src/shared/config/site.ts`:

- WhatsApp: [wa.link/e1hv7s](https://wa.link/e1hv7s)
- Número usado para preparar solicitudes: `+591 64877818`
- Instagram: [@glowstudiocochabamba](https://www.instagram.com/glowstudiocochabamba?cplk=MTB4OGpiZm1ueXJ5aQ==)
- TikTok: [@glow.studio.cocha](https://www.tiktok.com/@glow.studio.cocha?_r=1&_t=ZS-9ArylqahDyn)

El teléfono de WhatsApp para mensajes se conserva en formato internacional sin `+`, espacios ni guiones.

`package.json` fija una versión corregida de PostCSS como dependencia transitiva de Next.js 15. Revisa esa regla al actualizar Next.js para retirarla cuando la versión del framework incorpore una versión corregida por sí misma.

## Cambios habituales

- **Precios y servicios:** edita los datos en `src/features/services/services-section.tsx` y el paquete VIP en `src/features/vip/vip-section.tsx`. Mantén sincronizadas las opciones del formulario en `src/features/booking/booking-section.tsx`.
- **Fotos de galería:** agrega imágenes a `public/assets/images` y sus datos/alternativas a `src/features/gallery/gallery-section.tsx`.
- **Contacto:** cambia los valores centralizados en `src/shared/config/site.ts`.
- **Colores, responsive y estilos:** modifica las variables CSS en `src/app/globals.css`.
- **Rutas y orden de secciones:** actualiza `src/app/(marketing)/page.tsx`.

## Validación antes de publicar

```bash
npm run typecheck
npm run lint
npm run build
```

El workflow de GitHub Pages compila desde la carpeta `GlowStudio` y publica en
`https://LIBIA71421.github.io/GlowStudio/`.

Comprueba también menú móvil, filtros, cierre del lightbox con Escape, validación de fechas y enlace de WhatsApp, reproducción de video y viewports móvil/tablet/escritorio.
