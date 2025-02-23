"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "@/components/service-card"
import { Code2, Smartphone, Globe, Database } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      Icon: Globe,
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      Icon: Smartphone,
    },
    {
      title: "Backend Development",
      description: "Scalable server solutions and API development.",
      Icon: Database,
    },
    {
      title: "Custom Software",
      description: "Bespoke software solutions tailored to your needs.",
      Icon: Code2,
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
        My Services
      </motion.h1>
      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={containerVariants}>
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

