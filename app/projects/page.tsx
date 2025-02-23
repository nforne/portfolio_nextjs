import { ProjectCard } from "@/components/project-card"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      role: "Lead Developer",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      role: "Full Stack Developer",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Next.js.",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
      role: "Frontend Developer",
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}

