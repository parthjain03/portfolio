'use client'

export default function Patents() {
  const patents = [
    {
      title: 'Sounding Rocket Device with Fin and Motor Alignment Attachment',
      applicationNumber: '202441075844',
      status: 'Application Awaiting Examination',
      description: 'Innovative attachment mechanism for precise fin and motor alignment in high-performance sounding rockets'
    }
  ]

  return (
    <section id="patents" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">Patents</h2>
            <div className="w-12 h-px bg-accent/50 mb-8"></div>
          </div>

          <div className="md:col-span-2 space-y-8">
            {patents.map((patent, index) => (
              <div key={index} className="pb-8 border-b border-foreground/10 last:border-b-0">
                <p className="text-sm text-accent font-semibold tracking-wide mb-3">Published Patent</p>
                <h3 className="font-semibold text-lg mb-2">{patent.title}</h3>
                <p className="text-foreground/70 mb-3">{patent.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/60">
                    <span className="font-semibold">Application Number:</span> {patent.applicationNumber}
                  </p>
                  <p className="text-sm text-foreground/60">
                    <span className="font-semibold">Status:</span> {patent.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
