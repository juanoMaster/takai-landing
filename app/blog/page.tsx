import Link from "next/link"
import { articles } from "@/lib/articles"

export const metadata = {
  title: "Blog — Takai.cl | Sistema de Reservas para Cabañas en Chile",
  description: "Guías y consejos para propietarios de cabañas en Chile. Aprende a gestionar reservas, evitar dobles reservas, y hacer crecer tu negocio.",
}

const GOLD = "#C9A84C"
const GOLD_LIGHT = "#d4b96a"
const BG = "#070707"
const SURFACE = "#0f0f0f"
const BORDER = "#1f1f1f"
const TEXT = "#f0ede8"
const MUTED = "#888888"
const SERIF = "Cormorant Garamond, Georgia, serif"
const SANS = "DM Sans, sans-serif"

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })
}

export default function BlogPage() {
  return (
    <div style={{ background: BG, color: TEXT, fontFamily: SANS, minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <nav style={{ borderBottom: "1px solid " + BORDER, padding: "0 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: SERIF, fontSize: "22px", letterSpacing: "4px", color: TEXT, textDecoration: "none" }}>{"TAKAI"}</Link>
          <Link href="/" style={{ fontSize: "13px", color: MUTED, textDecoration: "none" }}>{"← Volver al inicio"}</Link>
        </div>
      </nav>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Blog"}</div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, color: TEXT, margin: "0 0 16px", lineHeight: 1.1 }}>
            {"Recursos para propietarios"}<br />
            <em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"de cabañas en Chile."}</em>
          </h1>
          <p style={{ fontSize: "16px", color: MUTED, lineHeight: 1.7, margin: 0 }}>{"Guías prácticas sobre gestión de reservas, digitalización, y crecimiento para negocios de cabañas."}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: "24px" }}>
          {articles.map(function(article) {
            return (
              <Link key={article.slug} href={"/blog/" + article.slug} style={{ textDecoration: "none" }}>
                <div style={{ background: SURFACE, border: "1px solid " + BORDER, borderRadius: "16px", padding: "32px 36px", transition: "border-color 0.2s", cursor: "pointer" }}>
                  <div style={{ display: "flex", gap: "16px", marginBottom: "12px", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", color: MUTED }}>{formatDate(article.date)}</span>
                    <span style={{ fontSize: "12px", color: "#444" }}>{"·"}</span>
                    <span style={{ fontSize: "12px", color: MUTED }}>{article.readTime + " lectura"}</span>
                  </div>
                  <h2 style={{ fontFamily: SERIF, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 300, color: TEXT, margin: "0 0 12px", lineHeight: 1.3 }}>{article.title}</h2>
                  <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, margin: "0 0 20px" }}>{article.description}</p>
                  <span style={{ fontSize: "13px", color: GOLD, letterSpacing: "0.3px" }}>{"Leer artículo →"}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <footer style={{ borderTop: "1px solid " + BORDER, padding: "32px 24px", textAlign: "center" as const }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "#444", margin: 0 }}>
            {"© 2026 "}
            <a href="https://takai.cl" style={{ color: GOLD, textDecoration: "none" }}>{"Takai.cl"}</a>
            {" · Sistema de reservas para cabañas en Chile"}
          </p>
        </div>
      </footer>
    </div>
  )
}
