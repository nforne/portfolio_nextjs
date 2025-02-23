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
    <Card className="transition-all hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.4)] border-green-500/20">
      <CardHeader>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="outline" asChild className="mt-4">
          <Link href={link} target="_blank">
            View Project
            <ExternalLink className="ml-2 size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

