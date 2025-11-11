"use client"
// src/components/Header.tsx
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/context/ThemeContext'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [skelevisiblity, setSkelevisiblity] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let rafId = 0
    let running = true

    const process = () => {
      const video = videoRef.current
      const canvas = canvasRef.current
      if (!running) return
      if (!video || !canvas) {
        rafId = requestAnimationFrame(process)
        return
      }

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        rafId = requestAnimationFrame(process)
        return
      }

      const vw = video.videoWidth || 640
      const vh = video.videoHeight || 360
      if (canvas.width !== vw || canvas.height !== vh) {
        canvas.width = vw
        canvas.height = vh
      }

      try {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      } catch (e) {
        // video not ready
        rafId = requestAnimationFrame(process)
        return
      }

      const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = img.data

      // simple chroma key: remove bright green pixels
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        // heuristics: green significantly higher than red/blue and above threshold
        if (g > 100 && g > r * 1.15 && g > b * 1.15) {
          data[i + 3] = 0 // make pixel transparent
        }
      }

      ctx.putImageData(img, 0, 0)
      rafId = requestAnimationFrame(process)
    }

    if (skelevisiblity) {
      // ensure video plays
      videoRef.current?.play().catch(() => {})
      rafId = requestAnimationFrame(process)
    }

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      try {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      } catch (e) {
        // ignore
      }
    }
  }, [skelevisiblity])
  
  return (
    <>
    {skelevisiblity && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={() => setSkelevisiblity(false)}
        role="dialog"
        aria-modal="true"
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative w-full h-full md:h-[80%] max-w-4xl" onClick={(e) => e.stopPropagation()}>
          {/* hidden native video used as source for chroma-key processing */}
          <video
            ref={videoRef}
            src="/stock-footage-skeleton-doing-silly-goofy-dance-on-green-screen-background-comical-spooky-character-with.webm"
            autoPlay
            muted
            playsInline
            className="hidden"
            onEnded={() => setSkelevisiblity(false)}
          />

          {/* canvas where chroma-keyed frames are drawn */}
          <canvas ref={canvasRef} className="w-full h-full rounded-lg" />

          <button
            onClick={() => setSkelevisiblity(false)}
            className="absolute top-2 right-2 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-full p-2 shadow"
            aria-label="Close video"
          >
            ✕
          </button>
        </div>
      </div>
    )}
    <header className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 sticky top-0 z-40 transition-colors">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3">
        <div
          className="overflow-hidden h-12 bg-brand-500 dark:bg-brand-600 flex items-center justify-center text-white font-bold text-xl rounded transition-colors cursor-pointer"
          onClick={() => setSkelevisiblity(true)}
          role="button"
          aria-label="Play intro video"
        >
          {mounted ? (
            resolvedTheme === 'light' ? (
              <img src="/logo.png" alt="KN BioAddMed logo" className="w-full h-full object-contain" loading="lazy" />
            ) : (
              <img src="/logo-dark.png" alt="KN BioAddMed logo (dark)" className="w-full h-full object-contain" loading="lazy" />
            )
          ) : (
            <div className="w-full h-full" />
          )}
        </div>
        </div>
      </motion.div>

      <nav className="hidden md:flex text-sm text-slate-700 dark:text-slate-200 gap-10">
        <Link href="/" className="hover:text-accent-500 transition-colors text-lg">Strona główna</Link>
        <Link href="/projects" className="hover:text-accent-500 transition-colors text-lg">Projekty</Link>
        <Link href="/departments" className="hover:text-accent-500 transition-colors text-lg">Działy</Link>
        <Link href="/management" className="hover:text-accent-500 transition-colors text-lg">Zarząd</Link>
        <Link href="/contact" className="hover:text-accent-500 transition-colors text-lg">Kontakt</Link>
      </nav>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
        aria-label="Menu"
        aria-expanded={open}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700">
          <div className="container mx-auto px-6 py-3 flex flex-col gap-3 text-slate-700 dark:text-slate-200">
            <Link onClick={() => setOpen(false)} href="/" className="py-1">Strona główna</Link>
            <Link onClick={() => setOpen(false)} href="/news" className="py-1">Aktualności</Link>
            <Link onClick={() => setOpen(false)} href="/projects" className="py-1">Projekty</Link>
            <Link onClick={() => setOpen(false)} href="/departments" className="py-1">Działy</Link>
            <Link onClick={() => setOpen(false)} href="/team" className="py-1">Zespół</Link>
            <Link onClick={() => setOpen(false)} href="/management" className="py-1">Zarząd</Link>
            <Link onClick={() => setOpen(false)} href="/contact" className="py-1">Kontakt</Link>
          </div>
        </div>
      )}
    </header>
   </>
  )
}
