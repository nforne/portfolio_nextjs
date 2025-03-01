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
      image: "/placeholder.svg?height=225&width=400",
      link: "#",
      role: "Lead Developer",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=225&width=400",
      link: "#",
      role: "Full Stack Developer",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Next.js.",
      image: "/placeholder.svg?height=225&width=400",
      link: "#",
      role: "Frontend Developer",
    },
  ]

  return (
    <motion.div
      className="min-h-[calc(100vh-74px)] overflow-y-auto scrollbar-none flex items-center justify-center"
      style={{
        maxWidth: "calc(100vw - 116px)",
        margin: "0 auto",
        paddingLeft: "calc(48px + 5px)",
        paddingRight: "58px",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-7xl mx-auto py-8">
        <div className="space-y-6 px-4 flex flex-col">
          {/* Header */}
          <motion.h1 className="text-2xl font-bold sm:text-3xl md:text-4xl" variants={cardVariants}>
            My Projects
          </motion.h1>
          {/* Content Container */}
          <motion.div
            className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative w-full"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className={index >= projects.length - (projects.length % 3 || 3) ? "mb-[70px]" : ""} // Margin for last row
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

