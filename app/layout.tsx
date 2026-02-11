// src/app/layout.tsx
import './styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'KN BioAddMed',
  description: 'Koło naukowe BioAddMed — Politechnika Wrocławska'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'system';
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = theme === 'dark' || (theme === 'system' && systemPrefersDark);
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                }
                const language = localStorage.getItem('language') || 'pl';
                document.documentElement.lang = language;
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-neutral-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 antialiased transition-colors">
        <Providers>
          <Header />
          <main className="container mx-auto px-6 py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
