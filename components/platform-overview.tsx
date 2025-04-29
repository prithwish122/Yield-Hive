"use client"

import { motion } from "framer-motion"
import { Search, CreditCard, LineChart, Building, ChartBar, Shield } from "lucide-react"

// Enhanced color palette
const colors = {
  primary: "#00796b",       // Deeper teal
  secondary: "#b2ff59",     // Vibrant lime
  tertiary: "#004d40",      // Dark teal
  light: "#e0f2f1",         // Light teal background
  dark: "#102a43",          // Deep blue-gray
  accent: "#ffc400",        // Vibrant amber accent
}

const steps = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Discover Premium Properties",
    description: "Browse our vetted portfolio of high-yield real estate and agricultural investments that match your financial goals.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-white" />,
    title: "Invest With Confidence",
    description: "Secure fractional ownership through our enterprise-grade blockchain platform with as little as $100.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-white" />,
    title: "Track & Earn Passively",
    description: "Monitor your portfolio performance and receive automated dividend payments directly to your wallet.",
  },
]

const features = [
  {
    icon: <Building className="h-6 w-6 text-white" />,
    title: "Property Tokenization",
    description: "Premium real estate assets fractionally divided into blockchain-verified tokens",
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Smart Contracts",
    description: "Transparent automated rental distribution with bank-level security",
  },
  {
    icon: <ChartBar className="h-6 w-6 text-white" />,
    title: "Investor Dashboard",
    description: "Real-time analytics and performance tracking of your investment portfolio",
  }
]

export function PlatformOverview() {
  // Container variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }
  
  // Item variants for children
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Floating animation for cards
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-[#e0f2f1] to-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-2 text-4xl font-bold text-[#102a43] sm:text-5xl">
            How Yield Hive Works
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-gradient-to-r from-[#00796b] to-[#b2ff59]"></div>
          <p className="text-xl leading-relaxed text-gray-700">
            Our enterprise platform tokenizes premium real estate and agricultural assets, 
            transforming how investors access passive income and portfolio diversification.
          </p>
        </motion.div>

        {/* Visualization Section */}
        <div className="relative mx-auto mb-24 h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#00796b]/10 to-[#b2ff59]/10 p-6 shadow-lg">
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.svg 
              className="h-full w-full opacity-10" 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 0.1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <pattern
                id="farmPattern"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
                patternTransform="scale(2) rotate(0)"
              >
                <path d="M0 0L10 10M10 0L0 10" stroke={colors.primary} strokeWidth="0.5" fill="none" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#farmPattern)" />
            </motion.svg>
          </div>

          {/* Central flow illustration */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-1 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00796b] via-[#4db6ac] to-[#b2ff59]"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-full"
          >
            {features.map((feature, index) => {
              // Position calculations
              const positions = [
                { top: "20%", left: "15%" },
                { top: "50%", left: "50%" },
                { top: "20%", left: "85%" }
              ]
              const position = positions[index]

              return (
                <motion.div
                  key={index}
                  className="absolute w-64 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-5 shadow-xl"
                  style={{ top: position.top, left: position.left }}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 121, 107, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#00796b] to-[#004d40]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#102a43]">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Animated dots */}
          <motion.div
            className="absolute left-1/4 top-1/2 h-4 w-4 rounded-full bg-[#00796b]"
            animate={{
              y: [-2, 2, -2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-[#4db6ac]"
            animate={{
              y: [-2, 2, -2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute left-3/4 top-1/2 h-4 w-4 rounded-full bg-[#b2ff59]"
            animate={{
              y: [-2, 2, -2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Process steps */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              {...floatingAnimation}
            >
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00796b] to-[#004d40] shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#102a43]">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                <motion.div 
                  className="mt-6 inline-flex items-center font-medium text-[#00796b]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  Learn more
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>

              {/* Background effect */}
              <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#b2ff59] to-[#00796b] opacity-5 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#ffc400] opacity-10 transition-transform duration-700 group-hover:scale-[2.5]"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mx-auto mt-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* <motion.button 
            className="rounded-full bg-gradient-to-r from-[#00796b] to-[#004d40] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Start Investing Today
          </motion.button>
          <p className="mt-4 text-sm text-gray-500">Join over 10,000 investors earning passive income</p> */}
        </motion.div>
      </div>
    </section>
  )
}