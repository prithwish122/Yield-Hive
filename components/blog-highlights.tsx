"use client"

import { motion } from "framer-motion"
import { CalendarDays, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "5 Reasons Why Tokenized Real Estate is the Future of Property Investment",
    excerpt:
      "Discover how blockchain technology is revolutionizing the real estate market and creating new opportunities...",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=200&width=400",
    category: "Investment",
  },
  {
    id: 2,
    title: "Beginner's Guide to Earning Passive Income Through Fractional Property Ownership",
    excerpt:
      "Learn how to start building a diversified real estate portfolio with minimal capital and maximum returns...",
    date: "March 28, 2023",
    image: "/placeholder.svg?height=200&width=400",
    category: "Guide",
  },
  {
    id: 3,
    title: "How Smart Contracts Are Transforming Property Transactions",
    excerpt:
      "An in-depth look at how blockchain technology is removing intermediaries and reducing costs in real estate...",
    date: "February 12, 2023",
    image: "/placeholder.svg?height=200&width=400",
    category: "Technology",
  },
]

export function BlogHighlights() {
  return (
    <section id="news" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1a2e44] sm:text-4xl">Latest Insights</h2>
          <p className="mt-4 text-lg text-gray-600">
            Learn about real estate investing, tokenization, and how to maximize your returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-[#4db6ac] px-3 py-1 text-xs font-semibold text-white">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1a2e44] line-clamp-2">{post.title}</h3>
                <p className="mb-4 text-gray-600 line-clamp-3">{post.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#4db6ac] transition-colors hover:text-[#3a8f86]"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="#"
            className="inline-flex items-center text-lg font-medium text-[#1a2e44] transition-colors hover:text-[#4db6ac]"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
