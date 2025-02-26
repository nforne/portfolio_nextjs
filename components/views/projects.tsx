"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

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
    <motion.div
      className="h-[calc(100vh-69px)] pt-5 overflow-y-auto scrollbar-none"
      style={{
        maxWidth: "calc(100vw - 116px)",
        marginLeft: "calc(48px + 5px)",
        marginRight: "58px",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h1 className="text-2xl font-bold mb-6 sm:text-3xl px-3" variants={cardVariants}>
          My Projects
        </motion.h1>
        <motion.div className="grid grid-cols-2 -m-8 relative z-20 p-3 m-5" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

