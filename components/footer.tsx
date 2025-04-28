"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerItems = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#services" },
        { name: "Browse Properties", href: "#investments" },
        { name: "Pricing", href: "#" },
        { name: "List Your Property", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#news" },
        { name: "FAQ", href: "#" },
        { name: "Support", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Disclaimers", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-[#1a2e44] text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-[#4db6ac] to-[#f9a826]">
                <svg
                  viewBox="0 0 24 24"
                  className="absolute inset-0 h-full w-full p-1 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span className="ml-2 text-2xl font-bold text-white">Yield Hive</span>
            </Link>
            <p className="mb-4 max-w-md text-gray-400">
              The decentralized platform that tokenizes rental income from real estate and farmland, enabling fractional
              ownership, automated payouts, and passive earnings.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-[#4db6ac]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-[#4db6ac]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-[#4db6ac]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-[#4db6ac]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-[#4db6ac]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {footerItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white">{item.title}</h3>
              <ul className="space-y-2">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 transition-colors hover:text-[#4db6ac]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#0f1c2a] pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">© {currentYear} Yield Hive. All rights reserved.</p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <Link href="#" className="hover:text-[#4db6ac]">
                Terms
              </Link>
              <Link href="#" className="hover:text-[#4db6ac]">
                Privacy
              </Link>
              <Link href="#" className="hover:text-[#4db6ac]">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
