"use client"
// src/components/Team.tsx
import { getTeam } from '@/app/context/data'
import { useLanguage } from '@/app/context/LanguageContext'

export default function Team() {
  const { language } = useLanguage()
  const TEAM = getTeam(language)
  
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {TEAM.map(p => (
        <div key={p.name} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center shadow-sm transition-colors">
          <div className="mx-auto w-20 h-20 rounded-full bg-neutral-100 dark:bg-slate-700 mb-4 flex items-center justify-center">
            {/* Tu można wstawić avatar: public/images/team/<slug>.jpg */}
            <span className="text-xl text-slate-400 dark:text-slate-300">{p.name.split(' ').map(n=>n[0]).join('')}</span>
          </div>
          <div className="font-medium text-slate-900 dark:text-white">{p.name}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{p.role}</div>
        </div>
      ))}
    </div>
  )
}
