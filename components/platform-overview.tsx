"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  Gift,
  PlusCircle,
  List,
  Upload,
  Eye,
  Coins,
  RefreshCw,
  CheckCircle2
} from "lucide-react"

// Enhanced professional color palette
const colors = {
  primary: "#0a6e61",       // Deeper, more professional teal
  secondary: "#85e539",     // Vibrant but sophisticated lime
  tertiary: "#004038",      // Darker teal for depth
  light: "#e6f5f3",         // Subtle light teal background
  dark: "#0c1f30",          // Deep navy blue for text
  accent: "#ffb300",        // Refined amber accent
  success: "#2e8540",       // Professional success green
  warning: "#f2994a",       // Softer warning orange
  lightBorder: "#e0eaec",   // Border color for cards
  gradientStart: "#0a6e61", // Primary gradient start
  gradientEnd: "#003c32",   // Primary gradient end
}

// Property Owner workflow steps - enhanced descriptions
const propertyOwnerSteps = [
  {
    icon: <Wallet className="h-7 w-7 text-white" />,
    title: "Connect Wallet",
    description: "Link your digital wallet securely to our platform. New users automatically receive 10 YHT tokens to cover initial gas fees.",
    action: "Connect Wallet",
    highlight: "First-time bonus: 10 YHT tokens"
  },
  {
    icon: <PlusCircle className="h-7 w-7 text-white" />,
    title: "List a Property",
    description: "Tokenize your property by providing verified details and customizing share parameters to maximize your earnings potential.",
    action: "List Property",
    highlight: "Customizable share allocation"
  },
  {
    icon: <List className="h-7 w-7 text-white" />,
    title: "Portfolio Management",
    description: "Comprehensive dashboard to monitor your listed properties, sold and remaining shares, and track distributed income.",
    action: "View Portfolio",
    highlight: "Real-time tracking & analytics"
  },
  {
    icon: <Upload className="h-7 w-7 text-white" />,
    title: "Deposit Income",
    description: "Seamlessly distribute rental or agricultural yields to your property shareholders with our automated smart contract system.",
    action: "Deposit Income",
    highlight: "Transparent automated distribution"
  },
  {
    icon: <ChartBar className="h-7 w-7 text-white" />,
    title: "Performance Analytics",
    description: "Access detailed analytics and insights on property performance, investor demographics, and optimization recommendations.",
    action: "View Analytics",
    highlight: "Advanced performance metrics"
  },
  {
    icon: <Gift className="h-7 w-7 text-white" />,
    title: "Owner Rewards Program",
    description: "Earn exclusive benefits through our tiered loyalty program based on consistent income deposits and investor satisfaction scores.",
    action: "View Rewards",
    highlight: "Premium tier-based benefits"
  }
]

// Investor workflow steps - enhanced descriptions
const investorSteps = [
  {
    icon: <Wallet className="h-7 w-7 text-white" />,
    title: "Connect Wallet",
    description: "Securely link your digital wallet to our platform. First-time investors receive 10 YHT tokens to cover initial transaction fees.",
    action: "Connect Wallet",
    highlight: "First-time bonus: 10 YHT tokens"
  },
  {
    icon: <Search className="h-7 w-7 text-white" />,
    title: "Discover Properties",
    description: "Browse our curated marketplace of professionally vetted properties with comprehensive yield analytics and historical data.",
    action: "Browse Marketplace",
    highlight: "Advanced filtering & analytics"
  },
  {
    icon: <Home className="h-7 w-7 text-white" />,
    title: "Acquire Shares",
    description: "Purchase fractional ownership with transparent fees and instant blockchain confirmation. Start with as little as $100.",
    action: "Buy Shares",
    highlight: "Minimum investment: $100"
  },
  {
    icon: <BarChart4 className="h-7 w-7 text-white" />,
    title: "Portfolio Dashboard",
    description: "Monitor your investment performance with our professional-grade analytics dashboard featuring real-time valuation and income data.",
    action: "My Portfolio",
    highlight: "Professional performance metrics"
  },
  {
    icon: <Coins className="h-7 w-7 text-white" />,
    title: "Income Management",
    description: "Receive automatic dividend payments from property yields directly to your wallet, with customizable distribution preferences.",
    action: "Manage Income",
    highlight: "Flexible withdrawal options"
  },
  {
    icon: <RefreshCw className="h-7 w-7 text-white" />,
    title: "Growth Optimization",
    description: "Leverage our intelligent reinvestment strategies to automatically compound your earnings for maximized portfolio growth.",
    action: "Set Growth Strategy",
    highlight: "AI-powered growth recommendations"
  }
]

