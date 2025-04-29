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

  const handleBuyShares = () => {
    if (!sharesToBuy || !selectedPropertyId) return

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
      <Card>
        <CardHeader>
          <CardTitle>Explore Properties</CardTitle>
        </CardHeader>
        <CardContent>
          {availableProperties.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {availableProperties.map((property) => (
                <PropertyCard key={property.id} property={property} onBuyClick={() => openBuyDialog(property.id)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">No properties available for investment at the moment.</div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Investments</CardTitle>
        </CardHeader>
        <CardContent>
          {investments.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property Name</TableHead>
                  <TableHead>Shares Owned</TableHead>
                  <TableHead>Pending Income</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {investments.map((investment) => (
                  <TableRow key={investment.id}>
                    <TableCell>{investment.propertyName}</TableCell>
                    <TableCell>{investment.sharesOwned}</TableCell>
                    <TableCell>${investment.pendingIncome.toFixed(2)}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleClaimIncome(investment.propertyId)}
                        disabled={investment.pendingIncome <= 0}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        Claim
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-slate-500">
              You don't have any investments yet. Explore properties to invest.
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isBuyDialogOpen} onOpenChange={setIsBuyDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Buy Shares</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="shares">Number of Shares</Label>
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
                        const property = properties.find((p) => p.id === selectedPropertyId);
                        return property ? property.totalShares - property.soldShares : 0;
                      })()
                    : 0
                }
                step="1"
              />
            </div>
            <Button onClick={handleBuyShares} className="bg-amber-500 hover:bg-amber-600">
              Buy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
