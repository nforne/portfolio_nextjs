"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Home() {
  return (
    <motion.div
      className="container flex flex-col items-center justify-center text-center h-[calc(100vh-69px)]"
      style={{
        maxWidth: "calc(100vw - 116px)",
        marginLeft: "calc(48px + 5px)",
        marginRight: "58px",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(118, 171, 174, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(118, 171, 174, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(118, 171, 174, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(118, 171, 174, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.h1
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
        variants={itemVariants}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="mx-auto max-w-[600px] mt-4 text-muted-foreground text-sm md:text-base lg:text-lg"
        variants={itemVariants}
      >
        I'm a passionate developer creating innovative solutions for the web. Let's build something amazing together.
      </motion.p>
      <motion.div className="mt-6" variants={itemVariants}>
        <Button size="lg" className="group border-[1.5px] border-black dark:border-white">
          Explore My Work
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </motion.div>
  )
}

