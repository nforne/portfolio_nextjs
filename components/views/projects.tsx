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
      className="container px-10 py-5 rounded-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-3xl font-bold mb-8" variants={cardVariants}>
        My Projects
      </motion.h1>
      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

