"use client"

import { motion } from "framer-motion"
import { 
  Search, 
  CreditCard, 
  LineChart, 
  Building, 
  ChartBar, 
  Shield, 
  Wallet, 
  BarChart4, 
  Home, 
  DollarSign,
  ArrowRight,
  Gift
} from "lucide-react"

// Enhanced color palette
const colors = {
  primary: "#00796b",       // Deeper teal
  secondary: "#b2ff59",     // Vibrant lime
  tertiary: "#004d40",      // Dark teal
  light: "#e0f2f1",         // Light teal background
  dark: "#102a43",          // Deep blue-gray
  accent: "#ffc400",        // Vibrant amber accent
  success: "#4caf50",       // Success green
  warning: "#ff9800",       // Warning orange
}

// Complete workflow steps with detailed actions - more concise descriptions
const workflowSteps = [
  {
    icon: <Wallet className="h-8 w-8 text-white" />,
    title: "Connect Wallet",
    description: "Link your wallet to start. First-time users get 10 YHT gas fee rebate.",
    action: "Connect Wallet",
    highlight: "First-time bonus: 10 YHT tokens"
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Browse Properties",
    description: "Explore vetted properties with analytics on yields and available shares.",
    action: "View Properties",
    highlight: "Filter by property type & ROI"
  },
  {
    icon: <Home className="h-8 w-8 text-white" />,
    title: "Buy Shares",
    description: "Purchase fractional shares with transparent fees and instant confirmation.",
    action: "Buy Shares",
    highlight: "Minimum investment: $100"
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-white" />,
    title: "Track Portfolio",
    description: "Monitor performance with real-time analytics on value and income.",
    action: "My Holdings",
    highlight: "Live performance metrics"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-white" />,
    title: "Claim Income",
    description: "Receive dividend payments from rental or agricultural yields to your wallet.",
    action: "Claim",
    highlight: "Auto or manual withdrawals"
  },
  {
    icon: <Gift className="h-8 w-8 text-white" />,
    title: "Shared Benefits",
    description: "Access gas rebates, referral rewards, and premium property early access.",
    action: "Claim Rewards",
    highlight: "Rewards based on portfolio size"
  }
]

const platformFeatures = [
  {
    icon: <Building className="h-6 w-6 text-white" />,
    title: "Property Tokenization",
    description: "Premium real estate assets fractionally divided into blockchain-verified tokens"
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Smart Contracts",
    description: "Transparent automated rental distribution with bank-level security"
  },
  {
    icon: <ChartBar className="h-6 w-6 text-white" />,
    title: "Investor Dashboard",
    description: "Real-time analytics and performance tracking of your investment portfolio"
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
    <section id="how-it-works" className="bg-gradient-to-b from-[#e0f2f1] to-white py-32">
      <div className="container mx-auto px-6 max-w-7xl">
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

        {/* Interactive Workflow Visualization - Full Width with Auto-Scroll */}
        <div className="relative mb-24 w-full overflow-hidden bg-gradient-to-br from-[#00796b]/10 to-[#b2ff59]/10 py-12 shadow-xl">
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

          {/* Workflow title */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-[#102a43]">Complete Investment Workflow</h3>
            <p className="text-xl text-gray-600">Follow these steps to start earning passive income with Yield Hive</p>
          </motion.div>

          {/* Auto-scrolling workflow - no container constraints */}
          <div className="relative mx-auto py-12">
            {/* Central connecting line */}
            <div className="absolute left-0 top-1/2 h-3 w-full bg-gradient-to-r from-[#00796b] via-[#4db6ac] to-[#b2ff59] opacity-80 shadow-md"></div>
            
            {/* Auto-scrolling card container */}
            <motion.div 
              className="flex gap-8 px-16"
              animate={{ 
                x: [0, '-100%'] 
              }}
              transition={{ 
                duration: 30, 
                ease: "linear", 
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {/* Doubled cards for infinite scrolling effect */}
              {[...workflowSteps, ...workflowSteps].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex w-80 flex-none flex-col items-center"
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                >
                  {/* Step Card - Larger and more engaging */}
                  <motion.div
                    className="mb-10 rounded-xl bg-white p-6 shadow-xl"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 25px 50px -12px rgba(0, 121, 107, 0.35)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#00796b] to-[#004d40] shadow-lg transition-transform duration-300 hover:scale-110">
                      {step.icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-[#102a43]">{step.title}</h3>
                    <p className="mb-4 text-base text-gray-600">{step.description}</p>
                    
                    <motion.button 
                      className="mb-3 w-full rounded-lg bg-gradient-to-r from-[#00796b] to-[#004d40] py-3 text-base font-medium text-white shadow-md"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {step.action}
                    </motion.button>
                    
                    <div className="rounded-lg bg-[#ffc400]/15 p-3 text-sm font-medium text-[#102a43]">
                      ✨ {step.highlight}
                    </div>
                  </motion.div>
                  
                  {/* Step number indicator */}
                  <motion.div 
                    className="absolute bottom-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#b2ff59] text-lg font-bold text-[#004d40] shadow-lg"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {(index % workflowSteps.length) + 1}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Static duplicate scrolling in opposite direction - for dynamic effect */}
            <motion.div 
              className="mt-12 flex gap-8 px-16"
              animate={{ 
                x: ['-100%', 0] 
              }}
              transition={{ 
                duration: 35, 
                ease: "linear", 
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {/* Doubled cards for infinite scrolling effect */}
              {[...workflowSteps, ...workflowSteps].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex w-80 flex-none flex-col items-center opacity-30"
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 0.3 }}
                >
                  {/* Step Card - Ghost effect */}
                  <motion.div
                    className="mb-10 rounded-xl bg-white p-6 shadow-lg"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#00796b]/80 to-[#004d40]/80">
                      {step.icon}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-[#102a43]/80">{step.title}</h3>
                    <div className="h-12 w-full"></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Animated transaction dots */}
            <motion.div
              className="absolute left-0 top-1/2 z-20 h-6 w-6 -translate-y-1/2 rounded-full bg-[#ffc400] shadow-md shadow-[#ffc400]/30"
              animate={{
                x: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            
            <motion.div
              className="absolute left-0 top-1/2 z-20 h-6 w-6 -translate-y-1/2 rounded-full bg-[#b2ff59] shadow-md shadow-[#b2ff59]/30"
              animate={{
                x: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 10,
                delay: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            
            <motion.div
              className="absolute left-0 top-1/2 z-20 h-6 w-6 -translate-y-1/2 rounded-full bg-[#00796b] shadow-md shadow-[#00796b]/30"
              animate={{
                x: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 10,
                delay: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </div>
          
          {/* Control indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            <motion.div 
              className="h-2 w-16 rounded-full bg-[#00796b]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className="h-2 w-8 rounded-full bg-[#4db6ac]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className="h-2 w-4 rounded-full bg-[#b2ff59]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </div>

        {/* Platform features */}
        <motion.div
          className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {platformFeatures.map((feature, index) => (
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
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#102a43]">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
                
                <motion.div 
                  className="mt-6 inline-flex items-center font-medium text-[#00796b]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
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
          <motion.button 
            className="rounded-full bg-gradient-to-r from-[#00796b] to-[#004d40] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Start Investing Today
          </motion.button>
          <p className="mt-4 text-sm text-gray-500">Join over 10,000 investors earning passive income</p>
        </motion.div>
      </div>
    </section>
  )
}