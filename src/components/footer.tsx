'use client'

import Link from "next/link"
import { Shield } from "lucide-react"

export function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold">SecureGuard</h3>
            </div>
            <p className="text-xl">Protecting Your Assets, Always by Your Side</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-xl space-y-2">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors duration-200">Services</Link></li>
              <li><Link href="/industry-solutions" className="hover:text-blue-400 transition-colors duration-200">Industry Solutions</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <address className="text-xl not-italic">
              <p>123 Security Street, Safetown, ST 12345</p>
              <p>Phone: <a href="tel:+11234567890" className="hover:text-blue-400 transition-colors duration-200">(123) 456-7890</a></p>
              <p>Email: <a href="mailto:info@secureguard.com" className="hover:text-blue-400 transition-colors duration-200">info@secureguard.com</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 text-center text-sm sm:text-base border-t border-gray-800 pt-8">
          <p>&copy; {new Date().getFullYear()} SecureGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}