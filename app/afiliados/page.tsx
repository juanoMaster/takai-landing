import type { Metadata } from "next"
import Image from "next/image"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import WhatsAppFab from "../components/WhatsAppFab"
import Reveal from "../components/Reveal"
import FaqAccordion, { type Faq } from "../components/FaqAccordion"

export const metadata: Metadata = {
  title: "Programa de Partners — Takai | Gana comisión por cada reserva que generes",
  description:
    "Agencias de viaje, operadores turísticos y creadores de contenido: recibe un link con seguimiento y gana una comisión por cada reserva concretada en la red Takai. Sin inversión, sin administrar nada.",
  alternates: { canonical: "https://www.takai.cl/afiliados" },
}

const WA_PARTNER = "https://wa.me/56955230900?text=Hola%2C%20quiero%20ser%20partner%20de%20Takai"

const PERFILES = [
  {
    tag: "Creadores",
    title: "Influencers y creadores de contenido",
    desc: "¿Tu audiencia viaja? Instagram, TikTok, YouTube o blog: comparte cabañas y glampings reales de la red Takai con tu link y gana por cada reserva concretada.",
    dato: "Ideal para: viajes, outdoor, familia, escapadas",
  },
  {
    tag: "Agencias",
    title: "Agencias de viaje y operadores",
    desc: "Suma alojamiento verificado a tu oferta sin administrar disponibilidad, pagos ni atención. Tu link corporativo registra cada reserva de tus clientes.",
    dato: "Ideal para: agencias receptivas, tour operadores, DMCs",
  },
  {
    tag: "Embajadores",
    title: "Cualquier persona con red",
    desc: "¿Conoces turistas que buscan cabaña o dueños que necesitan sistema? Tu link personalizado convierte esas recomendaciones en ingresos reales.",
    dato: "Ideal para: guías locales, conserjes, comunidades",
  },
]

const MECANICA = [
  {
    n: "01",
    t: "Te registras por WhatsApp",
    d: "Nos cuentas quién eres y por qué canal mueves viajeros. Te creamos tu código de partner y tu link personalizado con seguimiento — sin costo, sin papeleo.",
  },
  {
    n: "02",
    t: "Compartes tu link",
    d: "Tu link lleva a las páginas de reserva de la red Takai. Cada visita queda registrada con tu código: si el turista reserva —aunque sea días después— la reserva queda atribuida a ti.",
  },
  {
    n: "03",
    t: "El turista reserva y paga",
    d: "La reserva se concreta con anticipo del 50% directo al propietario. El sistema registra fecha, monto y tu código de partner. Todo verificable, nada a mano.",
  },
  {
    n: "04",
    t: "Cobras tu comisión cada mes",
    d: "Liquidación mensual sobre reservas confirmadas y pagadas, directo a tu cuenta. Ni el turista ni el propietario pagan nada adicional por tu recomendación.",
  },
]

const FAQS_PARTNER: Faq[] = [
  {
    q: "¿Cuánto gano por cada reserva?",
    a: "El 5% de cada reserva concretada y pagada que llegue por tu link. Sin escalones ni letra chica: el mismo 5% desde la primera reserva. Y si además nos recomiendas alojamientos, ganas desde $30.000 por cada uno que se incorpore, según cuántas cabañas tenga — eso se paga una sola vez, cuando entra.",
  },
  {
    q: "¿El turista o el propietario pagan más por mi recomendación?",
    a: "No. El precio de la reserva es exactamente el mismo con o sin tu link, y el propietario tampoco paga nada adicional por ti. Tu comisión la asume Takai.",
  },
  {
    q: "¿Cómo sé que una reserva quedó atribuida a mí?",
    a: "Tu link lleva un código único de partner. Cada reserva que entra por él queda registrada en el sistema con tu código, la fecha y el monto. En la liquidación mensual recibes el detalle completo de tus reservas atribuidas.",
  },
  {
    q: "¿Cuándo y cómo se paga?",
    a: "Mensualmente, una vez verificadas las reservas confirmadas y pagadas del período, por transferencia a tu cuenta. Las reservas canceladas o no pagadas no generan comisión.",
  },
  {
    q: "¿Necesito invertir algo o firmar permanencia?",
    a: "No. Registrarse es gratis, no hay metas mínimas ni permanencia. Si dejas de compartir, simplemente dejas de generar — sin multas.",
  },
  {
    q: "¿Puedo promover cabañas fuera de Chile?",
    a: "Sí. La red Takai ya incluye alojamientos en Chile y Ecuador, y seguirá creciendo a más países. Tu link funciona sobre toda la red.",
  },
]

