"use client"
import { useState, useEffect } from "react"
import ContactModal from "./components/ContactModal"

const GOLD = "#C9A84C"
const GOLD_LIGHT = "#d4b96a"
const BG = "#070707"
const SURFACE = "#0f0f0f"
const BORDER = "#1f1f1f"
const TEXT = "#f0ede8"
const MUTED = "#888888"
const SERIF = "Cormorant Garamond, Georgia, serif"
const SANS = "DM Sans, sans-serif"

const IMG_HERO = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/1e0cfec6-a9b8-4700-84d6-c0bd294e63b3.png"
const IMG_2 = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/8fdd9ef7-84e2-4292-8af7-e59fdaf22368.png"
const IMG_3 = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/11c7aeac-3bae-4164-bfc3-aef47f6128a7.png"
const IMG_4 = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/d6fd670c-008a-42b3-b8c1-4e795be08d39.png"

function GoldLine() {
  return <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, " + GOLD + ", transparent)", opacity: 0.4 }} />
}

function GoldCorners({ size = 18 }: { size?: number }) {
  const s = size + "px"
  const g = "linear-gradient(" + GOLD + ", " + GOLD + ") no-repeat"
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: s, height: s, background: g + " top left/2px 100%, " + g + " top left/100% 2px" }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: s, height: s, background: g + " top right/2px 100%, " + g + " top right/100% 2px" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: s, height: s, background: g + " bottom left/2px 100%, " + g + " bottom left/100% 2px" }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: s, height: s, background: g + " bottom right/2px 100%, " + g + " bottom right/100% 2px" }} />
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
      <circle cx="8" cy="8" r="7" stroke={GOLD} strokeWidth="1.2" />
      <path d="M5 8l2 2 4-4" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  const [modal, setModal] = useState(false)
  const [promoShown, setPromoShown] = useState(false)
  const [promoOpen, setPromoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(function() {
    const timer = setTimeout(function() {
      if (!promoShown) {
        setPromoOpen(true)
        setPromoShown(true)
      }
    }, 1800)
    return function() { clearTimeout(timer) }
  }, [promoShown])

  useEffect(function() {
    function onScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener("scroll", onScroll)
    return function() { window.removeEventListener("scroll", onScroll) }
  }, [])

  function scrollTo(id: string) {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: SANS, minHeight: "100vh" }}>
      <style>{".tk-nav-links{display:flex;gap:28px;align-items:center}.tk-stats{grid-template-columns:1fr 1fr 1fr!important}.tk-how{grid-template-columns:repeat(3,1fr)!important}.tk-feat{grid-template-columns:1fr 1fr!important}@media(max-width:768px){.tk-nav-links{display:none!important}.tk-stats{grid-template-columns:1fr!important}.tk-how{grid-template-columns:1fr!important}.tk-feat{grid-template-columns:1fr!important}.tk-stat-border{border-right:none!important;border-bottom:1px solid #1f1f1f}}"}</style>
      <ContactModal open={promoOpen} onClose={function() { setPromoOpen(false) }} isPromo={true} />
      <ContactModal open={modal} onClose={function() { setModal(false) }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "background 0.3s", background: scrolled ? "rgba(7,7,7,0.95)" : "transparent", borderBottom: scrolled ? "1px solid " + BORDER : "1px solid transparent", backdropFilter: scrolled ? "blur(12px)" : "none" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/takai-logo.png" alt="Takai" style={{ height: "32px", width: "32px", objectFit: "contain", filter: "brightness(0) saturate(100%) invert(72%) sepia(42%) saturate(600%) hue-rotate(5deg) brightness(95%)" }} />
            <span style={{ fontFamily: SERIF, fontSize: "22px", letterSpacing: "3px", color: TEXT }}>TAKAI</span>
            <span style={{ fontSize: "10px", color: GOLD, letterSpacing: "1px", opacity: 0.8 }}>.CL</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <div className="tk-nav-links" style={{ display: "flex", gap: "28px", alignItems: "center" }}>
              {[["como-funciona", "Cómo funciona"], ["caracteristicas", "Características"], ["precios", "Precios"]].map(function(item) {
                return (
                  <button key={item[0]} onClick={function() { scrollTo(item[0]) }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, letterSpacing: "0.3px", padding: 0 }}>
                    {item[1]}
                  </button>
                )
              })}
            </div>
            <button onClick={function() { setModal(true) }} style={{ background: GOLD, color: "#0a0700", border: "none", borderRadius: "8px", padding: "10px 22px", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, letterSpacing: "0.3px", whiteSpace: "nowrap" as const }}>
              {"Comenzar"}
            </button>
            <a href="https://owner-dashboard.vercel.app" style={{ fontSize: "11px", color: "#444", textDecoration: "none", letterSpacing: "0.5px" }}>
              {"Acceso panel"}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={IMG_HERO} alt="Cabañas en Chile" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,7,7,0.5) 0%, rgba(7,7,7,0.2) 40%, rgba(7,7,7,0.8) 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" as const, padding: "120px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "100px", padding: "6px 18px", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD_LIGHT, marginBottom: "32px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: GOLD, display: "inline-block" }} />
            {"Sistema de reservas para cabañas en Chile"}
          </div>

          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 300, lineHeight: 1.05, color: TEXT, margin: "0 0 24px", letterSpacing: "-0.5px" }}>
            {"Empieza a ganar"}
            <br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"tranquilidad."}</em>
          </h1>

          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#aaa", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 40px", fontWeight: 300 }}>
            {"Automatiza tus reservas, muestra tu cabaña al mundo y recibe pagos sin complicaciones."}
            <br />
            {"Solo pagas cuando ganas."}
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <button onClick={function() { setModal(true) }} style={{ background: GOLD, color: "#0a0700", border: "none", borderRadius: "10px", padding: "16px 36px", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, boxShadow: "0 8px 32px rgba(201,168,76,0.3)", letterSpacing: "0.3px" }}>
              {"Comenzar ahora"}
            </button>
            <button onClick={function() { scrollTo("como-funciona") }} style={{ background: "transparent", color: TEXT, border: "1px solid " + BORDER, borderRadius: "10px", padding: "16px 32px", fontSize: "15px", cursor: "pointer", fontFamily: SANS, letterSpacing: "0.3px" }}>
              {"Cómo funciona ↓"}
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: SURFACE, borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER }}>
        <div className="tk-stats" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {[
            { n: "15%", label: "Comisión por reserva", sub: "Solo pagas cuando ganas" },
            { n: "72h", label: "Tiempo de activación", sub: "Tu página lista en 3 días" },
            { n: "$0", label: "Costo mensual", sub: "Sin suscripciones ni contratos" },
          ].map(function(item, i) {
            return (
              <div key={i} className={i < 2 ? "tk-stat-border" : ""} style={{ padding: "40px 32px", borderRight: i < 2 ? "1px solid " + BORDER : "none", textAlign: "center" as const }}>
                <div style={{ fontFamily: SERIF, fontSize: "52px", fontWeight: 300, color: GOLD, lineHeight: 1, marginBottom: "8px" }}>{item.n}</div>
                <div style={{ fontSize: "14px", color: TEXT, marginBottom: "4px", fontWeight: 500 }}>{item.label}</div>
                <div style={{ fontSize: "12px", color: MUTED }}>{item.sub}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center" as const, marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Cómo funciona"}</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: 0, letterSpacing: "-0.3px" }}>
            {"De la conversación a la reserva"}
            <br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"en 3 pasos."}</em>
          </h2>
        </div>

        <div className="tk-how" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {[
            {
              n: "01",
              title: "Conversamos",
              desc: "Nos cuentas cómo funcionan tus cabañas, tus precios y tus reglas. Nosotros configuramos todo.",
              img: IMG_2
            },
            {
              n: "02",
              title: "Diseñamos tu página",
              desc: "Creamos tu página personalizada con tu nombre, fotos, descripción y calendario en tiempo real.",
              img: IMG_3
            },
            {
              n: "03",
              title: "Empiezas a recibir reservas",
              desc: "Tu página queda lista para recibir reservas directas 24/7. Tú confirmas, tú cobras.",
              img: IMG_4
            }
          ].map(function(step, i) {
            return (
              <div key={i} style={{ position: "relative", background: SURFACE, border: "1px solid " + BORDER, borderRadius: "16px", overflow: "hidden" }}>
                <GoldCorners />
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to bottom, transparent 40%, " + SURFACE + " 100%)" }} />
                </div>
                <div style={{ padding: "24px 28px 32px" }}>
                  <div style={{ fontFamily: SERIF, fontSize: "48px", fontWeight: 300, color: BORDER, lineHeight: 1, marginBottom: "16px" }}>{step.n}</div>
                  <div style={{ fontFamily: SERIF, fontSize: "22px", fontWeight: 400, color: TEXT, marginBottom: "12px" }}>{step.title}</div>
                  <div style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7 }}>{step.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <GoldLine />

      {/* FEATURES */}
      <section id="caracteristicas" style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center" as const, marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Características"}</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: 0 }}>
            {"Todo lo que necesitas,"}
            <br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"sin lo que no necesitas."}</em>
          </h2>
        </div>

        <div className="tk-feat" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {[
            {
              icon: "📅",
              title: "Calendario inteligente",
              desc: "Cada reserva bloquea las fechas automáticamente. Sin dobles reservas. Sin llamadas de última hora. Tu disponibilidad siempre al día."
            },
            {
              icon: "🌎",
              title: "Tu página pública",
              desc: "Una página propia con tu nombre, tus fotos y tu identidad. Los turistas la ven, eligen fechas y reservan directo, sin intermediarios."
            },
            {
              icon: "💸",
              title: "Sin costo mensual",
              desc: "No cobramos mensualidad. Solo el 15% cuando Takai genera una reserva. Si el huésped llega directo, comisin cero."
            },
            {
              icon: "📱",
              title: "Notificaciones WhatsApp",
              desc: "Recibes un aviso instantáneo por WhatsApp cada vez que alguien reserva. Sin apps, sin aprender nada nuevo."
            }
          ].map(function(feat, i) {
            return (
              <div key={i} style={{ position: "relative", background: SURFACE, border: "1px solid " + BORDER, borderRadius: "16px", padding: "32px 36px" }}>
                <GoldCorners size={14} />
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>{feat.icon}</div>
                <div style={{ fontFamily: SERIF, fontSize: "22px", fontWeight: 400, color: TEXT, marginBottom: "12px" }}>{feat.title}</div>
                <div style={{ fontSize: "14px", color: MUTED, lineHeight: 1.75 }}>{feat.desc}</div>
              </div>
            )
          })}
        </div>
      </section>

      <GoldLine />

      {/* PRICING */}
      <section id="precios" style={{ padding: "100px 24px", maxWidth: "700px", margin: "0 auto", textAlign: "center" as const }}>
        <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Precios"}</div>
        <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: "0 0 8px" }}>
          {"Transparente y justo"}
        </h2>
        <p style={{ fontSize: "16px", color: MUTED, marginBottom: "48px" }}>{"Un solo plan. Sin sorpresas."}</p>

        <div style={{ position: "relative", background: SURFACE, border: "1px solid " + BORDER, borderRadius: "20px", padding: "48px", boxShadow: "0 0 40px rgba(201,168,76,0.06)" }}>
          <GoldCorners size={22} />
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontFamily: SERIF, fontSize: "64px", fontWeight: 300, color: GOLD, lineHeight: 1 }}>{"$0"}</div>
            <div style={{ fontSize: "14px", color: MUTED, marginTop: "8px" }}>{"mensuales + 15% por reserva confirmada vía Takai"}</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px", textAlign: "left" as const, marginBottom: "40px" }}>
            {[
              "Página personalizada con tu marca y fotos",
              "Calendario en tiempo real con bloqueo automático",
              "Formulario de reservas para turistas",
              "Panel del propietario accesible desde el celular",
              "Notificaciones por WhatsApp al instante",
              "0% comisión en reservas directas",
              "Configuración inicial incluida — sin costo",
              "Soporte por WhatsApp con el equipo Takai"
            ].map(function(item, i) {
              return (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#ccc", lineHeight: 1.5 }}>
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              )
            })}
          </div>

          <button onClick={function() { setModal(true) }} style={{ width: "100%", background: GOLD, color: "#0a0700", border: "none", borderRadius: "10px", padding: "18px", fontSize: "16px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, letterSpacing: "0.3px", boxShadow: "0 8px 32px rgba(201,168,76,0.25)" }}>
            {"Comenzar ahora →"}
          </button>
        </div>
      </section>

      <GoldLine />

      {/* FINAL CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "24px" }}>{"Empecemos"}</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300, color: TEXT, margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-0.3px" }}>
            {"Nosotros la"}
            <br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"mostramos."}</em>
          </h2>
          <p style={{ fontSize: "16px", color: MUTED, lineHeight: 1.7, marginBottom: "40px" }}>
            {"Tú tienes las cabañas. Nosotros ponemos la tecnología, el sistema y la presencia online."}
            <br />
            {"Solo pagas cuando ganas."}
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <button onClick={function() { setModal(true) }} style={{ background: GOLD, color: "#0a0700", border: "none", borderRadius: "10px", padding: "18px 40px", fontSize: "16px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, boxShadow: "0 8px 32px rgba(201,168,76,0.3)", letterSpacing: "0.3px" }}>
              {"Comenzar ahora por WhatsApp"}
            </button>
            <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: TEXT, border: "1px solid " + BORDER, borderRadius: "10px", padding: "18px 32px", fontSize: "15px", textDecoration: "none", fontFamily: SANS }}>
              {"Eschíbenos por WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: SURFACE, borderTop: "1px solid " + BORDER, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap" as const, gap: "24px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <img src="/takai-logo.png" alt="Takai" style={{ height: "28px", width: "28px", objectFit: "contain", filter: "brightness(0) saturate(100%) invert(72%) sepia(42%) saturate(600%) hue-rotate(5deg) brightness(95%)" }} />
                <span style={{ fontFamily: SERIF, fontSize: "20px", letterSpacing: "3px", color: TEXT }}>TAKAI.CL</span>
              </div>
              <div style={{ fontSize: "13px", color: MUTED, maxWidth: "280px", lineHeight: 1.6 }}>
                {"Sistema de reservas para cabañas en Chile. Sin mensualidades."}
              </div>
            </div>
            <div style={{ display: "flex", gap: "48px" }}>
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Navegación"}</div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {[["como-funciona", "Cómo funciona"], ["caracteristicas", "Características"], ["precios", "Precios"]].map(function(item) {
                    return (
                      <button key={item[0]} onClick={function() { scrollTo(item[0]) }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>
                        {item[1]}
                      </button>
                    )
                  })}
                  <a href="https://owner-dashboard.vercel.app" style={{ color: "#444", fontSize: "12px", textDecoration: "none" }}>
                    {"Acceso panel propietarios"}
                  </a>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Contacto"}</div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>WhatsApp</a>
                  <a href="mailto:hola@takai.cl" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>hola@takai.cl</a>
                </div>
              </div>
            </div>
          </div>
          <GoldLine />
          <div style={{ paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <div style={{ fontSize: "12px", color: "#444" }}>{"\u00a9 2026 Takai.cl \u2014 Todos los derechos reservados"}</div>
            <div style={{ fontSize: "12px", color: "#333" }}>{"Hecho en Chile \u2665"}</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
