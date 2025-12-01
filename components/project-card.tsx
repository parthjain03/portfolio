interface Project {
  id: number
  title: string
  description: string
  year: string
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group border-l-2 border-accent/30 hover:border-accent/80 pl-8 py-6 transition-colors cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <span className="text-sm font-medium text-accent/60">{project.year}</span>
      </div>

      <p className="text-foreground/70 leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent/80 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-sm text-accent/60 group-hover:text-accent transition-colors">
        Click to view details →
      </p>
    </div>
  )
}
