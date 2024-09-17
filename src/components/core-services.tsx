'use client'

import { Shield, Camera, FileSearch } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CoreServicesComponent() {
  const services = [
    {
      title: "Security Personnel Deployment",
      description: "Highly trained security professionals to protect your assets and ensure safety.",
      icon: Shield,
    },
    {
      title: "Surveillance Installation",
      description: "State-of-the-art surveillance systems for comprehensive monitoring and protection.",
      icon: Camera,
    },
    {
      title: "Risk Assessment",
      description: "Thorough evaluation of potential security risks and tailored mitigation strategies.",
      icon: FileSearch,
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}