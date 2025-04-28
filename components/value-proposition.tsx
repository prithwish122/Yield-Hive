"use client"

import { motion } from "framer-motion"
import { Leaf, BarChart3, Coins, Shield } from "lucide-react"

const features = [
  {
    icon: <Leaf className="h-6 w-6 text-[#4db6ac]" />,
    title: "Sustainable Investments",
    description: "Support eco-friendly properties and farmland with positive environmental impact.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-[#4db6ac]" />,
    title: "Transparent Returns",
    description: "Track your earnings in real-time with our comprehensive dashboard.",
  },
  {
    icon: <Coins className="h-6 w-6 text-[#4db6ac]" />,
    title: "Fractional Ownership",
    description: "Start with as little as $100 and build your portfolio step by step.",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#4db6ac]" />,
    title: "Blockchain Security",
    description: "Your investments are protected through smart contracts and legal frameworks.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1a2e44] sm:text-4xl">Why Choose Yield Hive</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our platform offers unique advantages for both investors and property owners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f7f5]">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1a2e44]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#4db6ac] to-[#c5e063] transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
