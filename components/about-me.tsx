export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">About Me</h2>
            <div className="w-12 h-px bg-accent/50 mb-8"></div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-5 text-foreground/80 leading-relaxed">
              <p>
                I am an aerospace engineer with a deep passion for building, testing, and understanding complex systems. Over the years, I have gained hands-on experience across propulsion, thermal systems, aerodynamics, structures, CFD and DSMC simulations, payload development, and systems engineering.
              </p>
              
              <p>
                I am driven by challenging environments and roles, which is why my work spans leading India's first student-built supersonic rocket, developing aerobraking strategies at ISRO, and engineering advanced space hardware at Eon Space Labs.
              </p>
              
              <p>
                My focus is simple: to create reliable, high-performance engineering solutions that push boundaries, whether it involves reducing spacecraft mass, simulating extreme atmospheric conditions, or designing systems that perform flawlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
