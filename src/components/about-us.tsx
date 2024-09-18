'use client'

import Image from 'next/image'
import { Shield, Users, Award, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function AboutUsComponent() {
  const coreValues = [
    { 
      title: "Integrity", 
      description: "We uphold the highest ethical standards in all our operations.",
      icon: Shield
    },
    { 
      title: "Excellence", 
      description: "We strive for excellence in every aspect of our service delivery.",
      icon: Award
    },
    { 
      title: "Innovation", 
      description: "We continuously innovate to stay ahead of evolving security challenges.",
      icon: Zap
    },
    { 
      title: "Client-Centric", 
      description: "We put our clients' needs at the forefront of everything we do.",
      icon: Users
    },
  ]

  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/person1.jpg",
      bio: "With over 20 years of experience in the security industry, John founded SecureGuard with a vision to revolutionize security services."
    },
    {
      name: "Jane Smith",
      position: "Chief Operations Officer",
      image: "/person2.jpg",
      bio: "Jane brings 15 years of operational expertise, ensuring our services are delivered with utmost efficiency and effectiveness."
    },
    {
      name: "Mike Johnson",
      position: "Head of Technology",
      image: "/person3.jpg",
      bio: "Mike leads our technology initiatives, driving innovation in our security solutions and staying ahead of cyber threats."
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-blue-600">
            About SecureGuard
          </h1>
          <p className="mt-6 max-w-3xl text-xl">
            Protecting what matters most with innovative security solutions and unparalleled expertise.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Our Story</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="md:flex items-center">
              <div className="md:flex-1 mb-6 md:mb-0 md:mr-8">
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2005, SecureGuard has grown from a small local security firm to a leading provider of comprehensive security solutions. Our journey has been driven by a passion for protecting people, assets, and information in an increasingly complex world.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we serve clients across various industries, from corporate enterprises to educational institutions, leveraging cutting-edge technology and a team of highly trained professionals to deliver unparalleled security services.
                </p>
              </div>
              <div className="md:flex-1">
                <Image
                  src="/headquarter.png"
                  alt="SecureGuard headquarters"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <value.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-blue-600 text-white rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                <p className="mb-6">
                  We&apos;re always looking for talented individuals who are passionate about security and committed to excellence. Join us in our mission to create a safer world.
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  View Career Opportunities
                </Button>
              </div>
              <div className="md:flex-1 relative h-64 md:h-auto">
                <Image
                  src="/aboutus.jpg"
                  alt="SecureGuard team"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Our Certifications</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Image
                  src="/27001.png"
                  alt="ISO 27001 Certified"
                  width={200}
                  height={200}
                  className="w-[200px] h-[200px] object-contain"
                />
                <p className="mt-2 text-center text-blue-600">ISO 27001 Certified</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/asis.png"
                  alt="ASIS Certified"
                  width={200}
                  height={200}
                  className="w-[200px] h-[200px] object-contain"
                />
                <p className="mt-2 text-center text-blue-600">ASIS Certified</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/nsit.png"
                  alt="NIST Compliant"
                  width={200}
                  height={200}
                  className="w-[200px] h-[200px] object-contain"
                />
                <p className="mt-2 text-center text-blue-600">NIST Compliant</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/gdpr.png"
                  alt="GDPR Compliant"
                  width={200}
                  height={200}
                  className="w-[200px] h-[200px] object-contain"
                />
                <p className="mt-2 text-center text-blue-600">GDPR Compliant</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}