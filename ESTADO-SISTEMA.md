# ESTADO-SISTEMA — Takai Landing

> Fuente de verdad de `www.takai.cl`. Leer antes de editar y actualizar antes del commit final.

## Última actualización

2026-08-11

## Propósito y alcance

Takai.cl es una landing comercial B2B dirigida exclusivamente a dueños de cabañas en Chile. Presenta el sistema de reservas y deriva la incorporación a WhatsApp o a `https://reservas.takai.cl/registro`.

La landing no contiene lógica de reservas ni es un portal para turistas. El panel, el registro y las páginas de los alojamientos viven en `owner-dashboard`. El directorio B2C, el agente IA y la agencia IA son productos separados y no se venden como funciones de Takai.cl.

## Modelo comercial publicado

Todos los montos están en pesos chilenos (CLP).

### Activación — pago único al incorporarse

| Cabañas | Precio |
|---|---:|
| 1 a 3 | $99.000 |
| 4 a 7 | $150.000 |
| 8 a 10 | $250.000 |
| Más de 11 | A cotizar |

### Anualidad — se cobra solo entre diciembre y marzo

| Cabañas | Precio |
|---|---:|
| 1 a 3 | $250.000 |
| 4 a 7 | $370.000 |
| 8 a 10 | $550.000 |
| Más de 11 | A cotizar |

Mensaje obligatorio junto a las tablas: **“De abril a noviembre no paga nada.”**

Takai cobra cero comisión por reserva. No se publican planes alternativos, equivalencias por mes ni cobros por reserva.

## Funciones que sí se comunican

- Página propia de reservas, lista en horas, con opción de dominio propio.
- Huéspedes que revisan disponibilidad y envían solicitudes a cualquier hora.
- Calendario que aparta las fechas al ingresar la solicitud.
- El dueño revisa y siempre confirma o rechaza la reserva.
- Panel autoadministrable: precios, fotos, bloqueos y reservas manuales.
- Precios por temporada.
- Anticipo por transferencia directa al propietario.
- Mercado Pago opcional para propietarios que ya lo tengan habilitado.

No se prometen respuestas automáticas por WhatsApp, aparición en Google, directorio turístico, sincronización iCal, integración SII, testimonios no verificados ni cifras de resultados.

## Estructura publicada

1. Hero B2B con WhatsApp y registro en línea.
2. Problema: consultas perdidas y fechas duplicadas.
3. Cómo funciona en tres pasos.
4. Casos reales y capturas del producto.
5. Funciones incluidas.
6. Tablas de activación y anualidad.
7. Preguntas frecuentes.
8. CTA final y footer legal.

El CTA principal es WhatsApp `+56 9 5523 0900`; el secundario es el registro en línea. Ambos aparecen en hero, precios y cierre. El antiguo programa de partners está desactivado y `/afiliados` redirige permanentemente a `/`.

## Stack vigente

- Next.js 16.3.0, App Router.
- React y React DOM 19.2.8.
- TypeScript 5.9 en modo estricto.
- Estilos propios: clases semánticas `tk-` y CSS como strings en `app/styles/*.ts`, inyectado desde el layout. Tailwind no se usa.
- Fuentes autoalojadas con `next/font/google`: Fraunces, Archivo e IBM Plex Mono.
- Imágenes procesadas con Sharp; capturas visibles en WebP y banner social en JPEG.
- Vercel Analytics, sin píxeles publicitarios ni chats de terceros.
- Deploy automático de Vercel al pushear `main`.

## Arquitectura

```text
app/
  layout.tsx              fuentes, metadata, JSON-LD y estilos globales inyectados
  page.tsx                landing y FAQPage JSON-LD
  not-found.tsx           404 accesible
  robots.ts               robots.txt
  sitemap.ts              sitemap.xml de rutas indexables
  afiliados/page.tsx      redirect permanente a home
  blog/
    page.tsx              índice
    [slug]/page.tsx       artículos SSG, metadata y BlogPosting JSON-LD
  terminos/page.tsx       términos vigentes
  privacidad/page.tsx     privacidad y marco legal vigente
  components/             Nav, Footer, Reveal, FAQ y botón WhatsApp
  styles/
    base.ts               tokens, reset y accesibilidad global
    shell.ts              navegación, footer y componentes compartidos
    home.ts               landing responsive
    editorial.ts          blog y páginas legales
lib/articles.ts           cinco artículos del blog
public/                   logos, banner OG e imágenes optimizadas
scripts/                  generación de assets y validación de estilos
vercel.json               CSP y headers de seguridad
```

El endpoint de contacto y sus componentes sin uso fueron eliminados. La dependencia Resend ya no forma parte de esta landing.

## SEO, accesibilidad y rendimiento