export default function AfiliadosPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <WhatsAppFab />

      {/* HERO */}
      <section className="mx-auto max-w-wrap px-5 pb-20 pt-32 md:px-8 md:pt-40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre">Programa de partners · Chile y el mundo</p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.03] tracking-tight text-tinta sm:text-6xl lg:text-7xl">
                Tú traes al viajero. <em className="italic text-cobre">Nosotros te pagamos.</em>
              </h1>
              <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-ceniza">
                La red Takai conecta cabañas y glampings reales con turistas que buscan reservar directo. Ganas un 5%
                por cada reserva que generes con tu link — y también por cada alojamiento que nos recomiendes.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href={WA_PARTNER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-cobre px-7 py-4 text-[15px] font-semibold text-crema transition-colors duration-300 hover:bg-cobre-dark"
                >
                  Quiero ser partner
                </a>
                <a href="#mecanica" className="link-draw text-[15px] font-medium text-tinta">
                  Cómo funciona ↓
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="rounded-xl bg-tinta p-7 text-crema">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-crema/40">Tu mes como partner — ejemplo</p>
                <div className="mt-5 space-y-4 font-mono text-[13px]">
                  <div className="flex items-center justify-between border-b border-crema/10 pb-3">
                    <span className="text-crema/60">Reservas por tu link</span>
                    <span className="font-semibold">6</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-crema/10 pb-3">
                    <span className="text-crema/60">Volumen generado</span>
                    <span className="font-semibold">$1.480.000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-crema/10 pb-3">
                    <span className="text-crema/60">Tu 5% por reservas</span>
                    <span className="font-semibold text-cobre-light">$74.000</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-crema/60">+ 2 alojamientos que recomendaste</span>
                    <span className="text-lg font-semibold text-cobre-light">$64.000</span>
                  </div>
                </div>
                <p className="mt-5 text-[12px] leading-relaxed text-crema/50">
                  Cifras ilustrativas basadas en tarifas reales de la red ($50.000 – $90.000/noche en Chile). Ni el
                  turista ni el propietario pagan nada adicional por tu recomendación.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CINTA */}
      <section className="bg-tinta">
        <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-5 md:justify-between md:px-8">
          {["Registro gratis por WhatsApp", "Link único con seguimiento", "Liquidación mensual verificada", "Sin metas mínimas ni permanencia"].map((t) => (
            <p key={t} className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-crema/80">{t}</p>
          ))}
        </div>
      </section>

      {/* PERFILES */}
      <section className="mx-auto max-w-wrap px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre">Para quién es</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
              Tres perfiles, un mismo motor.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <figure className="max-w-[220px]">
              <Image
                src="/imagenes/foto-cabana-hortensias.webp"
                alt="Cabaña real de la red Takai rodeada de hortensias"
                width={447}
                height={447}
                sizes="220px"
                className="h-auto w-full rounded-xl border border-tinta/10 shadow-[0_20px_50px_-20px_rgba(30,42,35,0.45)]"
              />
              <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-humo">
                Lo que tu audiencia reserva
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PERFILES.map((p, i) => (
            <Reveal key={p.tag} delay={i * 100}>
              <div className="flex h-full flex-col rounded-xl border border-tinta/10 bg-crema-deep p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobre">{p.tag}</p>
                <h3 className="mt-3 font-display text-[22px] font-semibold leading-snug text-tinta">{p.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ceniza">{p.desc}</p>
                <p className="mt-5 border-t border-tinta/10 pt-4 font-mono text-[11px] leading-relaxed tracking-wide text-humo">{p.dato}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MECÁNICA */}
      <section id="mecanica" className="bg-noche py-24 text-crema md:py-32">
        <div className="mx-auto max-w-wrap px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre-light">La mecánica</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Del link a tu cuenta, con registro verificable.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-crema/10 bg-crema/10 md:grid-cols-2">
            {MECANICA.map((m, i) => (
              <div key={m.n} className="bg-noche p-8">
                <Reveal delay={i * 80}>
                  <p className="font-mono text-[13px] text-cobre-light">{m.n}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{m.t}</h3>
                  <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-crema/60">{m.d}</p>
                </Reveal>
              </div>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl font-mono text-[12px] leading-relaxed text-crema/40">
              Próximamente: panel de partner con tus estadísticas en vivo — clics, reservas atribuidas y liquidaciones.
              Hoy recibes el detalle completo con cada liquidación mensual.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DOS FORMAS DE GANAR */}
      <section className="mx-auto max-w-wrap px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre">Dos formas de ganar</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
            Trae viajeros. O trae alojamientos. O las dos.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border-2 border-tinta bg-crema p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobre">Por cada reserva</p>
              <p className="mt-4 font-display text-6xl font-semibold text-tinta">5%</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ceniza">
                De cada reserva concretada y pagada que llegue por tu link. Sin escalones ni mínimos: el mismo 5%
                desde la primera. En una estadía de $360.000 son <strong className="text-tinta">$18.000</strong> por
                una recomendación.
              </p>
              <p className="mt-5 font-mono text-[12px] leading-relaxed text-humo">
                Se liquida mensualmente sobre reservas confirmadas y pagadas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-xl bg-tinta p-8 text-crema">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobre-light">Por cada alojamiento</p>
              <p className="mt-4 font-display text-6xl font-semibold">
                <span className="text-3xl font-normal text-crema/50">desde </span>$30.000
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-crema/70">
                Por cada dueño de cabañas que se incorpore con tu recomendación, según cuántos alojamientos tenga el
                centro. Se paga una vez, cuando queda activo.
              </p>
              <p className="mt-5 font-mono text-[12px] leading-relaxed text-crema/40">
                1 a 5 alojamientos $30.000 · 6 a 10 $50.000 · más de 10, a convenir.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-ceniza">
            Cada una tiene su propio link con seguimiento, y te los entregamos al registrarte. Traer un alojamiento se
            paga una vez, cuando entra. Después, lo que sigue sumando es el 5%:{" "}
            <strong className="text-tinta">solo cuentan las reservas que pasan por tu link</strong> — si un alojamiento
            recibe reservas por su cuenta, esas no generan comisión. Mientras sigas recomendando, tus ingresos se
            acumulan mes a mes sin tope.
          </p>
        </Reveal>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-wrap px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre">Dudas de partners</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-tinta">Las respuestas, sin letra chica.</h2>
              <a
                href={WA_PARTNER}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-md bg-cobre px-7 py-4 text-[15px] font-semibold text-crema transition-colors duration-300 hover:bg-cobre-dark"
              >
                Quiero ser partner
              </a>
              <p className="mt-4 font-mono text-[11.5px] tracking-wide text-humo">Respondemos el mismo día</p>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <FaqAccordion items={FAQS_PARTNER} />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
