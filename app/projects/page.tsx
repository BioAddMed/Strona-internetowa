// src/app/projects/page.tsx
"use client"

import { JSX, useState, useMemo } from 'react'
import ListaProjektow from '@/components/ListaProjektow'
import Franek2 from '@/components/projekty/Franek2'
import Bioreaktor from '@/components/projekty/Bioreaktor'
import Orteza from '@/components/projekty/Orteza'
import Franek from '@/components/projekty/Franek'
import Bioploter from '@/components/projekty/Bioploter'
import Edugut from '@/components/projekty/Edugut'
import Kampus3D from '@/components/projekty/Kampus3D'
import Aeros from '@/components/projekty/Aeros'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/context/translations'

const PROJECT_DATA = [
  { name: 'Franek 2.0', status: 'ongoing' },
  { name: 'Bioreaktor', status: 'ongoing' },
  { name: 'Orteza', status: 'ongoing' },
  { name: 'Edugut', status: 'ongoing' },
  { name: 'Aeros', status: 'ongoing' },
  { name: 'Franek', status: 'finished' },
  { name: 'Bioploter', status: 'finished' },
  { name: 'Kampus 3D', status: 'finished' }
]

export default function ProjectsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedProject, setSelectedProject] = useState<string>('Franek 2.0')

  const projectGroups = useMemo(() => {
    const ongoing = PROJECT_DATA.filter(p => p.status === 'ongoing').map(p => p.name)
    const finished = PROJECT_DATA.filter(p => p.status === 'finished').map(p => p.name)
    
    return [
      { title: language === 'pl' ? 'Projekty trwające' : 'Ongoing Projects', items: ongoing },
      { title: language === 'pl' ? 'Projekty skończone' : 'Finished Projects', items: finished }
    ]
  }, [language])

  const componentByName: Record<string, JSX.Element> = {
    'Franek 2.0': <Franek2 />,
    'Bioreaktor': <Bioreaktor />,
    'Orteza': <Orteza />,
    'Franek': <Franek />,
    'Bioploter': <Bioploter />,
    'Edugut': <Edugut />,
    'Kampus 3D': <Kampus3D />,
    'Aeros': <Aeros />
  }

  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t.projects.title}</h1>
        <p className="text-slate-600 dark:text-slate-300">
          {t.projects.description}
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        <ListaProjektow
          groups={projectGroups}
          selectedProject={selectedProject}
          onSelect={setSelectedProject}
        />

        <div className="flex-1 min-h-[420px] rounded-2xl border border-slate-200 dark:border-slate-700 bg-linear-to-br from-white via-brand-50 to-accent-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 p-6 overflow-auto">
          {componentByName[selectedProject]}
        </div>
      </div>
    </div>
  )
}


