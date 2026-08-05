# AGENTS.md — takai-landing (takai.cl)

Instrucciones para Codex al trabajar en este repositorio.

## Qué es

La **landing comercial B2B de Takai.cl** (www.takai.cl) — el sitio que vende el SaaS de reservas a dueños de cabañas. EN PRODUCCIÓN en Vercel (deploy automático al pushear a main). NO contiene lógica de reservas: eso vive en `owner-dashboard` (reservas.takai.cl) y el agente IA en `takai-agent` (ag.takai.cl).

**REGLA OBLIGATORIA:** leer `ESTADO-SISTEMA.md` al inicio de cada sesión y actualizarlo al final (antes del commit final). Es la fuente de verdad de este sitio: arquitectura de archivos, modelo de negocio publicado, SEO implementado y pendientes.

## Reglas permanentes (no negociables)

- **Tailwind PROHIBIDO en componentes** — solo inline styles con objetos JS (`style={{ color: "#fff" }}`). Clases CSS globales solo en string `<style>` con prefijo `tk-`.
- **Fuentes SIEMPRE vía `next/font/google`** (Cormorant Garamond + DM Sans, variables `--font-serif`/`--font-sans`). NUNCA `<link>` a fonts.googleapis.com — la CSP de `vercel.json` las bloquea en producción.
- **Imágenes locales SIEMPRE optimizadas** antes de commitear (sharp/webp).
- Año de fundación en footer: © 2025.
- SII/facturación electrónica: NUNCA. iCal import: descartado.
- Los precios/modelo de negocio publicados los decide SOLO Juan — no cambiarlos sin instrucción explícita en el mensaje actual.
- PowerShell 5.1: encadenar comandos con `;` (no `&&`). No usar CSS template literals en `.tsx`.

## Contexto del ecosistema

Takai son 6 piezas: owner-dashboard (panel+reservas, LIVE), takai-agent (agente IA reservas, LIVE en ag.takai.cl, WhatsApp +56957083477), directorio B2C (código listo, sin deploy), **esta landing** (LIVE), takai-lead-agent (agente ventas agencia, Cloudflare, pendiente chip #2), IA-Takai-Agencia (ia.takai.cl — la agencia, negocio APARTE de takai.cl). Referencia canónica de números WhatsApp: `owner-dashboard/AGENTS.md`.

## Pendientes conocidos (ver ESTADO-SISTEMA.md para detalle)

- Banner OG 1200×630 a medida (generar estático; next/og falla en build local Windows).
- Conectar `ContactModal` a un trigger (existe pero nada lo abre; los CTAs van a WhatsApp).
- Formulario de registro de afiliados (hoy va por WhatsApp).
- Contador dinámico de cabañas activas desde Supabase.
- Re-hospedar imágenes remotas del hero (dependen de mgx-backend-cdn.metadl.com — si ese CDN cae, se rompen).

## Comandos

```bash
npm run dev
npm run build   # verificar SIEMPRE antes de push (errores TS rompen el deploy)
```

## Regla de sesiones

Juan trabaja con UN chat por proyecto. Este repo tiene su propio chat. Nota: hay 2 cambios sin commitear de una sesión anterior — revisar `git status` antes de empezar y preguntar a Juan si se conservan o descartan.
