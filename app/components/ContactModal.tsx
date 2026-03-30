"use client"
import { useState } from "react"

export default function ContactModal({ open, onClose, isPromo }: { open: boolean; onClose: () => void; isPromo?: boolean }) {
  const [nombre, setNombre] = useState("")
  const [cabanas, setCabanas] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [cantidad, setCantidad] = useState("")
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  if (!open) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      await fetch("https://formspree.io/f/xpwzgkjb", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ nombre, cabanas, whatsapp, cantidad }),
      })
    } catch (_) {}
    setSending(false)
    setSent(true)
    setTimeout(function() { setSent(false); onClose() }, 3500)
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
            <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: "rgba(0,0,0,0.6)", marginBottom: "10px" }}>
              {"Oferta por tiempo limitado · Plazas disponibles"}
            </div>
            <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "28px", fontWeight: 600, color: "#0a0700", lineHeight: 1.1, marginBottom: "16px" }}>
              {"Activa tu sistema hoy."}
              <br />
              <span style={{ fontSize: "20px", fontWeight: 400 }}>{"Sin costo de instalación ni mensualidad."}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "10px" }}>
              <div style={{ background: "rgba(0,0,0,0.15)", borderRadius: "12px", padding: "14px 18px", flex: 1, minWidth: "140px", borderTop: "2px solid rgba(0,0,0,0.15)" }}>
                <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "15px", fontWeight: 600, color: "#0a0700", marginBottom: "8px" }}>
                  {"Creación de página"}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(0,0,0,0.5)", textDecoration: "line-through" }}>{"$80.000"}</span>
                  <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "26px", fontWeight: 700, color: "#0a0700", letterSpacing: "-0.5px" }}>{"Gratis"}</span>
                </div>
              </div>
              <div style={{ background: "rgba(0,0,0,0.15)", borderRadius: "12px", padding: "14px 18px", flex: 1, minWidth: "120px", borderTop: "2px solid rgba(0,0,0,0.15)" }}>
                <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "15px", fontWeight: 600, color: "#0a0700", marginBottom: "8px" }}>
                  {"Mensualidad"}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(0,0,0,0.5)", textDecoration: "line-through" }}>{"$20.000/mes"}</span>
                  <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "26px", fontWeight: 700, color: "#0a0700", letterSpacing: "-0.5px" }}>{"Gratis"}</span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)" }}>{"Solo pagas el 15% por reserva confirmada. Sin m\u00e1s."}</div>
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
            <div style={{ fontSize: "12px", color: "rgba(0,0,0,0.55)", marginTop: "6px" }}>{"Configuramos todo en 72 horas."}</div>
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
                <div style={{ fontSize: "14px", color: "#888", fontFamily: "DM Sans, sans-serif" }}>{"Sin compromiso \u00b7 Sin permanencia m\u00ednima"}</div>
              </div>
              <input required placeholder="Tu nombre completo" value={nombre} onChange={function(e) { setNombre(e.target.value) }} style={inp} />
              <input required placeholder={"Nombre de tus caba\u00f1as"} value={cabanas} onChange={function(e) { setCabanas(e.target.value) }} style={inp} />
              <input required placeholder="Tu WhatsApp (+569...)" value={whatsapp} onChange={function(e) { setWhatsapp(e.target.value) }} style={inp} />
              <select required value={cantidad} onChange={function(e) { setCantidad(e.target.value) }} style={{ ...inp, color: cantidad ? "#f0ede8" : "#555" }}>
                <option value="" disabled>{"Cu\u00e1ntas caba\u00f1as tienes?"}</option>
                <option value="1">{"1 caba\u00f1a"}</option>
                <option value="2-3">{"2 a 3 caba\u00f1as"}</option>
                <option value="4-6">{"4 a 6 caba\u00f1as"}</option>
                <option value="7+">{"7 o m\u00e1s"}</option>
              </select>
              <button type="submit" disabled={sending} style={{ background: "linear-gradient(135deg, #c9a84c, #a07a28)", border: "none", borderRadius: "10px", color: "#0a0700", fontSize: "16px", fontWeight: 700, padding: "16px", cursor: sending ? "wait" : "pointer", marginTop: "6px", letterSpacing: "0.5px", fontFamily: "DM Sans, sans-serif", boxShadow: "0 8px 24px rgba(201,168,76,0.25)", opacity: sending ? 0.7 : 1 }}>
                {sending ? "Enviando..." : "ENVIAR"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
