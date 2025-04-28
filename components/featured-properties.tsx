"use client"

import { motion } from "framer-motion"
import { MapPin, Percent, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const properties = [
  {
    id: 1,
    title: "Oceanview Residences",
    location: "Miami, Florida",
    image: "/placeholder.svg?height=300&width=400",
    roi: "8.2% Annual",
    investors: "142 Investors",
    raised: "82%",
  },
  {
    id: 2,
    title: "Urban Heights Tower",
    location: "Austin, Texas",
    image: "/placeholder.svg?height=300&width=400",
    roi: "7.5% Annual",
    investors: "98 Investors",
    raised: "65%",
  },
  {
    id: 3,
    title: "Golden Wheat Farmland",
    location: "Iowa County",
    image: "/placeholder.svg?height=300&width=400",
    roi: "9.1% Annual",
    investors: "76 Investors",
    raised: "91%",
  },
]

export function FeaturedProperties() {
  return (
    <section id="investments" className="bg-[#f8f6e9] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1a2e44] sm:text-4xl">Featured Investment Opportunities</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our selection of high-yield properties currently available for investment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">{property.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a2e44] group-hover:text-[#4db6ac] transition-colors duration-300">
                  {property.title}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Percent className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">{property.roi}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-[#4db6ac]" />
                    <span className="text-sm font-medium text-gray-700">{property.investors}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-1 flex justify-between">
                    <span className="text-xs font-medium text-gray-500">Funding Progress</span>
                    <span className="text-xs font-semibold text-[#f9a826]">{property.raised}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#4db6ac] to-[#c5e063]"
                      initial={{ width: 0 }}
                      whileInView={{ width: property.raised }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>

                <Button className="mt-6 w-full bg-[#1a2e44] hover:bg-[#0f1c2a]">View Details</Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="outline" className="border-[#4db6ac] text-[#4db6ac] hover:bg-[#e6f7f5]">
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
