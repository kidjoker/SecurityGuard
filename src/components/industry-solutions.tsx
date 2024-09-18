'use client'

import Image from 'next/image'
import { Building2, ShoppingBag, Warehouse, GraduationCap, Plane, Landmark, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function IndustrySolutionsComponent() {
  const industries = [
    { 
      title: "Corporate", 
      description: "Comprehensive security solutions for office buildings and corporate campuses.",
      icon: Building2,
      image: "/placeholder.svg?height=200&width=300"
    },
    { 
      title: "Retail", 
      description: "Tailored security measures for stores, malls, and shopping centers.",
      icon: ShoppingBag,
      image: "/placeholder.svg?height=200&width=300"
    },
    { 
      title: "Logistics", 
      description: "Advanced security for warehouses, distribution centers, and supply chains.",
      icon: Warehouse,
      image: "/placeholder.svg?height=200&width=300"
    },
    { 
      title: "Education", 
      description: "Specialized security solutions for schools, colleges, and universities.",
      icon: GraduationCap,
      image: "/placeholder.svg?height=200&width=300"
    },
    { 
      title: "Aviation", 
      description: "High-level security measures for airports and aviation facilities.",
      icon: Plane,
      image: "/placeholder.svg?height=200&width=300"
    },
    { 
      title: "Financial", 
      description: "Robust security systems for banks, credit unions, and financial institutions.",
      icon: Landmark,
      image: "/placeholder.svg?height=200&width=300"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-blue-400">
            Industry-Specific Security Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-xl">
            Tailored security services to meet the unique challenges of various industries.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} security`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <industry.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-blue-600 text-white rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Industry-Specific Solutions?</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Tailored approach for each industry
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Compliance with industry-specific regulations
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Cutting-edge technology integration
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Experienced security professionals
                  </li>
                </ul>
                <Button size="lg" className="mt-6 bg-white text-blue-600 hover:bg-gray-100">
                  Request a Consultation
                </Button>
              </div>
              <div className="md:flex-1 relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Industry-specific security solutions"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Industry Analysis</h3>
              <p className="text-gray-600">We conduct a thorough analysis of your industry's specific security challenges and regulatory requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Custom Solution Design</h3>
              <p className="text-gray-600">Our experts design a tailored security solution that addresses your unique needs and integrates seamlessly with your operations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Implementation & Support</h3>
              <p className="text-gray-600">We implement the solution with minimal disruption and provide ongoing support to ensure optimal performance.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Client Success Stories</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8 border-b pb-8">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Major Retail Chain</h3>
              <p className="text-gray-600 mb-4">
                SecureGuard&apos;s retail-specific security solution has significantly reduced our shrinkage rates and improved overall store safety. Their integrated approach combining surveillance, access control, and trained personnel has been a game-changer for our operations.
              </p>
              <p className="text-sm text-gray-500">- John Doe, Director of Loss Prevention</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">International Airport</h3>
              <p className="text-gray-600 mb-4">
                The aviation security solutions provided by SecureGuard have enhanced our ability to manage complex security challenges. Their expertise in regulatory compliance and cutting-edge technology has been invaluable in maintaining the highest security standards.
              </p>
              <p className="text-sm text-gray-500">- Jane Smith, Head of Airport Security</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}