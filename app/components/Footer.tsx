import Image from "next/image"
import Link from "next/link"

const WA = "https://wa.me/56955230900?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Takai"

export default function Footer() {
  return (
    <footer className="tk-footer">
      <div className="tk-footer-wrap">
        <div className="tk-footer-grid">
          <div className="tk-footer-about">
            <div className="tk-footer-brand">
              <Image
                src="/takai-hawk-nobg.webp"
                alt=""
                width={687}
                height={400}
                sizes="50px"
                className="tk-footer-mark"
              />
              <span className="tk-footer-name">TAKAI</span>
            </div>
            <p className="tk-footer-description">
              Sistema de reservas para dueños de cabañas en Chile. Recibe reservas en tu propia página y administra
              fechas, precios y disponibilidad desde un solo lugar.
            </p>
            <p className="tk-footer-origin">Hecho en el sur de Chile</p>
          </div>

          <FooterNav title="Navega" label="Navegación del sitio">
            <li>
              <Link href="/#como-funciona" className="tk-footer-link">
                Cómo funciona
              </Link>
            </li>
            <li>
              <Link href="/#incluye" className="tk-footer-link">
                Lo que incluye
              </Link>
            </li>
            <li>
              <Link href="/#casos" className="tk-footer-link">
                Casos reales
              </Link>
            </li>
            <li>
              <Link href="/#precio" className="tk-footer-link">
                Precios
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="tk-footer-link">
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link href="/blog" className="tk-footer-link">
                Blog
              </Link>
            </li>
          </FooterNav>

          <FooterNav title="Contacto" label="Contacto">
            <li>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="tk-footer-link">
                WhatsApp +56 9 5523 0900
              </a>
            </li>
            <li>
              <a href="mailto:contacto@takai.cl" className="tk-footer-link">
                contacto@takai.cl
              </a>
            </li>
            <li>
              <a
                href="https://reservas.takai.cl/registro"
                target="_blank"
                rel="noopener noreferrer"
                className="tk-footer-link"
              >
                Regístrate en línea
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/takai.ia/"
                target="_blank"
                rel="noopener noreferrer"
                className="tk-footer-link"
              >
                Instagram
              </a>
            </li>
          </FooterNav>

          <FooterNav title="Legal" label="Información legal">
            <li>
              <Link href="/terminos" className="tk-footer-link">
                Términos de servicio
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="tk-footer-link">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/privacidad#cookies" className="tk-footer-link">
                Cookies
              </Link>
            </li>
          </FooterNav>
        </div>

        <div className="tk-footer-bottom">
          <p>© 2025 Takai · Todos los derechos reservados</p>
          <p className="tk-footer-audience">Para dueños de cabañas en Chile</p>
        </div>
      </div>
    </footer>
  )
}

function FooterNav({ children, label, title }: { children: React.ReactNode; label: string; title: string }) {
  return (
    <nav aria-label={label} className="tk-footer-nav">
      <p className="tk-footer-heading">{title}</p>
      <ul className="tk-footer-list">{children}</ul>
    </nav>
  )
}
