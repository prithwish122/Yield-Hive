"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
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
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const features = [
    "Laboratory, which is trusted by farmers and grain traders",
    "Automation",
    "Highly professional team",
    "Cooperation with grain traders",
  ]

  const agro = "AGRO-".split("")
  const industrial = "INDUSTRIAL".split("")
  const holding = "HOLDING".split("")

  return (
    <section className="relative pt-24">
      <div className="mx-auto max-w-[90%] px-4 pb-8 pt-16 sm:px-6 lg:max-w-[1200px]">
        <div className="text-center">
          <motion.h1
            className="mb-8 flex flex-wrap items-center justify-center gap-x-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex">
              {agro.map((letter, index) => (
                <motion.span key={`agro-${index}`} variants={letterVariants} className="inline-block text-[#f9a826]">
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="inline-flex">
              {industrial.map((letter, index) => (
                <motion.span
                  key={`industrial-${index}`}
                  variants={letterVariants}
                  className="inline-block text-[#1a2e44]"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="inline-flex">
              {holding.map((letter, index) => (
                <motion.span key={`holding-${index}`} variants={letterVariants} className="inline-block text-[#4db6ac]">
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <div className="relative mx-auto mt-8 h-[400px] w-full max-w-[850px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#4db6ac] to-[#c5e063] sm:h-[450px] md:h-[500px]">
            <div className="absolute inset-0">
              <Image
                src="/farm-landscape.png"
                alt="Farm landscape with fields, barn and wind turbines"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4 pt-8">
              <div className="flex flex-wrap justify-center gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="rounded-full bg-white px-4 py-2 text-xs font-medium text-[#1a2e44] shadow-md sm:text-sm"
                    custom={index}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="mr-1 inline-block h-2 w-2 rounded-full bg-[#4db6ac]"></span> {feature}
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
                <Button className="bg-[#1a2e44] px-8 py-6 text-base font-medium text-white hover:bg-[#0f1c2a]">
                  Discover
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
