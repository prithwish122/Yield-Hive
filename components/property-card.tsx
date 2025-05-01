"use client"

import { Building2, DollarSign, Layers3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Property } from "@/app/explore/page"
import { motion } from "framer-motion"

interface PropertyCardProps {
  property: Property
  onBuyClick: () => void
}

export default function PropertyCard({ property, onBuyClick }: PropertyCardProps) {
  const availableShares = property.totalShares - property.soldShares
  const percentSold = (property.soldShares / property.totalShares) * 100

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-amber-200 h-full flex flex-col">
        <div className="relative h-40 bg-gradient-to-br from-amber-400 to-amber-600 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-4 grid-rows-4 gap-1 p-2">
              {Array(16)
                .fill(0)
                .map((_, i) => (
                  <motion.div
                    key={i}
                    className="aspect-square bg-white rounded-md"
                    animate={{
                      z: Math.random() * 10,
                      rotateX: Math.random() * 45,
                      rotateY: Math.random() * 45,
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  />
                ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Building2 className="h-16 w-16 text-white/80" />
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-amber-800 line-clamp-1">{property.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="text-sm text-slate-500 flex items-center gap-1">
                <DollarSign className="h-3.5 w-3.5" />
                Monthly Income
              </div>
              <div className="text-xl font-bold text-amber-600">${property.monthlyIncome.toFixed(2)}</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Layers3 className="h-3.5 w-3.5" />
                  Shares Sold
                </span>
                <span>{percentSold.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full"
                  style={{ width: `${percentSold}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>{property.soldShares} sold</span>
                <span>{availableShares} available</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
            <Button
              onClick={onBuyClick}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 shadow-md"
              disabled={availableShares === 0}
            >
              {availableShares > 0 ? "Buy Shares" : "Sold Out"}
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
