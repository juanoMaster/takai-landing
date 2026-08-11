import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { articles, getArticleBySlug } from "@/lib/articles"
import { LOW_SEASON_MESSAGE } from "@/lib/commercial"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import WhatsAppFab from "../../components/WhatsAppFab"

const SITE_URL = "https://www.takai.cl"
const BLOG_URL = SITE_URL + "/blog"
const SOCIAL_IMAGE = SITE_URL + "/og-takai.jpg"
const LOGO_IMAGE = SITE_URL + "/takai-logo.png"
const REGISTRATION_URL = "https://reservas.takai.cl/registro"
const WHATSAPP_URL =
  "https://wa.me/56955230900?text=Hola%2C%20quiero%20incorporar%20mis%20caba%C3%B1as%20a%20Takai"

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    return {
      title: "Artículo no encontrado — Takai",
      robots: { index: false, follow: false },
    }
  }

  const url = BLOG_URL + "/" + article.slug
  const title = article.title + " — Takai"

  return {
    title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "es_CL",
      url,
      siteName: "Takai",
      title,
      description: article.description,
      publishedTime: article.date,
      modifiedTime: article.updatedDate,
      authors: ["Takai"],
      images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: "Takai — reservas directas para cabañas" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: [SOCIAL_IMAGE],
    },
  }
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

function serializeJsonLd(value: Record<string, unknown>) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const articleUrl = BLOG_URL + "/" + article.slug
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": articleUrl + "#article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updatedDate,
    inLanguage: "es-CL",
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": BLOG_URL + "#blog",
      name: "Blog de Takai",
      url: BLOG_URL,
    },
    author: {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "Takai",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "Takai",
      logo: {
        "@type": "ImageObject",
        url: LOGO_IMAGE,
        width: 166,
        height: 128,
      },
    },
    image: {
      "@type": "ImageObject",
      url: SOCIAL_IMAGE,
      width: 1200,
      height: 630,
    },
  }

  return (
    <div className="tk-page">
      <Nav />
      <WhatsAppFab />

      <main id="contenido" tabIndex={-1} className="tk-article-main">
        <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />

        <Link href="/blog" className="tk-article-back tk-link-draw">
          ← Volver al blog
        </Link>

        <p className="tk-article-meta tk-muted">
          <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readTime} lectura
        </p>
        <h1 className="tk-article-title">
          {article.title}
        </h1>
        <p className="tk-article-description tk-muted">
          {article.description}
        </p>

        <div className="tk-article-sections">
          {article.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="tk-article-section-title">
                  {section.heading}
                </h2>
              )}
              <p className="tk-article-body tk-muted">{section.body}</p>
              {section.prices && (
                <div className="tk-article-price-wrap">
                  <table className="tk-article-price-table">
                    <caption className="tk-sr-only">{section.heading}</caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          Cabañas
                        </th>
                        <th scope="col">
                          Precio
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.prices.map((price) => (
                        <tr key={price.cabins}>
                          <th scope="row">
                            {price.cabins}
                          </th>
                          <td>
                            {price.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.highlight && (
                <p className="tk-article-highlight">
                  {section.highlight}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <aside className="tk-article-cta">
          <p className="tk-article-cta-label">¿Listo para empezar?</p>
          <h3 className="tk-article-cta-title">
            Tu página de reservas puede quedar lista <em>en horas.</em>
          </h3>
          <p className="tk-article-cta-copy tk-muted-on-dark">
            Recibe reservas con cero comisión. La activación se paga una vez y la anualidad se cobra solo entre
            diciembre y marzo. {LOW_SEASON_MESSAGE}
          </p>
          <div className="tk-article-cta-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tk-editorial-button-copper"
            >
              Empezar por WhatsApp
            </a>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tk-article-register tk-link-draw"
            >
              Regístrate en línea →
            </a>
          </div>
        </aside>
        </article>
      </main>

      <Footer />
    </div>
  )
}
