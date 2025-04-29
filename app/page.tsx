import { Preloader } from "@/components/preloader"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { PlatformOverview } from "@/components/platform-overview"
import { SuccessStats } from "@/components/success-stats"
import { AboutUs } from "@/components/about-us"
import { FeaturedProperties } from "@/components/featured-properties"
import { BlogHighlights } from "@/components/blog-highlights"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f6e9]">
      <Preloader />
      <Navbar />
      <HeroSection />
      <FloatingElements />
      <ValueProposition />
      <PlatformOverview />
      {/* <AboutUs /> */}
      {/* <SuccessStats /> */}
      <FeaturedProperties />
      <BlogHighlights />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
