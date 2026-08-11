"use client"

import { useEffect, useRef } from "react"

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (!("IntersectionObserver" in window)) {
      element.classList.add("tk-reveal--visible")
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("tk-reveal--visible")
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={["tk-reveal", className].filter(Boolean).join(" ")}
      style={delay ? { transitionDelay: delay + "ms" } : undefined}
    >
      {children}
    </div>
  )
}
