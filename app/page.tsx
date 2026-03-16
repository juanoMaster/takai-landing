import type { CSSProperties } from "react"

function ConstructionSign() {
  return (
    <svg width="340" height="110" viewBox="0 0 340 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="85" width="10" height="25" rx="2" fill="#8B7355" />
      <rect x="305" y="85" width="10" height="25" rx="2" fill="#8B7355" />
      <rect x="15" y="25" width="310" height="65" rx="6" fill="#F5C518" stroke="#D4A017" strokeWidth="2" />
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => (
        <rect key={i} x={15 + i * 20} y="25" width="10" height="7" fill="#1a1a1a" />
      ))}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => (
        <rect key={"b"+i} x={15 + i * 20} y="83" width="10" height="7" fill="#1a1a1a" />
      ))}
      <text x="170" y="65" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="17" fontWeight="900" fill="#1a1a1a" letterSpacing="2">SITIO EN CONSTRUCCI{"\u00d3"}N</text>
      <circle cx="28" cy="18" r="9" fill="#FF6B00" stroke="#CC5500" strokeWidth="1.5" />
      <circle cx="28" cy="18" r="4.5" fill="#FFD700" opacity="0.8" />
      <circle cx="312" cy="18" r="9" fill="#FF6B00" stroke="#CC5500" strokeWidth="1.5" />
      <circle cx="312" cy="18" r="4.5" fill="#FFD700" opacity="0.8" />
    </svg>
  )
}

const s: Record<string, CSSProperties> = {
  page: { fontFamily: "Georgia, serif", color: "#f0ede8", background: "linear-gradient(170deg, #0a1510 0%, #0d1a12 40%, #121f17 100%)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "24px 24px 40px", position: "relative", overflow: "hidden" },
  glow: { position: "absolute", top: "-150px", left: "50%", transform: "translateX(-50%)", width: "500px", height: "500px", background: "radial-gradient(circle, #7ab87a08 0%, transparent 70%)", pointerEvents: "none" },
  logoWrap: { marginBottom: "16px", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "12px" },
  logoImg: { width: "120px", height: "120px", objectFit: "contain" as const },
  logoText: { fontSize: "56px", letterSpacing: "10px", textTransform: "uppercase" as const, color: "#e8d5a3", lineHeight: 1 },
  logoSpan: { color: "#7ab87a" },
  tagline: { fontFamily: "sans-serif", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase" as const, color: "#5a7058", marginTop: "6px" },
  signWrap: { margin: "20px 0 16px" },
  heading: { fontFamily: "Georgia, serif", fontSize: "22px", color: "#e8d5a3", lineHeight: 1.4, marginBottom: "12px", maxWidth: "480px" },
  desc: { fontFamily: "sans-serif", fontSize: "13px", color: "#8a9e88", lineHeight: 1.8, maxWidth: "440px", marginBottom: "20px" },
  features: { display: "flex", gap: "8px", flexWrap: "wrap" as const, justifyContent: "center", marginBottom: "20px", maxWidth: "480px" },
  feat: { fontFamily: "sans-serif", fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase" as const, color: "#7ab87a", background: "#7ab87a10", border: "1px solid #7ab87a22", borderRadius: "20px", padding: "5px 12px" },
  contactWrap: { background: "#162618", border: "1px solid #2a3e28", borderRadius: "14px", padding: "18px 28px", maxWidth: "360px", width: "100%" },
  contactTitle: { fontFamily: "Georgia, serif", fontSize: "15px", color: "#e8d5a3", marginBottom: "12px" },
  contactLink: { display: "block", fontFamily: "sans-serif", fontSize: "13px", color: "#7ab87a", textDecoration: "none", padding: "6px 0", borderBottom: "1px solid #ffffff07" },
  footer: { fontFamily: "sans-serif", fontSize: "10px", color: "#2a3e28", marginTop: "28px", letterSpacing: "1px" },
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

      <h1 style={s.heading}>{"Estamos construyendo la plataforma de reservas m\u00e1s completa de Chile"}</h1>

      <p style={s.desc}>
        {"Takai.cl permitir\u00e1 a negocios de turismo, hospedaje, servicios y m\u00e1s, recibir reservas directas desde su propia p\u00e1gina web. Sin comisiones de terceros. Tu negocio, tus clientes."}
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