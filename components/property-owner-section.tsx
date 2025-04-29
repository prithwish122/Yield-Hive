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
import PropertyCard from "@/components/property-card"

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
      <Card>
        <CardHeader>
          <CardTitle>My Properties</CardTitle>
        </CardHeader>
        <CardContent>
          {properties.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onBuyClick={() => openDepositDialog(property.id)}
                  type="owned"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              No properties listed yet. Add your first property above.
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enlist New Property</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEnlistProperty} className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Property name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="monthlyIncome">Monthly Income</Label>
              <Input
                id="monthlyIncome"
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="totalShares">Total Shares</Label>
              <Input
                id="totalShares"
                type="number"
                value={totalShares}
                onChange={(e) => setTotalShares(e.target.value)}
                placeholder="100"
                min="1"
                step="1"
                required
              />
            </div>
            <div className="flex items-end">
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                List Property
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Total/Sold Shares</TableHead>
                <TableHead>Monthly Income</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="font-mono">{property.id}</TableCell>
                  <TableCell>{property.name}</TableCell>
                  <TableCell>
                    {property.soldShares}/{property.totalShares}
                  </TableCell>
                  <TableCell>${property.monthlyIncome.toFixed(2)}</TableCell>
                  <TableCell>
                    <Dialog
                      open={isDepositDialogOpen && selectedPropertyId === property.id}
                      onOpenChange={setIsDepositDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() => openDepositDialog(property.id)}
                          className="text-teal-600 border-teal-600 hover:bg-teal-50"
                        >
                          Deposit Income
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Deposit Income</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="amount">Amount</Label>
                            <Input
                              id="amount"
                              type="number"
                              value={depositAmount}
                              onChange={(e) => setDepositAmount(e.target.value)}
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                            />
                          </div>
                          <Button onClick={handleDepositIncome} className="bg-teal-600 hover:bg-teal-700">
                            Deposit
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
