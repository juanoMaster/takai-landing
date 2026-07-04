import Link from "next/link"
import { articles } from "@/lib/articles"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import WhatsAppFab from "../components/WhatsAppFab"

export const metadata = {
  title: "Blog — Takai | Guías para dueños de cabañas y glampings",
  description:
    "Guías prácticas para propietarios de cabañas y glampings: gestión de reservas, cómo evitar dobles reservas, digitalización y crecimiento del negocio.",
  alternates: { canonical: "https://www.takai.cl/blog" },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <WhatsAppFab />

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <header className="mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cobre">Blog</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
            Recursos para dueños <em className="italic text-cobre">de cabañas y glampings</em>.
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ceniza">
            Guías prácticas sobre gestión de reservas, digitalización y crecimiento para negocios de alojamiento
            independiente.
          </p>
        </header>

        <div className="flex flex-col gap-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={"/blog/" + article.slug}
              className="group rounded-xl border border-tinta/10 bg-crema-deep p-7 transition-colors duration-300 ease-lujo hover:border-cobre/50 sm:p-9"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-humo">
                {formatDate(article.date)} · {article.readTime} lectura
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-tinta sm:text-[26px]">
                {article.title}
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ceniza">{article.description}</p>
              <span className="link-draw mt-5 inline-block text-[13.5px] font-semibold text-cobre">
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
