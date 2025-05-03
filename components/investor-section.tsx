"use client"

import { useState } from "react"
import type { Property, Investment } from "@/app/explore/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PropertyCard from "@/components/property-card"
import propAbi from "@/contract/cabi.json"
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react"
import { useWriteContract } from "wagmi"
import { motion } from "framer-motion"
import { Building2, Coins, DollarSign, Layers3, Wallet } from "lucide-react"

interface InvestorSectionProps {
  properties: Property[]
  investments: Investment[]
  buyShares: (propertyId: string, shares: number) => void
  claimIncome: (propertyId: string) => void
}

export default function InvestorSection({ properties, investments, buyShares, claimIncome }: InvestorSectionProps) {
  const [sharesToBuy, setSharesToBuy] = useState("")
  const [selectedPropertyId, setSelectedPropertyId] = useState("")
  const [isBuyDialogOpen, setIsBuyDialogOpen] = useState(false)
  const storageSC = "0xe5f7ca0b01b44e2f1eb59741242e7a78e484c539"

  const { isConnected } = useAppKitAccount() // AppKit hook to get the address and check if the user is connected
  const { chainId } = useAppKitNetwork() // to get chainid
  const { writeContract, isSuccess } = useWriteContract() // to interact with contract

  const handleBuyShares = () => {
    if (!sharesToBuy || !selectedPropertyId) return
    try {
      console.log("Write Sepolia Smart Contract")
      writeContract({
        address: storageSC,
        abi: propAbi,
        functionName: "buyShares",
        args: ["0", 5],
      })
    } catch (error) {
      console.log(error)
    }

    if (isSuccess) {
      console.log("============Successsfully called BUYSHARES============")
    }
    buyShares(selectedPropertyId, Number.parseInt(sharesToBuy, 10))

    // Reset form
    setSharesToBuy("")
    setIsBuyDialogOpen(false)
  }

  const openBuyDialog = (propertyId: string) => {
    setSelectedPropertyId(propertyId)
    setIsBuyDialogOpen(true)
  }

  const handleClaimIncome = (propertyId: string) => {
    claimIncome(propertyId)
  }

  // Filter properties that have available shares
  const availableProperties = properties.filter((property) => property.soldShares < property.totalShares)

  return (
    <div className="grid gap-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-amber-200 shadow-lg shadow-amber-100/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-amber-400 to-amber-600 text-white">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Explore Properties
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {availableProperties.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {availableProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <PropertyCard property={property} onBuyClick={() => openBuyDialog(property.id)} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 text-slate-500 bg-amber-50/50 rounded-xl border border-amber-100"
              >
                <Building2 className="h-12 w-12 mx-auto text-amber-300 mb-4" />
                <p className="text-lg font-medium text-amber-700">
                  No properties available for investment at the moment.
                </p>
                <p className="text-sm text-amber-600/70 mt-2">Check back later for new investment opportunities.</p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-blue-200 shadow-lg shadow-blue-100/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              My Investments
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {investments.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-blue-50">
                    <TableRow>
                      <TableHead className="text-blue-700">Property Name</TableHead>
                      <TableHead className="text-blue-700">Shares Owned</TableHead>
                      <TableHead className="text-blue-700">Pending Income</TableHead>
                      <TableHead className="text-blue-700">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investments.map((investment, index) => (
                      <motion.tr
                        key={investment.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group"
                      >
                        <TableCell className="font-medium group-hover:bg-blue-50/30 transition-colors">
                          {investment.propertyName}
                        </TableCell>
                        <TableCell className="group-hover:bg-blue-50/30 transition-colors">
                          <div className="flex items-center gap-2">
                            <Layers3 className="h-4 w-4 text-blue-500" />
                            {investment.sharesOwned}
                          </div>
                        </TableCell>
                        <TableCell className="group-hover:bg-blue-50/30 transition-colors">
                          <span className="flex items-center gap-1 text-blue-700">
                            <DollarSign className="h-4 w-4" />
                            {investment.pendingIncome.toFixed(2)}
                          </span>
                        </TableCell>
                        <TableCell className="group-hover:bg-blue-50/30 transition-colors">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              onClick={() => handleClaimIncome(investment.propertyId)}
                              disabled={investment.pendingIncome <= 0}
                              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md flex items-center gap-1"
                            >
                              <Coins className="h-4 w-4" />
                              Claim
                            </Button>
                          </motion.div>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 text-slate-500 bg-blue-50/50 rounded-xl border border-blue-100 m-6"
              >
                <Wallet className="h-12 w-12 mx-auto text-blue-300 mb-4" />
                <p className="text-lg font-medium text-blue-700">You don't have any investments yet.</p>
                <p className="text-sm text-blue-600/70 mt-2">Explore properties above to start investing.</p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isBuyDialogOpen} onOpenChange={setIsBuyDialogOpen}>
        <DialogContent className="border-amber-200 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-amber-700 flex items-center gap-2">
              <Layers3 className="h-5 w-5" />
              Buy Shares
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="shares" className="text-amber-700 flex items-center gap-1">
                <Layers3 className="h-4 w-4" />
                Number of Shares
              </Label>
              <Input
                id="shares"
                type="number"
                value={sharesToBuy}
                onChange={(e) => setSharesToBuy(e.target.value)}
                placeholder="1"
                min="1"
                max={
                  selectedPropertyId
                    ? (() => {
                        const property = properties.find((p) => p.id === selectedPropertyId)
                        return property ? property.totalShares - property.soldShares : 0
                      })()
                    : 0
                }
                step="1"
                className="border-amber-200 focus:border-amber-400 focus:ring-amber-400/30"
              />
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleBuyShares}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 shadow-md"
              >
                Buy
              </Button>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
