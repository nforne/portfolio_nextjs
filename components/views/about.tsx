"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { PDFViewer } from "@/components/pdf-viewer"

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
  const [showResume, setShowResume] = useState(false)

  return (
    <div className="relative h-[calc(100vh-69px)] overflow-auto scrollbar-none">
      <AnimatePresence mode="wait">
        {showResume ? (
          // Resume View
          <motion.div
            key="resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-[calc(100vh-69px)] pt-5 overflow-y-auto scrollbar-none"
            style={{
              maxWidth: "calc(100vw - 116px)",
              marginLeft: "calc(48px + 5px)",
              marginRight: "58px",
            }}
          >
            <PDFViewer url="/resume.pdf" onClose={() => setShowResume(false)} />
          </motion.div>
        ) : (
          // Regular About View
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
            key="about"
          >
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center">
                <motion.div className="space-y-4" variants={itemVariants}>
                  <h1 className="text-2xl font-bold sm:text-3xl">About Me</h1>
                  <motion.div
                    className="relative aspect-square overflow-hidden rounded-xl md:aspect-[4/3] max-h-[400px] border-[1.5px] border-black dark:border-white ml-5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image src="/placeholder.svg" alt="Your Name" fill className="object-cover" priority />
                  </motion.div>
                </motion.div>
                <motion.div className="space-y-4 flex flex-col justify-center" variants={itemVariants}>
                  <h2 className="text-xl font-bold sm:text-2xl">Your Name</h2>
                  <p className="text-muted-foreground text-sm sm:text-base text-justify">
                    I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly
                    websites and applications. With expertise in modern web technologies including React, Next.js, and
                    Node.js, I help businesses and individuals bring their digital visions to life.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base text-justify">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing my knowledge through technical writing and mentoring.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => setShowResume(true)}
                      className="border-[1.5px] border-black dark:border-white"
                    >
                      <FileText className="mr-2 size-4" />
                      View Resume
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

