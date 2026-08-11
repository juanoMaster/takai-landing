import type { Metadata } from "next"
import Link from "next/link"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

const WA = "https://wa.me/56955230900?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Takai"

export const metadata: Metadata = {
  title: "Página no encontrada — Takai",
  description: "La página que buscas no está disponible.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="tk-not-found-page">
      <Nav />
      <main id="contenido" tabIndex={-1} className="tk-not-found-main">
        <div className="tk-not-found-grid">
          <p aria-hidden="true" className="tk-not-found-code">
            404
          </p>
          <div className="tk-not-found-copy">
            <p className="tk-not-found-kicker">Página no encontrada</p>
            <h1 className="tk-not-found-title">Esta página no está disponible.</h1>
            <p className="tk-not-found-description">
              Puede que el enlace haya cambiado. Vuelve al inicio para conocer el sistema de reservas de Takai para
              dueños de cabañas en Chile.
            </p>
            <div className="tk-not-found-actions">
              <Link href="/" className="tk-not-found-primary">
                Volver al inicio
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="tk-not-found-secondary">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
