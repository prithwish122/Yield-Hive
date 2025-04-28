"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="bg-[#1a2e44] py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Stay Updated</h2>
          <p className="mt-4 text-lg text-blue-100">
            Get the latest investment opportunities straight to your inbox and never miss a chance to grow your
            portfolio.
          </p>

          <div className="mt-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 flex-grow border-0 bg-white/10 text-white placeholder:text-blue-200 focus-visible:ring-[#4db6ac]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="h-12 bg-[#4db6ac] text-white hover:bg-[#3a8f86] sm:min-w-[120px]">
                    Subscribe
                  </Button>
                </div>
                <p className="mt-2 text-xs text-blue-200">
                  By subscribing, you agree to our{" "}
                  <a href="#" className="underline hover:text-[#c5e063]">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:text-[#c5e063]">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto flex max-w-md flex-col items-center justify-center rounded-lg bg-white/10 p-6"
              >
                <CheckCircle className="mb-2 h-12 w-12 text-[#4db6ac]" />
                <h3 className="text-xl font-semibold">Thank You for Subscribing!</h3>
                <p className="mt-1 text-blue-100">We've sent a confirmation email to your inbox.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
