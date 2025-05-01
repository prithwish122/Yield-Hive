"use client"

import type React from "react"
import { useState } from "react"
import type { Property } from "@/app/explore/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Building2, CreditCard, DollarSign } from "lucide-react"

interface PropertyOwnerSectionProps {
  properties: Property[]
  enlistProperty: (name: string, monthlyIncome: number, totalShares: number) => void
  depositIncome: (propertyId: string, amount: number) => void
}

export default function PropertyOwnerSection({ properties, enlistProperty, depositIncome }: PropertyOwnerSectionProps) {
  const [name, setName] = useState("")
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [totalShares, setTotalShares] = useState("")
  const [depositAmount, setDepositAmount] = useState("")
  const [selectedPropertyId, setSelectedPropertyId] = useState("")
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false)

  const handleEnlistProperty = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !monthlyIncome || !totalShares) return

    enlistProperty(name, Number.parseFloat(monthlyIncome), Number.parseInt(totalShares, 10))

    // Reset form
    setName("")
    setMonthlyIncome("")
    setTotalShares("")
  }

  const handleDepositIncome = () => {
    if (!depositAmount || !selectedPropertyId) return

    depositIncome(selectedPropertyId, Number.parseFloat(depositAmount))

    // Reset form
    setDepositAmount("")
    setIsDepositDialogOpen(false)
  }

  const openDepositDialog = (propertyId: string) => {
    setSelectedPropertyId(propertyId)
    setIsDepositDialogOpen(true)
  }

  return (
    <div className="grid gap-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="border-teal-200 shadow-lg shadow-teal-100/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-700 text-white">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Property Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-teal-50">
                  <TableRow>
                    <TableHead className="text-teal-700">Property ID</TableHead>
                    <TableHead className="text-teal-700">Name</TableHead>
                    <TableHead className="text-teal-700">Total/Sold Shares</TableHead>
                    <TableHead className="text-teal-700">Monthly Income</TableHead>
                    <TableHead className="text-teal-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties.map((property, index) => (
                    <motion.tr
                      key={property.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group"
                    >
                      <TableCell className="font-mono text-xs bg-teal-50/50 group-hover:bg-teal-50 transition-colors">
                        {property.id}
                      </TableCell>
                      <TableCell className="font-medium group-hover:bg-teal-50/30 transition-colors">
                        {property.name}
                      </TableCell>
                      <TableCell className="group-hover:bg-teal-50/30 transition-colors">
                        <div className="flex items-center gap-2">
                          <div className="w-full max-w-24 bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full"
                              style={{ width: `${(property.soldShares / property.totalShares) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">
                            {property.soldShares}/{property.totalShares}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="group-hover:bg-teal-50/30 transition-colors">
                        <span className="flex items-center gap-1 text-teal-700">
                          <DollarSign className="h-4 w-4" />
                          {property.monthlyIncome.toFixed(2)}
                        </span>
                      </TableCell>
                      <TableCell className="group-hover:bg-teal-50/30 transition-colors">
                        <Dialog
                          open={isDepositDialogOpen && selectedPropertyId === property.id}
                          onOpenChange={setIsDepositDialogOpen}
                        >
                          <DialogTrigger asChild>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="outline"
                                onClick={() => openDepositDialog(property.id)}
                                className="text-teal-600 border-teal-600 hover:bg-teal-50 flex items-center gap-1"
                              >
                                <CreditCard className="h-4 w-4" />
                                Deposit Income
                              </Button>
                            </motion.div>
                          </DialogTrigger>
                          <DialogContent className="border-teal-200 shadow-xl">
                            <DialogHeader>
                              <DialogTitle className="text-teal-700 flex items-center gap-2">
                                <CreditCard className="h-5 w-5" />
                                Deposit Income
                              </DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="amount" className="text-teal-700 flex items-center gap-1">
                                  <DollarSign className="h-4 w-4" />
                                  Amount
                                </Label>
                                <Input
                                  id="amount"
                                  type="number"
                                  value={depositAmount}
                                  onChange={(e) => setDepositAmount(e.target.value)}
                                  placeholder="0.00"
                                  min="0"
                                  step="0.01"
                                  className="border-teal-200 focus:border-teal-400 focus:ring-teal-400/30"
                                />
                              </div>
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                  onClick={handleDepositIncome}
                                  className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md"
                                >
                                  Deposit
                                </Button>
                              </motion.div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
