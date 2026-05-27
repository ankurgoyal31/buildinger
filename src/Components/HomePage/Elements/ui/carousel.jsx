import * as React from "react"

// Carousel main wrapper
export function Carousel({ children, className = "" }) {
  return <div className={`overflow-hidden ${className}`}>{children}</div>
}

// Carousel content with per-card sliding logic
export function CarouselContent({ children, currentIndex = 0, totalItems }) {
  const translatePercent = currentIndex * (100 / totalItems)

  return (
    <div
      className="flex transition-transform duration-700 ease-in-out gap-4"
      style={{
        transform: `translateX(-${translatePercent}%)`,
      }}
    >
      {children}
    </div>
  )
}

// Each slide item (visible 3 per view on desktop)
export function CarouselItem({ children, className = "" }) {
  return (
    <div className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 ${className}`}>
      {children}
    </div>
  )
}

// Prev button
export function CarouselPrevious({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-xl px-3 py-1 rounded-full shadow z-10"
    >
      ‹
    </button>
  )
}

// Next button
export function CarouselNext({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-xl px-3 py-1 rounded-full shadow z-10"
    >
      ›
    </button>
  )
}
