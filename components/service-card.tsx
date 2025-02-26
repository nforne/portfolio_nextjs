import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  Icon: LucideIcon
}

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="p-3 m-3 relative z-50">
      <Card className="transition-all hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.4)] border-[1.5px] border-black dark:border-white h-full flex flex-col">
        <CardHeader>
          <Icon className="size-12 text-primary" />
          <CardTitle className="mt-4 line-clamp-1">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

