"use client"
// src/components/Footer.tsx
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/context/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <footer id="contact" className="mt-20 bg-white dark:bg-slate-800 border-t dark:border-slate-700 transition-colors">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white">KN BioAddMed</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {language === 'pl' ? 'Politechnika Wrocławska' : 'Wrocław University of Science and Technology'}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            {language === 'pl' ? (
              <>
                Budynek B-4 — Laboratoria<br />
                ul. Ignacego Łukasiewicza 5, 50-371 Wrocław
              </>
            ) : (
              <>
                Building B-4 — Laboratories<br />
                Ignacego Łukasiewicza St. 5, 50-371 Wrocław, Poland
              </>
            )}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-slate-900 dark:text-white">{t.footer.quickLinks}</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="/projects" className="hover:underline hover:text-accent-500 transition-colors">{t.nav.projects}</a></li>
            <li><a href="/departments" className="hover:underline hover:text-accent-500 transition-colors">{t.nav.departments}</a></li>
            <li><a href="/management" className="hover:underline hover:text-accent-500 transition-colors">{t.nav.management}</a></li>
            <li><a href="/partners" className="hover:underline hover:text-accent-500 transition-colors">{t.nav.partners}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-slate-900 dark:text-white">{t.nav.contact}</h4>
          <a href="mailto:bioaddmed@pwr.edu.pl" className="mt-3 text-sm text-slate-600 dark:text-slate-400">bioaddmed@pwr.edu.pl</a>
        </div>
      </div>

      <div className="border-t dark:border-slate-700 py-4 text-center text-xs text-slate-400 dark:text-slate-500">{t.footer.copyright}</div>
    </footer>
  )
}
