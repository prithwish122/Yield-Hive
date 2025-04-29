"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 16px rgba(249, 168, 38, 0.7)",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const features = [
    "Tokenized real estate with blockchain security",
    "Fractional ownership",
    "Automated rental payouts",
    "Diversified investment portfolio",
  ]

  const yieldText = "AGRO-".split("")
  const hive = "INDUSTRIAL".split("")
  const platform = "HOLDING".split("")

  return (
    <section className="relative pt-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f6f69d] to-[#e8e122]">
        <div className="absolute top-0 left-0 h-full w-full opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-[#4db6ac] blur-3xl animate-pulse" 
               style={{
                 top: '10%',
                 left: '15%',
                 animation: 'pulse 8s infinite ease-in-out'
               }}></div>
          <div className="absolute h-96 w-96 rounded-full bg-[#f2bd69] blur-3xl animate-pulse"
               style={{
                 top: '60%',
                 left: '75%',
                 animation: 'pulse 12s infinite ease-in-out 2s'
               }}></div>
          <div className="absolute h-64 w-64 rounded-full bg-[#c5e063] blur-3xl animate-pulse"
               style={{
                 top: '80%',
                 left: '20%',
                 animation: 'pulse 10s infinite ease-in-out 4s'
               }}></div>
          <div className="absolute h-64 w-64 rounded-full bg-[#1a2e44] blur-3xl animate-pulse opacity-30"
               style={{
                 top: '20%',
                 left: '80%',
                 animation: 'pulse 14s infinite ease-in-out 1s'
               }}></div>
        </div>
      </div>

      <div className="mx-auto max-w-[90%] px-4 pb-8 pt-16 sm:px-6 lg:max-w-[1200px]">
        <div className="text-center">
          <motion.h1
            className="mb-8 flex flex-wrap items-center justify-center gap-x-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex">
              {yieldText.map((letter, index) => (
                <motion.span 
                  key={`yield-${index}`} 
                  variants={letterVariants} 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#f9a826] to-[#ffcc80]"
                  style={{
                    textShadow: '0 0 12px rgba(249, 168, 38, 0.3)',
                    filter: 'drop-shadow(0 0 2px rgba(249, 168, 38, 0.3))'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="inline-flex">
              {hive.map((letter, index) => (
                <motion.span 
                  key={`hive-${index}`} 
                  variants={letterVariants} 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1a2e44] to-[#345d82]"
                  style={{
                    textShadow: '0 0 12px rgba(26, 46, 68, 0.3)',
                    filter: 'drop-shadow(0 0 2px rgba(26, 46, 68, 0.3))'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="inline-flex">
              {platform.map((letter, index) => (
                <motion.span
                  key={`platform-${index}`}
                  variants={letterVariants}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4db6ac] to-[#80cbc4]"
                  style={{
                    textShadow: '0 0 12px rgba(77, 182, 172, 0.3)',
                    filter: 'drop-shadow(0 0 2px rgba(77, 182, 172, 0.3))'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <div className="relative mx-auto mt-8 h-[800px] w-full max-w-[1650px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#4db6ac] to-[#c5e063] sm:h-[600px] md:h-[700px] lg:h-[800px] shadow-2xl">
            {/* Parallax Background Effect */}
            <motion.div 
              className="absolute inset-0"
              style={{
                x: mousePosition.x / 50,
                y: mousePosition.y / 50,
                transition: 'transform 0.1s ease-out'
              }}
            >
                              <Image
                src="/bg.jpg"
                alt="Farm landscape with fields, barn and wind turbines"
                fill
                className="object-cover object-center scale-110"
                priority
              />
              {/* Color overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4db6ac]/30 to-[#f9a826]/30 mix-blend-overlay"></div>
              
              {/* Light rays */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 h-full w-64 bg-white blur-3xl rotate-12 animate-pulse" 
                     style={{opacity: 0.2, animation: 'pulse 5s infinite ease-in-out'}}></div>
                <div className="absolute top-0 right-1/4 h-full w-64 bg-white blur-3xl -rotate-12 animate-pulse" 
                     style={{opacity: 0.2, animation: 'pulse 7s infinite ease-in-out 1s'}}></div>
              </div>
            </motion.div>

            <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4 pt-8">
              <div className="flex flex-wrap justify-center gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-[#1a2e44] shadow-lg border border-white/30 sm:text-sm"
                    custom={index}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="mr-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[#4db6ac] to-[#80cbc4]"></span> {feature}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <Link href="/explore" className="relative z-10">
                <Button className="bg-gradient-to-r from-[#1a2e44] to-[#345d82] px-8 py-6 text-base font-medium text-white hover:bg-[#0f1c2a] shadow-lg">
                  {/* <span className="relative z-10"> */}
                    Discover
                  {/* </span> */}
                  
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f9a826] to-[#ffcc80] opacity-0 transition-opacity duration-300 rounded-md group-hover:opacity-20"></span>
                </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}