"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        duration: 0.8,
        when: "afterChildren",
      },
    },
  }

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  }

  const circleVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f6e9]"
      variants={containerVariants}
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"}
      exit="visible"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-[#4db6ac] to-[#f9a826]"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <svg
            viewBox="0 0 24 24"
            className="absolute inset-0 h-full w-full p-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </motion.div>

        <motion.h2
          className="mt-6 text-2xl font-bold text-[#1a2e44]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Yield Hive
        </motion.h2>

        <div className="mt-8 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-[#4db6ac] to-[#f9a826]"
              custom={i}
              variants={circleVariants}
              initial="hidden"
              animate="visible"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
