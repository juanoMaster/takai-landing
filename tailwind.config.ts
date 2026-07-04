import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crema: { DEFAULT: "#F4F0E6", deep: "#EAE3D2" },
        tinta: { DEFAULT: "#1E2A23", soft: "#2C3A31" },
        noche: "#131A16",
        humo: "#8A8578",
        ceniza: "#5A554A",
        cobre: { DEFAULT: "#B4552D", light: "#C96A42", dark: "#8F4020" },
        wa: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        lujo: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        wrap: "1200px",
      },
    },
  },
  plugins: [],
}

export default config
