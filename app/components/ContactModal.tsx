"use client"
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
      "Hola, me interesa Takai para mis cabanas.\n" +
      "Nombre: " + nombre + "\n" +
      "Cabanas: " + cabanas + "\n" +
      "WhatsApp: " + whatsapp + "\n" +
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
