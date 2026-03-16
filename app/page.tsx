import type { CSSProperties } from "react"

function ConstructionSign() {
  return (
    <svg width="320" height="120" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="95" width="8" height="25" rx="2" fill="#8B7355" />
      <rect x="292" y="95" width="8" height="25" rx="2" fill="#8B7355" />
      <rect x="10" y="30" width="300" height="70" rx="8" fill="#F5C518" stroke="#D4A017" strokeWidth="2" />
      <rect x="10" y="30" width="300" height="14" rx="0" fill="repeating-linear-gradient()" />
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
        <rect key={i} x={10 + i * 24} y="30" width="12" height="8" fill="#1a1a1a" />
      ))}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
        <rect key={"b"+i} x={10 + i * 24} y="92" width="12" height="8" fill="#1a1a1a" />
      ))}
      <text x="160" y="72" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="900" fill="#1a1a1a" letterSpacing="3">{"SITIO EN CONSTRUCCI\u00d3N"}</text>
      <circle cx="30" cy="22" r="10" fill="#FF6B00" stroke="#CC5500" strokeWidth="1.5" />
      <circle cx="30" cy="22" r="5" fill="#FFD700" opacity="0.8" />
      <circle cx="290" cy="22" r="10" fill="#FF6B00" stroke="#CC5500" strokeWidth="1.5" />
      <circle cx="290" cy="22" r="5" fill="#FFD700" opacity="0.8" />
    </svg>
  )
}

const s: Record<string, CSSProperties> = {
  page: { fontFamily: "Georgia, serif", color: "#f0ede8", background: "linear-gradient(170deg, #0a1510 0%, #0d1a12 40%, #121f17 100%)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px", position: "relative", overflow: "hidden" },
  glow: { position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, #7ab87a08 0%, transparent 70%)", pointerEvents: "none" },
  logoWrap: { marginBottom: "20px", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "16px" },
  logoImg: { width: "80px", height: "80px", objectFit: "contain" as const },
  logoText: { fontSize: "48px", letterSpacing: "8px", textTransform: "uppercase" as const, color: "#e8d5a3", lineHeight: 1 },
  logoSpan: { color: "#7ab87a" },
  tagline: { fontFamily: "sans-serif", fontSize: "13px", letterSpacing: "4px", textTransform: "uppercase" as const, color: "#5a7058", marginTop: "8px" },
  signWrap: { margin: "28px 0", position: "relative" as const },
  divider: { width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #7ab87a44, transparent)", margin: "24px auto" },
  heading: { fontFamily: "Georgia, serif", fontSize: "24px", color: "#e8d5a3", lineHeight: 1.4, marginBottom: "16px", maxWidth: "520px" },
  desc: { fontFamily: "sans-serif", fontSize: "14px", color: "#8a9e88", lineHeight: 1.8, maxWidth: "460px", marginBottom: "28px" },
  features: { display: "flex", gap: "10px", flexWrap: "wrap" as const, justifyContent: "center", marginBottom: "28px", maxWidth: "520px" },
  feat: { fontFamily: "sans-serif", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase" as const, color: "#7ab87a", background: "#7ab87a10", border: "1px solid #7ab87a22", borderRadius: "20px", padding: "6px 14px" },
  contactWrap: { background: "#162618", border: "1px solid #2a3e28", borderRadius: "16px", padding: "24px 32px", maxWidth: "400px", width: "100%" },
  contactTitle: { fontFamily: "Georgia, serif", fontSize: "16px", color: "#e8d5a3", marginBottom: "16px" },
  contactLink: { display: "block", fontFamily: "sans-serif", fontSize: "14px", color: "#7ab87a", textDecoration: "none", padding: "8px 0", borderBottom: "1px solid #ffffff07" },
  footer: { fontFamily: "sans-serif", fontSize: "11px", color: "#2a3e28", marginTop: "40px", letterSpacing: "1px" },
}

export default function Home() {
  return (
    <div style={s.page}>
      <div style={s.glow}></div>

      <div style={s.logoWrap}>
        <img src="/takai-logo.png" alt="Takai.cl" style={s.logoImg} />
        <div>
          <div style={s.logoText}>Takai<span style={s.logoSpan}>.cl</span></div>
          <div style={s.tagline}>Plataforma de reservas en Chile</div>
        </div>
      </div>

      <div style={s.signWrap}>
        <ConstructionSign />
      </div>

      <div style={s.divider}></div>

      <h1 style={s.heading}>{"Estamos construyendo la plataforma de reservas m\u00e1s completa de Chile"}</h1>

      <p style={s.desc}>
        {"Takai.cl permitir\u00e1 a negocios de turismo, hospedaje, servicios y m\u00e1s, recibir reservas directas desde su propia p\u00e1gina web. Sin comisiones de terceros. Sin apps. Tu negocio, tus clientes."}
      </p>

      <div style={s.features}>
        <span style={s.feat}>Reservas 24/7</span>
        <span style={s.feat}>Sin mensualidad</span>
        <span style={s.feat}>Pagos online</span>
        <span style={s.feat}>WhatsApp directo</span>
        <span style={s.feat}>Multi-rubro</span>
      </div>

      <div style={s.contactWrap}>
        <div style={s.contactTitle}>{"Quiero Takai para mi negocio"}</div>
        <a href="mailto:contacto@takai.cl" style={s.contactLink}>contacto@takai.cl</a>
        <a href="https://wa.me/56912345678" style={{ ...s.contactLink, borderBottom: "none" }}>WhatsApp</a>
      </div>

      <div style={s.footer}>{"Takai.cl \u00b7 Regi\u00f3n de La Araucan\u00eda \u00b7 Chile"}</div>
    </div>
  )
}
