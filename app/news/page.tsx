"use client"
// src/app/news/page.tsx
import NewsGrid from '@/components/NewsGrid'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/context/translations'

export default function NewsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {t.home.newsTitle}
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {language === 'pl' ? 'Najnowsze wieści z działalności KN BioAddMed.' : 'Latest news from KN BioAddMed activities.'}
        </p>
      </header>

      <NewsGrid />
    </div>
  )
}


