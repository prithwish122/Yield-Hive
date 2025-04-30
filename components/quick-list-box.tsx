"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react"
import { useWriteContract } from "wagmi"
import propAbi from "@/contract/cabi.json"


interface QuickListBoxProps {
  onListProperty: (name: string, monthlyIncome: number, totalShares: number) => void
}

export default function QuickListBox({ onListProperty }: QuickListBoxProps) {
  const [name, setName] = useState("")
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [totalShares, setTotalShares] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !monthlyIncome || !totalShares) return

    onListProperty(name, Number.parseFloat(monthlyIncome), Number.parseInt(totalShares, 10))

    // Reset form
    setName("")
    setMonthlyIncome("")
    setTotalShares("")
  }



  const storageSC = "0x7dba8a59f58db102e515c554e3d7546f358dfa85" 

  const { isConnected } = useAppKitAccount() // AppKit hook to get the address and check if the user is connected
  const { chainId } = useAppKitNetwork()  // to get chainid
  const { writeContract, isSuccess } = useWriteContract()  // to interact with contract

  const handleEnlistProp = () => {
    console.log("Write Sepolia Smart Contract")
    writeContract({
      address: storageSC,
      abi: propAbi,
      functionName: 'enlistProperty',
      args: [name, monthlyIncome, totalShares],
    })
    if(isSuccess) {
      console.log("successsfulky called");
      
    }
  }

  return (
    <Card className="border-teal-200 bg-gradient-to-r from-teal-50 to-green-50">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-teal-800">
          <Plus className="h-5 w-5 text-teal-500" />
          Quick List Property
        </CardTitle>
        <CardDescription>List your property in seconds to start earning</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-4">
          <div className="space-y-1">
            <Label htmlFor="quick-name" className="text-xs">
              Name
            </Label>
            <Input
              id="quick-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Property name"
              className="h-9"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="quick-income" className="text-xs">
              Monthly Income ($)
            </Label>
            <Input
              id="quick-income"
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="0.00"
              className="h-9"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="quick-shares" className="text-xs">
              Total Shares
            </Label>
            <Input
              id="quick-shares"
              type="number"
              value={totalShares}
              onChange={(e) => setTotalShares(e.target.value)}
              placeholder="100"
              className="h-9"
              min="1"
              step="1"
              required
            />
          </div>
          <div className="flex items-end">
            <Button type="submit" onClick={handleEnlistProp} className="h-9 w-full bg-teal-600 hover:bg-teal-700">
              List Now
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
