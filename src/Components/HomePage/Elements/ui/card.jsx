import * as React from "react"

export function Card({ children }) {
  return <div className="rounded-xl border p-4 shadow-md bg-white">{children}</div>
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>
}
