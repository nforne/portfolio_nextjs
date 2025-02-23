import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">About Me</h1>
          <div className="relative aspect-square overflow-hidden rounded-xl md:aspect-[4/3]">
            <Image src="/placeholder.svg" alt="Your Name" fill className="object-cover" priority />
          </div>
        </div>
        <div className="space-y-4">
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
          <Button asChild>
            <Link href="/resume.pdf" target="_blank">
              <FileText className="mr-2 size-4" />
              View Resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

