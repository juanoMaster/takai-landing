# AGENTS.md — takai-landing (takai.cl)

Instrucciones para Codex al trabajar en este repositorio.

## Qué es

La landing comercial B2B de Takai para dueños de cabañas en Chile. Está en producción en Vercel y se despliega automáticamente al pushear `main`.

Este repositorio no contiene la lógica de reservas. El registro, las páginas de cada alojamiento y el panel viven en `owner-dashboard` (`reservas.takai.cl`). El directorio B2C y el agente IA son productos separados y no se deben presentar como funciones de esta landing.

**Regla obligatoria:** leer `ESTADO-SISTEMA.md` al inicio de cada sesión y actualizarlo al final, antes del commit final.

## Reglas permanentes

- Tailwind está prohibido en componentes y no forma parte del stack. Los componentes usan clases semánticas con prefijo `tk-`; el CSS se mantiene como strings en `app/styles/*.ts` y se inyecta desde `app/layout.tsx`. Para valores realmente dinámicos se permiten objetos `style`.
- No usar CSS template literals en archivos `.tsx`.
- Fuentes únicamente con `next/font/google`: Fraunces, Archivo e IBM Plex Mono. Son la tipografía vigente de la marca y no deben cargarse con `<link>` externos.
- Mantener la paleta definida mediante variables `--tk-*` en `app/styles/base.ts`.
- Optimizar las imágenes locales antes de commitear, preferentemente con `sharp` y WebP/JPEG según corresponda.
- El año de fundación del footer es © 2025.
- No implementar ni prometer SII/facturación electrónica ni importación iCal.
- No publicar testimonios, métricas o resultados sin una fuente verificable y autorización de Juan.
- Los precios y el modelo comercial los decide solo Juan. No cambiarlos sin instrucción explícita del mensaje actual.
- PowerShell 5.1: encadenar comandos con `;`, no con `&&`.

## Modelo comercial publicado

- Activación, pago único: 1–3 cabañas $99.000; 4–7 $150.000; 8–10 $250.000; más de 11, a cotizar.
- Anualidad, cobrada solo entre diciembre y marzo: 1–3 cabañas $250.000; 4–7 $370.000; 8–10 $550.000; más de 11, a cotizar.
- Mensaje obligatorio junto a precios: **“De abril a noviembre no paga nada.”**
- Cero comisión por reserva. Todos los valores están en CLP.

## Qué sí comunica la landing

- Página propia de reservas lista en horas.
- Calendario que bloquea fechas y evita duplicados dentro de Takai.
- Panel autoadministrable para precios, fotos, bloqueos y reservas manuales.
- Precios por temporada y dominio propio.
- Pago por transferencia al propietario; Mercado Pago es opcional si ya lo tiene.
- El huésped envía la solicitud y el dueño siempre confirma o rechaza.

No presentar Takai como portal turístico, directorio, agencia de marketing ni agente automático de WhatsApp. El botón de WhatsApp solo inicia una conversación con una persona.

## Comandos de verificación

```bash
npx tsc --noEmit
npm run build
npm audit --omit=dev
npm audit
```

Antes de tocar archivos, revisar `git status` y preservar cualquier cambio ajeno a la tarea.
