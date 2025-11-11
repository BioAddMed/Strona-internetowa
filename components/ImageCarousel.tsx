"use client"
import { useEffect, useState, useRef } from 'react'

interface Props {
  images: string[]
  interval?: number // ms
}

export default function ImageCarousel({ images, interval = 4000 }: Props) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (images.length <= 1) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [images.length, interval])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length])

  if (!images || images.length === 0) return null

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`slide-${i}`}
            className={`w-full h-80 object-contain transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
            style={{ display: i === index ? 'block' : 'block' }}
          />
        ))}
      </div>

      {/* controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow"
          >
            ›
          </button>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-400' : 'bg-slate-300 dark:bg-slate-600'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
