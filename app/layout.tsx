import type { Metadata } from "next"
import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

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
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.takai.cl"),
  title: "Takai — Reservas directas para cabañas y glampings. Nacido en el sur de Chile, para el mundo.",
  description:
    "Takai digitaliza y genera reservas para cabañas y glampings independientes. Página propia, calendario en tiempo real, agente WhatsApp 24/7, directorio turístico y red de afiliados. 0% comisión en tus reservas directas.",
  keywords:
    "reservas cabañas chile, sistema reservas cabañas, glamping chile, glamping ecuador, reservas directas, panel propietario, araucanía, pucón, villarrica, licán ray, directorio turístico, programa de afiliados turismo",
  authors: [{ name: "Takai" }],
  creator: "Takai",
  publisher: "Takai",
  openGraph: {
    title: "Takai — Tus cabañas se reservan solas",
    description:
      "Sistema de reservas + generación de demanda para cabañas y glampings. Nacido en el sur de Chile, para el mundo.",
    url: "https://www.takai.cl",
    siteName: "Takai",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/takai-logo.png", width: 166, height: 128, alt: "Takai" }],
  },
  twitter: {
    card: "summary",
    title: "Takai — Reservas directas para cabañas",
    description: "Nacido en el sur de Chile, para el mundo.",
    images: ["/takai-logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.takai.cl" },
  icons: { icon: "/takai-logo.png" },
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.takai.cl/#organization",
      name: "Takai",
      url: "https://www.takai.cl",
      logo: "https://www.takai.cl/takai-logo.png",
      foundingDate: "2025",
      description:
        "Sistema de reservas y generación de demanda para cabañas y glampings independientes. Nacido en el sur de Chile, con presencia en Chile y Ecuador.",
      email: "contacto@takai.cl",
      areaServed: [
        { "@type": "Country", name: "Chile" },
        { "@type": "Country", name: "Ecuador" },
      ],
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
      "@id": "https://www.takai.cl/#website",
      url: "https://www.takai.cl",
      name: "Takai",
      inLanguage: "es-CL",
      publisher: { "@id": "https://www.takai.cl/#organization" },
    },
    {
      "@type": "Service",
      name: "Sistema de reservas para cabañas y glampings",
      provider: { "@id": "https://www.takai.cl/#organization" },
      areaServed: [
        { "@type": "Country", name: "Chile" },
        { "@type": "Country", name: "Ecuador" },
      ],
      serviceType: "Sistema de reservas, directorio turístico y red de afiliados",
      description:
        "Página de reservas propia, calendario en tiempo real, agente de WhatsApp 24/7, directorio turístico optimizado para Google y programa de afiliados. Comisión solo sobre las reservas que Takai genera.",
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fraunces.variable + " " + archivo.variable + " " + plexMono.variable}>
      <head>
        <meta name="theme-color" content="#131A16" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
