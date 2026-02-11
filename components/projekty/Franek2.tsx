"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Franek2() {
  const project = PROJECT_DETAILS.find(p => p.id === 'franek2')
  if (!project) return null
  return <ProjectDetail project={project} />
}
