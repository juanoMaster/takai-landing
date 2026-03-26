"use client"
import { useState } from "react"
import ContactModal from "./components/ContactModal"
import Image from "next/image"

const CLIENTS = [
  { name: "Rukatraro", loc: "Licanray, Lago Calafquén", detail: "2 cabañas · hasta 5 personas" },
  { name: "Cabañas Trinidad", loc: "Lago Villarrica, Araucanía", detail: "3 cabañas · acepta mascotas" },
  { name: "Ruka Pelín", loc: "Pucón, Araucanía", detail: "4 cabañas · hasta 8 personas" },
  { name: "Lago Azul Lodge", loc: "Villarrica, Araucanía", detail: "2 cabañas · vista al lago" },
  { name: "Refugio Nahuelbuta", loc: "Angol, Bío-Bío", detail: "3 cabañas · parque nacional" },
  { name: "Cabañas del Volcán", loc: "Malalcahuello, Araucanía", detail: "5 cabañas · ski · trekking" },
  { name: "Orilla Sur", loc: "Lican Ray, Lago Calafquén", detail: "2 cabañas · orilla del lago" },
  { name: "Pehuén Retreat", loc: "Lonquimay, Araucanía", detail: "3 cabañas · bosque pehuén" },
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
  { quote: "Antes pasaba el día respondiendo mensajes de gente preguntando precios y disponibilidad. Ahora eso lo hace el sistema solo y yo me dedico a atender bien a los turistas.", name: "Patricio Neculpán", place: "Pehuén Retreat · Lonquimay" },
  { quote: "Antes anotaba todo en un cuaderno y me confundía con las fechas. Ahora entro al celular y veo al tiro qué cabaña está libre y cuánto cobrar.", name: "Ana Contreras", place: "Cabañas del Volcán · Malalcahuello" },
  { quote: "Pensé que era caro pero calculé: una sola reserva perdida me costaba más que el 15%. Y ahora no pierdo ninguna.", name: "Jorge Espinoza", place: "Sendero Curacautín · Conguillío" },
  { quote: "Tengo 4 cabañas y antes era un caos. Ahora veo todo en una pantalla. Cada cabaña su calendario, sus reservas, todo junto.", name: "Verónica Alarcón", place: "Mirador Villarrica · Araucanía" },
]

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [bannerClosed, setBannerClosed] = useState(false)

  const g = "#7ab87a"
  const bg = "#080e09"
  const nav = "#040a05"
  const card = "#0c1a0d"
  const border = "#182818"
  const gold = "#e8d5a3"
  const muted = "#4a6a48"
  const body = "#8a9e88"

  return (
    <div style={{ fontFamily: "sans-serif", background: bg, color: "#f0ede8", minHeight: "100vh" }}>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* PROMO BANNER — llamativo, inmovible hasta cerrar */}
      {!bannerClosed && (
        <div style={{ background: "linear-gradient(135deg, #1a3a1a 0%, #0f2210 100%)", borderBottom: "2px solid #2a4a2a", padding: "14px 20px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" as const, justifyContent: "center", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" as const, justifyContent: "center" }}>
              <span style={{ fontSize: "18px" }}>{"\uD83C\uDF89"}</span>
              <div>
                <span style={{ color: g, fontWeight: 700, fontSize: "14px" }}>{"OFERTA DE LANZAMIENTO:"}</span>
                <span style={{ color: "#d0e8d0", fontSize: "13px" }}>{" Alta hoy = "}</span>
                <span style={{ color: gold, fontWeight: 700, fontSize: "15px" }}>{"$0 mensualidad"}</span>
                <span style={{ color: "#d0e8d0", fontSize: "13px" }}>{" + "}</span>
                <span style={{ color: gold, fontWeight: 700, fontSize: "15px" }}>{"$0 activación"}</span>
                <span style={{ color: "#d0e8d0", fontSize: "13px" }}>{" Solo pagas el "}</span>
                <span style={{ color: g, fontWeight: 700, fontSize: "15px" }}>{"15%"}</span>
                <span style={{ color: "#d0e8d0", fontSize: "13px" }}>{" cuando el sistema te vende"}</span>
              </div>
            </div>
            <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "10px", padding: "9px 22px", fontSize: "13px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" as const, flexShrink: 0 }}>
              {"Aprovechar ahora →"}
            </button>
            <button onClick={() => setBannerClosed(true)} style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: muted, fontSize: "20px", cursor: "pointer", padding: "4px 8px", lineHeight: 1 }}>{"×"}</button>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: nav + "ee", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid " + border, padding: "0 28px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/takai-logo.png"
            alt="Takai"
            width={34}
            height={34}
            style={{ filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(60deg) brightness(1.1)", objectFit: "contain" as const }}
          />
          <span style={{ fontFamily: "Georgia,serif", fontSize: "21px", letterSpacing: "3px", color: gold, textTransform: "uppercase" as const }}>
            Takai<span style={{ color: g }}>.cl</span>
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="#como-funciona" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>{"Cómo funciona"}</a>
          <a href="#clientes" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>Red de clientes</a>
          <a href="#testimonios" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>Testimonios</a>
          <a href="#inversion" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>{"Inversión"}</a>
          <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "10px", padding: "9px 22px", fontSize: "12px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>Comenzar gratis</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "90px 28px 60px", textAlign: "center" as const }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#162618", border: "1px solid #2a3e28", borderRadius: "20px", padding: "6px 16px", marginBottom: "24px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: g, display: "inline-block" }}/>
          <span style={{ fontSize: "11px", color: g, letterSpacing: "1px" }}>{"18 complejos activos · Araucanía y Bío-Bío"}</span>
        </div>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(34px,5.5vw,62px)", color: gold, margin: "0 0 22px 0", fontWeight: 400, lineHeight: 1.1, maxWidth: "850px", marginLeft: "auto", marginRight: "auto", letterSpacing: "-0.5px" }}>
          {"Deja de perder reservas."}<br />
          <em style={{ color: g, fontStyle: "normal" }}>{"Empieza a ganar tranquilidad."}</em>
        </h1>
        <p style={{ fontSize: "18px", color: body, lineHeight: 1.8, maxWidth: "580px", margin: "0 auto 16px" }}>
          {"Automatizamos tus reservas, cobramos el adelanto y gestionamos tu disponibilidad — para que generes más ingresos y disfrutes de más tiempo libre."}
        </p>
        <p style={{ fontSize: "14px", color: g, marginBottom: "40px", fontWeight: 600 }}>
          {"✔ El dinero llega directo a tu cuenta. Nosotros nunca lo tocamos."}
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" as const }}>
          <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "14px", padding: "16px 36px", fontSize: "16px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px", boxShadow: "0 8px 32px #7ab87a33" }}>
            {"Comenzar gratis →"}
          </button>
          <a href="#como-funciona" style={{ background: "transparent", color: body, border: "1px solid " + border, borderRadius: "14px", padding: "16px 36px", fontSize: "16px", textDecoration: "none", letterSpacing: "0.5px" }}>
            {"Ver cómo funciona"}
          </a>
        </div>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginTop: "64px", border: "1px solid " + border, borderRadius: "20px", overflow: "hidden", background: card }}>
          {[
            { n: "15%", t: "Solo pagas cuando el sistema vende", s: "Sin mensualidad ni activación" },
            { n: "72h", t: "Tu sistema completamente listo", s: "Nosotros lo armamos todo" },
            { n: "18", t: "Complejos activos en operación", s: "Araucanía y Bío-Bío" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "32px 20px", borderRight: i < 2 ? "1px solid " + border : "none", textAlign: "center" as const }}>
              <div style={{ fontFamily: "Georgia,serif", fontSize: "48px", color: gold, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "13px", color: body, marginTop: "10px", lineHeight: 1.5 }}>{s.t}</div>
              <div style={{ fontSize: "11px", color: muted, marginTop: "6px" }}>{s.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO DESTACADA — sección completa */}
      <section style={{ background: "linear-gradient(135deg, #0e200e 0%, #0a1a0a 50%, #0c1c0c 100%)", border: "1px solid #1e3a1e", margin: "0 24px 0", borderRadius: "20px", padding: "48px 40px", maxWidth: "1052px", marginLeft: "auto", marginRight: "auto", marginBottom: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "12px", fontWeight: 700 }}>{"Oferta exclusiva de lanzamiento"}</div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: "0 0 16px 0", fontWeight: 400, lineHeight: 1.25 }}>
              {"Tu nueva agenda digital."}<br /><span style={{ color: g }}>{"Sin invertir nada."}</span>
            </h2>
            <p style={{ color: body, fontSize: "15px", lineHeight: 1.8, margin: "0 0 24px 0" }}>
              {"Alta hoy y empiezas sin pagar mensualidad ni cuota de activación. Tu sistema de reservas funciona desde el primer día, y solo pagas el 15% por cada reserva que llegue a través del sistema. Las reservas que gestionas tú directamente, cero costo."}
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "28px" }}>
              {[
                { label: "$0 mensualidad", desc: "Gratis para siempre en tu plan", ok: true },
                { label: "$0 activación", desc: "Armamos todo sin cobro inicial", ok: true },
                { label: "15% por reserva", desc: "Solo cuando el sistema te vende", ok: true },
                { label: "Sin permanencia mínima", desc: "Te vas cuando quieras, sin multas", ok: true },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ color: g, fontSize: "16px", flexShrink: 0 }}>{"✔"}</span>
                  <div>
                    <span style={{ color: gold, fontWeight: 600, fontSize: "14px" }}>{r.label}</span>
                    <span style={{ color: muted, fontSize: "13px" }}>{" — " + r.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "12px", padding: "15px 32px", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px #7ab87a33" }}>
              {"Quiero esta oferta →"}
            </button>
          </div>
          <div style={{ background: "#080e09", border: "1px solid " + border, borderRadius: "16px", padding: "28px", fontSize: "12px" }}>
            <div style={{ color: muted, fontSize: "10px", letterSpacing: "2px", marginBottom: "16px" }}>{"EJEMPLO DE INGRESOS"}</div>
            {[
              { l: "2 cabañas · 8 reservas/mes", v: "" },
              { l: "Ingreso promedio reserva", v: "$180.000" },
              { l: "Total mensual (8 reservas)", v: "$1.440.000", bold: true },
              { l: "Comisión Takai (15%)", v: "- $216.000", red: true },
              { l: "Tu ingreso neto mensual", v: "$1.224.000", green: true },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 4 ? "1px solid " + border : "none", alignItems: "center" }}>
                <span style={{ color: r.green ? g : r.red ? "#e67a7a" : muted, fontSize: "12px" }}>{r.l}</span>
                <span style={{ color: r.green ? g : r.red ? "#e67a7a" : gold, fontFamily: "Georgia,serif", fontWeight: r.bold || r.green ? 700 : 400, fontSize: r.green ? "16px" : "13px" }}>{r.v}</span>
              </div>
            ))}
            <div style={{ marginTop: "16px", padding: "12px", background: "#162618", borderRadius: "10px", border: "1px solid #2a3e28" }}>
              <div style={{ color: g, fontSize: "11px", lineHeight: 1.6 }}>{"Una sola reserva perdida por desorganización cuesta más que la comisión de todo el mes."}</div>
            </div>
          </div>
        </div>
      </section>

      {/* PANEL DEMO */}
      <section style={{ background: "#040a05", borderTop: "1px solid " + border, borderBottom: "1px solid " + border, padding: "72px 28px", marginTop: "48px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "12px", fontWeight: 600 }}>Tu panel de control</div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "32px", color: gold, margin: "0 0 18px 0", fontWeight: 400, lineHeight: 1.25 }}>{"Tu nueva agenda."}<br />{"Siempre en el celular."}</h2>
            <p style={{ color: body, fontSize: "14px", lineHeight: 1.8, margin: "0 0 24px 0" }}>{"Confirma reservas, bloquea fechas y controla tus ingresos — desde cualquier celular, sin instalar nada. Todo en un solo link."}</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
              {[
                "Calendario visual por cabaña",
                "Confirmación de pagos con un toque",
                "Historial completo de todas las reservas",
                "Reservas manuales sin comisión",
                "Aviso WhatsApp instantáneo",
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: g, fontSize: "14px", flexShrink: 0 }}>{"✔"}</span>
                  <span style={{ color: body, fontSize: "13px" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: card, border: "1px solid " + border, borderRadius: "18px", padding: "22px", fontSize: "12px" }}>
            <div style={{ color: muted, fontSize: "10px", letterSpacing: "2px", marginBottom: "14px" }}>NATIVA PUCÓN · PANEL</div>
            <div style={{ background: "#162618", border: "1px solid #2a3e28", borderRadius: "12px", padding: "14px 16px", marginBottom: "12px" }}>
              <div style={{ color: g, fontSize: "11px", marginBottom: "5px", fontWeight: 600 }}>{"Nueva reserva recibida • WhatsApp enviado"}</div>
              <div style={{ color: gold, fontFamily: "Georgia,serif", fontSize: "15px" }}>{"Cabaña Nº2 · 4 noches"}</div>
              <div style={{ color: muted, fontSize: "11px", marginTop: "4px" }}>{"28 mar → 01 abr · $160.000 · Adelanto $32.000"}</div>
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                <span style={{ background: "#27ae60", color: "#fff", borderRadius: "8px", padding: "6px 14px", fontSize: "11px", fontWeight: 700 }}>{"Confirmar pago"}</span>
                <span style={{ color: muted, borderRadius: "8px", padding: "6px 14px", fontSize: "11px", border: "1px solid " + border }}>Ver detalle</span>
              </div>
            </div>
            <div style={{ color: muted, fontSize: "10px", marginBottom: "10px", letterSpacing: "1px" }}>RESUMEN MARZO 2026</div>
            {[
              { l: "Ingresos del mes", v: "$1.280.000", c: gold },
              { l: "Reservas confirmadas", v: "8", c: g },
              { l: "Adelantos cobrados", v: "$256.000", c: body },
              { l: "Reservas pendientes", v: "3", c: "#f97316" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: i < 3 ? "1px solid " + border : "none" }}>
                <span style={{ color: muted, fontSize: "11px" }}>{r.l}</span>
                <span style={{ color: r.c, fontFamily: "Georgia,serif", fontWeight: 600 }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="como-funciona" style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 28px" }}>
        <div style={{ textAlign: "center" as const, marginBottom: "52px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "10px", fontWeight: 600 }}>{"Qué incluye"}</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "36px", color: gold, margin: 0, fontWeight: 400 }}>{"Diseñado para el dueño de cabañas chileno"}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {[
            { n: "01", t: "Calendario inteligente", d: "Ve reservas, bloquea fechas y confirma pagos en segundos. Sin instalar nada — solo abres el link desde tu celular." },
            { n: "02", t: "Página de reservas pública", d: "Formulario profesional con tu imagen. Los turistas eligen fechas, ven el precio exacto y pagan el adelanto — solos." },
            { n: "03", t: "Solo 15%, nunca más", d: "Sin mensualidad fija. Solo cobramos el 15% por cada reserva del sistema. Las que gestionas tú directamente, cero costo." },
            { n: "04", t: "WhatsApp instantáneo", d: "Cada reserva llega al instante a tu WhatsApp. El turista también recibe confirmación. Nunca más pierdas un cliente por no contestar." },
          ].map((f, i) => (
            <div key={i} style={{ background: card, border: "1px solid " + border, borderRadius: "18px", padding: "30px 26px" }}>
              <div style={{ fontFamily: "Georgia,serif", fontSize: "28px", color: g, opacity: 0.4, marginBottom: "16px", lineHeight: 1 }}>{f.n}</div>
              <h3 style={{ fontFamily: "Georgia,serif", fontSize: "18px", color: gold, margin: "0 0 12px 0", fontWeight: 400 }}>{f.t}</h3>
              <p style={{ color: body, fontSize: "13px", lineHeight: 1.75, margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#040a05", borderTop: "1px solid " + border, borderBottom: "1px solid " + border, padding: "72px 28px" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: "52px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "10px", fontWeight: 600 }}>Proceso</div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: 0, fontWeight: 400 }}>{"72 horas y estás recibiendo reservas."}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
            {[
              { n: "I", t: "Cuéntanos sobre tus cabañas", d: "Escíbenos por WhatsApp o completa el formulario. Nada técnico, solo los datos de tu negocio." },
              { n: "II", t: "Armamos todo por ti", d: "En menos de 72 horas tienes tu panel y tu página de reservas lista. Sin que tú hagas nada técnico." },
              { n: "III", t: "Empieza a recibir", d: "Compartís el link. Los turistas reservan y pagan solos. Tú confirmas con un toque desde el celular." },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" as const }}>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "40px", color: g, opacity: 0.3, lineHeight: 1, marginBottom: "16px" }}>{s.n}</div>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: "17px", color: gold, margin: "0 0 10px 0", fontWeight: 400 }}>{s.t}</h3>
                <p style={{ color: body, fontSize: "13px", lineHeight: 1.75, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "44px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href="https://wa.me/56955230900?text=Hola%2C+quiero+conocer+Takai" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", borderRadius: "12px", padding: "14px 30px", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
              {"WhatsApp →"}
            </a>
            <button onClick={() => setModalOpen(true)} style={{ background: "transparent", color: body, border: "1px solid " + border, borderRadius: "12px", padding: "14px 30px", fontSize: "14px", cursor: "pointer" }}>
              {"Formulario breve"}
            </button>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clientes" style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 28px" }}>
        <div style={{ textAlign: "center" as const, marginBottom: "44px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "10px", fontWeight: 600 }}>Red activa</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: "0 0 10px 0", fontWeight: 400 }}>{"18 complejos confían en Takai hoy"}</h2>
          <p style={{ color: muted, fontSize: "13px", margin: 0 }}>{"Araucanía y Bío-Bío. Creciendo cada mes."}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "10px" }}>
          {CLIENTS.map((c, i) => (
            <div key={i} style={{ background: card, border: "1px solid " + border, borderRadius: "14px", padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "Georgia,serif", fontSize: "15px", color: gold, marginBottom: "3px" }}>{c.name}</div>
                <div style={{ color: muted, fontSize: "11px" }}>{c.loc}</div>
                <div style={{ color: "#2a4a28", fontSize: "11px", marginTop: "2px" }}>{c.detail}</div>
              </div>
              <span style={{ background: "#0f2010", color: g, border: "1px solid #1e3a1e", borderRadius: "20px", padding: "3px 10px", fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase" as const, flexShrink: 0, marginLeft: "12px" }}>Activo</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonios" style={{ background: "#040a05", borderTop: "1px solid " + border, borderBottom: "1px solid " + border, padding: "72px 28px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: "52px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "10px", fontWeight: 600 }}>Lo que dicen</div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: 0, fontWeight: 400 }}>{"Los propietarios hablan"}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: card, border: "1px solid " + border, borderRadius: "18px", padding: "26px" }}>
                <div style={{ color: gold, fontSize: "28px", lineHeight: 1, marginBottom: "14px", opacity: 0.3 }}>{"“"}</div>
                <p style={{ color: "#c8d8c0", fontSize: "13px", lineHeight: 1.8, margin: "0 0 20px 0", fontStyle: "italic" as const }}>{t.quote}</p>
                <div style={{ borderTop: "1px solid " + border, paddingTop: "14px" }}>
                  <div style={{ fontFamily: "Georgia,serif", color: gold, fontSize: "14px" }}>{t.name}</div>
                  <div style={{ color: muted, fontSize: "11px", marginTop: "3px" }}>{t.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="inversion" style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 28px", textAlign: "center" as const }}>
        <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "10px", fontWeight: 600 }}>{"Inversión"}</div>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "36px", color: gold, margin: "0 0 8px 0", fontWeight: 400 }}>{"Simple como debe ser."}</h2>
        <p style={{ color: muted, fontSize: "13px", marginBottom: "40px" }}>{"Alta nueva · sin mensualidad · sin activación"}</p>
        <div style={{ background: card, border: "1px solid " + border, borderRadius: "24px", padding: "48px 40px", position: "relative" as const, overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "20px", right: "24px", background: "#162618", border: "1px solid #2a3e28", borderRadius: "20px", padding: "5px 14px", fontSize: "10px", color: g, letterSpacing: "1px", fontWeight: 600 }}>{"OFERTA LANZAMIENTO"}</div>
          <div style={{ fontFamily: "Georgia,serif", fontSize: "80px", color: gold, lineHeight: 1, marginBottom: "4px" }}>15<span style={{ fontSize: "40px" }}>%</span></div>
          <div style={{ color: g, fontSize: "16px", fontWeight: 600, marginBottom: "6px" }}>por reserva confirmada generada por el sistema</div>
          <div style={{ color: muted, fontSize: "12px", marginBottom: "36px" }}>{"sin mensualidad · sin activación · sin permanencia mínima"}</div>
          <div style={{ borderTop: "1px solid " + border, paddingTop: "28px", display: "flex", flexDirection: "column" as const, gap: "14px", textAlign: "left" as const, marginBottom: "32px" }}>
            {[
              "Panel de administración completo",
              "Página de reservas pública para tus turistas",
              "Verificación de disponibilidad en tiempo real",
              "Notificación WhatsApp por cada nueva reserva",
              "Reservas manuales tuyas sin comisión",
              "Configuración inicial y soporte incluido",
              "Sin permanencia mínima",
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ color: g, flexShrink: 0, fontSize: "16px" }}>{"✔"}</span>
                <span style={{ color: body, fontSize: "14px" }}>{f}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "14px", padding: "18px 40px", fontSize: "16px", fontWeight: 700, cursor: "pointer", width: "100%", boxShadow: "0 8px 32px #7ab87a33", letterSpacing: "0.5px" }}>
            {"Comenzar ahora →"}
          </button>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#040a05", borderTop: "1px solid " + border, padding: "80px 28px", textAlign: "center" as const }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "14px", fontWeight: 600 }}>{"Únete"}</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "38px", color: gold, margin: "0 0 16px 0", fontWeight: 400, lineHeight: 1.2 }}>{"Tu cabaña merece más."}</h2>
          <p style={{ color: body, fontSize: "16px", lineHeight: 1.7, margin: "0 0 10px 0" }}>{"Cupos limitados. Trabajamos solo con propietarios que quieren crecer de forma profesional."}</p>
          <p style={{ color: muted, fontSize: "13px", margin: "0 0 36px 0" }}>{"Sin mensualidad. Sin activación. Solo pagas cuando vendemos."}</p>
          <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "14px", padding: "18px 48px", fontSize: "17px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px #7ab87a33", letterSpacing: "0.5px" }}>
            {"Quiero comenzar gratis →"}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" style={{ background: nav, borderTop: "1px solid " + border, padding: "60px 32px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "44px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <Image src="/takai-logo.png" alt="Takai" width={28} height={28} style={{ filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(60deg) brightness(1.1)", objectFit: "contain" as const }} />
                <span style={{ fontFamily: "Georgia,serif", fontSize: "20px", letterSpacing: "3px", color: gold, textTransform: "uppercase" as const }}>Takai<span style={{ color: g }}>.cl</span></span>
              </div>
              <p style={{ color: muted, fontSize: "12px", lineHeight: 1.8, margin: "0 0 18px 0" }}>{"Sistema profesional de gestión de reservas para cabañas en Chile. Sin complicaciones — solo resultados."}</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "13px", textDecoration: "none" }}>{"+56 9 5523 0900 · WhatsApp"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"contacto@takai.cl"}</a>
                <span style={{ color: "#1e3020", fontSize: "12px" }}>{"Villarrica, Araucanía"}</span>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "18px" }}>Sistema</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
                <a href="#como-funciona" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"Cómo funciona"}</a>
                <a href="#inversion" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Precios</a>
                <a href="#clientes" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Nuestra red</a>
                <a href="#" onClick={e => { e.preventDefault(); setModalOpen(true) }} style={{ color: g, fontSize: "13px", textDecoration: "none" }}>Unirse a Takai</a>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "18px" }}>Propietarios</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
                <a href="https://owner-dashboard-navy.vercel.app" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Ingresar al panel</a>
                <a href="mailto:soporte@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"Soporte técnico"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Contacto directo</a>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "18px" }}>{"Misión"}</div>
              <p style={{ color: muted, fontSize: "12px", lineHeight: 1.8, margin: 0 }}>{"Que cada dueño de cabañas en Chile pueda gestionar sus reservas de forma profesional, sin importar cuánto sabe de tecnología."}</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid " + border, paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <span style={{ color: "#1e3020", fontSize: "11px" }}>{"© 2025 Takai.cl · Todos los derechos reservados"}</span>
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
