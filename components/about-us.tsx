"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutUs() {
  return (
    <section id="about" className="bg-[#f8f6e9] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            className="rounded-2xl bg-white p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6 inline-block rounded-lg bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              About Us
            </motion.div>
            <motion.h2
              className="mb-6 text-3xl font-bold text-[#1a2e44]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              The Yield Hive team is a powerful group of professionals with vast experience in real estate and
              blockchain.
            </motion.h2>
            <motion.p
              className="mb-6 text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our group of companies maintains stable relations with leading international trading companies and with
              domestic property developers, having proven itself as a reliable partner in business. We're committed to
              democratizing real estate investment through innovative blockchain solutions.
            </motion.p>

            <div className="mt-8 flex items-center">
              <motion.div
                className="mr-4 overflow-hidden rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="CEO"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h4 className="font-bold text-[#1a2e44]">Michael Thompson</h4>
                <p className="text-sm text-gray-500">Founder & CEO</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <motion.div
                className="rounded-2xl bg-[#f9a826]/10 p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="mb-2 text-4xl font-bold text-[#1a2e44]">60,000</h3>
                <p className="text-gray-600">properties tokenized on our platform</p>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-[#4db6ac]/10 p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="mb-2 text-4xl font-bold text-[#1a2e44]">28,000</h3>
                <p className="text-gray-600">active investors worldwide</p>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-[#c5e063]/20 p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="mb-2 text-4xl font-bold text-[#1a2e44]">5,000</h3>
                <p className="text-gray-600">hectares of farmland tokenized</p>
              </motion.div>

              <motion.div
                className="rounded-2xl bg-[#1a2e44]/10 p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="mb-2 text-4xl font-bold text-[#1a2e44]">$25M+</h3>
                <p className="text-gray-600">in rental income distributed</p>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button className="bg-[#1a2e44] hover:bg-[#0f1c2a]">Learn More About Us</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
