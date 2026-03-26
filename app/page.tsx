"use client"
import { useState } from "react"
import ContactModal from "./components/ContactModal"

const CLIENTS = [
  { name: "Rukatraro", loc: "Licanray, Lago Calafaúén", detail: "2 cabañas · hasta 5 personas" },
  { name: "Cabañas Trinidad", loc: "Lago Villarrica, Araucanía", detail: "3 cabañas · acepta mascotas" },
  { name: "Ruka Pelín", loc: "Pucón, Araucanía", detail: "4 cabañas · hasta 8 personas" },
  { name: "Lago Azul Lodge", loc: "Villarrica, Araucanía", detail: "2 cabañas · vista al lago" },
  { name: "Refugio Nahuelbuta", loc: "Angol, Bío-Bío", detail: "3 cabañas · parque nacional" },
  { name: "Cabañas del Volcán", loc: "Malalcahuello, Araucanía", detail: "5 cabañas · ski · trekking" },
  { name: "Orilla Sur", loc: "Lican Ray, Lago Calafaúén", detail: "2 cabañas · orilla del lago" },
  { name: "Pehuéón Retreat", loc: "Lonquimay, Araucanía", detail: "3 cabañas · bosque pehuéón" },
  { name: "Ribera Toltén", loc: "Teodoro Schmidt, Araucanía", detail: "4 cabañas · río Toltén" },
  { name: "Alto Biobío Lodges", loc: "Ralco, Bío-Bío", detail: "3 cabañas · cordillera" },
  { name: "Cabañas Colihuacho", loc: "Collipulli, Araucanía", detail: "2 cabañas · campo y naturaleza" },
  { name: "Laguna Icalma", loc: "Lonquimay, Araucanía", detail: "4 cabañas · laguna glacial" },
  { name: "Nativa Pucón", loc: "Pucón, Araucanía", detail: "5 cabañas · centro turístico" },
  { name: "Cabañas Llifén", loc: "Futrono, Los Ríos", detail: "3 cabañas · Lago Ranco" },
  { name: "Sendero Curacautín", loc: "Curacautín, Araucanía", detail: "2 cabañas · Conguillío" },
  { name: "Mirador Villarrica", loc: "Villarrica, Araucanía", detail: "4 cabañas · vista volcán" },
  { name: "Huilo Huilo Norte", loc: "Neltume, Los Ríos", detail: "3 cabañas · selva valdiviana" },
  { name: "Ruka Mahuida", loc: "Temuco, Araucanía", detail: "2 cabañas · a 20 min del centro" },
]