- Canonical, Open Graph y Twitter por home, blog, artículos y páginas legales.
- Banner estático `og-takai.jpg` de 1200×630.
- JSON-LD de Organization, WebSite, Service, FAQPage y BlogPosting.
- `robots.txt` y `sitemap.xml`; `/afiliados` no se indexa en el sitemap.
- Fechas del blog formateadas en UTC y `dateModified` actualizado.
- Skip link operativo y con transferencia de foco en todas las páginas, foco visible, menú móvil con Escape/trampa de foco, acordeón con relaciones ARIA y FAB fuera del tabulador cuando está oculto.
- Botones, textos auxiliares y acentos pequeños cumplen contraste WCAG AA usando los tonos vigentes de la paleta cobre/crema.
- El H1 del hero no depende de hidratación para ser visible.
- Solo Fraunces y Archivo se precargan; IBM Plex Mono se difiere para no competir con el contenido crítico.
- Imágenes con `sizes`, originales PNG pesados retirados y logo de navegación reducido.
- La captura que exponía datos personales fue retirada del directorio público.
- CSP reforzada con `object-src 'none'`, HSTS, `frame-ancestors 'none'`, `nosniff` y política de permisos restrictiva.
- Auditoría npm de producción y completa: cero vulnerabilidades al 2026-08-11.

## Legal

- A la fecha rige en Chile la Ley N° 19.628.
- La Ley N° 21.719 entra en vigor el 1 de diciembre de 2026.
- Términos y privacidad reflejan pagos directos, confirmación del dueño y los proveedores reales del flujo de reservas.

## Decisiones permanentes

- Año de fundación en footer: © 2025.
- SII/facturación electrónica: no implementar ni prometer.
- Importación iCal: descartada.
- No publicar estadísticas ni testimonios sin verificación y autorización.
- No cambiar precios ni modelo comercial sin instrucción explícita de Juan.
- No presentar productos separados como funciones de la landing.

## Pendientes

No quedan pendientes funcionales dentro del alcance de la actualización del 2026-08-11.

### Remediación histórica de privacidad

Juan autorizó la reescritura el 2026-08-11. Se ejecutó `git-filter-repo` 2.47 con `--sensitive-data-removal` para retirar `public/imagenes/reserva-resumen.png` de todo el historial y se publicó el resultado con force-push protegido por lease:

- 61 de 66 commits fueron reescritos; primer commit cambiado reportado: `afc788844ccbb3443ff4fdb3cd3d44170c7c0579`.
- `main` remoto pasó de `e1656e1e8bb277d0a393fbe2da70212e1d7ea9e2` a `af67f2660a71dd0064425c7425ab4cf404686c36`.
- Cero pull requests, forks o tags afectados; Git LFS no estaba en uso.
- La ruta y el blob sensible ya no existen en ninguna referencia ni objeto local alcanzable o inalcanzable del clon saneado.
- La URL publicada de la captura responde 404.

Pendiente externo: GitHub todavía resuelve por SHA la vista cacheada del blob y del commit antiguos. Se debe abrir un ticket en GitHub Support —el portal requiere autenticación web— para que eliminen referencias cacheadas y ejecuten garbage collection. Cualquier clon previo no controlado debe descartarse y clonarse nuevamente; no debe mezclar ni fusionar la historia antigua con `main`.

Pendiente local: el objeto antiguo permanece inalcanzable dentro de la base de objetos de este checkout por sus reflogs previos al force-push. El clon aislado, la herramienta temporal y el bundle de recuperación ya fueron eliminados. Para purgar también este último objeto local se requiere autorización específica para destruir todos los reflogs y objetos inalcanzables mediante `git reflog expire --expire=now --all` y `git gc --prune=now`; esa limpieza global puede eliminar otros estados locales recuperables y no afecta a GitHub ni a producción.

Como mantenimiento continuo: revisar dependencias, enlaces externos, Core Web Vitals con tráfico real y coherencia comercial antes de cada publicación.

## Historial reciente

- 2026-08-11: reescritura integral al modelo comercial vigente; retiro del programa de partners y claims no implementados; blog y legales alineados; captura con datos personales retirada del sitio y del historial alcanzable mediante `git-filter-repo` y force-push; imágenes optimizadas; OG 1200×630; metadata por ruta; mejoras de accesibilidad, contraste y CSP; migración a Next 16/React 19; auditoría npm en cero; estilos migrados fuera de Tailwind para cumplir las reglas del repositorio.
- 2026-07: rediseño visual con la paleta crema, tinta y cobre y las fuentes Fraunces, Archivo e IBM Plex Mono.
- 2026-06-20: creación de esta memoria y primera auditoría estructural del sitio.
