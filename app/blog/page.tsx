import type { Metadata } from "next"
import Link from "next/link"
import { articles } from "@/lib/articles"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import WhatsAppFab from "../components/WhatsAppFab"

const BLOG_URL = "https://www.takai.cl/blog"
const BLOG_TITLE = "Blog de Takai — Guías para dueños de cabañas"
const BLOG_DESCRIPTION =
  "Guías directas para ordenar las reservas de tus cabañas, evitar fechas duplicadas, cobrar sin comisión y administrar tu calendario."
const SOCIAL_IMAGE = "https://www.takai.cl/og-takai.jpg"

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: BLOG_URL,
    siteName: "Takai",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: "Takai, sistema de reservas para cabañas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00.000Z")
  return date.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}

export default function BlogPage() {
  return (
    <div className="tk-page">
      <Nav />
      <WhatsAppFab />

      <main id="contenido" tabIndex={-1} className="tk-editorial-main">
        <header className="tk-editorial-header">
          <p className="tk-editorial-eyebrow">Blog</p>
          <h1 className="tk-editorial-title">
            Recursos para dueños <em>de cabañas</em>.
          </h1>
          <p className="tk-editorial-intro">
            Guías directas para ordenar tus reservas, proteger el calendario y cobrar sin perder una parte de cada
            estadía.
          </p>
        </header>

        <div className="tk-blog-list">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={"/blog/" + article.slug}
              className="tk-blog-card"
            >
              <p className="tk-blog-card-meta tk-muted">
                <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readTime} lectura
              </p>
              <h2 className="tk-blog-card-title">
                {article.title}
              </h2>
              <p className="tk-blog-card-description tk-muted">{article.description}</p>
              <span className="tk-blog-card-link tk-link-draw">
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
