const fs = require("fs")
const path = require("path")
const base = "C:\\Users\\Juano\\Desktop\\Takai.IA\\takai-landing"

// ─── CONTACT MODAL ────────────────────────────────────────────────────────────
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
      "Hola, me interesa Takai para mis cabanas.\\n" +
      "Nombre: " + nombre + "\\n" +
      "Cabanas: " + cabanas + "\\n" +
      "WhatsApp: " + whatsapp + "\\n" +
      "Cantidad: " + cantidad
    )
    window.open("https://wa.me/56955230900?text=" + msg, "_blank")
    setSent(true)
    setTimeout(function() { setSent(false); onClose() }, 3000)
  }

  const inp: React.CSSProperties = {
    background: "#09120b",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "10px",
    color: "#c8d8c0",
    fontSize: "14px",
    padding: "13px 16px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "inherit",
  }

  return (
    <div
      onClick={function(e) { if (e.target === e.currentTarget) onClose() }}
      style={{ position: "fixed", inset: 0, background: "rgba(2,6,3,0.9)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
    >
      <div style={{ background: "#080f0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", maxWidth: "460px", width: "100%", overflow: "hidden", boxShadow: "0 50px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)" }}>

        {/* Promo Header */}
        <div style={{ background: "linear-gradient(135deg, #7a5208 0%, #d4a84a 45%, #c89030 70%, #7a5208 100%)", padding: "26px 28px 22px", position: "relative" }}>
          <button onClick={onClose} style={{ position: "absolute", top: "12px", right: "14px", background: "rgba(0,0,0,0.25)", border: "none", borderRadius: "50%", width: "28px", height: "28px", color: "rgba(0,0,0,0.7)", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1, fontFamily: "inherit" }}>
            x
          </button>
          <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(0,0,0,0.55)", marginBottom: "8px" }}>Promocion de lanzamiento</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#0a0f04", fontWeight: 400, letterSpacing: "-0.3px", lineHeight: 1.1 }}>
            Ingreso 100% gratuito
          </div>
          <div style={{ marginTop: "10px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(0,0,0,0.18)", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", color: "rgba(0,0,0,0.75)", fontWeight: 600 }}>Sin mensualidad</span>
            <span style={{ background: "rgba(0,0,0,0.18)", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", color: "rgba(0,0,0,0.75)", fontWeight: 600 }}>15% solo si vendemos</span>
            <span style={{ background: "rgba(0,0,0,0.18)", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", color: "rgba(0,0,0,0.75)", fontWeight: 600 }}>0% reservas directas</span>
          </div>
        </div>

        {/* Form area */}
        <div style={{ padding: "24px 28px 28px" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "28px 0" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#0d2a10", border: "2px solid #3a9a50", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#4ab870" }}>
                {"✓"}
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#c0d8b0", marginBottom: "8px" }}>Solicitud enviada</div>
              <div style={{ fontSize: "13px", color: "#2a4a30", lineHeight: 1.6 }}>Te contactamos en menos de 24 horas por WhatsApp.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ marginBottom: "4px" }}>
                <div style={{ fontSize: "15px", color: "#a0b8a0", fontFamily: "Georgia, serif", marginBottom: "4px" }}>Empieza gratis hoy</div>
                <div style={{ fontSize: "12px", color: "#2a4030" }}>Configuramos todo en 24 horas. Sin tarjeta, sin contrato.</div>
              </div>
              <input required placeholder="Tu nombre completo" value={nombre} onChange={function(e) { setNombre(e.target.value) }} style={inp} />
              <input required placeholder="Nombre de tus cabanas" value={cabanas} onChange={function(e) { setCabanas(e.target.value) }} style={inp} />
              <input required placeholder="Tu WhatsApp (+569...)" value={whatsapp} onChange={function(e) { setWhatsapp(e.target.value) }} style={inp} />
              <select required value={cantidad} onChange={function(e) { setCantidad(e.target.value) }} style={{ ...inp, color: cantidad ? "#c8d8c0" : "#2a4030" }}>
                <option value="" disabled>Cuantas cabanas tienes?</option>
                <option value="1">1 cabana</option>
                <option value="2-3">2 a 3 cabanas</option>
                <option value="4-6">4 a 6 cabanas</option>
                <option value="7+">7 o mas</option>
              </select>
              <button type="submit" style={{ background: "linear-gradient(135deg, #1a7a30, #28a044)", border: "none", borderRadius: "12px", color: "#fff", fontSize: "15px", fontWeight: 700, padding: "15px", cursor: "pointer", marginTop: "6px", letterSpacing: "0.3px", fontFamily: "inherit", boxShadow: "0 8px 24px rgba(30,140,60,0.3)" }}>
                Contactar por WhatsApp
              </button>
              <div style={{ textAlign: "center", fontSize: "11px", color: "#142018" }}>Sin compromiso · Sin permanencia minima</div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
`

// ─── PAGE.TSX ─────────────────────────────────────────────────────────────────
const PAGE = `"use client"
import { useState } from "react"
import ContactModal from "./components/ContactModal"

// Testimonials
const T = [
  { q: "Antes perdía reservas por no contestar WhatsApp a tiempo. Ahora el sistema las gestiona solo.", n: "Ana García", r: "Propietaria · Pucón" },
  { q: "En dos meses recuperé la inversión. El panel me muestra todo clarísimo, desde el celular.", n: "Roberto Silva", r: "3 cabañas · Villarrica" },
  { q: "Cero dobles reservas desde que empecé. El calendario se bloquea solo al crear una reserva.", n: "Claudia Moreno", r: "Cabañas · Lago Ranco" },
  { q: "El equipo me configuró todo en un día. No tuve que hacer nada técnico.", n: "Jorge Fuentes", r: "Cabaña · Malalcahuello" },
  { q: "Lo que más me gusta es la comisión cero cuando gestiono yo. Solo pago si ellos venden.", n: "Patricia Vega", r: "5 cabañas · Puerto Varas" },
  { q: "Las reservas manuales se reflejan al instante. Sin errores, sin llamadas de última hora.", n: "Miguel Torres", r: "Complejo · Chillán" },
]

// Stars SVG for hero
function StarField() {
  const stars = [
    {x:72,y:18,r:1.1,o:0.9},{x:180,y:44,r:0.8,o:0.7},{x:288,y:22,r:1.0,o:0.85},
    {x:412,y:55,r:0.9,o:0.65},{x:518,y:14,r:0.8,o:0.8},{x:628,y:38,r:1.2,o:0.75},
    {x:742,y:28,r:0.9,o:0.9},{x:854,y:50,r:0.8,o:0.6},{x:962,y:11,r:1.1,o:0.8},
    {x:1070,y:36,r:0.7,o:0.75},{x:1178,y:22,r:1.0,o:0.7},{x:1286,y:52,r:0.9,o:0.85},
    {x:1382,y:18,r:0.7,o:0.9},{x:110,y:78,r:0.7,o:0.5},{x:242,y:96,r:0.9,o:0.6},
    {x:362,y:72,r:0.7,o:0.55},{x:474,y:108,r:0.8,o:0.5},{x:584,y:84,r:1.0,o:0.65},
    {x:696,y:118,r:0.7,o:0.5},{x:808,y:68,r:0.8,o:0.6},{x:918,y:96,r:0.7,o:0.5},
    {x:1028,y:124,r:1.0,o:0.6},{x:1136,y:78,r:0.7,o:0.55},{x:1248,y:104,r:0.8,o:0.5},
    {x:1352,y:88,r:0.7,o:0.5},{x:148,y:145,r:0.7,o:0.4},{x:304,y:168,r:0.8,o:0.45},
    {x:454,y:152,r:0.7,o:0.4},{x:604,y:180,r:0.9,o:0.4},{x:754,y:148,r:0.7,o:0.4},
    {x:904,y:174,r:0.8,o:0.38},{x:1054,y:156,r:0.7,o:0.35},{x:1204,y:186,r:0.8,o:0.38},
    {x:1370,y:158,r:0.7,o:0.35},{x:36,y:130,r:0.6,o:0.4},{x:1410,y:145,r:0.6,o:0.4},
    {x:340,y:210,r:0.6,o:0.3},{x:680,y:220,r:0.7,o:0.28},{x:1020,y:215,r:0.6,o:0.3},
  ]
  return (
    <svg
      viewBox="0 0 1440 480"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      {stars.map(function(s, i) {
        return <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={s.o} />
      })}
    </svg>
  )
}

// Mountain silhouette at bottom of hero
function Mountains() {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      style={{ position: "absolute", bottom: 0, left: 0, width: "100%", display: "block", pointerEvents: "none" }}
    >
      {/* Far range */}
      <path d="M0 200 L0 130 C80 90 140 120 220 100 C300 80 360 110 440 90 C520 70 580 100 660 80 C740 60 800 95 880 78 C960 62 1020 90 1100 75 C1180 60 1240 85 1320 70 C1380 60 1420 75 1440 72 L1440 200 Z" fill="#071a0e" opacity="0.7"/>
      {/* Mid range */}
      <path d="M0 200 L0 155 C60 130 120 150 200 138 C280 126 340 148 420 135 C500 122 560 145 640 132 C720 119 780 142 860 130 C940 118 1000 140 1080 128 C1160 116 1220 138 1300 126 C1360 118 1400 132 1440 128 L1440 200 Z" fill="#050f07" opacity="0.85"/>
      {/* Near ridge */}
      <path d="M0 200 L0 172 C50 162 100 170 180 165 C260 160 320 170 400 164 C480 158 540 168 620 163 C700 158 760 167 840 162 C920 157 980 165 1060 161 C1140 157 1200 165 1280 161 C1350 158 1400 164 1440 162 L1440 200 Z" fill="#040c06"/>
    </svg>
  )
}

// Panel mockup component
function PanelMockup() {
  const items = [
    { name: "Familia Sepúlveda", dates: "5–9 Mar", nights: "4 noches", amount: "$180.000", st: "confirmed" },
    { name: "Carmen Vergara", dates: "12–15 Mar", nights: "3 noches", amount: "$135.000", st: "draft" },
    { name: "Luis Contreras", dates: "19–22 Mar", nights: "3 noches", amount: "$135.000", st: "draft" },
  ]
  return (
    <div style={{ background: "#070e09", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden", width: "100%", maxWidth: "500px", boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)" }}>
      {/* Title bar */}
      <div style={{ background: "#050a06", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "11px 18px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3a1010" }} />
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2a2010" }} />
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#0f2a10" }} />
        </div>
        <div style={{ fontSize: "11px", color: "#1e3a20", marginLeft: "6px", fontFamily: "inherit" }}>Panel Propietario — Cabanas del Sur</div>
      </div>
      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ padding: "18px 16px", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: "#4ab870", fontWeight: 400 }}>8</div>
          <div style={{ fontSize: "10px", color: "#1e3820", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "3px" }}>Confirmadas</div>
        </div>
        <div style={{ padding: "18px 16px", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: "#d4a84a", fontWeight: 400 }}>3</div>
          <div style={{ fontSize: "10px", color: "#1e3820", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "3px" }}>Pendientes</div>
        </div>
        <div style={{ padding: "18px 16px" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: "#c0c8b0", fontWeight: 400 }}>$543k</div>
          <div style={{ fontSize: "10px", color: "#1e3820", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "3px" }}>Este mes</div>
        </div>
      </div>
      {/* Bookings */}
      <div style={{ padding: "14px 14px 8px" }}>
        <div style={{ fontSize: "9px", color: "#1a2e1a", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px", paddingLeft: "4px" }}>Reservas pendientes de confirmacion</div>
        {items.map(function(b, i) {
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "10px", marginBottom: "6px" }}>
              <div>
                <div style={{ fontSize: "13px", color: "#90a898", fontWeight: 500 }}>{b.name}</div>
                <div style={{ fontSize: "11px", color: "#1e3820", marginTop: "2px" }}>{b.dates} · {b.nights}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ fontSize: "13px", color: "#d4a84a", fontWeight: 600 }}>{b.amount}</div>
                <div style={{ fontSize: "9px", padding: "3px 9px", borderRadius: "20px", fontWeight: 700, background: b.st === "confirmed" ? "rgba(50,140,60,0.2)" : "rgba(180,120,20,0.2)", color: b.st === "confirmed" ? "#4ab870" : "#d4a84a", letterSpacing: "0.3px", textTransform: "uppercase" }}>
                  {b.st === "confirmed" ? "Confirmada" : "Pendiente"}
                </div>
              </div>
            </div>
          )
        })}
        <div style={{ display: "flex", gap: "8px", padding: "6px 0 8px" }}>
          <div style={{ flex: 1, padding: "9px 12px", background: "rgba(50,150,70,0.12)", border: "1px solid rgba(50,150,70,0.2)", borderRadius: "8px", textAlign: "center", fontSize: "11px", color: "#3a9a50", fontWeight: 600, cursor: "pointer" }}>+ Nueva reserva</div>
          <div style={{ flex: 1, padding: "9px 12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", textAlign: "center", fontSize: "11px", color: "#1e3820", cursor: "pointer" }}>Ver calendario</div>
        </div>
      </div>
    </div>
  )
}

// Calendar mockup component
function CalendarMockup() {
  type RC = "green" | "blue" | "orange"
  const cells: Array<{ d: number | null; res?: RC; first?: boolean; last?: boolean; label?: string }> = [
    {d:null},{d:null},{d:null},{d:null},{d:null},{d:1},{d:2},
    {d:3},{d:4},{d:5,res:"green",first:true,label:"Fam. Sepúlveda"},{d:6,res:"green"},{d:7,res:"green"},{d:8,res:"green",last:true},{d:9},
    {d:10},{d:11},{d:12,res:"blue",first:true,label:"Don Roberto"},{d:13,res:"blue"},{d:14,res:"blue",last:true},{d:15},{d:16},
    {d:17},{d:18},{d:19,res:"orange",first:true,label:"Carmen V."},{d:20,res:"orange"},{d:21,res:"orange"},{d:22,res:"orange",last:true},{d:23},
    {d:24},{d:25,res:"green",first:true,label:"Luis Campos"},{d:26,res:"green"},{d:27,res:"green"},{d:28,res:"green",last:true},{d:29},{d:30},
    {d:31},{d:null},{d:null},{d:null},{d:null},{d:null},{d:null},
  ]
  const bg: Record<RC,string> = { green:"rgba(40,140,60,0.15)", blue:"rgba(30,100,200,0.15)", orange:"rgba(200,110,20,0.15)" }
  const bd: Record<RC,string> = { green:"rgba(60,180,80,0.25)", blue:"rgba(50,140,240,0.25)", orange:"rgba(220,130,30,0.25)" }
  const tc: Record<RC,string> = { green:"#4ab870", blue:"#5a9ad4", orange:"#d4a84a" }
  return (
    <div style={{ background: "#070e09", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "22px 20px", width: "100%", maxWidth: "420px", boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "14px", color: "#c0c8a8" }}>Marzo 2025</div>
        <div style={{ display: "flex", gap: "10px" }}>
          {([["green","Confirmada"],["blue","Manual"],["orange","Pendiente"]] as [RC,string][]).map(function([c, label]) {
            return (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "2px", background: tc[c] }} />
                <span style={{ fontSize: "9px", color: "#1a3020" }}>{label}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "3px", marginBottom: "4px" }}>
        {["L","M","X","J","V","S","D"].map(function(d, i) {
          return <div key={i} style={{ textAlign: "center", fontSize: "9px", color: "#1a3020", fontWeight: 700, padding: "2px 0", letterSpacing: "0.5px" }}>{d}</div>
        })}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "3px" }}>
        {cells.map(function(cell, i) {
          const hasBg = !!cell.res
          const borderRadius = cell.first ? "6px 0 0 6px" : cell.last ? "0 6px 6px 0" : hasBg ? "0" : "4px"
          return (
            <div key={i} style={{ height: "38px", background: hasBg ? bg[cell.res!] : "transparent", border: "1px solid " + (hasBg ? bd[cell.res!] : "transparent"), borderRadius, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", gap: "1px" }}>
              {cell.d !== null && (
                <span style={{ fontSize: "11px", color: hasBg ? tc[cell.res!] : "#1e3820", fontWeight: hasBg ? 700 : 400, lineHeight: 1 }}>
                  {cell.d}
                </span>
              )}
              {cell.first && cell.label && (
                <span style={{ fontSize: "7px", color: tc[cell.res!], whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "95%", padding: "0 1px", lineHeight: 1, opacity: 0.85 }}>
                  {cell.label}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Divider line
function Divider() {
  return <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", margin: "0" }} />
}

// Check mark item
function Check({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(50,140,60,0.2)", border: "1px solid rgba(60,160,70,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
          <path d="M1 3l2 2 4-4" stroke="#4ab870" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{ fontSize: "14px", color: "#4a6a54", lineHeight: 1.6 }}>{text}</span>
    </div>
  )
}

export default function Home() {
  const [modal, setModal] = useState(false)

  const openModal = () => setModal(true)

  const goldCta: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "linear-gradient(135deg, #b8880a, #d4a84a, #c89030)",
    color: "#0a0d04",
    padding: "15px 34px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "0.3px",
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
    boxShadow: "0 8px 30px rgba(180,140,30,0.25), 0 0 0 1px rgba(255,220,100,0.15)",
  }

  const ghostCta: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "transparent",
    color: "#4a6a54",
    padding: "15px 28px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.07)",
    cursor: "pointer",
    fontFamily: "inherit",
  }

  const sec1 = "#040c06"  // very dark sections
  const sec2 = "#060f08"  // slightly lighter dark
  const card = "rgba(255,255,255,0.025)"
  const cardBorder = "rgba(255,255,255,0.06)"

  return (
    <div style={{ background: sec1, minHeight: "100vh", color: "#c8d8c0", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif" }}>
      <ContactModal open={modal} onClose={() => setModal(false)} />

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 200, borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(4,12,6,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", padding: "0 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/takai-logo.png" alt="Takai" style={{ height: "38px", width: "auto", filter: "invert(1) sepia(1) hue-rotate(10deg) saturate(2.5) brightness(1.1)", mixBlendMode: "screen" }} />
            <span style={{ fontFamily: "Georgia, serif", fontSize: "17px", letterSpacing: "5px", color: "#d4a84a", textTransform: "uppercase" }}>TAKAI</span>
          </div>
          {/* Links */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            <a href="#sistema" style={{ color: "#2a4a30", fontSize: "13px", textDecoration: "none" }}>Sistema</a>
            <a href="#precios" style={{ color: "#2a4a30", fontSize: "13px", textDecoration: "none" }}>Precios</a>
            <a href="#testimonios" style={{ color: "#2a4a30", fontSize: "13px", textDecoration: "none" }}>Testimonios</a>
            <button onClick={openModal} style={{ ...goldCta, padding: "9px 22px", fontSize: "12px", boxShadow: "none" }}>Empieza gratis</button>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 32px 160px", background: "radial-gradient(ellipse 130% 80% at 50% 55%, rgba(14,52,22,0.55) 0%, transparent 70%), radial-gradient(ellipse 80% 60% at 20% 10%, rgba(50,30,5,0.12) 0%, transparent 60%), linear-gradient(180deg, #020508 0%, #040d08 30%, #071510 65%, #0b1e10 100%)" }}>
        <StarField />
        {/* Radial glow behind content */}
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "400px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(20,80,30,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Content */}
        <div style={{ position: "relative", textAlign: "center", maxWidth: "820px", zIndex: 1 }}>
          {/* Logo mark */}
          <div style={{ marginBottom: "32px" }}>
            <img src="/takai-logo.png" alt="Takai" style={{ height: "80px", width: "auto", filter: "invert(1) sepia(1) hue-rotate(10deg) saturate(2.5) brightness(1.1)", mixBlendMode: "screen" }} />
          </div>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ab870", boxShadow: "0 0 8px rgba(74,184,112,0.6)" }} />
            <span style={{ fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#2a5a30" }}>Sistema de reservas para cabanas · Chile</span>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ab870", boxShadow: "0 0 8px rgba(74,184,112,0.6)" }} />
          </div>
          {/* Main headline */}
          <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(42px, 7vw, 80px)", lineHeight: 1.05, fontWeight: 400, color: "#e0d8c0", margin: "0 0 20px", letterSpacing: "-1px" }}>
            Tu cabaña.<br />Siempre llena.
          </h1>
          {/* Sub */}
          <p style={{ fontSize: "clamp(14px, 2vw, 18px)", color: "#2a5030", maxWidth: "560px", margin: "0 auto 44px", lineHeight: 1.8 }}>
            Panel profesional para gestionar reservas, calendario y cobros. Sin mensualidad, sin técnicos, sin complicaciones.
          </p>
          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={openModal} style={goldCta}>
              Comenzar gratis ahora
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <a href="#sistema" style={ghostCta}>
              Ver cómo funciona
            </a>
          </div>
          {/* Social proof strip */}
          <div style={{ marginTop: "52px", display: "flex", gap: "0", justifyContent: "center" }}>
            <div style={{ display: "flex", gap: "28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "100px", padding: "12px 28px", flexWrap: "wrap", justifyContent: "center" }}>
              {["18 propietarios activos", "340+ noches gestionadas", "Configuracion en 24 horas"].map(function(t, i) {
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {i > 0 && <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.06)" }} />}
                    <span style={{ fontSize: "12px", color: "#1e3a20" }}>{t}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* Mountains at bottom of hero */}
        <Mountains />
      </section>

      {/* ── PROMO STRIP ──────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #6a4a08, #c89030, #d4a84a, #c89030, #6a4a08)", padding: "22px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(0,0,0,0.55)", fontWeight: 700 }}>Lanzamiento</span>
          <div style={{ width: "1px", height: "14px", background: "rgba(0,0,0,0.2)" }} />
          <span style={{ fontSize: "16px", color: "#0a0d04", fontFamily: "Georgia, serif", fontWeight: 400 }}>Sin costo de entrada. Sin mensualidad.</span>
          <div style={{ width: "1px", height: "14px", background: "rgba(0,0,0,0.2)" }} />
          <span style={{ fontSize: "13px", color: "rgba(0,0,0,0.65)" }}>Solo 15% cuando nosotros conseguimos la reserva. Tus clientes directos: <strong>0% siempre.</strong></span>
          <button onClick={openModal} style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(0,0,0,0.2)", borderRadius: "20px", padding: "7px 18px", fontSize: "12px", color: "rgba(0,0,0,0.75)", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Quiero unirme</button>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section style={{ background: sec1, padding: "72px 32px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", overflow: "hidden", background: sec2 }}>
            {[
              { n: "18", label: "Propietarios activos", sub: "en Chile" },
              { n: "340+", label: "Noches gestionadas", sub: "y creciendo" },
              { n: "$0", label: "Costo de entrada", sub: "sin mensualidad" },
              { n: "24h", label: "Configuración", sub: "de cabo a rabo" },
            ].map(function(s, i) {
              return (
                <div key={i} style={{ padding: "36px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "44px", fontWeight: 400, color: "#d4a84a", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: "13px", color: "#a0b898", marginTop: "10px" }}>{s.label}</div>
                  <div style={{ fontSize: "11px", color: "#1e3820", marginTop: "3px" }}>{s.sub}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PAIN SECTION ─────────────────────────────────────────────────── */}
      <section style={{ background: sec2, padding: "88px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", gap: "80px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8a6820", marginBottom: "18px" }}>El problema</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#c8c0a0", fontWeight: 400, margin: "0 0 22px", lineHeight: 1.2 }}>
              ¿Cuántas noches valiosas perdiste este mes?
            </h2>
            <p style={{ fontSize: "15px", color: "#2a4a30", lineHeight: 1.8, margin: "0 0 28px" }}>
              Sin un sistema, los propietarios pierden reservas todos los dias. No es culpa tuya — es el caos de gestionar todo a mano.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "No contestar WhatsApp a tiempo: reserva perdida",
                "Calendarios en papel: doble reserva inevitable",
                "Sin cobro automatico: perseguir pagos semanas",
                "Sin historial: no saber cuanto ganas en realidad",
              ].map(function(p, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#5a3010", flexShrink: 0, marginTop: "9px" }} />
                    <span style={{ fontSize: "14px", color: "#2a4030", lineHeight: 1.6 }}>{p}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ background: card, border: "1px solid " + cardBorder, borderRadius: "16px", padding: "24px", borderLeft: "3px solid #d4a84a" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "32px", color: "#d4a84a", marginBottom: "6px" }}>40%</div>
              <div style={{ fontSize: "13px", color: "#2a4a30", lineHeight: 1.6 }}>de las noches disponibles se pierden cuando no hay sistema de gestion.</div>
            </div>
            <div style={{ background: card, border: "1px solid " + cardBorder, borderRadius: "16px", padding: "24px", borderLeft: "3px solid #4ab870" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "32px", color: "#4ab870", marginBottom: "6px" }}>Con Takai</div>
              <div style={{ fontSize: "13px", color: "#2a4a30", lineHeight: 1.6 }}>Cada consulta se convierte en reserva. Cada reserva se cobra. Cada fecha libre, visible.</div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PANEL SECTION ────────────────────────────────────────────────── */}
      <section id="sistema" style={{ background: sec1, padding: "88px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "72px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 340px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8a6820", marginBottom: "18px" }}>Panel del propietario</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#c8c0a0", fontWeight: 400, margin: "0 0 20px", lineHeight: 1.2 }}>
              Todo tu negocio bajo control, desde el celular
            </h2>
            <p style={{ fontSize: "15px", color: "#2a4a30", lineHeight: 1.8, margin: "0 0 30px" }}>
              Confirma pagos, registra reservas manuales y revisa el estado de cada cabana en segundos. Sin Excel, sin cuadernos, sin llamadas perdidas.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Check text="Reservas pendientes siempre visibles al entrar al panel" />
              <Check text="Nueva reserva manual creada en menos de 30 segundos" />
              <Check text="Historial completo con montos, fechas y nombres de huespedes" />
              <Check text="Confirmacion de pago con un solo click — sin pasos intermedios" />
            </div>
          </div>
          <div style={{ flex: "1 1 460px", display: "flex", justifyContent: "center" }}>
            <PanelMockup />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── CALENDAR SECTION ─────────────────────────────────────────────── */}
      <section style={{ background: sec2, padding: "88px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "72px", alignItems: "center", flexWrap: "wrap-reverse" }}>
          <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
            <CalendarMockup />
          </div>
          <div style={{ flex: "1 1 340px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8a6820", marginBottom: "18px" }}>Calendario inteligente</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#c8c0a0", fontWeight: 400, margin: "0 0 20px", lineHeight: 1.2 }}>
              Tu agenda, sin errores y sin dobles reservas
            </h2>
            <p style={{ fontSize: "15px", color: "#2a4a30", lineHeight: 1.8, margin: "0 0 30px" }}>
              Cada reserva bloquea las fechas de forma automatica. Con un vistazo sabes que dias estan libres y cuales no. Imposible equivocarse.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Check text="Bloqueo automatico al registrar cualquier reserva" />
              <Check text="Verde: confirmada. Azul: manual directa. Naranja: pendiente" />
              <Check text="Sin posibilidad de solapamiento — el sistema lo impide" />
              <Check text="Elimina bloqueos con un click cuando una reserva se cae" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ background: sec1, padding: "88px 32px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8a6820", marginBottom: "16px" }}>Proceso</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#c8c0a0", fontWeight: 400, margin: 0 }}>
              Tres pasos para empezar
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
            {[
              { n: "01", title: "Nos contactas", body: "Nos cuentas sobre tus cabanas y sus tarifas. Te hacemos unas preguntas simples por WhatsApp." },
              { n: "02", title: "Configuramos todo", body: "En menos de 24 horas tu panel esta listo. Te enviamos el enlace de acceso. Sin instalar nada." },
              { n: "03", title: "Empiezas a cobrar", body: "Confirma reservas, bloquea fechas y gestiona pagos. El sistema trabaja contigo desde el dia uno." },
            ].map(function(step, i) {
              return (
                <div key={i} style={{ background: sec2, border: "1px solid rgba(255,255,255,0.04)", borderRadius: i === 0 ? "20px 0 0 20px" : i === 2 ? "0 20px 20px 0" : "0", padding: "40px 36px" }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "48px", color: "rgba(212,168,74,0.08)", fontWeight: 400, lineHeight: 1, marginBottom: "24px" }}>{step.n}</div>
                  <div style={{ fontSize: "17px", color: "#a0b898", fontWeight: 600, marginBottom: "12px", fontFamily: "Georgia, serif" }}>{step.title}</div>
                  <div style={{ fontSize: "14px", color: "#2a4a30", lineHeight: 1.75 }}>{step.body}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── INCOME EXAMPLE ───────────────────────────────────────────────── */}
      <section style={{ background: sec2, padding: "88px 32px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8a6820", marginBottom: "16px" }}>Ejemplo real</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", color: "#c8c0a0", fontWeight: 400, margin: 0 }}>
              Lo que genera una cabana promedio en un mes
            </h2>
          </div>
          <div style={{ background: "#060e07", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }}>
            <div style={{ padding: "32px 36px 0" }}>
              {[
                { l: "Tarifa base", v: "$45.000 / noche", dim: false },
                { l: "Noches confirmadas en el mes", v: "14 noches", dim: false },
                { l: "Subtotal bruto", v: "$630.000", dim: false },
              ].map(function(row, i) {
                return (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "14px", color: "#2a4a30" }}>{row.l}</span>
                    <span style={{ fontSize: "14px", color: "#6a8a70" }}>{row.v}</span>
                  </div>
                )
              })}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: "14px", color: "#2a4a30" }}>Comision Takai (8 noches vendidas por la plataforma · 15%)</span>
                <span style={{ fontSize: "14px", color: "#703020" }}>- $54.000</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0" }}>
                <span style={{ fontSize: "16px", color: "#c8c0a0", fontWeight: 600 }}>Tu recibes</span>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "34px", color: "#4ab870", fontWeight: 400 }}>$576.000</span>
              </div>
            </div>
            <div style={{ background: "rgba(20,80,30,0.12)", borderTop: "1px solid rgba(40,120,50,0.15)", padding: "16px 36px" }}>
              <div style={{ fontSize: "12px", color: "#1e4025", lineHeight: 1.6 }}>
                Las otras 6 noches las conseguiste tu directamente — comision 0%. Cada peso es tuyo.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section id="testimonios" style={{ background: sec1, padding: "88px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8a6820", marginBottom: "16px" }}>Propietarios</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#c8c0a0", fontWeight: 400, margin: 0 }}>
              Lo que dicen quienes ya usan Takai
            </h2>
          </div>
          {/* Featured testimonial */}
          <div style={{ background: sec2, border: "1px solid rgba(255,255,255,0.05)", borderRadius: "20px", padding: "44px 48px", marginBottom: "16px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(180deg, #d4a84a, transparent)" }} />
            <div style={{ fontFamily: "Georgia, serif", fontSize: "64px", color: "rgba(212,168,74,0.1)", lineHeight: 1, marginBottom: "-8px" }}>{"\""}  </div>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(16px, 2.5vw, 22px)", color: "#8a9a80", lineHeight: 1.65, margin: "0 0 24px", maxWidth: "700px" }}>
              Lo que mas me gusta es que cuando yo misma gestiono mis reservas, la comision es cero. Cero. Solo pago si ellos traen el cliente. Eso me parece completamente justo.
            </p>
            <div>
              <div style={{ fontSize: "14px", color: "#7a8a70", fontWeight: 600 }}>Patricia Vega</div>
              <div style={{ fontSize: "12px", color: "#1e3820", marginTop: "2px" }}>5 cabanas en Puerto Varas</div>
            </div>
          </div>
          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {T.filter(function(_, i) { return i !== 4 }).map(function(t, i) {
              return (
                <div key={i} style={{ background: sec2, border: "1px solid rgba(255,255,255,0.04)", borderRadius: "16px", padding: "24px 22px" }}>
                  <p style={{ fontSize: "13px", color: "#2a4a30", lineHeight: 1.75, margin: "0 0 20px" }}>"{t.q}"</p>
                  <div>
                    <div style={{ fontSize: "12px", color: "#6a8070", fontWeight: 600 }}>{t.n}</div>
                    <div style={{ fontSize: "11px", color: "#1e3020", marginTop: "2px" }}>{t.r}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="precios" style={{ background: sec2, padding: "88px 32px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8a6820", marginBottom: "16px" }}>Precios</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#c8c0a0", fontWeight: 400, margin: "0 0 14px" }}>
              Sin mensualidad. Sin letra chica.
            </h2>
            <p style={{ fontSize: "15px", color: "#1e3820", margin: 0 }}>Solo pagas cuando ganas. Y unicamente por las reservas que nosotros conseguimos.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", alignItems: "stretch" }}>
            {/* Free tier */}
            <div style={{ background: "#060e07", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "40px 36px" }}>
              <div style={{ fontSize: "11px", color: "#1e3820", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "20px" }}>Gestion directa</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "64px", color: "#c8c0a0", lineHeight: 1, marginBottom: "4px" }}>0%</div>
              <div style={{ fontSize: "13px", color: "#1e3820", marginBottom: "32px" }}>de comision, siempre</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <Check text="Reservas manuales desde el panel" />
                <Check text="Reservas por WhatsApp o llamada" />
                <Check text="Tus canales (Instagram, redes)" />
                <Check text="Sin limite de reservas" />
              </div>
            </div>
            {/* Paid tier */}
            <div style={{ background: "linear-gradient(145deg, #0b1e14, #091812)", border: "1px solid rgba(212,168,74,0.15)", borderRadius: "20px", padding: "40px 36px", position: "relative", overflow: "hidden" }}>
              {/* Glow top right */}
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "140px", height: "140px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(212,168,74,0.06), transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "14px", right: "16px", background: "rgba(212,168,74,0.12)", border: "1px solid rgba(212,168,74,0.2)", borderRadius: "20px", padding: "4px 12px", fontSize: "9px", color: "#d4a84a", letterSpacing: "1.5px", textTransform: "uppercase" }}>Incluido</div>
              <div style={{ fontSize: "11px", color: "#2a4a30", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "20px" }}>Reservas via Takai</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "64px", color: "#d4a84a", lineHeight: 1, marginBottom: "4px" }}>15%</div>
              <div style={{ fontSize: "13px", color: "#1e3820", marginBottom: "32px" }}>solo por lo que vendemos nosotros</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <Check text="Pagina de reservas online con tu marca" />
                <Check text="Visibilidad en la plataforma Takai" />
                <Check text="Recordatorios automaticos al huesped" />
                <Check text="Todo lo del plan directo, incluido" />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <div style={{ fontSize: "13px", color: "#1a3020" }}>Sin contrato. Sin tarjeta de credito. Sin permanencia minima. Salida libre en cualquier momento.</div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ background: sec1, padding: "120px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "400px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(15,60,20,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "620px", margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#8a6820", marginBottom: "20px" }}>Empieza hoy</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(34px, 5.5vw, 60px)", color: "#c8c0a0", fontWeight: 400, lineHeight: 1.1, margin: "0 0 22px", letterSpacing: "-0.5px" }}>
            Sin costo de entrada.<br />Sin excusas para empezar.
          </h2>
          <p style={{ fontSize: "16px", color: "#1e3820", lineHeight: 1.8, marginBottom: "44px", maxWidth: "480px", margin: "0 auto 44px" }}>
            18 propietarios ya tienen su cabana llena con Takai. Te configuramos en 24 horas y no pagas nada hasta que decidas.
          </p>
          <button onClick={openModal} style={goldCta}>
            Quiero empezar ahora
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div style={{ marginTop: "16px", fontSize: "12px", color: "#0e2015" }}>Sin tarjeta de credito · Sin contrato · Configuracion en 24 horas</div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "#030806", padding: "40px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/takai-logo.png" alt="Takai" style={{ height: "28px", filter: "invert(1) sepia(1) hue-rotate(10deg) saturate(2.5) brightness(1.1)", mixBlendMode: "screen", opacity: 0.5 }} />
            <span style={{ fontFamily: "Georgia, serif", fontSize: "13px", letterSpacing: "4px", color: "#1a2e18", textTransform: "uppercase" }}>TAKAI</span>
          </div>
          <div style={{ fontSize: "12px", color: "#0e1e10" }}>contacto@takai.cl · +56 9 5523 0900</div>
          <div style={{ fontSize: "11px", color: "#0a1608" }}>Sistema de reservas para cabanas · Chile</div>
        </div>
      </footer>
    </div>
  )
}
`

fs.writeFileSync(path.join(base, "app", "components", "ContactModal.tsx"), MODAL, "utf8")
console.log("Written: app/components/ContactModal.tsx")

fs.writeFileSync(path.join(base, "app", "page.tsx"), PAGE, "utf8")
console.log("Written: app/page.tsx")

console.log("\nDone. Run: npm run build")
