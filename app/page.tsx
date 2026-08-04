import Image from "next/image"
import Link from "next/link"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import WhatsAppFab from "./components/WhatsAppFab"
import Reveal from "./components/Reveal"
import ChatDemo from "./components/ChatDemo"
import PriceSim from "./components/PriceSim"
import FaqAccordion, { type Faq } from "./components/FaqAccordion"

const WA_START = "https://wa.me/56955230900?text=Hola%2C%20quiero%20incorporar%20mis%20caba%C3%B1as%20a%20Takai"
const WA_INFO = "https://wa.me/56955230900?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Takai"

const FAQS: Faq[] = [
  {
    q: "¿Cómo genera Takai reservas para mis cabañas?",
    a: "Por tres canales: nuestro directorio turístico optimizado para aparecer en Google cuando alguien busca 'cabañas en Licán Ray' o 'glamping cerca de mí'; un agente de WhatsApp que responde consultas de turistas 24/7 y los guía hasta completar la reserva; y una red de partners — creadores de contenido y agencias — que promueven tus cabañas a cambio de una comisión que sale del 10% de Takai, no de tu bolsillo.",
  },
  {
    q: "¿Takai funciona fuera de Chile?",
    a: "Sí. Takai nació en el sur de Chile y ya opera también en Ecuador (Glamping Cacagual, Cotopaxi). El sistema funciona en cualquier país: página propia, calendario en tiempo real y reservas con anticipo. Si tienes cabañas o glampings fuera de Chile, escríbenos igual.",
  },
  {
    q: "¿El dinero de las reservas le llega primero a Takai?",
    a: "No. El turista paga el anticipo directo a tu cuenta — por transferencia bancaria o con tarjeta si lo prefiere. Takai nunca toca tu dinero. Solo cobramos nuestra comisión del 10% sobre las reservas que nosotros generamos, y eso se coordina contigo directamente.",
  },
  {
    q: "¿Cuánto cuesta realmente?",
    a: "La cuota de incorporación es de $160.000, una sola vez — incluye tu página completa, el calendario, los pagos y toda la configuración del sistema. No hay mensualidad: cero cuotas fijas. Takai solo cobra el 10% de las reservas que nosotros te generamos (directorio, agente de WhatsApp y partners). Tus reservas directas son siempre 100% tuyas, 0% comisión.",
  },
  {
    q: "¿En cuánto tiempo está lista mi página?",
    a: "En 72 horas. Conversamos contigo, recogemos la información de tus cabañas, precios y reglas, y en 3 días tienes tu página lista para compartir donde quieras.",
  },
  {
    q: "¿El agente de WhatsApp reemplaza mi atención?",
    a: "No, la complementa. El agente responde consultas de disponibilidad y precios automáticamente, a cualquier hora. Cuando necesita intervención humana, te avisa por WhatsApp. Tú sigues siendo quien confirma cada reserva.",
  },
  {
    q: "¿Qué pasa con mis clientes habituales?",
    a: "Son 100% tuyos. Si un huésped llega por tu propio canal — Instagram, WhatsApp, recomendación — no le debes nada a Takai. Solo cobramos cuando somos nosotros quienes te traemos una reserva nueva.",
  },
  {
    q: "¿Qué es el programa de partners?",
    a: "Una red de creadores de contenido, agencias de viaje y operadores turísticos que promueven las cabañas registradas en Takai con un link personalizado con seguimiento. Ganan una comisión por cada reserva que generan — y esa comisión sale de la comisión de Takai, no del propietario. Tienes todos los detalles en takai.cl/afiliados.",
  },
  {
    q: "¿Puedo pausar el servicio en temporada baja?",
    a: "Sí. Si durante ciertos meses tus cabañas no están disponibles, puedes pausar el sistema sin costo. No hay permanencia mínima ni penalización por pausa.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "Para nada. Tu panel funciona desde el celular como cualquier app. Recibes un aviso cuando llega una reserva, confirmas o rechazas con un botón, y listo. Nosotros nos encargamos de todo lo técnico.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. No hay contrato de permanencia. Si en algún momento decides no continuar, avisas y listo. Sin multas ni letra chica.",
  },
]

