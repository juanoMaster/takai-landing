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
      "Hola! Quiero conocer Takai.\n" +
      "Nombre: " + nombre + "\n" +
      "Cabañas: " + cabanas + "\n" +
      "WhatsApp: " + whatsapp + "\n" +
      "Cantidad: " + cantidad + " cabañas"
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
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", color: "#5a7058", fontSize: "20px", cursor: "pointer", lineHeight: 1 }}>×</button>
        <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: "#7ab87a", marginBottom: "8px" }}>Comenzar gratis</div>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "22px", color: "#e8d5a3", margin: "0 0 6px 0", fontWeight: 400 }}>¿Tu cabaña merece más?</h2>
        <p style={{ color: "#5a7058", fontSize: "12px", margin: "0 0 24px 0" }}>Completamos tu solicitud y te contactamos en menos de 24 horas.</p>
        {sent ? (
          <div style={{ textAlign: "center" as const, padding: "24px 0", color: "#7ab87a", fontSize: "15px" }}>
            {"Solicitud enviada ✔ Te contactamos pronto."}
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            <input required placeholder="Tu nombre" value={nombre} onChange={e => setNombre(e.target.value)} style={inp} />
            <input required placeholder={"Nombre de tus cabañas"} value={cabanas} onChange={e => setCabanas(e.target.value)} style={inp} />
            <input required placeholder={"Tu WhatsApp (+56...)"} value={whatsapp} onChange={e => setWhatsapp(e.target.value)} style={inp} />
            <select required value={cantidad} onChange={e => setCantidad(e.target.value)} style={{ ...inp, color: cantidad ? "#e8d5a3" : "#5a7058" }}>
              <option value="" disabled>{"Cuántas cabañas tienes?"}</option>
              <option value="1">1 cabaña</option>
              <option value="2-3">2 a 3 cabañas</option>
              <option value="4-6">4 a 6 cabañas</option>
              <option value="7+">7 o más</option>
            </select>
            <button type="submit" style={{ background: "#7ab87a", color: "#0d1a12", border: "none", borderRadius: "12px", padding: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "sans-serif", letterSpacing: "0.5px", marginTop: "4px" }}>
              {"Enviar solicitud →"}
            </button>
            <p style={{ color: "#3a5038", fontSize: "11px", textAlign: "center" as const, margin: 0 }}>{"Sin compromiso. Sin permanencia mínima."}</p>
          </form>
        )}
      </div>
    </div>
  )
}
