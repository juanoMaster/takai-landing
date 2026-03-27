"use client"
import { useState } from "react"
import ContactModal from "./components/ContactModal"

const TESTIMONIALS = [
  { name: "Ana García", role: "Propietaria en Pucón", text: "Antes perdía reservas por no contestar a tiempo. Ahora el sistema las confirma solo y yo solo cobro." },
  { name: "Roberto Silva", role: "3 cabañas en Villarrica", text: "En dos meses recuperé la inversión. El panel es claro y puedo ver todo desde el celular." },
  { name: "Claudia Moreno", role: "Cabañas en Lago Ranco", text: "Nunca había tenido tanto orden en mi calendario. Cero dobles reservas desde que empecé con Takai." },
  { name: "Jorge Fuentes", role: "Cabaña en Malalcahuello", text: "El equipo me configuró todo en un día. No tuve que hacer nada técnico ni instalar nada." },
  { name: "Patricia Vega", role: "5 cabañas en Puerto Varas", text: "Lo que más me gusta es la comisión cero cuando gestiono yo. Solo pago si ellos venden." },
  { name: "Miguel Torres", role: "Complejo en Chillán", text: "Las reservas manuales se reflejan al instante en el sistema. Sin errores, sin llamadas." },
]

function PanelMockup() {
  const bookings = [
    { name: "Familia García", dates: "5–9 Mar", amount: "$225.000", status: "confirmed" },
    { name: "Claudia Romero", dates: "12–15 Mar", amount: "$135.000", status: "draft" },
    { name: "Pedro Fuentes", dates: "19–23 Mar", amount: "$180.000", status: "draft" },
  ]
  return (
    <div style={{ background: "#0c1520", border: "1px solid #1e2d3d", borderRadius: "16px", overflow: "hidden", maxWidth: "460px", width: "100%" }}>
      <div style={{ background: "#080d15", padding: "10px 16px", borderBottom: "1px solid #1a2535", display: "flex", alignItems: "center", gap: "7px" }}>
        <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#4a2020" }} />
        <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#3a3010" }} />
        <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1a3a1a" }} />
        <div style={{ fontSize: "11px", color: "#2a4050", marginLeft: "6px" }}>Panel Propietario — Cabanas del Sur</div>
      </div>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "18px" }}>
          <div style={{ background: "#0f1a25", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: 700, color: "#5ab87a", fontFamily: "Georgia, serif" }}>8</div>
            <div style={{ fontSize: "9px", color: "#2a4050", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "3px" }}>Confirmadas</div>
          </div>
          <div style={{ background: "#0f1a25", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: 700, color: "#f09634", fontFamily: "Georgia, serif" }}>3</div>
            <div style={{ fontSize: "9px", color: "#2a4050", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "3px" }}>Pendientes</div>
          </div>
          <div style={{ background: "#0f1a25", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: 700, color: "#e8d5a3", fontFamily: "Georgia, serif" }}>$540k</div>
            <div style={{ fontSize: "9px", color: "#2a4050", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "3px" }}>Este mes</div>
          </div>
        </div>
        <div style={{ fontSize: "9px", color: "#1e3040", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Reservas pendientes de confirmacion</div>
        {bookings.map(function(b, i) {
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 11px", background: "#0f1a25", borderRadius: "8px", marginBottom: "5px" }}>
              <div>
                <div style={{ fontSize: "12px", color: "#a0b0c0", fontWeight: 500 }}>{b.name}</div>
                <div style={{ fontSize: "10px", color: "#2a4050", marginTop: "2px" }}>{b.dates}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ fontSize: "12px", color: "#e8d5a3", fontWeight: 600 }}>{b.amount}</div>
                <div style={{
                  fontSize: "9px",
                  padding: "3px 8px",
                  borderRadius: "20px",
                  background: b.status === "confirmed" ? "#1a3a1a" : "#2a2010",
                  color: b.status === "confirmed" ? "#5ab87a" : "#f09634",
                  fontWeight: 600
                }}>
                  {b.status === "confirmed" ? "Confirmada" : "Pendiente"}
                </div>
              </div>
            </div>
          )
        })}
        <div style={{ marginTop: "10px", display: "flex", gap: "7px" }}>
          <div style={{ flex: 1, padding: "8px", background: "#1a3a1a", border: "1px solid #2a5a2a", borderRadius: "7px", textAlign: "center", fontSize: "10px", color: "#5ab87a", fontWeight: 600 }}>+ Nueva reserva</div>
          <div style={{ flex: 1, padding: "8px", background: "#0f1a25", borderRadius: "7px", textAlign: "center", fontSize: "10px", color: "#2a4a5a" }}>Ver calendario</div>
        </div>
      </div>
    </div>
  )
}

