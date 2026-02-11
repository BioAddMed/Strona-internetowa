"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Orteza() {
  const project = PROJECT_DETAILS.find(p => p.id === 'orteza')
  if (!project) return null
  return <ProjectDetail project={project} />
}
