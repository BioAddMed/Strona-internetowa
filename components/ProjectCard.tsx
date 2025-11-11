"use client"
// src/components/ProjectCard.tsx
import { motion } from 'framer-motion'

const LIGHT_BACKGROUNDS = [
  'from-white via-white to-accent-50',
  'from-white via-white to-brand-50',
  'from-white via-white to-emerald-50',
  'from-white via-white to-rose-50'
]

export default function ProjectCard({
  title,
  tag,
  excerpt,
  index = 0
}: {
  title: string
  tag: string
  excerpt: string
  index?: number
}) {
  const gradient = LIGHT_BACKGROUNDS[index % LIGHT_BACKGROUNDS.length]

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`bg-gradient-to-br ${gradient} dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow transition-colors`}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <span className="text-xs px-2 py-1 rounded bg-accent-100 text-accent-700">{tag}</span>
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <a className="text-sm text-accent-600 hover:text-accent-700" href="#">
          Szczegóły →
        </a>
        <div className="text-xs text-slate-500 dark:text-slate-400">Aktualne</div>
      </div>
    </motion.article>
  )
}
