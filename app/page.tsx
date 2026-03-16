import type { CSSProperties } from "react"

const s: Record<string, CSSProperties> = {
  page: { fontFamily: "Georgia, serif", color: "#f0ede8", background: "linear-gradient(170deg, #0a1510 0%, #0d1a12 40%, #121f17 100%)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px", position: "relative", overflow: "hidden" },
  glow: { position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, #7ab87a08 0%, transparent 70%)", pointerEvents: "none" },
  banner: { background: "#e8a21a", color: "#0d1a12", fontFamily: "sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" as const, padding: "12px 0", position: "fixed" as const, top: "0", left: "0", right: "0", textAlign: "center", zIndex: 10 },
  logoWrap: { marginBottom: "24px", marginTop: "40px", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "16px" },
  logoImg: { width: "80px", height: "80px", objectFit: "contain" as const },
  logoText: { fontSize: "48px", letterSpacing: "8px", textTransform: "uppercase" as const, color: "#e8d5a3", lineHeight: 1 },
  logoSpan: { color: "#7ab87a" },
  tagline: { fontFamily: "sans-serif", fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase" as const, color: "#5a7058", marginTop: "8px" },
  divider: { width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #7ab87a44, transparent)", margin: "28px auto" },
  heading: { fontFamily: "Georgia, serif", fontSize: "26px", color: "#e8d5a3", lineHeight: 1.4, marginBottom: "16px", maxWidth: "520px" },
  desc: { fontFamily: "sans-serif", fontSize: "15px", color: "#8a9e88", lineHeight: 1.8, maxWidth: "480px", marginBottom: "32px" },
  features: { display: "flex", gap: "16px", flexWrap: "wrap" as const, justifyContent: "center", marginBottom: "32px", maxWidth: "520px" },
  feat: { fontFamily: "sans-serif", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" as const, color: "#7ab87a", background: "#7ab87a10", border: "1px solid #7ab87a22", borderRadius: "20px", padding: "6px 16px" },
  contactWrap: { background: "#162618", border: "1px solid #2a3e28", borderRadius: "16px", padding: "24px 32px", maxWidth: "400px", width: "100%" },
  contactTitle: { fontFamily: "Georgia, serif", fontSize: "16px", color: "#e8d5a3", marginBottom: "16px" },
  contactLink: { display: "block", fontFamily: "sans-serif", fontSize: "14px", color: "#7ab87a", textDecoration: "none", padding: "8px 0", borderBottom: "1px solid #ffffff07" },
  footer: { fontFamily: "sans-serif", fontSize: "11px", color: "#2a3e28", marginTop: "48px", letterSpacing: "1px" },
}

export default function Home() {
  return (
    <div style={s.page}>
      <div style={s.banner}>{"Sitio en construcci\u00f3n"}</div>
      <div style={s.glow}></div>

      <div style={s.logoWrap}>
        <img src="/takai-logo.png" alt="Takai.cl" style={s.logoImg} />
        <div>
          <div style={s.logoText}>Takai<span style={s.logoSpan}>.cl</span></div>
          <div style={s.tagline}>Reservas directas para el sur de Chile</div>
        </div>
      </div>

      <div style={s.divider}></div>

      <h1 style={s.heading}>{"La plataforma de reservas que tu caba\u00f1a necesita"}</h1>

      <p style={s.desc}>
        {"Takai.cl permite a due\u00f1os de caba\u00f1as en el sur de Chile recibir reservas directas desde su propia p\u00e1gina web. Sin comisiones de terceros. Sin apps. Solo tu caba\u00f1a y tus turistas."}
      </p>

      <div style={s.features}>
        <span style={s.feat}>Reservas 24/7</span>
        <span style={s.feat}>Sin mensualidad</span>
        <span style={s.feat}>Pagos online</span>
        <span style={s.feat}>WhatsApp directo</span>
      </div>

      <div style={s.contactWrap}>
        <div style={s.contactTitle}>{"Quiero Takai para mi caba\u00f1a"}</div>
        <a href="mailto:contacto@takai.cl" style={s.contactLink}>contacto@takai.cl</a>
        <a href="https://wa.me/56912345678" style={{ ...s.contactLink, borderBottom: "none" }}>WhatsApp</a>
      </div>

      <div style={s.footer}>{"Takai.cl \u00b7 Regi\u00f3n de La Araucan\u00eda \u00b7 Chile"}</div>
    </div>
  )
}
