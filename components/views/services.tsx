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
          My Services
        </motion.h1>
        <motion.div className="grid grid-cols-2 -m-8 relative z-20 p-3 m-5" variants={containerVariants}>
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  
)}

