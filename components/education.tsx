export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology, Aeronautical Engineering',
      institution: 'Manipal Institute of Technology, Manipal, India',
      year: '2021–2025',
      details: 'Minor: Digital Marketing'
    }
  ]

  const technicalActivities = [
    {
      title: 'Team Leader & Structural Design Engineer',
      organization: 'thrustMIT — Student Rocketry Team',
      period: '2021–2024',
      description: 'Led a 54-member cross-functional team across mechanical, avionics, management and payload subsystems.',
      highlights: [
        'Project Manager and Structural Lead for Project AgniAstra — achieved Mach 1.7 and 17,010 ft apogee; India\'s first student-built rocket to break the sound barrier at Spaceport America Cup 2024',
        'Supported Project Altair, which achieved 10,331 ft nominal flight at Spaceport America Cup 2023',
        'Developed CO₂-based deployment mechanisms and contributed to composite structural design and fabrication'
      ]
    }
  ]

  return (
    <section id="education" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Academic Education */}
        <div>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Education</h2>
              <div className="w-12 h-px bg-accent/50 mb-8"></div>
            </div>

            <div className="md:col-span-2 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="pb-8 border-b border-foreground/10 last:border-b-0">
                  <div>
                    <p className="text-sm text-accent font-semibold tracking-wide mb-1">{edu.year}</p>
                    <h3 className="font-semibold text-lg mb-1">{edu.degree}</h3>
                    <p className="text-foreground/70 mb-2">{edu.institution}</p>
                    <p className="text-foreground/60">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Activities */}
        <div>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Technical Activities</h2>
              <div className="w-12 h-px bg-accent/50 mb-8"></div>
            </div>

            <div className="md:col-span-2 space-y-12">
              {technicalActivities.map((activity, index) => (
                <div key={index} className="pb-12 border-b border-foreground/10 last:border-b-0">
                  <div>
                    <p className="text-sm text-accent font-semibold tracking-wide mb-1">{activity.period}</p>
                    <h3 className="font-semibold text-lg mb-1">{activity.title}</h3>
                    <p className="text-foreground/60 mb-3">{activity.organization}</p>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-4">{activity.description}</p>
                  <ul className="space-y-3">
                    {activity.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                        <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
