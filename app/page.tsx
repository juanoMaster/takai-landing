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

const IMG_HERO  = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/1e0cfec6-a9b8-4700-84d6-c0bd294e63b3.png"
const IMG_2     = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/8fdd9ef7-84e2-4292-8af7-e59fdaf22368.png"
const IMG_3     = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/11c7aeac-3bae-4164-bfc3-aef47f6128a7.png"
const IMG_4     = "https://mgx-backend-cdn.metadl.com/generate/images/1063139/2026-03-26/d6fd670c-008a-42b3-b8c1-4e795be08d39.png"
const IMG_STEP1 = "/step1-conversemos.png"
const IMG_STEP2 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop"

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
    <img src="/takai-hawk-nobg.png" alt="Takai" style={{ height: height + "px", width: "auto", display: "block" }} />
  )
}

function HawkIcon({ size = 18 }: { size?: number }) {
  return (
    <img src="/takai-hawk-nobg.png" alt="" style={{ height: size + "px", width: "auto", display: "inline-block", verticalAlign: "middle", opacity: 0.7 }} />
  )
}

function LegalModal({ open, onClose, type }: { open: boolean; onClose: () => void; type: "terminos" | "privacidad" | "cookies" }) {
  if (!open) return null
  const titles: Record<string, string> = {
    terminos: "Términos de Servicio",
    privacidad: "Política de Privacidad",
    cookies: "Política de Cookies",
  }
  const contents: Record<string, React.ReactNode> = {
    terminos: (
      <>
        <p><strong>Última actualización:</strong> marzo 2026</p>
        <h3>1. Aceptación de los términos</h3>
        <p>Al acceder y utilizar los servicios de Takai.cl (en adelante, "Takai"), usted acepta quedar vinculado por estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.</p>
        <h3>2. Descripción del servicio</h3>
        <p>Takai proporciona una plataforma tecnológica de gestión de reservas para propietarios de cabañas en Chile. Los servicios incluyen: página web personalizada, panel de administración, calendario de disponibilidad, sistema de reservas en línea y notificaciones por WhatsApp.</p>
        <h3>3. Modelo de comisión</h3>
        <p>Takai cobra una comisión del 15% exclusivamente sobre las reservas que la plataforma genere directamente. Las reservas gestionadas por el propio propietario a través de sus canales directos no están sujetas a comisión alguna.</p>
        <h3>4. Oferta de lanzamiento</h3>
        <p>Durante el período promocional vigente, la creación de la página web (valorada en $80.000 CLP) y la mensualidad del sistema (valorada en $20.000 CLP/mes) son gratuitas. Takai se reserva el derecho de modificar estas condiciones con 30 días de aviso previo.</p>
        <h3>5. Obligaciones del propietario</h3>
        <p>El propietario se compromete a: (a) proporcionar información veraz sobre sus cabañas, precios y disponibilidad; (b) confirmar o rechazar reservas en un plazo máximo de 24 horas; (c) no utilizar la plataforma para actividades ilegales o fraudulentas.</p>
        <h3>6. Propiedad intelectual</h3>
        <p>El contenido, diseño y tecnología de Takai.cl son propiedad exclusiva de Takai. Los propietarios conservan todos los derechos sobre el contenido (fotos, descripciones) que suban a la plataforma.</p>
        <h3>7. Limitación de responsabilidad</h3>
        <p>Takai actúa como intermediario tecnológico. No es responsable de disputas entre propietarios y huéspedes, cancelaciones de reservas, ni del contenido publicado por los propietarios.</p>
        <h3>8. Terminación</h3>
        <p>Cualquiera de las partes puede terminar el acuerdo con 15 días de aviso. Takai puede suspender el servicio inmediatamente ante incumplimiento grave de estos términos.</p>
        <h3>9. Ley aplicable</h3>
        <p>Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será sometida a los tribunales ordinarios de justicia de Chile.</p>
        <h3>10. Contacto</h3>
        <p>Para consultas sobre estos términos: <a href="mailto:contacto@takai.cl" style={{ color: GOLD }}>contacto@takai.cl</a></p>
      </>
    ),
    privacidad: (
      <>
        <p><strong>Última actualización:</strong> marzo 2026</p>
        <h3>1. Responsable del tratamiento</h3>
        <p>Takai.cl es el responsable del tratamiento de los datos personales recopilados a través de esta plataforma, en conformidad con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile.</p>
        <h3>2. Datos que recopilamos</h3>
        <p>Recopilamos los siguientes datos: nombre completo, número de WhatsApp, información sobre sus cabañas, y datos de uso de la plataforma. No recopilamos datos de tarjetas de crédito ni información financiera sensible.</p>
        <h3>3. Finalidad del tratamiento</h3>
        <p>Los datos se utilizan exclusivamente para: (a) prestar el servicio de gestión de reservas; (b) enviar notificaciones relacionadas con el servicio; (c) mejorar la plataforma; (d) cumplir obligaciones legales.</p>
        <h3>4. Base legal</h3>
        <p>El tratamiento se basa en el consentimiento expreso del usuario al registrarse, y en la ejecución del contrato de servicio.</p>
        <h3>5. Compartición de datos</h3>
        <p>No vendemos ni cedemos sus datos a terceros. Podemos compartirlos con proveedores tecnológicos necesarios para operar el servicio (como servidores cloud), bajo acuerdos de confidencialidad.</p>
        <h3>6. Conservación de datos</h3>
        <p>Los datos se conservan mientras dure la relación contractual y por un período adicional de 3 años para cumplir obligaciones legales.</p>
        <h3>7. Sus derechos</h3>
        <p>Usted tiene derecho a: acceder a sus datos, rectificarlos, suprimirlos, oponerse a su tratamiento y solicitar su portabilidad. Para ejercer estos derechos, contáctenos en <a href="mailto:contacto@takai.cl" style={{ color: GOLD }}>contacto@takai.cl</a>.</p>
        <h3>8. Seguridad</h3>
        <p>Implementamos medidas técnicas y organizativas para proteger sus datos, incluyendo cifrado SSL, acceso restringido y copias de seguridad periódicas.</p>
        <h3>9. Cookies</h3>
        <p>Utilizamos cookies técnicas necesarias para el funcionamiento del servicio. Consulte nuestra Política de Cookies para más información.</p>
        <h3>10. Contacto</h3>
        <p>Para consultas sobre privacidad: <a href="mailto:contacto@takai.cl" style={{ color: GOLD }}>contacto@takai.cl</a></p>
      </>
    ),
    cookies: (
      <>
        <p><strong>Última actualización:</strong> marzo 2026</p>
        <h3>1. ¿Qué son las cookies?</h3>
        <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten al sitio recordar sus preferencias y mejorar su experiencia.</p>
        <h3>2. Cookies que utilizamos</h3>
        <p><strong>Cookies técnicas (esenciales):</strong> Necesarias para el funcionamiento básico del sitio. Sin ellas, el sitio no puede operar correctamente. No requieren su consentimiento.</p>
        <p><strong>Cookies de sesión:</strong> Temporales, se eliminan al cerrar el navegador. Usadas para mantener su sesión activa en el panel de propietario.</p>
        <p><strong>Cookies de análisis:</strong> Usamos Vercel Analytics para entender cómo se usa el sitio, de forma anónima y agregada, sin identificar usuarios individuales.</p>
        <h3>3. Cookies de terceros</h3>
        <p>No instalamos cookies publicitarias ni de seguimiento de terceros. No usamos Google Analytics, Meta Pixel ni herramientas de retargeting.</p>
        <h3>4. Control de cookies</h3>
        <p>Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envíe una cookie. Sin embargo, algunas partes del sitio pueden no funcionar correctamente sin cookies técnicas.</p>
        <h3>5. Cómo gestionar cookies</h3>
        <p>En Chrome: Configuración → Privacidad y seguridad → Cookies. En Firefox: Opciones → Privacidad y seguridad. En Safari: Preferencias → Privacidad.</p>
        <h3>6. Vigencia</h3>
        <p>Las cookies de sesión se eliminan al cerrar el navegador. Las cookies de preferencias tienen una vigencia máxima de 12 meses.</p>
        <h3>7. Contacto</h3>
        <p>Para consultas sobre cookies: <a href="mailto:contacto@takai.cl" style={{ color: GOLD }}>contacto@takai.cl</a></p>
      </>
    ),
  }
  return (
    <div
      onClick={function(e) { if (e.target === e.currentTarget) onClose() }}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
    >
      <div style={{ background: "#0d0d0d", border: "1px solid #2a2a2a", borderRadius: "20px", maxWidth: "620px", width: "100%", maxHeight: "80vh", display: "flex", flexDirection: "column" as const, boxShadow: "0 50px 100px rgba(0,0,0,0.8), 0 0 40px #c9a84c10" }}>
        <div style={{ padding: "24px 28px 16px", borderBottom: "1px solid #1a1a1a", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
          <div style={{ fontFamily: SERIF, fontSize: "22px", color: GOLD_LIGHT }}>{titles[type]}</div>
          <button onClick={onClose} style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "50%", width: "32px", height: "32px", color: MUTED, fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{"×"}</button>
        </div>
        <div style={{ padding: "24px 28px 28px", overflowY: "auto" as const, fontSize: "13px", color: "#aaa", lineHeight: 1.8, fontFamily: SANS }}>
          <style>{`
            .legal-content h3 { color: ${GOLD}; font-size: 13px; letter-spacing: 0.5px; margin: 20px 0 8px; font-family: ${SANS}; font-weight: 600; }
            .legal-content p { margin: 0 0 10px; }
            .legal-content strong { color: #ccc; }
          `}</style>
          <div className="legal-content">{contents[type]}</div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [modal, setModal] = useState(false)
  const [promoShown, setPromoShown] = useState(false)
  const [promoOpen, setPromoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [legalModal, setLegalModal] = useState<"terminos" | "privacidad" | "cookies" | null>(null)

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
      <style>{".tk-nav-links{display:flex;gap:28px;align-items:center}.tk-stats{grid-template-columns:1fr 1fr 1fr!important}.tk-how{grid-template-columns:repeat(3,1fr)!important}.tk-feat{grid-template-columns:1fr 1fr!important}.tk-social-icon{color:#C9A84C;transition:color 0.2s;display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;border:1px solid #2a2a2a;background:#1a1a1a}.tk-social-icon:hover{color:#ffffff;border-color:#C9A84C44}@media(max-width:768px){.tk-nav-links{display:none!important}.tk-stats{grid-template-columns:1fr!important}.tk-how{grid-template-columns:1fr!important}.tk-feat{grid-template-columns:1fr!important}.tk-stat-border{border-right:none!important;border-bottom:1px solid #1f1f1f}}"}</style>

      <LegalModal open={legalModal === "terminos"} onClose={function() { setLegalModal(null) }} type="terminos" />
      <LegalModal open={legalModal === "privacidad"} onClose={function() { setLegalModal(null) }} type="privacidad" />
      <LegalModal open={legalModal === "cookies"} onClose={function() { setLegalModal(null) }} type="cookies" />
      <ContactModal open={promoOpen} onClose={function() { setPromoOpen(false) }} isPromo={true} />
      <ContactModal open={modal} onClose={function() { setModal(false) }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "background 0.3s", background: scrolled ? "rgba(7,7,7,0.95)" : "transparent", borderBottom: scrolled ? "1px solid " + BORDER : "1px solid transparent", backdropFilter: scrolled ? "blur(12px)" : "none" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <TakaiLogo height={52} />
            <span style={{ fontFamily: SERIF, fontSize: "26px", letterSpacing: "5px", color: TEXT, marginLeft: "4px" }}>{"TAKAI"}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div className="tk-nav-links">
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
            <a href="/panel" style={{ fontSize: "11px", color: "#444", textDecoration: "none", letterSpacing: "0.5px", whiteSpace: "nowrap" as const }}>
              {"Acceso panel"}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={IMG_HERO} alt="Cabañas en Chile" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.38 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,7,7,0.55) 0%, rgba(7,7,7,0.15) 40%, rgba(7,7,7,0.85) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" as const, padding: "120px 24px 80px", maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "100px", padding: "6px 18px", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD_LIGHT, marginBottom: "32px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: GOLD, display: "inline-block" }} />
            {"Sistema de reservas para cabañas en Chile"}
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(38px, 6.5vw, 76px)", fontWeight: 300, lineHeight: 1.08, color: TEXT, margin: "0 0 24px", letterSpacing: "-0.5px" }}>
            {"Deja de perder reservas."}
            <br />
            {"Empieza a ganar"}
            <br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"tranquilidad."}</em>
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#aaa", lineHeight: 1.7, maxWidth: "580px", margin: "0 auto 40px", fontWeight: 300 }}>
            {"¿Cuántas reservas perdiste porque no respondiste a tiempo o no tenías la disponibilidad a mano?"}
            <br />
            {"Con Takai, tus huéspedes reservan solos."}
            <br />
            <span style={{ color: GOLD_LIGHT }}>{"Tú solo confirmas y cobras."}</span>
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <button onClick={function() { setModal(true) }} style={{ background: GOLD, color: "#0a0700", border: "none", borderRadius: "10px", padding: "16px 36px", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, boxShadow: "0 8px 32px rgba(201,168,76,0.3)", letterSpacing: "0.3px" }}>
              {"¡QUIERO MI DEMO AHORA!"}
            </button>
            <button onClick={function() { scrollTo("como-funciona") }} style={{ background: "transparent", color: TEXT, border: "1px solid " + BORDER, borderRadius: "10px", padding: "16px 32px", fontSize: "15px", cursor: "pointer", fontFamily: SANS, letterSpacing: "0.3px" }}>
              {"Cómo funciona ↓"}
            </button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ position: "relative", background: SURFACE, borderTop: "1px solid " + BORDER, borderBottom: "1px solid " + BORDER, overflow: "hidden" }}>
        <SectionBg src={IMG_2} opacity={0.06} />
        <div className="tk-stats" style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {[
            { n: "15%", label: "Comisión por reservas Takai", sub: "Tus reservas directas son 100% tuyas" },
            { n: "72h", label: "Tiempo de activación", sub: "Tu página lista en 72 horas" },
            { n: "$0", label: "Instalación y mensualidad", sub: "Oferta por tiempo limitado · Valor normal desde $20.000/mes + $80.000 setup" },
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
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Cómo funciona"}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: 0, letterSpacing: "-0.3px" }}>
              {"De la conversación a la reserva"}
              <br />
              <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"en 3 pasos."}</em>
            </h2>
          </div>
          <div className="tk-how" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { n: "01", title: "Conversamos", desc: "Nos cuentas cómo funcionan tus cabañas, tus precios y tus reglas. Completamos el formulario de incorporación juntos.", img: IMG_STEP1 },
              { n: "02", title: "Diseñamos tu página", desc: "Configuramos tu panel de propietario y tu página pública personalizada. Todo listo en 72 horas.", img: IMG_STEP2 },
              { n: "03", title: "Empiezas a recibir reservas", desc: "Compartes el enlace de tu página Takai donde quieras. Los turistas reservan directo. Tú confirmas, tú cobras.", img: IMG_4 }
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
            <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Características"}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: 0 }}>
              {"Todo lo que necesitas,"}
              <br />
              <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"sin lo que no necesitas."}</em>
            </h2>
          </div>
          <div className="tk-feat" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[
              { icon: "📅", title: "Calendario inteligente", desc: "Cada reserva bloquea las fechas automáticamente. Sin dobles reservas. Sin llamadas de última hora. Tu disponibilidad siempre al día." },
              { icon: "🌎", title: "Tu página pública", desc: "Una página propia con tu nombre, tus fotos y tu identidad. Tú compartes el enlace donde quieras: Instagram, WhatsApp, Google. Los turistas reservan directo." },
              { icon: "💸", title: "Tus reservas directas son 100% tuyas", desc: "Si un huésped llega por tu propio canal, no le debes nada a nadie. Takai solo cobra el 15% cuando es Takai quien te trae la reserva. Tus clientes habituales son tuyos." },
              { icon: "📱", title: "Notificaciones WhatsApp", desc: "Recibes un aviso instantáneo por WhatsApp cada vez que alguien reserva. Sin apps, sin aprender nada nuevo." }
            ].map(function(feat, i) {
              const isHighlight = i === 2
              return (
                <div key={i} style={{ position: "relative", background: isHighlight ? "rgba(201,168,76,0.07)" : "rgba(15,15,15,0.92)", border: isHighlight ? "1px solid rgba(201,168,76,0.4)" : "1px solid " + BORDER, borderRadius: "16px", padding: "32px 36px", boxShadow: isHighlight ? "0 0 40px rgba(201,168,76,0.1), inset 0 1px 0 rgba(201,168,76,0.15)" : "none" }}>
                  <GoldCorners size={14} />
                  {isHighlight && (
                    <div style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "20px", padding: "3px 10px", fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase" as const, color: GOLD }}>
                      {"Clave"}
                    </div>
                  )}
                  <div style={{ fontSize: "32px", marginBottom: "20px" }}>{feat.icon}</div>
                  <div style={{ fontFamily: SERIF, fontSize: "22px", fontWeight: 400, color: isHighlight ? GOLD_LIGHT : TEXT, marginBottom: "12px" }}>{feat.title}</div>
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
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: TEXT, margin: "0 0 8px" }}>{"Transparente y justo"}</h2>
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
            <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "10px", padding: "20px 24px", marginBottom: "28px", textAlign: "left" as const }}>
              <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "12px" }}>{"Oferta por tiempo limitado"}</div>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" as const, marginBottom: "12px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#666", marginBottom: "4px" }}>{"Creación de página web"}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "14px", color: "#555", textDecoration: "line-through" }}>{"$80.000"}</span>
                    <span style={{ fontFamily: SERIF, fontSize: "20px", color: GOLD_LIGHT, fontWeight: 600 }}>{"Gratis"}</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#666", marginBottom: "4px" }}>{"Mensualidad del sistema"}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "14px", color: "#555", textDecoration: "line-through" }}>{"$20.000/mes"}</span>
                    <span style={{ fontFamily: SERIF, fontSize: "20px", color: GOLD_LIGHT, fontWeight: 600 }}>{"Gratis"}</span>
                  </div>
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.6, borderTop: "1px solid #2a2a2a", paddingTop: "12px" }}>
                {"Solo pagas el 15% cuando Takai te trae una reserva. Tus reservas directas son siempre 100% tuyas."}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px", textAlign: "left" as const, marginBottom: "40px" }}>
              {["Página personalizada con tu marca y fotos", "Calendario en tiempo real con bloqueo automático", "Formulario de reservas para turistas", "Panel del propietario accesible desde el celular", "Notificaciones por WhatsApp al instante", "0% comisión en reservas que tú mismo gestionas", "Configuración inicial incluida — sin costo adicional", "Soporte por WhatsApp con el equipo Takai"].map(function(item, i) {
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#ccc", lineHeight: 1.5 }}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                )
              })}
            </div>
            <button onClick={function() { setModal(true) }} style={{ width: "100%", background: GOLD, color: "#0a0700", border: "none", borderRadius: "10px", padding: "18px", fontSize: "16px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, letterSpacing: "0.3px", boxShadow: "0 8px 32px rgba(201,168,76,0.25)" }}>
              {"¡QUIERO MI DEMO AHORA!"}
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
            {"Tú tienes las cabañas."}
            <br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"Nosotros ponemos el sistema."}</em>
          </h2>
          <p style={{ fontSize: "16px", color: MUTED, lineHeight: 1.7, marginBottom: "40px" }}>
            {"Te entregamos la tecnología, el panel y la página lista."}
            <br />
            {"Tú la publicas donde quieras y empiezas a recibir reservas."}
            <br />
            <span style={{ color: "#5a9a5a", fontSize: "14px" }}>{"Tus reservas directas son siempre tuyas. Solo pagas si Takai te trae reservas."}</span>
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" as const }}>
            <button onClick={function() { setModal(true) }} style={{ background: GOLD, color: "#0a0700", border: "none", borderRadius: "10px", padding: "18px 40px", fontSize: "16px", fontWeight: 600, cursor: "pointer", fontFamily: SANS, boxShadow: "0 8px 32px rgba(201,168,76,0.3)", letterSpacing: "0.3px" }}>
              {"¡QUIERO MI DEMO AHORA!"}
            </button>
            <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: TEXT, border: "1px solid " + BORDER, borderRadius: "10px", padding: "18px 32px", fontSize: "15px", textDecoration: "none", fontFamily: SANS }}>
              {"Escríbenos por WhatsApp"}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: SURFACE, borderTop: "1px solid " + BORDER, padding: "32px 24px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* MISIÓN Y VISIÓN */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: BORDER, borderRadius: "16px", overflow: "hidden", marginBottom: "48px", border: "1px solid " + BORDER }}>
            <div style={{ background: "#0d0d0d", padding: "28px 32px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "12px" }}>{"Nuestra Misión"}</div>
              <div style={{ fontFamily: SERIF, fontSize: "16px", color: TEXT, lineHeight: 1.6, marginBottom: "10px" }}>{"Devolver el control del negocio al propietario."}</div>
              <div style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>{"Digitalizamos la gestión de reservas para cabañas independientes en Chile. Sin intermediarios, sin comisiones abusivas — solo herramientas profesionales al alcance de cada propietario."}</div>
            </div>
            <div style={{ background: "#0a0a0a", padding: "28px 32px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "12px" }}>{"Nuestra Visión"}</div>
              <div style={{ fontFamily: SERIF, fontSize: "16px", color: TEXT, lineHeight: 1.6, marginBottom: "10px" }}>{"La plataforma de referencia para el turismo de cabañas en Chile."}</div>
              <div style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>{"Cada propietario gestiona su negocio con tecnología de primera. Cada turista reserva con confianza directamente con quien conoce su cabaña. Sin grandes plataformas de por medio."}</div>
            </div>
          </div>

          {/* COLUMNAS PRINCIPALES */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px", flexWrap: "wrap" as const, gap: "32px" }}>

            {/* BRAND */}
            <div style={{ minWidth: "180px", display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
              <TakaiLogo height={155} />
              <span style={{ display: "block", fontFamily: SERIF, fontSize: "20px", letterSpacing: "4px", color: TEXT, marginTop: "10px", marginBottom: "12px", textAlign: "center" as const }}>{"TAKAI"}</span>
              <div style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, maxWidth: "200px", textAlign: "center" as const }}>
                {"Sistema profesional de reservas para cabañas en Chile."}
              </div>
            </div>

            {/* PRODUCTO */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Producto"}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "11px" }}>
                {[["como-funciona","Cómo funciona"],["caracteristicas","Características"],["precios","Precios"]].map(function(item) {
                  return (
                    <button key={item[0]} onClick={function() { scrollTo(item[0]) }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>
                      {item[1]}
                    </button>
                  )
                })}
                <button onClick={function() { setModal(true) }} style={{ background: "none", border: "none", color: GOLD, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>
                  {"Empezar gratis →"}
                </button>
              </div>
            </div>

            {/* EMPRESA */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Empresa"}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "11px" }}>
                <a href="#mision" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"Misión y visión"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"Contacto"}</a>
                <a href="/panel" style={{ color: "#555", fontSize: "13px", textDecoration: "none" }}>{"Acceso propietarios"}</a>
              </div>
            </div>

            {/* LEGAL */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Legal"}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "11px" }}>
                <button onClick={function() { setLegalModal("terminos") }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>{"Términos de servicio"}</button>
                <button onClick={function() { setLegalModal("privacidad") }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>{"Política de privacidad"}</button>
                <button onClick={function() { setLegalModal("cookies") }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>{"Política de cookies"}</button>
              </div>
            </div>

            {/* CONTACTO */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Contacto"}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "11px" }}>
                <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"WhatsApp · +56 9 5523 0900"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"contacto@takai.cl"}</a>
                <span style={{ color: "#444", fontSize: "12px" }}>{"Atención 24/7"}</span>
              </div>
            </div>
          </div>

          <GoldLine />

          {/* REDES SOCIALES */}
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", padding: "28px 0 20px" }}>
            <a href="https://www.instagram.com/takai.ia/" target="_blank" rel="noopener noreferrer" className="tk-social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584357745669" target="_blank" rel="noopener noreferrer" className="tk-social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="mailto:contacto@takai.cl" className="tk-social-icon" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
              </svg>
            </a>
            <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" className="tk-social-icon" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* BARRA INFERIOR */}
          <div style={{ padding: "24px 0 28px", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "10px", textAlign: "center" as const }}>
            <div style={{ fontSize: "12px", color: "#555" }}>
              {"© 2025 "}
              <a href="https://takai.cl" style={{ color: GOLD, textDecoration: "none", fontWeight: 600 }}>{"Takai.cl"}</a>
              {" · Todos los derechos reservados"}
            </div>
            <div style={{ fontSize: "11px", color: "#383838", display: "flex", gap: "16px", flexWrap: "wrap" as const, justifyContent: "center" }}>
              <button onClick={function() { setLegalModal("terminos") }} style={{ background: "none", border: "none", color: "#444", fontSize: "11px", cursor: "pointer", fontFamily: SANS, padding: 0 }}>{"Términos de servicio"}</button>
              <span style={{ color: "#2a2a2a" }}>{"·"}</span>
              <button onClick={function() { setLegalModal("privacidad") }} style={{ background: "none", border: "none", color: "#444", fontSize: "11px", cursor: "pointer", fontFamily: SANS, padding: 0 }}>{"Política de privacidad"}</button>
              <span style={{ color: "#2a2a2a" }}>{"·"}</span>
              <button onClick={function() { setLegalModal("cookies") }} style={{ background: "none", border: "none", color: "#444", fontSize: "11px", cursor: "pointer", fontFamily: SANS, padding: 0 }}>{"Política de cookies"}</button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
              <HawkIcon size={20} />
              <span style={{ fontSize: "13px", color: "#666", letterSpacing: "0.5px" }}>
                {"Diseñado y desarrollado por "}
                <strong style={{ color: GOLD_LIGHT }}>{"Takai"}</strong>
                {" · Chile 🇨🇱"}
              </span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
