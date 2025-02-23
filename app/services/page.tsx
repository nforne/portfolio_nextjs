import { ServiceCard } from "@/components/service-card"
import { Code2, Smartphone, Globe, Database } from "lucide-react"

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
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">My Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  )
}

