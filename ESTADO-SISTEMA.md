# ESTADO-SISTEMA — Takai Landing (takai-landing)

> Este archivo es la fuente de verdad del estado actual de takai.cl (landing B2B).
> Debe leerse ANTES de cualquier edición y actualizarse DESPUÉS de cada cambio.

## Última actualización
2026-06-20

## Stack
- Next.js 14 (App Router) + TypeScript
- Estilos: inline con objetos JS (NUNCA Tailwind en componentes)
- Clases CSS globales en string <style> (prefijo tk-)
- Fuentes: **next/font/google** auto-hospedadas (Cormorant Garamond + DM Sans), expuestas como variables CSS `--font-serif` y `--font-sans`. NO se cargan desde fonts.googleapis.com (la CSP las bloqueaba en producción).
- Deploy: Vercel automático en push a main
- Dominio: www.takai.cl

## Arquitectura de archivos (raíz limpia)
```
app/
  layout.tsx           Root layout: next/font, metadata, JSON-LD (Organization/WebSite/Service)
  page.tsx             Landing completa (client component) + FAQ JSON-LD
  sitemap.ts           sitemap.xml dinámico (home + blog + artículos)
  robots.ts            robots.txt (+ referencia a sitemap)
  components/
    ContactModal.tsx   Modal de contacto (form -> /api/contact). OJO: hoy no se abre (modal sin trigger)
  api/contact/route.ts API de contacto (Resend, opcional vía RESEND_API_KEY), con escape HTML anti-XSS
  blog/
    page.tsx           Índice del blog
    [slug]/page.tsx    Artículo (SSG con generateStaticParams)
lib/articles.ts        Contenido de los 5 artículos del blog
public/                takai-hawk-nobg.png (logo), takai-logo.png (favicon/OG), step1-conversemos.webp
vercel.json            Headers de seguridad (CSP, HSTS, etc.) + redirect /index.html -> /
```

## Modelo de negocio actual (reflejado en la web)
- Cuota de incorporación: $20.000 CLP (precio regular $80.000, 75% descuento lanzamiento). Es el acceso al sistema, NO el precio de la página.
- Mensualidad: $10.000/mes — SOLO se cobra los meses sin reservas generadas por Takai
- Comisión: 10% sobre reservas generadas por Takai (directorio, agente WhatsApp, afiliados)
- Reservas directas del dueño: 0% comisión siempre
- Afiliados: comisión por reserva generada (porcentaje interno, no publicado en web)

## Secciones actuales de la web
1. Nav — logo clickeable (vuelve al inicio) + links: Cómo funciona, Características, Precios, Referidos, FAQ, Blog
2. Hero — badge + h1 + subtítulo + CTA ("Quiero incorporarme a Takai")
3. Stats — 4 métricas: 10% / 24/7 / 72h / 0%
4. Testimonios — 4 testimonios de clientes reales
5. Cómo funciona — 3 pasos
6. Clientes reales — 3 cabañas activas (Majoaal, El Mirador, Glamping Cacagual)
7. Características — 6 features incluyendo Directorio y Programa de afiliados
8. Referidos/Afiliados — sección completa con 3 cards + 3 pasos + CTA WhatsApp
9. Precios — comparativa + card principal con checklist
10. FAQ — preguntas frecuentes (alimenta también el JSON-LD FAQPage)
11. CTA final
12. Footer — misión, visión, logo, links, redes sociales, legal

## SEO / visibilidad (implementado)
- Metadata completa con `metadataBase`, canonical, OpenGraph y Twitter card
- JSON-LD: Organization + WebSite + Service (layout) y FAQPage (page, generado desde la constante FAQS)
- sitemap.xml y robots.txt nativos de Next
- Imagen OG estática (takai-logo.png). Pendiente: banner OG 1200x630 a medida.

## Rendimiento
- Imágenes locales optimizadas: public/ pasó de ~7.3 MB a ~264 KB
  - logo 1.83 MB -> 186 KB; favicon 520 KB -> 22 KB; step1 2.2 MB PNG -> 39 KB WEBP
- Fuentes auto-hospedadas (sin request de render-blocking a Google Fonts)
- prefers-reduced-motion respetado (desactiva animaciones)

## Clientes activos en producción (owner-dashboard)
- cabanas-majoaal-licanray (CLP, free_until 2027-02-28)
- el-mirador (CLP, free_until 2026-11-30)
- glamping-cacagual (USD, manual_billing=true, NUNCA suspender)

## Decisiones permanentes
- SII/facturación electrónica: NUNCA hasta nueva orden
- iCal import: descartado (solo export)
- Tailwind: prohibido en componentes
- El año de fundación es 2025 (footer © 2025)
- Fuentes SIEMPRE vía next/font (nunca <link> a Google Fonts: la CSP las bloquea)
- Imágenes locales SIEMPRE optimizadas antes de commitear (sharp/webp)

## Pendientes futuros para esta landing
- Banner OG 1200x630 a medida (next/og falla en prerender en build local Windows — evaluar generarlo estático)
- Conectar el ContactModal a un trigger (hoy existe pero no se abre; los CTAs van a WhatsApp)
- Agregar formulario de registro de afiliados (hoy va por WhatsApp)
- Agregar contador de cabañas activas dinámico desde Supabase
- Agregar sección de destinos cuando el directorio B2C esté activo
- Las imágenes del hero/secciones son remotas (mgx-backend-cdn.metadl.com): riesgo si ese CDN cae. Evaluar re-hospedar.

## Historial de cambios
- 2026-06-20 (auditoría completa): purga de basura (8x fix_*.js, remove_bg.js, tsconfig.tsbuildinfo, public/index.html, public/takai-hawk.png sin uso); optimización de imágenes (~7.3MB -> 264KB); migración a next/font (arregla bug de CSP que bloqueaba Google Fonts en prod); logo clickeable al inicio; SEO: sitemap.ts, robots.ts, JSON-LD (Organization/WebSite/Service/FAQPage), metadataBase, OG image, fix typo "araucaía"->"araucanía"; FAQ elevado a constante única (render + schema); mejoras de estilo (scroll suave, ::selection dorado, reduced-motion); .gitignore endurecido; copy de blog alineado al nuevo modelo de cobro; quitado <span> vacío en precios.
- 2026-06-20: mensualidad $10k condicional, modelo cobro actualizado, botón CTA "Quiero incorporarme a Takai", cuota de incorporación renombrada, % afiliados removido, footer © 2025, sección referidos y features nuevos agregados.
- 2026-06-20: Creación del archivo ESTADO-SISTEMA.md.
