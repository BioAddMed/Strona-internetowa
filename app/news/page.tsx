// src/app/news/page.tsx
import NewsGrid from '@/components/NewsGrid'

export default function NewsPage() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Aktualności
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Najnowsze wieści z działalności KN BioAddMed.
        </p>
      </header>

      <NewsGrid />
    </div>
  )
}


