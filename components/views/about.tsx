"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function About() {
  return (
    <motion.div
      className="container px-10 py-5 rounded-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <motion.div className="space-y-4" variants={itemVariants}>
          <h1 className="text-3xl font-bold">About Me</h1>
          <motion.div
            className="relative aspect-square overflow-hidden rounded-xl md:aspect-[4/3]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/placeholder.svg" alt="Your Name" fill className="object-cover" priority />
          </motion.div>
        </motion.div>
        <motion.div className="space-y-4" variants={itemVariants}>
          <h2 className="text-2xl font-bold">Your Name</h2>
          <p className="text-muted-foreground">
            I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly websites and
            applications. With expertise in modern web technologies including React, Next.js, and Node.js, I help
            businesses and individuals bring their digital visions to life.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through technical writing and mentoring.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <FileText className="mr-2 size-4" />
                View Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

