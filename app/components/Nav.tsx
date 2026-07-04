"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const WA_START = "https://wa.me/56955230900?text=Hola%2C%20quiero%20incorporar%20mis%20caba%C3%B1as%20a%20Takai"

const LINKS: Array<{ href: string; label: string }> = [
  { href: "/#producto", label: "Producto" },
  { href: "/#casos", label: "Casos reales" },
  { href: "/#precio", label: "Precio" },
  { href: "/afiliados", label: "Partners" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lujo " +
        (scrolled || open ? "border-b border-tinta/10 bg-crema/90 backdrop-blur-md" : "border-b border-transparent bg-transparent")
      }
    >
      <nav className="mx-auto flex h-16 max-w-wrap items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Takai — inicio" onClick={() => setOpen(false)}>
          <Image src="/takai-hawk-nobg.png" alt="" width={687} height={400} className="h-8 w-auto" priority />
          <span className="font-display text-xl font-semibold tracking-[0.25em] text-tinta">TAKAI</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="link-draw text-[13.5px] text-ceniza transition-colors hover:text-tinta">
              {l.label}
            </Link>
          ))}
          <a
            href={WA_START}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-cobre px-5 py-2.5 text-[13.5px] font-semibold text-crema transition-colors duration-300 hover:bg-cobre-dark"
          >
            Empezar
          </a>
        </div>

        {/* Móvil */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={"h-[2px] w-6 bg-tinta transition-transform duration-300 " + (open ? "translate-y-[7px] rotate-45" : "")} />
          <span className={"h-[2px] w-6 bg-tinta transition-opacity duration-300 " + (open ? "opacity-0" : "")} />
          <span className={"h-[2px] w-6 bg-tinta transition-transform duration-300 " + (open ? "-translate-y-[7px] -rotate-45" : "")} />
        </button>
      </nav>
    </header>

    {/* Overlay móvil (fuera del header: backdrop-blur crea containing block y rompería position:fixed) */}
    <div
        className={
          "fixed inset-0 top-16 z-40 flex flex-col bg-crema px-6 pb-10 pt-8 transition-all duration-500 ease-lujo md:hidden " +
          (open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")
        }
      >
        <div className="flex flex-col gap-1 border-t border-tinta/10">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={
                "border-b border-tinta/10 py-4 font-display text-3xl text-tinta transition-all duration-500 ease-lujo " +
                (open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")
              }
              style={{ transitionDelay: open ? i * 60 + "ms" : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href={WA_START}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-md bg-cobre px-6 py-4 text-center text-base font-semibold text-crema"
          onClick={() => setOpen(false)}
        >
          Empezar por WhatsApp
        </a>
        <p className="mt-6 text-center font-mono text-[11px] tracking-wide text-humo">
          Respondemos el mismo día · Página lista en 72 h
        </p>
    </div>
    </>
  )
}
