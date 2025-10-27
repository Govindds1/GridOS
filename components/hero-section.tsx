"use client"

import { Badge } from "@/components/badge"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
      {/* Geometric Border Frame */}
      <div className="absolute inset-0 -z-10">
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/40" />
        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary/40" />
        {/* Bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary/40" />
        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/40" />
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="primary">Clean & Green Energy FT-IV Project</Badge>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight text-foreground">
            Energy Systems
          </h1>
          <p className="text-xl md:text-2xl text-primary font-light tracking-wider mb-4">-By Govind Raj (RA2311030010265)
          </p>
        </div>

        {/* Central Visual Element - Placeholder for illustration */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glowing circle background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />

            {/* Central glow point */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-primary via-secondary to-primary rounded-full blur-xl opacity-30" />
              <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-primary/40 rounded-full blur-lg" />
            </div>

            {/* Placeholder text - replace with actual illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary/60">⚡</div>
                <p className="text-xs text-foreground mt-2 font-medium drop-shadow-sm">Renewable Energy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle Text */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Three real-world applications exploring renewable energy conversion, storage, and utilization
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#activities"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 smooth-transition border border-primary"
          >
            Explore Projects
          </Link>
          <Link
            href="#about"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 smooth-transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
