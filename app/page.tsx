import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { ActivityCard } from "@/components/activity-card"

export default function Home() {
  const activities = [
    {
      title: "Hybrid Biogas + Wind",
      description: "Resilient hybrid energy supply for rural healthcare clinics combining biogas and wind power.",
      href: "/activity/biogas-wind",
      tags: ["Block Diagram", "150–200 words"],
    },
    {
      title: "Wave Energy → Desalination",
      description: "Coastal water security through wave energy conversion and reverse osmosis desalination.",
      href: "/activity/wave-desal",
      tags: ["Block Diagram", "150–200 words"],
    },
    {
      title: "OTEC: Electricity + Freshwater",
      description: "Tropical baseload power generation using ocean thermal energy conversion with co-benefits.",
      href: "/activity/otec",
      tags: ["Block Diagram", "150–200 words"],
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <HeroSection />

        {/* Activities Section */}
        <section id="activities" className="px-4 md:px-8 py-20 max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Activities</h2>
            <p className="text-lg text-muted-foreground">
              Explore three renewable energy systems and their real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <ActivityCard key={activity.href} {...activity} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 md:px-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Govind Raj. Built with Next.js + Tailwind.</p>
        </footer>
      </main>
    </div>
  )
}
