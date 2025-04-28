"use client"

import { motion } from "framer-motion"
import { Home, Globe, DollarSign } from "lucide-react"

const stats = [
  {
    icon: <Home className="h-10 w-10 text-[#4db6ac]" />,
    value: "500+",
    label: "Properties Listed",
  },
  {
    icon: <Globe className="h-10 w-10 text-[#4db6ac]" />,
    value: "20+",
    label: "Countries with Investors",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-[#4db6ac]" />,
    value: "$5M+",
    label: "Distributed to Investors",
  },
]

export function SuccessStats() {
  return (
    <section id="reviews" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-[#1a2e44] sm:text-4xl">Our Impact in Numbers</h2>
            <p className="mt-4 text-lg text-gray-600">
              Yield Hive is transforming real estate investing through blockchain technology
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center rounded-lg bg-[#e6f7f5] p-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 rounded-full bg-white p-3 shadow-md">{stat.icon}</div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-4xl font-bold text-[#1a2e44]">{stat.value}</h3>
                  <p className="mt-2 text-gray-600">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