const CASOS = [
  {
    img: "/imagenes/pagina-majoaal.png",
    name: "Cabañas Majoaal",
    place: "Licán Ray · Chile",
    desc: "Cuatro cabañas entre bosque nativo con reserva directa desde $50.000 la noche.",
    url: "https://reservas.takai.cl/cabanas-majoaal-licanray",
  },
  {
    img: "/imagenes/pagina-el-mirador.png",
    name: "Cabañas El Mirador",
    place: "Licán Ray · Chile",
    desc: "Casas familiares hasta 8 personas, con calendario en vivo y anticipo del 50% online.",
    url: "https://reservas.takai.cl/el-mirador",
  },
  {
    img: "/imagenes/pagina-glamping-cacagual.png",
    name: "Glamping Cacagual",
    place: "Cotopaxi · Ecuador",
    desc: "Chalets y cabañas rústicas en plena naturaleza — el primer Takai fuera de Chile.",
    url: "https://reservas.takai.cl/glamping-cacagual",
  },
]

const QUOTES = [
  { name: "Ana María Gutiérrez", meta: "Cabañas Orilla de Río · Coñaripe", quote: "Antes lo tenía todo anotado en un cuaderno y se me perdían las cosas. Ahora lo veo todo en el teléfono y es mucho más fácil." },
  { name: "Marco Caro", meta: "Camping Valle Verde · Villarrica", quote: "Antes me pasaba que dos personas llegaban para la misma cabaña. Con esto ya no pasa más, el sistema lo controla solo." },
  { name: "Don Eulogio", meta: "Cabañas Don Eulogio · Licán Ray", quote: "Antes me mandaban mensajes por WhatsApp y yo tenía que contestar a toda hora. Ahora el cliente reserva solo y a mí me llega el aviso no más." },
]

