const sharp = require('sharp')
const path = require('path')

const INPUT  = path.join(__dirname, 'public/takai-hawk.png')
const OUTPUT = path.join(__dirname, 'public/takai-hawk-nobg.png')

async function run() {
  const img = sharp(INPUT)
  const { width, height } = await img.metadata()

  // Get raw RGBA pixels
  const { data } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true })

  // Sample background color from top-left corner
  let bgR = 0, bgG = 0, bgB = 0, count = 0
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const i = (y * width + x) * 4
      bgR += data[i]; bgG += data[i+1]; bgB += data[i+2]; count++
    }
  }
  bgR = Math.round(bgR / count)
  bgG = Math.round(bgG / count)
  bgB = Math.round(bgB / count)
  console.log(`Background: rgb(${bgR}, ${bgG}, ${bgB})`)

  const THRESHOLD = 60
  const FEATHER   = 90

  // Crop to top 68% to remove "TAKAI" text remnants at bottom
  const cropH = Math.round(height * 0.68)

  const out = Buffer.alloc(width * cropH * 4)

  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < width; x++) {
      const si = (y * width + x) * 4
      const di = (y * width + x) * 4
      const r = data[si], g = data[si+1], b = data[si+2], a = data[si+3]
      const dist = Math.sqrt((r-bgR)**2 + (g-bgG)**2 + (b-bgB)**2)

      out[di]   = r
      out[di+1] = g
      out[di+2] = b
      if (dist < THRESHOLD) {
        out[di+3] = 0
      } else if (dist < FEATHER) {
        const t = (dist - THRESHOLD) / (FEATHER - THRESHOLD)
        out[di+3] = Math.round(a * t)
      } else {
        out[di+3] = a
      }
    }
  }

  await sharp(out, { raw: { width, height: cropH, channels: 4 } })
    .png()
    .toFile(OUTPUT)

  console.log(`Saved: ${OUTPUT} (${width}x${cropH})`)
}

run().catch(console.error)
