'use client'

import Image from 'next/image'
import { Shield, Users, Clock, Award, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ServicesPersonnelComponent() {
  const services = [
    { 
      title: "Armed Security Guards", 
      description: "Highly trained armed personnel for high-risk environments and valuable asset protection.",
      icon: Shield
    },
    { 
      title: "Unarmed Security Officers", 
      description: "Professional security presence for various settings, from corporate offices to retail environments.",
      icon: Users
    },
    { 
      title: "24/7 Patrol Services", 
      description: "Round-the-clock mobile patrol units ensuring comprehensive property protection.",
      icon: Clock
    },
    { 
      title: "Executive Protection", 
      description: "Specialized security details for high-profile individuals and corporate executives.",
      icon: Award
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-blue-400">
            Security Personnel Services
          </h1>
          <p className="mt-6 max-w-3xl text-xl">
            Our highly trained security professionals are ready to protect your assets and ensure safety in any environment.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Personnel Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-blue-600 text-white rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Security Personnel?</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Rigorous training and certification
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Background-checked and vetted professionals
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    24/7 availability and rapid response times
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Customized security solutions for your needs
                  </li>
                </ul>
                <Button size="lg" className="mt-6 bg-white text-blue-600 hover:bg-gray-100">
                  Request a Quote
                </Button>
              </div>
              <div className="md:flex-1 relative h-64 md:h-auto">
                <Image
                  src="/quote.jpg?height=400&width=600"
                  alt="Security personnel in action"
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Commitment to Excellence</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              At SecureGuard, we are committed to providing the highest quality security personnel services. Our team undergoes continuous training to stay ahead of emerging threats and security challenges.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We work closely with our clients to understand their unique security needs and develop tailored solutions that provide peace of mind and uncompromising protection.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Our Training
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}