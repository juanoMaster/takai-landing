import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.takai.cl"),
  title: "Takai — Sistema de reservas y generación de reservas para cabañas en Chile",
  description: "Takai digitaliza y genera reservas para cabañas independientes en Chile. Tu página propia, directorio turístico, agente WhatsApp 24/7 y programa de afiliados. Sin comisiones abusivas.",
  keywords: "reservas cabañas chile, sistema reservas, panel propietario, araucanía, pucón, villarrica, reservas cabañas araucanía, glamping chile, sistema reservas cabañas, directorio turístico chile, afiliados turismo",
  authors: [{ name: "Takai" }],
  creator: "Takai",
  publisher: "Takai",
  openGraph: {
    title: "Takai.cl — Reservas para Cabañas",
    description: "Deja de perder reservas. Empieza a ganar tranquilidad.",
    url: "https://www.takai.cl",
    siteName: "Takai.cl",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/takai-logo.png", width: 166, height: 128, alt: "Takai" }],
  },
  twitter: { card: "summary", title: "Takai.cl", description: "Sistema profesional de reservas para cabañas en Chile.", images: ["/takai-logo.png"] },
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
      description: "Sistema de reservas y generación de reservas para cabañas independientes en Chile.",
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
      "@id": "https://www.takai.cl/#website",
      url: "https://www.takai.cl",
      name: "Takai.cl",
      inLanguage: "es-CL",
      publisher: { "@id": "https://www.takai.cl/#organization" },
    },
    {
      "@type": "Service",
      name: "Sistema de reservas para cabañas",
      provider: { "@id": "https://www.takai.cl/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
      serviceType: "Sistema de reservas y directorio turístico para cabañas",
      description: "Página de reservas propia, calendario en tiempo real, agente de WhatsApp 24/7, directorio turístico optimizado para Google y programa de afiliados. Comisión solo sobre las reservas que Takai genera.",
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={serif.variable + " " + sans.variable}>
      <head>
        <meta name="theme-color" content="#070707" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#070707" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
