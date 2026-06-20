# ESTADO-SISTEMA — Takai Landing (takai-landing)

> Este archivo es la fuente de verdad del estado actual de takai.cl (landing B2B).
> Debe leerse ANTES de cualquier edición y actualizarse DESPUÉS de cada cambio.

## Última actualización
2026-06-20

## Stack
- Next.js 14 (App Router) + TypeScript
- Estilos: inline con objetos JS (NUNCA Tailwind en componentes)
- Clases CSS globales en string <style> (prefijo tk-)
- Deploy: Vercel automático en push a main
- Dominio: www.takai.cl

## Modelo de negocio actual (reflejado en la web)
- Cuota de incorporación: $20.000 CLP (precio regular $80.000, 75% descuento lanzamiento)
- Mensualidad: $10.000/mes — SOLO se cobra los meses sin reservas generadas por Takai
- Comisión: 10% sobre reservas generadas por Takai (directorio, agente WhatsApp, afiliados)
- Reservas directas del dueño: 0% comisión siempre
- Afiliados: comisión por reserva generada (porcentaje interno, no publicado en web)

## Secciones actuales de la web
1. Nav — links: Cómo funciona, Características, Precios, Referidos, FAQ, Blog
2. Hero — badge + h1 + subtítulo + CTA
3. Stats — 4 métricas: 10% / 24/7 / 72h / 0%
4. Testimonios — 4 testimonios de clientes reales
5. Cómo funciona — 3 pasos
6. Clientes reales — 3 cabañas activas (Majoaal, El Mirador, Glamping Cacagual)
7. Características — 6 features incluyendo Directorio y Programa de afiliados
8. Referidos/Afiliados — sección completa con 3 cards + 3 pasos + CTA WhatsApp
9. Precios — comparativa + card principal con checklist
10. FAQ — preguntas frecuentes incluyendo preguntas sobre afiliados y agente WhatsApp
11. CTA final
12. Footer — misión, visión, logo, links, redes sociales, legal

## Clientes activos en producción (owner-dashboard)
- cabanas-majoaal-licanray (CLP, free_until 2027-02-28)
- el-mirador (CLP, free_until 2026-11-30)
- glamping-cacagual (USD, manual_billing=true, NUNCA suspender)

## Decisiones permanentes
- SII/facturación electrónica: NUNCA hasta nueva orden
- iCal import: descartado (solo export)
- Tailwind: prohibido en componentes
- El año de fundación es 2025 (footer © 2025)

## Pendientes futuros para esta landing
- Agregar sección blog con artículos SEO por destino
- Agregar formulario de registro de afiliados (hoy va por WhatsApp)
- Agregar contador de cabañas activas dinámico desde Supabase
- Agregar sección de destinos cuando el directorio B2C esté activo

## Historial de cambios
- 2026-06-20: Creación del archivo. Cambios: mensualidad $10k, modelo cobro actualizado, botón CTA corregido, cuota incorporación renombrada, % afiliados removido, footer © 2025, sección referidos y features nuevos agregados.
