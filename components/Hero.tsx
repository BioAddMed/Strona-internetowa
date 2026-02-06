"use client"
// src/components/Hero.tsx
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <div>
        <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
          KN BioAddMed
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-prose">
          Łączymy inżynierię z medycyną — projekty drukowane w 3D, prototypy medyczne, biofeedback i systemy wbudowane.
        </motion.p>

        <div className="mt-6 flex gap-3">
          <a href="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Zobacz projekty
          </a>
          <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Kontakt
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Członków" value="49" />
          <Stat label="Projekty" value="9" />
          <Stat label="Współprace" value="8" />
        </div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="relative rounded-xl overflow-hidden shadow-lg bg-linear-to-br from-brand-100 to-brand-50 dark:from-brand-900 dark:to-brand-800 aspect-3/2 flex items-center justify-center">
        <img src="/images/bioaddmed_team.jpg" alt="Zespół KN BioAddMed" className="object-cover w-full h-full" />
      </motion.div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm text-center transition-colors">
      <div className="text-lg font-semibold text-brand-500 dark:text-brand-400">{value}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  )
}
