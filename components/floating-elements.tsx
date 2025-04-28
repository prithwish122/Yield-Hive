"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type FloatingElement = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "circle" | "square" | "triangle"
  color: string
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Generate random floating elements
    const newElements: FloatingElement[] = []
    const colors = ["#4db6ac33", "#f9a82633", "#c5e06333", "#1a2e4422"]

    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle",
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setElements(newElements)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            backgroundColor: element.type !== "triangle" ? element.color : "transparent",
            borderRadius: element.type === "circle" ? "50%" : element.type === "square" ? "15%" : "0",
            clipPath: element.type === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * -100],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
