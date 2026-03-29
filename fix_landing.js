const fs = require("fs")
const path = require("path")

// ── vercel.json ────────────────────────────────────────────────────────────────
const VERCEL = JSON.stringify({
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        { key: "X-DNS-Prefetch-Control", value: "on" },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload"
        },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "connect-src 'self'",
            "font-src 'self'",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'"
          ].join("; ")
        }
      ]
    }
  ],
  redirects: [
    { source: "/index.html", destination: "/", permanent: true }
  ]
}, null, 2)

// ── app/layout.tsx ─────────────────────────────────────────────────────────────
const LAYOUT = `import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Takai.cl \u2014 Sistema de Reservas para Caba\u00f1as en Chile",
  description: "Automatizamos tus reservas, cobramos el adelanto y gestionamos tu disponibilidad. Sin mensualidad. Solo 15% por reserva confirmada. Tu dinero llega directo a tu cuenta.",
  keywords: "reservas caba\u00f1as chile, sistema reservas, panel propietario, araucan\u00eda, puc\u00f3n, villarrica",
  openGraph: {
    title: "Takai.cl \u2014 Reservas para Caba\u00f1as",
    description: "Deja de perder reservas. Empieza a ganar tranquilidad.",
    url: "https://www.takai.cl",
    siteName: "Takai.cl",
    locale: "es_CL",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Takai.cl", description: "Sistema profesional de reservas para caba\u00f1as en Chile." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.takai.cl" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/takai-logo.png" />
        <meta name="theme-color" content="#0d1a12" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
`

// ── app/components/ContactModal.tsx ────────────────────────────────────────────
const MODAL = `"use client"
import { useState } from "react"

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [nombre, setNombre] = useState("")
  const [cabanas, setCabanas] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [sent, setSent] = useState(false)

  if (!open) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = encodeURIComponent(
      "Hola! Quiero conocer Takai.\\n" +
      "Nombre: " + nombre + "\\n" +
      "Caba\u00f1as: " + cabanas + "\\n" +
      "WhatsApp: " + whatsapp + "\\n" +
      "Cantidad: " + cantidad + " caba\u00f1as"
    )
    window.open("https://wa.me/56955230900?text=" + msg, "_blank")
    setSent(true)
    setTimeout(() => { setSent(false); onClose() }, 2000)
  }

  const overlay: React.CSSProperties = { position: "fixed", inset: 0, background: "#000000cc", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }
  const box: React.CSSProperties = { background: "#0d1a12", border: "1px solid #2a3e28", borderRadius: "20px", padding: "36px 32px", maxWidth: "440px", width: "100%", position: "relative" }
  const inp: React.CSSProperties = { width: "100%", background: "#0a1510", border: "1px solid #2a3e28", borderRadius: "10px", color: "#e8d5a3", fontSize: "14px", padding: "12px 14px", outline: "none", fontFamily: "sans-serif", boxSizing: "border-box" as const }

  return (
    <div style={overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div style={box}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", color: "#5a7058", fontSize: "20px", cursor: "pointer", lineHeight: 1 }}>\u00d7</button>
        <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: "#7ab87a", marginBottom: "8px" }}>Comenzar gratis</div>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "22px", color: "#e8d5a3", margin: "0 0 6px 0", fontWeight: 400 }}>\u00bfTu caba\u00f1a merece m\u00e1s?</h2>
        <p style={{ color: "#5a7058", fontSize: "12px", margin: "0 0 24px 0" }}>Completamos tu solicitud y te contactamos en menos de 24 horas.</p>
        {sent ? (
          <div style={{ textAlign: "center" as const, padding: "24px 0", color: "#7ab87a", fontSize: "15px" }}>
            {"Solicitud enviada \u2714 Te contactamos pronto."}
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            <input required placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} style={inp} />
            <input required placeholder={"Nombre de tus caba\u00f1as"} value={cabanas} onChange={e => setCabanas(e.target.value)} style={inp} />
            <input required placeholder={"Tu WhatsApp (+56...)"} value={whatsapp} onChange={e => setWhatsapp(e.target.value)} style={inp} />
            <select required value={cantidad} onChange={e => setCantidad(e.target.value)} style={{ ...inp, color: cantidad ? "#e8d5a3" : "#5a7058" }}>
              <option value="" disabled>{"Cu\u00e1ntas caba\u00f1as tienes?"}</option>
              <option value="1">1 caba\u00f1a</option>
              <option value="2-3">2 a 3 caba\u00f1as</option>
              <option value="4-6">4 a 6 caba\u00f1as</option>
              <option value="7+">7 o m\u00e1s</option>
            </select>
            <button type="submit" style={{ background: "#7ab87a", color: "#0d1a12", border: "none", borderRadius: "12px", padding: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "sans-serif", letterSpacing: "0.5px", marginTop: "4px" }}>
              {"Enviar solicitud \u2192"}
            </button>
            <p style={{ color: "#3a5038", fontSize: "11px", textAlign: "center" as const, margin: 0 }}>{"Sin compromiso. Sin permanencia m\u00ednima."}</p>
          </form>
        )}
      </div>
    </div>
  )
}
`

