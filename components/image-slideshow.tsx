"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSlideshowProps {
  images: string[]
}

export default function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    if (images.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0a192f] text-[#8892b0]">
        <p>Loading images...</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-white/50 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Slide Counter */}
      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
