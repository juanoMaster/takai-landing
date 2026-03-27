"use client"
import { useState } from "react"

export default function ContactModal({ open, onClose, isPromo }: { open: boolean; onClose: () => void; isPromo?: boolean }) {
  const [nombre, setNombre] = useState("")
  const [cabanas, setCabanas] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [sent, setSent] = useState(false)

  if (!open) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = encodeURIComponent(
      "Hola Takai, quiero unirme.\n" +
      "Nombre: " + nombre + "\n" +
      "Cabañas: " + cabanas + "\n" +
      "WhatsApp: " + whatsapp + "\n" +
      "Cantidad: " + cantidad
    )
    window.open("https://wa.me/56955230900?text=" + msg, "_blank")
    setSent(true)
    setTimeout(function() { setSent(false); onClose() }, 3000)
  }

  const inp: React.CSSProperties = {
    background: "#0a0a0a",
    border: "1px solid #2a2a2a",
    borderRadius: "8px",
    color: "#f0ede8",
    fontSize: "14px",
    padding: "13px 16px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "DM Sans, sans-serif",
  }

  return (
    <div
      onClick={function(e) { if (e.target === e.currentTarget) onClose() }}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
    >
      <div style={{ background: "#0d0d0d", border: "1px solid #2a2a2a", borderRadius: "20px", maxWidth: "480px", width: "100%", overflow: "hidden", boxShadow: "0 50px 100px rgba(0,0,0,0.8), 0 0 40px #c9a84c18" }}>

        {isPromo && (
          <div style={{ background: "linear-gradient(135deg, #5a3a08 0%, #c9a84c 50%, #9a7020 100%)", padding: "28px 28px 22px", position: "relative" }}>
            <button onClick={onClose} style={{ position: "absolute", top: "14px", right: "16px", background: "rgba(0,0,0,0.25)", border: "none", borderRadius: "50%", width: "30px", height: "30px", color: "rgba(0,0,0,0.65)", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1, fontFamily: "inherit" }}>
              {"x"}
            </button>
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: "rgba(0,0,0,0.55)", marginBottom: "10px" }}>
              {"Promoción de lanzamiento · Tiempo limitado"}
            </div>
            <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "30px", fontWeight: 500, color: "#0a0700", lineHeight: 1.1, marginBottom: "12px" }}>
              {"Hoy: ingreso gratuito"}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "10px" }}>
              <div style={{ background: "rgba(0,0,0,0.15)", borderRadius: "8px", padding: "8px 12px" }}>
                <div style={{ fontSize: "11px", color: "rgba(0,0,0,0.5)", marginBottom: "2px" }}>{"Creación de página"}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "rgba(0,0,0,0.85)", textDecoration: "line-through" }}>{"$80.000"}</span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#0a0700" }}>{"GRATIS"}</span>
                </div>
              </div>
              <div style={{ background: "rgba(0,0,0,0.15)", borderRadius: "8px", padding: "8px 12px" }}>
                <div style={{ fontSize: "11px", color: "rgba(0,0,0,0.5)", marginBottom: "2px" }}>{"Mensualidad"}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "rgba(0,0,0,0.85)", textDecoration: "line-through" }}>{"$15.000/mes"}</span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#0a0700" }}>{"GRATIS"}</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)" }}>{"Solo pagas el 15% por reserva confirmada. Sin más."}</div>
          </div>
        )}

        {!isPromo && (
          <div style={{ background: "linear-gradient(135deg, #5a3a08 0%, #c9a84c 50%, #9a7020 100%)", padding: "22px 28px", position: "relative" }}>
            <button onClick={onClose} style={{ position: "absolute", top: "14px", right: "16px", background: "rgba(0,0,0,0.25)", border: "none", borderRadius: "50%", width: "30px", height: "30px", color: "rgba(0,0,0,0.65)", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1, fontFamily: "inherit" }}>
              {"x"}
            </button>
            <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "26px", fontWeight: 500, color: "#0a0700", lineHeight: 1.1 }}>
              {"Comenzar con Takai"}
            </div>
            <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.55)", marginTop: "6px" }}>{"Configuramos todo en 72 horas."}</div>
          </div>
        )}

        <div style={{ padding: "24px 28px 28px" }}>
          {sent ? (
            <div style={{ textAlign: "center" as const, padding: "28px 0" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#c9a84c18", border: "1px solid #c9a84c55", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#c9a84c" }}>
                {"✓"}
              </div>
              <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "20px", color: "#f0ede8", marginBottom: "8px" }}>{"Solicitud enviada"}</div>
              <div style={{ fontSize: "13px", color: "#666", lineHeight: 1.6 }}>{"Te contactamos en menos de 72 horas por WhatsApp."}</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
              <div style={{ marginBottom: "4px" }}>
                <div style={{ fontSize: "14px", color: "#888", fontFamily: "DM Sans, sans-serif" }}>{"Sin compromiso · Sin permanencia mínima"}</div>
              </div>
              <input required placeholder="Tu nombre completo" value={nombre} onChange={function(e) { setNombre(e.target.value) }} style={inp} />
              <input required placeholder={"Nombre de tus cabañas"} value={cabanas} onChange={function(e) { setCabanas(e.target.value) }} style={inp} />
              <input required placeholder="Tu WhatsApp (+569...)" value={whatsapp} onChange={function(e) { setWhatsapp(e.target.value) }} style={inp} />
              <select required value={cantidad} onChange={function(e) { setCantidad(e.target.value) }} style={{ ...inp, color: cantidad ? "#f0ede8" : "#555" }}>
                <option value="" disabled>{"Cuántas cabañas tienes?"}</option>
                <option value="1">{"1 cabaña"}</option>
                <option value="2-3">{"2 a 3 cabañas"}</option>
                <option value="4-6">{"4 a 6 cabañas"}</option>
                <option value="7+">{"7 o más"}</option>
              </select>
              <button type="submit" style={{ background: "linear-gradient(135deg, #c9a84c, #a07a28)", border: "none", borderRadius: "10px", color: "#0a0700", fontSize: "15px", fontWeight: 700, padding: "15px", cursor: "pointer", marginTop: "6px", letterSpacing: "0.3px", fontFamily: "DM Sans, sans-serif", boxShadow: "0 8px 24px rgba(201,168,76,0.25)" }}>
                {"Contactar por WhatsApp →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
