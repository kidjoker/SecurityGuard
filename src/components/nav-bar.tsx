'use client'

import Link from "next/link"
import { Shield } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavBarComponent() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="TenforSecurity Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">TenforSecurity</span>
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 w-[200px] bg-gray-800">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/personnel"
                          className="block px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          Security Personnel
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/surveillance"
                          className="block px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          Surveillance Systems
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/risk-assessment"
                          className="block px-4 py-2 text-sm hover:bg-gray-700"
                        >
                          Risk Assessment
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/industry-solutions" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    Industry Solutions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  )
}