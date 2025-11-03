import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Eye, X } from "lucide-react"
import * as Recharts from 'recharts'
import { ChartContainer, ChartTooltip, ChartLegend } from '@/components/ui/chart'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/badge"

export const metadata = {
  title: "Hybrid Biogas + Wind — FT-IV Portfolio",
  description: "Resilient hybrid energy supply for rural healthcare clinics",
}

export default function BiogasWindPage() {
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
            <Badge variant="primary">Activity 1</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hybrid Biogas + Wind</h1>
          <p className="text-xl text-muted-foreground">Resilient hybrid energy supply for rural healthcare clinics</p>
        </div>

        {/* Image Placeholder */}
        <div className="glass-panel p-8 mb-12 glow-accent">
          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground/70 mt-2">
                <Image
                  src="/biogas.png"
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
              Hybrid Biogas + Wind Energy System for Rural Clinic
            </span>
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-primary mb-3">Source of Energy</h3>
            
            <ul className="list-disc pl-8 text-foreground space-y-1.5">
              <li>Biogas: Produced from manure, crop waste, or kitchen scraps via anaerobic digestion. Provides on-demand power and aids waste management.

              </li>
              <li>
                Wind: Captured using horizontal/vertical turbines based on local wind data. Offers clean, zero-fuel-cost energy.
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-primary mb-3">Conversion Process</h3>
            <ul className="list-disc pl-8 text-foreground space-y-1.5">
              <li>Wind: AC to DC rectification with MPPT for optimal power extraction.</li>
              <li>Biogas: Gas cleaning → Engine/Turbine → Generator for electricity.</li>
              <li>Energy Management: DC bus collects power; batteries store backup (Li-ion/Lead-Acid) with charge controller; inverter converts DC to AC for clinic use.</li>
            </ul>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-primary mb-3">Output/Utilization</h3>
            <ul className="list-disc pl-8 text-foreground space-y-1.5">
              <li>	Load Prioritization:
                <ul className="list-disc pl-6 text-foreground space-y-1.3">
                    	<li>Critical: Medical refrigeration, surgery lights, life support, diagnostics.</li>
                    <li>Non-Critical: Lighting, offices, staff housing, water pumps.</li>
                </ul>
              </li>
              <li>	Microgrid Management:
                <ul className="list-disc pl-6 text-foreground space-y-1.3">
                  <li>Automatic source switching (ATS) and voltage/frequency regulation.</li>
                </ul>
              </li>
              <li>	System Sizing:
                <ul className="list-disc pl-6 text-foreground space-y-1.3">
                  <li>Based on daily energy demand and battery autonomy for critical loads.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6 glow-accent">
            <h3 className="text-lg font-semibold text-primary mb-3">Real-world Relevance</h3>
            <ul className="list-disc pl-8 text-foreground space-y-1.5">
              <li>Reliability: Combines wind (variable) and biogas (constant) to ensure 24/7 power for critical medical services.</li>
              <li>Socio-Economic Impact: Enhances rural healthcare quality and creates local maintenance and biogas-related jobs.</li>
              <li>Environmental Benefits: Cuts methane emissions, replaces diesel generators, and supports SDG 7 (Clean Energy) & SDG 3 (Good Health)</li>
            </ul>
          </div>
        </div>

        {/* Explanation */}
        <div className="glass-panel p-8 mb-12 glow-accent">
          <h2 className="text-2xl font-semibold mb-4">Detailed Explanation</h2>
          <ul className="list pl-8 text-foreground mb-4">
            <li>
              Case Study: Hybrid Biogas-Wind System for Off-Grid Rural Health Clinic <br />
              <br />

                  1. Energy Demand Assessment (Output/Utilization)

                    A primary rural health clinic requires reliable power for critical functions 24/7. The average daily electrical demand for a typical rural clinic is estimated to be around 20 to 25 kWh/day.

            </li>
          </ul>
          
        </div>

        {/* Load & Energy Table */}
        <div className="glass-panel p-6 mb-8 glow-accent">
          <h3 className="text-lg font-semibold text-primary mb-3">Load & Estimated Energy</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="text-xs text-muted-foreground">
                  <th className="px-3 py-2">Load Category</th>
                  <th className="px-3 py-2">Key Appliances</th>
                  <th className="px-3 py-2">Power Rating (W)</th>
                  <th className="px-3 py-2">Operating Hours (h/day)</th>
                  <th className="px-3 py-2">Energy Required (kWh/day)</th>
                  <th className="px-3 py-2">Reliability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2 align-top">Critical</td>
                  <td className="px-3 py-2">Vaccine Refrigerator</td>
                  <td className="px-3 py-2">80</td>
                  <td className="px-3 py-2">24</td>
                  <td className="px-3 py-2">1.92</td>
                  <td className="px-3 py-2">24/7</td>
                </tr>
                <tr>
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2">Emergency/Operating Lights</td>
                  <td className="px-3 py-2">300</td>
                  <td className="px-3 py-2">4</td>
                  <td className="px-3 py-2">1.20</td>
                  <td className="px-3 py-2">24/7</td>
                </tr>
                <tr>
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2">Diagnostic Equipment</td>
                  <td className="px-3 py-2">500</td>
                  <td className="px-3 py-2">2</td>
                  <td className="px-3 py-2">1.00</td>
                  <td className="px-3 py-2">24/7</td>
                </tr>
                <tr className="font-medium border-t">
                  <td className="px-3 py-2">&nbsp;</td>
                  <td className="px-3 py-2">Subtotal Critical Load</td>
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2">4.12</td>
                  <td className="px-3 py-2" />
                </tr>

                <tr className="border-t">
                  <td className="px-3 py-2">Non-Critical</td>
                  <td className="px-3 py-2">General Lighting (LED)</td>
                  <td className="px-3 py-2">500</td>
                  <td className="px-3 py-2">12</td>
                  <td className="px-3 py-2">6.00</td>
                  <td className="px-3 py-2">Day/Evening</td>
                </tr>
                <tr>
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2">Fans/Ventilation</td>
                  <td className="px-3 py-2">400</td>
                  <td className="px-3 py-2">12</td>
                  <td className="px-3 py-2">4.80</td>
                  <td className="px-3 py-2">Day</td>
                </tr>
                <tr>
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2">Water Pump</td>
                  <td className="px-3 py-2">750</td>
                  <td className="px-3 py-2">1</td>
                  <td className="px-3 py-2">0.75</td>
                  <td className="px-3 py-2">On-demand</td>
                </tr>
                <tr>
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2">Office Equipment/Charging</td>
                  <td className="px-3 py-2">250</td>
                  <td className="px-3 py-2">8</td>
                  <td className="px-3 py-2">2.00</td>
                  <td className="px-3 py-2">Day</td>
                </tr>
                <tr className="font-medium border-t">
                  <td className="px-3 py-2">&nbsp;</td>
                  <td className="px-3 py-2">Subtotal Non-Critical Load</td>
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2">13.55</td>
                  <td className="px-3 py-2" />
                </tr>

                <tr className="border-t font-semibold">
                  <td className="px-3 py-2">&nbsp;</td>
                  <td className="px-3 py-2">Total Estimated Daily Demand</td>
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2" />
                  <td className="px-3 py-2">≈17.67 kWh/day</td>
                  <td className="px-3 py-2" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>







        <div className="glass-panel p-8 mb-12 glow-accent">

        <h2 className="text-2xl font-semibold mb-4">Detailed Explanation</h2>
        <ul className="list pl-8 text-foreground mb-4">
          <li>
            2. System Sizing and Component Data (Source & Conversion Process)
            <br />
            <br />
            To meet the target of ≈22 kWh/day with high reliability, the system is designed as a hybrid microgrid.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-primary mb-3">Component Sizing & CAPEX</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="text-xs text-muted-foreground">
          <th className="px-3 py-2">Component</th>
          <th className="px-3 py-2">Function (Conversion Process)</th>
          <th className="px-3 py-2">Archetypal Size/Capacity</th>
          <th className="px-3 py-2">Archetypal Cost (Capital)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
          <td className="px-3 py-2">Biogas Source</td>
          <td className="px-3 py-2">Dispatchable Baseload (Waste → Gas → Electricity)</td>
          <td className="px-3 py-2">5 kW Biogas Generator</td>
          <td className="px-3 py-2">USD 6,000</td>
              </tr>
              <tr>
          <td className="px-3 py-2">Wind Energy</td>
          <td className="px-3 py-2">Variable Clean Power (Kinetic → Electricity)</td>
          <td className="px-3 py-2">2 kW Wind Turbine</td>
          <td className="px-3 py-2">USD 5,000</td>
              </tr>
              <tr>
          <td className="px-3 py-2">Storage</td>
          <td className="px-3 py-2">Energy Buffer & Backup (DC storage)</td>
          <td className="px-3 py-2">500 Ah Battery Bank (48V)</td>
          <td className="px-3 py-2">USD 4,000</td>
              </tr>
              <tr>
          <td className="px-3 py-2">Power Electronics</td>
          <td className="px-3 py-2">AC/DC Conversion & Control</td>
          <td className="px-3 py-2">5 kW Inverter/Charger</td>
          <td className="px-3 py-2">USD 2,500</td>
              </tr>
              <tr className="border-t font-semibold">
          <td className="px-3 py-2">Total Estimated Initial Cost (CAPEX)</td>
          <td className="px-3 py-2" />
          <td className="px-3 py-2" />
          <td className="px-3 py-2">≈USD 17,500</td>
              </tr>
            </tbody>
          </table>
        </div>
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
                    src="/biogas.png"
                    alt="Hybrid Biogas + Wind Energy System - Fullscreen"
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
            href="/biogas.png"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted smooth-transition"
            aria-label="Download diagram"
          >
            <Download size={18} />
            Download Diagram
          </a>
        </div>

        {/* Footer */}
        {/* <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 [YOUR_NAME]. Built with Next.js + Tailwind. FT-IV Portfolio.</p>
        </div> */}
      </div>
    </div>
  )
}
