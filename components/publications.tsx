'use client'

export default function Publications() {
  const publications = [
    {
      type: 'Conference Paper',
      title: 'Predictive Thermal Control Strategies for Aerobraking: Peak Temperature Forecasting and Adaptive Maneuvers',
      conference: '28th National and 6th International ISHMT–ASTFE Heat and Mass Transfer Conference',
      status: 'Accepted',
      description: 'A study on forecasting peak thermal loads during aerobraking and developing adaptive control strategies to ensure spacecraft survivability and efficiency during atmospheric passes.'
    }
  ]

  const patents = [
    {
      type: 'Patent',
      title: 'Sounding Rocket Device with Fin and Motor Alignment Attachment',
      applicationNumber: '202441075844',
      status: 'Application Awaiting Examination',
      description: 'Innovative attachment mechanism for precise fin and motor alignment in high-performance sounding rockets'
    }
  ]

  return (
    <section id="publications" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">Publications & Research</h2>
            <div className="w-12 h-px bg-accent/50 mb-8"></div>
          </div>

          <div className="md:col-span-2 space-y-12">
            {/* Conference Papers */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground/80">Conference Papers</h3>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div key={index} className="pb-6 border-b border-foreground/10 last:border-b-0">
                    <p className="text-sm text-accent font-semibold tracking-wide mb-2">{pub.status}</p>
                    <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                    <p className="text-foreground/70 text-sm mb-3">{pub.conference}</p>
                    <p className="text-foreground/60 text-sm">{pub.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Patents */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground/80">Patents</h3>
              <div className="space-y-6">
                {patents.map((patent, index) => (
                  <div key={index} className="pb-6 border-b border-foreground/10 last:border-b-0">
                    <p className="text-sm text-accent font-semibold tracking-wide mb-2">{patent.status}</p>
                    <h4 className="font-semibold text-lg mb-2">{patent.title}</h4>
                    <p className="text-foreground/60 text-sm mb-3">
                      <span className="font-semibold">Application Number:</span> {patent.applicationNumber}
                    </p>
                    <p className="text-foreground/60 text-sm">{patent.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