function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="frame">
      <div className="frame-bar">
        <span className="frame-dot" />
        <span className="frame-dot" />
        <span className="frame-dot" />
        <span className="frame-url">{url}</span>
      </div>
      {children}
    </div>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={"font-mono text-[11px] uppercase tracking-[0.25em] " + (dark ? "text-cobre-light" : "text-cobre")}>
      {children}
    </p>
  )
}

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <div className="min-h-screen">
      <Nav overDark />
      <WhatsAppFab />

      {/* ─── HERO (fotografía real: amanecer sobre el lago y los volcanes) ─── */}
      <section className="relative overflow-hidden bg-noche pb-20 pt-28 text-crema md:pb-28 md:pt-40">
        <Image
          src="/imagenes/foto-lago-volcan.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noche/95 via-noche/70 to-noche/25" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-noche to-transparent" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-wrap items-center gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-6 lg:col-span-6">
            <Reveal>
              <Eyebrow dark>Nacido en el sur de Chile · Para el mundo</Eyebrow>
              <h1 className="mt-5 font-display text-[44px] font-semibold leading-[1.02] tracking-tight text-crema sm:text-6xl lg:text-7xl">
                Tus cabañas se reservan <em className="italic text-cobre-light">solas</em>.
              </h1>
              <p className="mt-6 max-w-md text-[16.5px] leading-relaxed text-crema/80">
                Página de reservas propia, calendario en tiempo real y demanda que Takai genera por ti — desde Google,
                WhatsApp y nuestra red de partners. Tú confirmas y cobras.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href={WA_START}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-cobre px-7 py-4 text-[15px] font-semibold text-crema shadow-[0_12px_40px_-10px_rgba(180,85,45,0.7)] transition-colors duration-300 hover:bg-cobre-dark"
                >
                  Empezar por WhatsApp
                </a>
                <a
                  href="https://reservas.takai.cl/cabanas-majoaal-licanray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-[15px] font-medium text-crema"
                >
                  Ver una página real →
                </a>
              </div>
              <p className="mt-7 font-mono text-[11.5px] tracking-wide text-crema/60">
                Sin permanencia · Página lista en 72 h · 0% comisión en tus reservas directas
              </p>
            </Reveal>
          </div>

          {/* Visual: el producto real, sin recortes forzados */}
          <div className="relative md:col-span-6">
            <Reveal delay={150}>
              <div className="relative md:-mr-10 lg:-mr-16">
                <Frame url="owner-dashboard · panel del propietario">
                  <Image
                    src="/imagenes/panel-calendario.png"
                    alt="Panel real del propietario en Takai: calendario de julio 2026 con reservas confirmadas, pendientes y manuales"
                    width={1920}
                    height={1008}
                    priority
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="h-auto w-full"
                  />
                </Frame>
                {/* Notificación flotante con datos reales del sistema */}
                <div className="absolute -bottom-6 left-4 max-w-[280px] rounded-xl border border-tinta/10 bg-crema p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] sm:left-8">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-wa/15 text-wa">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7c1.7 1 3.7 1.4 5.7 1.4 6.6 0 11.9-5.3 11.9-11.9C23.9 5.3 18.6 0 12 0zm5.5 14.4c-.2-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3z"/></svg>
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-humo">Aviso al propietario</p>
                  </div>
                  <p className="mt-2 text-[13px] font-medium leading-snug text-tinta">Nueva reserva confirmada</p>
                  <p className="mt-0.5 font-mono text-[11px] leading-relaxed text-ceniza">
                    Casa 1 · 21–25 jul · 2 personas
                    <br />
                    Anticipo 50%: $180.000 ✓
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CINTA DE EVIDENCIA ───────────────────────────── */}
      <section className="bg-cobre">
        <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-5 md:justify-between md:px-8">
          {[
            "72 h hasta tu página",
            "0% en reservas directas",
            "10% solo si Takai trae al turista",
            "Respuesta 24/7 por WhatsApp",
          ].map((t) => (
            <p key={t} className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-crema">
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* ─── EL PROBLEMA (editorial + fotografía real de cliente) ─── */}
      <section className="mx-auto max-w-wrap px-5 py-24 md:px-8 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <Eyebrow>El problema</Eyebrow>
            <p className="mt-6 font-display text-3xl font-medium leading-[1.25] text-tinta sm:text-4xl lg:text-[42px]">
              Son las <span className="font-mono text-cobre">23:40</span>. Un turista pregunta si tienes disponible el
              fin de semana. Tú duermes. A las <span className="font-mono text-cobre">23:52</span> ya reservó en otra
              parte.
            </p>
            <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-ceniza">
              Cada consulta sin responder es una reserva perdida. Takai contesta por ti, cobra el anticipo y bloquea el
              calendario — a cualquier hora, en cualquier país.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <figure className="md:-mr-6 lg:-mr-10">
              <Image
                src="/imagenes/foto-cabana-jardin.webp"
                alt="Cabaña real de un cliente Takai en el sur de Chile, con jardín y sendero de piedra"
                width={658}
                height={531}
                sizes="(min-width: 768px) 40vw, 90vw"
                className="h-auto w-full rounded-xl border border-tinta/10 shadow-[0_30px_70px_-25px_rgba(30,42,35,0.5)]"
              />
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-humo">
                Cabaña de un cliente Takai · Sur de Chile
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ─── LA DEMO (única sección oscura) ───────────────── */}
      <section id="producto" className="bg-noche py-24 text-crema md:py-32">
        <div className="mx-auto max-w-wrap px-5 md:px-8">
          <Reveal>
            <Eyebrow dark>El sistema, de noche</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Mientras duermes, esto es lo que pasa.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-crema/40">
                Conversación real de ejemplo — WhatsApp · 23:41
              </p>
              <ChatDemo />
            </div>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Frame url="reservas.takai.cl · resumen y anticipo">
                <Image
                  src="/imagenes/reserva-resumen.png"
                  alt="Resumen real de reserva en Takai: 4 noches, total $360.000, anticipo del 50% de $180.000"
                  width={1920}
                  height={991}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-auto w-full"
                />
              </Frame>
              <p className="mt-5 text-[14px] leading-relaxed text-crema/60">
                El turista ve el detalle completo, paga el <strong className="text-crema">50% de anticipo</strong> y tu
                calendario se bloquea al instante. Por la mañana, tú solo confirmas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASOS REALES ─────────────────────────────────── */}
      <section id="casos" className="mx-auto max-w-wrap px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Casos reales</Eyebrow>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
                Páginas vivas, reservando ahora.
              </h2>
            </div>
            <p className="max-w-sm text-[14.5px] leading-relaxed text-ceniza">
              No son maquetas: cada captura es la página real de un cliente. Ábrelas, revisa la disponibilidad, reserva
              si quieres.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASOS.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="frame">
                  <div className="frame-bar">
                    <span className="frame-dot" />
                    <span className="frame-dot" />
                    <span className="frame-dot" />
                    <span className="frame-url">{c.url.replace("https://", "")}</span>
                  </div>
                  <div className="aspect-[16/11] overflow-hidden">
                    <Image
                      src={c.img}
                      alt={"Página pública real de " + c.name + " creada con Takai"}
                      width={1920}
                      height={1320}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-lujo group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-tinta">{c.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-cobre">{c.place}</p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ceniza">{c.desc}</p>
                  </div>
                </div>
                <p className="link-draw mt-3 inline-block text-[13.5px] font-semibold text-tinta">Ver página en vivo →</p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Citas de propietarios reales */}
        <div className="mt-24 grid gap-10 border-t border-tinta/15 pt-14 md:grid-cols-3">
          {QUOTES.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <blockquote>
                <p className="font-display text-[19px] italic leading-relaxed text-tinta">“{t.quote}”</p>
                <footer className="mt-4">
                  <p className="text-[13.5px] font-semibold text-tinta">{t.name}</p>
                  <p className="font-mono text-[11px] tracking-wide text-humo">{t.meta}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── BENTO: LO QUE INCLUYE (sección oscura) ───────── */}
      <section className="bg-tinta py-24 text-crema md:py-32">
        <div className="mx-auto max-w-wrap px-5 md:px-8">
          <Reveal>
            <Eyebrow dark>Lo que incluye</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Todo el sistema, en píxeles reales.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {/* Página pública — celda alta */}
            <Reveal className="md:row-span-2">
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-crema/10 bg-noche">
                <div className="p-6 pb-4">
                  <h3 className="font-display text-xl font-semibold">Tu página pública</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-crema/65">
                    Con tu nombre, tus fotos y tu identidad. La compartes donde quieras: Instagram, WhatsApp, Google.
                  </p>
                </div>
                <div className="relative min-h-[340px] flex-1 overflow-hidden px-6 pb-0">
                  <Image
                    src="/imagenes/pagina-majoaal.png"
                    alt="Página pública de Cabañas Majoaal con sus cuatro cabañas y precios"
                    width={1920}
                    height={1788}
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="h-full w-full rounded-t-lg border border-b-0 border-crema/15 object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            {/* Reserva con anticipo — celda ancha */}
            <Reveal className="md:col-span-2" delay={100}>
              <div className="overflow-hidden rounded-xl border border-crema/10 bg-noche">
                <div className="grid items-center gap-0 sm:grid-cols-[1fr_1.4fr]">
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold">Reserva online con anticipo del 50%</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-crema/65">
                      El turista elige fechas, deja sus datos y paga directo a tu cuenta — por transferencia o tarjeta.
                      Takai nunca toca tu dinero.
                    </p>
                  </div>
                  <div className="p-4 pl-0 max-sm:pl-4">
                    <Image
                      src="/imagenes/reserva-formulario.png"
                      alt="Formulario real de reserva: fechas de estadía, datos de contacto y disponibilidad de próximos 60 días"
                      width={1920}
                      height={1018}
                      sizes="(min-width: 640px) 40vw, 90vw"
                      className="h-auto w-full rounded-lg border border-crema/15"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Calendario */}
            <Reveal delay={150}>
              <div className="h-full rounded-xl border border-crema/10 bg-noche p-6">
                <p className="font-mono text-[22px] text-cobre-light">⛁</p>
                <h3 className="mt-3 font-display text-xl font-semibold">Calendario inteligente</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-crema/65">
                  Cada reserva bloquea las fechas automáticamente. Sin dobles reservas, sin llamadas de última hora.
                </p>
              </div>
            </Reveal>

            {/* Notificaciones */}
            <Reveal delay={200}>
              <div className="h-full rounded-xl border border-crema/10 bg-noche p-6">
                <div className="rounded-lg border border-crema/15 bg-tinta p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-crema/50">WhatsApp · ahora</p>
                  <p className="mt-1 text-[12.5px] font-medium text-crema">✓ Nueva reserva — Casa río, 3 noches</p>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">Avisos al instante</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-crema/65">
                  Cada reserva llega a tu WhatsApp. Confirmas o rechazas con un botón, desde el celular.
                </p>
              </div>
            </Reveal>

            {/* Demanda */}
            <Reveal delay={250}>
              <div className="flex h-full flex-col justify-between rounded-xl bg-cobre p-6 text-crema">
                <div>
                  <h3 className="font-display text-xl font-semibold">Demanda que trabaja para ti</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-crema/85">
                    Directorio optimizado para Google, agente WhatsApp 24/7 y red de partners que promueven tus cabañas.
                  </p>
                </div>
                <p className="mt-6 font-mono text-[12px] font-semibold tracking-wide text-crema">
                  Solo pagas el 10% si el turista llegó por Takai →
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PRECIO ───────────────────────────────────────── */}
      <section id="precio" className="mx-auto max-w-wrap px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Precio</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
              Sin mensualidad. Pagamos juntos: solo cuando te traemos reservas.
            </h2>
            <div className="mt-10 space-y-7">
              <div className="border-l-2 border-cobre pl-5">
                <p className="font-mono text-2xl font-semibold text-tinta">$160.000</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ceniza">
                  Cuota de incorporación, una sola vez. Incluye tu página completa con tus cabañas, el calendario,
                  los pagos, los avisos automáticos y la configuración de todo el sistema.
                </p>
              </div>
              <div className="border-l-2 border-cobre pl-5">
                <p className="font-mono text-2xl font-semibold text-tinta">$0<span className="text-[14px] font-normal text-humo">/mes</span></p>
                <p className="mt-1 text-[14px] leading-relaxed text-ceniza">
                  Cero mensualidad. Sin cuotas fijas, <strong className="text-tinta">nunca</strong> — ni en temporada
                  baja ni en temporada alta.
                </p>
              </div>
              <div className="border-l-2 border-cobre pl-5">
                <p className="font-mono text-2xl font-semibold text-tinta">10%</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ceniza">
                  Solo sobre reservas que Takai genera — directorio, Google o partners. Nunca sobre tus reservas
                  directas.
                </p>
              </div>
              <div className="rounded-lg bg-tinta p-5">
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.15em] text-cobre-light">
                  Tus reservas directas: 0%. Siempre.
                </p>
              </div>
            </div>
            <a
              href={WA_START}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-md bg-cobre px-7 py-4 text-[15px] font-semibold text-crema transition-colors duration-300 hover:bg-cobre-dark"
            >
              Empezar por WhatsApp
            </a>
            <p className="mt-4 font-mono text-[11.5px] tracking-wide text-humo">Sin permanencia · Sin cuotas mensuales</p>
          </Reveal>

          <Reveal delay={150}>
            <PriceSim />
          </Reveal>
        </div>
      </section>

      {/* ─── PARTNERS / AFILIADOS ─────────────────────────── */}
      <section className="bg-tinta py-24 text-crema md:py-32">
        <div className="mx-auto max-w-wrap px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow dark>Programa de partners</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                ¿Mueves viajeros? <em className="italic text-cobre-light">Monetízalos.</em>
              </h2>
              <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-crema/70">
                Agencias de viaje, operadores turísticos, creadores de contenido: recibe un link personalizado con
                seguimiento y gana una comisión por cada reserva que generes. Tu comisión sale del 10% de Takai — el
                propietario nunca paga extra.
              </p>
              <Link
                href="/afiliados"
                className="mt-9 inline-block rounded-md border border-crema/30 px-7 py-4 text-[15px] font-semibold text-crema transition-colors duration-300 hover:border-cobre-light hover:text-cobre-light"
              >
                Conocer el programa completo →
              </Link>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-4">
                {[
                  { t: "Link único con seguimiento", d: "Cada partner recibe un link personalizado. Toda reserva que entra por tu link queda atribuida a ti, con registro verificable." },
                  { t: "Comisión por reserva concretada", d: "Ganas cuando el turista efectivamente reserva y paga. Liquidación mensual, directo a tu cuenta." },
                  { t: "Cero inversión, cero riesgo", d: "No administras nada: ni disponibilidad, ni pagos, ni atención. Solo compartes y cobras." },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-crema/15 p-5">
                    <p className="font-mono text-[11px] text-cobre-light">0{i + 1}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold">{item.t}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-crema/60">{item.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="mx-auto max-w-wrap px-5 py-24 md:px-8 md:py-32">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <Eyebrow>Preguntas frecuentes</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-tinta">
                Todo lo que necesitas saber antes de empezar.
              </h2>
              <p className="mt-6 text-[14.5px] leading-relaxed text-ceniza">¿Otra duda? Pregúntanos directo — responde una persona, no un bot.</p>
              <a
                href={WA_INFO}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw mt-4 inline-block text-[15px] font-semibold text-cobre"
              >
                Escribir por WhatsApp →
              </a>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <FaqAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ─── CTA FINAL (editorial: texto + volcán real) ───── */}
      <section className="bg-noche text-crema">
        <div className="mx-auto grid max-w-wrap md:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-24 md:px-8 md:py-36">
            <Reveal>
              <Image src="/takai-hawk-nobg.png" alt="" width={687} height={400} className="h-12 w-auto opacity-90" />
              <h2 className="mt-8 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Tú tienes las cabañas. <em className="italic text-cobre-light">Lo demás corre por nosotros.</em>
              </h2>
              <div className="mt-10">
                <a
                  href={WA_START}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-cobre px-8 py-4 text-[15.5px] font-semibold text-crema shadow-[0_12px_40px_-10px_rgba(180,85,45,0.7)] transition-colors duration-300 hover:bg-cobre-dark"
                >
                  Empezar por WhatsApp
                </a>
              </div>
              <p className="mt-7 font-mono text-[11.5px] uppercase tracking-[0.2em] text-crema/50">
                Respondemos el mismo día · Página lista en 72 horas
              </p>
            </Reveal>
          </div>
          <div className="relative min-h-[340px] md:min-h-0">
            <Image
              src="/imagenes/foto-volcan-playa.webp"
              alt="Volcán Villarrica nevado sobre la playa del lago, sur de Chile"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-noche via-noche/30 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
