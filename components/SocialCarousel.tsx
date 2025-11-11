// src/components/SocialCarousel.tsx
"use client"

import Link from 'next/link'

type Source = 'facebook' | 'instagram'

const INSTAGRAM_USERNAME = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'bioaddmed'
const FACEBOOK_PAGE_URL = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL || 'https://www.facebook.com/KNBioaddmed'
const FACEBOOK_PLUGIN_SRC = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  FACEBOOK_PAGE_URL
)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`

export default function SocialCarousel({ source }: { source: Source }) {
  if (source === 'facebook') {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden flex flex-col justify-center">
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Facebook</h3>
          <Link
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 transition-colors"
          >
            Zobacz profil →
          </Link>
        </div>
        <div className="flex-1 overflow-hidden flex items-center justify-center mx-auto" style={{ minHeight: '600px', minWidth: '500px' }}>
          <iframe
            src={FACEBOOK_PLUGIN_SRC}
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ border: 'none', overflow: 'hidden' }}
            allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
            title="Facebook feed"
          />
        </div>
      </div>
    )
  }

  // Instagram - używamy prostego iframe embed (darmowy, nie wymaga business account)
  // Instagram nie ma oficjalnego embed feedu jak Facebook, więc używamy prostego rozwiązania
  // z Instagram Feed Embed Generator lub podobnego narzędzia
  const INSTAGRAM_EMBED_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/embed/`
  
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden flex flex-col">
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Instagram</h3>
        <Link
          href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 transition-colors"
        >
          Zobacz profil →
        </Link>
      </div>
      <div className="flex-1 overflow-hidden" style={{ minHeight: '600px' }}>
        <iframe
          src={INSTAGRAM_EMBED_URL}
          width="100%"
          height="600"
          className="w-full"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
          title="Instagram feed"
          loading="lazy"
        />
      </div>
    </div>
  )
}


