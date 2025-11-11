// src/app/projects/page.tsx
"use client"

import { JSX, useState } from 'react'
import ListaProjektow from '@/components/ListaProjektow'
import Franek2 from '@/components/projekty/Franek2'
import Bioreaktor from '@/components/projekty/Bioreaktor'
import Orteza from '@/components/projekty/Orteza'
import Franek from '@/components/projekty/Franek'
import Bioploter from '@/components/projekty/Bioploter'
import Edugut from '@/components/projekty/Edugut'
import Kampus3D from '@/components/projekty/Kampus3D'

const PROJECT_NAMES = [
  'Franek 2.0',
  'Bioreaktor',
  'Orteza',
  'Franek',
  'Bioploter',
  'Edugut',
  'Kampus 3D'
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string>('Franek 2.0')

  const componentByName: Record<string, JSX.Element> = {
    'Franek 2.0': <Franek2 />,
    'Bioreaktor': <Bioreaktor />,
    'Orteza': <Orteza />,
    'Franek': <Franek />,
    'Bioploter': <Bioploter />,
    'Edugut': <Edugut />,
    'Kampus 3D': <Kampus3D />
  }

  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Nasze projekty</h1>
        <p className="text-slate-600 dark:text-slate-300">Wybierz projekt z listy po lewej, aby zobaczyć szczegóły.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        <ListaProjektow
          items={PROJECT_NAMES}
          selectedProject={selectedProject}
          onSelect={setSelectedProject}
        />

        <div className="flex-1 min-h-[420px] rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white via-brand-50 to-accent-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 p-6 overflow-auto">
          {componentByName[selectedProject]}
        </div>
      </div>
    </div>
  )
}


