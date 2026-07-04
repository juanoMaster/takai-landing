"use client"
import Reveal from "./Reveal"

type Msg = {
  time: string
  from: "turista" | "takai" | "sistema"
  text: string
}

const MSGS: Msg[] = [
  { time: "23:41", from: "turista", text: "Hola! ¿Tienen la casa disponible del 21 al 25 de julio? Somos 2 personas 🙂" },
  { time: "23:41", from: "takai", text: "¡Hola! Sí — Casa 1 está libre del 21 al 25 de julio. Son 4 noches × $90.000 = $360.000. ¿Te envío el link para reservar con el 50% de anticipo?" },
  { time: "23:45", from: "turista", text: "Sí, por favor 🙌" },
  { time: "23:45", from: "takai", text: "Aquí está 👉 reservas.takai.cl/el-mirador — eliges tus fechas, dejas tus datos y pagas el anticipo. Todo queda confirmado al instante." },
  { time: "23:48", from: "sistema", text: "✓ Reserva confirmada — Casa 1 · 21 – 25 jul · 2 personas · Anticipo $180.000 recibido. El calendario se bloqueó automáticamente." },
]

export default function ChatDemo() {
  return (
    <div className="flex flex-col gap-4">
      {MSGS.map((m, i) => (
        <Reveal key={i} delay={i * 90}>
          {m.from === "sistema" ? (
            <div className="mx-auto max-w-md rounded-lg border border-crema/20 bg-crema/10 px-4 py-3 text-center">
              <p className="font-mono text-[11px] leading-relaxed text-crema/90">{m.text}</p>
              <p className="mt-1 font-mono text-[10px] tracking-widest text-crema/40">{m.time} · PANEL DEL PROPIETARIO</p>
            </div>
          ) : (
            <div className={"flex " + (m.from === "turista" ? "justify-start" : "justify-end")}>
              <div
                className={
                  "max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed sm:max-w-[75%] " +
                  (m.from === "turista"
                    ? "rounded-tl-sm bg-crema text-tinta"
                    : "rounded-tr-sm bg-cobre text-crema")
                }
              >
                <p>{m.text}</p>
                <p className={"mt-1 text-right font-mono text-[10px] " + (m.from === "turista" ? "text-humo" : "text-crema/60")}>
                  {m.time}
                </p>
              </div>
            </div>
          )}
        </Reveal>
      ))}
    </div>
  )
}
