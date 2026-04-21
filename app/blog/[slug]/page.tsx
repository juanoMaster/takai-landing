import { notFound } from "next/navigation"
import Link from "next/link"
import { articles, getArticleBySlug } from "@/lib/articles"

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.title + " — Takai.cl",
    description: article.description,
  }
}

const GOLD = "#C9A84C"
const GOLD_LIGHT = "#d4b96a"
const BG = "#070707"
const BORDER = "#1f1f1f"
const TEXT = "#f0ede8"
const MUTED = "#888888"
const SERIF = "Cormorant Garamond, Georgia, serif"
const SANS = "DM Sans, sans-serif"

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <div style={{ background: BG, color: TEXT, fontFamily: SANS, minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <nav style={{ borderBottom: "1px solid " + BORDER, padding: "0 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: SERIF, fontSize: "22px", letterSpacing: "4px", color: TEXT, textDecoration: "none" }}>{"TAKAI"}</Link>
          <Link href="/blog" style={{ fontSize: "13px", color: MUTED, textDecoration: "none" }}>{"← Volver al blog"}</Link>
        </div>
      </nav>

      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px 120px" }}>
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: MUTED }}>{formatDate(article.date)}</span>
          <span style={{ fontSize: "12px", color: "#444" }}>{"·"}</span>
          <span style={{ fontSize: "12px", color: MUTED }}>{article.readTime + " lectura"}</span>
        </div>

        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, color: TEXT, margin: "0 0 24px", lineHeight: 1.1 }}>{article.title}</h1>
        <p style={{ fontSize: "17px", color: MUTED, lineHeight: 1.75, margin: "0 0 56px", borderBottom: "1px solid " + BORDER, paddingBottom: "40px" }}>{article.description}</p>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: "32px" }}>
          {article.sections.map(function(section, i) {
            return (
              <div key={i}>
                {section.heading && (
                  <h2 style={{ fontFamily: SERIF, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 400, color: GOLD_LIGHT, margin: "0 0 16px", lineHeight: 1.3 }}>{section.heading}</h2>
                )}
                <p style={{ fontSize: "16px", color: "#cccccc", lineHeight: 1.9, margin: 0 }}>{section.body}</p>
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: "80px", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "16px", padding: "40px" }}>
          <div style={{ fontFamily: SERIF, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"¿Listo para empezar?"}</div>
          <h3 style={{ fontFamily: SERIF, fontSize: "28px", fontWeight: 300, color: TEXT, margin: "0 0 12px", lineHeight: 1.2 }}>{"Digitaliza tus cabañas"}<br /><em style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>{"sin mensualidad."}</em></h3>
          <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7, margin: "0 0 28px" }}>{"Tu página lista en 72 horas. Sin costo de instalación. Solo pagas cuando Takai te trae una reserva."}</p>
          <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: GOLD, color: "#0a0700", borderRadius: "10px", padding: "14px 32px", fontSize: "14px", fontWeight: 600, textDecoration: "none", fontFamily: SANS }}>{"Escríbenos por WhatsApp"}</a>
        </div>
      </article>

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
