import Image from "next/image"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import WhatsAppFab from "./components/WhatsAppFab"
import Reveal from "./components/Reveal"
import FaqAccordion, { type Faq } from "./components/FaqAccordion"

const WA_START = "https://wa.me/56955230900?text=Hola%2C%20quiero%20incorporar%20mis%20caba%C3%B1as%20a%20Takai"
const WA_INFO = "https://wa.me/56955230900?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Takai"
const REGISTRO_URL = "https://reservas.takai.cl/registro"

const ACTIVACION = [
  ["1 a 3", "$99.000"],
  ["4 a 7", "$150.000"],
  ["8 a 10", "$250.000"],
  ["Más de 11", "A cotizar"],
]

const ANUALIDAD = [
  ["1 a 3", "$250.000"],
  ["4 a 7", "$370.000"],
  ["8 a 10", "$550.000"],
  ["Más de 11", "A cotizar"],
]

const FAQS: Faq[] = [
  {
    q: "¿Cuánto cuesta incorporar mis cabañas?",
    a: "La activación se paga una sola vez: $99.000 para 1 a 3 cabañas, $150.000 para 4 a 7, $250.000 para 8 a 10 y, si tienes más de 11, preparamos una cotización.",
  },
  {
    q: "¿Cuándo se cobra la anualidad?",
    a: "La anualidad se cobra una vez al año y solo entre diciembre y marzo. De abril a noviembre no pagas nada. Su valor depende de cuántas cabañas administras y está publicado en esta misma página.",
  },
  {
    q: "¿Takai cobra comisión por mis reservas?",
    a: "No. La comisión es 0%. Lo que cobras por tus cabañas es íntegramente tuyo, tanto si el huésped llegó por tu página como si anotaste la reserva desde el panel.",
  },
  {
    q: "¿Cómo paga el huésped?",
    a: "Puede pagar el anticipo por transferencia directamente a tu cuenta. No necesitas una máquina de tarjetas ni una cuenta de comercio. MercadoPago es opcional para quien ya lo tenga habilitado.",
  },
  {
    q: "¿El calendario evita las reservas duplicadas?",
    a: "Sí. Cuando entra una solicitud, las fechas quedan bloqueadas para que nadie más pueda tomar la misma cabaña en esos días. También puedes bloquear fechas o anotar reservas recibidas por teléfono.",
  },
  {
    q: "¿Puedo cambiar precios, fotos y disponibilidad?",
    a: "Sí. El panel es autoadministrable: puedes cambiar precios, subir fotos, bloquear fechas y registrar reservas sin depender de nosotros.",
  },
  {
    q: "¿Puedo definir precios distintos para el verano?",
    a: "Sí. Configuras el precio de cada temporada una vez y el sistema aplica el valor correcto según las fechas elegidas por el huésped.",
  },
  {
    q: "¿Puedo usar mi propio dominio?",
    a: "Sí. Puedes usar un dominio como micabana.cl para que la página de reservas lleve tu nombre y tu identidad.",
  },
  {
    q: "¿Cuánto demora en estar lista mi página?",
    a: "Una vez que recibimos tus fotos, precios y reglas, tu página puede quedar lista en horas. No necesitas esperar semanas ni saber de tecnología.",
  },
  {
    q: "¿Puedo registrarme sin hablar primero por WhatsApp?",
    a: "Sí. Puedes registrarte en línea, cargar los datos de tu negocio y dejar tu incorporación lista para revisión.",
  },
]

const CASOS = [
  {
    img: "/imagenes/pagina-majoaal.webp",
    name: "Cabañas Majoaal",
    place: "Licán Ray · Chile",
    desc: "Cuatro cabañas entre bosque nativo con su disponibilidad y precios en una sola página.",
    url: "https://reservas.takai.cl/cabanas-majoaal-licanray",
  },
  {
    img: "/imagenes/pagina-el-mirador.webp",
    name: "Cabañas El Mirador",
    place: "Licán Ray · Chile",
    desc: "Casas familiares para hasta 8 personas con calendario y reserva directa.",
    url: "https://reservas.takai.cl/el-mirador",
  },
  {
    img: "/imagenes/pagina-glamping-cacagual.webp",
    name: "Glamping Cacagual",
    place: "Cotopaxi · Ecuador",
    desc: "Chalets y cabañas rústicas administrados desde el mismo sistema Takai.",
    url: "https://reservas.takai.cl/glamping-cacagual",
  },
]

