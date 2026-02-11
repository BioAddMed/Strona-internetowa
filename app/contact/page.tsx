"use client"
// src/app/contact/page.tsx
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/context/translations'

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {t.contact.title}
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {t.contact.subtitle}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{t.contact.email}</h2>
            <p className="text-slate-600 dark:text-slate-300">
              <a className="text-brand-600 dark:text-brand-400 hover:underline" href="mailto:bioaddmed@pwr.edu.pl">
                bioaddmed@pwr.edu.pl
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{t.contact.findUs}</h2>
            <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
              {t.contact.address}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{t.contact.socialMedia}</h2>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/bioaddmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-brand-100 dark:hover:bg-brand-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/bioaddmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-brand-100 dark:hover:bg-brand-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/bioaddmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-brand-100 dark:hover:bg-brand-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
          <Image
            src="/Kontakt.png"
            alt="Kontakt"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}


