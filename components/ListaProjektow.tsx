"use client"
// src/components/ListaProjektow.tsx
import { useLanguage } from '@/app/context/LanguageContext'

interface ProjectGroup {
  title: string
  items: {
    id: string
    label: string
  }[]
}

export default function ListaProjektow({
  groups,
  selectedProject,
  onSelect
}: {
  groups: ProjectGroup[]
  selectedProject: string
  onSelect: (name: string) => void
}) {
  const { language } = useLanguage()
  
  return (
    <aside className="w-full md:w-72 shrink-0">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {language === 'pl' ? 'Lista projektów' : 'Project list'}
          </h2>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="px-5 py-2 bg-slate-50 dark:bg-slate-900">
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {group.title}
                </h3>
              </div>
              <ul className="divide-y divide-slate-100 dark:divide-slate-700">
                {group.items.map((item) => {
                  const active = item.id === selectedProject
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => onSelect(item.id)}
                        className={`w-full text-left px-5 py-3 transition-colors ${
                          active
                            ? 'bg-accent-50 text-slate-900 dark:bg-slate-700/50 dark:text-white'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-700/30 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}


