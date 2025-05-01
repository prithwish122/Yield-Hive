"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [glowPosition, setGlowPosition] = useState(0)

  // Animation for the glowing border effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowPosition((prev) => (prev >= 100 ? 0 : prev + 0.5))
    }, 30)
    return () => clearInterval(interval)
  }, [])

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

  // Calculate the position of the glow along the border
  const getGlowStyles = () => {
    const perimeter = 2 * (100 + 48) // Approximate perimeter of the navbar (width + height) * 2
    const position = (glowPosition / 100) * perimeter

    // Top edge
    if (position < 100) {
      return {
        top: 0,
        left: `${position}%`,
        transform: "translateX(-50%) translateY(-50%)",
      }
    }
    // Right edge
    else if (position < 100 + 48) {
      return {
        top: `${position - 100}%`,
        right: 0,
        transform: "translateX(50%) translateY(-50%)",
      }
    }
    // Bottom edge
    else if (position < 2 * 100 + 48) {
      return {
        bottom: 0,
        right: `${100 - (position - 100 - 48)}%`,
        transform: "translateX(50%) translateY(50%)",
      }
    }
    // Left edge
    else {
      return {
        bottom: `${100 - (position - 2 * 100 - 48)}%`,
        left: 0,
        transform: "translateX(-50%) translateY(50%)",
      }
    }
  }

  return (
    <motion.header
      className="fixed top-0 z-40 w-full px-4 py-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-[45%] lg:max-w-[55%]">
        <motion.div
          className="flex items-center justify-between rounded-full bg-white shadow-md px-6 py-3 relative overflow-hidden"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated border glow effect */}
          <div
            className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-emerald-300 to-teal-400 blur-md z-0 pointer-events-none"
            style={getGlowStyles()}
          />

          {/* Subtle pulsing border */}
          <motion.div
            className="absolute inset-0 rounded-full border border-emerald-200 z-0"
            animate={{
              boxShadow: [
                "0 0 0px rgba(16, 185, 129, 0)",
                "0 0 8px rgba(16, 185, 129, 0.3)",
                "0 0 0px rgba(16, 185, 129, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />

          <motion.div
            className="flex items-center z-10"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-[#4db6ac] to-[#f9a826]"
                whileHover={{ rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.svg
                  viewBox="0 0 24 24"
                  className="absolute inset-0 h-full w-full p-1 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.polyline
                    points="9 22 9 12 15 12 15 22"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  />
                </motion.svg>
              </motion.div>
              <div className="flex flex-col">
                <motion.span
                  className="text-xl font-bold text-[#1a2e44]"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Yield Hive
                </motion.span>
                <motion.span
                  className="text-xs text-[#4db6ac]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Fractional Real Estate
                </motion.span>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden items-center space-x-8 md:flex z-10">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item.href}
                  className="group text-sm font-medium text-[#1a2e44] transition-colors hover:text-[#4db6ac] relative"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4db6ac] to-[#f9a826] group-hover:w-full transition-all duration-300"
                    layoutId={`underline-${index}`}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-3 z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <appkit-button balance="hide" />
            </motion.div>
            <div className="md:hidden">
              <motion.button
                className="text-[#1a2e44]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                whileHover={{ scale: 1.1, rotate: isOpen ? 0 : 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="absolute left-0 right-0 z-50 mx-auto mt-2 max-w-[95%] rounded-xl bg-white p-4 shadow-lg md:hidden"
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          transition={{ duration: 0.3, type: "spring" }}
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
                  className="group text-base font-medium text-[#1a2e44] transition-colors hover:text-[#4db6ac] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span className="w-0 h-0.5 bg-[#4db6ac] mr-2 group-hover:w-4 transition-all duration-300" />
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button className="mt-2 w-full bg-gradient-to-r from-[#4db6ac] to-[#f9a826] text-white hover:opacity-90 shadow-md">
                Log In
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
