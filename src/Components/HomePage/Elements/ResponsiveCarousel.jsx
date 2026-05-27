import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"

export default function ResponsiveCarousel() {
  const items = [1, 2, 3, 4, 5, 6]
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  // Auto slide every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3000)
    return () => clearTimeout(timeoutRef.current)
  }, [currentIndex])

  return (
    <Carousel className="w-full max-w-5xl mx-auto relative">
      <CarouselContent currentIndex={currentIndex} totalItems={items.length}>
        {items.map((item) => (
          <CarouselItem key={item}>
            <div className="p-2">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-gray-50">
                  <span className="text-3xl font-semibold text-gray-700">{item}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious onClick={prevSlide} />
      <CarouselNext onClick={nextSlide} />
    </Carousel>
  )
}
