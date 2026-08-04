"use client"
import { useState } from "react"

function clp(n: number) {
  return "$" + Math.round(n).toLocaleString("es-CL")
}

export default function PriceSim() {
  const [reservas, setReservas] = useState(3)
  const [valor, setValor] = useState(150000)

  const ingresos = reservas * valor
  const comision = ingresos * 0.1
  // Modelo vigente (2026-08): cero mensualidad, siempre.
  const mensualidad = 0
  const neto = ingresos - comision

  return (
    <div className="rounded-xl border-2 border-tinta bg-crema p-6 text-left sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cobre">Simula tu mes</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-medium text-ceniza">Reservas que Takai te trae este mes</span>
          <input
            type="range"
            min={0}
            max={10}
            value={reservas}
            onChange={(e) => setReservas(Number(e.target.value))}
            className="mt-3 w-full accent-cobre"
          />
          <span className="mt-1 block font-mono text-2xl font-semibold text-tinta">{reservas}</span>
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-ceniza">Valor promedio por estadía</span>
          <input
            type="range"
            min={50000}
            max={500000}
            step={10000}
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
            className="mt-3 w-full accent-cobre"
          />
          <span className="mt-1 block font-mono text-2xl font-semibold text-tinta">{clp(valor)}</span>
        </label>
      </div>

      <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-tinta/15 bg-tinta/15 sm:grid-cols-3">
        <div className="bg-crema p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-humo">Recibes en tu cuenta</p>
          <p className="mt-2 font-mono text-xl font-semibold text-tinta sm:text-2xl">{clp(neto)}</p>
        </div>
        <div className="bg-crema p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-humo">Comisión Takai (10%)</p>
          <p className="mt-2 font-mono text-xl font-semibold text-cobre sm:text-2xl">{clp(comision)}</p>
        </div>
        <div className="bg-crema p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-humo">Mensualidad</p>
          <p className="mt-2 font-mono text-xl font-semibold text-tinta sm:text-2xl">{clp(mensualidad)}</p>
          <p className="mt-1 text-[11px] leading-snug text-humo">
            Takai no cobra cuotas fijas — nunca
          </p>
        </div>
      </div>

      <p className="mt-5 text-[12.5px] leading-relaxed text-ceniza">
        Tus reservas directas — Instagram, WhatsApp, clientes habituales — no aparecen aquí porque son{" "}
        <strong className="text-tinta">100% tuyas, siempre, con 0% de comisión</strong>.
      </p>
    </div>
  )
}
