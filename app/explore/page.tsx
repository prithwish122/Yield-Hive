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

  const storageSC = "0x7dba8a59f58db102e515c554e3d7546f358dfa85"

  const { isConnected } = useAppKitAccount() // AppKit hook to get the address and check if the user is connected
  const { chainId } = useAppKitNetwork()  // to get chainid
  const { writeContract, isSuccess } = useWriteContract()  // to interact with contract

  const handleBuyShares = (propertyId: string, shares: number) => {
    try {
      console.log("Write Sepolia Smart Contract")
      writeContract({
        address: storageSC,
        abi: propAbi,
        functionName: 'enlistProperty',
        args: [propertyId, shares],
      })
    } catch (error) {
      console.log(error);     
    }

    if (isSuccess) {
      console.log("============Successsfully called BUYSHARES============");

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
    <div>
      <Navbar />
      <div className="container mx-auto py-24 px-4">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {/* <span className="text-amber-400">AGRO-</span>
          <span className="text-slate-800">INDUSTRIAL</span>
          <span className="text-teal-400"> HOLDING</span> */}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <span className="text-sm">Tokenized real estate with blockchain security</span>
            </div>
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <span className="text-sm">Fractional ownership</span>
            </div>
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <span className="text-sm">Automated rental payouts</span>
            </div>
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <span className="text-sm">Diversified investment portfolio</span>
            </div>
          </div>
        </div>

        {/* Top action boxes */}
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <QuickListBox onListProperty={enlistProperty} />
          <TokenClaimBox />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <Tabs defaultValue="property-owner" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="property-owner">Property Owner</TabsTrigger>
              <TabsTrigger value="investor">Investor</TabsTrigger>
            </TabsList>
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
          </Tabs>
        </div>
      </div>
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
