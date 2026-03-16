import type { CSSProperties } from "react"

const s: Record<string, CSSProperties> = {
  page: { fontFamily: "Georgia, serif", color: "#f0ede8", background: "linear-gradient(170deg, #0a1510 0%, #0d1a12 40%, #121f17 100%)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px", position: "relative", overflow: "hidden" },
  glow: { position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, #7ab87a08 0%, transparent 70%)", pointerEvents: "none" },
  logoWrap: { marginBottom: "32px", position: "relative" },
  logoText: { fontSize: "48px", letterSpacing: "8px", textTransform: "uppercase" as const, color: "#e8d5a3", lineHeight: 1 },
  logoSpan: { color: "#7ab87a" },
  tagline: { fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase" as const, color: "#5a7058", marginTop: "12px" },
  divider: { width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #7ab87a44, transparent)", margin: "32px auto" },
  heading: { fontFamily: "Georgia, serif", fontSize: "28px", color: "#e8d5a3", lineHeight: 1.4, marginBottom: "16px", maxWidth: "500px" },
  desc: { fontFamily: "sans-serif", fontSize: "15px", color: "#8a9e88", lineHeight: 1.8, maxWidth: "460px", marginBottom: "32px" },
  badge: { display: "inline-block", fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: "#7ab87a", background: "#7ab87a14", border: "1px solid #7ab87a2a", borderRadius: "20px", padding: "8px 20px", marginBottom: "40px" },
  contactWrap: { background: "#162618", border: "1px solid #2a3e28", borderRadius: "16px", padding: "24px 32px", maxWidth: "400px", width: "100%" },
  contactTitle: { fontFamily: "Georgia, serif", fontSize: "16px", color: "#e8d5a3", marginBottom: "16px" },
  contactLink: { display: "block", fontFamily: "sans-serif", fontSize: "14px", color: "#7ab87a", textDecoration: "none", padding: "8px 0", borderBottom: "1px solid #ffffff07" },
  footer: { fontFamily: "sans-serif", fontSize: "11px", color: "#2a3e28", marginTop: "48px", letterSpacing: "1px" },
  treeLine: { position: "absolute", bottom: "0", left: "0", right: "0", height: "120px", background: "linear-gradient(0deg, #0a1510 0%, transparent 100%)", pointerEvents: "none" },
}

export default function Home() {
  return (
    <div style={s.page}>
      <div style={s.glow}></div>

      <div style={s.logoWrap}>
        <div style={s.logoText}>Takai<span style={s.logoSpan}>.cl</span></div>
        <div style={s.tagline}>Reservas directas para el sur de Chile</div>
      </div>

      <div style={s.divider}></div>

      <div style={s.badge}>En desarrollo</div>

      <h1 style={s.heading}>{"Sistema profesional de reservas para caba\u00f1as"}</h1>

      <p style={s.desc}>
        {"Takai.cl es una plataforma que permite a due\u00f1os de caba\u00f1as recibir reservas directas desde su propia p\u00e1gina web, sin comisiones de terceros. Estamos construyendo algo incre\u00edble."}
      </p>

      <div style={s.contactWrap}>
        <div style={s.contactTitle}>{"Contacto"}</div>
        <a href="mailto:contacto@takai.cl" style={s.contactLink}>contacto@takai.cl</a>
        <a href="https://wa.me/56912345678" style={{ ...s.contactLink, borderBottom: "none" }}>WhatsApp</a>
      </div>

      <div style={s.footer}>{"Takai.cl \u00b7 Regi\u00f3n de La Araucan\u00eda \u00b7 Chile"}</div>

      <div style={s.treeLine}></div>
    </div>
  )
}