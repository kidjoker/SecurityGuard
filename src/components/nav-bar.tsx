'use client'

import { useState } from 'react'
import Link from "next/link"
import { ChevronDown, Menu, X } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavBarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="TenforSecurity Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">TenforSecurity</span>
            </Link>
          </div>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-4 w-[200px] bg-gray-800">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/personnel"
                            className="block px-4 py-2 text-xl hover:bg-gray-700"
                          >
                            Security Personnel
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/surveillance"
                            className="block px-4 py-2 text-xl hover:bg-gray-700"
                          >
                            Surveillance Systems
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/riskAssessment"
                            className="block px-4 py-2 text-xl hover:bg-gray-700"
                          >
                            Risk Assessment
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/industrySolutions" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
                      Industry Solutions
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/news" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? (
                <div className="relative z-50">
                  <X className="h-8 w-8" />
                </div>
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center">
          <nav className="w-full max-w-md px-6">
            <ul className="space-y-8">
              <li>
                <Link href="/" className="block text-3xl font-semibold text-white  transition-colors" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-2xl font-medium text-white  transition-colors focus:outline-none"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        servicesOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <ul className="space-y-4 pl-4 mt-2">
                      <li>
                        <Link href="/services/personnel" className="block text-xl text-white  transition-colors" onClick={toggleMobileMenu}>
                          Security Personnel
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/surveillance" className="block text-xl text-white  transition-colors" onClick={toggleMobileMenu}>
                          Surveillance Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/riskAssessment" className="block text-xl text-white  transition-colors" onClick={toggleMobileMenu}>
                          Risk Assessment
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link href="/industrySolutions" className="block text-2xl font-medium text-white  transition-colors" onClick={toggleMobileMenu}>
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="block text-2xl font-medium text-white  transition-colors" onClick={toggleMobileMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="block text-2xl font-medium text-white  transition-colors" onClick={toggleMobileMenu}>
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block text-2xl font-medium text-white  transition-colors" onClick={toggleMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}