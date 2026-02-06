'use client'

import { SPONSORS } from '@/app/context/data'
import { Mail, Phone, Globe } from 'lucide-react'

export default function Sponsors() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {SPONSORS.map((sponsor) => (
        <div
          key={sponsor.name}
          className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-colors bg-white dark:bg-slate-900"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
            {sponsor.name}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            {sponsor.description}
          </p>

          <div className="space-y-3">
            {sponsor.website && sponsor.website.length > 0 && (
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {sponsor.website.map((url, idx) => (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm break-all"
                    >
                      {url.replace(/^https?:\/\/(www\.)?/, '')}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {sponsor.email && (
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                <div className="flex flex-col gap-1">
                  {sponsor.email.split('/').map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email.trim()}`}
                      className="text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 text-sm break-all"
                    >
                      {email.trim()}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
