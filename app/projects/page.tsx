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
import { getProjectDetails } from '@/app/context/data'

const DEFAULT_PROJECT_ID = getProjectDetails('pl').find((project) => project.status === 'ongoing')?.id ?? 'franek2'

export default function ProjectsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const projectDetails = useMemo(() => getProjectDetails(language), [language])
  const [selectedProject, setSelectedProject] = useState<string>(DEFAULT_PROJECT_ID)

  const projectGroups = useMemo(() => {
    const ongoing = projectDetails
      .filter((project) => project.status === 'ongoing')
      .map((project) => ({ id: project.id, label: project.title }))
    const finished = projectDetails
      .filter((project) => project.status === 'finished')
      .map((project) => ({ id: project.id, label: project.title }))
    
    return [
      { title: t.projects.ongoing, items: ongoing },
      { title: t.projects.finished, items: finished }
    ]
  }, [projectDetails, t.projects.finished, t.projects.ongoing])

  const componentById: Record<string, JSX.Element> = {
    franek2: <Franek2 />,
    bioreaktor: <Bioreaktor />,
    orteza: <Orteza />,
    franek: <Franek />,
    bioploter: <Bioploter />,
    edugut: <Edugut />,
    kampus3d: <Kampus3D />,
    aeros: <Aeros />
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

        <div className="flex-1 min-h-105 rounded-2xl border border-slate-200 dark:border-slate-700 bg-linear-to-br from-white via-brand-50 to-accent-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 p-6 overflow-auto">
          {componentById[selectedProject] ?? componentById[DEFAULT_PROJECT_ID]}
        </div>
      </div>
    </div>
  )
}


