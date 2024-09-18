'use client'

import Image from 'next/image'
import { ClipboardCheck, Shield, BarChart, FileText, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function RiskAssessmentComponent() {
  const assessmentSteps = [
    { 
      title: "Initial Consultation", 
      description: "We begin with a thorough discussion of your security concerns and objectives.",
      icon: ClipboardCheck
    },
    { 
      title: "On-Site Evaluation", 
      description: "Our experts conduct a comprehensive on-site assessment of your property and assets.",
      icon: Shield
    },
    { 
      title: "Data Analysis", 
      description: "We analyze collected data to identify vulnerabilities and potential threats.",
      icon: BarChart
    },
    { 
      title: "Report & Recommendations", 
      description: "We provide a detailed report with tailored security recommendations.",
      icon: FileText
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-blue-400">
            Risk Assessment Services
          </h1>
          <p className="mt-6 max-w-3xl text-xl">
            Comprehensive security risk assessments to identify vulnerabilities and enhance your overall security posture.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Risk Assessment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <step.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-blue-600 text-white rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Risk Assessment?</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Experienced security professionals
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Customized assessment approach
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Advanced threat analysis techniques
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Actionable recommendations
                  </li>
                </ul>
                <Button size="lg" className="mt-6 bg-white text-blue-600 hover:bg-gray-100">
                  Schedule an Assessment
                </Button>
              </div>
              <div className="md:flex-1 relative h-64 md:h-auto">
                <Image
                  src="/assessment.jpg?height=400&width=600"
                  alt="Security professional conducting risk assessment"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Types of Risk Assessments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Physical Security Assessment</h3>
              <p className="text-gray-600">Evaluate the effectiveness of your physical security measures, including access control, surveillance systems, and perimeter security.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Cybersecurity Risk Assessment</h3>
              <p className="text-gray-600">Identify vulnerabilities in your digital infrastructure and assess your organization&apos;s resilience against cyber threats.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Emergency Preparedness Evaluation</h3>
              <p className="text-gray-600">Review your emergency response plans and procedures to ensure readiness for various crisis scenarios.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Supply Chain Risk Assessment</h3>
              <p className="text-gray-600">Analyze potential vulnerabilities and threats within your supply chain to mitigate risks and ensure business continuity.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Commitment to Excellence</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              At SecureGuard, we are committed to providing thorough and actionable risk assessments. Our team of certified security professionals uses industry-leading methodologies and cutting-edge tools to deliver comprehensive insights into your security posture.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We understand that each organization faces unique security challenges. That&apos;s why we tailor our risk assessment approach to your specific needs, ensuring that you receive relevant and valuable recommendations to enhance your security measures.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Our Expertise
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}