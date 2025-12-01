export default function Experience() {
  const experiences = [
    {
      title: 'Systems Engineer',
      company: 'Eon Space Labs',
      period: 'Aug 2025 – Present',
      description: 'Responsible for end-to-end systems engineering across all products.',
      highlights: [
        'Improved India\'s lightest space telescope by achieving an additional 16% mass reduction through structural optimisation',
        'Oversaw assembly, integration, and testing of the company\'s star tracker and space telescope, ensuring system-level readiness',
        'Performed structural and thermal simulations for multiple space and aerial platforms to validate performance and reliability',
        'Lead engineer for the in-house pan-tilt system developed for ground-based defence and tracking applications'
      ]
    },
    {
      title: 'Project Trainee — Thermal Systems Group',
      company: 'U R Rao Satellite Centre (URSC), ISRO, Bengaluru',
      period: 'Jan 2025 – Jun 2025',
      description: 'Worked on advanced spacecraft thermal management and atmospheric entry simulations.',
      highlights: [
        'Developed aerobraking control strategies for upcoming interplanetary missions; the work was recognised by mentors as foundational for future models',
        'Built a comprehensive simulation framework integrating DSMC aerothermal analysis, orbital mechanics, and thermal modelling for accurate prediction of spacecraft behaviour during aerobraking',
        'Conducted extensive parametric studies to quantify the influence of angle of attack, atmospheric density, and gas–surface accommodation on aerodynamic forces and thermal loads',
        'Implemented preventive control methods at apoapsis and reactive strategies during atmospheric passage to enhance mission safety and efficiency'
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">Experience</h2>
            <div className="w-12 h-px bg-accent/50 mb-8"></div>
          </div>

          <div className="md:col-span-2 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l border-foreground/10 pl-8 relative">
                <div className="absolute -left-3 top-0 w-4 h-4 bg-accent rounded-full"></div>
                <p className="text-foreground/60 mb-2">{exp.company}</p>
                <p className="text-sm text-accent font-semibold tracking-wide mb-2">{exp.period}</p>
                <h3 className="font-semibold text-lg mb-4">{exp.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70">
                      <span className="text-accent mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
