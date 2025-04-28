"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

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

  const logoContainerVariants = {
    hidden: { rotateY: 0 },
    visible: {
      rotateY: 720,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
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

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const circleVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: [1, 1.5, 1],
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 1,
        repeat: Infinity,
        repeatType: "loop" as "loop",
        repeatDelay: 0.3,
      },
    }),
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as "loop" | "reverse" | "mirror",
        ease: "easeInOut",
      },
    },
  }

  const shimmerVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "100%",
      opacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as "loop",
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  // Split text for letter animation
  const yieldHive = "YIELD HIVE".split("")
  const platform = "PLATFORM".split("")

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f6e9] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"}
      exit="visible"
    >
      {/* Background patterns */}
      <motion.div
        className="absolute inset-0 opacity-10"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-[#4db6ac]"></div>
        <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-[#f9a826]"></div>
        <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-[#1a2e44]"></div>
      </motion.div>

      <div className="flex flex-col items-center justify-center relative z-10">
        <motion.div
          className="relative"
          variants={logoContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-[#4db6ac] to-[#f9a826]"
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
            <motion.div
              className="absolute inset-0 bg-white"
              variants={shimmerVariants}
              initial="hidden"
              animate="visible"
              style={{ opacity: 0.2 }}
            ></motion.div>
          </motion.div>
        </motion.div>

        <div className="mt-8 flex flex-col items-center">
          <div className="flex flex-wrap justify-center">
            {yieldHive.map((letter, index) => (
              <motion.span
                key={`yield-${index}`}
                variants={letterVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                className="mx-0.5 text-3xl font-bold"
                style={{ 
                  color: index < 6 ? "#f9a826" : "#4db6ac" 
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center mt-2">
            {platform.map((letter, index) => (
              <motion.span
                key={`platform-${index}`}
                variants={letterVariants}
                custom={index + 10}
                initial="hidden"
                animate="visible"
                className="mx-0.5 text-2xl font-semibold text-[#1a2e44]"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex space-x-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="h-3 w-3 rounded-full"
              style={{ 
                background: i % 2 === 0 
                  ? "linear-gradient(to right, #4db6ac, #bfe17d)" 
                  : "linear-gradient(to right, #f9a826, #fbcd75)" 
              }}
              custom={i}
              variants={circleVariants}
              initial="hidden"
              animate="visible"
            />
          ))}
        </div>

        <motion.p
          className="mt-8 text-sm text-[#1a2e44]/70"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Loading your experience...
        </motion.p>
      </div>
    </motion.div>
  )
}