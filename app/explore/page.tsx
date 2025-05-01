"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyOwnerSection from "@/components/property-owner-section"
import InvestorSection from "@/components/investor-section"
import TokenClaimBox from "@/components/token-claim-box"
import QuickListBox from "@/components/quick-list-box"
import { Navbar } from "@/components/navbar"
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react"
import { useWriteContract } from "wagmi"
import propAbi from "@/contract/cabi.json"
import { motion } from "framer-motion"
import { ChevronRight, Github, Hexagon, Twitter } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: "0",
      name: "Sunset Valley Farm",
      monthlyIncome: 1200,
      totalShares: 100,
      soldShares: 45,
      pendingIncome: 350,
    },
    {
      id: "1",
      name: "Urban Heights Apartment",
      monthlyIncome: 2500,
      totalShares: 200,
      soldShares: 120,
      pendingIncome: 600,
    },
    {
      id: "prop9876543",
      name: "Green Meadows Estate",
      monthlyIncome: 1800,
      totalShares: 150,
      soldShares: 30,
      pendingIncome: 200,
    },
    {
      id: "prop5432167",
      name: "Riverside Warehouse",
      monthlyIncome: 3200,
      totalShares: 250,
      soldShares: 180,
      pendingIncome: 800,
    },
  ])

  const [investments, setInvestments] = useState<Investment[]>([])

  const storageSC = "0xdbca3ec6fcc34ca570bf8eb54ca0099809bc20bf"

  const { isConnected } = useAppKitAccount() // AppKit hook to get the address and check if the user is connected
  const { chainId } = useAppKitNetwork() // to get chainid
  const { writeContract, isSuccess } = useWriteContract() // to interact with contract

  const handleBuyShares = (propertyId: string, shares: number) => {
    try {
      console.log("Write Sepolia Smart Contract")
      writeContract({
        address: storageSC,
        abi: propAbi,
        functionName: "enlistProperty",
        args: [propertyId, shares],
      })
    } catch (error) {
      console.log(error)
    }

    if (isSuccess) {
      console.log("============Successsfully called BUYSHARES============")
    }
  }

  // Function to enlist a new property
  const enlistProperty = (name: string, monthlyIncome: number, totalShares: number) => {
    const newProperty: Property = {
      id: `prop${Date.now().toString().slice(-7)}`,
      name,
      monthlyIncome,
      totalShares,
      soldShares: 0,
      pendingIncome: 0,
    }
    setProperties([...properties, newProperty])
  }

  // Function to deposit income to a property
  const depositIncome = (propertyId: string, amount: number) => {
    setProperties(
      properties.map((property) => {
        if (property.id === propertyId) {
          return {
            ...property,
            pendingIncome: property.pendingIncome + amount,
          }
        }
        return property
      }),
    )
  }

  // Function to buy shares of a property
  const buyShares = (propertyId: string, shares: number) => {
    // Update properties
    const updatedProperties = properties.map((property) => {
      if (property.id === propertyId) {
        handleBuyShares(propertyId, shares)
        return {
          ...property,
          soldShares: property.soldShares + shares,
        }
      }
      return property
    })
    setProperties(updatedProperties)

    // Update investments
    const property = properties.find((p) => p.id === propertyId)
    if (!property) return

    const existingInvestment = investments.find((inv) => inv.propertyId === propertyId)

    if (existingInvestment) {
      setInvestments(
        investments.map((inv) => {
          if (inv.propertyId === propertyId) {
            return {
              ...inv,
              sharesOwned: inv.sharesOwned + shares,
            }
          }
          return inv
        }),
      )
    } else {
      const newInvestment: Investment = {
        id: Date.now().toString(),
        propertyId,
        propertyName: property.name,
        sharesOwned: shares,
        pendingIncome: 0,
      }
      setInvestments([...investments, newInvestment])
    }
  }

  // Function to claim income from a property
  const claimIncome = (propertyId: string) => {
    setInvestments(
      investments.map((investment) => {
        if (investment.propertyId === propertyId) {
          return {
            ...investment,
            pendingIncome: 0, // Reset pending income after claiming
          }
        }
        return investment
      }),
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-teal-50/50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-full">
            {Array(72)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-amber-400 to-teal-500 rounded-lg"
                  animate={{
                    z: Math.random() * 20,
                    rotateX: Math.random() * 45,
                    rotateY: Math.random() * 45,
                  }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />
              ))}
          </div>
        </div>

        {/* <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="relative h-20 w-20 bg-gradient-to-br from-amber-400 to-teal-500 rounded-2xl shadow-lg shadow-amber-200/50 flex items-center justify-center">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "linear" }}
                >
                  <Hexagon className="h-12 w-12 text-white" strokeWidth={1.5} />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-teal-600 to-amber-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Yield Hive
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Fractional Real Estate Investment Platform
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md border border-amber-100">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <span className="text-sm">Tokenized real estate with blockchain security</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md border border-amber-100">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"></div>
                <span className="text-sm">Fractional ownership</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md border border-amber-100">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <span className="text-sm">Automated rental payouts</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-md border border-amber-100">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"></div>
                <span className="text-sm">Diversified investment portfolio</span>
              </div>
            </motion.div>
          </motion.div>
        </div> */}
      </div>

      <div className="container mx-auto px-4 pb-24">
        {/* Top action boxes */}
        <motion.div
          className="grid gap-6 mb-12 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <QuickListBox onListProperty={enlistProperty} />
          <TokenClaimBox />
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl border border-amber-100/50 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Tabs defaultValue="property-owner" className="w-full">
            <TabsList className="grid w-full grid-cols-2 p-1 bg-amber-50/50">
              <TabsTrigger
                value="property-owner"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-700 data-[state=active]:text-white rounded-lg py-3 transition-all duration-300"
              >
                Property Owner
              </TabsTrigger>
              <TabsTrigger
                value="investor"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-400 data-[state=active]:to-amber-600 data-[state=active]:text-white rounded-lg py-3 transition-all duration-300"
              >
                Investor
              </TabsTrigger>
            </TabsList>
            <div className="p-6">
              <TabsContent value="property-owner">
                <PropertyOwnerSection
                  properties={properties}
                  enlistProperty={enlistProperty}
                  depositIncome={depositIncome}
                />
              </TabsContent>
              <TabsContent value="investor">
                <InvestorSection
                  properties={properties}
                  investments={investments}
                  buyShares={buyShares}
                  claimIncome={claimIncome}
                />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

// Types
export interface Property {
  id: string
  name: string
  monthlyIncome: number
  totalShares: number
  soldShares: number
  pendingIncome: number
}

export interface Investment {
  id: string
  propertyId: string
  propertyName: string
  sharesOwned: number
  pendingIncome: number
}
