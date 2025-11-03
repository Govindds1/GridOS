import Link from "next/link"
import Image from "next/image"
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
  title: "Wave Energy → Desalination — FT-IV Portfolio",
  description: "Coastal water security through wave energy conversion",
}

export default function WaveDesalPage() {
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
            <Badge variant="secondary">Activity 2</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wave Energy → Desalination</h1>
          <p className="text-xl text-muted-foreground">
            Coastal water security through wave energy conversion and reverse osmosis
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="glass-panel p-8 mb-12 glow-accent">
            <div className="text-center">
              <p className="text-sm text-muted-foreground/70 mt-2">
                <Image
                  src="/wave.png"
                  alt="Hybrid Biogas + Wind Energy System for Rural Clinic"
                  width={900}
                  height={506}
                  className="w-full h-full object-contain mx-auto"
                />
              </p>
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
             The Source of Energy is the kinetic and potential energy stored in the ocean's surface waves, driven by wind and gravitational forces. This resource is predictable and generally reliable in coastal zones, offering a high-density, renewable power input right at the site of the desalination plant.
            </p>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-secondary mb-3">Conversion Process</h3>
            <p className="text-muted-foreground">
              The system begins with the Wave Energy Converter (WEC) Array, which captures the wave motion and transforms it into mechanical or hydraulic power. The Power Take-Off (PTO) System converts this raw power—either directly via hydraulic pumps (used to pressurize water for direct desalination) or via a generator—into usable electrical power. This power is routed through a Power Conditioning block, often involving a Battery Bank for energy storage, which stabilizes the inherently variable wave power into a steady, reliable electrical feed.
            </p>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-primary mb-3">Output/Utilization</h3>
            <p className="text-muted-foreground">
              The stabilized electrical output is used to power the Desalination Plant, which draws Seawater Intake. The plant, typically using a high-energy process like Reverse Osmosis (RO), separates the salt, producing two key outputs: Freshwater (for storage/distribution) and concentrated saltwater Brine Discharge back into the ocean.
            </p>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-secondary mb-3">Real-world Relevance</h3>
            <p className="text-muted-foreground">
              This integration is highly relevant for coastal communities facing water scarcity and energy costs. It directly links a clean, localized energy source (waves) with an essential process (desalination), achieving energy independence and carbon-free operation for water production. This bypasses the need for grid connection or fossil fuels, making it a viable, sustainable solution for remote or island environments.
            </p>
          </div>
        </div>

        {/* Explanation */}
        <div className="glass-panel p-8 mb-12 glow-accent">
          <h2 className="text-2xl font-semibold mb-4">Detailed Explanation</h2>
          <ul className="list pl-8 text-foreground mb-4">
            <li>
              Case Study: Autonomous Wave-Powered Reverse Osmosis (RO) Desalination <br />
              <br />

                  This case study models an autonomous, off-grid Wave Energy Converter (WEC) system designed to power a small-scale coastal desalination facility for a community or resort, focusing on the high-energy demands of the Reverse Osmosis (RO) process.
                  <br />
                  <br />

                  1. Energy Requirement and Water Demand (Output/Utilization)

                  The most energy-intensive component is the Reverse Osmosis (RO) unit. Modern Seawater RO plants, especially with energy recovery devices, have reduced energy consumption significantly.
            </li>
          </ul>


          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <caption className="text-xs text-muted-foreground pb-2">
                Archetypal sizing for wave-powered desalination
              </caption>
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3 text-left text-foreground border-b border-border w-[28%]">Metric</th>
                  <th className="px-4 py-3 text-left text-foreground border-b border-border w-[42%]">Value (Archetypal Data)</th>
                  <th className="px-4 py-3 text-left text-foreground border-b border-border w-[30%]">Utilization Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 align-top border-b border-border">
                    Target Daily Water Production
                  </td>
                  <td className="px-4 py-3 align-top border-b border-border">
                    1,000 m<sup>3</sup>/day (approx. 264,000 US gallons/day)
                  </td>
                  <td className="px-4 py-3 align-top border-b border-border">
                    Sufficient for a small town or a large industrial complex.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top border-b border-border">
                    Specific Energy Consumption (SEC) of RO
                  </td>
                  <td className="px-4 py-3 align-top border-b border-border">
                    3.0 kWh/m<sup>3</sup> (state‑of‑the‑art SWRO)
                  </td>
                  <td className="px-4 py-3 align-top border-b border-border">
                    The energy needed to produce one unit of fresh water.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top border-b border-border">
                    Total Daily Energy Demand
                  </td>
                  <td className="px-4 py-3 align-top border-b border-border">
                    1,000 m<sup>3</sup>/day × 3.0 kWh/m<sup>3</sup> = 3,000 kWh/day
                  </td>
                  <td className="px-4 py-3 align-top border-b border-border">
                    The required output from the wave energy system.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">
                    Required Power Rating
                  </td>
                  <td className="px-4 py-3 align-top">
                    3,000 kWh/day ÷ 24 h ≈ 125 kW (continuous)
                  </td>
                  <td className="px-4 py-3 align-top">
                    The minimum power capacity needed from the WEC array.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="list pl-8 text-foreground mb-4">
            <li>
              2. System Sizing and Conversion Data

                The system must convert the mechanical energy of the waves into a stable, high-quality electrical source required by the RO pumps. <br />
              <br />

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                      <caption className="text-xs text-muted-foreground pb-2">
                        System components, sizing, and archetypal CAPEX
                      </caption>
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-3 text-left text-foreground border-b border-border">Component</th>
                          <th className="px-4 py-3 text-left text-foreground border-b border-border">Function (Conversion Process)</th>
                          <th className="px-4 py-3 text-left text-foreground border-b border-border">Archetypal Size/Capacity</th>
                          <th className="px-4 py-3 text-left text-foreground border-b border-border">Archetypal Capital Cost (CAPEX)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-3 align-top border-b border-border">WEC Array (Source)</td>
                          <td className="px-4 py-3 align-top border-b border-border">Captures wave motion (e.g., Point Absorber type)</td>
                          <td className="px-4 py-3 align-top border-b border-border">5×50 kW WEC Units (Rated 250 kW Total)</td>
                          <td className="px-4 py-3 align-top border-b border-border">USD 2,000,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 align-top border-b border-border">Power Take-Off (PTO)</td>
                          <td className="px-4 py-3 align-top border-b border-border">Converts wave motion to electrical/hydraulic power</td>
                          <td className="px-4 py-3 align-top border-b border-border">Hydraulic pump/Generator sets</td>
                          <td className="px-4 py-3 align-top border-b border-border">Included in WEC CAPEX</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 align-top border-b border-border">Battery Bank</td>
                          <td className="px-4 py-3 align-top border-b border-border">Stabilizes intermittent wave power; provides surge capacity</td>
                          <td className="px-4 py-3 align-top border-b border-border">1,500 kWh storage capacity</td>
                          <td className="px-4 py-3 align-top border-b border-border">USD 450,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 align-top border-b border-border">Power Conditioning</td>
                          <td className="px-4 py-3 align-top border-b border-border">Regulates voltage/frequency for Desalination Plant</td>
                          <td className="px-4 py-3 align-top border-b border-border">200 kW Inverter/Rectifier</td>
                          <td className="px-4 py-3 align-top border-b border-border">USD 50,000</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 align-top font-medium">Total Estimated Initial Cost (CAPEX)</td>
                          <td className="px-4 py-3 align-top"></td>
                          <td className="px-4 py-3 align-top"></td>
                          <td className="px-4 py-3 align-top font-medium">≈USD 2,500,000</td>
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
                            src="/wave.png"
                            alt="Wave Energy → Desalination - Fullscreen"
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
            href="/wave.png"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted smooth-transition"
            aria-label="Download wave diagram"
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
