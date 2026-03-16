export const metadata = {
    title: "Takai.cl \u2014 Sistema de reservas para caba\u00f1as en Chile",
    description: "Plataforma profesional de reservas directas para caba\u00f1as y alojamientos tur\u00edsticos en el sur de Chile.",
  }
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="es">
        <body style={{ margin: 0, padding: 0 }}>{children}</body>
      </html>
    )
  }