export function PlatformOverview() {
  // State to toggle between property owner and investor flows
  const [activeFlow, setActiveFlow] = useState("investor")
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Set loaded state after initial render for animations
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  // Container variants for staggered children animations - refined timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  }
  
  // Item variants for children - smoother animations
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  // Button hover animation - subtle professional effect
  const buttonHoverAnimation = {
    scale: 1.03,
    boxShadow: "0 4px 20px rgba(10, 110, 97, 0.25)",
    transition: { duration: 0.2 }
  }

  // Function to get the active steps based on selected flow
  const getActiveSteps = () => {
    return activeFlow === "owner" ? propertyOwnerSteps : investorSteps
  }

  return (
    <section 
      id="user-flows" 
      className="relative bg-gradient-to-b from-[#e6f5f3] to-white py-28 overflow-hidden"
    >
      {/* Background pattern elements - subtle professional backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-b from-[#0a6e61]/5 to-transparent"></div>
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-[#85e539]/5 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-t from-[#ffb300]/5 to-transparent"></div>
        
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-5">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.primary} strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0a6e61] bg-[#e6f5f3] rounded-full border border-[#0a6e61]/20">
            Platform Overview
          </span>
          <h2 className="mb-3 text-4xl font-bold text-[#0c1f30] sm:text-5xl tracking-tight">
            Your Journey With <span className="text-[#0a6e61]">Yield Hive</span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded bg-gradient-to-r from-[#0a6e61] to-[#85e539]"></div>
          <p className="text-xl leading-relaxed text-gray-700">
            Whether you're investing in properties or listing your assets, we've streamlined the process
            to maximize your returns and minimize complexity.
          </p>
        </motion.div>

        {/* Toggle between property owner and investor flows - enhanced design */}
        <div className="mb-16 flex justify-center">
          <motion.div 
            className="inline-flex rounded-full bg-white p-1.5 shadow-xl border border-[#e0eaec]"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              className={`relative px-8 py-3.5 text-lg font-medium rounded-full transition-all ${
                activeFlow === "investor" 
                  ? "bg-gradient-to-r from-[#0a6e61] to-[#003c32] text-white shadow-md" 
                  : "text-gray-700 hover:text-[#0a6e61]"
              }`}
              onClick={() => setActiveFlow("investor")}
              whileHover={activeFlow !== "investor" ? buttonHoverAnimation : {}}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                {activeFlow === "investor" && (
                  <CheckCircle2 className="h-5 w-5" />
                )}
                For Investors
              </span>
              {activeFlow === "investor" && (
                <motion.div 
                  className="absolute inset-0 -z-10 rounded-full opacity-100"
                  layoutId="activeButton"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
            <motion.button
              className={`relative px-8 py-3.5 text-lg font-medium rounded-full transition-all ${
                activeFlow === "owner" 
                  ? "bg-gradient-to-r from-[#0a6e61] to-[#003c32] text-white shadow-md" 
                  : "text-gray-700 hover:text-[#0a6e61]"
              }`}
              onClick={() => setActiveFlow("owner")}
              whileHover={activeFlow !== "owner" ? buttonHoverAnimation : {}}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                {activeFlow === "owner" && (
                  <CheckCircle2 className="h-5 w-5" />
                )}
                For Property Owners
              </span>
              {activeFlow === "owner" && (
                <motion.div 
                  className="absolute inset-0 -z-10 rounded-full opacity-100"
                  layoutId="activeButton"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* Flow Title - animated title change */}
        <AnimatePresence mode="wait">
          <motion.div
            className="mb-16 text-center"
            key={activeFlow} // Force re-render on flow change
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-2 px-3 py-1 bg-[#0a6e61]/10 rounded-md text-[#0a6e61] text-sm font-semibold">
              {activeFlow === "owner" ? "For Property Owners" : "For Investors"}
            </span>
            <h3 className="text-3xl font-bold text-[#0c1f30] mb-3">
              {activeFlow === "owner" ? "Property Owner Journey" : "Investor Journey"}
            </h3>
            <p className="mt-2 text-xl text-gray-600 max-w-2xl mx-auto">
              {activeFlow === "owner" 
                ? "List your property and earn passive income through our secure blockchain platform" 
                : "Start your investment journey and earn passive income from tokenized real-world assets"}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Flow Visualization - Stepped Process - enhanced professional design */}
        <div className="mb-24 relative">
          <div className="relative mx-auto w-full max-w-6xl">
            {/* Background animation elements - subtle professional animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Animated circles - more subtle professional effect */}
              <motion.div
                className="absolute top-20 left-16 h-48 w-48 rounded-full bg-gradient-to-r from-[#85e539]/5 to-[#0a6e61]/5"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-40 right-16 h-64 w-64 rounded-full bg-gradient-to-r from-[#ffb300]/5 to-[#0a6e61]/5"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.3, 0.15],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2,
                }}
              />
              
              {/* Floating particles - refined for professional look */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-[#85e539] to-[#0a6e61]"
                  style={{
                    left: `${10 + (i * 15)}%`,
                    top: `${20 + ((i % 3) * 25)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.8,
                  }}
                />
              ))}
            </div>
              
            {/* Left side timeline line - enhanced gradient */}
            <div className="absolute left-12 top-0 h-full w-1 bg-gradient-to-b from-[#0a6e61] via-[#4db6ac] to-[#85e539] rounded-full"></div>
            
            {/* Steps */}
            <AnimatePresence mode="wait">
              <motion.div
                className="flex flex-col space-y-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={activeFlow} // Force re-render on flow change
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {getActiveSteps().map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    {/* Number Node - Always on left - enhanced design */}
                    <div className="relative mx-6 flex-none">
                      <motion.div 
                        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0a6e61] to-[#003c32] text-2xl font-bold text-white shadow-lg border border-white/20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {index + 1}
                      </motion.div>
                      
                      {/* Animated effects around number - more subtle and professional */}
                      <motion.div
                        className="absolute left-0 top-0 h-16 w-16 rounded-full border-2 border-[#85e539]/20"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      
                      {/* Horizontal connector line - enhanced design */}
                      <motion.div 
                        className="absolute left-16 top-1/2 h-[2px] w-12 -translate-y-1/2 bg-gradient-to-r from-[#0a6e61] to-[#85e539]/70"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.1 }}
                      />
                    </div>
                    
                    {/* Step Content - enhanced card design */}
                    <motion.div 
                      className="flex-1"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="rounded-xl bg-white p-8 shadow-lg border border-[#e0eaec] relative overflow-hidden"
                        whileHover={{
                          boxShadow: "0 20px 40px -12px rgba(10, 110, 97, 0.15)",
                          borderColor: "#0a6e61",
                        }}
                      >
                        {/* Professional accent design */}
                        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#0a6e61]/5"></div>
                        <div className="absolute right-0 top-0 h-20 w-1 bg-gradient-to-b from-[#0a6e61] to-[#85e539]"></div>
                        
                        {/* Icon with enhanced styling */}
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#0a6e61] to-[#003c32] shadow-md transition-transform duration-300 hover:scale-105 border border-[#ffffff30]">
                          {step.icon}
                        </div>
                        
                        {/* Content with improved typography */}
                        <h3 className="mb-3 text-2xl font-bold text-[#0c1f30]">{step.title}</h3>
                        <p className="mb-6 text-base leading-relaxed text-gray-600">{step.description}</p>
                        
                        <div className="flex flex-col space-y-4">
                          <motion.button 
                            className="w-full rounded-lg bg-gradient-to-r from-[#0a6e61] to-[#003c32] py-3 px-4 text-base font-medium text-white shadow-md flex items-center justify-center"
                            whileHover={{ scale: 1.02, boxShadow: "0 8px 20px -5px rgba(10, 110, 97, 0.35)" }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>{step.action}</span>
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </motion.button>
                          
                          <div className="rounded-lg bg-[#ffb300]/10 p-3 text-sm font-medium text-[#0c1f30] border border-[#ffb300]/20">
                            <span className="flex items-center">
                              <span className="text-[#ffb300] mr-2">✦</span> 
                              {step.highlight}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {/* Animated transaction dots moving down the timeline - enhanced effect */}
            <motion.div
              className="absolute left-12 top-0 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-[#ffb300] shadow-md shadow-[#ffb300]/20"
              animate={{
                y: ['0%', '100%'],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute left-12 top-0 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-[#85e539] shadow-md shadow-[#85e539]/20"
              animate={{
                y: ['0%', '100%'],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 18,
                delay: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute left-12 top-0 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-[#0a6e61] shadow-md shadow-[#0a6e61]/20"
              animate={{
                y: ['0%', '100%'],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 18,
                delay: 12,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
        
        {/* CTA Section - professional enhanced design */}
        <motion.div 
          className="mx-auto mt-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-[#e0eaec] relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#85e539]/5"></div>
            <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-[#0a6e61]/5"></div>
            
            <h3 className="text-2xl font-bold text-[#0c1f30] mb-4">
              Ready to {activeFlow === "owner" ? "List Your Property" : "Start Your Investment Journey"}?
            </h3>
            
            <p className="text-gray-600 mb-8">
              Join thousands of {activeFlow === "owner" ? "property owners" : "investors"} who are already earning passive income with Yield Hive.
            </p>
            
            <motion.button 
              className="rounded-lg bg-gradient-to-r from-[#0a6e61] to-[#003c32] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl flex items-center mx-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px -10px rgba(10, 110, 97, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {activeFlow === "owner" ? "List Your Property" : "Start Investing Today"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            
            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center">
              <Shield className="h-4 w-4 mr-2 text-[#0a6e61]" />
              {activeFlow === "owner" 
                ? "Join over 2,500 property owners earning passive income" 
                : "Join over 10,000 investors earning passive income"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}