// ── app/page.tsx ───────────────────────────────────────────────────────────────
const PAGE = `"use client"
import { useState } from "react"
import ContactModal from "./components/ContactModal"

const CLIENTS = [
  { name: "Rukatraro", loc: "Licanray, Lago Calafa\u00faén", detail: "2 caba\u00f1as \u00b7 hasta 5 personas" },
  { name: "Caba\u00f1as Trinidad", loc: "Lago Villarrica, Araucan\u00eda", detail: "3 caba\u00f1as \u00b7 acepta mascotas" },
  { name: "Ruka Pel\u00edn", loc: "Puc\u00f3n, Araucan\u00eda", detail: "4 caba\u00f1as \u00b7 hasta 8 personas" },
  { name: "Lago Azul Lodge", loc: "Villarrica, Araucan\u00eda", detail: "2 caba\u00f1as \u00b7 vista al lago" },
  { name: "Refugio Nahuelbuta", loc: "Angol, B\u00edo-B\u00edo", detail: "3 caba\u00f1as \u00b7 parque nacional" },
  { name: "Caba\u00f1as del Volc\u00e1n", loc: "Malalcahuello, Araucan\u00eda", detail: "5 caba\u00f1as \u00b7 ski \u00b7 trekking" },
  { name: "Orilla Sur", loc: "Lican Ray, Lago Calafa\u00faén", detail: "2 caba\u00f1as \u00b7 orilla del lago" },
  { name: "Pehué\u00f3n Retreat", loc: "Lonquimay, Araucan\u00eda", detail: "3 caba\u00f1as \u00b7 bosque pehué\u00f3n" },
  { name: "Ribera Tolt\u00e9n", loc: "Teodoro Schmidt, Araucan\u00eda", detail: "4 caba\u00f1as \u00b7 r\u00edo Tolt\u00e9n" },
  { name: "Alto Biob\u00edo Lodges", loc: "Ralco, B\u00edo-B\u00edo", detail: "3 caba\u00f1as \u00b7 cordillera" },
  { name: "Caba\u00f1as Colihuacho", loc: "Collipulli, Araucan\u00eda", detail: "2 caba\u00f1as \u00b7 campo y naturaleza" },
  { name: "Laguna Icalma", loc: "Lonquimay, Araucan\u00eda", detail: "4 caba\u00f1as \u00b7 laguna glacial" },
  { name: "Nativa Puc\u00f3n", loc: "Puc\u00f3n, Araucan\u00eda", detail: "5 caba\u00f1as \u00b7 centro tur\u00edstico" },
  { name: "Caba\u00f1as Llif\u00e9n", loc: "Futrono, Los R\u00edos", detail: "3 caba\u00f1as \u00b7 Lago Ranco" },
  { name: "Sendero Curacaut\u00edn", loc: "Curacaut\u00edn, Araucan\u00eda", detail: "2 caba\u00f1as \u00b7 Conguill\u00edo" },
  { name: "Mirador Villarrica", loc: "Villarrica, Araucan\u00eda", detail: "4 caba\u00f1as \u00b7 vista volc\u00e1n" },
  { name: "Huilo Huilo Norte", loc: "Neltume, Los R\u00edos", detail: "3 caba\u00f1as \u00b7 selva valdiviana" },
  { name: "Ruka Mahuida", loc: "Temuco, Araucan\u00eda", detail: "2 caba\u00f1as \u00b7 a 20 min del centro" },
]

const TESTIMONIALS = [
  { quote: "Me perd\u00eda reservas porque se me cruzaban los mensajes en WhatsApp. Con esto los turistas reservan solos y yo solo confirmo. Este a\u00f1o se me llenaron m\u00e1s las caba\u00f1as que nunca.", name: "Mar\u00eda Soto", place: "Lago Azul Lodge \u00b7 Villarrica" },
  { quote: "Yo no s\u00e9 nada de computadores y en tres d\u00edas ya estaba recibiendo reservas. El cabro de Takai lo arm\u00f3 todo, yo solo compart\u00ed el link.", name: "Rodrigo Jara", place: "Ruka Pel\u00edn \u00b7 Puc\u00f3n" },
  { quote: "Lo que m\u00e1s me gust\u00f3 es que la plata llega directo a mi cuenta. No tengo que esperarle a nadie. El turista transfiere y listo, ya est\u00e1.", name: "Claudia Mu\u00f1oz", place: "Orilla Sur \u00b7 Lican Ray" },
  { quote: "Antes me confirmaban y no llegaban. Ahora pagan el adelanto al reservar y eso se acab\u00f3. Me ahorro el mal rato y la caba\u00f1a vac\u00eda.", name: "H\u00e9ctor Villalobos", place: "Refugio Nahuelbuta \u00b7 Angol" },
  { quote: "Antes pasaba el d\u00eda respondiendo mensajes de gente preguntando precios y disponibilidad. Ahora eso lo hace el sistema solo y yo me dedico a atender bien a los turistas.", name: "Patricio Neculp\u00e1n", place: "Pehué\u00f3n Retreat \u00b7 Lonquimay" },
  { quote: "Antes anotaba todo en un cuaderno y me confund\u00eda con las fechas. Ahora entro al celular y veo al tiro qu\u00e9 caba\u00f1a est\u00e1 libre y cu\u00e1nto cobrar.", name: "Ana Contreras", place: "Caba\u00f1as del Volc\u00e1n \u00b7 Malalcahuello" },
  { quote: "Pens\u00e9 que era caro pero calcul\u00e9: una sola reserva perdida me costaba m\u00e1s que el 15%. Y ahora no pierdo ninguna.", name: "Jorge Espinoza", place: "Sendero Curacaut\u00edn \u00b7 Conguill\u00edo" },
  { quote: "Tengo 4 caba\u00f1as y antes era un caos. Ahora veo todo en una pantalla. Cada caba\u00f1a su calendario, sus reservas, todo junto.", name: "Ver\u00f3nica Alarc\u00f3n", place: "Mirador Villarrica \u00b7 Araucan\u00eda" },
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
            <strong>{"Oferta alta nueva:"}</strong>{" $0 mensualidad. Solo 15% por reserva. Sin permanencia m\u00ednima."}
          </span>
          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "20px", padding: "5px 14px", fontSize: "11px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" as const }}>{"Aprovechar \u2192"}</button>
          <button onClick={() => setBannerOpen(false)} style={{ position: "absolute", right: "16px", background: "none", border: "none", color: muted, fontSize: "18px", cursor: "pointer", lineHeight: 1, padding: "0 4px" }}>\u00d7</button>
        </div>
      )}

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: nav, borderBottom: "1px solid " + border, padding: "0 32px", height: "58px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/takai-logo.png" alt="Takai" style={{ width: "32px", height: "32px", objectFit: "contain" as const }} />
          <span style={{ fontFamily: "Georgia,serif", fontSize: "20px", letterSpacing: "3px", color: gold, textTransform: "uppercase" as const }}>Takai<span style={{ color: green }}>.cl</span></span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <a href="#como-funciona" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>{"C\u00f3mo funciona"}</a>
          <a href="#clientes" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>Clientes</a>
          <a href="#testimonios" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>Testimonios</a>
          <a href="#inversion" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>{"Inversi\u00f3n"}</a>
          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "10px", padding: "9px 20px", fontSize: "12px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>Comenzar gratis</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 60px", textAlign: "center" as const }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase" as const, color: green, marginBottom: "16px", fontWeight: 600 }}>Sistema profesional de reservas \u00b7 Chile</div>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,5vw,56px)", color: gold, margin: "0 0 20px 0", fontWeight: 400, lineHeight: 1.15, maxWidth: "820px", marginLeft: "auto", marginRight: "auto" }}>
          {"Deja de perder reservas."}
          <br />
          <span style={{ color: green }}>{"Empieza a ganar tranquilidad."}</span>
        </h1>
        <p style={{ fontSize: "17px", color: body, lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 16px", fontWeight: 400 }}>
          {"Automatizamos tus reservas, cobramos el adelanto y gestionamos tu disponibilidad \u2014 para que generes m\u00e1s ingresos y disfrutes de m\u00e1s tiempo libre."}
        </p>
        <p style={{ fontSize: "14px", color: green, marginBottom: "36px", fontWeight: 600 }}>
          {"El dinero de cada reserva llega directo a tu cuenta. Nosotros nunca lo tocamos."}
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" as const }}>
          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "12px", padding: "15px 32px", fontSize: "15px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>{"Quiero unirme \u2192"}</button>
          <a href="#como-funciona" style={{ background: "transparent", color: body, border: "1px solid " + border, borderRadius: "12px", padding: "15px 32px", fontSize: "15px", textDecoration: "none", letterSpacing: "0.5px" }}>{"Ver c\u00f3mo funciona"}</a>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "0", marginTop: "56px", justifyContent: "center", flexWrap: "wrap" as const, border: "1px solid " + border, borderRadius: "16px", overflow: "hidden", background: card }}>
          {[
            { n: "15%", label: "Solo pagas cuando el sistema reserva", sub: "Sin mensualidad fija" },
            { n: "72h", label: "Tu sistema est\u00e1 listo", sub: "Nosotros lo armamos todo" },
            { n: "18", label: "Complejos activos hoy", sub: "Araucan\u00eda y B\u00edo-B\u00edo" },
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
            <p style={{ color: body, fontSize: "14px", lineHeight: 1.8, margin: "0 0 20px 0" }}>{"Confirma reservas, bloquea fechas y controla tus ingresos desde el celular \u2014 sin instalar apps, sin complicaciones t\u00e9cnicas."}</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
              {["Calendario visual de reservas y disponibilidad","Confirmaci\u00f3n de pagos con un toque","Historial completo de reservas y cancelaciones","Acceso desde cualquier celular o computador"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: green, fontSize: "14px", marginTop: "1px" }}>\u2714</span>
                  <span style={{ color: body, fontSize: "13px" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Mock panel UI */}
          <div style={{ background: card, border: "1px solid " + border, borderRadius: "16px", padding: "20px", fontSize: "12px" }}>
            <div style={{ color: muted, fontSize: "10px", letterSpacing: "2px", marginBottom: "12px" }}>NATIVA PUC\u00d3N \u00b7 PANEL</div>
            <div style={{ background: "#162618", border: "1px solid " + border, borderRadius: "10px", padding: "14px 16px", marginBottom: "10px" }}>
              <div style={{ color: green, fontSize: "11px", marginBottom: "4px" }}>{"Nueva reserva recibida"}</div>
              <div style={{ color: gold }}>{"Caba\u00f1a N\u00ba2 \u00b7 4 noches"}</div>
              <div style={{ color: muted, fontSize: "11px", marginTop: "4px" }}>{"Check-in 28 mar \u00b7 $160.000 \u00b7 Adelanto 20%"}</div>
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
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "10px", fontWeight: 600 }}>{"Qu\u00e9 incluye"}</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: 0, fontWeight: 400 }}>{"Dise\u00f1ado para due\u00f1os de caba\u00f1as en Chile"}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {[
            { icon: "\ud83d\udcc5", title: "Calendario inteligente", desc: "Ve reservas, bloquea fechas y confirma pagos en segundos. Sin instalar nada \u2014 solo abres el link desde tu celular." },
            { icon: "\ud83c\udf10", title: "P\u00e1gina de reservas p\u00fablica", desc: "Formulario profesional con tu imagen. Los turistas eligen fechas, ven el precio exacto y pagan el adelanto \u2014 solos." },
            { icon: "\ud83d\udcb0", title: "Sin mensualidad, sin riesgo", desc: "Sin mensualidad fija. Solo cobramos el 15% por cada reserva que llegue a trav\u00e9s del sistema. Las reservas que gestionas t\u00fa directamente no tienen ning\u00fan costo." },
            { icon: "\ud83d\udcac", title: "Aviso WhatsApp instant\u00e1neo", desc: "Cada nueva reserva te llega al instante por WhatsApp. El turista tambi\u00e9n recibe su confirmaci\u00f3n. Nunca m\u00e1s pierdas un cliente." },
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
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "32px", color: gold, margin: 0, fontWeight: 400 }}>{"En menos de 72 horas tu sistema est\u00e1 listo."}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
            {[
              { n: "I", title: "Cu\u00e9ntanos sobre tus caba\u00f1as", desc: "Esc\u00edbenos por WhatsApp o completa el formulario breve \u2014 lo que sea m\u00e1s c\u00f3modo para ti." },
              { n: "II", title: "Armamos todo por ti", desc: "En menos de 72 horas tienes tu panel de admin y tu p\u00e1gina de reservas lista \u2014 sin que tengas que hacer nada t\u00e9cnico." },
              { n: "III", title: "Empieza a recibir reservas", desc: "Compart\u00eds tu link. Los turistas eligen fechas, pagan el adelanto y t\u00fa confirmas con un toque desde donde est\u00e9s." },
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
            <a href="https://wa.me/56955230900?text=Hola%2C+quiero+conocer+Takai" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", borderRadius: "12px", padding: "13px 28px", fontSize: "14px", fontWeight: 700, textDecoration: "none", letterSpacing: "0.5px" }}>{"WhatsApp directo \u2192"}</a>
            <button onClick={() => setModalOpen(true)} style={{ background: "transparent", color: body, border: "1px solid " + border, borderRadius: "12px", padding: "13px 28px", fontSize: "14px", cursor: "pointer", letterSpacing: "0.5px" }}>{"Formulario breve \u2192"}</button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clientes" style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ textAlign: "center" as const, marginBottom: "40px" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "10px", fontWeight: 600 }}>Nuestra red activa</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "32px", color: gold, margin: "0 0 8px 0", fontWeight: 400 }}>{"Caba\u00f1as que ya conf\u00edan en Takai"}</h2>
          <p style={{ color: muted, fontSize: "13px", margin: 0 }}>{"18 complejos activos desde la Araucan\u00eda y el B\u00edo-B\u00edo."}</p>
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
                <div style={{ color: gold, fontSize: "20px", marginBottom: "12px", opacity: 0.4 }}>{"\u201c"}</div>
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
        <p style={{ color: muted, fontSize: "13px", marginBottom: "36px" }}>{"Alta nueva \u00b7 sin mensualidad"}</p>

        <div style={{ background: card, border: "1px solid " + border, borderRadius: "20px", padding: "40px 32px" }}>
          <div style={{ fontFamily: "Georgia,serif", fontSize: "64px", color: gold, lineHeight: 1 }}>15%</div>
          <div style={{ color: green, fontSize: "15px", marginTop: "8px", fontWeight: 600 }}>por reserva confirmada generada por el sistema</div>
          <div style={{ color: muted, fontSize: "12px", marginTop: "6px" }}>{"sin mensualidad fija \u00b7 sin permanencia m\u00ednima"}</div>

          <div style={{ borderTop: "1px solid " + border, margin: "28px 0", paddingTop: "28px", display: "flex", flexDirection: "column" as const, gap: "12px", textAlign: "left" as const }}>
            {[
              "Panel de administraci\u00f3n completo",
              "P\u00e1gina de reservas p\u00fablica para tus turistas",
              "Verificaci\u00f3n de disponibilidad en tiempo real",
              "Notificaci\u00f3n WhatsApp por cada nueva reserva",
              "Reservas manuales tuyas sin comisi\u00f3n",
              "Configuraci\u00f3n inicial y soporte incluido",
              "Sin permanencia m\u00ednima",
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: green, flexShrink: 0 }}>\u2714</span>
                <span style={{ color: body, fontSize: "13px" }}>{f}</span>
              </div>
            ))}
          </div>

          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "12px", padding: "16px 36px", fontSize: "15px", fontWeight: 700, cursor: "pointer", width: "100%", letterSpacing: "0.5px" }}>{"Comenzar ahora \u2192"}</button>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#080f09", borderTop: "1px solid " + border, padding: "72px 24px", textAlign: "center" as const }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: green, marginBottom: "14px", fontWeight: 600 }}>{"\u00danete"}</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: "0 0 14px 0", fontWeight: 400 }}>{"Tu caba\u00f1a merece m\u00e1s."}</h2>
          <p style={{ color: body, fontSize: "15px", lineHeight: 1.7, margin: "0 0 32px 0" }}>{"Cupos limitados. Trabajamos solo con propietarios que quieren crecer de forma profesional."}</p>
          <button onClick={() => setModalOpen(true)} style={{ background: green, color: "#0d1a12", border: "none", borderRadius: "12px", padding: "16px 40px", fontSize: "16px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>{"Quiero comenzar gratis \u2192"}</button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" style={{ background: nav, borderTop: "1px solid " + border, padding: "56px 32px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}>
            <div>
              <div style={{ fontFamily: "Georgia,serif", fontSize: "22px", letterSpacing: "3px", color: gold, textTransform: "uppercase" as const, marginBottom: "12px" }}>Takai<span style={{ color: green }}>.cl</span></div>
              <p style={{ color: muted, fontSize: "12px", lineHeight: 1.8, margin: "0 0 16px 0" }}>{"Sistema profesional de gesti\u00f3n de reservas para caba\u00f1as en Chile. Sin complicaciones \u2014 solo resultados."}</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: green, fontSize: "13px", textDecoration: "none" }}>{"+56 9 5523 0900"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"contacto@takai.cl"}</a>
                <span style={{ color: "#2a3e28", fontSize: "12px" }}>{"Villarrica, Araucan\u00eda"}</span>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "16px" }}>Sistema</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                <a href="#como-funciona" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"C\u00f3mo funciona"}</a>
                <a href="#inversion" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Precios</a>
                <a href="#clientes" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Nuestra red</a>
                <a href="#" onClick={e => { e.preventDefault(); setModalOpen(true) }} style={{ color: green, fontSize: "13px", textDecoration: "none" }}>Unirse a Takai</a>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "16px" }}>Propietarios</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                <a href="https://panel.takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Ingresar al panel</a>
                <a href="mailto:soporte@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"Soporte t\u00e9cnico"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Contacto directo</a>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "16px" }}>Takai</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                <p style={{ color: muted, fontSize: "12px", lineHeight: 1.7, margin: 0 }}>{"Nuestra misi\u00f3n: que cada due\u00f1o de caba\u00f1as en Chile pueda gestionar sus reservas de forma profesional, sin importar cu\u00e1nto sabe de tecnolog\u00eda."}</p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid " + border, paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <span style={{ color: "#1e3020", fontSize: "11px" }}>{"© 2025 Takai.cl · Sistema de Reservas para Caba\u00f1as en Chile · Todos los derechos reservados"}</span>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="mailto:legal@takai.cl" style={{ color: "#1e3020", fontSize: "11px", textDecoration: "none" }}>{"T\u00e9rminos"}</a>
              <a href="mailto:legal@takai.cl" style={{ color: "#1e3020", fontSize: "11px", textDecoration: "none" }}>Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
`

// Write files
fs.writeFileSync(path.join(__dirname, "vercel.json"), VERCEL, "utf8")
console.log("Written: vercel.json")

fs.writeFileSync(path.join(__dirname, "app", "layout.tsx"), LAYOUT, "utf8")
console.log("Written: app/layout.tsx")

const compDir = path.join(__dirname, "app", "components")
if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true })
fs.writeFileSync(path.join(compDir, "ContactModal.tsx"), MODAL, "utf8")
console.log("Written: app/components/ContactModal.tsx")

fs.writeFileSync(path.join(__dirname, "app", "page.tsx"), PAGE, "utf8")
console.log("Written: app/page.tsx")

// Remove recovered_index.html
const recovered = path.join(__dirname, "recovered_index.html")
if (fs.existsSync(recovered)) {
  fs.unlinkSync(recovered)
  console.log("Deleted: recovered_index.html")
}

// Remove takai-loSgo.png typo
const typo = path.join(__dirname, "public", "takai-loSgo.png")
if (fs.existsSync(typo)) {
  fs.unlinkSync(typo)
  console.log("Deleted: public/takai-loSgo.png (typo)")
}

console.log("\nDone. Run: npm run build")
