const fs = require("fs")
const path = require("path")

// ── app/page.tsx — Landing premium con logo real + promo destacada ─────────────
const PAGE = `"use client"
import { useState } from "react"
import ContactModal from "./components/ContactModal"
import Image from "next/image"

const CLIENTS = [
  { name: "Rukatraro", loc: "Licanray, Lago Calafqu\u00e9n", detail: "2 caba\u00f1as \u00b7 hasta 5 personas" },
  { name: "Caba\u00f1as Trinidad", loc: "Lago Villarrica, Araucan\u00eda", detail: "3 caba\u00f1as \u00b7 acepta mascotas" },
  { name: "Ruka Pel\u00edn", loc: "Puc\u00f3n, Araucan\u00eda", detail: "4 caba\u00f1as \u00b7 hasta 8 personas" },
  { name: "Lago Azul Lodge", loc: "Villarrica, Araucan\u00eda", detail: "2 caba\u00f1as \u00b7 vista al lago" },
  { name: "Refugio Nahuelbuta", loc: "Angol, B\u00edo-B\u00edo", detail: "3 caba\u00f1as \u00b7 parque nacional" },
  { name: "Caba\u00f1as del Volc\u00e1n", loc: "Malalcahuello, Araucan\u00eda", detail: "5 caba\u00f1as \u00b7 ski \u00b7 trekking" },
  { name: "Orilla Sur", loc: "Lican Ray, Lago Calafqu\u00e9n", detail: "2 caba\u00f1as \u00b7 orilla del lago" },
  { name: "Pehu\u00e9n Retreat", loc: "Lonquimay, Araucan\u00eda", detail: "3 caba\u00f1as \u00b7 bosque pehu\u00e9n" },
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
  { quote: "Antes pasaba el d\u00eda respondiendo mensajes de gente preguntando precios y disponibilidad. Ahora eso lo hace el sistema solo y yo me dedico a atender bien a los turistas.", name: "Patricio Neculp\u00e1n", place: "Pehu\u00e9n Retreat \u00b7 Lonquimay" },
  { quote: "Antes anotaba todo en un cuaderno y me confund\u00eda con las fechas. Ahora entro al celular y veo al tiro qu\u00e9 caba\u00f1a est\u00e1 libre y cu\u00e1nto cobrar.", name: "Ana Contreras", place: "Caba\u00f1as del Volc\u00e1n \u00b7 Malalcahuello" },
  { quote: "Pens\u00e9 que era caro pero calcul\u00e9: una sola reserva perdida me costaba m\u00e1s que el 15%. Y ahora no pierdo ninguna.", name: "Jorge Espinoza", place: "Sendero Curacaut\u00edn \u00b7 Conguill\u00edo" },
  { quote: "Tengo 4 caba\u00f1as y antes era un caos. Ahora veo todo en una pantalla. Cada caba\u00f1a su calendario, sus reservas, todo junto.", name: "Ver\u00f3nica Alarc\u00f3n", place: "Mirador Villarrica \u00b7 Araucan\u00eda" },
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
              <span style={{ fontSize: "18px" }}>{"\\uD83C\\uDF89"}</span>
              <div>
                <span style={{ color: g, fontWeight: 700, fontSize: "14px" }}>{"OFERTA DE LANZAMIENTO:"}</span>
                <span style={{ color: "#d0e8d0", fontSize: "13px" }}>{" Alta hoy = "}</span>
                <span style={{ color: gold, fontWeight: 700, fontSize: "15px" }}>{"$0 mensualidad"}</span>
                <span style={{ color: "#d0e8d0", fontSize: "13px" }}>{" + "}</span>
                <span style={{ color: gold, fontWeight: 700, fontSize: "15px" }}>{"$0 activaci\u00f3n"}</span>
                <span style={{ color: "#d0e8d0", fontSize: "13px" }}>{" Solo pagas el "}</span>
                <span style={{ color: g, fontWeight: 700, fontSize: "15px" }}>{"15%"}</span>
                <span style={{ color: "#d0e8d0", fontSize: "13px" }}>{" cuando el sistema te vende"}</span>
              </div>
            </div>
            <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "10px", padding: "9px 22px", fontSize: "13px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" as const, flexShrink: 0 }}>
              {"Aprovechar ahora \u2192"}
            </button>
            <button onClick={() => setBannerClosed(true)} style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: muted, fontSize: "20px", cursor: "pointer", padding: "4px 8px", lineHeight: 1 }}>{"\u00d7"}</button>
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
          <a href="#como-funciona" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>{"C\u00f3mo funciona"}</a>
          <a href="#clientes" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>Red de clientes</a>
          <a href="#testimonios" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>Testimonios</a>
          <a href="#inversion" style={{ color: muted, fontSize: "12px", textDecoration: "none", letterSpacing: "0.5px" }}>{"Inversi\u00f3n"}</a>
          <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "10px", padding: "9px 22px", fontSize: "12px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px" }}>Comenzar gratis</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "90px 28px 60px", textAlign: "center" as const }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#162618", border: "1px solid #2a3e28", borderRadius: "20px", padding: "6px 16px", marginBottom: "24px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: g, display: "inline-block" }}/>
          <span style={{ fontSize: "11px", color: g, letterSpacing: "1px" }}>{"18 complejos activos \u00b7 Araucan\u00eda y B\u00edo-B\u00edo"}</span>
        </div>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(34px,5.5vw,62px)", color: gold, margin: "0 0 22px 0", fontWeight: 400, lineHeight: 1.1, maxWidth: "850px", marginLeft: "auto", marginRight: "auto", letterSpacing: "-0.5px" }}>
          {"Deja de perder reservas."}<br />
          <em style={{ color: g, fontStyle: "normal" }}>{"Empieza a ganar tranquilidad."}</em>
        </h1>
        <p style={{ fontSize: "18px", color: body, lineHeight: 1.8, maxWidth: "580px", margin: "0 auto 16px" }}>
          {"Automatizamos tus reservas, cobramos el adelanto y gestionamos tu disponibilidad \u2014 para que generes m\u00e1s ingresos y disfrutes de m\u00e1s tiempo libre."}
        </p>
        <p style={{ fontSize: "14px", color: g, marginBottom: "40px", fontWeight: 600 }}>
          {"\u2714 El dinero llega directo a tu cuenta. Nosotros nunca lo tocamos."}
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" as const }}>
          <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "14px", padding: "16px 36px", fontSize: "16px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.5px", boxShadow: "0 8px 32px #7ab87a33" }}>
            {"Comenzar gratis \u2192"}
          </button>
          <a href="#como-funciona" style={{ background: "transparent", color: body, border: "1px solid " + border, borderRadius: "14px", padding: "16px 36px", fontSize: "16px", textDecoration: "none", letterSpacing: "0.5px" }}>
            {"Ver c\u00f3mo funciona"}
          </a>
        </div>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginTop: "64px", border: "1px solid " + border, borderRadius: "20px", overflow: "hidden", background: card }}>
          {[
            { n: "15%", t: "Solo pagas cuando el sistema vende", s: "Sin mensualidad ni activaci\u00f3n" },
            { n: "72h", t: "Tu sistema completamente listo", s: "Nosotros lo armamos todo" },
            { n: "18", t: "Complejos activos en operaci\u00f3n", s: "Araucan\u00eda y B\u00edo-B\u00edo" },
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
              {"Alta hoy y empiezas sin pagar mensualidad ni cuota de activaci\u00f3n. Tu sistema de reservas funciona desde el primer d\u00eda, y solo pagas el 15% por cada reserva que llegue a trav\u00e9s del sistema. Las reservas que gestionas t\u00fa directamente, cero costo."}
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "28px" }}>
              {[
                { label: "$0 mensualidad", desc: "Gratis para siempre en tu plan", ok: true },
                { label: "$0 activaci\u00f3n", desc: "Armamos todo sin cobro inicial", ok: true },
                { label: "15% por reserva", desc: "Solo cuando el sistema te vende", ok: true },
                { label: "Sin permanencia m\u00ednima", desc: "Te vas cuando quieras, sin multas", ok: true },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <span style={{ color: g, fontSize: "16px", flexShrink: 0 }}>{"\u2714"}</span>
                  <div>
                    <span style={{ color: gold, fontWeight: 600, fontSize: "14px" }}>{r.label}</span>
                    <span style={{ color: muted, fontSize: "13px" }}>{" \u2014 " + r.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "12px", padding: "15px 32px", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px #7ab87a33" }}>
              {"Quiero esta oferta \u2192"}
            </button>
          </div>
          <div style={{ background: "#080e09", border: "1px solid " + border, borderRadius: "16px", padding: "28px", fontSize: "12px" }}>
            <div style={{ color: muted, fontSize: "10px", letterSpacing: "2px", marginBottom: "16px" }}>{"EJEMPLO DE INGRESOS"}</div>
            {[
              { l: "2 caba\u00f1as \u00b7 8 reservas/mes", v: "" },
              { l: "Ingreso promedio reserva", v: "$180.000" },
              { l: "Total mensual (8 reservas)", v: "$1.440.000", bold: true },
              { l: "Comisi\u00f3n Takai (15%)", v: "- $216.000", red: true },
              { l: "Tu ingreso neto mensual", v: "$1.224.000", green: true },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 4 ? "1px solid " + border : "none", alignItems: "center" }}>
                <span style={{ color: r.green ? g : r.red ? "#e67a7a" : muted, fontSize: "12px" }}>{r.l}</span>
                <span style={{ color: r.green ? g : r.red ? "#e67a7a" : gold, fontFamily: "Georgia,serif", fontWeight: r.bold || r.green ? 700 : 400, fontSize: r.green ? "16px" : "13px" }}>{r.v}</span>
              </div>
            ))}
            <div style={{ marginTop: "16px", padding: "12px", background: "#162618", borderRadius: "10px", border: "1px solid #2a3e28" }}>
              <div style={{ color: g, fontSize: "11px", lineHeight: 1.6 }}>{"Una sola reserva perdida por desorganizaci\u00f3n cuesta m\u00e1s que la comisi\u00f3n de todo el mes."}</div>
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
            <p style={{ color: body, fontSize: "14px", lineHeight: 1.8, margin: "0 0 24px 0" }}>{"Confirma reservas, bloquea fechas y controla tus ingresos \u2014 desde cualquier celular, sin instalar nada. Todo en un solo link."}</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
              {[
                "Calendario visual por caba\u00f1a",
                "Confirmaci\u00f3n de pagos con un toque",
                "Historial completo de todas las reservas",
                "Reservas manuales sin comisi\u00f3n",
                "Aviso WhatsApp instant\u00e1neo",
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: g, fontSize: "14px", flexShrink: 0 }}>{"\u2714"}</span>
                  <span style={{ color: body, fontSize: "13px" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: card, border: "1px solid " + border, borderRadius: "18px", padding: "22px", fontSize: "12px" }}>
            <div style={{ color: muted, fontSize: "10px", letterSpacing: "2px", marginBottom: "14px" }}>NATIVA PUC\u00d3N \u00b7 PANEL</div>
            <div style={{ background: "#162618", border: "1px solid #2a3e28", borderRadius: "12px", padding: "14px 16px", marginBottom: "12px" }}>
              <div style={{ color: g, fontSize: "11px", marginBottom: "5px", fontWeight: 600 }}>{"Nueva reserva recibida \u2022 WhatsApp enviado"}</div>
              <div style={{ color: gold, fontFamily: "Georgia,serif", fontSize: "15px" }}>{"Caba\u00f1a N\u00ba2 \u00b7 4 noches"}</div>
              <div style={{ color: muted, fontSize: "11px", marginTop: "4px" }}>{"28 mar \u2192 01 abr \u00b7 $160.000 \u00b7 Adelanto $32.000"}</div>
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
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "10px", fontWeight: 600 }}>{"Qu\u00e9 incluye"}</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "36px", color: gold, margin: 0, fontWeight: 400 }}>{"Dise\u00f1ado para el due\u00f1o de caba\u00f1as chileno"}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {[
            { n: "01", t: "Calendario inteligente", d: "Ve reservas, bloquea fechas y confirma pagos en segundos. Sin instalar nada \u2014 solo abres el link desde tu celular." },
            { n: "02", t: "P\u00e1gina de reservas p\u00fablica", d: "Formulario profesional con tu imagen. Los turistas eligen fechas, ven el precio exacto y pagan el adelanto \u2014 solos." },
            { n: "03", t: "Solo 15%, nunca m\u00e1s", d: "Sin mensualidad fija. Solo cobramos el 15% por cada reserva del sistema. Las que gestionas t\u00fa directamente, cero costo." },
            { n: "04", t: "WhatsApp instant\u00e1neo", d: "Cada reserva llega al instante a tu WhatsApp. El turista tambi\u00e9n recibe confirmaci\u00f3n. Nunca m\u00e1s pierdas un cliente por no contestar." },
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
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: 0, fontWeight: 400 }}>{"72 horas y est\u00e1s recibiendo reservas."}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
            {[
              { n: "I", t: "Cu\u00e9ntanos sobre tus caba\u00f1as", d: "Esc\u00edbenos por WhatsApp o completa el formulario. Nada t\u00e9cnico, solo los datos de tu negocio." },
              { n: "II", t: "Armamos todo por ti", d: "En menos de 72 horas tienes tu panel y tu p\u00e1gina de reservas lista. Sin que t\u00fa hagas nada t\u00e9cnico." },
              { n: "III", t: "Empieza a recibir", d: "Compart\u00eds el link. Los turistas reservan y pagan solos. T\u00fa confirmas con un toque desde el celular." },
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
              {"WhatsApp \u2192"}
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
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "34px", color: gold, margin: "0 0 10px 0", fontWeight: 400 }}>{"18 complejos conf\u00edan en Takai hoy"}</h2>
          <p style={{ color: muted, fontSize: "13px", margin: 0 }}>{"Araucan\u00eda y B\u00edo-B\u00edo. Creciendo cada mes."}</p>
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
                <div style={{ color: gold, fontSize: "28px", lineHeight: 1, marginBottom: "14px", opacity: 0.3 }}>{"\u201c"}</div>
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
        <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "10px", fontWeight: 600 }}>{"Inversi\u00f3n"}</div>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "36px", color: gold, margin: "0 0 8px 0", fontWeight: 400 }}>{"Simple como debe ser."}</h2>
        <p style={{ color: muted, fontSize: "13px", marginBottom: "40px" }}>{"Alta nueva \u00b7 sin mensualidad \u00b7 sin activaci\u00f3n"}</p>
        <div style={{ background: card, border: "1px solid " + border, borderRadius: "24px", padding: "48px 40px", position: "relative" as const, overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "20px", right: "24px", background: "#162618", border: "1px solid #2a3e28", borderRadius: "20px", padding: "5px 14px", fontSize: "10px", color: g, letterSpacing: "1px", fontWeight: 600 }}>{"OFERTA LANZAMIENTO"}</div>
          <div style={{ fontFamily: "Georgia,serif", fontSize: "80px", color: gold, lineHeight: 1, marginBottom: "4px" }}>15<span style={{ fontSize: "40px" }}>%</span></div>
          <div style={{ color: g, fontSize: "16px", fontWeight: 600, marginBottom: "6px" }}>por reserva confirmada generada por el sistema</div>
          <div style={{ color: muted, fontSize: "12px", marginBottom: "36px" }}>{"sin mensualidad \u00b7 sin activaci\u00f3n \u00b7 sin permanencia m\u00ednima"}</div>
          <div style={{ borderTop: "1px solid " + border, paddingTop: "28px", display: "flex", flexDirection: "column" as const, gap: "14px", textAlign: "left" as const, marginBottom: "32px" }}>
            {[
              "Panel de administraci\u00f3n completo",
              "P\u00e1gina de reservas p\u00fablica para tus turistas",
              "Verificaci\u00f3n de disponibilidad en tiempo real",
              "Notificaci\u00f3n WhatsApp por cada nueva reserva",
              "Reservas manuales tuyas sin comisi\u00f3n",
              "Configuraci\u00f3n inicial y soporte incluido",
              "Sin permanencia m\u00ednima",
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ color: g, flexShrink: 0, fontSize: "16px" }}>{"\u2714"}</span>
                <span style={{ color: body, fontSize: "14px" }}>{f}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "14px", padding: "18px 40px", fontSize: "16px", fontWeight: 700, cursor: "pointer", width: "100%", boxShadow: "0 8px 32px #7ab87a33", letterSpacing: "0.5px" }}>
            {"Comenzar ahora \u2192"}
          </button>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#040a05", borderTop: "1px solid " + border, padding: "80px 28px", textAlign: "center" as const }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: g, marginBottom: "14px", fontWeight: 600 }}>{"\u00danete"}</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "38px", color: gold, margin: "0 0 16px 0", fontWeight: 400, lineHeight: 1.2 }}>{"Tu caba\u00f1a merece m\u00e1s."}</h2>
          <p style={{ color: body, fontSize: "16px", lineHeight: 1.7, margin: "0 0 10px 0" }}>{"Cupos limitados. Trabajamos solo con propietarios que quieren crecer de forma profesional."}</p>
          <p style={{ color: muted, fontSize: "13px", margin: "0 0 36px 0" }}>{"Sin mensualidad. Sin activaci\u00f3n. Solo pagas cuando vendemos."}</p>
          <button onClick={() => setModalOpen(true)} style={{ background: g, color: "#080e09", border: "none", borderRadius: "14px", padding: "18px 48px", fontSize: "17px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px #7ab87a33", letterSpacing: "0.5px" }}>
            {"Quiero comenzar gratis \u2192"}
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
              <p style={{ color: muted, fontSize: "12px", lineHeight: 1.8, margin: "0 0 18px 0" }}>{"Sistema profesional de gesti\u00f3n de reservas para caba\u00f1as en Chile. Sin complicaciones \u2014 solo resultados."}</p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "13px", textDecoration: "none" }}>{"+56 9 5523 0900 \u00b7 WhatsApp"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"contacto@takai.cl"}</a>
                <span style={{ color: "#1e3020", fontSize: "12px" }}>{"Villarrica, Araucan\u00eda"}</span>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "18px" }}>Sistema</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
                <a href="#como-funciona" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"C\u00f3mo funciona"}</a>
                <a href="#inversion" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Precios</a>
                <a href="#clientes" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Nuestra red</a>
                <a href="#" onClick={e => { e.preventDefault(); setModalOpen(true) }} style={{ color: g, fontSize: "13px", textDecoration: "none" }}>Unirse a Takai</a>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "18px" }}>Propietarios</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
                <a href="https://owner-dashboard-navy.vercel.app" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Ingresar al panel</a>
                <a href="mailto:soporte@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>{"Soporte t\u00e9cnico"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: muted, fontSize: "13px", textDecoration: "none" }}>Contacto directo</a>
              </div>
            </div>
            <div>
              <div style={{ color: gold, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, marginBottom: "18px" }}>{"Misi\u00f3n"}</div>
              <p style={{ color: muted, fontSize: "12px", lineHeight: 1.8, margin: 0 }}>{"Que cada due\u00f1o de caba\u00f1as en Chile pueda gestionar sus reservas de forma profesional, sin importar cu\u00e1nto sabe de tecnolog\u00eda."}</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid " + border, paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <span style={{ color: "#1e3020", fontSize: "11px" }}>{"© 2025 Takai.cl \u00b7 Todos los derechos reservados"}</span>
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

fs.writeFileSync(path.join(__dirname, "app", "page.tsx"), PAGE, "utf8")
console.log("Written: app/page.tsx")
console.log("\nDone. Run: npm run build")
