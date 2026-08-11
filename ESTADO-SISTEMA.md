# ESTADO-SISTEMA — Takai Landing

> Fuente de verdad de `www.takai.cl`. Leer antes de editar y actualizar antes del commit final.

## Última actualización

2026-08-11 (segunda pasada: alta self-service destacada y verificación integral de enlaces)

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
7. Alta en línea (`#registro`): el dueño puede inscribirse solo.
8. Preguntas frecuentes.
9. CTA final y footer legal.

El CTA principal es WhatsApp `+56 9 5523 0900`; el secundario es el registro en línea. El antiguo programa de partners está desactivado y `/afiliados` redirige permanentemente a `/`.

### Alta self-service visible

El registro autónomo en `https://reservas.takai.cl/registro` es una opción destacada y no un enlace secundario. Aparece en seis puntos, todos con `target="_blank"`:

1. Navegación de escritorio: enlace «Regístrate» hacia `#registro`.
2. Hero: botón `Regístrate en línea` junto al de WhatsApp, más una línea que aclara que puede hacerlo solo y a cualquier hora.
3. Precios: botón junto a «Consultar por WhatsApp».
4. Sección `#registro`: banda oscura dedicada, con botón cobre y una tarjeta que anticipa los cuatro pasos reales del formulario (tu negocio, tus cabañas, dónde recibes tu dinero, revisa y confirma).
5. CTA final y menú móvil (botón propio bajo el de WhatsApp; también en la navegación `noscript`).
6. Footer, bloque Contacto.

La sección declara que la página no se publica sola: Takai revisa los datos y la cuenta bancaria antes de activarla, que es el comportamiento real del alta (`tenants.active=false` hasta la aprobación).

### Aviso de nuevo registro

Cuando un potencial cliente envía el formulario, `owner-dashboard` (`app/api/registro/route.ts`) llama a `sendAlertEmail` y despacha por Resend un correo `[TAKAI ALERTA] Nueva solicitud de alta: <negocio>` desde `notificaciones@takai.cl` hacia `contacto@takai.cl`, con nombre, correo, WhatsApp, ubicación, número de cabañas, slug asignado y forma de pago elegida. La landing no implementa ese aviso ni recolecta datos: solo deriva al formulario. Infraestructura de correo verificada el 2026-08-11 desde DNS: MX de `takai.cl` en Zoho, SPF `v=spf1 include:zohomail.com ~all`, subdominio `send.takai.cl` con SPF de Amazon SES y DKIM `resend._domainkey.takai.cl` publicado.

Prueba de punta a punta ejecutada el 2026-08-11 con autorización de Juan, porque `audit_log` no registraba ni un solo `signup_submitted`: el formulario público nunca se había usado en producción. El alta de prueba respondió 200, calculó la activación en $99.000 para el tramo «1 a 3 cabañas» —coincide con la tabla publicada en esta landing— y creó tenant, cabaña, acceso, suscripción y cobro sin ningún error de runtime. Los registros de prueba fueron eliminados después.

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
    noscript.ts           degradación usable y accesible sin JavaScript, con alta en línea visible
lib/articles.ts           cinco artículos del blog
lib/commercial.ts         fuente única de precios y mensajes comerciales
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
- La navegación, el contenido animado y las preguntas frecuentes siguen siendo utilizables sin JavaScript; el FAQ usa `details`/`summary` nativos.
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

## Memoria y gobierno del repositorio

- `AGENTS.md` contiene las reglas permanentes y el contrato comercial que debe respetar cualquier agente.
- `ESTADO-SISTEMA.md` es la única memoria operativa mutable y registra estado, riesgos y pendientes reales.
- `CLAUDE.md` es solo un puntero de compatibilidad hacia los dos archivos anteriores; no duplica reglas ni precios.
- Los precios y mensajes públicos se consumen desde `lib/commercial.ts` para reducir el riesgo de divergencia entre home, términos y blog.

## Verificación de enlaces y correo (2026-08-11)

Comprobado con peticiones reales, no por lectura de código:

| Destino | Resultado |
|---|---|
| `reservas.takai.cl/registro` | 200 |
| Las tres páginas de casos reales en `reservas.takai.cl` | 200 |
| `www.takai.cl` | 200 |
| `wa.me/56955230900` | 302 al destino oficial de WhatsApp |
| Instagram `takai.ia` | 200 |
| Facebook | 301; se adoptó la URL canónica en el JSON-LD |
| `/`, `/blog`, `/terminos`, `/privacidad`, los cinco artículos, `robots.txt`, `sitemap.xml` | 200 |
| `/afiliados` | 308 a `/` |
| Ruta inexistente | 404 |
| `contacto@takai.cl` | buzón Zoho activo según MX; SPF y DKIM de Resend publicados |

Sin errores de consola, sin desbordes horizontales y sin saltos de la navegación a 375, 667, 1024 y 1280 px.

## Hallazgos en `owner-dashboard` (fuera del alcance de este repo)

Detectados al probar el alta el 2026-08-11. No se tocaron: ese repositorio no es de esta tarea.

