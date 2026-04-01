import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: "Takai.cl — Sistema de Reservas para Cabañas en Chile",
  description: "Automatizamos tus reservas, cobramos el adelanto y gestionamos tu disponibilidad. Sin mensualidad. Solo 15% por reserva confirmada.",
  keywords: "reservas cabañas chile, sistema reservas, panel propietario, araucaía, pucón, villarrica",
  openGraph: {
    title: "Takai.cl — Reservas para Cabañas",
    description: "Deja de perder reservas. Empieza a ganar tranquilidad.",
    url: "https://www.takai.cl",
    siteName: "Takai.cl",
    locale: "es_CL",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Takai.cl", description: "Sistema profesional de reservas para cabañas en Chile." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.takai.cl" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/takai-logo.png" />
        <meta name="theme-color" content="#070707" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#070707" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
