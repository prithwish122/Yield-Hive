"use client"

import type React from "react"
import { useState } from "react"
import { Plus, Building2, DollarSign, Layers3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react"
import { useWriteContract } from "wagmi"
import propAbi from "@/contract/cabi.json"
import { motion } from "framer-motion"

interface QuickListBoxProps {
  onListProperty: (name: string, monthlyIncome: number, totalShares: number) => void
}

export default function QuickListBox({ onListProperty }: QuickListBoxProps) {
  const [name, setName] = useState("")
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [totalShares, setTotalShares] = useState("")
  const [isHovering, setIsHovering] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !monthlyIncome || !totalShares) return

    onListProperty(name, Number.parseFloat(monthlyIncome), Number.parseInt(totalShares, 10))

    // Reset form
    setName("")
    setMonthlyIncome("")
    setTotalShares("")
  }

  const storageSC = "0xe5f7ca0b01b44e2f1eb59741242e7a78e484c539"

  const { isConnected } = useAppKitAccount() // AppKit hook to get the address and check if the user is connected
  const { chainId } = useAppKitNetwork() // to get chainid
  const { writeContract, isSuccess } = useWriteContract() // to interact with contract

  const handleEnlistProp = () => {
    console.log("Write Sepolia Smart Contract")
    writeContract({
      address: storageSC,
      abi: propAbi,
      functionName: "enlistProperty",
      args: [name, monthlyIncome, totalShares],
    })
    if (isSuccess) {
      console.log("successsfulky called")
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(45, 212, 191, 0.3)" },
    blur: { scale: 1, boxShadow: "none" },
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <Card className="border-teal-200 bg-gradient-to-r from-teal-50 to-green-50 overflow-hidden relative shadow-lg shadow-teal-100/30">
        {/* 3D Building pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-2 p-2">
            {Array(24)
              .fill(0)
              .map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square bg-teal-500 rounded-lg"
                  animate={{
                    z: isHovering ? Math.random() * 10 : 0,
                    rotateX: isHovering ? Math.random() * 45 : 0,
                    rotateY: isHovering ? Math.random() * 45 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />
              ))}
          </div>
        </div>

        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="flex items-center gap-2 text-teal-800">
            <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-1.5 rounded-lg shadow-md">
              <Plus className="h-4 w-4 text-white" />
            </div>
            <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
              Quick List Property
            </span>
          </CardTitle>
          <CardDescription className="text-teal-700/70">List your property in seconds to start earning</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-4">
            <div className="space-y-1">
              <Label htmlFor="quick-name" className="text-xs text-teal-700 flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                Name
              </Label>
              <motion.div whileFocus="focus" variants={inputVariants}>
                <Input
                  id="quick-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Property name"
                  className="h-9 border-teal-200 focus:border-teal-400 focus:ring-teal-400/30 transition-all"
                  required
                />
              </motion.div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="quick-income" className="text-xs text-teal-700 flex items-center gap-1">
                <DollarSign className="h-3 w-3" />
                Monthly Income ($)
              </Label>
              <motion.div whileFocus="focus" variants={inputVariants}>
                <Input
                  id="quick-income"
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  placeholder="0.00"
                  className="h-9 border-teal-200 focus:border-teal-400 focus:ring-teal-400/30 transition-all"
                  min="0"
                  step="0.01"
                  required
                />
              </motion.div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="quick-shares" className="text-xs text-teal-700 flex items-center gap-1">
                <Layers3 className="h-3 w-3" />
                Total Shares
              </Label>
              <motion.div whileFocus="focus" variants={inputVariants}>
                <Input
                  id="quick-shares"
                  type="number"
                  value={totalShares}
                  onChange={(e) => setTotalShares(e.target.value)}
                  placeholder="100"
                  className="h-9 border-teal-200 focus:border-teal-400 focus:ring-teal-400/30 transition-all"
                  min="1"
                  step="1"
                  required
                />
              </motion.div>
            </div>
            <div className="flex items-end">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                <Button
                  type="submit"
                  onClick={handleEnlistProp}
                  className="h-9 w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md shadow-teal-300/30 border border-teal-300/50"
                >
                  List Now
                </Button>
              </motion.div>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
