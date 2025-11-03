import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Eye, X } from "lucide-react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/badge"

export const metadata = {
  title: "OTEC: Electricity + Freshwater — FT-IV Portfolio",
  description: "Ocean thermal energy conversion for tropical baseload power",
}

export default function OTECPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary smooth-transition mb-6"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <div className="mb-4">
            <Badge variant="primary">Activity 3</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">OTEC: Electricity + Freshwater</h1>
          <p className="text-xl text-muted-foreground">
            Ocean thermal energy conversion for tropical baseload power generation
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="glass-panel p-8 mb-12 glow-accent">
          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground/70 mt-2">
                <Image
                    src="/otec.png"
                    alt="Hybrid Biogas + Wind Energy System for Rural Clinic"
                    width={900}
                    height={506}
                    className="w-full h-full object-contain mx-auto"
                    />
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="block text-center">
              Ocean Thermal Energy Conversion System
            </span>
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-primary mb-3">Source of Energy</h3>
            <p className="text-muted-foreground">
              The energy source is the thermal gradient (temperature difference) between the ocean's warm surface seawater (25−30∘C) and the cold deep seawater (5−10∘C) pumped from about 1000m depth. This difference, although small, provides a constantly available, baseload renewable energy source.
            </p>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-secondary mb-3">Conversion Process</h3>
            <p className="text-muted-foreground">
              This diagram shows a Closed-Cycle OTEC process. The warm surface seawater vaporizes a low-boiling-point working fluid (like ammonia) in the Evaporator. The resulting high-pressure vapor drives a Turbine to produce mechanical power. The spent vapor is then cooled back into a liquid in the Condenser using the cold deep seawater. The cold water used in the condenser or the process of Flash Distillation can also be used to generate freshwater.
            </p>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-primary mb-3">Output/Utilization</h3>
            <p className="text-muted-foreground">
              The system has three primary outputs: Electricity Production (from the turbine/generator), Freshwater Generation (desalinated water via distillation), and Nutrient-Rich Deep Seawater. This deep water, brought to the surface, is suitable for mariculture (cold-water aquaculture) or specialized agriculture due to its high concentration of essential nutrients.
            </p>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-secondary mb-3">Real-world Relevance</h3>
            <p className="text-muted-foreground">
             OTEC is highly relevant for tropical island nations and coastal communities with access to the required deep water. It offers a 24/7 baseload power source, unlike intermittent solar or wind. The ability to simultaneously produce freshwater addresses two critical global needs—energy and clean drinking water—making it a powerful, multi-product solution for sustainable development.
            </p>
          </div>
        </div>

        {/* Explanation */}
        <div className="glass-panel p-8 mb-12 glow-accent">
          <h2 className="text-2xl font-semibold mb-4">Detailed Explanation</h2>
          <ul className="list pl-8 text-foreground mb-4">
            <li>
              Case Study: Ocean Thermal Energy Conversion (OTEC) for Dual Output in a Tropical Island Nation <br />
              <br />
                  This case study models a proposed 10 MW Hybrid OTEC Plant designed to provide baseload power and potable water for a small tropical island community, thereby addressing critical energy and water security challenges.
            </li>
          </ul>

              <h3 className="text-lg font-semibold mb-4">Key Parameters</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border text-muted-foreground">
                    <tr>
                      <th className="text-left py-2 px-3">Parameter</th>
                      <th className="text-left py-2 px-3">Value (Archetypal Data)</th>
                      <th className="text-left py-2 px-3">Role in System</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 px-3 font-medium">Source ΔT</td>
                      <td className="py-3 px-3">≈20 °C (Warm Surface: 26 °C, Cold Deep: 6 °C)</td>
                      <td className="py-3 px-3">Drives the thermodynamic (Rankine) cycle.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Deep Cold Water Intake</td>
                      <td className="py-3 px-3">≈1000 m depth</td>
                      <td className="py-3 px-3">Provides the heat sink for the condenser.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">System Type</td>
                      <td className="py-3 px-3">Hybrid-Cycle OTEC</td>
                      <td className="py-3 px-3">Combines Closed Cycle (electricity) and Open Cycle (water).</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Capacity Factor</td>
                      <td className="py-3 px-3">≈90%</td>
                      <td className="py-3 px-3">Indicates 24/7 operation (vs. ≈30% for wind/solar).</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Water Flow Rate (Gross)</td>
                      <td className="py-3 px-3">≈3 m<sup>3</sup>/s per MW net (high flow rate is necessary)</td>
                      <td className="py-3 px-3">Water volume needed to drive the heat exchangers.</td>
                    </tr>
                  </tbody>
                </table>
          </div>


          <ul className="list pl-8 text-foreground mb-4">
            <li>
              

                  2. Output and Utilization Metrics

                The multi-functional output allows the OTEC system to generate multiple revenue streams and deliver high societal value.
                  <br />
                  <br />

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="border-b border-border text-muted-foreground">
                        <tr>
                          <th className="text-left py-2 px-3">Metric</th>
                          <th className="text-left py-2 px-3">Calculation / Value</th>
                          <th className="text-left py-2 px-3">Utilization Benefit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="py-3 px-3 font-medium">Net Electrical Output</td>
                          <td className="py-3 px-3">10&nbsp;MW</td>
                          <td className="py-3 px-3">Provides stable, baseload power for the island grid.</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-medium">Annual Energy Produced</td>
                          <td className="py-3 px-3">10&nbsp;MW × 8,760&nbsp;h/yr × 0.90 (CF) = 78,840&nbsp;MWh/year</td>
                          <td className="py-3 px-3">Sufficient to power ≈15,000 to 20,000 homes.</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-medium">Levelized Cost of Energy (LCOE)</td>
                          <td className="py-3 px-3">≈ USD&nbsp;0.15 to&nbsp;0.25/kWh (for commercial scale)</td>
                          <td className="py-3 px-3">Competitive with high-cost island diesel generation (≈ USD&nbsp;0.35/kWh+).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 smooth-transition">
                <Eye size={18} />
                View Diagram
              </button>
            </DialogTrigger>

            <DialogContent
              className="p-0 m-0 w-screen h-screen max-w-none rounded-none bg-transparent"
              showCloseButton={false}
            >
              <DialogTitle className="sr-only">Fullscreen diagram viewer</DialogTitle>
              <div className="relative w-full h-full bg-black/90 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/otec.png"
                    alt="OTEC: Electricity + Freshwater - Fullscreen"
                    fill
                    className="object-contain"
                  />
                </div>

                <DialogClose className="absolute top-4 right-4 bg-background/80 rounded-full p-2">
                  <X className="w-4 h-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>


          <a
            href="/otec.png"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted smooth-transition"
            aria-label="Download OTEC diagram"
          >
            <Download size={18} />
            Download Diagram
          </a>
        </div>

        {/* Footer */}
        
      </div>
    </div>
  )
}
