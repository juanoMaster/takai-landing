import Link from "next/link"
import Image from "next/image"

const WA = "https://wa.me/56955230900?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Takai"

export default function Footer() {
  return (
    <footer className="bg-noche text-crema">
      <div className="mx-auto max-w-wrap px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/takai-hawk-nobg.png" alt="" width={687} height={400} className="h-9 w-auto" />
              <span className="font-display text-2xl font-semibold tracking-[0.25em]">TAKAI</span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-crema/60">
              Sistema de reservas y generación de demanda para cabañas y glampings independientes. Nacido en el sur de
              Chile, para el mundo.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cobre-light">Desde 2025 · Chile → Ecuador</p>
          </div>

          <nav aria-label="Producto">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-crema/40">Producto</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li><Link href="/#producto" className="link-draw text-crema/70 hover:text-crema">El sistema</Link></li>
              <li><Link href="/#casos" className="link-draw text-crema/70 hover:text-crema">Casos reales</Link></li>
              <li><Link href="/#precio" className="link-draw text-crema/70 hover:text-crema">Precio</Link></li>
              <li><Link href="/#faq" className="link-draw text-crema/70 hover:text-crema">Preguntas frecuentes</Link></li>
              <li><Link href="/blog" className="link-draw text-crema/70 hover:text-crema">Blog</Link></li>
            </ul>
          </nav>

          <nav aria-label="Empresa">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-crema/40">Empresa</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li><Link href="/afiliados" className="link-draw text-crema/70 hover:text-crema">Programa de partners</Link></li>
              <li><a href="https://www.instagram.com/takai.ia/" target="_blank" rel="noopener noreferrer" className="link-draw text-crema/70 hover:text-crema">Instagram</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61584357745669" target="_blank" rel="noopener noreferrer" className="link-draw text-crema/70 hover:text-crema">Facebook</a></li>
              <li><a href="mailto:contacto@takai.cl" className="link-draw text-crema/70 hover:text-crema">contacto@takai.cl</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal y contacto">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-crema/40">Legal</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li><Link href="/terminos" className="link-draw text-crema/70 hover:text-crema">Términos de servicio</Link></li>
              <li><Link href="/privacidad" className="link-draw text-crema/70 hover:text-crema">Política de privacidad</Link></li>
              <li><Link href="/privacidad#cookies" className="link-draw text-crema/70 hover:text-crema">Cookies</Link></li>
              <li>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="link-draw text-crema/70 hover:text-crema">
                  WhatsApp +56 9 5523 0900
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-crema/10 pt-7 sm:flex-row">
          <p className="text-[12.5px] text-crema/50">
            © Takai — <span className="text-crema/80">Desde 2025</span> · Todos los derechos reservados
          </p>
          <p className="font-mono text-[11px] tracking-wide text-crema/40">Hecho en el sur de Chile 🇨🇱</p>
        </div>
      </div>
    </footer>
  )
}
