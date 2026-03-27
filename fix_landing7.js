const fs = require("fs")
const path = require("path")
const base = __dirname

// PNG has RGBA (transparent background) so we just need to colorize:
// brightness(0) -> all black, invert(1) -> all white, sepia+saturate -> gold
// No mix-blend-mode needed. Transparent pixels stay transparent throughout.
const LOGO_FILTER = "brightness(0) invert(1) sepia(1) saturate(2.5) hue-rotate(3deg) brightness(1.05)"

// New images for Cómo funciona
// Step 1: person working on laptop/form
const IMG_STEP1 = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&auto=format&fit=crop"
// Step 2: laptop with dashboard/analytics
const IMG_STEP2 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop"

const CDN = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/"
const IMG_HERO = CDN + "1e0cfec6-a9b8-4700-84d6-c0bd294e63b3.png"
const IMG_2    = CDN + "8fdd9ef7-84e2-4292-8af7-e59fdaf22368.png"
const IMG_3    = CDN + "11c7aeac-3bae-4164-bfc3-aef47f6128a7.png"
const IMG_4    = CDN + "d6fd670c-008a-42b3-b8c1-4e795be08d39.png"

const PAGE = `"use client"
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
const LOGO_FILTER = "${LOGO_FILTER}"

const IMG_HERO  = "${IMG_HERO}"
const IMG_2     = "${IMG_2}"
const IMG_3     = "${IMG_3}"
const IMG_4     = "${IMG_4}"
const IMG_STEP1 = "${IMG_STEP1}"
const IMG_STEP2 = "${IMG_STEP2}"

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

function SectionBg({ src, opacity = 0.09 }: { src: string; opacity?: number }) {
  return (
    <img src={src} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: opacity, pointerEvents: "none", userSelect: "none" as const }} />
  )
}

function TakaiLogo({ height = 36 }: { height?: number }) {
  return (
    <img
      src="/takai-logo.png"
      alt="Takai"
      style={{ height: height + "px", width: "auto", objectFit: "contain", filter: LOGO_FILTER }}
    />
  )
}

export default function Home() {
  const [modal, setModal] = useState(false)
  const [promoShown, setPromoShown] = useState(false)
  const [promoOpen, setPromoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(function() {
    const timer = setTimeout(function() {
      if (!promoShown) { setPromoOpen(true); setPromoShown(true) }
    }, 1800)
    return function() { clearTimeout(timer) }
  }, [promoShown])

  useEffect(function() {
    function onScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener("scroll", onScroll)
    return function() { window.removeEventListener("scroll", onScroll) }
  }, [])

  function scrollTo(id: string) {
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
            <TakaiLogo height={36} />
            <span style={{ fontFamily: SERIF, fontSize: "22px", letterSpacing: "3px", color: TEXT }}>{"TAKAI"}</span>
            <span style={{ fontSize: "10px", color: GOLD, letterSpacing: "1px", opacity: 0.8 }}>{".CL"}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div className="tk-nav-links">
              {[["como-funciona", "C\u00f3mo funciona"], ["caracteristicas", "Caracter\u00edsticas"], ["precios", "Precios"]].map(function(item) {
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
            <a href="/panel" style={{ fontSize: "11px", color: "#444", textDecoration: "none", letterSpacing: "0.5px", whiteSpace: "nowrap" as const }}>
              {"Acceso panel"}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={IMG_HERO} alt="Caba\u00f1as en Chile" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.38 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,7,7,0.55) 0%, rgba(7,7,7,0.15) 40%, rgba(7,7,7,0.85) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" as const, padding: "120px 24px 80px", maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "100px", padding: "6px 18px", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD_LIGHT, marginBottom: "32px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: GOLD, display: "inline-block" }} />
            {"Sistema de reservas para caba\u00f1as en Chile"}
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(38px, 6.5vw, 76px)", fontWeight: 300, lineHeight: 1.08, color: TEXT, margin: "0 0 24px", letterSpacing: "-0.5px" }}>
            {"Deja de perder reservas."}
            <br />
            {"Empieza a ganar"}
            <br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"tranquilidad."}</em>
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#aaa", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 40px", fontWeight: 300 }}>
            {"Automatiza tus reservas, muestra tu caba\u00f1a al mundo y recibe pagos sin complicaciones."}
            <br />
            {"Solo pagas cuando Takai te trae nuevas reservas."}
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <button onClick={function() { setModal(true) }} style={{ background: GOLD, color: "#0a0700", border: "none", borderRadius: "10px", padding: "16px 36px", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, boxShadow: "0 8px 32px rgba(201,168,76,0.3)", letterSpacing: "0.3px" }}>
              {"Comenzar ahora"}
            </button>
            <button onClick={function() { scrollTo("como-funciona") }} style={{ background: "transparent", color: TEXT, border: "1px solid " + BORDER, borderRadius: "10px", padding: "16px 32px", fontSize: "15px", cursor: "pointer", fontFamily: SANS, letterSpacing: "0.3px" }}>
              {"C\u00f3mo funciona \u2193"}
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ position: "relative", background: SURFACE, borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER, overflow: "hidden" }}>
        <SectionBg src={IMG_2} opacity={0.06} />
        <div className="tk-stats" style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {[
            { n: "15%", label: "Comisi\u00f3n por reservas Takai", sub: "Tus reservas directas son 100% tuyas" },
            { n: "72h", label: "Tiempo de activaci\u00f3n", sub: "Tu p\u00e1gina lista en 72 horas" },
            { n: "$0", label: "Costo durante el lanzamiento", sub: "Oferta limitada de acceso gratuito" },
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
      <section id="como-funciona" style={{ position: "relative", overflow: "hidden" }}>
        <SectionBg src={IMG_3} opacity={0.07} />
        <div style={{ position: "relative", zIndex: 1, padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: "64px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"C\u00f3mo funciona"}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: 0, letterSpacing: "-0.3px" }}>
              {"De la conversaci\u00f3n a la reserva"}
              <br />
              <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"en 3 pasos."}</em>
            </h2>
          </div>
          <div className="tk-how" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              {
                n: "01",
                title: "Conversamos",
                desc: "Nos cuentas c\u00f3mo funcionan tus caba\u00f1as, tus precios y tus reglas. Completamos el formulario de incorporaci\u00f3n juntos.",
                img: IMG_STEP1
              },
              {
                n: "02",
                title: "Dise\u00f1amos tu p\u00e1gina",
                desc: "Configuramos tu panel de propietario y tu p\u00e1gina p\u00fablica personalizada. Todo listo en 72 horas.",
                img: IMG_STEP2
              },
              {
                n: "03",
                title: "Empiezas a recibir reservas",
                desc: "Compartes el enlace de tu p\u00e1gina Takai donde quieras. Los turistas reservan directo. T\u00fa confirmas, t\u00fa cobras.",
                img: IMG_4
              }
            ].map(function(step, i) {
              return (
                <div key={i} style={{ position: "relative", background: "rgba(15,15,15,0.92)", border: "1px solid " + BORDER, borderRadius: "16px", overflow: "hidden" }}>
                  <GoldCorners />
                  <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to bottom, transparent 40%, rgba(15,15,15,0.92) 100%)" }} />
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
        </div>
      </section>

      <GoldLine />

      {/* FEATURES */}
      <section id="caracteristicas" style={{ position: "relative", overflow: "hidden" }}>
        <SectionBg src={IMG_2} opacity={0.08} />
        <div style={{ position: "relative", zIndex: 1, padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: "64px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Caracter\u00edsticas"}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: 0 }}>
              {"Todo lo que necesitas,"}
              <br />
              <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"sin lo que no necesitas."}</em>
            </h2>
          </div>
          <div className="tk-feat" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[
              {
                icon: "\uD83D\uDCC5",
                title: "Calendario inteligente",
                desc: "Cada reserva bloquea las fechas autom\u00e1ticamente. Sin dobles reservas. Sin llamadas de \u00faltima hora. Tu disponibilidad siempre al d\u00eda."
              },
              {
                icon: "\uD83C\uDF0E",
                title: "Tu p\u00e1gina p\u00fablica",
                desc: "Una p\u00e1gina propia con tu nombre, tus fotos y tu identidad. T\u00fa compartes el enlace donde quieras: Instagram, WhatsApp, Google. Los turistas reservan directo."
              },
              {
                icon: "\uD83D\uDCB8",
                title: "Tus reservas directas son 100% tuyas",
                desc: "Si un hu\u00e9sped llega por tu propio canal, no le debes nada a nadie. Takai solo cobra el 15% cuando es Takai quien te trae la reserva. Tus clientes habituales son tuyos."
              },
              {
                icon: "\uD83D\uDCF1",
                title: "Notificaciones WhatsApp",
                desc: "Recibes un aviso instant\u00e1neo por WhatsApp cada vez que alguien reserva. Sin apps, sin aprender nada nuevo."
              }
            ].map(function(feat, i) {
              return (
                <div key={i} style={{ position: "relative", background: "rgba(15,15,15,0.92)", border: "1px solid " + BORDER, borderRadius: "16px", padding: "32px 36px" }}>
                  <GoldCorners size={14} />
                  <div style={{ fontSize: "32px", marginBottom: "20px" }}>{feat.icon}</div>
                  <div style={{ fontFamily: SERIF, fontSize: "22px", fontWeight: 400, color: TEXT, marginBottom: "12px" }}>{feat.title}</div>
                  <div style={{ fontSize: "14px", color: MUTED, lineHeight: 1.75 }}>{feat.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <GoldLine />

      {/* PRICING */}
      <section id="precios" style={{ position: "relative", overflow: "hidden" }}>
        <SectionBg src={IMG_4} opacity={0.07} />
        <div style={{ position: "relative", zIndex: 1, padding: "100px 24px", maxWidth: "700px", margin: "0 auto", textAlign: "center" as const }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Precios"}</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: "0 0 8px" }}>
            {"Transparente y justo"}
          </h2>
          <p style={{ fontSize: "16px", color: MUTED, marginBottom: "48px" }}>{"Un solo plan. Sin sorpresas."}</p>

          <div style={{ position: "relative", background: "rgba(15,15,15,0.92)", border: "1px solid " + BORDER, borderRadius: "20px", padding: "48px", boxShadow: "0 0 40px rgba(201,168,76,0.06)" }}>
            <GoldCorners size={22} />

            <div style={{ marginBottom: "32px" }}>
              <div style={{ fontFamily: SERIF, fontSize: "56px", fontWeight: 300, color: GOLD, lineHeight: 1 }}>{"15%"}</div>
              <div style={{ fontSize: "14px", color: MUTED, marginTop: "8px", lineHeight: 1.6 }}>
                {"solo cuando Takai genera una reserva para ti"}
                <br />
                <span style={{ color: "#5a9a5a", fontSize: "12px" }}>{"Tus reservas directas son 100% tuyas. Siempre."}</span>
              </div>
            </div>

            <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "10px", padding: "16px 20px", marginBottom: "28px", textAlign: "left" as const }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "6px" }}>{"Promoci\u00f3n de lanzamiento"}</div>
              <div style={{ fontSize: "13px", color: "#ddd", lineHeight: 1.6 }}>
                {"La creaci\u00f3n de tu p\u00e1gina y la mensualidad del sistema est\u00e1n "}
                <strong style={{ color: GOLD_LIGHT }}>{"gratis por tiempo limitado."}</strong>
                {" Solo pagas cuando ganas."}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px", textAlign: "left" as const, marginBottom: "40px" }}>
              {[
                "P\u00e1gina personalizada con tu marca y fotos",
                "Calendario en tiempo real con bloqueo autom\u00e1tico",
                "Formulario de reservas para turistas",
                "Panel del propietario accesible desde el celular",
                "Notificaciones por WhatsApp al instante",
                "0% comisi\u00f3n en reservas que t\u00fa mismo gestionas",
                "Configuraci\u00f3n inicial incluida \u2014 sin costo adicional",
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
              {"Comenzar ahora \u2192"}
            </button>
          </div>
        </div>
      </section>

      <GoldLine />

      {/* FINAL CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" as const, position: "relative", overflow: "hidden" }}>
        <SectionBg src={IMG_HERO} opacity={0.1} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "620px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "24px" }}>{"Empecemos"}</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300, color: TEXT, margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-0.3px" }}>
            {"T\u00fa tienes las caba\u00f1as."}
            <br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"Nosotros ponemos el sistema."}</em>
          </h2>
          <p style={{ fontSize: "16px", color: MUTED, lineHeight: 1.7, marginBottom: "40px" }}>
            {"Te entregamos la tecnolog\u00eda, el panel y la p\u00e1gina lista."}
            <br />
            {"T\u00fa la publicas donde quieras y empiezas a recibir reservas."}
            <br />
            <span style={{ color: "#5a9a5a", fontSize: "14px" }}>{"Tus reservas directas son siempre tuyas. Solo pagamos si Takai te trae una nueva."}</span>
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <button onClick={function() { setModal(true) }} style={{ background: GOLD, color: "#0a0700", border: "none", borderRadius: "10px", padding: "18px 40px", fontSize: "16px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, boxShadow: "0 8px 32px rgba(201,168,76,0.3)", letterSpacing: "0.3px" }}>
              {"Comenzar ahora por WhatsApp"}
            </button>
            <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: TEXT, border: "1px solid " + BORDER, borderRadius: "10px", padding: "18px 32px", fontSize: "15px", textDecoration: "none", fontFamily: SANS }}>
              {"\u00c9scr\u00edbenos por WhatsApp"}
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
                <TakaiLogo height={30} />
                <span style={{ fontFamily: SERIF, fontSize: "20px", letterSpacing: "3px", color: TEXT }}>{"TAKAI.CL"}</span>
              </div>
              <div style={{ fontSize: "13px", color: MUTED, maxWidth: "280px", lineHeight: 1.6 }}>
                {"Sistema profesional de reservas para caba\u00f1as en Chile."}
              </div>
            </div>
            <div style={{ display: "flex", gap: "48px" }}>
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Navegaci\u00f3n"}</div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {[["como-funciona", "C\u00f3mo funciona"], ["caracteristicas", "Caracter\u00edsticas"], ["precios", "Precios"]].map(function(item) {
                    return (
                      <button key={item[0]} onClick={function() { scrollTo(item[0]) }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>
                        {item[1]}
                      </button>
                    )
                  })}
                  <a href="/panel" style={{ color: "#444", fontSize: "12px", textDecoration: "none" }}>
                    {"Acceso panel propietarios"}
                  </a>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Contacto"}</div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"WhatsApp"}</a>
                  <a href="mailto:hola@takai.cl" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"hola@takai.cl"}</a>
                </div>
              </div>
            </div>
          </div>
          <GoldLine />
          <div style={{ paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <div style={{ fontSize: "12px", color: "#444" }}>{"\\u00a9 2026 Takai.cl \\u2014 Todos los derechos reservados"}</div>
            <div style={{ fontSize: "12px", color: "#333" }}>{"Hecho en Chile"}</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
`

// interpolate the template strings
const finalPage = PAGE
  .replace(/\${LOGO_FILTER}/g, LOGO_FILTER)
  .replace(/\${IMG_HERO}/g, IMG_HERO)
  .replace(/\${IMG_2}/g, IMG_2)
  .replace(/\${IMG_3}/g, IMG_3)
  .replace(/\${IMG_4}/g, IMG_4)
  .replace(/\${IMG_STEP1}/g, IMG_STEP1)
  .replace(/\${IMG_STEP2}/g, IMG_STEP2)

fs.writeFileSync(path.join(base, "app", "page.tsx"), finalPage, "utf8")
console.log("Written: app/page.tsx")
console.log("Logo filter:", LOGO_FILTER)
console.log("Done. Run: npm run build")
