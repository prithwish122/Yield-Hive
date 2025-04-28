"use client"

import type React from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const testimonials = [
  {
    quote:
      "Yield Hive made it possible for me to invest in prime real estate that I would never have been able to afford on my own. The returns have been steady and transparent.",
    name: "Sarah J.",
    role: "Tech Entrepreneur",
    location: "New York",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "I've been generating consistent passive income from multiple properties across different cities. The platform is intuitive and the blockchain technology makes every transaction secure.",
    name: "Michael T.",
    role: "Financial Advisor",
    location: "London",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As a property owner, tokenizing my rental income has opened up new liquidity while maintaining my ownership. A truly innovative approach to real estate.",
    name: "Elena R.",
    role: "Property Developer",
    location: "Barcelona",
    image: "/placeholder.svg?height=80&width=80",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    x.set(mouseX)
    y.set(mouseY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="group h-full perspective"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <motion.div className="mb-6" style={{ transform: "translateZ(20px)" }}>
          <Quote className="h-8 w-8 text-amber-400" />
        </motion.div>
        <motion.p className="mb-6 flex-grow text-gray-600" style={{ transform: "translateZ(30px)" }}>
          {testimonial.quote}
        </motion.p>
        <motion.div className="flex items-center" style={{ transform: "translateZ(40px)" }}>
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">
              {testimonial.role}, {testimonial.location}
            </p>
          </div>
        </motion.div>

        {/* 3D effect elements */}
        <div
          className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-amber-100 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
          style={{ transform: "translateZ(5px)" }}
        ></div>
        <div
          className="absolute -left-2 -top-2 h-16 w-16 rounded-full bg-blue-100 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
          style={{ transform: "translateZ(5px)" }}
        ></div>
      </motion.div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of satisfied investors and property owners who trust Yield Hive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
