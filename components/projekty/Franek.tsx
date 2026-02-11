"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Franek() {
  const project = PROJECT_DETAILS.find(p => p.id === 'franek')
  if (!project) return null
  return <ProjectDetail project={project} />
}
