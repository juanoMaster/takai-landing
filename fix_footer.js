const fs = require("fs")

const src = fs.readFileSync("app/page.tsx", "utf8")

const oldFooter = `      {/* FOOTER */}
      <footer style={{ background: SURFACE, borderTop: "1px solid " + BORDER, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap" as const, gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-start" }}>
              <TakaiLogo height={52} />
              <span style={{ fontFamily: SERIF, fontSize: "22px", letterSpacing: "4px", color: TEXT, marginTop: "8px" }}>{"TAKAI"}</span>
            </div>
            <div style={{ display: "flex", gap: "48px" }}>
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Navegación"}</div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {[["como-funciona", "Cómo funciona"], ["caracteristicas", "Características"], ["precios", "Precios"]].map(function(item) {
                    return (
                      <button key={item[0]} onClick={function() { scrollTo(item[0]) }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>
                        {item[1]}
                      </button>
                    )
                  })}
                  <a href="/panel" style={{ color: "#444", fontSize: "12px", textDecoration: "none" }}>
                    {"Acceso panel propietarios"}
                  </a>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Contacto"}</div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"WhatsApp"}</a>
                  <a href="mailto:contacto@takai.cl" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"contacto@takai.cl"}</a>
                </div>
              </div>
            </div>
          </div>
          <GoldLine />
          <div style={{ paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "12px" }}>
            <div style={{ fontSize: "12px", color: "#444" }}>{"\\u00a9 2026 Takai.cl \\u2014 Todos los derechos reservados"}</div>
            <div style={{ fontSize: "12px", color: MUTED, textAlign: "center" as const }}>{"Sistema profesional de reservas para cabañas en Chile."}</div>
            <div style={{ fontSize: "12px", color: "#333" }}>{"Hecho en Chile"}</div>
          </div>
        </div>
      </footer>`

const newFooter = `      {/* FOOTER */}
      <footer style={{ background: SURFACE, borderTop: "1px solid " + BORDER, padding: "60px 24px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* MISIÓN Y VISIÓN */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: BORDER, borderRadius: "16px", overflow: "hidden", marginBottom: "56px", border: "1px solid " + BORDER }}>
            <div style={{ background: "#0d0d0d", padding: "28px 32px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "12px" }}>{"Nuestra Misión"}</div>
              <div style={{ fontFamily: SERIF, fontSize: "16px", color: TEXT, lineHeight: 1.6, marginBottom: "10px" }}>
                {"Devolver el control del negocio al propietario."}
              </div>
              <div style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>
                {"Digitalizamos la gestión de reservas para cabañas independientes en Chile. Sin intermediarios, sin comisiones abusivas — solo herramientas profesionales al alcance de cada propietario."}
              </div>
            </div>
            <div style={{ background: "#0a0a0a", padding: "28px 32px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "12px" }}>{"Nuestra Visión"}</div>
              <div style={{ fontFamily: SERIF, fontSize: "16px", color: TEXT, lineHeight: 1.6, marginBottom: "10px" }}>
                {"La plataforma de referencia para el turismo de cabañas en Chile."}
              </div>
              <div style={{ fontSize: "13px", color: MUTED, lineHeight: 1.7 }}>
                {"Cada propietario gestiona su negocio con tecnología de primera. Cada turista reserva con confianza directamente con quien conoce su cabaña. Sin grandes plataformas de por medio."}
              </div>
            </div>
          </div>

          {/* COLUMNAS PRINCIPALES */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px", flexWrap: "wrap" as const, gap: "32px" }}>

            {/* BRAND */}
            <div style={{ minWidth: "180px" }}>
              <TakaiLogo height={48} />
              <span style={{ display: "block", fontFamily: SERIF, fontSize: "20px", letterSpacing: "4px", color: TEXT, marginTop: "8px", marginBottom: "12px" }}>{"TAKAI"}</span>
              <div style={{ fontSize: "12px", color: MUTED, lineHeight: 1.6, maxWidth: "200px", marginBottom: "18px" }}>
                {"Sistema profesional de reservas para cabañas en Chile."}
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer"
                  style={{ width: "32px", height: "32px", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px" }}>
                  {"💬"}
                </a>
                <a href="mailto:contacto@takai.cl"
                  style={{ width: "32px", height: "32px", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "14px" }}>
                  {"✉️"}
                </a>
              </div>
            </div>

            {/* PRODUCTO */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Producto"}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "11px" }}>
                {[["como-funciona","Cómo funciona"],["caracteristicas","Características"],["precios","Precios"]].map(function(item) {
                  return (
                    <button key={item[0]} onClick={function() { scrollTo(item[0]) }} style={{ background: "none", border: "none", color: MUTED, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>
                      {item[1]}
                    </button>
                  )
                })}
                <button onClick={function() { setModal(true) }} style={{ background: "none", border: "none", color: GOLD, fontSize: "13px", cursor: "pointer", fontFamily: SANS, textAlign: "left" as const, padding: 0 }}>
                  {"Empezar gratis →"}
                </button>
              </div>
            </div>

            {/* EMPRESA */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Empresa"}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "11px" }}>
                <a href="#mision" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"Misión y visión"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"Contacto"}</a>
                <a href="/panel" style={{ color: "#555", fontSize: "13px", textDecoration: "none" }}>{"Acceso propietarios"}</a>
              </div>
            </div>

            {/* LEGAL */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Legal"}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "11px" }}>
                <a href="/terminos" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"Términos de servicio"}</a>
                <a href="/privacidad" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"Política de privacidad"}</a>
                <a href="/cookies" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"Política de cookies"}</a>
              </div>
            </div>

            {/* CONTACTO */}
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" as const, color: GOLD, marginBottom: "16px" }}>{"Contacto"}</div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "11px" }}>
                <a href="https://wa.me/56955230900" target="_blank" rel="noopener noreferrer" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"WhatsApp · +56 9 5523 0900"}</a>
                <a href="mailto:contacto@takai.cl" style={{ color: MUTED, fontSize: "13px", textDecoration: "none" }}>{"contacto@takai.cl"}</a>
                <span style={{ color: "#444", fontSize: "12px" }}>{"Atención: Lun–Vie 9–18 hrs"}</span>
              </div>
            </div>
          </div>

          <GoldLine />

          {/* BARRA INFERIOR */}
          <div style={{ padding: "20px 0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "10px" }}>
            <div style={{ fontSize: "11px", color: "#444" }}>{"\u00a9 2025 Takai.cl \u2014 Todos los derechos reservados"}</div>
            <div style={{ fontSize: "11px", color: "#333", display: "flex", alignItems: "center", gap: "6px" }}>
              {"Hecho en Chile"}
              <span style={{ fontSize: "13px" }}>{"🇨🇱"}</span>
            </div>
          </div>

        </div>
      </footer>`

if (!src.includes(oldFooter.slice(0, 60))) {
  console.error("ERROR: no encontré el footer original. Primeros 60 chars buscados:")
  console.error(JSON.stringify(oldFooter.slice(0, 60)))
  process.exit(1)
}

const updated = src.replace(oldFooter, newFooter)
if (updated === src) {
  console.error("ERROR: replace no encontró el bloque exacto")
  process.exit(1)
}

fs.writeFileSync("app/page.tsx", updated)
console.log("✓ Footer actualizado")