1. `reservas.takai.cl/<cualquier-cosa>` responde 200 con un shell en «CARGANDO» en vez de 404. Un slug inexistente nunca falla, así que buscadores y usuarios reciben soft-404.
2. Como consecuencia de lo anterior, `reservas.takai.cl/robots.txt` lo atiende la ruta dinámica `[slug]` y devuelve HTML. Ese subdominio no tiene robots.txt real.
3. Un tenant con `active=false` igual expone página pública: el nombre del negocio aparece en el `<title>` y en el cuerpo. Los datos de reservas no cargan, pero el nombre de una solicitud pendiente queda alcanzable si alguien adivina el slug. El comentario de `lib/signup.ts` afirma que queda «invisible al público», y a nivel de página no es exacto.

## Pendientes

No quedan fallos funcionales conocidos dentro del código de esta landing. Quedan tres acciones externas o de observabilidad:

1. GitHub Support debe completar la eliminación de vistas cacheadas del historial saneado. Ticket abierto: `#4654270`.
2. `takai.cl` no publica registro DMARC. Con SPF y DKIM ya en su lugar, falta agregar `_dmarc.takai.cl` como TXT con `v=DMARC1; p=none; rua=mailto:contacto@takai.cl; fo=1` desde Vercel → Domains → `takai.cl` → DNS Records. Verificado el 2026-08-11 contra los resolutores de Google y Cloudflare: el nombre devuelve SOA, o sea que el registro aún no existe.
3. Falta medir Core Web Vitals reales de esta versión con Lighthouse o datos de campo. No se inventaron valores de LCP, CLS ni INP.

### Resuelto el 2026-08-11

El apex `https://takai.cl` ya responde **308 permanente** hacia `https://www.takai.cl/`, en un solo salto y terminando en 200. Se corrigió desde Vercel → proyecto `takai-landing` → Domains → fila `takai.cl` → Edit → código de estado 308. No es configurable desde este repositorio: `vercel.json` no controla el redirect a nivel de dominio.

### Remediación histórica de privacidad

Juan autorizó la reescritura el 2026-08-11. Se ejecutó `git-filter-repo` 2.47 con `--sensitive-data-removal` para retirar `public/imagenes/reserva-resumen.png` de todo el historial y se publicó el resultado con force-push protegido por lease:

- 61 de 66 commits fueron reescritos; primer commit cambiado reportado: `afc788844ccbb3443ff4fdb3cd3d44170c7c0579`.
- `main` remoto pasó de `e1656e1e8bb277d0a393fbe2da70212e1d7ea9e2` a `af67f2660a71dd0064425c7425ab4cf404686c36`.
- Cero pull requests, forks o tags afectados; Git LFS no estaba en uso.
- La ruta y el blob sensible ya no existen en ninguna referencia ni objeto local alcanzable o inalcanzable del clon saneado.
- La URL publicada de la captura responde 404.

GitHub Support recibió el ticket `#4654270` con la ruta, blob y commit afectados. La respuesta y el garbage collection remoto siguen fuera del control del repositorio. Cualquier clon previo no controlado debe descartarse y clonarse nuevamente; no debe mezclar ni fusionar la historia antigua con `main`.

La limpieza local irreversible fue autorizada por Juan y ejecutada el 2026-08-11 con `git reflog expire --expire=now --all` y `git gc --prune=now`. La verificación posterior confirmó cero reflogs, cero objetos inalcanzables y ausencia del blob antiguo; no queda ninguna acción local de purga.

Como mantenimiento continuo: revisar dependencias, enlaces externos, Core Web Vitals con tráfico real y coherencia comercial antes de cada publicación.

## Historial reciente

- 2026-08-11 (segunda pasada): el alta self-service pasó de enlace secundario a opción destacada, con sección propia `#registro`, entrada en la navegación y botón en hero, precios, cierre, menú móvil, `noscript` y footer; se documentó el aviso por correo que dispara `owner-dashboard` al recibir un registro; se verificaron en vivo todos los enlaces internos y externos, las rutas, el 404, el redirect de `/afiliados` y la infraestructura de correo; URL de Facebook canónica en el JSON-LD.
- 2026-08-11: fuente comercial única; degradación completa sin JavaScript; FAQ nativo; canonical y 404 depurados; memoria consolidada; reescritura integral al modelo comercial vigente; retiro del programa de partners y claims no implementados; blog y legales alineados; captura con datos personales retirada del sitio y del historial mediante `git-filter-repo`, force-push y purga local; ticket de caché abierto en GitHub Support; imágenes optimizadas; OG 1200×630; metadata por ruta; mejoras de accesibilidad, contraste y CSP; migración a Next 16/React 19; auditoría npm en cero; estilos migrados fuera de Tailwind para cumplir las reglas del repositorio.
- 2026-07: rediseño visual con la paleta crema, tinta y cobre y las fuentes Fraunces, Archivo e IBM Plex Mono.
- 2026-06-20: creación de esta memoria y primera auditoría estructural del sitio.
