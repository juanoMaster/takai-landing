import { access } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const root = process.cwd()
const imageDirectory = path.join(root, "public", "imagenes")

const conversions = [
  ["pagina-majoaal.png", "pagina-majoaal.webp"],
  ["pagina-el-mirador.png", "pagina-el-mirador.webp"],
  ["pagina-glamping-cacagual.png", "pagina-glamping-cacagual.webp"],
  ["panel-calendario.png", "panel-calendario.webp"],
  ["reserva-formulario.png", "reserva-formulario.webp"],
]

for (const [sourceName, outputName] of conversions) {
  const source = path.join(imageDirectory, sourceName)
  const output = path.join(imageDirectory, outputName)

  try {
    await access(source)
  } catch {
    continue
  }

  await sharp(source)
    .rotate()
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(output)
}

const hawkSource = path.join(root, "public", "takai-hawk-nobg.png")
try {
  await access(hawkSource)
  await sharp(hawkSource)
    .resize({ width: 256, withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 100, effort: 6 })
    .toFile(path.join(root, "public", "takai-hawk-nobg.webp"))
} catch {
  // El archivo optimizado ya puede existir aunque el PNG fuente se haya retirado.
}

const ogBackground = path.join(imageDirectory, "foto-lago-volcan.webp")
const ogOverlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#131A16" stop-opacity="0.98"/>
        <stop offset="0.62" stop-color="#131A16" stop-opacity="0.78"/>
        <stop offset="1" stop-color="#131A16" stop-opacity="0.32"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <text x="88" y="105" fill="#C96A42" font-family="Archivo, Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="4">TAKAI · RESERVAS PARA CABAÑAS</text>
    <text x="84" y="255" fill="#F4F0E6" font-family="Fraunces, Georgia, serif" font-size="72" font-weight="700">
      <tspan x="84" dy="0">Tus cabañas se</tspan>
      <tspan x="84" dy="84">reservan solas.</tspan>
    </text>
    <text x="88" y="465" fill="#F4F0E6" fill-opacity="0.82" font-family="Archivo, Arial, sans-serif" font-size="27">Página propia · Calendario · Panel autoadministrable</text>
    <rect x="88" y="515" width="230" height="3" rx="1.5" fill="#C96A42"/>
    <text x="88" y="565" fill="#F4F0E6" fill-opacity="0.78" font-family="Archivo, Arial, sans-serif" font-size="23">Cero comisión por reserva</text>
  </svg>
`)

await sharp(ogBackground)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.8, saturation: 0.85 })
  .composite([{ input: ogOverlay }])
  .jpeg({ quality: 84, progressive: true, mozjpeg: true })
  .toFile(path.join(root, "public", "og-takai.jpg"))
