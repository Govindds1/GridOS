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
              Here is the explanation for the Hybrid Renewable Energy System diagram: <br />
              <br />

                  This system utilizes two sources of energy: Biogas and Wind Energy. Biogas is produced from organic waste (like animal manure or agricultural residue) via anaerobic digestion, offering a reliable, on-demand fuel source. Wind energy is captured by a turbine, providing clean power when wind conditions are favorable.
                  <br />
                  <br />

                  The conversion process involves several steps. The wind turbine generates AC power, which is typically converted to DC via a rectifier in the Wind Energy Converter. The Biogas is combusted in an Engine/Generator to produce AC power, which is often rectified to DC or directly fed to the DC Bus depending on the system design. All sources feed into a central DC Bus. An Inverter then converts the stored DC power back into stable AC power for the loads. Crucially, a Battery Bank stores excess energy, stabilizing the supply and allowing the system to power the clinic when neither the wind nor the biogas generator is running.
            </li>
          </ul>
          <ul className="list pl-8 text-foreground mb-4">
            <li>
              

                  The output/utilization is the delivery of stable, reliable AC power to the rural health clinic's Critical Loads (e.g., medical equipment, lighting, refrigeration) and Non-Critical Loads (e.g., staff quarters).
                  <br />
                  <br />

                  The real-world application relevance is high, especially for off-grid communities. This hybrid approach overcomes the intermittency of single renewable sources (wind only or solar only). By combining the variable, clean energy from wind with the controllable, dispatchable power from biogas, the system ensures a high level of energy security and quality, which is vital for operating life-saving medical equipment in a rural health clinic.
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
