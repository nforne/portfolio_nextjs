"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  role: string
}

export function ProjectCard({ title, description, image, link, role }: ProjectCardProps) {
  return (
    <Card className="transition-all hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.4)] border-[1.5px] border-black dark:border-white h-full flex flex-col">
      <CardHeader className="space-y-3 p-4">
        <div className="relative aspect-video overflow-hidden rounded-lg border-[1.5px] border-black dark:border-white">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardTitle className="text-lg sm:text-xl line-clamp-1">{title}</CardTitle>
        <CardDescription className="text-sm line-clamp-1">{role}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 pt-0">
        <p className="text-muted-foreground text-sm sm:text-base line-clamp-2 flex-1">{description}</p>
        <Button variant="outline" asChild className="mt-4 w-full border-[1.5px] border-black dark:border-white">
          <Link href={link} target="_blank">
            View Project
            <ExternalLink className="ml-2 size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

