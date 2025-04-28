"use client"

import { motion } from "framer-motion"
import { Search, CreditCard, LineChart } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-8 w-8 text-[#4db6ac]" />,
    title: "Browse & Select",
    description: "Explore our curated selection of high-yield properties based on your investment criteria.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[#4db6ac]" />,
    title: "Invest Securely",
    description: "Purchase property tokens with crypto or fiat through our secure platform.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-[#4db6ac]" />,
    title: "Earn Passively",
    description: "Receive automatic rent payments distributed directly to your wallet.",
  },
]

export function PlatformOverview() {
  return (
    <section id="services" className="bg-[#e6f7f5] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1a2e44] sm:text-4xl">How Yield Hive Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform tokenizes real estate and farmland rental income, allowing you to invest in fractions of
            premium properties and receive automated returns.
          </p>
        </motion.div>

        <div className="relative mx-auto mb-16 h-[300px] w-full max-w-4xl rounded-xl bg-gradient-to-b from-[#4db6ac]/20 to-[#c5e063]/20 p-4 shadow-lg">
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <svg className="h-full w-full opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="farmPattern"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
                patternTransform="scale(2) rotate(0)"
              >
                <path d="M0 0L10 10M10 0L0 10" stroke="#4db6ac" strokeWidth="0.5" fill="none" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#farmPattern)" />
            </svg>
          </div>

          <motion.div
            className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-[#1a2e44]">Property Tokenization</h3>
            <p className="text-sm text-gray-600">Real estate assets converted to blockchain tokens</p>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-md"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold text-[#1a2e44]">Smart Contracts</h3>
            <p className="text-sm text-gray-600">Automated rental distribution</p>
          </motion.div>

          <motion.div
            className="absolute right-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-bold text-[#1a2e44]">Investor Dashboard</h3>
            <p className="text-sm text-gray-600">Real-time portfolio tracking</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f7f5] transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#1a2e44]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Background effect */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#c5e063] opacity-10 transition-transform duration-500 group-hover:scale-150"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
