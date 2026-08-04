import { notFound } from "next/navigation"
import Link from "next/link"
import { articles, getArticleBySlug } from "@/lib/articles"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import WhatsAppFab from "../../components/WhatsAppFab"

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: article.title + " — Takai",
    description: article.description,
    alternates: { canonical: "https://www.takai.cl/blog/" + article.slug },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <div className="min-h-screen">
      <Nav />
      <WhatsAppFab />

      <article className="mx-auto max-w-2xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <Link href="/blog" className="link-draw font-mono text-[11.5px] uppercase tracking-[0.18em] text-cobre">
          ← Volver al blog
        </Link>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-humo">
          {formatDate(article.date)} · {article.readTime} lectura
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-6 border-b border-tinta/15 pb-9 text-[17px] leading-relaxed text-ceniza">
          {article.description}
        </p>

        <div className="mt-10 flex flex-col gap-9">
          {article.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="mb-4 font-display text-2xl font-semibold leading-snug text-tinta">
                  {section.heading}
                </h2>
              )}
              <p className="text-[16px] leading-[1.9] text-ceniza">{section.body}</p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <aside className="mt-20 rounded-xl bg-tinta p-9 text-crema">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre-light">¿Listo para empezar?</p>
          <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">
            Digitaliza tus cabañas <em className="italic text-cobre-light">en 72 horas.</em>
          </h3>
          <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-crema/70">
            Tu página lista en 72 horas. Sin mensualidad: solo el 10% de las reservas que Takai te genera. Tus
            reservas directas son siempre 100% tuyas.
          </p>
          <a
            href="https://wa.me/56955230900?text=Hola%2C%20quiero%20incorporar%20mis%20caba%C3%B1as%20a%20Takai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-md bg-cobre px-7 py-3.5 text-[14.5px] font-semibold text-crema transition-colors duration-300 hover:bg-cobre-dark"
          >
            Empezar por WhatsApp
          </a>
        </aside>
      </article>

      <Footer />
    </div>
  )
}
