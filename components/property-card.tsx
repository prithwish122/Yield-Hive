"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Home, Landmark, TreePine } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Property } from "@/app/explore/page"

interface PropertyCardProps {
  property: Property
  onBuyClick: (propertyId: string) => void
  type?: "explore" | "owned"
}

export default function PropertyCard({ property, onBuyClick, type = "explore" }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Randomly select a property icon
  const icons = [Home, Building2, Landmark, TreePine]
  const IconComponent = icons[Math.floor(property.id.charCodeAt(0) % icons.length)]

  // Generate a random gradient for the card
  const gradients = [
    "from-teal-500 to-blue-500",
    "from-amber-500 to-orange-500",
    "from-green-500 to-emerald-500",
    "from-blue-500 to-indigo-500",
  ]
  const gradient = gradients[Math.floor(property.id.charCodeAt(1) % gradients.length)]

  return (
    <motion.div
      className="relative h-[280px] w-full perspective-1000"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} shadow-lg preserve-3d`}
        animate={{
          rotateY: isHovered ? 15 : 0,
          rotateX: isHovered ? -10 : 0,
          scale: isHovered ? 1.05 : 1,
          z: isHovered ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 flex flex-col p-6 text-white">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <IconComponent className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">{property.name}</h3>
            </div>
            <Badge variant="outline" className="border-white/50 text-white">
              ID: {property.id.substring(0, 6)}
            </Badge>
          </div>

          <div className="mt-auto space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                <div className="text-xs text-white/70">Monthly Income</div>
                <div className="text-lg font-bold">${property.monthlyIncome.toFixed(2)}</div>
              </div>
              <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                <div className="text-xs text-white/70">Shares</div>
                <div className="text-lg font-bold">
                  {property.soldShares}/{property.totalShares}
                </div>
              </div>
            </div>

            {type === "explore" ? (
              <Button
                onClick={() => onBuyClick(property.id)}
                className="w-full bg-white text-slate-800 hover:bg-white/90"
              >
                Buy Shares
              </Button>
            ) : (
              <div className="flex items-center justify-between rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                <div>
                  <div className="text-xs text-white/70">Pending Income</div>
                  <div className="text-lg font-bold">${property.pendingIncome.toFixed(2)}</div>
                </div>
                <Button size="sm" variant="outline" className="border-white/50 text-white hover:bg-white/20">
                  Claim
                </Button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
