"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { NO_SCRIPT_STYLES } from "../styles/noscript"

const WA_START =
  "https://wa.me/56955230900?text=Hola%2C%20quiero%20incorporar%20mis%20caba%C3%B1as%20a%20Takai"
const REGISTRO_URL = "https://reservas.takai.cl/registro"

const LINKS: Array<{ href: string; label: string }> = [
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#incluye", label: "Lo que incluye" },
  { href: "/#casos", label: "Casos reales" },
  { href: "/#precio", label: "Precios" },
  { href: "/#registro", label: "Regístrate" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
]

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Nav({ overDark = false }: { overDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuPanelRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback((restoreFocus = false) => {
    setOpen(false)
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus())
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)")
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }

    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    window.requestAnimationFrame(() => {
      menuPanelRef.current?.querySelector<HTMLElement>("a[href]")?.focus()
    })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu(true)
        return
      }

      if (event.key !== "Tab") return

      const panelItems = Array.from(
        menuPanelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
      )
      const focusableItems = [menuButtonRef.current, ...panelItems].filter(
        (item): item is HTMLElement => item !== null,
      )

      if (focusableItems.length === 0) return

      const currentIndex = focusableItems.indexOf(document.activeElement as HTMLElement)
      const isLeavingBackwards = event.shiftKey && currentIndex <= 0
      const isLeavingForwards = !event.shiftKey && currentIndex === focusableItems.length - 1

      if (isLeavingBackwards || isLeavingForwards) {
        event.preventDefault()
        const nextItem = isLeavingBackwards ? focusableItems[focusableItems.length - 1] : focusableItems[0]
        nextItem.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [closeMenu, open])

  const solid = scrolled || open || !overDark

  return (
    <>
      <a href="#contenido" className="tk-skip-link">
        Saltar al contenido principal
      </a>

      <header className="tk-site-header" data-elevated={scrolled || open} data-over-dark={overDark}>
        <nav className="tk-site-nav" aria-label="Navegación principal">
          <Link href="/" className="tk-brand-link" aria-label="Takai — inicio" onClick={() => closeMenu()}>
            <Image
              src="/takai-hawk-nobg.webp"
              alt=""
              width={687}
              height={400}
              sizes="55px"
              className="tk-brand-mark"
              data-tone={solid ? "dark" : "light"}
              priority
            />
            <span className="tk-brand-name" data-tone={solid ? "dark" : "light"}>
              TAKAI
            </span>
          </Link>

          <div className="tk-desktop-nav">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="tk-nav-link" data-tone={solid ? "dark" : "light"}>
                {link.label}
              </Link>
            ))}
            <a href={WA_START} target="_blank" rel="noopener noreferrer" className="tk-nav-cta">
              Empezar
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="tk-menu-button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-controls="menu-mobile"
            aria-expanded={open}
            onClick={() => (open ? closeMenu() : setOpen(true))}
          >
            <span
              aria-hidden="true"
              className="tk-menu-line"
              data-position="top"
              data-tone={solid ? "dark" : "light"}
              data-open={open}
            />
            <span
              aria-hidden="true"
              className="tk-menu-line"
              data-position="middle"
              data-tone={solid ? "dark" : "light"}
              data-open={open}
            />
            <span
              aria-hidden="true"
              className="tk-menu-line"
              data-position="bottom"
              data-tone={solid ? "dark" : "light"}
              data-open={open}
            />
          </button>
        </nav>
      </header>

      <noscript>
        <style>{NO_SCRIPT_STYLES}</style>
        <nav className="tk-noscript-nav" aria-label="Navegación sin JavaScript">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="tk-noscript-link">
              {link.label}
            </Link>
          ))}
          <a href={WA_START} target="_blank" rel="noopener noreferrer" className="tk-noscript-cta">
            Empezar
          </a>
          <a href={REGISTRO_URL} target="_blank" rel="noopener noreferrer" className="tk-noscript-link">
            Regístrate en línea
          </a>
        </nav>
      </noscript>

      <div
        id="menu-mobile"
        ref={menuPanelRef}
        role="navigation"
        aria-label="Navegación móvil"
        aria-hidden={!open}
        inert={!open}
        className="tk-mobile-menu"
        data-open={open}
      >
        <div className="tk-mobile-links">
          {LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => closeMenu(true)}
              tabIndex={open ? 0 : -1}
              className="tk-mobile-link"
              data-open={open}
              style={{ transitionDelay: open ? index * 60 + "ms" : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href={WA_START}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          className="tk-mobile-cta"
          onClick={() => closeMenu(true)}
        >
          Empezar por WhatsApp
        </a>
        <a
          href={REGISTRO_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          className="tk-mobile-secondary"
          onClick={() => closeMenu(true)}
        >
          Regístrate en línea
        </a>
        <p className="tk-mobile-note">Regístrate solo o escríbenos · Tu página lista en horas</p>
      </div>
    </>
  )
}
