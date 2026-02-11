"use client"
import Management from "@/components/Management";
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/context/translations'

export default function ManagementPage() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {t.management.title}
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {t.management.subtitle}
        </p>
      </header>
      <Management />
    </div>
  )
}