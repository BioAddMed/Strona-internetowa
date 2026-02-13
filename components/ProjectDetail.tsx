"use client"
import { useEffect, useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel'
import { useLanguage } from '@/app/context/LanguageContext'
import { translations } from '@/app/context/translations'
import type { ProjectDetail as ProjectDetailType } from '@/app/context/data'

type Props = {
  project: ProjectDetailType
  children?: React.ReactNode
}

export default function ProjectDetail({ project, children }: Props) {
  const { language } = useLanguage()
  const t = translations[language]
  const [images, setImages] = useState<string[]>([])
  
  useEffect(() => {
    let mounted = true
    fetch(`/api/images?folder=${encodeURIComponent(project.imageFolder)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return
        setImages(data.images || [])
      })
      .catch(() => {
        if (!mounted) return
        setImages([])
      })
    return () => { mounted = false }
  }, [project.imageFolder])

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold flex-1">{project.title}</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        <span className="font-medium">{t.projects.coordinator}:</span> {project.coordinator}
      </p>
      <div className="grid">
        {images.length > 0 ? (
          <div className="p-4">
            <ImageCarousel images={images} />
          </div>
        ) : (
          <img 
            src="https://placehold.co/200x200" 
            alt="Placeholder" 
            className="rounded-lg m-10 mx-auto" 
          />
        )}
        {project.description && (
          <p className="text-slate-700 dark:text-slate-300">
            {project.description}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}
