// src/components/Projects.tsx
import ProjectCard from './ProjectCard'
import { PROJECTS } from '@/app/context/data'

export default function Projects({ limit }: { limit?: number }) {
  const list = typeof limit === 'number' ? PROJECTS.slice(0, limit) : PROJECTS
  return (
    <div id="projects" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((project, index) => (
        <ProjectCard key={project.title} index={index} {...project} />
      ))}
    </div>
  )
}
