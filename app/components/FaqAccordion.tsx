"use client"

import { useId, useState } from "react"

export type Faq = { q: string; a: string }

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const accordionId = useId().replace(/:/g, "")

  return (
    <div className="tk-faq-list">
      {items.map((item, index) => {
        const open = openIdx === index
        const questionId = accordionId + "-pregunta-" + index
        const answerId = accordionId + "-respuesta-" + index

        return (
          <div key={item.q} className="tk-faq-item">
            <h3 className="tk-faq-question">
              <button
                id={questionId}
                type="button"
                onClick={() => setOpenIdx(open ? null : index)}
                aria-expanded={open}
                aria-controls={answerId}
                className="tk-faq-button"
              >
                <span className="tk-faq-label">{item.q}</span>
                <span className="tk-faq-icon" data-open={open} aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              aria-hidden={!open}
              inert={!open}
              className="tk-faq-answer"
              data-open={open}
            >
              <div className="tk-faq-answer-clip">
                <p className="tk-faq-answer-copy">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
