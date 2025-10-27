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
              Here is the explanation for the Hybrid Renewable Energy System diagram: <br />
              <br />

                  The Source of Energy is the kinetic and potential energy of ocean waves, a high-density, predictable, and clean resource prevalent along many coastlines.
                  <br />
                  <br />

                  The Conversion Process begins with the Wave Energy Converter (WEC) Array, which captures wave motion and translates it into mechanical or hydraulic power. The Power Take-Off (PTO) System converts this raw energy into stable electrical power, which is then regulated by Power Conditioning circuitry and a Battery Bank for energy storage. This storage is crucial as it stabilizes the intermittent wave power, providing a steady electrical supply required for reliable plant operation.
            </li>
          </ul>
          <ul className="list pl-8 text-foreground mb-4">
            <li>
              Here is the explanation for the Hybrid Renewable Energy System diagram: <br />
              <br />

                  TThe primary Output/Utilization is powering the Desalination Plant, which typically uses Reverse Osmosis (RO). The plant draws seawater and utilizes the conditioned electrical power to force water through membranes, yielding Freshwater for community distribution and discharging a concentrated saltwater Brine Discharge back to the sea.
                  <br />
                  <br />

                  The Real-World Application Relevance is high for coastal communities suffering from water scarcity. This system provides a carbon-free, localized solution that achieves water security and energy independence by eliminating reliance on fossil fuels or centralized grids. By linking a clean, consistent ocean resource directly to an essential need (potable water), it offers a sustainable model for remote island and coastal development.
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
