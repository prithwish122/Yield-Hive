"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      },
    }),
  }

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    }
  }

  const stats = [
    {
      number: "Sustainable Investments",
      description: "Support eco-friendly properties and farmland with positive environmental impact.",
      bgColor: "bg-[#e9eda1]",
    },
    {
      number: "Transparent Returns",
      description: "Track your earnings in real-time with our comprehensive dashboard.",
      bgColor: "bg-[#c5e6a6]", 
    },
    {
      number: "Fractional Ownership",
      description: "Start with as little as $100 and build your portfolio step by step.",
      bgColor: "bg-[#ffd7b5]",
    }
  ]

  return (
    <section className="py-16 bg-[#fcf9ef]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* About Us Content */}
          <motion.div 
            className="lg:w-1/2 bg-[#f5f2e3] rounded-3xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#4db6ac] text-white rounded-full text-sm font-medium">
                About Us
              </span>
            </div>
            
            <p className="text-[#1a2e44] text-lg mb-8">
            Yield Hive is a decentralized platform revolutionizing access to real-world income-generating assets. By tokenizing rental income from real estate and farmland, we enable fractional ownership, automated payouts, and sustainable passive earnings. Powered by the Pharos Chain, Yield Hive ensures secure, transparent, and efficient investment experiences for everyone—bringing institutional-grade opportunities to everyday investors.
            </p>
            
            {/* <div className="flex items-center">
              <div className="mr-4">
                <Image 
                  src="/api/placeholder/60/60" 
                  alt="Alfonso Workman" 
                  width={60} 
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#1a2e44]">Alfonso Workman</h4>
                <p className="text-[#1a2e44]/70">Marketing Director</p>
              </div>
            </div> */}
          </motion.div>
          
          {/* Stats */}
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className={`${stat.bgColor} rounded-full p-6 flex items-center justify-center`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={statsVariants}
                >
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#1a2e44]">{stat.number}</h2>
                    <p className="text-[#1a2e44]/70">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}