export type Faq = { q: string; a: string }

export default function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="tk-faq-list">
      {items.map((item, index) => (
        <details key={item.q} className="tk-faq-item" open={index === 0}>
          <summary className="tk-faq-button">
            <span className="tk-faq-label">{item.q}</span>
            <span className="tk-faq-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="tk-faq-answer">
            <div className="tk-faq-answer-clip">
              <p className="tk-faq-answer-copy">{item.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}
