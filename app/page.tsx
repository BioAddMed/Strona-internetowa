"use client"
// src/app/page.tsx
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import NewsGrid from '@/components/NewsGrid'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/context/translations'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div className="space-y-20">
      <Hero />

      <section
        aria-labelledby="news-title"
        className="rounded-3xl bg-linear-to-br from-accent-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 border border-slate-100 dark:border-slate-800 p-8 shadow-sm space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 id="news-title" className="text-2xl font-semibold text-slate-900 dark:text-white">{t.home.newsTitle}</h2>
        </div>
        <NewsGrid limit={3} />
      </section>
      {/* <CTA /> */}
    </div>
  )
}
