'use client'

import { useState } from 'react'

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const tools = [
    {
      id: 'thermal-modeler',
      name: '1-Node Orbital Thermal Modeler',
      description: 'An engineering tool to solve the 1-node energy balance equation for satellite payloads, including orbital mechanics and transient analysis.',
      category: 'Thermal Analysis',
      details: 'Simulates orbital temperature profiles by solving energy balance equations, accounting for solar radiation, Earth IR, conduction coupling, and internal power dissipation.'
    },
    {
      id: 'runway-fov',
      name: 'Runway FoV Calculator',
      description: 'Calculate minimum field of view requirements for ATC cameras covering a runway, including optional vertical field of view analysis.',
      category: 'Aerospace Systems',
      details: 'Determines the minimum horizontal and vertical field of view needed for air traffic control cameras to adequately cover a runway, supporting multiple runway configurations with flexible unit conversion.'
    },
    {
      id: 'm6-bolt',
      name: 'The M6 Bolt: Interactive Analysis',
      description: 'An interactive analysis exploring why the M6 bolt is the dominant fastener choice through performance, economic, and ergonomic factors.',
      category: 'Engineering Analysis',
      details: 'Analyzes the M6 bolt\'s widespread adoption by comparing strength, cost, tooling, and human factors against other common bolt sizes, demonstrating optimization across multiple domains.'
    },
    {
      id: 'mass-calculator',
      name: 'CAD Mass Calculator',
      description: 'Calculate component mass from volume and material density, with support for custom materials and calculation history.',
      category: 'Design & Analysis',
      details: 'Quickly compute component mass using predefined and custom material properties, supporting multiple units and maintaining a history of calculations for design iterations.'
    }
  ]

  return (
    <section id="tools" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">Engineering Tools</h2>
          <div className="w-12 h-px bg-accent/50 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70">
            A collection of simple, practical HTML tools I built to speed up calculations, perform quick sanity checks, and streamline my daily engineering workflow. These tools are designed for clarity, reliability, and ease of use.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="p-6 border border-border rounded-lg bg-card hover:border-accent/50 transition-all cursor-pointer"
              onClick={() => setSelectedTool(tool.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{tool.name}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{tool.category}</p>
                </div>
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-foreground/70 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* Modal for tool details */}
        {selectedTool && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold">
                  {tools.find(t => t.id === selectedTool)?.name}
                </h3>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-foreground/70">{tools.find(t => t.id === selectedTool)?.details}</p>
                </div>

                {selectedTool === 'thermal-modeler' && (
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-4">
                      Click below to open the interactive thermal analysis tool in a new window.
                    </p>
                    <a
                      href="/tools/thermal-modeler.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-accent text-background font-medium rounded hover:bg-accent/90 transition-colors"
                    >
                      Open Thermal Modeler
                    </a>
                  </div>
                )}

                {selectedTool === 'runway-fov' && (
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-4">
                      Click below to open the interactive runway FoV calculator in a new window.
                    </p>
                    <a
                      href="/tools/runway-fov.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-accent text-background font-medium rounded hover:bg-accent/90 transition-colors"
                    >
                      Open Runway FoV Calculator
                    </a>
                  </div>
                )}

                {selectedTool === 'm6-bolt' && (
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-4">
                      Click below to open the interactive M6 bolt analysis in a new window.
                    </p>
                    <a
                      href="/tools/m6-bolt.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-accent text-background font-medium rounded hover:bg-accent/90 transition-colors"
                    >
                      Open M6 Bolt Analysis
                    </a>
                  </div>
                )}

                {selectedTool === 'mass-calculator' && (
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-foreground/60 mb-4">
                      Click below to open the CAD mass calculator in a new window.
                    </p>
                    <a
                      href="/tools/mass-calculator.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-accent text-background font-medium rounded hover:bg-accent/90 transition-colors"
                    >
                      Open Mass Calculator
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
