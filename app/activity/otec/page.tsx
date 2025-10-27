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
              Here is the explanation for the Hybrid Renewable Energy System diagram: <br />
              <br />

                  The Source of Energy for the OTEC system is the thermal gradient of the ocean—the constant temperature difference (≈20∘C) between warm surface seawater and cold deep seawater (from ≈1000m depth). This makes OTEC a reliable, baseload renewable source, unlike intermittent solar or wind.
                  <br />
                  <br />

                  The Conversion Process illustrated here is a Closed-Cycle OTEC. The Evaporator uses the warm water to vaporize a low-boiling-point working fluid (like ammonia). This high-pressure vapor drives the Turbine to produce mechanical power, which is converted to Electricity Production. The vapor is then condensed back to a liquid by the cold deep seawater in the Condenser. Crucially, the cold water can also be used in a separate Flash Distillation unit to create a vacuum, boiling the warm seawater to produce steam that yields Freshwater Generation.
            </li>
          </ul>
          <ul className="list pl-8 text-foreground mb-4">
            <li>
              

                  The Output/Utilization is multi-functional: reliable Electricity, potable Freshwater, and Nutrient-Rich Deep Seawater. This nutrient-rich output is invaluable for sustaining mariculture (aquaculture) or specialized cooling systems.
                  <br />
                  <br />

                  The Real-World Application Relevance is significant for tropical island nations and coastal regions lacking fresh water or reliable power. By simultaneously providing 24/7 power and desalinated water, OTEC addresses two critical infrastructure challenges, supporting public health, agriculture, and economic development in a sustainable, carbon-free manner.
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
