"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  Icon: LucideIcon
}

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <Card className="transition-all hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.4)] border-[1.5px] border-black dark:border-white h-full flex flex-col">
      <CardHeader className="p-4">
        <Icon className="size-10 sm:size-12 text-primary" />
        <CardTitle className="mt-4 text-lg sm:text-xl line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0">
        <CardDescription className="text-sm sm:text-base line-clamp-3">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

