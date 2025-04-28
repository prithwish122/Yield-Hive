"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Maximize2 } from "lucide-react"
import Image from "next/image"

export function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">See How It Works</h2>
          <p className="mt-4 text-lg text-blue-100">
            Take a quick tour of our platform and discover how easy it is to start earning passive income from real
            estate
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-300/20 p-1 shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={videoRef}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
              {!isPlaying ? (
                <>
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="Video thumbnail"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovering ? 0.3 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      onClick={handlePlayClick}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg transition-transform"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-8 w-8 pl-1" fill="white" />
                    </motion.button>
                  </motion.div>
                </>
              ) : (
                <div className="relative h-full w-full bg-black">
                  <div className="flex h-full items-center justify-center">
                    <video className="h-full w-full" autoPlay loop muted playsInline>
                      <source src="https://example.com/demo-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <motion.div
                      className="absolute bottom-4 right-4 flex space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovering ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        onClick={handlePlayClick}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Pause className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Maximize2 className="h-5 w-5" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>

            {/* Video timeline */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
              <motion.div
                className="h-full bg-amber-500"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "65%" : "0%" }}
                transition={{ duration: isPlaying ? 20 : 0, ease: "linear" }}
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="overflow-hidden rounded-lg bg-blue-800/50 p-4 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: item * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="mb-2 text-lg font-semibold text-amber-300">
                  {item === 1 && "Easy Setup"}
                  {item === 2 && "Secure Transactions"}
                  {item === 3 && "Real-time Dashboard"}
                </h3>
                <p className="text-sm text-blue-100">
                  {item === 1 && "Create your account and start investing in minutes with our streamlined onboarding."}
                  {item === 2 && "All transactions are secured by blockchain technology and smart contracts."}
                  {item === 3 && "Monitor your investments and earnings in real-time from any device."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