function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="tk-frame">
      <div className="tk-frame-bar">
        <span className="tk-frame-dot" />
        <span className="tk-frame-dot" />
        <span className="tk-frame-dot" />
        <span className="tk-frame-url">{url}</span>
      </div>
      {children}
    </div>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={"tk-eyebrow " + (dark ? "tk-eyebrow-dark" : "tk-eyebrow-light")}>
      {children}
    </p>
  )
}

function PriceTable({ title, note, rows }: { title: string; note: string; rows: string[][] }) {
  return (
    <div className="tk-price-card">
      <div className="tk-price-header">
        <h3 className="tk-price-title">{title}</h3>
        <p className="tk-price-note">{note}</p>
      </div>
      <table className="tk-price-table">
        <caption className="tk-visually-hidden">{title + ": " + note}</caption>
        <thead className="tk-price-columns">
          <tr>
            <th scope="col" className="tk-price-column-cabins">Cabañas</th>
            <th scope="col" className="tk-price-column-value">Precio</th>
          </tr>
        </thead>
        <tbody className="tk-price-body">
          {rows.map(([cabins, price]) => (
            <tr key={cabins} className="tk-price-row">
              <th scope="row" className="tk-price-cabins">{cabins}</th>
              <td className="tk-price-value">{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <div className="tk-home">
      <Nav overDark />
      <WhatsAppFab />

      <main id="contenido" tabIndex={-1}>
        <section className="tk-hero">
          <Image
            src="/imagenes/foto-lago-volcan.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="tk-hero-background"
          />
          <div className="tk-hero-overlay" aria-hidden="true" />
          <div className="tk-hero-fade" aria-hidden="true" />

          <div className="tk-hero-layout">
            <div className="tk-hero-copy">
              <Eyebrow dark>Sistema de reservas para dueños de cabañas</Eyebrow>
              <h1 className="tk-hero-title">
                Tus cabañas se reservan <em className="tk-hero-title-accent">solas</em>.
              </h1>
              <p className="tk-hero-lead">
                Tu huésped ve la disponibilidad, elige sus fechas y envía la reserva desde tu propia página. El calendario
                aparta esos días y tú recibes la solicitud para confirmarla.
              </p>
              <div className="tk-hero-actions">
                <a
                  href={WA_START}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tk-button tk-button-copper tk-hero-primary"
                >
                  Empezar por WhatsApp
                </a>
                <a href={REGISTRO_URL} className="tk-drawn-link tk-hero-secondary">
                  Regístrate en línea →
                </a>
              </div>
              <p className="tk-hero-proof">
                Cero comisión · Página lista en horas · Panel autoadministrable
              </p>
            </div>

            <div className="tk-hero-product">
              <div className="tk-hero-product-inner">
                <Frame url="panel del propietario · calendario">
                  <Image
                    src="/imagenes/panel-calendario.webp"
                    alt="Panel del propietario en Takai con calendario de reservas confirmadas, pendientes y manuales"
                    width={1920}
                    height={1008}
                    priority
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="tk-image-fluid"
                  />
                </Frame>
                <div className="tk-booking-notice">
                  <div className="tk-booking-notice-heading">
                    <span className="tk-booking-notice-icon" aria-hidden="true">✓</span>
                    <p className="tk-booking-notice-label">Aviso al propietario</p>
                  </div>
                  <p className="tk-booking-notice-title">Nueva solicitud de reserva</p>
                  <p className="tk-booking-notice-detail">
                    Casa 1 · 21–25 jul · 2 personas
                    <br />
                    Fechas apartadas en el calendario ✓
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tk-benefits-strip" aria-label="Ventajas principales">
          <div className="tk-benefits-list">
            {["0% de comisión", "Calendario que se bloquea solo", "Panel autoadministrable", "Abril a noviembre: $0"].map((text) => (
              <p key={text} className="tk-benefit-item">{text}</p>
            ))}
          </div>
        </section>

        <section className="tk-problem">
          <div className="tk-problem-layout">
            <Reveal className="tk-problem-copy">
              <Eyebrow>El problema</Eyebrow>
              <h2 className="tk-problem-title">
                La consulta que no respondes a tiempo termina en otra cabaña.
              </h2>
              <p className="tk-problem-text">
                Y cuando administras WhatsApp, llamadas y cuadernos al mismo tiempo, también puedes vender dos veces la
                misma fecha. Una página con disponibilidad real elimina esa espera y mantiene un solo calendario.
              </p>
            </Reveal>
            <Reveal className="tk-problem-visual" delay={120}>
              <figure className="tk-problem-figure">
                <Image
                  src="/imagenes/foto-cabana-jardin.webp"
                  alt="Cabaña de madera con jardín y sendero de piedra en el sur de Chile"
                  width={658}
                  height={531}
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="tk-problem-image"
                />
                <figcaption className="tk-problem-caption">
                  Tu tiempo vuelve a estar en tus manos
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <section id="como-funciona" className="tk-process">
          <div className="tk-section-shell">
            <Reveal>
              <Eyebrow dark>Cómo funciona</Eyebrow>
              <h2 className="tk-section-title tk-section-title-light">
                De la consulta a la reserva, en tres pasos.
              </h2>
            </Reveal>

            <div className="tk-process-grid">
              {[
                { n: "01", title: "Te damos tu página", text: "Con tus fotos, precios, reglas y disponibilidad. También puedes usar tu propio dominio." },
                { n: "02", title: "El huésped reserva", text: "Elige la cabaña y las fechas a cualquier hora. Puede pagar el anticipo por transferencia a tu cuenta." },
                { n: "03", title: "Tú confirmas", text: "Recibes el aviso, revisas la solicitud y administras todo desde el panel. Las fechas ya quedaron apartadas." },
              ].map((step, index) => (
                <Reveal key={step.n} delay={index * 90}>
                  <div className="tk-process-card">
                    <p className="tk-process-number">{step.n}</p>
                    <h3 className="tk-process-title">{step.title}</h3>
                    <p className="tk-process-text">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="tk-process-product" delay={180}>
              <Frame url="página de reservas · disponibilidad y datos del huésped">
                <Image
                  src="/imagenes/reserva-formulario.webp"
                  alt="Formulario de reserva Takai con fechas, disponibilidad y datos de contacto"
                  width={1920}
                  height={1018}
                  sizes="(min-width: 768px) 80vw, 100vw"
                  className="tk-image-fluid"
                />
              </Frame>
            </Reveal>
          </div>
        </section>

        <section id="casos" className="tk-cases">
          <Reveal>
            <div className="tk-cases-heading">
              <div>
                <Eyebrow>Casos reales</Eyebrow>
                <h2 className="tk-section-title tk-section-title-dark">
                  Así se ve una página hecha con Takai.
                </h2>
              </div>
              <p className="tk-cases-intro">
                Son páginas reales de alojamientos que administran sus cabañas con el sistema.
              </p>
            </div>
          </Reveal>

          <div className="tk-cases-grid">
            {CASOS.map((item, index) => (
              <Reveal key={item.name} delay={index * 100}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="tk-case-link">
                  <Frame url={item.url.replace("https://", "")}>
                    <div className="tk-case-image-wrap">
                      <Image
                        src={item.img}
                        alt={"Página pública de " + item.name + " creada con Takai"}
                        width={1920}
                        height={1320}
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="tk-case-image"
                      />
                    </div>
                  </Frame>
                  <h3 className="tk-case-title">{item.name}</h3>
                  <p className="tk-case-place">{item.place}</p>
                  <p className="tk-case-description">{item.desc}</p>
                  <p className="tk-drawn-link tk-case-action">Ver página →</p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="incluye" className="tk-features">
          <div className="tk-section-shell">
            <Reveal>
              <Eyebrow dark>Lo que incluye</Eyebrow>
              <h2 className="tk-section-title tk-section-title-light">
                Lo necesario para recibir y ordenar tus reservas.
              </h2>
            </Reveal>

            <div className="tk-features-grid">
              {[
                { title: "Tu página y tu dominio", text: "Una página con tu nombre, fotos y reglas. Si quieres, puede funcionar en un dominio propio como micabana.cl." },
                { title: "Reservas a cualquier hora", text: "El huésped revisa la disponibilidad y envía su solicitud sin esperar una respuesta por teléfono." },
                { title: "Calendario sin duplicados", text: "Cada solicitud aparta las fechas. También puedes bloquear días o registrar reservas que tomaste por otro canal." },
                { title: "Cobro por transferencia", text: "El anticipo llega directo a tu cuenta. MercadoPago queda como opción para quien ya lo tenga habilitado." },
                { title: "Panel autoadministrable", text: "Cambia precios, sube fotos, bloquea fechas y anota reservas desde tu teléfono o computador." },
                { title: "Precios por temporada", text: "Define una vez el valor de verano o vacaciones y el sistema aplica el precio cuando corresponde." },
              ].map((feature, index) => (
                <Reveal key={feature.title} delay={(index % 3) * 80}>
                  <div className="tk-feature-card">
                    <span className="tk-feature-number" aria-hidden="true">0{index + 1}</span>
                    <h3 className="tk-feature-title">{feature.title}</h3>
                    <p className="tk-feature-text">{feature.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="precio" className="tk-pricing">
          <Reveal>
            <div className="tk-pricing-heading">
              <Eyebrow>Precios</Eyebrow>
              <h2 className="tk-pricing-title">
                Pagas en la temporada en que tus cabañas trabajan.
              </h2>
              <p className="tk-pricing-intro">
                La activación se paga una vez al incorporarte. Después, la anualidad se cobra únicamente durante la
                temporada alta. Todos los valores están en pesos chilenos.
              </p>
            </div>
          </Reveal>

          <div className="tk-pricing-grid">
            <Reveal>
              <PriceTable title="Activación" note="Pago único al incorporarse" rows={ACTIVACION} />
            </Reveal>
            <Reveal delay={120}>
              <PriceTable title="Anualidad" note="Se cobra solo entre diciembre y marzo" rows={ANUALIDAD} />
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="tk-season-highlight">
              <p className="tk-season-title">De abril a noviembre no paga nada.</p>
              <p className="tk-season-text">
                Y Takai no descuenta comisión de tus reservas: lo que cobras por tu cabaña es íntegramente tuyo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="tk-pricing-actions">
              <a
                href={WA_START}
                target="_blank"
                rel="noopener noreferrer"
                className="tk-button tk-button-dark"
              >
                Consultar por WhatsApp
              </a>
              <a
                href={REGISTRO_URL}
                className="tk-button tk-button-outline-dark"
              >
                Regístrate en línea
              </a>
            </div>
          </Reveal>
        </section>

        <section id="faq" className="tk-faq">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
          <div className="tk-faq-layout">
            <div className="tk-faq-heading">
              <Reveal>
                <Eyebrow>Preguntas frecuentes</Eyebrow>
                <h2 className="tk-faq-title">
                  Lo que necesitas saber antes de empezar.
                </h2>
                <p className="tk-faq-intro">
                  ¿Te quedó una duda? Escríbenos. Te responde una persona.
                </p>
                <a href={WA_INFO} target="_blank" rel="noopener noreferrer" className="tk-drawn-link tk-faq-action">
                  Preguntar por WhatsApp →
                </a>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <FaqAccordion items={FAQS} />
            </Reveal>
          </div>
        </section>

        <section className="tk-final-cta">
          <div className="tk-final-layout">
            <div className="tk-final-copy">
              <Reveal>
                <Image src="/takai-hawk-nobg.webp" alt="" width={69} height={40} sizes="69px" className="tk-final-mark" />
                <h2 className="tk-final-title">
                  Recibe la reserva. <em className="tk-final-title-accent">No otra consulta pendiente.</em>
                </h2>
                <p className="tk-final-text">
                  Cuéntanos cuántas cabañas tienes y deja tu página funcionando en horas.
                </p>
                <div className="tk-final-actions">
                  <a href={WA_START} target="_blank" rel="noopener noreferrer" className="tk-button tk-button-copper tk-final-button">
                    Empezar por WhatsApp
                  </a>
                  <a href={REGISTRO_URL} className="tk-button tk-button-outline-light tk-final-button">
                    Regístrate en línea
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="tk-final-visual">
              <Image src="/imagenes/foto-volcan-playa.webp" alt="Volcán Villarrica nevado sobre la playa del lago" fill sizes="(min-width: 768px) 50vw, 100vw" className="tk-final-image" />
              <div className="tk-final-overlay" aria-hidden="true" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
