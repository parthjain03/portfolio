export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">About</h2>
            <div className="w-12 h-px bg-accent/50 mb-8"></div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              With extensive experience in aerospace engineering, I specialize in designing and analyzing complex systems that push the boundaries of flight. My work spans from aerodynamics and propulsion systems to structural analysis and flight dynamics.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm passionate about leveraging cutting-edge technology and computational methods to solve real-world challenges in aerospace. My approach combines rigorous engineering principles with innovative thinking to deliver efficient and elegant solutions.
            </p>

            <div className="pt-8">
              <h3 className="font-semibold text-foreground mb-4">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Aerodynamic Design',
                  'Structural Analysis',
                  'CFD Simulation',
                  'Flight Dynamics',
                  'Propulsion Systems',
                  'CATIA & ANSYS',
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent/50"></div>
                    <span className="text-foreground/70">{skill}</span>
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
