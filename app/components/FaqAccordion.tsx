"use client"
import { useState } from "react"

export type Faq = { q: string; a: string }

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="border-t border-tinta/15">
      {items.map((item, i) => {
        const open = openIdx === i
        return (
          <div key={i} className="border-b border-tinta/15">
            <button
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-start justify-between gap-5 py-5 text-left"
            >
              <span className="text-[16px] font-medium leading-snug text-tinta">{item.q}</span>
              <span
                className={
                  "mt-0.5 shrink-0 font-mono text-xl leading-none text-cobre transition-transform duration-300 ease-lujo " +
                  (open ? "rotate-45" : "")
                }
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={
                "grid transition-all duration-500 ease-lujo " + (open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
              }
            >
              <div className="overflow-hidden">
                <p className="max-w-xl pb-6 text-[14.5px] leading-relaxed text-ceniza">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
