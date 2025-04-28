"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "News", href: "#news" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      className="absolute top-0 z-40 w-full py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-[90%] px-4 sm:px-6 lg:max-w-[1200px]">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-[#4db6ac] to-[#f9a826]">
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
              <span className="text-xl font-bold text-[#1a2e44]">Yield Hive</span>
            </Link>
          </motion.div>

          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[#1a2e44] transition-colors hover:text-[#4db6ac]"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <w3m-button />

          <div className="md:hidden">
            <button
              className="text-[#1a2e44]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="absolute left-0 right-0 z-50 mt-2 bg-white p-4 shadow-lg md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-base font-medium text-[#1a2e44] transition-colors hover:text-[#4db6ac]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <Button className="mt-2 w-full bg-[#1a2e44] text-white hover:bg-[#0f1c2a]">Log In</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