function CalendarMockup() {
  type ReservationColor = "green" | "blue" | "orange"
  const cells: { d: number | null; res?: ReservationColor; first?: boolean; last?: boolean; label?: string }[] = [
    { d: null }, { d: null }, { d: null }, { d: null }, { d: null }, { d: 1 }, { d: 2 },
    { d: 3 }, { d: 4 }, { d: 5, res: "green", first: true, label: "Fam. Munoz" }, { d: 6, res: "green" }, { d: 7, res: "green" }, { d: 8, res: "green", last: true }, { d: 9 },
    { d: 10 }, { d: 11 }, { d: 12, res: "blue", first: true, label: "Don Roberto" }, { d: 13, res: "blue" }, { d: 14, res: "blue", last: true }, { d: 15 }, { d: 16 },
    { d: 17 }, { d: 18 }, { d: 19, res: "orange", first: true, label: "Carmen V." }, { d: 20, res: "orange" }, { d: 21, res: "orange" }, { d: 22, res: "orange", last: true }, { d: 23 },
    { d: 24 }, { d: 25, res: "green", first: true, label: "Luis Campos" }, { d: 26, res: "green" }, { d: 27, res: "green" }, { d: 28, res: "green", last: true }, { d: 29 }, { d: 30 },
    { d: 31 }, { d: null }, { d: null }, { d: null }, { d: null }, { d: null }, { d: null },
  ]
  const bgMap: Record<ReservationColor, string> = { green: "#0f2a15", blue: "#0f1e2a", orange: "#2a1a08" }
  const borderMap: Record<ReservationColor, string> = { green: "#2a6a30", blue: "#2a5080", orange: "#804a10" }
  const textMap: Record<ReservationColor, string> = { green: "#5ab87a", blue: "#5a9ad4", orange: "#f09634" }

  return (
    <div style={{ background: "#0c1520", border: "1px solid #1e2d3d", borderRadius: "16px", padding: "22px", maxWidth: "380px", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: "#e8d5a3", fontFamily: "Georgia, serif" }}>Marzo 2025</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "2px", background: "#5ab87a" }} />
            <span style={{ fontSize: "9px", color: "#2a4050" }}>Confirmada</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "2px", background: "#5a9ad4" }} />
            <span style={{ fontSize: "9px", color: "#2a4050" }}>Manual</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "2px", background: "#f09634" }} />
            <span style={{ fontSize: "9px", color: "#2a4050" }}>Pendiente</span>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", marginBottom: "4px" }}>
        {["L","M","M","J","V","S","D"].map(function(d, i) {
          return <div key={i} style={{ textAlign: "center", fontSize: "9px", color: "#2a4050", fontWeight: 600, padding: "3px 0" }}>{d}</div>
        })}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
        {cells.map(function(cell, i) {
          const bg = cell.res ? bgMap[cell.res] : "transparent"
          const bd = cell.res ? ("1px solid " + borderMap[cell.res]) : "1px solid transparent"
          const tc = cell.res ? textMap[cell.res] : "#2a4050"
          const br = cell.first ? "5px 0 0 5px" : cell.last ? "0 5px 5px 0" : cell.res ? "0" : "3px"
          return (
            <div key={i} style={{ height: "34px", background: bg, border: bd, borderRadius: br, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              {cell.d !== null && (
                <span style={{ fontSize: "10px", color: tc, fontWeight: cell.res ? 600 : 400, lineHeight: 1 }}>
                  {cell.d}
                </span>
              )}
              {cell.first && cell.label && (
                <span style={{ fontSize: "7px", color: tc, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", padding: "0 2px", lineHeight: 1.2 }}>
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

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  const goldBtn: React.CSSProperties = {
    display: "inline-block",
    background: "linear-gradient(135deg, #b8943a, #e8d5a3)",
    color: "#060a10",
    padding: "14px 32px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: "0.5px",
    cursor: "pointer",
    border: "none",
    fontFamily: "system-ui, sans-serif",
  }

  const ghostBtn: React.CSSProperties = {
    display: "inline-block",
    background: "transparent",
    color: "#6a7a8a",
    padding: "14px 28px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    border: "1px solid #1a2535",
    cursor: "pointer",
    fontFamily: "system-ui, sans-serif",
  }

  return (
    <div style={{ background: "#07090f", minHeight: "100vh", color: "#dde4f0", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #111d2a", background: "rgba(7,9,15,0.94)", padding: "0 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="/takai-logo.png"
              alt="Takai"
              style={{
                height: "42px",
                width: "auto",
                filter: "invert(1) sepia(1) hue-rotate(10deg) saturate(2) brightness(1.2)",
                mixBlendMode: "screen",
              }}
            />
            <span style={{ fontFamily: "Georgia, serif", fontSize: "18px", letterSpacing: "4px", color: "#e8d5a3", textTransform: "uppercase" }}>TAKAI</span>
          </div>
          <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
            <a href="#como-funciona" style={{ color: "#4a6070", fontSize: "13px", textDecoration: "none" }}>Como funciona</a>
            <a href="#precios" style={{ color: "#4a6070", fontSize: "13px", textDecoration: "none" }}>Precios</a>
            <button onClick={() => setModalOpen(true)} style={{ ...goldBtn, padding: "9px 22px", fontSize: "13px" }}>Empieza gratis</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "100px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#b8943a", background: "#b8943a12", border: "1px solid #b8943a28", borderRadius: "20px", padding: "5px 16px", marginBottom: "32px" }}>
            Sistema de reservas para cabanas en Chile
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(38px, 6.5vw, 72px)", lineHeight: 1.08, fontWeight: 400, color: "#e8d5a3", margin: "0 0 24px 0", letterSpacing: "-0.5px" }}>
            Tu cabana llena.<br />Tu tiempo, libre.
          </h1>
          <p style={{ fontSize: "17px", color: "#5a7080", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.75 }}>
            Panel de gestion profesional para propietarios de cabanas. Reservas, calendario y pagos en un solo lugar. Sin tecnicismos.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setModalOpen(true)} style={goldBtn}>Empieza sin costo</button>
            <a href="#como-funciona" style={ghostBtn}>Ver como funciona</a>
          </div>
          <div style={{ marginTop: "28px", display: "flex", gap: "28px", justifyContent: "center", flexWrap: "wrap" }}>
            {["Sin contrato de permanencia", "Configuracion en 24 horas", "0% comision si vendes tu"].map(function(t, i) {
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#4ab870", flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", color: "#2a4050" }}>{t}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROMO STRIP */}
      <div style={{ background: "linear-gradient(90deg, #080f08, #0b1e0b, #080f08)", borderTop: "1px solid #152015", borderBottom: "1px solid #152015", padding: "13px 24px", textAlign: "center" }}>
        <span style={{ fontSize: "13px", color: "#4ab870", letterSpacing: "0.3px" }}>
          <strong style={{ color: "#5ab87a" }}>Acceso gratuito.</strong>
          <span style={{ color: "#2a4a30" }}>{" "}Sin mensualidad, sin permanencia.{" "}</span>
          Solo cobramos 15% cuando nosotros conseguimos la reserva — de lo contrario, es comision cero.
        </span>
      </div>

      {/* STATS */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid #111d2a", borderRadius: "16px", overflow: "hidden" }}>
            {[
              { value: "18", label: "Propietarios activos" },
              { value: "+340", label: "Noches gestionadas" },
              { value: "$0", label: "Costo de entrada" },
              { value: "4.9", label: "Calificacion promedio" },
            ].map(function(s, i) {
              return (
                <div key={i} style={{ padding: "32px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid #111d2a" : "none" }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "38px", fontWeight: 400, color: "#e8d5a3", marginBottom: "8px" }}>{s.value}</div>
                  <div style={{ fontSize: "11px", color: "#2a4050", letterSpacing: "0.3px" }}>{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PANEL DEMO */}
      <section style={{ padding: "80px 24px", background: "#0b0e16" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "64px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#b8943a", marginBottom: "18px" }}>Panel del propietario</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", color: "#e8d5a3", fontWeight: 400, margin: "0 0 20px", lineHeight: 1.2 }}>
              Todo bajo control,<br />desde cualquier lugar
            </h2>
            <p style={{ color: "#3a5060", fontSize: "15px", lineHeight: 1.8, marginBottom: "28px" }}>
              Confirma pagos, crea reservas manuales y revisa el estado de tus cabanas en segundos. Sin hojas de calculo, sin WhatsApp sin respuesta.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Reservas pendientes siempre visibles al entrar",
                "Nueva reserva manual en menos de 30 segundos",
                "Historial completo con montos y detalles",
              ].map(function(item, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: "12px", fontSize: "14px", color: "#3a5060", alignItems: "flex-start" }}>
                    <span style={{ color: "#4ab870", marginTop: "1px", flexShrink: 0 }}>—</span>
                    {item}
                  </div>
                )
              })}
            </div>
          </div>
          <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
            <PanelMockup />
          </div>
        </div>
      </section>

      {/* CALENDAR DEMO */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", gap: "64px", alignItems: "center", flexWrap: "wrap-reverse" }}>
          <div style={{ flex: "1 1 360px", display: "flex", justifyContent: "center" }}>
            <CalendarMockup />
          </div>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#b8943a", marginBottom: "18px" }}>Calendario inteligente</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", color: "#e8d5a3", fontWeight: 400, margin: "0 0 20px", lineHeight: 1.2 }}>
              Tu agenda siempre organizada, sin errores
            </h2>
            <p style={{ color: "#3a5060", fontSize: "15px", lineHeight: 1.8, marginBottom: "28px" }}>
              Cada reserva bloquea automaticamente las fechas correspondientes. Con un vistazo sabes que dias estan libres y cuales ocupados.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Verde: reserva confirmada. Azul: manual. Naranja: pendiente",
                "Bloqueo automatico al crear cualquier reserva",
                "Imposible solapar dos reservas en las mismas fechas",
              ].map(function(item, i) {
                return (
                  <div key={i} style={{ display: "flex", gap: "12px", fontSize: "14px", color: "#3a5060", alignItems: "flex-start" }}>
                    <span style={{ color: "#4ab870", marginTop: "1px", flexShrink: 0 }}>—</span>
                    {item}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INCOME EXAMPLE */}
      <section style={{ padding: "80px 24px", background: "#0b0e16" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#b8943a", marginBottom: "16px" }}>Ejemplo real</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 38px)", color: "#e8d5a3", fontWeight: 400, margin: 0 }}>
              Lo que genera una cabana promedio en un mes
            </h2>
          </div>
          <div style={{ background: "#0c1520", border: "1px solid #1a2535", borderRadius: "16px", padding: "32px 36px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid #101e2a" }}>
              <span style={{ color: "#3a5060", fontSize: "14px" }}>Tarifa base por noche</span>
              <span style={{ color: "#8a9aaa", fontSize: "14px" }}>$45.000</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid #101e2a" }}>
              <span style={{ color: "#3a5060", fontSize: "14px" }}>Noches confirmadas en el mes</span>
              <span style={{ color: "#8a9aaa", fontSize: "14px" }}>14 noches</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid #101e2a" }}>
              <span style={{ color: "#3a5060", fontSize: "14px" }}>Subtotal bruto</span>
              <span style={{ color: "#8a9aaa", fontSize: "14px" }}>$630.000</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid #1a2e1a" }}>
              <span style={{ color: "#3a5060", fontSize: "14px" }}>Comision Takai (8 noches gestionadas por nosotros, 15%)</span>
              <span style={{ color: "#a05040", fontSize: "14px" }}>- $54.000</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0 0" }}>
              <span style={{ color: "#e8d5a3", fontSize: "16px", fontWeight: 600 }}>Tu cobras</span>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#5ab87a", fontWeight: 400 }}>$576.000</span>
            </div>
            <div style={{ marginTop: "16px", padding: "12px 16px", background: "#0f2010", border: "1px solid #1a3a1a", borderRadius: "8px", fontSize: "12px", color: "#2a5030" }}>
              Las otras 6 noches las gestionaste directamente. Comision 0% — cada peso es tuyo.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#b8943a", marginBottom: "16px" }}>Proceso</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#e8d5a3", fontWeight: 400, margin: 0 }}>
              Tres pasos para empezar
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { n: "01", title: "Nos contactas", desc: "Nos cuentas cuantas cabanas tienes y sus tarifas. Nosotros configuramos todo en menos de 24 horas." },
              { n: "02", title: "Recibes tu panel", desc: "Te entregamos un enlace unico y seguro. Sin logins complicados, sin apps que instalar, desde cualquier dispositivo." },
              { n: "03", title: "Comienzas a gestionar", desc: "Confirma pagos, bloquea fechas y crea reservas manuales. El sistema se sincroniza automaticamente." },
            ].map(function(step, i) {
              return (
                <div key={i} style={{ background: "#0c1520", border: "1px solid #111d2a", borderRadius: "16px", padding: "32px 26px" }}>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "36px", color: "#152030", marginBottom: "20px", fontWeight: 400 }}>{step.n}</div>
                  <div style={{ fontSize: "15px", color: "#a0b0c0", fontWeight: 600, marginBottom: "12px" }}>{step.title}</div>
                  <div style={{ fontSize: "13px", color: "#2a4050", lineHeight: 1.75 }}>{step.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 24px", background: "#0b0e16" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#b8943a", marginBottom: "16px" }}>Propietarios activos</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#e8d5a3", fontWeight: 400, margin: 0 }}>
              Lo que dicen quienes ya usan Takai
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
            {TESTIMONIALS.map(function(t, i) {
              return (
                <div key={i} style={{ background: "#0c1520", border: "1px solid #111d2a", borderRadius: "14px", padding: "24px 20px" }}>
                  <div style={{ fontSize: "13px", color: "#3a5060", lineHeight: 1.75, marginBottom: "20px" }}>"{t.text}"</div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#8a9aaa", fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: "11px", color: "#1e3040", marginTop: "3px" }}>{t.role}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#b8943a", marginBottom: "16px" }}>Precios</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#e8d5a3", fontWeight: 400, margin: "0 0 14px" }}>
              Sin mensualidad. Sin letra chica.
            </h2>
            <p style={{ color: "#2a4050", fontSize: "15px", margin: 0 }}>Solo pagas cuando ganas, y solo por lo que nosotros vendemos.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ background: "#0c1520", border: "1px solid #111d2a", borderRadius: "16px", padding: "36px 30px" }}>
              <div style={{ fontSize: "11px", color: "#1e3040", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px" }}>Reservas directas</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "56px", color: "#e8d5a3", lineHeight: 1, marginBottom: "8px" }}>0%</div>
              <div style={{ fontSize: "13px", color: "#1e3040", marginBottom: "28px" }}>de comision</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Reservas manuales desde el panel", "Reservas por tus canales (WhatsApp, Instagram)", "Sin limites de cabanas ni reservas"].map(function(item, i) {
                  return (
                    <div key={i} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#2a4050" }}>
                      <span style={{ color: "#4ab870" }}>+</span> {item}
                    </div>
                  )
                })}
              </div>
            </div>
            <div style={{ background: "linear-gradient(150deg, #0e1e32, #0c1824)", border: "1px solid #1e3a54", borderRadius: "16px", padding: "36px 30px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "14px", right: "14px", fontSize: "9px", background: "#b8943a18", border: "1px solid #b8943a35", color: "#b8943a", padding: "4px 10px", borderRadius: "20px", letterSpacing: "1px", textTransform: "uppercase" }}>Incluido</div>
              <div style={{ fontSize: "11px", color: "#1e3a50", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "16px" }}>Reservas via Takai</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "56px", color: "#e8d5a3", lineHeight: 1, marginBottom: "8px" }}>15%</div>
              <div style={{ fontSize: "13px", color: "#1e3a50", marginBottom: "28px" }}>solo por lo que vendemos nosotros</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Pagina de reservas online con tu marca", "Visibilidad en la plataforma Takai", "Recordatorios automaticos a los huespedes"].map(function(item, i) {
                  return (
                    <div key={i} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#2a4a60" }}>
                      <span style={{ color: "#4a9fd4" }}>+</span> {item}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "110px 24px", textAlign: "center", background: "#0b0e16" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(30px, 5vw, 56px)", color: "#e8d5a3", fontWeight: 400, lineHeight: 1.15, marginBottom: "22px" }}>
            Sin costo de entrada.<br />Sin excusas para empezar.
          </div>
          <p style={{ color: "#2a4050", fontSize: "15px", marginBottom: "40px", lineHeight: 1.75 }}>
            18 propietarios gestionan sus cabanas con Takai. Te configuramos en 24 horas y no pagas nada hasta tu primera reserva.
          </p>
          <button onClick={() => setModalOpen(true)} style={{ ...goldBtn, padding: "17px 48px", fontSize: "15px" }}>
            Quiero empezar ahora
          </button>
          <div style={{ marginTop: "16px", fontSize: "12px", color: "#1a2a35" }}>
            Sin tarjeta de credito. Sin contrato.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #0e1822", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "14px", letterSpacing: "4px", color: "#1a2a35", textTransform: "uppercase", marginBottom: "10px" }}>TAKAI</div>
        <div style={{ fontSize: "12px", color: "#0e1822" }}>contacto@takai.cl · +56 9 5523 0900</div>
      </footer>
    </div>
  )
}
