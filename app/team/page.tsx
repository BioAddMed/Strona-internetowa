"use client"
// src/app/team/page.tsx
import Team from '@/components/Team'
import { useLanguage } from '@/app/context/LanguageContext'

export default function TeamPage() {
  const { language } = useLanguage()
  
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {language === 'pl' ? 'Zespół' : 'Team'}
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {language === 'pl' ? 'Ludzie tworzący społeczność BioAddMed.' : 'People building the BioAddMed community.'}
        </p>
      </header>
      <Team />
    </div>
  )
}


