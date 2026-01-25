"use client"
import { ExternalLink, Github, Download } from "lucide-react"
import ImageSlideshow from "./image-slideshow"

interface Project {
  id: string
  emoji: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  techStack: string[]
  links: {
    live?: string
    github?: string
    demo?: string
    figma?: string
    prototype?: string
    download?: string
  }
  image?: string
  imageAlt: string
  isSlideshow?: boolean
  slideshowImages?: string[]
}

interface ProjectCardProps {
  project: Project
  isReversed: boolean
  isActive: boolean
}

export default function ProjectCard({ project, isReversed, isActive }: ProjectCardProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ${
          isActive ? "opacity-100 translate-y-0" : "opacity-70 translate-y-4"
        }`}
      >
        {/* Image */}
        <div className={`${isReversed ? "lg:order-2" : ""}`}>
          <div className="aspect-video bg-[#122B47] border border-[rgba(94,234,212,0.15)] rounded-xl overflow-hidden">
            {project.isSlideshow ? (
              <ImageSlideshow images={project.slideshowImages || []} />
            ) : (
              <img
                src={
                  project.image || `/.jpg?key=bsjaw&height=400&width=600&query=${encodeURIComponent(project.imageAlt)}`
                }
                alt={project.imageAlt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Content */}
        <div className={`space-y-6 ${isReversed ? "lg:order-1" : ""}`}>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{project.emoji}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
            </div>
            <p className="text-primary font-medium">{project.subtitle}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Highlights</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#0F243D] text-foreground text-xs rounded-full border border-[rgba(94,234,212,0.15)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary hover:text-[#0a192f] transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 inline mr-2" />
                Live App
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-muted-foreground border-2 border-primary rounded-lg font-medium hover:bg-primary hover:text-[#0a192f] transition-all duration-300"
              >
                <Github className="w-4 h-4 inline mr-2" />
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-muted-foreground border-2 border-primary rounded-lg font-medium hover:bg-primary hover:text-[#0a192f] transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 inline mr-2" />
                Demo Video
              </a>
            )}
            {project.links.figma && (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-[#0a192f] rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 inline mr-2" />
                View Design
              </a>
            )}
            {project.links.prototype && (
              <a
                href={project.links.prototype}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-muted-foreground border-2 border-primary rounded-lg font-medium hover:bg-primary hover:text-[#0a192f] transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 inline mr-2" />
                Prototype
              </a>
            )}
            {project.links.download && (
              <a
                href={project.links.download}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-[#0a192f] rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
