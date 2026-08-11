import fs from "node:fs"
import path from "node:path"

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(fullPath) : [fullPath]
  })
}

const files = walk("app")
const componentFiles = files.filter((file) => file.endsWith(".tsx"))
const styleFiles = files.filter((file) => file.startsWith(path.join("app", "styles")) && file.endsWith(".ts"))
const invalidLiteralClasses = []

for (const file of componentFiles) {
  const source = fs.readFileSync(file, "utf8")
  for (const match of source.matchAll(/className="([^"]*)"/g)) {
    for (const className of match[1].split(/\s+/).filter(Boolean)) {
      if (!className.startsWith("tk-")) invalidLiteralClasses.push(file + ": " + className)
    }
  }
}

const cssSource = styleFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n")
const usedClasses = new Set(
  componentFiles.flatMap((file) =>
    Array.from(fs.readFileSync(file, "utf8").matchAll(/tk-[a-zA-Z0-9_-]+/g), (match) => match[0]),
  ),
)
const definedClasses = new Set(Array.from(cssSource.matchAll(/\.((?:tk-)[a-zA-Z0-9_-]+)/g), (match) => match[1]))
const missingDefinitions = Array.from(usedClasses).filter((className) => !definedClasses.has(className))

if (invalidLiteralClasses.length || missingDefinitions.length) {
  console.error(JSON.stringify({ invalidLiteralClasses, missingDefinitions }, null, 2))
  process.exitCode = 1
} else {
  console.log(`Styles OK: ${usedClasses.size} clases usadas, todas con prefijo tk- y definición disponible.`)
}
