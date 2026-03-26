import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Takai.cl — Sistema de Reservas para Cabañas en Chile",
  description: "Automatizamos tus reservas, cobramos el adelanto y gestionamos tu disponibilidad. Sin mensualidad. Solo 15% por reserva confirmada. Tu dinero llega directo a tu cuenta.",
  keywords: "reservas cabañas chile, sistema reservas, panel propietario, araucanía, pucón, villarrica",
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
        <meta name="theme-color" content="#0d1a12" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