const TESTIMONIALS = [
  { quote: "Me perdía reservas porque se me cruzaban los mensajes en WhatsApp. Con esto los turistas reservan solos y yo solo confirmo. Este año se me llenaron más las cabañas que nunca.", name: "María Soto", place: "Lago Azul Lodge · Villarrica" },
  { quote: "Yo no sé nada de computadores y en tres días ya estaba recibiendo reservas. El cabro de Takai lo armó todo, yo solo compartí el link.", name: "Rodrigo Jara", place: "Ruka Pelín · Pucón" },
  { quote: "Lo que más me gustó es que la plata llega directo a mi cuenta. No tengo que esperarle a nadie. El turista transfiere y listo, ya está.", name: "Claudia Muñoz", place: "Orilla Sur · Lican Ray" },
  { quote: "Antes me confirmaban y no llegaban. Ahora pagan el adelanto al reservar y eso se acabó. Me ahorro el mal rato y la cabaña vacía.", name: "Héctor Villalobos", place: "Refugio Nahuelbuta · Angol" },
  { quote: "Antes pasaba el día respondiendo mensajes de gente preguntando precios y disponibilidad. Ahora eso lo hace el sistema solo y yo me dedico a atender bien a los turistas.", name: "Patricio Neculpán", place: "Pehuéón Retreat · Lonquimay" },
  { quote: "Antes anotaba todo en un cuaderno y me confundía con las fechas. Ahora entro al celular y veo al tiro qué cabaña está libre y cuánto cobrar.", name: "Ana Contreras", place: "Cabañas del Volcán · Malalcahuello" },
  { quote: "Pensé que era caro pero calculé: una sola reserva perdida me costaba más que el 15%. Y ahora no pierdo ninguna.", name: "Jorge Espinoza", place: "Sendero Curacautín · Conguillío" },
  { quote: "Tengo 4 cabañas y antes era un caos. Ahora veo todo en una pantalla. Cada cabaña su calendario, sus reservas, todo junto.", name: "Verónica Alarcón", place: "Mirador Villarrica · Araucanía" },
]

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [bannerOpen, setBannerOpen] = useState(true)

  const green = "#7ab87a"
  const bg = "#0d1a12"
  const nav = "#050d07"
  const card = "#0f1e10"
  const border = "#1e3020"
  const gold = "#e8d5a3"
  const muted = "#4a6a48"
  const body = "#8a9e88"

  return (
    <div style={{ fontFamily: "sans-serif", background: bg, color: "#f0ede8", minHeight: "100vh" }}>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Promo banner */}
      {bannerOpen && (
        <div style={{ background: "#162618", borderBottom: "1px solid " + border, padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", position: "relative" }}>
          <span style={{ fontSize: "11px", color: green, letterSpacing: "0.5px" }}>
            <strong>{"Oferta alta nueva:"}</strong>{" $0 mensualidad. Solo 15% por reserva. Sin permanencia mínima."}
          </span>
          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "20px", padding: "5px 14px", fontSize: "11px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" as const }}>{"Aprovechar →"}</button>
          <button onClick={() => setBannerOpen(false)} style={{ position: "absolute", right: "16px", background: "none", border: "none", color: muted, fontSize: "18px", cursor: "pointer", lineHeight: 1, padding: "0 4px" }}>×</button>
        </div>
      )}

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: nav, borderBottom: "1px solid " + border, padding: "0 32px", height: "58px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/takai-logo.png" alt="Takai" style={{ width: "32px", height: "32px", objectFit: "contain" as const }} />
          <span style={{ fontFamily: "Georgia,serif", fontSize: "20px", letterSpacing: "3px", color: gold, textTransform: "uppercase" as const }}>Takai<span style={{ color: green }}>.cl</span></span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <a href="#como-funciona" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>{"Cómo funciona"}</a>
          <a href="#clientes" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>Clientes</a>
          <a href="#testimonios" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>Testimonios</a>
          <a href="#inversion" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>{"Inversión"}</a>
          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "10px", padding: "9px 20px", fontSize: "12px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>Comenzar gratis</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 60px", textAlign: "center" as const }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase" as const, color: green, marginBottom: "16px", fontWeight: 600 }}>Sistema profesional de reservas · Chile</div>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,5vw,56px)", color: gold, margin: "0 0 20px 0", fontWeight: 400, lineHeight: 1.15, maxWidth: "820px", marginLeft: "auto", marginRight: "auto" }}>
          {"Deja de perder reservas."}
          <br />
          <span style={{ color: green }}>{"Empieza a ganar tranquilidad."}</span>
        </h1>
        <p style={{ fontSize: "17px", color: body, lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 16px", fontWeight: 400 }}>
          {"Automatizamos tus reservas, cobramos el adelanto y gestionamos tu disponibilidad — para que generes más ingresos y disfrutes de más tiempo libre."}
        </p>
        <p style={{ fontSize: "14px", color: green, marginBottom: "36px", fontWeight: 600 }}>
          {"El dinero de cada reserva llega directo a tu cuenta. Nosotros nunca lo tocamos."}
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" as const }}>
          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "12px", padding: "15px 32px", fontSize: "15px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>{"Quiero unirme →"}</button>
          <a href="#como-funciona" style={{ background: "transparent", color: body, border: "1px solid " + border, borderRadius: "12px", padding: "15px 32px", fontSize: "15px", textDecoration: "none", letterSpacing: "0.5px" }}>{"Ver cómo funciona"}</a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "0", marginTop: "56px", justifyContent: "center", flexWrap: "wrap" as const, border: "1px solid " + border, borderRadius: "16px", overflow: "hidden", background: card }}>
          {[
            { n: "15%", label: "Solo pagas cuando el sistema reserva", sub: "Sin mensualidad fija" },
            { n: "72h", label: "Tu sistema está listo", sub: "Nosotros lo armamos todo" },
            { n: "18", label: "Complejos activos hoy", sub: "Araucanía y Bío-Bío" },
          ].map((s, i) => (
            <div key={i} style={{ flex: "1 1 200px", padding: "28px 24px", borderRight: i < 2 ? "1px solid " + border : "none", textAlign: "center" as const }}>
              <div style={{ fontFamily: "Georgia,serif", fontSize: "42px", color: gold, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "13px", color: body, marginTop: "8px" }}>{s.label}</div>
              <div style={{ fontSize: "11px", color: muted, marginTop: "4px" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Panel mockup */}
      <section style={{ background: "#080f09", borderTop: "1px solid " + border, borderBottom: "1px solid " + border, padding: "56px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "12px", fontWeight: 600 }}>Tu panel de control</div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "30px", color: gold, margin: "0 0 16px 0", fontWeight: 400, lineHeight: 1.3 }}>{"Todo tu negocio en un solo vistazo"}</h2>
            <p style={{ color: body, fontSize: "14px", lineHeight: 1.8, margin: "0 0 20px 0" }}>{"Confirma reservas, bloquea fechas y controla tus ingresos desde el celular — sin instalar apps, sin complicaciones técnicas."}</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
              {["Calendario visual de reservas y disponibilidad","Confirmación de pagos con un toque","Historial completo de reservas y cancelaciones","Acceso desde cualquier celular o computador"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: green, fontSize: "14px", marginTop: "1px" }}>✔</span>
                  <span style={{ color: body, fontSize: "13px" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Mock panel UI */}
          <div style={{ background: card, border: "1px solid " + border, borderRadius: "16px", padding: "20px", fontSize: "12px" }}>
            <div style={{ color: muted, fontSize: "10px", letterSpacing: "2px", marginBottom: "12px" }}>NATIVA PUCÓN · PANEL</div>
            <div style={{ background: "#162618", border: "1px solid " + border, borderRadius: "10px", padding: "14px 16px", marginBottom: "10px" }}>
              <div style={{ color: green, fontSize: "11px", marginBottom: "4px" }}>{"Nueva reserva recibida"}</div>
              <div style={{ color: gold }}>{"Cabaña Nº2 · 4 noches"}</div>
              <div style={{ color: muted, fontSize: "11px", marginTop: "4px" }}>{"Check-in 28 mar · $160.000 · Adelanto 20%"}</div>
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                <span style={{ background: green, color: "#0d1a12", borderRadius: "6px", padding: "5px 12px", fontSize: "11px", fontWeight: 700 }}>{"Confirmar pago"}</span>
                <span style={{ color: muted, borderRadius: "6px", padding: "5px 12px", fontSize: "11px", border: "1px solid " + border }}>Ver detalle</span>
              </div>
            </div>
            <div style={{ color: muted, fontSize: "10px", marginBottom: "8px" }}>RESUMEN MARZO 2026</div>
            {[
              { l: "Ingresos", v: "$320.000", c: gold },
              { l: "Reservas confirmadas", v: "8", c: green },
              { l: "Adelantos cobrados", v: "$64.000", c: body },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: i < 2 ? "1px solid " + border : "none" }}>
                <span style={{ color: muted, fontSize: "12px" }}>{r.l}</span>
                <span style={{ color: r.c, fontFamily: "Georgia,serif" }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="como-funciona" style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ textAlign: "center" as const, marginBottom: "48px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "10px", fontWeight: 600 }}>{"Qué incluye"}</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: 0, fontWeight: 400 }}>{"Diseñado para dueños de cabañas en Chile"}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {[
            { icon: "📅", title: "Calendario inteligente", desc: "Ve reservas, bloquea fechas y confirma pagos en segundos. Sin instalar nada — solo abres el link desde tu celular." },
            { icon: "🌐", title: "Página de reservas pública", desc: "Formulario profesional con tu imagen. Los turistas eligen fechas, ven el precio exacto y pagan el adelanto — solos." },
            { icon: "💰", title: "Sin mensualidad, sin riesgo", desc: "Sin mensualidad fija. Solo cobramos el 15% por cada reserva que llegue a través del sistema. Las reservas que gestionas tú directamente no tienen ningún costo." },
            { icon: "💬", title: "Aviso WhatsApp instantáneo", desc: "Cada nueva reserva te llega al instante por WhatsApp. El turista también recibe su confirmación. Nunca más pierdas un cliente." },
          ].map((f, i) => (
            <div key={i} style={{ background: card, border: "1px solid " + border, borderRadius: "16px", padding: "28px 24px" }}>
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: gold, margin: "0 0 10px 0", fontWeight: 400 }}>{f.title}</h3>
              <p style={{ color: body, fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "#080f09", borderTop: "1px solid " + border, borderBottom: "1px solid " + border, padding: "72px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: "48px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "10px", fontWeight: 600 }}>Proceso</div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "32px", color: gold, margin: 0, fontWeight: 400 }}>{"En menos de 72 horas tu sistema está listo."}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
            {[
              { n: "I", title: "Cuéntanos sobre tus cabañas", desc: "Escíbenos por WhatsApp o completa el formulario breve — lo que sea más cómodo para ti." },
              { n: "II", title: "Armamos todo por ti", desc: "En menos de 72 horas tienes tu panel de admin y tu página de reservas lista — sin que tengas que hacer nada técnico." },
              { n: "III", title: "Empieza a recibir reservas", desc: "Compartís tu link. Los turistas eligen fechas, pagan el adelanto y tú confirmas con un toque desde donde estés." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "20px" }}>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "24px", color: green, opacity: 0.6, lineHeight: 1, flexShrink: 0, paddingTop: "2px" }}>{s.n}</div>
                <div>
                  <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: gold, margin: "0 0 8px 0", fontWeight: 400 }}>{s.title}</h3>
                  <p style={{ color: body, fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "40px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="https://wa.me/56955230900?text=Hola%2C+quiero+conocer+Takai" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", borderRadius: "12px", padding: "13px 28px", fontSize: "14px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.5px" }}>{"WhatsApp directo →"}</a>
            <button onClick={() => setModalOpen(true)} style={{ background: "transparent", color: body, border: "1px solid " + border, borderRadius: "12px", padding: "13px 28px", fontSize: "14px", cursor: "pointer", letterSpacing: "0.5px" }}>{"Formulario breve →"}</button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clientes" style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ textAlign: "center" as const, marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "10px", fontWeight: 600 }}>Nuestra red activa</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "32px", color: gold, margin: "0 0 8px 0", fontWeight: 400 }}>{"Cabañas que ya confían en Takai"}</h2>
          <p style={{ color: muted, fontSize: "13px", margin: 0 }}>{"18 complejos activos desde la Araucanía y el Bío-Bío."}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
          {CLIENTS.map((c, i) => (
            <div key={i} style={{ background: card, border: "1px solid " + border, borderRadius: "14px", padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "15px", color: gold, marginBottom: "3px" }}>{c.name}</div>
                <div style={{ color: muted, fontSize: "11px" }}>{c.loc}</div>
                <div style={{ color: "#3a5a38", fontSize: "11px", marginTop: "2px" }}>{c.detail}</div>
              </div>
              <span style={{ background: "#162618", color: green, border: "1px solid #1e3a1e", borderRadius: "20px", padding: "4px 10px", fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase" as const, flexShrink: 0, marginLeft: "12px" }}>Activo</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" style={{ background: "#080f09", borderTop: "1px solid " + border, borderBottom: "1px solid " + border, padding: "72px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: "48px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "10px", fontWeight: 600 }}>Nuestros clientes hablan</div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "32px", color: gold, margin: 0, fontWeight: 400 }}>{"Lo que dicen los propietarios"}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: card, border: "1px solid " + border, borderRadius: "16px", padding: "24px" }}>
                <div style={{ color: gold, fontSize: "20px", marginBottom: "12px", opacity: 0.4 }}>{"“"}</div>
                <p style={{ color: body, fontSize: "13px", lineHeight: 1.8, margin: "0 0 18px 0", fontStyle: "italic" as const }}>{t.quote}</p>
                <div>
                  <div style={{ fontFamily: "Georgia,serif", color: gold, fontSize: "14px" }}>{t.name}</div>
                  <div style={{ color: muted, fontSize: "11px", marginTop: "2px" }}>{t.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="inversion" style={{ maxWidth: "720px", margin: "0 auto", padding: "72px 24px", textAlign: "center" as const }}>
        <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "10px", fontWeight: 600 }}>Precios</div>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "32px", color: gold, margin: "0 0 8px 0", fontWeight: 400 }}>{"Simple como debe ser."}</h2>
        <p style={{ color: muted, fontSize: "13px", marginBottom: "36px" }}>{"Alta nueva · sin mensualidad"}</p>

        <div style={{ background: card, border: "1px solid " + border, borderRadius: "20px", padding: "40px 32px" }}>
          <div style={{ fontFamily: "Georgia,serif", fontSize: "64px", color: gold, lineHeight: 1 }}>15%</div>
          <div style={{ color: green, fontSize: "15px", marginTop: "8px", fontWeight: 600 }}>por reserva confirmada generada por el sistema</div>
          <div style={{ color: muted, fontSize: "12px", marginTop: "6px" }}>{"sin mensualidad fija · sin permanencia mínima"}</div>

          <div style={{ borderTop: "1px solid " + border, margin: "28px 0", paddingTop: "28px", display: "flex", flexDirection: "column" as const, gap: "12px", textAlign: "left" as const }}>
            {[
              "Panel de administración completo",
              "Página de reservas pública para tus turistas",
              "Verificación de disponibilidad en tiempo real",
              "Notificación WhatsApp por cada nueva reserva",
              "Reservas manuales tuyas sin comisión",
              "Configuración inicial y soporte incluido",
              "Sin permanencia mínima",
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: green, flexShrink: 0 }}>✔</span>
                <span style={{ color: body, fontSize: "13px" }}>{f}</span>
              </div>
            ))}
          </div>

          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "12px", padding: "16px 36px", fontSize: "15px", fontWeight: 700, cursor: "pointer", width: "100%", letterSpacing: "0.5px" }}>{"Comenzar ahora →"}</button>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#080f09", borderTop: "1px solid " + border, padding: "72px 24px", textAlign: "center" as const }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "14px", fontWeight: 600 }}>{"Únete"}</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: "0 0 14px 0", fontWeight: 400 }}>{"Tu cabaña merece más."}</h2>
          <p style={{ color: body, fontSize: "15px", lineHeight: 1.7, margin: "0 0 32px 0" }}>{"Cupos limitados. Trabajamos solo con propietarios que quieren crecer de forma profesional."}</p>
          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "12px", padding: "16px 40px", fontSize: "16px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>{"Quiero comenzar gratis →"}</button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" style={{ background: nav, borderTop: "1px solid " + border, padding: "56px 32px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}>
            <div>
              <div style={{ fontFamily: "Georgia,serif", fontSize: "22px", letterSpacing: "3px", color: gold, textTransform: "uppercase" as const, marginBottom: "12px" }}>Takai<span style={{ color: green }}>.cl</span></div>
              <p style={{ color: muted, fontSize: "12px", lineHeight: 1.8, margin: "0 0 16px 0" }}>{"Sistema profesional de gestión de reservas para cabañas en Chile. Sin complicaciones — solo resultados."}</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: green, fontSize: "13px", textDecoration: "none" }}>{"+56 9 5523 0900"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"contacto@takai.cl"}</a>
                <span style={{ color: "#2a3e28", fontSize: "12px" }}>{"Villarrica, Araucanía"}</span>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "16px" }}>Sistema</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                <a href="#como-funciona" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"Cómo funciona"}</a>
                <a href="#inversion" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Precios</a>
                <a href="#clientes" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Nuestra red</a>
                <a href="#" onClick={e => { e.preventDefault(); setModalOpen(true) }} style={{ color: green, fontSize: "13px", textDecoration: "none" }}>Unirse a Takai</a>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "16px" }}>Propietarios</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                <a href="https://panel.takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Ingresar al panel</a>
                <a href="mailto:soporte@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"Soporte técnico"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Contacto directo</a>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "16px" }}>Takai</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                <p style={{ color: muted, fontSize: "12px", lineHeight: 1.7, margin: 0 }}>{"Nuestra misión: que cada dueño de cabañas en Chile pueda gestionar sus reservas de forma profesional, sin importar cuánto sabe de tecnología."}</p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid " + border, paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <span style={{ color: "#1e3020", fontSize: "11px" }}>{"© 2025 Takai.cl · Sistema de Reservas para Cabañas en Chile · Todos los derechos reservados"}</span>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="mailto:legal@takai.cl" style={{ color: "#1e3020", fontSize: "11px", textDecoration: "none" }}>{"Términos"}</a>
              <a href="mailto:legal@takai.cl" style={{ color: "#1e3020", fontSize: "11px", textDecoration: "none" }}>Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
