import type { Metadata } from "next"
import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { BASE_STYLES } from "./styles/base"
import { EDITORIAL_STYLES } from "./styles/editorial"
import homeStyles from "./styles/home"
import { SHELL_STYLES } from "./styles/shell"

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
})

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
})

const SITE_URL = "https://www.takai.cl"
const SITE_STYLES = [BASE_STYLES, SHELL_STYLES, homeStyles, EDITORIAL_STYLES].join("")
const TITLE = "Takai — Sistema de reservas para cabañas en Chile"
const DESCRIPTION =
  "Página de reservas, calendario y panel autoadministrable para dueños de cabañas. Cobra directo, administra tus fechas y paga cero comisión."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "sistema de reservas para cabañas",
    "reservas directas cabañas Chile",
    "calendario de reservas",
    "panel para cabañas",
    "página de reservas",
  ],
  authors: [{ name: "Takai" }],
  creator: "Takai",
  publisher: "Takai",
  openGraph: {
    title: "Takai — Tus cabañas se reservan solas",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Takai",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-takai.jpg",
        width: 1200,
        height: 630,
        alt: "Takai, sistema de reservas para dueños de cabañas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takai — Tus cabañas se reservan solas",
    description: DESCRIPTION,
    images: ["/og-takai.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  icons: { icon: "/takai-logo.png" },
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "Takai",
      url: SITE_URL,
      logo: SITE_URL + "/takai-logo.png",
      foundingDate: "2025",
      description: "Sistema de reservas para dueños de cabañas en Chile.",
      email: "contacto@takai.cl",
      areaServed: { "@type": "Country", name: "Chile" },
      sameAs: [
        "https://www.instagram.com/takai.ia/",
        "https://www.facebook.com/profile.php?id=61584357745669",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+56955230900",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL,
      name: "Takai",
      inLanguage: "es-CL",
      publisher: { "@id": SITE_URL + "/#organization" },
    },
    {
      "@type": "Service",
      name: "Sistema de reservas para cabañas",
      provider: { "@id": SITE_URL + "/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
      serviceType: "Sistema de reservas para dueños de cabañas",
      description:
        "Página de reservas propia, calendario en tiempo real, cobro directo al propietario y panel autoadministrable sin comisión por reserva.",
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fraunces.variable + " " + archivo.variable + " " + plexMono.variable}>
      <head>
        <meta name="theme-color" content="#131A16" />
        <style dangerouslySetInnerHTML={{ __html: SITE_STYLES }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
